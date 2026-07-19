---
id: TASK_CLAUDE_0017
type: task
status: authorized
owner: claude
reviewer: chief_editor
created: 2026-07-19
updated: 2026-07-19
privacy_level: internal
project: palma-method-book
priority: critical
scope:
  - canonicalize-palma-method-v1
  - build-part-iv-chapter-packets
  - draft-part-iv-manuscript
  - draft-conclusion
  - preserve-evidence-and-privacy-boundaries
depends_on:
  - TASK_CLAUDE_0016
  - DECISION_0005
personal_story_use: prohibited
base_branch: codex/sc040-full-text-repair-claude-0016
base_commit_sha: 2e93518acc411734ce3e40e63d68f83567490c3e
working_branch: codex/method-canon-part-iv-0017
input_paths:
  - palma-method/governance/DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md
  - palma-method/governance/DECISION_0005_PALMA_METHOD_CORE_ARCHITECTURE.md
  - palma-method/research/decision-memos/PART_III_ARCHITECTURE_DECISION_v0.1.md
  - palma-method/research/chapter-packets/CHAPTER_11_v0.2.md
  - palma-method/research/chapter-packets/CHAPTER_12_v0.3.md
  - palma-method/research/chapter-packets/CHAPTER_13_v0.2.md
  - palma-method/research/chapter-packets/CHAPTER_14_v0.3.md
  - palma-method/research/chapter-packets/CHAPTER_15_v0.3.md
  - palma-method/research/chapter-packets/CHAPTER_16_v0.4.md
  - palma-method/manuscript/part-4/17-diagnose.md
  - palma-method/manuscript/part-4/18-design.md
  - palma-method/manuscript/part-4/19-launch.md
  - palma-method/manuscript/part-4/20-advise.md
  - palma-method/manuscript/part-4/21-handover.md
  - palma-method/manuscript/99-conclusion.md
external_inputs:
  claude_thread: Palma Method Core specification
  required_source_drafts:
    - PALMA_METHOD_CORE_v0.1.md
    - PALMA_CANON_v0.1.md
    - PALMA_METHOD_PROTOCOL_v0.1.md
    - PALMA_METHOD_DECISION_TREE_v0.1.md
    - PALMA_METHOD_SIX_ARTIFACTS_v0.1.md
    - PALMA_METHOD_FULL_TEXT_v1.0.md
  excluded_source:
    - PALMA_METHOD_CASE_TEST_v0.1_SempreFixe.md
output_paths:
  - palma-method/governance/PALMA_METHOD_CANON_v1.0.md
  - palma-method/research/chapter-packets/CHAPTER_17_v0.1.md
  - palma-method/research/chapter-packets/CHAPTER_18_v0.1.md
  - palma-method/research/chapter-packets/CHAPTER_19_v0.1.md
  - palma-method/research/chapter-packets/CHAPTER_20_v0.1.md
  - palma-method/research/chapter-packets/CHAPTER_21_v0.1.md
  - palma-method/research/chapter-packets/CONCLUSION_v0.1.md
  - palma-method/manuscript/part-4/17-diagnose.md
  - palma-method/manuscript/part-4/18-design.md
  - palma-method/manuscript/part-4/19-launch.md
  - palma-method/manuscript/part-4/20-advise.md
  - palma-method/manuscript/part-4/21-handover.md
  - palma-method/manuscript/99-conclusion.md
  - palma-method/research/reports/TASK_CLAUDE_0017_COMPLETION_REPORT.md
completion_report: palma-method/research/reports/TASK_CLAUDE_0017_COMPLETION_REPORT.md
final_commit_sha: pending
---

# TASK_CLAUDE_0017 — Canonicalize Palma Method and draft Part IV

## Authorization

Authorized by Founder Serhii Nabok on 2026-07-19 when he approved immediate fixation of the six-phase Method and instructed the team to begin Chapters 17–21 and the conclusion. This task explicitly authorizes edits to the six named manuscript skeletons. It does not accept the resulting prose as final publication copy.

## Objective

Turn the completed Claude Method drafts into one repository-canonical Method governed by DECISION_0005, then create the missing Part IV and conclusion research packets and continuous manuscript drafts. Complete the largest remaining structural gap without waiting for Collective results or the final author-voice document.

## Required work

### A. Canonical Method

Create `PALMA_METHOD_CANON_v1.0.md` from the six declared source drafts. Preserve useful detail, but conform all terminology and logic to DECISION_0005 and DECISION_0003. Explicitly distinguish the six-phase Method core from the five-chapter client-engagement route. Record the status of any source-draft material not incorporated.

### B. Part IV packets

Create append-only v0.1 packets for Chapters 17–21 and the conclusion. Each packet must contain: chapter purpose, central argument, phase mapping, claims and evidence table, practical tools, counterarguments, risks of overclaiming, connections, draft structure, sources, verification gaps, and editorial decisions.

### C. Manuscript drafting

Replace only the six declared manuscript skeletons with substantial draft prose grounded in the packets. The prose must be readable as a continuous Part IV and conclusion, not as consulting documentation. Do not imitate an unapproved author voice. Avoid generic AI formulas, invented scenes, invented cases, unsupported claims of effectiveness, and unnecessary proprietary naming.

### D. Collective boundary

Collective may appear only as a clearly labeled prospective field application or editorial placeholder. Do not invent interviews, observations, diagnoses, quotations, outcomes, or consent. Part IV must remain complete and useful if the Collective material is later omitted.

### E. Conclusion

The conclusion must close the book's argument without claiming that every organization needs a community, without presenting relationship-building as automatically beneficial, and without turning into a sales pitch. Any return to an opening scene must use an existing approved scene or remain a labeled placeholder.

## Acceptance criteria

- One canonical Method document uses Orient, Diagnose, Decide, Design, Enable, Evaluate consistently.
- Relationship Capital matches DECISION_0003.
- Part IV chapter titles remain Diagnose, Design, Launch, Advise, Handover and are mapped exactly as DECISION_0005 states.
- Six versioned packets exist with traceable claims and open gaps.
- Six manuscript skeletons become coherent draft chapters/conclusion.
- No Collective result, personal story, private conversation, or Sempre Fixe material is invented or used.
- The manuscript does not rely on Collective for structural completeness.
- Chapter 21 prevents permanent adviser dependency rather than presenting Handover as a seventh Method phase.
- Completion report lists exact inputs, outputs, unresolved risks, and protected files.

## Allowed changes

Only the declared output paths. Read the declared inputs and the non-excluded Method source drafts. Shorten or reconcile draft Method material as required by approved decisions.

## Forbidden changes

Do not edit Parts I–III manuscript files, accepted decisions, prior chapter packets, source cards, verification records, voice drafts, Collective Fitness files, generated indexes, Notion, private transcripts, or the excluded Sempre Fixe case test. Do not commit, stage, push, merge, or switch Git branches; Codex owns integration.
