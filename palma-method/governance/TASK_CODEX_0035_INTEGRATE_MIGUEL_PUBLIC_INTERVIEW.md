---
id: TASK_CODEX_0035
type: task
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-21
privacy_level: internal
project: palma_method_book
priority: normal
scope:
  - register_public_tcf_founder_interview
  - manuscript_v0_9_local_integration
depends_on:
  - TASK_CODEX_0034
  - DECISION_0009
base_branch: codex/manuscript-v08-full-revision
base_commit_sha: 3fdd7e9b03d624a464c5e756697ed6404992dce8
working_branch: codex/manuscript-v09-miguel-practices
input_paths:
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.8.md
  - local-only auto-caption transcript identified in SC-151
output_paths:
  - palma-method/governance/TASK_CODEX_0035_INTEGRATE_MIGUEL_PUBLIC_INTERVIEW.md
  - palma-method/research/source-cards/martim-torres-2026-miguel-crespo-training-for-life.md
  - palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.9.md
  - palma-method/governance/TASK_CODEX_0035_COMPLETION_REPORT.md
completion_report: palma-method/governance/TASK_CODEX_0035_COMPLETION_REPORT.md
---

# TASK_CODEX_0035 — Integrate Miguel Crespo public interview

## Objective

Register the public interview with TCF founder Miguel Crespo as a traceable
source and integrate only the useful, supportable operating examples into an
append-only manuscript v0.9.

## Authorization

On 21 August 2026 Serhii Nabok explicitly instructed Codex to take the selected
interview material into the book. GitHub remains canonical.

## Allowed changes

- Create SC-151 without committing the supplied raw auto-caption transcript.
- Copy v0.8 to v0.9 and edit v0.9 only.
- Add a bounded Chapter 5 passage about welcoming late arrivals and recommending
  sustainable initial frequency.
- Clarify the existing sentence about adapting a shared training pattern.
- Qualify all uses as founder intent and reported practice, not outcome evidence.

## Forbidden changes

- Do not edit v0.8 or earlier manuscripts.
- Do not use unverified verbatim quotation from auto-generated captions.
- Do not infer that the practices caused retention, health, friendship, or
  community.
- Do not merge the final pull request without founder instruction.

## Acceptance criteria

1. SC-151 records provenance, limitations, and the local transcript checksum.
2. v0.9 differs from v0.8 only in metadata and the bounded Chapter 5 integration.
3. The passage distinguishes founder intent from participant outcome evidence.
4. Repository validators and `git diff --check` are reported.
