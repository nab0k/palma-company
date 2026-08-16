---
id: REPORT_TASK_CODEX_0008
type: completion_report
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0008
subject_refs:
  - TASK_CODEX_0008
---

# TASK_CODEX_0008 — Completion report

## Files created or changed

Created:

- `palma-method/BOOK_DASHBOARD.md`;
- `palma-method/scripts/book_dashboard.rb`;
- `palma-method/scripts/generate_book_dashboard.rb`;
- `palma-method/test/test_book_dashboard.rb`;
- `palma-method/governance/TASK_CODEX_0008_BUILD_BOOK_DASHBOARD.md`;
- this completion report.

Regenerated because the task and report are indexed metadata:

- `palma-method/generated/repository-index.json`;
- `palma-method/generated/repository-index.md`.

## Test results

- Book-dashboard tests cover all 23 TOC units, current, legacy, ambiguous,
  missing, explicit editorial counting, ambiguity explanations, determinism,
  and generate/check behavior.
- Full Knowledge OS test suite passes.
- Metadata validation passes in legacy warning-mode.
- Repository-index and dashboard `--check` modes pass without writes.

## Dashboard counts

- Total manuscript units: 23.
- Working packets: 7.
- Editorially accepted: 0.
- Under revision: 0.
- Not started: 0.
- Current records: 19.
- Legacy records: 40.
- Ambiguous records: 23.
- Packet coverage: 30.4%.

Repository record counts are read directly from the regenerated index.

## Ambiguous chapter groups

Sixteen groups remain ambiguous:

`CHAPTER_03`, `CHAPTER_04`, `CHAPTER_05`, `CHAPTER_09`,
`CHAPTER_11`, `CHAPTER_12`, `CHAPTER_13`, `CHAPTER_14`,
`CHAPTER_15`, `CHAPTER_16`, `CHAPTER_17`, `CHAPTER_18`,
`CHAPTER_19`, `CHAPTER_20`, `CHAPTER_21`, and `CHAPTER_99`.

Each has an unversioned manuscript file and no versioned packet. The dashboard
does not declare any of them current.

## Assumptions

- `manuscript/README.md` is the canonical repository table of contents for
  dashboard generation. Its own text calls the reading order provisional, so
  the dashboard does not imply final editorial approval of titles or structure.
- “Current version” is the unique current packet selected by the repository
  index; an unversioned manuscript file is never promoted automatically.
- “Last modified” is the latest Git commit date among the unit's manuscript and
  packet files, formatted as `YYYY-MM-DD`.
- Editorially accepted, under revision, and not started counts use only explicit
  repository metadata. Missing editorial metadata remains `unknown` or
  `needs editorial classification`.

## Unresolved limitations

- Manuscript files do not yet carry explicit version, draft, or editorial
  frontmatter.
- Seven current packet selections still coexist with unversioned manuscript
  files; their packet version is current, not the manuscript file.
- Git dates identify repository changes, not the date of an editorial decision.
- The TOC remains provisional until an approved decision freezes it.

## Protected-content confirmation

- No manuscript file was modified.
- No source-card file was modified.
- No decision document was modified.
- No Notion operation occurred.
- No ingestion or prose-diagnostic work was performed.
