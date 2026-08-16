---
id: TASK_CLAUDE_0026
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
  - close-network-formation-organizer-dependence-prior-art-gap
  - execute-preregistered-exploratory-tcf-coding
  - book-facing-scientific-claims-update
depends_on: []
base_branch: codex/prose-source-and-crossref-rules
base_commit_sha: 54e043dda7fa0dc9fc1c3ddc467f99d40dba3649
working_branch: codex/prose-source-and-crossref-rules
personal_story_use: prohibited
input_paths:
  - palma-method/research/reports/PALMA_TRANSITION_MODEL_STRESS_TEST_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_PRIOR_ART_MATRIX_v0.1.md
  - palma-method/research/reports/PALMA_METHOD_FALSIFIABLE_PROPOSITIONS_v0.1.md
  - palma-method/research/source-cards/tcf-francisco-member-interview-2026-08-14.md
  - palma-method/research/source-cards/tcf-rami-member-interview-2026-08-14.md
  - palma-method/research/source-cards/tcf-anya-member-interview-2026-08-15.md
  - palma-method/research/source-cards/tcf-luciana-member-interview-2026-08-15.md
  - palma-method/research/source-cards/tcf-low-regularity-member-intake-2026-08-15.md
output_paths:
  - palma-method/research/reports/PALMA_TRANSITION_MODEL_PRIOR_ART_CLOSURE_v0.1.md
  - palma-method/research/reports/TCF_TRANSITION_MODEL_EXPLORATORY_CODING_v0.1.md
  - palma-method/research/reports/PALMA_SCIENTIFIC_CLAIMS_UPDATE_v0.1.md
  - addendum to PALMA_METHOD_PRIOR_ART_MATRIX_v0.1.md
  - addendum to PALMA_METHOD_FALSIFIABLE_PROPOSITIONS_v0.1.md
completion_report: palma-method/research/reports/TASK_CLAUDE_0026_COMPLETION_REPORT.md
---

# TASK_CLAUDE_0026 — Close the Palma Transition Model evidence gaps and run the preregistered exploratory TCF coding

## Authorization

Requested by Serhii Nabok, 2026-08-16. Preconditions verified exactly as
stated: branch `codex/prose-source-and-crossref-rules`, HEAD
`54e043dda7fa0dc9fc1c3ddc467f99d40dba3649`, clean working tree, next free
task ID `TASK_CLAUDE_0026` - no drift found this time. The Founder's
selection of `Diagnose → Design → Launch → Transfer` (Facilitate/Advise
cross-cutting) as the editorial architecture, and Codex's separate handling
of its formal decision and manuscript integration, are both noted per this
task's preconditions and not duplicated or touched by this task's work.

## Objective

Complete the two evidence tasks TASK_CLAUDE_0024-0025 left open: close the
remaining prior-art gap around network formation, network interventions, and
organizer dependence, and execute the exploratory coding protocol already
specified in TASK_CLAUDE_0025 against the five existing TCF interview cards.
Determine whether "defensible conceptual novelty with untested propositions"
survives this closer scrutiny.

## Required work

- Stream 1: targeted primary-source search across social-network
  interventions, endogenous network formation, relational-event models,
  stochastic actor-oriented models, broker/hub/organizer dependence,
  shared/distributed leadership, network governance, community
  self-organization, founder succession, relational coordination,
  community-organizing handoff, and emergent organization/collective action -
  checking specifically whether participant-initiated consequential action
  has already been proposed as a dyadic mechanism for network persistence,
  whether organizer-independence has already been used as an operational
  threshold, whether "routes of continuation" exists under another name, and
  whether P6/P7 are genuinely new.
- Stream 2: execute the TASK_CLAUDE_0025 preregistration protocol against
  exactly SC-095 through SC-099 (2026-08-16 cutoff, no later interviews
  included), coding four variables transparently with source-card ID,
  public-safe evidence reference, code, confidence, whether the subject was
  asked, and present/absent/unclear/not-asked - descriptive counts only.
- Stream 3: book-facing building blocks (not finished prose) covering the
  strongest supportable scientific-status statement, the narrow novelty
  statement, what TCF does and does not allow the book to say, propositions
  needing weakening, definition modifications, and exact claims for Codex to
  insert/avoid/qualify during manuscript synchronization - specifically
  replacing "tested through real client work" framing.

## Acceptance criteria

- The network-intervention/organizer-dependence gap is genuinely
  investigated, with DOIs and access-qualification recorded honestly,
  including where primary full-text verification was attempted and failed.
- Every TCF code is traceable to its source card, distinguishes absence from
  missing evidence, and uses no real participant names or private transcript
  material.
- No empirical or worldwide-originality overclaim is made anywhere in the
  three deliverables.
- The result states plainly whether the selected position (defensible
  conceptual novelty with untested propositions) survives, weakens, or should
  be abandoned.
- The prior-art matrix and falsifiable-propositions reports are updated only
  through dated, additive addenda - no earlier conclusion is silently
  replaced.
- `ruby scripts/validate_research_package.rb` passes.
- Only the declared output paths are committed and pushed.

## Allowed changes

Only the three new v0.1 reports, the two addenda described above, this
governance file, and its completion report, plus regenerated validator
output if triggered (none expected, since no source card's YAML frontmatter
is edited).

## Forbidden changes

No manuscript, Google Docs, Notion, or approved-decision edits. No
duplication of Codex's separate phase-architecture decision or manuscript
integration work. No private transcript, audio, or verbatim third-party
material committed to GitHub. No claim that the model or any Palma tool has
been empirically validated. No silent rewriting of TASK_CLAUDE_0024's or
TASK_CLAUDE_0025's prior conclusions - only traceable, additive addenda.
