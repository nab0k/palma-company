---
id: TASK_CODEX_0036
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-21
privacy_level: internal
project: palma_method_book
priority: high
scope:
  - manuscript_v0_10_scholar_integration
  - first_appearance_context_repair
  - scholar_transition_repair
depends_on:
  - TASK_CODEX_0035
  - DECISION_0007
  - DECISION_0008
  - DECISION_0009
base_branch: codex/manuscript-v09-miguel-practices
base_commit_sha: a694f207a0fddb36e39c4c01d3504f607e34852d
working_branch: codex/manuscript-v010-scholar-integration
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.9.md
  - palma-method/research/source-cards/
  - palma-method/research/verification/VERIFICATION_ISSUES.md
output_paths:
  - palma-method/governance/TASK_CODEX_0036_INTEGRATE_SCHOLAR_INTRODUCTIONS.md
  - palma-method/research/reports/SCHOLAR_INTEGRATION_MAP_v0.1.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.10.md
  - palma-method/research/source-cards/brehm-psychological-reactance.md
  - palma-method/research/source-cards/pagis-2015-evoking-equanimity-vipassana.md
  - palma-method/research/source-cards/simmel-1908-sociology-forms.md
  - palma-method/governance/TASK_CODEX_0036_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0036_COMPLETION_REPORT.md
final_commit_sha: b92a61c
---

# TASK_CODEX_0036 — Integrate scholar introductions into manuscript v0.10

## Objective

Create one append-only Russian manuscript v0.10 in which every scholar's first
substantive appearance is integrated into the actual chapter context and gives
the reader a concrete reason to meet that scholar: the practical problem, the
research route or study, the relevant finding, its limit, and the precise use in
Palma Method.

## Authorization

On 21 August 2026 Serhii Nabok instructed the editor to integrate all scholar
passages into the manuscript using the founder-approved Brehm and Wegner
prototypes, then return the complete manuscript for his line review. This is
explicit manuscript-editing authorization.

## Editorial method

- Begin from an object, action, scene, or unresolved question already present in
  the chapter.
- Introduce the scholar only when the ordinary explanation reaches its limit.
- Explain who the scholar or research group is, what made the work important,
  what was actually studied, and why this book needs the idea here.
- Prefer one or two memorable, verified details over a catalogue of concepts.
- Preserve failed hypotheses, observational limits, measurement limits, and
  alternative explanations.
- Return to one concrete Palma consequence without presenting the framework as
  validated science.
- Remove decorative transitions, bare chapter references, repeated biographies,
  and habitual `not X but Y` constructions.

## Allowed changes

- Copy v0.9 forward to a new append-only v0.10 file.
- Expand, replace, relocate, or shorten scholar introductions and their immediate
  transitions throughout v0.10.
- Make the smallest surrounding edits needed to avoid duplication and make each
  insertion read as part of its chapter.
- Create a claim-and-placement map for all integrated scholars and theories.
- Add canonical source cards or open verification issues only when a net-new
  factual detail is necessary for an approved passage.

## Forbidden changes

- Do not edit v0.9 or any earlier manuscript.
- Do not change the approved fifteen-chapter architecture, case portfolio,
  four-field Infrastructure Canvas, or scientific-status position.
- Do not add unsupported biography, invented scenes, composite dialogue, causal
  claims unsupported by the evidence, or personal material not approved by the
  founder.
- Do not merge the final pull request without founder instruction.

## Acceptance criteria

1. v0.10 preserves all v0.9 content except documented local replacements and
   duplicate removal around scholar passages.
2. Every scholar or named research group at first substantive appearance receives
   an intelligible introduction tied to the chapter's question.
3. Every factual addition is traceable to a source card or an explicitly open
   canonical verification issue.
4. Later mentions do not repeat biographies or require bare chapter-number
   callbacks.
5. The manuscript contains no service labels, planning notes, or research-draft
   metadata.
6. Relevant repository validators and `git diff --check` are reported.
7. The final pull request remains open for founder review and is not merged.
