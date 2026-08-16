const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface DeliverReadingInput {
  request_id: string;
  email: string;
  turnstile_token?: string;
}

type DeliveryParseResult =
  | { ok: true; value: DeliverReadingInput }
  | { ok: false; error: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export function parseDeliverReadingInput(value: unknown): DeliveryParseResult {
  if (!isRecord(value)) return { ok: false, error: "Request body must be a JSON object" };

  const requestId = value.request_id;
  if (typeof requestId !== "string" || !/^[0-9a-f-]{36}$/i.test(requestId)) {
    return { ok: false, error: "request_id is invalid" };
  }

  const email = value.email;
  if (typeof email !== "string") return { ok: false, error: "email is required" };
  const normalizedEmail = email.trim().toLowerCase();
  if (normalizedEmail.length > 254 || !EMAIL_PATTERN.test(normalizedEmail)) {
    return { ok: false, error: "email is invalid" };
  }

  const token = value.turnstile_token;
  if (token !== undefined && (typeof token !== "string" || token.length > 2048)) {
    return { ok: false, error: "turnstile_token is invalid" };
  }

  return {
    ok: true,
    value: {
      request_id: requestId,
      email: normalizedEmail,
      ...(typeof token === "string" && token.length > 0 ? { turnstile_token: token } : {}),
    },
  };
}
