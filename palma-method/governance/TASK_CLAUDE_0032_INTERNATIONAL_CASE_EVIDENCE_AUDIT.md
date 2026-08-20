---
id: TASK_CLAUDE_0032
type: task
status: delivered
owner: claude
reviewer: chief_editor
created: 2026-08-19
updated: 2026-08-19
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - international-case-primary-source-evidence-audit
  - founder-facing-decision-brief
  - manuscript-placement-and-replacement-map
depends_on:
  - DECISION_0007
  - DECISION_0008
  - TASK_CLAUDE_0031
base_branch: codex/manuscript-v07-editorial-integration
base_commit_sha: b50237c301368a412feda0a18a7e87006ff8b8e9
working_branch: codex/claude-international-case-audit-0032
personal_story_use: prohibited
input_paths:
  - AGENTS.md
  - palma-method/STATUS.md
  - palma-method/governance/DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md
  - palma-method/governance/DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md
  - palma-method/governance/DECISION_0007_BOOK_15_CHAPTER_ARCHITECTURE.md
  - palma-method/governance/DECISION_0008_PALMA_INFRASTRUCTURE_CANVAS_FOUR_FIELDS.md
  - palma-method/governance/TASK_CLAUDE_0031_ADJACENT_DISCIPLINES_AND_NOVELTY_STRESS_TEST.md
  - palma-method/governance/TASK_CLAUDE_0031_COMPLETION_REPORT.md
  - palma-method/research/reports/INTERNATIONAL_CASES_SHORTLIST_v0.1.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.7.md
  - palma-method/research/source-cards/alcoholics-anonymous-decentralized-governance.md
  - palma-method/research/source-cards/crossfit-affiliate-model-2000-2010s.md
  - palma-method/research/source-cards/mcalexander-hbr-2009-harley-davidson-brand-community.md
  - palma-method/research/source-cards/wikipedia-peer-production-oligarchy-2000s-2010s.md
  - "/Users/serhiinabok/Downloads/deep-research-report (1) 1908.md (untrusted lead list, not evidence)"
output_paths:
  - palma-method/research/reports/INTERNATIONAL_CASE_EVIDENCE_AUDIT_v0.2.md
  - palma-method/research/reports/INTERNATIONAL_CASE_FOUNDER_DECISION_BRIEF_v0.1.md
  - palma-method/research/reports/INTERNATIONAL_CASE_PLACEMENT_MAP_v0.2.md
  - new source cards SC-145 through SC-150 (parkrun, Dewey & LeBoeuf, Salesforce, Occupy Sandy, Stack Overflow, Mondragon)
  - dated addendum to crossfit-affiliate-model-2000-2010s.md
completion_report: palma-method/research/reports/TASK_CLAUDE_0032_COMPLETION_REPORT.md
---

# TASK_CLAUDE_0032 — International case evidence audit and founder decision brief

## Preconditions and drift found

