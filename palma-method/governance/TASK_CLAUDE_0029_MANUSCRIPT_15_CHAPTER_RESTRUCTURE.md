---
id: TASK_CLAUDE_0029
type: task
status: delivered
owner: claude
reviewer: chief_editor
created: 2026-08-17
updated: 2026-08-17
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - manuscript-15-chapter-restructure-validation
  - content-transfer-map
  - theory-and-case-placement-map
  - vipassana-kichkine-evidence-gap-audit
depends_on:
  - DECISION_0006
base_branch: codex/ch1-ch2-handoff-v04
base_commit_sha: e6d9aee88789e8c32d409336c4ed27ac9dcec623
working_branch: codex/claude-15-chapter-restructure-map
personal_story_use: prohibited
input_paths:
  - AGENTS.md
  - palma-method/README.md
  - palma-method/STATUS.md
  - palma-method/governance/DECISION_0006_PALMA_METHOD_FOUR_STAGE_ARCHITECTURE.md
  - palma-method/governance/PALMA_METHOD_CANON_v1.1.md
  - palma-method/governance/FRONTMATTER_SPEC.md
  - palma-method/governance/tasks/TASK_TEMPLATE.md
  - palma-method/governance/TASK_CLAUDE_0028_INFRASTRUCTURE_CANVAS_AUDIT.md
  - palma-method/governance/TASK_CLAUDE_0028_COMPLETION_REPORT.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.4.md
  - palma-method/research/source-cards/pagis-2015-evoking-equanimity-vipassana.md
  - palma-method/research/source-cards/serhii-vipassana-retreat-story-intake.md
  - palma-method/research/source-cards/serhii-kichkine-childhood-story-intake.md
  - palma-method/research/source-cards/serhii-anton-nosik-half-brother-intake.md
  - palma-method/research/source-cards/serhii-tak-shtab-story-intake.md
  - palma-method/research/source-cards/tak-shtab-taktion-uleadeurope-institutionalization.md
  - palma-method/research/source-cards/gerstner-ibm-1993-breakup-reversal.md
  - palma-method/research/source-cards/mcalexander-hbr-2009-harley-davidson-brand-community.md
  - palma-method/research/source-cards/google-plus-2011-2019-engagement-failure.md
  - palma-method/research/source-cards/polaroid-2008-2017-brand-revival-after-bankruptcy.md
  - palma-method/research/source-cards/pan-am-1991-brand-survival-licensing.md
  - palma-method/research/source-cards/triumph-motorcycles-1983-brand-revival-john-bloor.md
  - palma-method/research/source-cards/airbnb-peer-trust-vs-hotel-brand-trust.md
  - palma-method/research/source-cards/uber-airbnb-reputation-vs-legitimacy-early-years.md
  - palma-method/research/reports/INFRASTRUCTURE_CANVAS_INTERNAL_AUDIT_v0.1.md
output_paths:
  - palma-method/research/reports/MANUSCRIPT_15_CHAPTER_RESTRUCTURE_MAP_v0.1.md
  - palma-method/research/reports/THEORY_AND_CASE_PLACEMENT_MAP_v0.1.md
  - palma-method/research/reports/VIPASSANA_AND_KICHKINE_EVIDENCE_GAPS_v0.1.md
completion_report: palma-method/governance/TASK_CLAUDE_0029_COMPLETION_REPORT.md
---

# TASK_CLAUDE_0029 — Manuscript 15-chapter restructure: research and editorial-architecture package

## Authorization and precondition verification

Requested by Serhii Nabok, 2026-08-17, as the next free `TASK_CLAUDE_NNNN` ID.
Preconditions checked directly, per AGENTS.md's start protocol, before any
work began:

- **Base branch and commit.** A fresh clone of `nab0k/palma-company` was
  fetched and confirmed to sit exactly at `codex/ch1-ch2-handoff-v04` @
  `e6d9aee88789e8c32d409336c4ed27ac9dcec623` — the same base as
  `TASK_CLAUDE_0028`, with a clean working tree before any file was touched.
- **Next free Claude task ID.** Because `TASK_CLAUDE_0028`'s branch
  (`codex/claude-infrastructure-canvas-audit`) is not yet merged into the
  base branch, a repository-wide search across **all remote branches** (not
  only the base branch) for `TASK_CLAUDE_[0-9]{4}` was required. The
  highest existing real task ID found this way was `TASK_CLAUDE_0028`.
  `TASK_CLAUDE_0029` is confirmed as the genuinely next free ID.
- **Working branch.** A dedicated task branch,
  `codex/claude-15-chapter-restructure-map`, was created from the exact
  base commit above.
- **Push credentials, checked and disclosed up front.** This session has
  read access to the repository (an anonymous HTTPS clone) but no
  configured push credential (no `GITHUB_TOKEN`, no SSH key). All work
  below was completed and committed locally on the declared task branch, at
  the exact base commit, touching only the declared output paths. See the
  completion report for exact handoff instructions.

## Objective

