import { readFile, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";

const AUTH_PATH = "/tmp/palma-zoho-auth.json";
const SECRETS_PATH = "/tmp/palma-worker-secrets.json";
const ACCOUNT_PATH = "/tmp/palma-zoho-account-id.txt";
const SENDER = "nabok@palma.company";

const auth = JSON.parse(await readFile(AUTH_PATH, "utf8"));

function requestJson(args) {
  const result = spawnSync("curl", ["--max-time", "20", "--silent", "--show-error", ...args], {
    encoding: "utf8",
  });
  if (result.status !== 0) {
    console.error(JSON.stringify({ ok: false, stage: "network", exit_code: result.status }));
    process.exit(1);
  }
  return JSON.parse(result.stdout);
}

const tokenBody = new URLSearchParams({
  code: auth.code,
  client_id: auth.clientId,
  client_secret: auth.clientSecret,
  grant_type: "authorization_code",
});

const token = requestJson([
  "--request", "POST",
  `https://accounts.zoho.eu/oauth/v2/token?${tokenBody.toString()}`,
]);
if (!token.access_token || !token.refresh_token) {
  console.error(JSON.stringify({ ok: false, stage: "token", error: token.error ?? "unknown" }));
  process.exit(1);
}

await writeFile(SECRETS_PATH, JSON.stringify({
  ZOHO_CLIENT_ID: auth.clientId,
  ZOHO_CLIENT_SECRET: auth.clientSecret,
  ZOHO_REFRESH_TOKEN: token.refresh_token,
}), { mode: 0o600 });

const accounts = requestJson([
  "--header", `Authorization: Zoho-oauthtoken ${token.access_token}`,
  "--header", "Accept: application/json",
  "https://mail.zoho.eu/api/accounts",
]);
if (!Array.isArray(accounts.data)) {
  console.error(JSON.stringify({ ok: false, stage: "accounts", error: accounts.errorCode ?? "unknown", mail_token_saved: true }));
  process.exit(1);
}

const sender = accounts.data.find((account) => {
  const addresses = [account.emailAddress, account.primaryEmailAddress, account.mailboxAddress]
    .filter((value) => typeof value === "string")
    .map((value) => value.toLowerCase());
  return addresses.includes(SENDER);
});
const accountId = sender?.accountId ?? sender?.accountID;
if (!accountId) {
  console.error(JSON.stringify({ ok: false, stage: "sender_account", account_count: accounts.data.length }));
  process.exit(1);
}

await writeFile(ACCOUNT_PATH, String(accountId), { mode: 0o600 });
console.log(JSON.stringify({ ok: true, account_id: String(accountId), sender: SENDER }));
