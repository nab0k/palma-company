import { METHOD_VERSION } from "./method";
import { parseDeliverReadingInput } from "./delivery";
import { sendReadingEmail } from "./email";
import { buildSystemPrompt, buildUserPrompt } from "./prompt";
import {
  PALMA_READING_JSON_SCHEMA,
  normalizePalmaReading,
  parseAnalyzeInput,
  type AnalyzeInput,
  type PalmaReading,
  validatePalmaReading,
} from "./schema";
import {
  claimDelivery,
  deleteExpiredReadings,
  getStoredReading,
  markDelivered,
  markDeliveryFailed,
  storeReading,
} from "./storage";
import { verifyTurnstile } from "./turnstile";

const MODEL = "@cf/qwen/qwen3-30b-a3b-fp8";
const MAX_BODY_BYTES = 16_384;
const MAX_DELIVERY_BODY_BYTES = 4_096;

type ApiError = { error: { code: string; message: string; request_id: string } };

function allowedOrigin(request: Request, env: Env): string | null {
  const origin = request.headers.get("Origin");
  if (!origin) return null;
  if (origin === new URL(request.url).origin) return origin;
  const allowed = env.ALLOWED_ORIGINS.split(",").map((item) => item.trim());
  return allowed.includes(origin) ? origin : null;
}

function headersFor(request: Request, env: Env): Headers {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });
  const origin = allowedOrigin(request, env);
  if (origin) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Vary", "Origin");
  }
  return headers;
}

function json(request: Request, env: Env, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: headersFor(request, env) });
}

function apiError(request: Request, env: Env, requestId: string, code: string, message: string, status: number): Response {
  const body: ApiError = { error: { code, message, request_id: requestId } };
  return json(request, env, body, status);
}

