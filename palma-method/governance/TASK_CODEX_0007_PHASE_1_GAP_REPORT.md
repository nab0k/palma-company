---
id: REVIEW_CODEX_0007
type: review
status: draft
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
subject_refs:
  - TASK_CODEX_0007
---

# TASK_CODEX_0007 Phase 1 gap report

## Existing state

- No root `AGENTS.md` defined repository-wide agent behavior.
- Metadata uses three live representations: true YAML frontmatter, fenced YAML,
  and Markdown label blocks.
- Existing validators cover different card formats and ID families; one writes
  timestamped reports, so it is not deterministic.
- No unified schema, cross-document validator, generated repository graph,
  universal ingestion contract, or formal GitHub → Notion sync contract exists.
- Current research indexes are useful handwritten navigation artifacts, not a
  complete dependency graph.
- No approved Palma prose-quality policy separates universal defects, house
  style, and the author's personal voice.

## Workflow impact of Phase 1

The new root `AGENTS.md` makes already-approved authority, privacy, protected
paths, selective staging, and one-way synchronization rules visible to agents.
It does not replace a script, move a file, alter Notion, or change manuscript
content. The remaining Phase 1 documents are drafts for editorial review and do
not activate new automation.

## Compatibility gaps to resolve before implementation

1. Approve canonical status vocabularies and legacy aliases.
2. Decide whether generated indexes are committed or CI-only.
3. Select implementation runtime and any schema/parser dependencies.
4. Define the first legacy artifact families that must be indexed.
5. Confirm Notion database/property mapping and privacy eligibility.
6. Approve raw-reference storage and copyright retention rules.
7. Approve the prose policy before any manuscript diagnostic pass.

No existing artifact was marked obsolete. No current workflow was removed or
rewired.
