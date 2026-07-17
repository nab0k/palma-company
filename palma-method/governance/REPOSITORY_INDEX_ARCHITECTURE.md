---
id: ARCH_REPOSITORY_INDEX_0001
type: architecture
status: draft_for_editorial_review
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
---

# Repository index architecture

## Objective

Produce a deterministic view of repository facts without creating a second
handwritten authority. Phase 1 defines the contract only.

## Sources and outputs

The future generator reads tracked Markdown metadata, recognized legacy
metadata, and canonical verification mappings. It must not read Notion.

Proposed generated outputs:

- `palma-method/generated/repository-index.json`: machine-readable graph.
- `palma-method/generated/repository-index.md`: human navigation view rendered
  from the same in-memory graph.

Both files carry `generated: true`, generator version, and source commit. They
must never be edited by hand. Whether these outputs are committed or published
only as CI artifacts requires editorial approval.

## Data model

Each node contains `id`, `type`, `status`, `path`, `title`, dates,
privacy level, and normalized relationship arrays. Edges are typed:
`depends_on`, `supported_by`, `verifies`, `affects`, `reviews`,
`implements`, and `supersedes`.

Derived views answer:

- chapters and current accepted versions;
- tasks grouped by lifecycle;
- approved canonical decisions;
- open verification issues;
- chapter-to-source support;
- reverse dependencies for every decision and source.

The index records parsing warnings but never guesses a missing ID or
relationship.

## Current chapter rule

Parse numeric semantic versions from metadata or, during transition, recognized
filename suffixes. Prefer explicit approved metadata. “Current” is the highest
accepted version by numeric comparison. Drafts never displace accepted versions.
Ambiguity is an error, not a tie-break guess.

## Determinism

Normalize paths, sort nodes by `type,id,path`, sort edges by
`from,relation,to`, serialize UTF-8 with stable key order, and omit wall-clock
timestamps. A source commit may be supplied explicitly; tests use a fixed
fixture value. Re-running against unchanged inputs must produce byte-identical
output.

## Failure behavior

Duplicate IDs, unresolved canonical references, ambiguous chapter versions, or
conflicting paths block generation. Unparsed legacy metadata is a warning during
transition. Files with `fixture: true` are excluded from production views.

## Proposed regeneration contract

Phase 2 should add one generator entry point and one check mode:

```text
generate-index          write deterministic JSON and Markdown
generate-index --check  compare expected output without writing
```

The actual command name and runtime are not approved in Phase 1.

## Editorial decisions required

1. Commit generated JSON and Markdown, or retain them as CI artifacts only.
2. Approve the chapter “current” rule and transition fallback to filenames.
3. Decide which legacy artifact families are mandatory index inputs first.
4. Approve whether warnings may pass a pull request during transition.