async function actorKey(request: Request, route: string): Promise<string> {
  const source = [
    route,
    request.headers.get("CF-Connecting-IP") ?? "local",
    request.headers.get("User-Agent") ?? "unknown",
  ].join("|");
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(source));
  return Array.from(new Uint8Array(digest).slice(0, 12), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function turnstileToken(value: unknown): string | undefined {
  if (typeof value !== "object" || value === null || !("turnstile_token" in value)) return undefined;
  const token = value.turnstile_token;
  return typeof token === "string" && token.length <= 2048 ? token : undefined;
}

async function parseBoundedJson(
  request: Request,
  maxBytes: number,
): Promise<{ ok: true; value: unknown } | { ok: false; code: string; message: string; status: number }> {
  const contentType = request.headers.get("Content-Type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return { ok: false, code: "unsupported_media_type", message: "Content-Type must be application/json", status: 415 };
  }
  const declaredLength = Number(request.headers.get("Content-Length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    return { ok: false, code: "body_too_large", message: "Request body is too large", status: 413 };
  }
  const bodyText = await request.text();
  if (new TextEncoder().encode(bodyText).byteLength > maxBytes) {
    return { ok: false, code: "body_too_large", message: "Request body is too large", status: 413 };
  }
  try {
    return { ok: true, value: JSON.parse(bodyText) as unknown };
  } catch {
    return { ok: false, code: "invalid_json", message: "Request body is not valid JSON", status: 400 };
  }
}

function extractResponse(result: unknown): unknown {
  if (typeof result !== "object" || result === null || !("response" in result)) return null;
  const response = result.response;
  if (typeof response !== "string") return response;
  try {
    return JSON.parse(response) as unknown;
  } catch {
    return null;
  }
}

function modelOptions(system: string, user: string) {
  return {
    messages: [
      { role: "system" as const, content: system },
      { role: "user" as const, content: user },
    ],
    temperature: 0.2,
    max_tokens: 2400,
    response_format: {
      type: "json_schema" as const,
      json_schema: {
        name: "palma_reading",
        strict: true,
        schema: PALMA_READING_JSON_SCHEMA,
      },
    },
  };
}

function hasCommunityDestinationBias(input: AnalyzeInput, reading: PalmaReading): boolean {
  const strategicText = [
    reading.central_tension,
    reading.decision_to_make,
    reading.one_sentence_reading,
    reading.relationship_type_reason,
    reading.limits_of_this_reading,
  ].join(" ").toLowerCase();
  const communityIsRequested = input.desired_change?.toLowerCase().includes("communit") ?? false;
  return (
    !communityIsRequested &&
    (/\b(?:transition|evolve|become|turn)\b.{0,80}\bcommunit/.test(strategicText) ||
      /\bcommunit(?:y|ies)\b.{0,50}\b(?:next|future|potential|higher)/.test(strategicText) ||
      strategicText.includes("higher-order"))
  );
}

const GUARDED_COPY = {
  en: {
    central_tension: "Several possible outcomes are on the table, while the relationship behind them is still poorly understood.",
    decision_to_make: "Choose which need, offer and form of relationship deserve a real-world test before committing to production or scale.",
    one_sentence_reading: "There is an audience; the useful next evidence is who returns, what they trust the practice to do, and what commitment they are ready to make.",
    relationship_type_reason: "The submission establishes that an audience exists. It does not yet establish another form of relationship.",
    unknown_observation: "The submission contains no direct evidence for this lens, so its current condition remains open.",
  },
  ru: {
    central_tension: "Возможных направлений несколько, а сами отношения с аудиторией пока изучены недостаточно.",
    decision_to_make: "Выбрать, какую потребность, предложение и форму отношений стоит проверить до вложений в продакшен или масштабирование.",
    one_sentence_reading: "Аудитория уже есть; теперь важно увидеть, кто возвращается, в чём доверяет практике и на какое действие готов.",
    relationship_type_reason: "Из описания ясно, что аудитория существует. Другую форму отношений имеющиеся данные пока не подтверждают.",
    unknown_observation: "В описании нет прямых данных по этому вопросу, поэтому состояние этой стороны отношений пока остаётся открытым.",
  },
  uk: {
    central_tension: "Можливих напрямів кілька, а самі відносини з аудиторією поки вивчені недостатньо.",
    decision_to_make: "Обрати, яку потребу, пропозицію та форму відносин варто перевірити до інвестицій у продакшен або масштабування.",
    one_sentence_reading: "Аудиторія вже є; тепер важливо побачити, хто повертається, у чому довіряє практиці та до якої дії готовий.",
    relationship_type_reason: "З опису зрозуміло, що аудиторія існує. Іншу форму відносин наявні дані поки не підтверджують.",
    unknown_observation: "В описі немає прямих даних щодо цього питання, тому стан цієї сторони відносин поки залишається відкритим.",
  },
} as const;

export function applyEpistemicGuardrails(input: AnalyzeInput, reading: PalmaReading): PalmaReading {
  const copy = GUARDED_COPY[input.language];
  const dimensions = reading.dimensions.map((dimension) =>
    dimension.signal === "unknown"
      ? { ...dimension, evidence: [], observation: copy.unknown_observation }
      : dimension,
  );
  const noDirectEvidence = dimensions.every((dimension) => dimension.evidence.length === 0);
  const communityBias = hasCommunityDestinationBias(input, reading);

  return {
    ...reading,
    dimensions,
    ...(communityBias ? {
      central_tension: copy.central_tension,
      decision_to_make: copy.decision_to_make,
      one_sentence_reading: copy.one_sentence_reading,
    } : {}),
    ...(noDirectEvidence && reading.relationship_type === "audience"
      ? { relationship_type_reason: copy.relationship_type_reason }
      : {}),
  };
}

export function readingQualityIssues(input: AnalyzeInput, reading: PalmaReading): string[] {
  const issues: string[] = [];

  if (hasCommunityDestinationBias(input, reading)) {
    issues.push("community_as_default_destination");
  }

  const directEvidenceCount = reading.dimensions.reduce((count, dimension) => count + dimension.evidence.length, 0);
  const strategicText = [
    reading.central_tension,
    reading.decision_to_make,
    reading.one_sentence_reading,
    reading.relationship_type_reason,
    reading.limits_of_this_reading,
  ].join(" ").toLowerCase();
  const allText = [
    strategicText,
    ...reading.dimensions.map((dimension) => dimension.observation.toLowerCase()),
  ].join(" ");
  if (
    directEvidenceCount === 0 &&
    /\b(?:passive|one-sided|one-way content|content delivery|receives content|lacks cohesion)\b/.test(allText)
  ) {
    issues.push("absence_of_evidence_treated_as_negative_evidence");
  }

  return issues;
}

function buildRepairPrompt(input: AnalyzeInput, draft: PalmaReading, issues: string[]): string {
  return JSON.stringify({
    task: "Repair the draft Palma reading. Return the complete JSON object again.",
    violations: issues,
    repair_rules: [
      "Missing evidence means unknown; it does not prove passivity, one-sidedness, or failure.",
      "Do not make community the destination unless desired_change explicitly asks for it.",
      "The decision must serve desired_change and choose what needs to be learned or tested next.",
      "Preserve supported facts, the six canonical questions, and the required JSON structure.",
    ],
    submission: input,
    draft,
  });
}

async function analyze(request: Request, env: Env, ctx: ExecutionContext, requestId: string): Promise<Response> {
  const raw = await parseBoundedJson(request, MAX_BODY_BYTES);
  if (!raw.ok) return apiError(request, env, requestId, raw.code, raw.message, raw.status);
  const rawInput = raw.value;

  if (!await verifyTurnstile(request, env, turnstileToken(rawInput), "analyze")) {
    return apiError(request, env, requestId, "verification_failed", "Please complete the verification and try again.", 403);
  }

  const parsed = parseAnalyzeInput(rawInput);
  if (!parsed.ok) return apiError(request, env, requestId, "invalid_input", parsed.error, 400);

  const startedAt = Date.now();
  const systemPrompt = buildSystemPrompt(parsed.value.language);
  const result = await env.AI.run(MODEL, modelOptions(systemPrompt, buildUserPrompt(parsed.value)));

  const initialCandidate = normalizePalmaReading(extractResponse(result));
  if (!validatePalmaReading(initialCandidate)) {
    console.error(JSON.stringify({ event: "invalid_ai_response", request_id: requestId, model: MODEL }));
    return apiError(request, env, requestId, "invalid_model_response", "The reading could not be completed. Please try again.", 502);
  }
  let reading: PalmaReading = applyEpistemicGuardrails(parsed.value, initialCandidate);

  let qualityIssues = readingQualityIssues(parsed.value, reading);
  let repaired = false;
  if (qualityIssues.length > 0) {
    const repairResult = await env.AI.run(
      MODEL,
      modelOptions(systemPrompt, buildRepairPrompt(parsed.value, reading, qualityIssues)),
    );
    const repairedCandidate = normalizePalmaReading(extractResponse(repairResult));
    repaired = true;
    if (!validatePalmaReading(repairedCandidate)) {
      console.error(JSON.stringify({
        event: "invalid_ai_repair",
        request_id: requestId,
        model: MODEL,
        issue_codes: qualityIssues,
      }));
      return apiError(request, env, requestId, "invalid_model_response", "The reading could not be completed. Please try again.", 502);
    }
    reading = applyEpistemicGuardrails(parsed.value, repairedCandidate);
    qualityIssues = readingQualityIssues(parsed.value, reading);
    if (qualityIssues.length > 0) {
      console.error(JSON.stringify({
        event: "ai_repair_failed_quality_gate",
        request_id: requestId,
        model: MODEL,
        issue_codes: qualityIssues,
      }));
      return apiError(request, env, requestId, "invalid_model_response", "The reading could not be completed. Please try again.", 502);
    }
  }

  console.log(JSON.stringify({
    event: "analysis_complete",
    request_id: requestId,
    model: MODEL,
    method_version: METHOD_VERSION,
    duration_ms: Date.now() - startedAt,
    repaired,
  }));

  const ttlDays = Math.max(1, Math.min(30, Number(env.READING_TTL_DAYS) || 7));
  const now = Date.now();
  await storeReading(env.READINGS_DB, requestId, METHOD_VERSION, reading, now, ttlDays);
  ctx.waitUntil(deleteExpiredReadings(env.READINGS_DB, now).catch((error: unknown) => {
    console.error(JSON.stringify({
      event: "expired_reading_cleanup_failed",
      error: error instanceof Error ? error.message : "Unknown error",
    }));
  }));
  return json(request, env, { request_id: requestId, method_version: METHOD_VERSION, reading });
}

async function deliverReading(request: Request, env: Env, requestId: string): Promise<Response> {
  const raw = await parseBoundedJson(request, MAX_DELIVERY_BODY_BYTES);
  if (!raw.ok) return apiError(request, env, requestId, raw.code, raw.message, raw.status);
  const parsed = parseDeliverReadingInput(raw.value);
  if (!parsed.ok) return apiError(request, env, requestId, "invalid_input", parsed.error, 400);

  if (!await verifyTurnstile(request, env, parsed.value.turnstile_token, "deliver")) {
    return apiError(request, env, requestId, "verification_failed", "Please complete the verification and try again.", 403);
  }

  const now = Date.now();
  const stored = await getStoredReading(env.READINGS_DB, parsed.value.request_id, now);
  if (!stored) {
    return apiError(request, env, requestId, "reading_not_found", "This reading has expired or could not be found.", 404);
  }
  if (stored.delivery_status === "sent") {
    if (stored.delivered_to === parsed.value.email) {
      return json(request, env, { request_id: requestId, delivered: true, already_delivered: true });
    }
    return apiError(request, env, requestId, "already_delivered", "This reading has already been delivered.", 409);
  }

  const claimed = await claimDelivery(env.READINGS_DB, stored.id, parsed.value.email, now);
  if (!claimed) {
    return apiError(request, env, requestId, "delivery_in_progress", "Delivery is already in progress. Please wait a moment.", 409);
  }

  const hostname = new URL(request.url).hostname;
  const localPreview = (hostname === "localhost" || hostname === "127.0.0.1") && !env.ZOHO_ACCOUNT_ID.trim();
  if (localPreview) {
    await markDelivered(env.READINGS_DB, stored.id, parsed.value.email, Date.now());
    return json(request, env, { request_id: requestId, delivered: true, preview_only: true });
  }

  try {
    await sendReadingEmail(env, parsed.value.email, stored.reading);
    await markDelivered(env.READINGS_DB, stored.id, parsed.value.email, Date.now());
  } catch (error) {
    const code = error instanceof Error ? error.message : "unknown_delivery_error";
    await markDeliveryFailed(env.READINGS_DB, stored.id, code);
    console.error(JSON.stringify({ event: "email_delivery_failed", request_id: requestId, error_code: code }));
    return apiError(request, env, requestId, "delivery_failed", "The email could not be sent. Please try again.", 502);
  }

  console.log(JSON.stringify({ event: "email_delivered", request_id: requestId, reading_id: stored.id }));
  return json(request, env, { request_id: requestId, delivered: true });
}

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const requestId = crypto.randomUUID();
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      if (request.headers.has("Origin") && !allowedOrigin(request, env)) {
        return apiError(request, env, requestId, "origin_not_allowed", "Origin is not allowed", 403);
      }
      return new Response(null, { status: 204, headers: headersFor(request, env) });
    }

    if (request.method === "GET" && url.pathname === "/health") {
      return json(request, env, {
        ok: true,
        model: MODEL,
        method_version: METHOD_VERSION,
        email_delivery_configured: Boolean(env.ZOHO_ACCOUNT_ID.trim()),
        turnstile_enabled: Boolean(env.TURNSTILE_SITE_KEY.trim()),
      });
    }

    if (request.method === "GET" && url.pathname === "/preview-reading") {
      const localHost = url.hostname === "localhost" || url.hostname === "127.0.0.1";
      const previewId = url.searchParams.get("id") ?? "";
      if (!localHost || !/^[0-9a-f-]{36}$/i.test(previewId)) {
        return apiError(request, env, requestId, "not_found", "Not found", 404);
      }
      const stored = await getStoredReading(env.READINGS_DB, previewId, Date.now());
      if (!stored) return apiError(request, env, requestId, "reading_not_found", "Reading not found", 404);
      return json(request, env, { request_id: stored.id, reading: stored.reading });
    }

    if (request.method === "POST" && url.pathname === "/analyze") {
      if (request.headers.has("Origin") && !allowedOrigin(request, env)) {
        return apiError(request, env, requestId, "origin_not_allowed", "Origin is not allowed", 403);
      }
      try {
        const limit = await env.ANALYZE_RATE_LIMITER.limit({ key: await actorKey(request, "analyze") });
        if (!limit.success) return apiError(request, env, requestId, "rate_limited", "Please wait a minute before trying again.", 429);
        return await analyze(request, env, ctx, requestId);
      } catch (error) {
        console.error(JSON.stringify({
          event: "analysis_failed",
          request_id: requestId,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
        return apiError(request, env, requestId, "internal_error", "The reading could not be completed. Please try again.", 500);
      }
    }

    if (request.method === "POST" && url.pathname === "/deliver-reading") {
      if (request.headers.has("Origin") && !allowedOrigin(request, env)) {
        return apiError(request, env, requestId, "origin_not_allowed", "Origin is not allowed", 403);
      }
      try {
        const limit = await env.DELIVERY_RATE_LIMITER.limit({ key: await actorKey(request, "deliver") });
        if (!limit.success) return apiError(request, env, requestId, "rate_limited", "Please wait a minute before trying again.", 429);
        return await deliverReading(request, env, requestId);
      } catch (error) {
        console.error(JSON.stringify({
          event: "delivery_failed",
          request_id: requestId,
          error: error instanceof Error ? error.message : "Unknown error",
        }));
        return apiError(request, env, requestId, "internal_error", "The email could not be sent. Please try again.", 500);
      }
    }

    return apiError(request, env, requestId, "not_found", "Not found", 404);
  },
  async scheduled(_controller, env, ctx): Promise<void> {
    ctx.waitUntil(deleteExpiredReadings(env.READINGS_DB, Date.now()).catch((error: unknown) => {
      console.error(JSON.stringify({
        event: "scheduled_reading_cleanup_failed",
        error: error instanceof Error ? error.message : "Unknown error",
      }));
    }));
  },
} satisfies ExportedHandler<Env>;
