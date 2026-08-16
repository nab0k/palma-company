---
id: TASK_CLAUDE_0018
type: task
status: delivered
owner: claude
reviewer: chief_editor
created: 2026-08-15
updated: 2026-08-15
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - inventory-august-14-15-source-material
  - complete-tcf-member-interview-cards
  - cross-case-synthesis-tcf-interviews
  - source-cards-for-part-iv-citations
  - claims-ledger-part-iv
  - evidence-and-architecture-audit-part-iv
  - trisha-comment-registration
depends_on:
  - TASK_CLAUDE_0017
base_branch: codex/prose-source-and-crossref-rules
base_commit_sha: 7bee61f0699c72bf13b884f164a4087178be8633
working_branch: codex/prose-source-and-crossref-rules
personal_story_use: prohibited
input_paths:
  - palma-method/research/chapter-packets/MANUSCRIPT_SNAPSHOT_2026-08-15.md
  - palma-method/research/source-cards/tcf-francisco-member-interview-2026-08-14.md
  - palma-method/research/source-cards/tcf-rami-member-interview-2026-08-14.md
  - palma-method/research/source-cards/tcf-anya-member-interview-2026-08-15.md
  - palma-method/research/source-cards/tcf-luciana-member-interview-2026-08-15.md
  - palma-method/research/source-cards/tcf-low-regularity-member-intake-2026-08-15.md
  - palma-method/research/source-cards/bombom-founder-interview-2026-08-03.md
  - palma-method/research/source-cards/serhii-tak-shtab-story-intake.md
  - palma-method/governance/DECISION_0005_PALMA_METHOD_CORE_ARCHITECTURE.md
output_paths:
  - palma-method/research/reports/AUGUST_14_15_SOURCE_INVENTORY_v0.1.md
  - palma-method/research/syntheses/TCF_MEMBER_INTERVIEWS_CROSS_CASE_SYNTHESIS_v0.1.md
  - palma-method/research/verification/PART_IV_CLAIMS_LEDGER_v0.1.md
  - palma-method/research/reports/PART_IV_EVIDENCE_AND_ARCHITECTURE_AUDIT_v0.1.md
  - palma-method/research/reports/TASK_CLAUDE_0018_COMPLETION_REPORT.md
  - new source cards for Part IV citations (Schein, Croskerry, Gerstner/IBM, Dynes & Quarantelli,
    Weick, CrowdStrike/Delta, Brehm, Selznick, Zoho/Vembu, Taktion/U-LEAD/mothers-study,
    Abercrombie & Fitch, existing-Ostrom-card sufficiency check)
  - addenda to SC-095, SC-096, SC-097, SC-098, SC-099 (8-part breakdown per interview)
completion_report: palma-method/research/reports/TASK_CLAUDE_0018_COMPLETION_REPORT.md
---

# TASK_CLAUDE_0018 — August 14-15 evidence consolidation for Part IV and TCF cases

## Authorization

Requested by Serhii Nabok, 2026-08-15, relaying a task brief drafted for Codex/Claude
handoff. Confirmed against the actual repository state before starting: task ID
TASK_CLAUDE_0017 was already used (delivered 2026-07-19, canonicalized the Method and
built the original Part IV packets); this task is registered as TASK_CLAUDE_0018.
`base_commit_sha` 7bee61f was confirmed present on `codex/prose-source-and-crossref-rules`
before work began.

## Objective

Consolidate everything gathered in the 2026-08-14/15 research push (five TCF member
interviews, the low-regularity/"Trisha" case, and the theory/case citations added to
Part IV of the manuscript) into a verifiable, privacy-safe evidence base, so the next
editorial pass on Chapters 17-21 and the TCF material can rely on registered source
cards and an explicit claims ledger rather than session memory.

## Required work

This is a research-and-documentation task only. See the streams below (also tracked in
the completion report). No manuscript editing, no chapter versioning, no translation,
no voice imitation, no index/dashboard regeneration, no git integration beyond what is
explicitly requested by the user in this session.

- Stream 1: Source inventory for 2026-08-14/15 material.
- Stream 2: Complete the eight-part breakdown for SC-095/096/097/098/099.
- Stream 3: Cross-case synthesis of the five TCF member interviews.
- Stream 4: Source cards for Part IV's new citations and business cases.
- Stream 5: Claims ledger for Chapters 17-21 (per the locked manuscript snapshot).
- Stream 6: Evidence-and-architecture audit of Part IV (no prose rewriting).
- Stream 7: Register the "Trisha comment" reference or mark it SOURCE_MISSING.

## Acceptance criteria

- Every item in the inventory has a stable ID, consent status, and citation status.
- No audio, full private transcripts, real names of personal acquaintances, contact
  details, private Notion URLs, or the Luciana grief material reach the public repo.
- Every new source card distinguishes verified fact from interpretation from working
  hypothesis, and carries an explicit confidence/verification status.
- The claims ledger covers every checkable claim in Chapters 17-21 as they stand in
  `MANUSCRIPT_SNAPSHOT_2026-08-15.md`, with a keep/qualify/rewrite/remove/verify call.
- The Part IV audit evaluates function, evidence, and redundancy per chapter without
  rewriting any prose.
- Nothing already-approved (locked chapters, prior decisions) is edited or weakened.

## Allowed changes

Only the declared output paths, plus targeted additions to the five existing TCF
interview cards (SC-095 through SC-099) and to `serhii-tak-shtab-story-intake.md` if a
correction record is needed there. New files only; no rewriting of existing manuscript
or chapter-packet prose.

## Forbidden changes

Do not edit `MANUSCRIPT_SNAPSHOT_2026-08-15.md` or any manuscript/chapter-packet file.
Do not create new chapter versions. Do not translate the book. Do not imitate the
author's voice. Do not pad any deliverable for length. Do not treat five interviews as
representative of all TCF members. Do not claim TCF was built using the Palma Method.
Do not commit private audio, full transcripts, or unconsented real names. Do not touch
`generated/repository-index.*` or `BOOK_DASHBOARD.md`. Do not resolve the PR #13/#14
branch divergence — that is Codex's task.
