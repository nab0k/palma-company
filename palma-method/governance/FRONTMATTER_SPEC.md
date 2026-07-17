---
id: SPEC_FRONTMATTER_0001
type: specification
status: draft_for_editorial_review
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
---

# Unified frontmatter specification

## Status and boundary

This is a Phase 1 design. It governs new structured documents after editorial
approval. It does not migrate or invalidate existing artifacts. Current
plain-label metadata and fenced-YAML blocks remain valid legacy representations
until a separately authorized migration.

The machine-readable companion is
`palma-method/schemas/frontmatter/palma-document.schema.json`. Examples for
each supported type are in `palma-method/schemas/frontmatter/examples/`.

## Canonical representation

New structured Markdown documents use one YAML mapping between the opening
`---` lines. UTF-8, spaces (not tabs), lower_snake_case keys, and YAML 1.2
booleans are required. The body remains Markdown.

Dates use `YYYY-MM-DD`. Timestamps, when needed, use RFC 3339 in UTC with
`Z`. File paths are repository-relative and use `/`. IDs are strings and
must never be reused.

## Common fields

Required for every new document:

| Field | Meaning |
|---|---|
| `id` | Stable repository-wide identifier |
| `type` | Document type from the supported list |
| `status` | Type-specific lifecycle value |
| `owner` | Role or agent responsible for the artifact |
| `created` | Creation date |
| `privacy_level` | `public`, `internal`, `restricted`, or `confidential` |

Common optional fields: `title`, `reviewer`, `updated`, `project`,
`task_id`, `phase`, `depends_on`, `related_to`, `decision_refs`,
`source_refs`, `verification_refs`, `chapter_refs`, `supersedes`, and
`canonical_path`.

Relationship fields are arrays of stable IDs, never prose. A referenced ID may
point to a legacy document. Missing references are blocking errors once the
Phase 2 validator is approved. `supersedes` records an approved relationship;
it never authorizes deletion or an “obsolete” label.

## Supported types and required extensions

| Type | ID family | Additional required fields |
|---|---|---|
| `task` | `TASK_<ACTOR>_NNNN` | `reviewer`, `project`, `priority`, `scope` |
| `decision` | `DECISION_NNNN` | `authority`, `effective_date` |
| `review` | `REVIEW_<ACTOR>_NNNN` | `reviewer`, `subject_refs` |
| `chapter` | `CHAPTER_NN` | `chapter_number`, `version`, `version_status` |
| `source_card` | `SC-NNN` | `verification_status`, `source_kind`, `citation` |
| `verification_issue` | `VI-NNN` | `verification_status`, `claim` |
| `completion_report` | `REPORT_<TASK-ID>` | `task_id`, `subject_refs` |
| `research_gap` | `RG-NNN` | `research_status`, `question` |
| `change_map` | `CHANGE_MAP_<SCOPE>` | `subject_refs`, `change_scope` |

The schema also recognizes `specification`, `policy`, `architecture`, and
`contract` so governance documents can use the same common metadata. Their
workflow is editorial rather than manuscript lifecycle.

## Status vocabularies

- Task: `proposed`, `authorized`, `authorized_phase_1`, `in_progress`,
  `blocked`, `delivered`, `review`, `changes_requested`, `accepted`,
  `completed`, `cancelled`.
- Decision: `proposed`, `approved`, `superseded`.
- Review: `draft`, `accepted`, `accepted_with_conditions`,
  `changes_requested`, `rejected`.
- Chapter/version: `skeleton`, `researching`, `drafting`, `revision`,
  `review`, `accepted`, `locked`, `published`.
- Source verification: `discovery`, `pending`, `checked`, `verified`,
  `restricted`, `rejected`.
- Verification issue: `open`, `needs_primary_source`,
  `resolved_with_conditions`, `resolved_with_scope_limit`,
  `contextual_limit`, `resolved`.
- Completion report: `delivered`, `review`, `changes_requested`,
  `accepted`.
- Research gap: `open`, `investigating`, `blocked`, `resolved`,
  `deferred`.
- Change map: `draft`, `review`, `accepted`, `superseded`.
- Governance design: `draft_for_editorial_review`, `approved`, `superseded`.

These vocabularies require editorial approval. Phase 2 should add aliases only
when an observed legacy state needs preservation; it must not rewrite history.

## Privacy and personal-story fields

`personal_story_use` is optional and may be `prohibited`,
`pending_author_approval`, or `approved`. When `approved`,
`author_approval_ref` is required. A conversation, interview, or agent memory
is not approval. Private names must not be used in tasks or examples unless the
approval record explicitly covers that use.

## Verification and chapter rules

Source cards use `verification_status`; verification issues use both
`verification_status` and canonical `VI-NNN` IDs. Historical issue IDs are
kept in `historical_ids` and require a `canonical_id`.

Chapter `version` uses `major.minor` or `major.minor.patch`. The current
version is derived from accepted versions, never declared by a handwritten
`latest: true`. Ties, duplicate versions, or multiple accepted files at the
same version are blocking errors.

## Gradual adoption

1. Validate fixtures and new Phase 2 artifacts.
2. Read legacy formats without rewriting them.
3. Emit warnings for metadata that cannot be indexed.
4. Propose targeted migrations by artifact family.
5. Migrate only after approval, preserving IDs, paths, history, and content.

No acceptance decision is implied by this draft.
