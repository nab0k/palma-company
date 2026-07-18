---
id: TASK_CLAUDE_0014
type: task
status: authorized
owner: claude
reviewer: chief_editor
created: 2026-07-18
updated: 2026-07-18
privacy_level: internal
project: palma-method-book
priority: high
scope:
  - verify-sc-039
  - repair-part-iii-evidence-gaps
  - assemble-published-case-candidates
depends_on:
  - TASK_CODEX_0015
personal_story_use: prohibited
base_branch: codex/part-iii-readiness-0015
base_commit_sha: 6129652d4ce7fcdfc5d0cd32b11331783fb8272c
working_branch: codex/part-iii-evidence-repair-claude-0014
input_paths:
  - palma-method/research/reports/PART_III_EDITORIAL_READINESS_REVIEW_v0.1.md
  - palma-method/research/chapter-packets/CHAPTER_11_v0.2.md
  - palma-method/research/chapter-packets/CHAPTER_12_v0.2.md
  - palma-method/research/chapter-packets/CHAPTER_13_v0.2.md
  - palma-method/research/chapter-packets/CHAPTER_14_v0.2.md
  - palma-method/research/chapter-packets/CHAPTER_15_v0.2.md
  - palma-method/research/chapter-packets/CHAPTER_16_v0.2.md
  - palma-method/research/source-cards/fine-vandenscott-2011-wispy-communities.md
  - palma-method/research/source-cards/sampson-raudenbush-earls-1997-collective-efficacy.md
  - palma-method/research/open-questions/WAVE_3_EVIDENCE_GAP_LOG_v0.2.md
  - palma-method/research/verification/VERIFICATION_ISSUES.md
output_paths:
  - palma-method/research/syntheses/PART_III_EVIDENCE_REPAIR_v0.1.md
  - palma-method/research/reports/PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md
  - palma-method/research/open-questions/PART_III_EVIDENCE_REPAIR_GAP_LOG_v0.1.md
  - palma-method/research/reports/TASK_CLAUDE_0014_COMPLETION_REPORT.md
completion_report: palma-method/research/reports/TASK_CLAUDE_0014_COMPLETION_REPORT.md
final_commit_sha: pending
---

# TASK_CLAUDE_0014 — Part III evidence and example repair

## Authorization

Authorized by Serhii Nabok on 2026-07-18 through the standing instruction to
continue Codex and Claude project work until he says stop, and reconfirmed by
his instruction to move forward after delivery of TASK_CODEX_0015.

## Objective

Produce one bounded, traceable research package that removes the most important
evidence obstacles identified by the Part III readiness review and supplies one
published-case candidate for each Chapter 11–16. This task prepares later packet
revision; it does not revise packets or manuscript prose itself.

## Required research

### A. SC-039 / VI-022 full-text verification

- Locate and read the full original Fine & van den Scott (2011) article on
  wispy communities.
- Record bibliographic coordinates, access route, exact claim support in
  paraphrase, scope, sample/context, limitations, and whether the current uses
  in Chapters 12 and 16 should be `use`, `use_with_qualification`, or `defer`.
- Do not store or reproduce the copyrighted full text. Short quotations, if
  essential, must stay within copyright limits and include a page number.

### B. Chapter 12 privacy and internal-use basis

- Find primary or authoritative sources relevant to ethical organizational or
  social-network mapping, privacy, boundary visibility, and harm from exposing
  informal relationships or microgroups.
- State whether the evidence supports a formal internal-use restriction,
  access controls, participant consent, data minimization, or a narrower rule.
- Separate evidence from Palma editorial recommendation.

### C. Chapter 15 group-level measurement gap

- Search for validated or well-specified approaches to microgroup durability,
  role transfer/succession, participation concentration, and founder dependence
  in organizational or adjacent group settings.
- Do not invent a universal instrument or composite Relationship Capital score.
- If no adequate instrument exists, document the negative finding and define
  what can only be presented as provisional practitioner judgment.

### D. Published-case candidates for Chapters 11–16

- Supply exactly one preferred published-case candidate per chapter, plus at
  most one alternate when the preferred case has a material weakness.
- Each candidate must include: chapter fit, teachable mechanism, public source
  links, evidence quality, limitations, permission/copyright considerations,
  factual claims safe to use, claims not safe to make, and a decision of
  `use`, `use_with_qualification`, or `defer`.
- Cases must illustrate the chapter's argument rather than serve as decorative
  anecdotes. Do not write them in Serhii's voice.

## Allowed changes

- Read the declared repository inputs and conduct only the external research
  listed above.
- Add the four declared output documents with claim-level citations and stable
  internal cross-references.
- Record unresolved gaps honestly and recommend bounded packet deltas.

## Forbidden changes

- Do not edit manuscript files, Chapter 11–16 packets, existing source cards,
  the canonical verification registry, approved decisions, generated files, or
  prior reports.
- Do not define or redesign Palma Method.
- Do not use Collective Fitness, private conversations, unpublished personal
  stories, or the unfinished author-voice material.
- Do not invent field observations, cases, statistics, instruments, page
  numbers, source access, or verification status.
- Do not weaken qualifications already present in the packets.
- Do not commit, push, merge, switch branches, or stage unrelated local files;
  Codex owns repository integration and publication.

## Acceptance criteria

- The SC-039 determination is based on the full original text or is explicitly
  reported blocked; abstract-only review cannot be relabeled full verification.
- Chapter 12 and 15 findings distinguish evidence from recommendation and name
  negative findings where appropriate.
- Six preferred published-case candidates are present and traceable.
- Every factual claim has a source link and enough bibliographic information to
  create or update a canonical source card later.
- The four exact outputs are the only files created or modified by Claude.
- The completion report lists sources consulted, unresolved gaps, proposed
  packet deltas, and confirms protected files were untouched.

## Start record

Codex created this task from the published head of PR #6. The shared worktree is
already on the declared working branch. The root README modification and other
unrelated local files predate this task and must remain unstaged and untouched.
