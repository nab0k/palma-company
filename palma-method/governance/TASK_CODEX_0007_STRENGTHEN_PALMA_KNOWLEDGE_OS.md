---
id: TASK_CODEX_0007
type: task
status: authorized_phase_2a_2b
owner: codex
reviewer: chief_editor
project: palma-method
created: 2026-07-17
priority: high
depends_on:
  - TASK_CODEX_0006
scope:
  - repository-governance
  - metadata
  - validation
  - reference-ingestion
  - writing-quality-research
privacy_level: internal
---

# TASK_CODEX_0007 — Strengthen the Palma Knowledge OS

## Authorization boundary

Phase 1 was authorized by the Founder on 2026-07-17. It is design-first. It may
add governance documents, schema fixtures, research reviews, and implementation
plans. It must not modify manuscript files, approved decisions, Notion, the
ingestion implementation, or production validator/index behavior. Phase 2
requires separate explicit approval.

Phase 2A and 2B were authorized by the Founder on 2026-07-17: read-only metadata
validation, tests, and deterministic repository-index generation only. Ingestion,
Notion synchronization implementation, prose diagnostics, manuscript files, and
approved decision documents remain outside the authorized scope.

## Objective

Strengthen the existing repository without redesigning it.

The repository remains the canonical source of truth. Notion remains an operational mirror. Markdown remains the primary working format.

This task has two parts:

1. improve repository governance, metadata, validation, and reference ingestion;
2. research anti-slop / human-writing skills for Claude, GPT/Codex, and other compatible agents, then recommend a safe Palma-specific approach.

Do not install third-party skills or copy their rules into the repository without review.

## Current architectural assumptions

Preserve these unless a blocking contradiction is found:

- GitHub is canonical.
- Notion is downstream and must not become a competing source of truth.
- Working documents use Markdown.
- Existing IDs, decisions, task history, source cards, and manuscript versions must remain traceable.
- Personal stories from conversations are unavailable for manuscript or agent use unless the author explicitly approves them.
- Manuscript files and approved decision documents must not be changed in this task.

## Work package A — Repository instructions

Create a root-level `AGENTS.md` that acts as the operational constitution for agents working in the repository.

It must cover:

- project purpose;
- canonical-source policy;
- roles of ChatGPT, Claude, and Codex;
- directory map;
- file ownership and edit permissions;
- protected files and approval gates;
- task lifecycle;
- chapter versioning;
- source-card and verification rules;
- privacy rule for personal stories;
- Notion synchronization direction;
- validation commands;
- PR and completion-report requirements;
- prohibition on silent architectural changes.

Keep it concise enough to be read at the start of every agent session.

Where useful, take structural inspiration from the open `AGENTS.md` convention, but tailor the content to this repository rather than copying a generic template.

## Work package B — Frontmatter architecture

Audit current metadata practices across:

- tasks;
- decisions;
- reviews;
- chapters;
- source cards;
- verification issues;
- completion reports;
- research gaps;
- cross-chapter maps.

Design a unified frontmatter specification.

Requirements:

- preserve all existing IDs;
- define required and optional fields by document type;
- define allowed status values;
- define date format;
- define dependency and relationship fields;
- define privacy and verification fields where relevant;
- support gradual migration rather than a destructive repository-wide rewrite;
- make clear which existing legacy formats remain valid during transition.

Create:

1. `governance/FRONTMATTER_SPEC.md`
2. machine-readable schemas in an appropriate repository location;
3. examples for every supported document type.

Do not migrate all existing documents in this task unless migration is necessary to test the schema. Use a small representative fixture set.

## Work package C — Validation

Extend the existing validator so it can check:

- required frontmatter fields by document type;
- valid IDs and duplicate IDs;
- allowed status values;
- dependency references;
- canonical verification IDs;
- latest chapter-version consistency;
- broken internal file references;
- prohibited personal-example markers or named project examples in agent tasks;
- missing index entries where indexing is required.

The validator must distinguish:

- errors;
- warnings;
- informational notices.

It must produce deterministic output and a non-zero exit code for blocking errors.

Do not weaken existing validation rules.

## Work package D — Repository index

Design and implement a generated repository index that can answer:

- what chapters exist;
- which chapter version is current;
- what tasks are open, authorized, completed, or blocked;
- what decisions are canonical;
- what verification issues remain open;
- which source cards support each chapter;
- which documents depend on a given decision or source.

The generated index must never become a competing handwritten source of truth.

Document how it is regenerated and validated.

## Work package E — Reference ingestion and chunking

Design the smallest useful universal ingestion pipeline for research references.

Supported initial inputs should be chosen pragmatically from:

- Markdown;
- plain text;
- HTML;
- PDF;
- DOCX;
- EPUB.

Do not create one script per reference.

The pipeline should normalize a source into Markdown or structured text, then create structure-aware chunks based on headings, sections, paragraphs, pages, tables, captions, and bibliography boundaries where available.

Each chunk should preserve metadata such as:

