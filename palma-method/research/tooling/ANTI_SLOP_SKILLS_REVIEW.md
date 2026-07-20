---
id: REVIEW_ANTISLOP_0001
type: review
status: draft
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 1
subject_refs:
  - POLICY_PROSE_QUALITY_0001
---

# Anti-slop and human-writing skills review

## Method and boundary

Read-only review of public GitHub repositories on 2026-07-17. Repository
instructions, READMEs, skill files, licenses, and recent commit state were
inspected. No skill, package, rule set, or dependency was installed, copied, or
vendored.

An anti-slop layer can identify recurring defects. It cannot supply Serhii
Nabok's voice, lived experience, opinions, or evidence.

## Candidate assessment

| Candidate | Snapshot / license | Intended use | Strengths | Material risks | Palma recommendation |
|---|---|---|---|---|---|
| [stephenturner/skill-deslop](https://github.com/stephenturner/skill-deslop) | `a906154bef375d9d49ed2ad7da13b2db16f0d3d2`; MIT | Agent skill for long and technical prose | Strong on filler, vague attribution, false agency, density, and evidence specificity; useful review rubric | Absolute bans on em dashes, tricolons, fragments, and passive voice can erase intentional rhythm and valid scholarly construction; small history | Adapt selected diagnostics only; do not install |
| [blader/humanizer](https://github.com/blader/humanizer) | `1b48564898e999219882660237fde01bf4843a0f`; MIT | Portable editing skill, including optional voice calibration | Broad pattern catalog; meaning-preservation and register guidance; author-sample calibration is conceptually useful | Default “opinionated” voice and deliberate mess can fabricate stance or distort a serious book; pattern breadth can overcorrect | Reject default rewrite mode; consider diagnostic taxonomy after review |
| [jpeggdev/humanize-writing](https://github.com/jpeggdev/humanize-writing) | `da03340e5bb38cdf412f697aca66d113560f75b2`; MIT | Lightweight humanization skill | Explicit attention to false positives and pattern stacking; compact enough to audit | “Human” remains underspecified; automatic rewrites may replace one recognizable template with another | Adapt only review questions; no automatic chapter pass |
| [aaaronmiller/humanize-writing](https://github.com/aaaronmiller/humanize-writing) | `c07a2a8dab1f6033ad0da713766df43d0dc374b9`; MIT | Detailed writing-analysis package | Extensive checks and measurable review prompts | Quantitative style thresholds and detection-performance claims can create false certainty; optimizing to thresholds flattens voice and encourages gaming | Reject as a normative or scoring system; mine no rules without separate evidence review |

Maintenance activity is a weak quality signal. `blader/humanizer` showed recent
changes near the review date; `skill-deslop` had a much smaller history. The
two other skills were also updated in 2026. None was treated as authoritative
because of popularity or recency.

## Mature prose-lint approaches

- [Vale](https://github.com/vale-cli/vale), MIT: markup-aware, configurable,
  deterministic style linting. It is the strongest architectural reference for
  separating house rules, severity, scopes, and exceptions. Adding its binary
  or rules is a separate dependency decision.
- [alex](https://github.com/get-alex/alex), MIT: focused on insensitive or
  inconsiderate language and supports local suppressions. Useful as an optional
  sensitivity review, not a truth oracle.
- [write-good](https://github.com/btford/write-good), MIT: intentionally naive,
  configurable checks for passive voice, weak language, and repetition. Its own
  framing supports advisory diagnostics rather than automatic rewriting.

These tools suggest a safer pattern: transparent rule IDs, local exceptions,
severity levels, and human review. They do not justify a generic “AI detector.”

## Cross-cutting findings

### Useful universal diagnostics

- vague attribution without a named source;
- filler or repeated summary that adds no meaning;
- inflated importance unsupported by evidence;
- false agency and ambiguous actors;
- repetitive sentence templates and mechanical section structure;
- factual or qualification drift introduced during editing.

### Context-sensitive signals, never automatic defects

Passive voice, repetition, fragments, lists of three, rhetorical questions,
technical vocabulary, em dashes, and short paragraphs can be deliberate. A
frequency threshold does not establish poor writing.

### Unacceptable transformations

No tool may fabricate experience or opinion, inject anecdotes, expose private
names, alter canonical definitions, relax evidence qualifications, or change a
claim while calling the operation “style.”

## Recommended Palma-specific layer

Do not install any reviewed skill. After policy approval, specify a small local
diagnostic checklist with three separate layers:

1. universal defects: evidence, clarity, attribution, redundancy, factual drift;
2. Palma house style: approved terminology, reader level, chapter structure,
   citation and privacy rules;
3. author voice: initially empty, later calibrated only from samples explicitly
   approved by the author.

Run diagnostics first and propose edits with reasons. The editor accepts each
meaningful rewrite. A meaning/evidence lock compares claims, qualifications,
numbers, citations, definitions, and personal-story permissions before and
after.

## Decision

Recommended disposition: `adapt conceptually after editorial approval`.
Installation, rule copying, and automatic manuscript rewriting are rejected for
the current phase.
