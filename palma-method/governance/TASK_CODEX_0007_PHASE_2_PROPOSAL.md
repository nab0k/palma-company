---
id: TASK_CODEX_0007_PHASE_2_PROPOSAL
type: specification
status: draft_for_editorial_review
owner: codex
reviewer: chief_editor
created: 2026-07-17
privacy_level: internal
task_id: TASK_CODEX_0007
phase: 2
---

# TASK_CODEX_0007 Phase 2 implementation proposal

## Authorization

This is a proposal only. Phase 2 must not start without explicit approval and
resolution of the editorial decisions listed below.

## Proposed smallest sequence

### Increment 2A — metadata validator

- approve frontmatter/status rules;
- add a read-only scanner for new frontmatter and selected legacy formats;
- validate the nine committed fixtures;
- detect required fields, duplicate IDs, canonical verification mappings, and
  explicit privacy markers;
- retain and regression-test both existing validators;
- emit deterministic diagnostics and non-zero exit codes for errors.

### Increment 2B — repository index

- build the graph from normalized validator records;
- generate stable JSON and Markdown in check mode first;
- cover tasks, decisions, verification issues, source cards, and chapter
  versions;
- add reverse dependencies and reproducibility tests.

### Increment 2C — ingestion vertical slice

- choose Ruby or Python after dependency audit;
- ingest synthetic Markdown, TXT, and HTML fixtures only;
- produce normalized Markdown, manifest, and JSONL chunks;
- test provenance, null page handling, hashes, repeat-run no-op, and copyright
  guards;
- do not ingest production references until separately approved.

### Increment 2D — synchronization prototype

- implement GitHub → Notion dry-run planning only;
- use stable Canonical IDs and mapped-field diffs;
- test zero, one, and duplicate matches with local fixtures;
- request a separate approval before the first Notion write.

### Increment 2E — prose diagnostics specification

- convert the approved prose policy into transparent review rule IDs;
- test on synthetic prose, not manuscript files;
- keep author-voice rules empty until approved samples exist;
- request a manuscript-specific task before applying diagnostics to chapters.

## Editorial approvals needed

1. Frontmatter types, required fields, status lists, and legacy warning policy.
2. Generated-index storage policy and current-chapter rule.
3. Runtime/dependency ceiling and initial ingestion formats.
4. Raw/derived reference retention, privacy, and copyright policy.
5. Notion databases, field mapping, conflict owner, and write confirmation.
6. Prose-quality policy and the boundary between diagnostics and rewriting.

## Exit criteria

Each increment is separately reviewable, deterministic, and reversible. It
must confirm manuscript, approved decisions, and Notion remain untouched unless
that increment has explicit authority to touch them.