```yaml
source_id:
document_title:
section:
page_start:
page_end:
chunk_index:
content_hash:
```

Requirements:

- preserve provenance;
- avoid OCR unless no text layer exists;
- never silently invent page numbers;
- make re-ingestion idempotent;
- detect unchanged content through hashes;
- keep raw references separate from generated derivatives;
- document copyright-sensitive handling;
- do not commit large copyrighted full-text derivatives without explicit approval.

Implement only a minimal vertical slice on a small test fixture. First document architecture and trade-offs, then implement the approved smallest version.

## Work package F — Notion synchronization

Audit the current GitHub-to-Notion synchronization flow.

Document and enforce:

```text
GitHub → Notion
```

Notion must remain a downstream operational view.

Deliver:

- synchronization contract;
- field mapping;
- update-in-place rules;
- conflict behavior;
- dry-run mode;
- logging requirements;
- recovery procedure.

Do not implement bidirectional synchronization.

Do not overwrite existing Notion pages blindly.

## Work package G — Anti-slop and human-writing skill research

Conduct a read-only research spike on current public GitHub projects that aim to reduce formulaic AI prose or provide writing/editing skills for Claude, GPT/Codex, Cursor, or compatible agents.

At minimum evaluate:

- `stephenturner/skill-deslop`
- `blader/humanizer`
- `jpeggdev/humanize-writing`
- `aaaronmiller/humanize-writing`
- relevant `AGENTS.md`, `CLAUDE.md`, or prose-lint approaches from mature documentation repositories

For each candidate, assess:

- license;
- maintenance activity;
- intended agent/platform;
- scope and trigger behavior;
- strengths;
- failure modes;
- risk of flattening author voice;
- risk of replacing one formula with another;
- suitability for book chapters versus short-form copy;
- compatibility with Palma's privacy and evidence rules;
- whether it should be installed, adapted, or rejected.

Important principle:

An anti-slop skill is a diagnostic and editorial layer, not an authorial voice generator.

It must not:

- fabricate lived experience;
- add fake opinions;
- inject personal anecdotes;
- erase deliberate repetition or rhythm;
- force every text into generic “human” informality;
- weaken evidence qualifications;
- rewrite canonical definitions;
- make factual changes during style editing.

Create:

1. `research/tooling/ANTI_SLOP_SKILLS_REVIEW.md`
2. `governance/PROSE_QUALITY_POLICY_DRAFT.md`
3. a recommended Palma-specific checklist or skill specification, but not an installed skill.

The recommendation must separate:

- universal AI-writing defects;
- project-specific house style;
- the author's personal voice, which will be defined later with the author.

Do not install or vendor any external skill in this task.

## Work package H — External idea review

Review, without adopting wholesale:

- the `agentsmd/agents.md` convention;
- relevant ideas from `agent0ai/agent-zero`;
- any accessible repository or component matching the earlier `agent0ai/dox` suggestion.

If `agent0ai/dox` cannot be verified as a current public repository, record that explicitly and inspect only clearly attributable alternatives. Do not guess.

## Deliverables

1. `AGENTS.md`
2. `governance/FRONTMATTER_SPEC.md`
3. machine-readable frontmatter schemas
4. validator updates and tests
5. generated repository index plus generation instructions
6. reference-ingestion architecture document
7. minimal ingestion/chunking vertical slice with tests
8. Notion synchronization contract
9. `research/tooling/ANTI_SLOP_SKILLS_REVIEW.md`
10. `governance/PROSE_QUALITY_POLICY_DRAFT.md`
11. `TASK_CODEX_0007_COMPLETION_REPORT.md`

## Constraints

- Do not modify manuscript prose.
- Do not modify approved decision documents.
- Do not renumber existing IDs.
- Do not install or vendor third-party skills.
- Do not create bidirectional Notion synchronization.
- Do not bulk-migrate all legacy frontmatter.
- Do not include personal stories or named private examples.
- Do not treat external repositories as authoritative merely because they are popular.
- Keep dependencies minimal.
- Prefer standard libraries and existing project dependencies.
- Every generated artifact must be reproducible.
- Every write operation affecting Notion must support dry-run or explicit confirmation.
- Architecture must be documented before substantial implementation.

## Required completion report

The completion report must include:

- files created and modified;
- architecture decisions;
- commands run;
- validation results;
- tests and fixtures;
- unresolved risks;
- external repositories reviewed, with commit or release references where available;
- explicit confirmation that manuscript and approved decisions were untouched;
- explicit confirmation that no third-party writing skill was installed;
- recommended next task, if any.

## Acceptance criteria

The task is complete only when:

- the repository has a usable root `AGENTS.md`;
- frontmatter rules are documented and machine-checkable;
- existing validation still passes;
- the new validator checks have tests;
- the repository index is generated reproducibly;
- the ingestion vertical slice preserves provenance and is idempotent;
- Notion synchronization remains one-way;
- anti-slop tools have been assessed critically;
- a Palma-specific prose-quality draft exists without pretending to define the author's voice;
- no protected content was changed.