Produce a research and editorial-architecture package supporting a planned
restructure of the Palma Method manuscript from its current ~21 chapters to
a proposed 15-chapter architecture, per founder-approved editorial
directions (Bombom fully removed from the main narrative; Vipassana and
Kichkine become standalone chapters; TCF becomes a throughline research
lab; TAK.Shtab is told once, fully, and chronologically; Anton Nosik's
story merges into the hubs/brokerage/network-vulnerability theme rather
than getting a standalone chapter; the Palma Method itself appears late, as
a research result; several short, interchangeable business cases are
removed or flagged for review; internal chapter cross-references are
largely removed; and target content proportions and international-case
count are specified). This task does **not** edit the manuscript, Canon, or
any existing Decision file — its deliverables are a validation, a transfer
map, a theory/case placement map, and an evidence-gap audit, meant to
inform a **future**, separately authorized manuscript-editing task.

## Required work

1. **Architecture validation.** Read the full current manuscript
   (`PALMA_METHOD_MANUSCRIPT_v0.4.md`, all ~21 chapters plus front and end
   matter) in full, and assess the proposed 15-chapter architecture against
   it chapter by chapter: does an equivalent unit already exist (direct),
   is the material present but scattered (assemble), does the current
   occupant of that narrative slot depend on material being removed
   (reconstruct), or does no equivalent exist at all (new).
2. **Content-transfer map.** For every current chapter/unit, record its
   destination in the new architecture and its disposition (move, merge,
   split, archive).
3. **TCF and TAK.Shtab duplication.** Locate every appearance of TCF and of
   TAK.Shtab material across the current manuscript and propose a canonical
   full-story location for each, consistent with the founder's instruction
   that TAK.Shtab be told once, fully, and chronologically, and that TCF
   become a throughline.
4. **Theory-loss/duplication risk.** Identify scholars and theories at risk
   of being lost (their only concrete illustration lives in a chapter being
   archived or heavily reconstructed) or duplicated (told fully in more
   than one surviving chapter) by the restructure.
5. **Scholar bridges.** For scholars whose placement changes materially
   under the restructure, record the bridge: practical leadership problem
   → research question → the scholar's actual work → the actual finding →
   its limitation → its application in the Palma model.
6. **Vipassana evidence audit.** Review existing Vipassana material,
   including SC-051 (Pagis 2015) and SC-054 (the author's own retreat
   account), and list confirmed claims, evidence gaps, and any new source
   cards genuinely required.
7. **Kichkine evidence audit.** Review existing Kichkine material (SC-047)
   and separate the author's personal memory from externally verifiable
   historical/institutional context.
8. **International case selection.** Propose 6-8 international cases drawn
   only from the existing source-card corpus, ideally as contrastive pairs,
   explaining each case's precise function; where the corpus does not
   supply enough strong candidates for a specific chapter's narrow need,
   name the gap explicitly rather than substituting an arbitrary case.
9. **Decisions register.** Separately list decisions that must be formally
   recorded (by the Founder or Chief Editor, not by this task) before any
   manuscript editing begins.
10. **No new chapter prose.** The deliverable is an executable editorial
    blueprint — tables, transfer maps, and findings — not manuscript text.

## Findings requiring decision

See `MANUSCRIPT_15_CHAPTER_RESTRUCTURE_MAP_v0.1.md`, Section 6, for the full
decisions register (D1-D8). Summarized: two personal-story source cards
central to the proposed architecture (SC-047 Kichkine, SC-093 Anton Nosik)
are not yet author-approved for manuscript use and block finalizing their
respective chapters; the founder's "Nvidia/OpenAI" removal instruction maps
cleanly onto one in-manuscript use (the Ch.6 Nvidia-deal story) but is
ambiguous against a second, structurally different use (the Ch.9
OpenAI/Altman hub-fragility case); old Chapter 16's core argument is built
on a Bombom-vs-TCF structural device that does not survive Bombom's removal
without either a substitute contrast case or a documented content loss; and
the Facilitate/Advise Интерлюдия currently has no numbered slot in the
proposed 15-chapter architecture and needs an explicit disposition.

## Acceptance criteria

- All three named deliverables exist, are internally consistent with each
  other, and cite only material actually found in the manuscript or
  existing source cards during this task (no invented cases, quotes, or
  scholar findings).
- The content-transfer map accounts for every current numbered chapter and
  the Введение/Интерлюдия/Заключение/Приложения units.
- The international-case selection stays within the existing corpus and
  names gaps explicitly where the corpus is insufficient, per instruction 8.
- No manuscript, Canon, or Decision file is modified.
- No personal-story material is newly cleared for `personal_story_use` by
  this task — approval gates found in existing cards (SC-047, SC-093) are
  reported, not resolved, by a research task.

## Allowed changes

- Create the three named reports under `palma-method/research/reports/`.
- Create this task file and its completion report under
  `palma-method/governance/`.

## Forbidden changes

- Any edit to `palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.4.md`.
- Any edit to Canon or Decision files.
- Any edit to existing source cards (read-only for this task; no new source
  cards were found to be genuinely required — see the Vipassana/Kichkine
  evidence-gaps report).
- Opening or merging a pull request.
