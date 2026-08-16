---
id: TASK_CODEX_0021
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-16
updated: 2026-08-16
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - resolve-palma-method-architecture-conflict
  - synchronize-current-russian-manuscript
  - preserve-scientific-status-and-source-traceability
  - publish-append-only-manuscript-build
base_branch: codex/prose-source-and-crossref-rules
base_commit_sha: f27b66b9dda47a894150667b7a4eff276866b31f
working_branch: codex/palma-method-manuscript-sync
personal_story_use: prohibited
decision_refs:
  - DECISION_0003
  - DECISION_0005
input_paths:
  - AGENTS.md
  - palma-method/STATUS.md
  - palma-method/governance/DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md
  - palma-method/governance/DECISION_0005_PALMA_METHOD_CORE_ARCHITECTURE.md
  - palma-method/governance/PALMA_METHOD_CANON_v1.0.md
  - palma-method/governance/TASK_CLAUDE_0022_THEORY_DOSSIER_INGESTION_AND_EXPANSION_PLACEMENT.md
  - palma-method/governance/TASK_CLAUDE_0023_REPAIR_PLACEMENT_MAP_AGAINST_MANUSCRIPT_SNAPSHOT.md
  - palma-method/governance/TASK_CLAUDE_0024_NOVELTY_SCIENTIFIC_STATUS_AND_MANUSCRIPT_SYNC_AUDIT.md
  - palma-method/governance/TASK_CLAUDE_0025_PALMA_TRANSITION_MODEL_STRESS_TEST.md
  - palma-method/governance/TASK_CLAUDE_0026_CLOSE_TRANSITION_MODEL_EVIDENCE_GAPS.md
  - palma-method/research/reports/TASK_CLAUDE_0022_COMPLETION_REPORT.md
  - palma-method/research/reports/TASK_CLAUDE_0023_COMPLETION_REPORT.md
  - palma-method/research/reports/TASK_CLAUDE_0024_COMPLETION_REPORT.md
  - palma-method/research/reports/TASK_CLAUDE_0025_COMPLETION_REPORT.md
  - palma-method/research/reports/TASK_CLAUDE_0026_COMPLETION_REPORT.md
  - palma-method/research/reports/PART_IV_EDITORIAL_BUILDING_BLOCKS_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_TOOL_SPEC_v0.2.md
  - palma-method/research/reports/CHAPTERS_11_21_FUNCTION_AND_OVERLAP_MAP_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_NOVELTY_AND_SCIENTIFIC_STATUS_AUDIT_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_PRIOR_ART_MATRIX_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_FALSIFIABLE_PROPOSITIONS_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_MANUSCRIPT_SYNC_MAP_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_DEFENSIBLE_CLAIMS_PACKAGE_v0.1.md
  - palma-method/research/reports/PALMA_TRANSITION_MODEL_STRESS_TEST_v0.1.md
  - palma-method/research/reports/PALMA_TRANSITION_MODEL_PRIOR_ART_CLOSURE_v0.1.md
  - palma-method/research/reports/TCF_TRANSITION_MODEL_EXPLORATORY_CODING_v0.1.md
  - palma-method/research/reports/PALMA_SCIENTIFIC_CLAIMS_UPDATE_v0.1.md
  - palma-method/research/verification/VERIFICATION_ISSUES.md
  - palma-method/research/chapter-packets/MANUSCRIPT_SNAPSHOT_2026-08-15.md
output_paths:
  - palma-method/governance/TASK_CODEX_0021_SYNCHRONIZE_PALMA_METHOD_MANUSCRIPT.md
  - palma-method/governance/DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md
  - palma-method/governance/PALMA_METHOD_CANON_v1.1.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.2.md
  - palma-method/research/reports/PALMA_METHOD_MANUSCRIPT_CHANGE_LOG_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_TOOL_INSERTION_MAP_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_WORD_COUNT_REPORT_v0.1.md
  - palma-method/governance/TASK_CODEX_0021_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0021_COMPLETION_REPORT.md
---

# TASK_CODEX_0021 — Synchronize the Palma Method manuscript

## Authorization

Founder Serhii Nabok authorized this manuscript-editing task on 2026-08-16. The
Founder fixed the governing direction as four stages — Diagnose, Design, Launch,
Transfer — with Facilitate / Advise as a cross-cutting stance. The authorization
also permits a superseding decision, an append-only Method canon revision, and an
append-only synchronized Russian manuscript build. It does not authorize edits to
Google Docs, Notion, stale `manuscript/part-*` files, accepted decisions, or
unrelated repository areas.

