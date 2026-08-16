interface TurnstileResponse {
  success?: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
}

export async function verifyTurnstile(
  request: Request,
  env: Env,
  token: string | undefined,
  expectedAction: "analyze" | "deliver",
): Promise<boolean> {
  if (!env.TURNSTILE_SITE_KEY.trim() || !env.TURNSTILE_SECRET.trim()) return true;
  if (!token) return false;

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET,
      response: token,
      remoteip: request.headers.get("CF-Connecting-IP") ?? undefined,
      idempotency_key: crypto.randomUUID(),
    }),
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) return false;
  const result = await response.json<TurnstileResponse>();
  return result.success === true && result.action === expectedAction;
}
