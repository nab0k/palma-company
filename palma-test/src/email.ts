import type { PalmaReading } from "./schema";

const escapeHtml = (value: string): string => value
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const humanize = (value: string): string => value.replaceAll("_", " ");

export function renderReadingEmail(reading: PalmaReading): string {
  const dimensions = reading.dimensions.map((dimension, index) => `
    <tr><td style="padding:24px 0;border-top:1px solid #c8c2b7;vertical-align:top;width:42px;color:#ef5635;font:12px monospace">0${index + 1}</td>
    <td style="padding:24px 0;border-top:1px solid #c8c2b7">
      <div style="font:12px monospace;text-transform:uppercase;letter-spacing:.08em;color:#ef5635">${escapeHtml(dimension.signal)}</div>
      <h3 style="margin:8px 0 10px;font:26px Georgia,serif;color:#0b1713">${escapeHtml(dimension.question)}</h3>
      <p style="margin:0 0 8px;line-height:1.55;color:#36413d">${escapeHtml(dimension.observation)}</p>
      <p style="margin:0;line-height:1.55;color:#69716e"><strong>Still to learn:</strong> ${escapeHtml(dimension.missing_information)}</p>
    </td></tr>`).join("");

  return `<!doctype html><html><body style="margin:0;background:#f0ede5;color:#0b1713">
    <div style="max-width:720px;margin:0 auto;padding:36px 22px;font:15px Arial,sans-serif">
      <div style="padding:18px 22px;background:#0b1713;color:#f0ede5;font:22px Georgia,serif">Palma<span style="color:#ef5635">.</span></div>
      <div style="padding:44px 34px;background:#ef5635;border:1px solid #0b1713">
        <div style="font:11px monospace;text-transform:uppercase;letter-spacing:.1em">Your Palma Reading · ${escapeHtml(humanize(reading.relationship_type))}</div>
        <h1 style="margin:42px 0 18px;font:42px/1 Georgia,serif">${escapeHtml(reading.reading_title)}</h1>
        <p style="margin:0;font:20px/1.35 Georgia,serif">${escapeHtml(reading.one_sentence_reading)}</p>
      </div>
      <div style="padding:34px;background:#f7f4ed;border:1px solid #0b1713;border-top:0">
        <p style="margin:0 0 24px;line-height:1.55"><strong>The central tension</strong><br>${escapeHtml(reading.central_tension)}</p>
        <p style="margin:0;line-height:1.55"><strong>Why this reading</strong><br>${escapeHtml(reading.relationship_type_reason)}</p>
        <table role="presentation" style="width:100%;border-collapse:collapse;margin-top:34px">${dimensions}</table>
        <div style="margin:34px -34px 0;padding:34px;background:#ef5635;border-top:1px solid #0b1713;border-bottom:1px solid #0b1713">
          <div style="font:11px monospace;text-transform:uppercase;letter-spacing:.1em">The decision</div>
          <p style="margin:20px 0 0;font:28px/1.2 Georgia,serif">${escapeHtml(reading.decision_to_make)}</p>
        </div>
        <div style="padding-top:34px">
          <div style="font:11px monospace;text-transform:uppercase;letter-spacing:.1em;color:#ef5635">30-day experiment</div>
          <h2 style="margin:14px 0;font:28px Georgia,serif">${escapeHtml(reading.thirty_day_experiment.name)}</h2>
          <p style="line-height:1.55">${escapeHtml(reading.thirty_day_experiment.action)}</p>
          <p style="line-height:1.55"><strong>Evidence to watch:</strong> ${escapeHtml(reading.thirty_day_experiment.evidence_to_watch)}</p>
        </div>
        <p style="margin:34px 0 0;padding-top:24px;border-top:1px solid #c8c2b7;color:#69716e;font-size:12px;line-height:1.5">${escapeHtml(reading.limits_of_this_reading)}</p>
      </div>
      <p style="margin:22px 0;color:#69716e;font-size:12px;line-height:1.5">This reading was requested through Palma Test. Reply to this email if you want to examine the decision with Serhii Nabok. Your result and delivery address are automatically deleted from the test database after seven days.</p>
    </div></body></html>`;
}

interface ZohoTokenResponse { access_token?: string; error?: string }
interface ZohoSendResponse { status?: { code?: number; description?: string }; data?: unknown }

async function boundedJson<T>(response: Response, maxBytes = 131_072): Promise<T | null> {
  const length = Number(response.headers.get("Content-Length") ?? "0");
  if (length > maxBytes) return null;
  const text = await response.text();
  if (new TextEncoder().encode(text).byteLength > maxBytes) return null;
  try { return JSON.parse(text) as T; } catch { return null; }
}

export async function sendReadingEmail(env: Env, recipient: string, reading: PalmaReading): Promise<void> {
  if (!env.ZOHO_ACCOUNT_ID.trim()) throw new Error("zoho_account_not_configured");

  const tokenBody = new URLSearchParams({
    refresh_token: env.ZOHO_REFRESH_TOKEN,
    client_id: env.ZOHO_CLIENT_ID,
    client_secret: env.ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });
  const tokenResponse = await fetch(
    `${env.ZOHO_ACCOUNTS_BASE}/oauth/v2/token?${tokenBody.toString()}`,
    {
    method: "POST",
    signal: AbortSignal.timeout(10_000),
    },
  );
  const token = await boundedJson<ZohoTokenResponse>(tokenResponse);
  if (!tokenResponse.ok || !token?.access_token) throw new Error(`zoho_token_${token?.error ?? tokenResponse.status}`);

  const sendResponse = await fetch(
    `${env.ZOHO_MAIL_BASE}/api/accounts/${encodeURIComponent(env.ZOHO_ACCOUNT_ID)}/messages`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Zoho-oauthtoken ${token.access_token}`,
      },
      body: JSON.stringify({
        fromAddress: env.MAIL_FROM_ADDRESS,
        toAddress: recipient,
        subject: `Your Palma Reading — ${reading.reading_title}`,
        content: renderReadingEmail(reading),
        mailFormat: "html",
        encoding: "UTF-8",
        askReceipt: "no",
      }),
      signal: AbortSignal.timeout(15_000),
    },
  );
  const sent = await boundedJson<ZohoSendResponse>(sendResponse);
  const zohoCode = sent?.status?.code;
  if (!sendResponse.ok || (typeof zohoCode === "number" && zohoCode >= 400)) {
    throw new Error(`zoho_send_${zohoCode ?? sendResponse.status}`);
  }
}
