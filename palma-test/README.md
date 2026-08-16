# Palma Test Worker

An isolated Cloudflare Worker prototype for a guided Palma Test reading. It does not modify the current `palma.company` site.

The Worker also serves a responsive English-language interface from `public/`. Visually it is designed as one Palma Test block that can be inserted into the existing site. A single dialogue window guides the visitor through six questions, shows the animated reading state and a short result preview, then delivers the complete reading by email.

## API

- `GET /health`
- `POST /analyze` with JSON fields `situation`, optional `organization`, `role`, `website`, `desired_change`, and `language` (`en`, `ru`, or `uk`).
- `POST /deliver-reading` with `request_id`, `email`, and an optional `turnstile_token` when Turnstile is enabled.

The first version uses the Cloudflare Workers AI binding with Qwen 3 30B A3B and a strict JSON response contract. A deterministic guardrail layer restores the canonical six questions, treats missing evidence as `unknown`, and prevents community from becoming the default destination. One repair pass is allowed when a generated reading fails the semantic quality gate.

Readings are stored in a dedicated D1 database for seven days so they can be delivered once through the Zoho Mail API. Expired records are deleted opportunistically. Rate limiting is active; Turnstile enforcement activates when a site key and secret are configured. Email addresses are used for delivery only and are not treated as marketing consent.

The scientific and retrieval design lives in `knowledge/`. Palma Test 0.1 is described accurately as a theory-informed qualitative diagnostic, not as a validated psychometric test.

## Production configuration

Apply D1 migrations and configure the Zoho OAuth credentials as Worker secrets. `ZOHO_ACCOUNT_ID` and the production Turnstile site key remain non-secret configuration values. Never store a mailbox password in the project.

## Local checks

```sh
npm install
npm run cf-typegen
npm run check
npm test
npm run dev
```

Workers AI inference is remote even when the Worker is run locally.
