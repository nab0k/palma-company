---
id: ARCH_REFERENCE_INGESTION_0001
type: architecture
status: draft_for_editorial_review
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
---

# Reference ingestion architecture and trade-offs

## Boundary

This document proposes a pipeline. Phase 1 did not ingest a reference, install a
parser, create derivatives, or modify research sources.

## Proposed storage contract

```text
palma-method/research/references/
  raw/                 supplied source, access-controlled
  manifests/           provenance, rights, hashes, parser version
  derived/<source_id>/ normalized.md, chunks.jsonl
```

Raw and derived full text are not committed by default. A manifest may be
committed when it contains no confidential content. Each source receives a
stable `source_id`; the raw SHA-256 hash plus normalization version identifies
an ingestion run.

## Minimal vertical slice recommendation

Phase 2 should support Markdown, plain text, and HTML first. They cover common
web and agent research inputs with standard-library parsing and allow the
provenance/idempotency contract to be tested without adding dependencies.

Defer PDF, DOCX, and EPUB adapters:

- PDF needs layout-aware extraction and page preservation; OCR should be an
  explicit fallback only when no text layer exists.
- DOCX can be read as ZIP/XML, but tables, footnotes, captions, and tracked
  changes make a hand-built parser unsafe.
- EPUB is also ZIP/XML, but reading order, nested navigation, and rights controls
  need a tested adapter.

“Universal” means one adapter interface and normalized output, not one parser
that pretends every format is the same.

## Normalization

An adapter returns ordered blocks: heading, paragraph, list, table, caption,
page boundary, and bibliography item. Each block retains any trustworthy source
locator. The normalizer may clean encoding and whitespace but must not
summarize, paraphrase, translate, or invent headings/page numbers.

## Chunking

Chunk at structural boundaries, then group adjacent blocks up to a configurable
size. Never split a table row, caption from its object, or citation from the
paragraph it qualifies when avoidable. Each JSONL chunk contains:

```yaml
source_id:
document_title:
section:
page_start:
page_end:
chunk_index:
content_hash:
raw_hash:
adapter:
adapter_version:
```

Unknown pages are `null`, never estimated. `content_hash` is SHA-256 over
canonical UTF-8 chunk content. Stable source content and configuration must
produce identical chunks and hashes.

## Idempotency and recovery

Before parsing, compare raw hash, adapter version, normalization version, and
chunking configuration with the manifest. An exact match is a no-op. A changed
run writes to a temporary sibling, validates counts and hashes, then atomically
replaces the derivative set. The prior manifest remains available for audit.

## Copyright and privacy

The manifest records provenance, access date, rights basis, retention rule, and
whether derivative text may be committed. Large copyrighted full-text
derivatives require explicit approval. Confidential and author-interview
material stays outside public Git history. Generated chunks inherit the
strictest privacy level of the source.

## Trade-off decision

The smallest safe choice is a Python or Ruby standard-library CLI with adapter
interfaces, starting with Markdown/TXT/HTML. Python offers stronger future
parser availability; Ruby aligns with the existing research validator. Runtime
selection requires editorial/engineering approval after dependency audit.

## Editorial decisions required

Approve initial formats, runtime, storage/commit policy, default chunk size,
rights-manifest fields, and whether raw confidential references may live in a
separate encrypted store rather than this repository.
