---
id: TASK_CODEX_0041
type: task
status: in_progress
owner: codex
reviewer: founder
created: 2026-08-24
privacy_level: internal
project: palma_method_book
priority: high
scope:
  - founder_comment_master_reconciliation
  - append_only_manuscript_v0_12
  - chapters_1_15_editorial_revision
  - chapter_14_accepted_direction_integration
  - scholar_introduction_repair
  - authorial_voice_and_reader_clarity
  - tak_shtab_name_protection
  - theory_case_and_privacy_audit
depends_on:
  - TASK_CODEX_0039
  - DECISION_0007
  - DECISION_0008
  - DECISION_0009
base_branch: codex/manuscript-v011-authorial-rebuild
base_commit_sha: 257db355d55823204e6eb2117a95bb6c29f7e72d
working_branch: codex/manuscript-v012-founder-complete-revision
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.11.md
  - palma-method/research/reports/V011_FOUNDER_COMMENT_RECONCILIATION_MAP_v0.1.md
  - palma-method/research/reports/V011_READER_LOSS_AND_NEGATION_AUDIT_v0.1.md
  - palma-method/research/reports/PALMA_AUTHORIAL_VOICE_AND_CLARITY_FRAME_v0.1.md
  - palma-method/research/reports/SCHOLAR_INTEGRATION_MAP_v0.1.md
  - palma-method/research/reports/AUTHOR_REVIEW_CHANGE_MAP_v0.1.md
  - palma-method/research/reports/AUTHOR_REVIEW_CHANGE_MAP_ADDENDUM_v0.2.md
  - palma-method/research/reports/CONTEMPORARY_RESEARCH_AND_KAHNEMAN_ASSESSMENT_v0.1.md
  - palma-method/research/reports/INTERVIEW_AND_AUTHOR_SOURCE_REGISTER_v0.1.md
external_inputs:
  - repository_branch: codex/ch14-acceptance-package-0040
    commit_sha: f7872e1c3a8a3db08b2babdd3b335039c8b3d3c4
    path: palma-method/research/reports/CHAPTER_14_ACCEPTANCE_CANDIDATE_v0.1.md
output_paths:
  - palma-method/governance/TASK_CODEX_0041_FULL_MANUSCRIPT_FOUNDER_REVISION.md
  - palma-method/research/reports/V012_FOUNDER_COMMENT_MASTER_REGISTRY_v0.1.md
  - palma-method/research/reports/V012_CHAPTER_CHANGE_MAP_v0.1.md
  - palma-method/research/reports/V012_SCHOLAR_AND_THEORY_INTEGRATION_AUDIT_v0.1.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.12.md
  - palma-method/governance/TASK_CODEX_0041_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0041_COMPLETION_REPORT.md
---

# TASK_CODEX_0041 — Full-manuscript founder revision for v0.12

## Objective

Create an append-only Russian working manuscript v0.12 that applies the accepted
Chapter 14 editorial direction and reconciles all earlier founder comments across
the complete fifteen-chapter book. The new version must retain the evidence chain,
sound recognizably authored, introduce scholars through a concrete question and
research material, and give the reader enough scenes and objects to follow the
argument without decoding abstract prose.

## Current authorization

On 2026-08-24 Serhii instructed the editor to continue through all previous
comments and all chapters. This task limits that instruction to a new append-only
candidate and supporting change records. It does not authorize editing v0.11,
merging a pull request, publishing restricted interview material, or changing an
approved decision.

## Required work

1. Build one master registry joining the 104 Notion discussions, later chat
   comments, scholar-introduction drafts, the Chapter 14 review, and unresolved
   privacy or evidence restrictions.
2. Copy v0.11 to a new v0.12 file and preserve v0.11 byte-for-byte.
3. Revise Chapters 1–15 using the working voice: observation, question,
   research, bounded synthesis, and invitation to inspect the reader's case.
4. Introduce TCF physically and socially before its analytical shorthand is
   used. Later returns to TCF must add evidence or a new question.
5. Protect the proper name `TAK.Shtab`; never shorten it to `Штаб` when the
   organization is meant and never prepare an English translation as `HQ`.
6. Replace unsupported `обычно`, generic managerial omniscience, negation-led
   openings, and manufactured `не X, а Y` with claims whose speaker and evidence
   are visible.
7. Give every substantial scholar or scholar group a memorable, useful entrance:
   the problem, who they were when relevant, the material studied, the finding,
   its use in this book, and its boundary. Do not add biography that performs no
   explanatory work.
8. Use verified contemporary research only when it changes an inference,
   boundary, or practical question. Kahneman and Tversky remain bounded tools,
   not labels applied to every social mechanism.
9. Preserve source qualifications, case decisions, anonymization, and participant
   approval gates. A restricted paraphrase may remain visibly marked in the
   candidate but cannot be treated as publication-cleared.

## Allowed changes

- Create and edit only the declared v0.12 manuscript and supporting task reports.
- Reorder, expand, condense, or replace prose where a traced founder comment or
  reader-loss diagnosis requires structural work.
- Integrate the Chapter 14 acceptance candidate from the recorded branch and
  commit while preserving its SC-153 publication restriction.
- Add a verified source card only if manuscript integration genuinely requires a
  claim not already covered by the research corpus.

## Forbidden changes

- Do not edit v0.11 or any earlier manuscript version.
- Do not alter approved DECISION, Canon, raw transcript, interview, or source-card
  records in order to make prose easier.
- Do not invent authorial practice, participant motives, quotations, or scientific
  validation for Palma Method.
- Do not restore a removed international case without a governing decision.
- Do not translate the Russian working manuscript in this task.
- Do not merge the final pull request or resolve downstream Notion comments.

## Acceptance criteria

1. Every known founder comment has a disposition, target chapter, and exact v0.12
   location or an explicit blocker.
2. v0.11 is byte-for-byte unchanged and v0.12 is a separate append-only file.
3. All fifteen chapters have a reconstructable question, concrete support, and a
   transition that earns the next conceptual move.
4. Every first scholar appearance explains why that researcher is present and
   gives the reader memorable research material, a finding, and a boundary.
5. TCF is introduced before shorthand use; TAK.Shtab naming is protected; no
   prohibited or unapproved personal material is silently promoted.
6. A whole-book scan records unsupported generalizations, manufactured
   oppositions, abstract chains, scholar density, and residual blockers.
7. Relevant validators run, the exact diff is reviewed, and only declared task
   files are committed and proposed through a pull request.

## Start-state record

- Base branch: `codex/manuscript-v011-authorial-rebuild`
- Base commit: `257db355d55823204e6eb2117a95bb6c29f7e72d`
- Working branch: `codex/manuscript-v012-founder-complete-revision`
- Worktree at start: clean after repair of an interrupted initial checkout.
- Project Ledger: no concrete ledger artifact was found; `LEDGER_SCHEMA_0001.md`
  is a schema, not an active ledger. Existing task, decision, and completion
  records therefore provide the start-state chain.
- Two scholar-draft files visible as uncommitted files in the shared root are
  excluded as non-canonical under AGENTS.md. Their accepted editorial substance
  will be recovered from the committed v0.11 maps and the founder's current
  instructions, not silently imported from an uncommitted working tree.
