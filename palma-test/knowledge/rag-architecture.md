# RAG architecture on a small budget

## What belongs in deterministic code

- Input and output schemas.
- Canonical six questions.
- Evidence-state rules.
- Prohibited inferences.
- Relationship-form definitions.
- Privacy, retention, rate limits and email delivery.
- Quality gates and regression tests.

RAG must never override these rules.

## What belongs in retrieval

- Short source notes derived from peer-reviewed literature.
- Construct definitions and boundary cases.
- Anonymised Palma case patterns.
- Tested examples of evidence, counter-evidence and unknowns.
- Practitioner notes for decision framing.

Do not ingest full copyrighted books simply because files are available. Store concise original notes with citation metadata, page references and the exact claim each note can support.

## Retrieval record

Each chunk should carry:

```json
{
  "id": "source-or-case-id",
  "constructs": ["belonging"],
  "source_type": "peer_reviewed_theory",
  "claim": "The narrow claim this note can support",
  "limitations": "Population, context and non-equivalence warnings",
  "citation": "DOI or stable source",
  "method_version": "palma-test/0.1"
}
```

## Lean deployment sequence

1. Keep the current compact Canon in the system prompt while it fits comfortably.
2. Add a small curated corpus only when notes exceed prompt space or case patterns become useful.
3. Retrieve per lens, cap the number of chunks and include citations internally in the model context.
4. Make the model return evidence IDs for every material inference, then strip/internalise IDs before the human-facing reading if desired.
5. Cache source retrieval by method version; never cache personal submissions.

Cloudflare AI Search can later manage ingestion, embeddings, indexing and retrieval over an R2 corpus. A smaller first version can use Workers AI embeddings plus Vectorize. The correct choice depends on the final corpus size and current free-tier allowances; price limits must be checked again at deployment time.
