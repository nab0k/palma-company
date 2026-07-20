---
id: TASK_CODEX_0018
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-07-20
updated: 2026-07-20
privacy_level: internal
project: palma-method-book
priority: critical
scope:
  - assemble-current-chapter-drafts-into-manuscript
  - audit-whole-book-readiness
  - repair-structural-and-traceability-gaps
  - prepare-collective-and-author-voice-insertion-points
  - create-versioned-book-build
personal_story_use: prohibited
base_branch: codex/method-canon-part-iv-0017
base_commit_sha: 24ad33ae7d127eab61ec2f3f3eb3bfcd6ea0cecf
working_branch: codex/prefinal-manuscript-0018
input_paths:
  - palma-method/governance/DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md
  - palma-method/governance/DECISION_0005_PALMA_METHOD_CORE_ARCHITECTURE.md
  - palma-method/governance/PALMA_METHOD_CANON_v1.0.md
  - palma-method/research/chapter-packets/
  - palma-method/research/reports/PART_III_EDITORIAL_READINESS_REVIEW_v0.1.md
  - palma-method/research/verification/VERIFICATION_ISSUES.md
  - palma-method/manuscript/
output_paths:
  - palma-method/manuscript/01-introduction.md
  - palma-method/manuscript/part-1/01-companies-speak-people-scroll.md
  - palma-method/manuscript/part-1/02-an-audience-is-not-a-community.md
  - palma-method/manuscript/part-1/03-reputation-is-not-access.md
  - palma-method/manuscript/part-1/04-the-cost-of-weak-relationships.md
  - palma-method/manuscript/part-1/05-events-are-not-infrastructure.md
  - palma-method/manuscript/part-2/06-relationship-capital.md
  - palma-method/manuscript/part-2/07-strong-ties-weak-ties-and-bridges.md
  - palma-method/manuscript/part-2/08-trust-status-and-reciprocity.md
  - palma-method/manuscript/part-2/09-networks-groups-and-structural-advantage.md
  - palma-method/manuscript/part-2/10-the-dark-side-of-social-capital.md
  - palma-method/manuscript/part-3/11-listen.md
  - palma-method/manuscript/part-3/12-map.md
  - palma-method/manuscript/part-3/13-design.md
  - palma-method/manuscript/part-3/14-activate.md
  - palma-method/manuscript/part-3/15-measure.md
  - palma-method/manuscript/part-3/16-connect-communication-and-community.md
  - palma-method/manuscript/part-4/17-diagnose.md
  - palma-method/manuscript/part-4/18-design.md
  - palma-method/manuscript/part-4/19-launch.md
  - palma-method/manuscript/part-4/20-advise.md
  - palma-method/manuscript/part-4/21-handover.md
  - palma-method/manuscript/99-conclusion.md
  - palma-method/manuscript/bibliography.md
  - palma-method/production/PALMA_METHOD_BOOK_v0.1.md
  - palma-method/research/reports/BOOK_READINESS_AUDIT_v0.1.md
  - palma-method/research/reports/COLLECTIVE_INSERTION_BRIEF_v0.1.md
  - palma-method/research/reports/AUTHOR_VOICE_PASS_BRIEF_v0.1.md
  - palma-method/governance/TASK_CODEX_0018_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0018_COMPLETION_REPORT.md
final_commit_sha: bbbfb1d725c5d8eb103f8847813a7814512cc23c
---

# TASK_CODEX_0018 — Predelivery manuscript assembly

## Authorization

Authorized by Founder Serhii Nabok on 2026-07-20: complete everything currently possible so the remaining work is limited to inserting the Collective case and applying the approved author voice. This task explicitly authorizes manuscript edits to the declared chapter paths.

## Objective

Convert the repository's latest chapter-packet prose and the newly integrated Part IV drafts into one readable, versioned manuscript. Preserve evidence qualifications and current decisions. Identify rather than conceal material that still requires Collective, author voice, permission, or primary-source verification.

## Required work

1. Select the highest current chapter-packet version for every chapter and extract its complete draft prose into the corresponding manuscript path.
2. Where a latest packet contains changes only, reconstruct the current draft from its full ancestor plus the declared changes without overwriting packet history.
3. Preserve all evidence qualifications, source boundaries, privacy restrictions, and Palma-inference labels.
4. Add only minimal editorial bridges needed for a readable assembly. Do not invent cases, quotes, personal stories, research, or Method effectiveness.
5. Produce a versioned complete-book build in table-of-contents order.
6. Produce a candid chapter-by-chapter readiness audit.
7. Produce a bounded Collective insertion brief and author-voice pass brief so those later passes do not reopen architecture.
8. Prepare a bibliography working file from sources already cited; unresolved references remain explicit.

## Acceptance criteria

- Every introduction/chapter/conclusion manuscript path contains substantial prose rather than a skeleton.
- The assembled book contains all 23 reading units in order.
- Collective is an optional insertion, not a missing structural dependency.
- Voice work is isolated as a later line-editing pass.
- No unresolved verification issue is presented as resolved.
- No privacy-restricted material appears.
- Word counts, placeholders, citations, and remaining editorial decisions are reported honestly.
- Relevant validators and deterministic tests are run; generated files are changed only if needed and authorized separately.

## Forbidden changes

Do not alter approved decisions, source cards, verification statuses, prior packet versions, Method architecture, voice drafts, Collective source material, private conversations, Sempre Fixe material, Notion, or external systems. Do not add new research directions or claim the book is publication-ready before the audit supports that conclusion.