Requested by Serhii Nabok, 2026-08-19, attaching a Classic ("ChatGPT
Classic") research report as an untrusted lead list only, explicitly not
evidence. Full precondition search performed per instruction:

- `AGENTS.md` read in full; unchanged from prior sessions' understanding.
- Working directory (`codex/prose-source-and-crossref-rules`, this
  session's starting branch) was clean but stale relative to the book's
  actual current state - **drift explicitly reported, not silently
  resolved**. The manuscript had advanced through v0.3, v0.4, v0.5, v0.6,
  and v0.7 since this session's prior work, under a new fifteen-chapter
  architecture (DECISION_0007) and a revised four-field Infrastructure
  Canvas (DECISION_0008), both approved 2026-08-17 - after this session's
  own prior TASK_CLAUDE_0026/0027 work.
- Searched all local and remote branches for the canonical v0.7 manuscript.
  Found on exactly one branch, `codex/manuscript-v07-editorial-integration`
  (remote), at commit `b50237c301368a412feda0a18a7e87006ff8b8e9`. Confirmed
  this branch is not merged into `main`, `main` is its ancestor (no
  competing or newer manuscript state exists elsewhere), and it is the sole
  location of `PALMA_METHOD_MANUSCRIPT_v0.7.md` across all branches
  checked.
- Highest genuine `TASK_CLAUDE_####` governance file found across all
  branches: `TASK_CLAUDE_0031` (a reference to "TASK_CLAUDE_0032" inside an
  unrelated Codex completion report was checked and found to be a stray
  mention, not a registered task). `TASK_CLAUDE_9992` is a known test
  fixture, excluded per instruction. Next free ID: `TASK_CLAUDE_0032`.
- A dedicated task branch, `codex/claude-international-case-audit-0032`,
  was created from the exact base commit, per instruction. Working tree was
  clean at that point; no unrelated changes were present to preserve.

## Objective

Conduct a primary-source evidence audit of ten named international case
candidates and prepare a founder-facing decision brief, so the Founder can
select approximately 6-8 cases for the final book without needing to
re-derive the underlying research.

## Required work

- Verify all ten candidates (parkrun, H.O.G., Wikipedia, Alcoholics
  Anonymous, Dewey & LeBoeuf, Occupy Sandy, Salesforce Trailblazer
  Community, Stack Overflow, Mondragon, CrossFit) against primary and
  strong independent sources, per the evidence-tier standard in the task
  brief (peer-reviewed/scholarly first; official records second;
  independent journalism third; corporate pages only for the
  organization's own stated design).
- Execute the specific required corrections and stress tests named in the
  brief: the Salesforce "Paul Adler" founder error; parkrun's "entirely
  volunteer" claim; Dewey & LeBoeuf's full reconstruction beyond "partners
  left with clients"; the Google+ exclusion rationale; Wikipedia's
  Foundation-vs-volunteer-governance split; AA's ethically careful,
  non-clinical framing; Occupy Sandy vs. TAK.Shtab; Mondragon's current
  figures and the unsupported asset-turnover claim; CrossFit's distinct
  sub-components and the 2020 Glassman controversy as a separate
  governance question; H.O.G.'s independent research base and "too
  canonical" question; Stack Overflow vs. Wikipedia.
- Produce three deliverables: a full evidence audit with the required
  per-case fields and a correction table for the Classic report; a
  founder-readable decision brief with three candidate portfolios; and a
  placement map against the actual v0.7 manuscript text, with no prose
  drafted and no manuscript edit made.
- Create source cards only for genuinely missing sources, after searching
  the existing corpus first; use dated addenda where a card already
  exists.

## Acceptance criteria

- Every material factual claim in the evidence audit cites a direct
  source, with confidence levels and evidence tiers (directly established /
  associated / supported interpretation / Palma interpretation /
  unsupported) stated explicitly.
- The Classic report's specific errors are corrected with a dedicated
  table, not silently absorbed.
- The founder decision brief is readable without opening the evidence
  audit and does not select a final portfolio on the Founder's behalf.
- The placement map identifies an exact existing passage for every
  proposed insertion and estimates word effect, without drafting
  manuscript prose or editing the manuscript.
- `ruby scripts/validate_research_package.rb` passes.
- Only the declared output paths are committed; the manuscript, Canon,
  approved decisions, Notion, and Google Docs are untouched.

## A tension surfaced, not resolved

DECISION_0007 (2026-08-17, approved) explicitly removed Dewey & LeBoeuf
from the current manuscript build "unless a later founder decision
restores a precisely bounded use." This task's own brief separately
instructed a full, detailed re-investigation of exactly that case,
including specific stress-test sub-questions. Both instructions were
followed in full: the case was reconstructed rigorously and found to fill
a genuine, currently-empty gap in Chapter 10. It has **not** been restored
to the manuscript by this task - that remains the Founder's decision,
flagged explicitly in all three deliverables and in the completion report,
consistent with `AGENTS.md`'s instruction to stop and surface a conflict
rather than invent policy.

## Allowed changes

Only the three declared reports, six new source cards (SC-145 through
SC-150), one dated addendum to an existing source card, this governance
file, and its completion report, plus regenerated validator output.

## Forbidden changes

No manuscript or snapshot edit. No finished chapter prose. No selection of
the final case portfolio on the Founder's behalf. No rewriting of any
approved decision. No branch merge. No Google Docs or Notion edit. No
regeneration of unrelated dashboards or indexes. No moving or deleting
existing artifacts. No staging of unrelated working-tree changes. No
presentation of the attached Classic report as verified evidence anywhere
in this task's output.
