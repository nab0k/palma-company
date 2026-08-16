---
id: TASK_CLAUDE_0023
type: task
status: delivered
owner: claude
reviewer: chief_editor
created: 2026-08-16
updated: 2026-08-16
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - correct-sc-111-manuscript-citation-error
  - rebuild-theory-expansion-placement-map-against-snapshot
  - rebuild-theory-expansion-building-blocks-against-snapshot
  - correction-note-in-task-claude-0022-completion-report
depends_on: []
base_branch: codex/prose-source-and-crossref-rules
base_commit_sha: 6e40b65dc3557fa68158386fe117254889697b8f
working_branch: codex/prose-source-and-crossref-rules
personal_story_use: prohibited
input_paths:
  - palma-method/research/chapter-packets/MANUSCRIPT_SNAPSHOT_2026-08-15.md
  - palma-method/research/source-cards/feld-1981-focused-organization-social-ties.md
  - palma-method/research/reports/THEORY_EXPANSION_PLACEMENT_MAP_v0.1.md
  - palma-method/research/reports/THEORY_EXPANSION_BUILDING_BLOCKS_v0.1.md
output_paths:
  - palma-method/research/reports/THEORY_EXPANSION_PLACEMENT_MAP_v0.2.md
  - palma-method/research/reports/THEORY_EXPANSION_BUILDING_BLOCKS_v0.2.md
  - correction addendum to feld-1981-focused-organization-social-ties.md
  - correction note appended to TASK_CLAUDE_0022_COMPLETION_REPORT.md
completion_report: palma-method/research/reports/TASK_CLAUDE_0023_COMPLETION_REPORT.md
---

# TASK_CLAUDE_0023 — Repair placement map against the authoritative manuscript snapshot

## Authorization

Requested by Serhii Nabok, 2026-08-16: TASK_CLAUDE_0022 was rejected because its
placement work (Streams 3-4) was built by reading `manuscript/part-*` files instead
of `palma-method/research/chapter-packets/MANUSCRIPT_SNAPSHOT_2026-08-15.md`, which
that snapshot file's own header explicitly names as the sole current text
("Отдельные chapter-packet файлы в этой же папке для Глав 4-21 устарели... этот
файл — единственный актуальный полный текст рукописи"). Concretely: Scott Feld is
fully and explicitly cited in the real Chapter 5 (Глава 5, lines 147-149 of the
snapshot), which directly contradicts the correction addendum TASK_CLAUDE_0022
added to SC-111 claiming Feld was absent. Registered as TASK_CLAUDE_0023, base
commit `6e40b65` confirmed as HEAD on `codex/prose-source-and-crossref-rules` with a
clean working tree before this task began.

## Objective

Repair the placement error at its root: re-verify all 11 theory-concept placement
decisions from TASK_CLAUDE_0022 against a direct, full read of the actual
authoritative manuscript snapshot (not the stale `manuscript/part-*` files), correct
the record on SC-111 without silently rewriting history, and publish corrected v0.2
placement and building-block reports.

## Required work

- Read `MANUSCRIPT_SNAPSHOT_2026-08-15.md` in full (all 21 chapters, 623 lines) as
  the only source of current manuscript content for this task.
- Add a new, dated correction addendum to SC-111 (`feld-1981-focused-organization-
  social-ties.md`) that retracts TASK_CLAUDE_0022's own correction claim, without
  deleting or rewriting that prior addendum.
- Re-verify each of the 11 named concepts' placement against the snapshot's actual
  chapter content, chapter by chapter, with line-level anchors.
- Publish `THEORY_EXPANSION_PLACEMENT_MAP_v0.2.md` and
  `THEORY_EXPANSION_BUILDING_BLOCKS_v0.2.md` as new files (v0.1 untouched).
- For every expansion item, state explicitly: what the actual current chapter
  already contains; what is genuinely still missing; whether the proposal is an
  expansion, a replacement, or a reduction; and a word count that does not repeat
  existing material.
- Recompute the honest total recommended word count from scratch, replacing the
  now-invalidated ~4,070-word estimate.
- Leave the Stream 1 evidence audit and the Stream 2 source cards unchanged, except
  for the SC-111 correction addendum required above - none of the underlying
  academic sourcing was wrong, only the claim about the sources' relationship to
  manuscript content.
- Append a correction note to `TASK_CLAUDE_0022_COMPLETION_REPORT.md` describing
  this repair, without altering that report's original content.

## Acceptance criteria

- Every claim in the v0.2 placement map about "what the manuscript already
  contains" is traceable to a specific line range in
  `MANUSCRIPT_SNAPSHOT_2026-08-15.md`.
- No use of `manuscript/part-*` files anywhere in this task's research or
  citations.
- SC-111's new correction is additive, dated, and does not delete the prior
  (erroneous) TASK_CLAUDE_0022 addendum.
- `ruby scripts/validate_research_package.rb` passes with 0 errors before delivery.
- The manuscript, snapshot, Google Doc, Notion, dashboard, and indexes are not
  edited.

## Allowed changes

Only the declared output paths: two new v0.2 reports, one addendum to SC-111, one
correction note appended to the existing TASK_CLAUDE_0022 completion report, this
governance file and its own completion report, plus regenerated validator output.

## Forbidden changes

Do not edit the manuscript, the manuscript snapshot, the Google Doc, or Notion. Do
not touch `generated/repository-index.*`, `BOOK_DASHBOARD.md`, or any other
dashboard/index. Do not rewrite or delete the existing TASK_CLAUDE_0022 completion
report's original content or SC-111's existing addendum - only append. Do not redo
the Stream 1 evidence audit or create/edit new source cards unless an error is
specifically traced to misreading the manuscript (only SC-111 qualifies). Do not
read or cite `manuscript/part-*` files as a source of current manuscript content.
Do not merge branches.
