---
id: TASK_CLAUDE_0027
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
  - part-iv-evidence-audit
  - part-iv-content-transfer-map
  - field-guide-appendix-draft
  - evidence-and-scientific-status-note
depends_on:
  - DECISION_0006
  - TASK_CODEX_0021
base_branch: codex/palma-method-manuscript-sync
base_commit_sha: d9538534c3845398ac058ed2a3013106dcaff515
working_branch: codex/claude-part-iv-evidence-and-appendix
personal_story_use: prohibited
input_paths:
  - AGENTS.md
  - palma-method/STATUS.md
  - palma-method/EVENT_LOG.md
  - palma-method/DECISIONS.md
  - palma-method/governance/DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md
  - palma-method/governance/DECISION_0005_PALMA_METHOD_CORE_ARCHITECTURE.md
  - palma-method/governance/DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md
  - palma-method/governance/PALMA_METHOD_CANON_v1.1.md
  - palma-method/governance/TASK_CODEX_0021_SYNCHRONIZE_PALMA_METHOD_MANUSCRIPT.md
  - palma-method/governance/TASK_CODEX_0021_COMPLETION_REPORT.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.2.md
  - palma-method/research/reports/PALMA_METHOD_MANUSCRIPT_CHANGE_LOG_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_TOOL_INSERTION_MAP_v0.1.md
  - palma-method/research/source-cards/croskerry-premature-closure.md
  - palma-method/research/source-cards/gerstner-ibm-1993-breakup-reversal.md
  - palma-method/research/source-cards/ostrom-1990-governing-the-commons.md
  - palma-method/research/source-cards/dynes-quarantelli-emergent-groups-typology.md
  - palma-method/research/source-cards/weick-mann-gulch-sensemaking-collapse.md
  - palma-method/research/source-cards/crowdstrike-outage-delta-response-2024.md
  - palma-method/research/source-cards/schein-process-consultation-and-humble-inquiry.md
  - palma-method/research/source-cards/brehm-psychological-reactance.md
  - palma-method/research/source-cards/selznick-institutionalization.md
  - palma-method/research/source-cards/vembu-zoho-2025-ceo-transition.md
output_paths:
  - palma-method/research/reports/PART_IV_EVIDENCE_AUDIT_v0.1.md
  - palma-method/research/reports/PART_IV_CONTENT_TRANSFER_MAP_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_FIELD_GUIDE_APPENDIX_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_EVIDENCE_AND_SCIENTIFIC_STATUS_v0.1.md
  - dated addenda to affected source cards, if the audit finds a drift issue
completion_report: palma-method/research/reports/TASK_CLAUDE_0027_COMPLETION_REPORT.md
---

# TASK_CLAUDE_0027 — Part IV evidence base and field-guide appendix

## Authorization and precondition verification

Requested by Serhii Nabok, 2026-08-16. Preconditions confirmed exactly as
specified: `codex/palma-method-manuscript-sync` at
`d9538534c3845398ac058ed2a3013106dcaff515` matched the remote branch tip
exactly; the working tree was clean before this task began. This commit is
one commit ahead of `f27b66b` (this session's own prior TASK_CLAUDE_0026
delivery) via TASK_CODEX_0021, which registered DECISION_0006 (resolving the
phase-architecture divergence flagged across TASK_CLAUDE_0024-0026),
Canon v1.1, and the synchronized `PALMA_METHOD_MANUSCRIPT_v0.2.md`. Next free
task ID confirmed as `TASK_CLAUDE_0027` (highest prior ID at this commit:
TASK_CLAUDE_0026). A dedicated task branch,
`codex/claude-part-iv-evidence-and-appendix`, was created from this exact
commit, per instruction.

## Objective

Separate, for Chapters 17-21 and the conclusion of `PALMA_METHOD_MANUSCRIPT_
v0.2.md`: evidence and scientific limits; practical tool specification; and
book narrative - without editing the manuscript itself. Produce a
chapter-by-chapter evidence audit of ten named claims, a content-transfer map
across four categories, a standalone practical field-guide appendix draft,
and a short scientific-status note - all as building blocks for the Chief
Editor's reassembly of Chapters 17-21, the conclusion, and any appendices.

## Required work

- **Stream 1**: verify, against primary sources and existing source cards,
  ten named claims currently in Chapters 17-21 (Croskerry/premature closure;
  Gerstner/IBM; Ostrom on boundaries/roles/instructions/salaries/reporting/
  institutional durability; Dynes & Quarantelli; Weick/Mann Gulch including
  improvisation, virtual role systems, and respectful interaction;
  CrowdStrike/Delta; Schein's process consultation, expert model, and humble
  inquiry; Brehm's psychological reactance; Selznick's institutionalization
  and its attributed "simple test"; Zoho/Vembu's role transfer). For each:
  exact manuscript formulation, source and source card, what the source
  actually supports, what is this project's own interpretation, a KEEP /
  TIGHTEN / REATTRIBUTE / REMOVE decision, and a safe replacement building
  block (not finished prose).
- **Stream 2**: sort Chapters 17-21 and the conclusion into four categories
  (stay in main narrative; shorten in main narrative; move to a practical
  appendix; move to a scientific note), with particular attention to the
  Relationship Map / Infrastructure Canvas / Response Signals / Handoff Test
  tool blocks, the conclusion's client-and-manager example, the four
  scientific-status layers, the TCF five-interview coding description, and
  the bounded prior-art search detail. Nothing is deleted from the
  manuscript; every moved block gets an exact origin and destination.
- **Stream 3**: draft `PALMA_METHOD_FIELD_GUIDE_APPENDIX_v0.1.md`, a
  standalone appendix in thirteen required sections, using only confirmed
  material - no invented effectiveness evidence, explicit distinction
  between example, retrospective reconstruction, and test.
- **Stream 4**: draft `PALMA_METHOD_EVIDENCE_AND_SCIENTIFIC_STATUS_v0.1.md`,
  separating established science, Palma's synthesis, the narrow candidate
  novelty, untested propositions, what the TCF exploratory coding did and
  did not show, prior-art search limits, and a minimal future validation
  program - holding the position at "defensible conceptual novelty with
  untested propositions," not upgraded.

## Acceptance criteria

- Every one of the ten Stream 1 claims receives all six required fields, and
  no unavailable primary full text is silently replaced by a secondary
  paraphrase without saying so.
- The content-transfer map leaves the manuscript itself untouched and gives
  an exact origin/destination for every moved block.
- The field-guide appendix invents no effectiveness evidence and keeps
  TAK.Shtab, TCF, and Bombom within their confirmed, already-established
  evidentiary bounds.
- The scientific-status note does not upgrade the position beyond
  "defensible conceptual novelty with untested propositions."
- `ruby scripts/validate_research_package.rb` passes.
- Only the declared output paths, plus any warranted dated source-card
  addenda, are committed; the manuscript is not edited; no branch merge or
  pull request is created without separate authorization.

## Allowed changes

Only the four declared reports, dated addenda to source cards where Stream 1
finds a genuine drift issue, this governance file, and its completion
report, plus regenerated validator output if a source card is touched.

## Forbidden changes

No manuscript edit. No padding for word count. No rewriting chapters as
finished prose. No change to the approved Method architecture (DECISION_0006
stands as delivered). No claim of empirical or scientifically validated
novelty. No edits to Chapters 1-16. No regeneration of unrelated indexes or
the dashboard. No private transcript material committed to GitHub. No branch
merge or pull request without separate authorization.
