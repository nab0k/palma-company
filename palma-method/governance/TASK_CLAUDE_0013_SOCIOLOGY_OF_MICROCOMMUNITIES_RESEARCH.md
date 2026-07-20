---
id: TASK_CLAUDE_0013
type: task
status: authorized
owner: claude
reviewer: chief_editor
created: 2026-07-17
updated: 2026-07-17
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - sociology-of-microcommunities-brief
  - corrective-part-iii-research
  - source-card-development
depends_on:
  - TASK_CLAUDE_0011
  - TASK_CODEX_0012
personal_story_use: prohibited
---

# TASK_CLAUDE_0013 — Sociology of Microcommunities Research v0.1

## Authorization

Authorized by Serhii Nabok on 2026-07-17 as the next research dependency for
TASK_CLAUDE_0012. Claude may execute this task after Codex supplies the
canonical repository package.

## Role

Research Synthesizer. Produce a corrective research brief, not manuscript
prose and not a new proprietary framework.

## Objective

Create `SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md`: a bounded,
source-traceable brief that tests the assumptions of Part III (Chapters 11–16)
against relevant sociology of small groups, recurring interaction, local norms,
boundaries, collective capacity, and emergent social forms.

The brief must help TASK_CLAUDE_0012 correct Part III without making community
the default organizational goal and without redesigning Palma Method.

## Required inputs

- `TASK_CLAUDE_0012_RECOVERY_RECORD.md`
- `CHAPTER_11_v0.1.md` through `CHAPTER_16_v0.1.md`
- `WAVE_3_CROSS_CHAPTER_MAP.md`
- `WAVE_3_EVIDENCE_GAP_LOG.md`
- current source cards and `VERIFICATION_ISSUES.md`
- accepted working versions of Chapters 3, 4, 5, 6, 9, and 10 for terminology
  continuity only

Do not use draft Palma Method or author-voice documents as authority.

## Research questions

1. What is the smallest analytically useful social unit for Part III: an
   individual tie, recurring interaction, microgroup, local social world, or
   another form?
2. How do local norms, informal roles, mutual recognition, shared memory, and
   obligations emerge through repeated interaction?
3. How do boundaries, bridges, insiders, outsiders, and intermediaries shape
   access, knowledge, conflict, and coordination?
4. How should the book distinguish collective efficacy, collective capacity,
   participation, solidarity, identity, and coordinated action?
5. What do temporary, fragile, conflictual, or dissensual social forms reveal
   about the assumption that community is a stable or desirable destination?
6. Which social conditions can organizations design, and which outcomes—trust,
   identity, solidarity, belonging—can only emerge, mutate, or fail?
7. What ethical and power risks appear when organizations map, activate,
   measure, govern, or extract value from microgroups?
8. Which findings materially correct Chapters 11–16, and which should be
   rejected as irrelevant, overbroad, or insufficiently verified?

## Evidence requirements

- Prefer primary scholarly sources and authoritative original publications.
- Distinguish empirical findings, theoretical propositions, interpretive
  synthesis, and practitioner guidance.
- State scale, context, transfer risk, and known limitations for every concept
  recommended for Part III.
- Do not turn typologies into causal laws.
- Verify primary work before attributing claims to Erving Goffman, Randall
  Collins, Gary Alan Fine, Etienne Wenger, collective-efficacy scholarship,
  boundary-work scholarship, communities of fate, dissensus, or temporary and
  wispy communities.
- Do not import claims attributed to Viktor Vakhstayn from a supplied summary
  without locating and checking a primary publication. Exclude the claim and
  log the gap if primary verification is unavailable.
- Reuse current source-card IDs where the source already exists. Start new
  source-card IDs at SC-037 and avoid collisions.

## Required outputs

1. `research/syntheses/SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md`
2. New source cards required to support the brief, beginning at SC-037.
3. `research/open-questions/SOCIOLOGY_OF_MICROCOMMUNITIES_EVIDENCE_GAP_LOG_v0.1.md`
4. `research/reports/TASK_CLAUDE_0013_COMPLETION_REPORT.md`

The brief must include:

- executive correction to Part III;
- terminology and units-of-analysis table;
- findings organized by the research questions above;
- concept-to-source traceability;
- explicit “use / use with qualification / reject or defer” decisions;
- chapter-specific implications for Chapters 11–16;
- contradictions and evidence gaps;
- a short boundary note explaining why the brief does not define Palma Method.

## Exclusions

Do not:

- edit Chapter 11–16 packets;
- write manuscript prose;
- edit accepted chapters;
- redesign Palma Method;
- use Collective Fitness or private personal material;
- invent organizational cases;
- create a universal community maturity model;
- create a universal Relationship Capital score;
- mark any artifact accepted;
- modify dashboards, generated indexes, scripts, tests, or governance files.

## Definition of done

The task is complete only when every recommended correction is traceable to a
source or explicit open verification issue, the brief distinguishes social
forms without ranking community as the universal endpoint, limits of
organizational design and measurement are explicit, chapter implications are
actionable for TASK_CLAUDE_0012, and all required outputs and protection
confirmations appear in the completion report.
