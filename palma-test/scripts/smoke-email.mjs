const BASE_URL = process.env.PALMA_TEST_URL ?? "https://palma-test.nabokmanberstein.workers.dev";
const RECIPIENT = process.env.PALMA_TEST_RECIPIENT ?? "nabok@palma.company";

const healthResponse = await fetch(`${BASE_URL}/health`);
const health = await healthResponse.json();
if (!healthResponse.ok || health.email_delivery_configured !== true) {
  throw new Error("production health check did not confirm email delivery");
}

const analyzeResponse = await fetch(`${BASE_URL}/analyze`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    situation: "A founder has an established audience of owners and senior managers. Some people reply with detailed questions and introduce colleagues, but participation is irregular, members do not yet shape the agenda, and there is no shared rhythm or clear boundary around who belongs.",
    desired_change: "Understand whether this relationship can support advisory work and what decision should be tested next without assuming that a community is the answer.",
    organization: "Palma",
    role: "Founder",
    language: "en",
  }),
});
const analyzed = await analyzeResponse.json();
if (!analyzeResponse.ok || !analyzed.request_id || !analyzed.reading) {
  throw new Error(analyzed?.error?.message ?? "production analysis failed");
}

const deliveryResponse = await fetch(`${BASE_URL}/deliver-reading`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ request_id: analyzed.request_id, email: RECIPIENT }),
});
const delivery = await deliveryResponse.json();
if (!deliveryResponse.ok || delivery.delivered !== true || delivery.preview_only === true) {
  throw new Error(delivery?.error?.message ?? "production email delivery failed");
}

console.log(JSON.stringify({ ok: true, health: true, analysis: true, delivered: true, recipient: RECIPIENT }));
