---
id: ARCH_VALIDATION_0001
type: architecture
status: draft_for_editorial_review
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
---

# Validation architecture and test plan

## Boundary

No production validator was changed in Phase 1. Existing Ruby and Python
validators remain authoritative for their current checks. Phase 2 should add a
new orchestration layer without weakening either.

## Proposed pipeline

1. Discover tracked, in-scope files using repository-relative paths.
2. Parse true YAML frontmatter; recognize documented legacy label and fenced-YAML
   forms without rewriting them.
3. Normalize metadata into one internal record.
4. Validate each record against the JSON Schema profile.
5. Build an ID registry and relationship graph.
6. Run cross-document rules.
7. Emit stable diagnostics and a summary.

## Severity and exit contract

- `ERROR`: unsafe or ambiguous state; exit non-zero.
- `WARNING`: legacy or incomplete metadata that remains allowed temporarily.
- `INFO`: migration or coverage observation.

Diagnostics sort by severity, path, line, rule ID, then message. Output excludes
wall-clock time, absolute paths, network state, and unordered hashes. Exit 1
means validation errors; exit 2 means validator/configuration failure; exit 0
means no errors.

## Proposed rule families

| Rule family | Blocking examples |
|---|---|
| FM | missing required fields, invalid type/status/date |
| ID | invalid or duplicate ID |
| REF | missing dependency or broken repository link |
| VI | non-canonical verification ID without explicit mapping |
| CH | ambiguous or inconsistent current chapter version |
| PRIV | named personal example or personal-story marker in agent tasks without approval reference |
| IDX | required artifact absent from generated index |
| GEN | generated output differs from deterministic regeneration |

Privacy detection must be conservative. It may block explicit markers such as
`PERSONAL_EXAMPLE:`, `PRIVATE_STORY:`, or a structured
`personal_story_use: approved` lacking `author_approval_ref`. It must not use
an opaque name detector that could flag cited public authors. Review of prose
for private names remains human.

## Test plan

Unit fixtures:

- one valid fixture for every operational document type;
- each missing required field;
- invalid ID, date, status, privacy value, and relationship shape;
- approved personal story with and without approval reference;
- historical verification ID with and without canonical mapping.

Repository-graph fixtures:

- duplicate IDs across formats;
- unresolved and cyclic dependencies (cycles warn unless a rule forbids them);
- valid and broken Markdown links;
- two accepted chapter versions, semantic ordering, ties, and malformed versions;
- source-to-chapter and reverse-dependency indexing;
- fixtures excluded from production index.

Regression and determinism:

- run the current validators before and after integration;
- run twice and compare bytes;
- execute from two working directories and compare normalized output;
- snapshot ordered diagnostics;
- confirm only approved paths are read and no source files are written in check mode.

## Implementation sequence proposed for Phase 2

Start with a standard-library metadata scanner and the committed JSON fixtures.
Use an existing JSON Schema library only if already available; otherwise
implement the small approved subset and document the limitation. Add adapters
for legacy formats one family at a time. Integrate index checks last.

## Editorial decisions required

Approve status vocabularies, legacy warning policy, privacy marker list,
dependency-cycle severity, and whether an additional schema dependency is
acceptable.