The task began from the fetched remote branch
`codex/prose-source-and-crossref-rules` at
`54e043dda7fa0dc9fc1c3ddc467f99d40dba3649`. The isolated worktree was clean and
detached at that commit before the task branch was created. During authorized work,
TASK_CLAUDE_0026 advanced the same source branch to
`f27b66b9dda47a894150667b7a4eff276866b31f`. Because this task already contained
substantive edits, Codex committed that work locally and rebased the task commit
onto the new source tip. Git history therefore carries the complete evidence commit;
no report text was copied manually. The updated base for delivery is `f27b66b`.

## Objective

Resolve the documented conflict between DECISION_0005's six-phase reasoning
architecture, the later four-stage tool specification, and the current manuscript;
then synchronize the current Russian manuscript around one usable and scientifically
honest four-stage Palma Method without flattening the author's facts, cadence,
humor, qualifications, or uncertainty.

## Canonical manuscript and lineage

The sole canonical current prose input is
`palma-method/research/chapter-packets/MANUSCRIPT_SNAPSHOT_2026-08-15.md`. No later
explicitly accepted manuscript build exists on the verified base branch. The task
must not overwrite that snapshot. Its successor is
`palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.2.md`, which must
declare the exact source path, base commit, task, and superseding architecture
decision.

## Allowed changes

- Create the eight declared output paths only.
- Preserve Chapters 1–10 except for surgical terminology, cross-reference, and
  scientific-status repairs.
- Reconcile Chapters 11–16 as evidence-backed practices and component capabilities.
- Reconcile Chapters 17–21 as Diagnose, Design, Launch, a cross-cutting
  Facilitate/Advise interlude, and Transfer.
- Introduce the four named tools in readable Russian book prose.
- Add a public-safe worked walkthrough using only already authorized and traceable
  evidence.
- Add a concise scientific-status passage and a conclusion that answers the
  introduction's question.
- Add only factual statements supported by the declared evidence corpus or mark an
  unresolved verification question explicitly.

## Forbidden changes

- Do not edit or relabel DECISION_0003 or DECISION_0005.
- Do not edit the source manuscript snapshot or stale `manuscript/part-*` files.
- Do not change Google Docs, Notion, repository architecture, dependencies,
  dashboards, generated indexes, source cards, or verification records.
- Do not invent personal stories, permissions, client evidence, scientific
  validation, preliminary empirical confirmation, a validated scale, or a fixed
  universal handoff window.
- Do not describe TCF, TAK.Shtab, or Bombom as controlled tests.
- Do not translate the manuscript into English.
- Do not stage or commit unrelated worktree changes.

## Acceptance criteria

1. A Founder-directed decision states exactly which clauses of DECISION_0005 it
   supersedes and which clauses remain in force.
2. The new canon separates stages, stance, construct, observable event, tools, and
   outcomes, and freezes the plain-language founder promise.
3. The manuscript presents Diagnose → Design → Launch → Transfer consistently;
   Facilitate / Advise is cross-cutting, Relationship Capital is the object of work,
   and a Palma Moment is an observable transition event.
4. By the end, the reader knows what to diagnose, what evidence to collect, which
   decision each tool supports, what bounded intervention to run, what signals to
   watch, and what the Handoff Test can and cannot establish.
5. Scientific status is explicit: established sciences explain components; Palma is
   a conceptually novel synthesis with untested propositions; real cases and field
   observations illustrate and generate hypotheses but do not validate the Method.
6. A chapter-by-chapter change log, tool insertion map, and before/after word-count
   report accompany the append-only manuscript build.
7. Relevant validators pass or every pre-existing failure is distinguished from a
   task-introduced failure.
8. Exact diff inspection confirms that protected and unrelated files were untouched.
9. Only declared task files are committed and pushed; a draft pull request is opened.

## Completion record

Delivered on 2026-08-16. See
`palma-method/governance/TASK_CODEX_0021_COMPLETION_REPORT.md` for exact paths,
validation, word-count delta, risks, protected-file confirmation, and delivery
coordinates. The final delivery commit SHA is reported in the draft pull request and
task handoff because a file cannot contain the SHA of the commit that contains the
file itself.
