---
id: TASK_CODEX_0034
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-20
privacy_level: internal
project: palma_method_book
priority: high
scope:
  - manuscript_v0_8_full_editorial_revision
  - accepted_research_integration
depends_on:
  - DECISION_0006
  - DECISION_0007
  - DECISION_0008
  - DECISION_0009
  - TASK_CODEX_0033
base_branch: codex/v08-editorial-decision-register
base_commit_sha: b9b2b832ae843ae64dd30fbb6ffa9bf0e8e3c56c
working_branch: codex/manuscript-v08-full-revision
research_input_branch: codex/claude-international-case-audit-0032
research_input_commit_sha: 49bd3662d7206bc42ee5a4eb278c00d8579aa44c
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.7.md
  - palma-method/governance/DECISION_0009_V08_EDITORIAL_SCOPE_AND_CASE_PORTFOLIO.md
  - palma-method/governance/V08_EDITORIAL_DECISION_REGISTER_v0.1.md
  - palma-method/research/reports/INTERNATIONAL_CASE_EVIDENCE_AUDIT_v0.2.md
  - palma-method/research/reports/INTERNATIONAL_CASE_PLACEMENT_MAP_v0.2.md
output_paths:
  - palma-method/governance/TASK_CODEX_0034_ASSEMBLE_MANUSCRIPT_V0_8.md
  - palma-method/research/reports/V08_CLAIM_SOURCE_INTEGRATION_MAP_v0.1.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.8.md
  - palma-method/governance/TASK_CODEX_0034_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0034_COMPLETION_REPORT.md
---

# TASK_CODEX_0034 — Assemble manuscript v0.8

## Objective

Create a complete append-only v0.8 working manuscript from v0.7. Apply
DECISION_0009 and the accepted editorial register across all fifteen chapters,
integrate only supportable research, and perform a whole-book voice and continuity
pass without replacing the author's existing prose personality.

## Authorization

Serhii Nabok instructed Codex to continue on 20 August 2026 immediately after the
v0.8 decision register was delivered. This authorizes the manuscript-editing scope
described here. GitHub remains canonical; a Notion mirror is downstream and may be
created only after the canonical manuscript commit.

## Editing mode

- Use **PRESERVE** for personal scenes and prose written or substantially revised
  by the author.
- Use **REPAIR** for research-draft or model-smoothed passages.
- When a section lacks enough authorial substrate for a credible rewrite, preserve
  a marked editorial gap rather than inventing memory, motive, humor, or experience.

## Allowed changes

- Merge the append-only research artifacts from commit `49bd366` into the working
  branch; acceptance as research does not raise their verification status.
- Copy v0.7 to v0.8 and edit v0.8 only.
- Reorder, expand, cut, and locally rewrite prose required by DECISION_0009 and the
  v0.8 register.
- Add verified or carefully qualified scholar explanations and selected cases.
- Create a claim-to-source integration map and completion report.
- Update generated indexes only if regeneration produces a narrow deterministic
  diff; otherwise report the maintenance gap.

## Forbidden changes

- Do not overwrite or edit v0.7 or any earlier manuscript.
- Do not invent personal facts, dialogue, motives, interview findings, quotations,
  case outcomes, or causal claims.
- Do not expose raw Wodify data, participant identities, transcripts, or sensitive
  episodes.
- Do not upgrade `checked` source cards to `verified` without reading the required
  primary material.
- Do not claim that Palma Method or its tools are scientifically validated.
- Do not edit approved Decisions, Canon, raw research inputs, or Notion comments.
- Do not merge the final pull request without founder instruction.

## Acceptance criteria

1. v0.8 is a complete readable fifteen-chapter manuscript and v0.7 is unchanged.
2. Every V08 register item is marked implemented, intentionally deferred, omitted
   under a stated evidence gate, or pending a named author detail.
3. The retained international cases each perform a distinct function and removed
   cases do not survive as stray fragments.
4. Scholar introductions explain question, work, finding, relevance, and limit in
   readable language; exact claims remain traceable.
5. TCF appears first as a place and social setting, then as a research laboratory.
6. TAK.Shtab and Palma Method chronology is explicit and non-retrospective.
7. Wodify is anonymized and described as evidence of opportunity/behavior rather
   than relationship or motive.
8. Bare chapter references, duplicate HIMYM use, “Барбара Уолш,” and recurrent
   mechanical contrast are removed.
9. Relevant validators and a whole-manuscript privacy/evidence scan are reported.
