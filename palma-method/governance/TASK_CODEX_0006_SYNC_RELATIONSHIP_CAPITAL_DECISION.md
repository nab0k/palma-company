# TASK_CODEX_0006 — Synchronize Relationship Capital Decision

**Status:** AUTHORIZED  
**Date:** 2026-07-16  
**Depends on:** DECISION_0003  
**Owner:** Codex  
**Reviewer:** ChatGPT / Chief Editor

## Objective

Synchronize the approved Relationship Capital decision and latest project state across canonical GitHub and operational Notion.

## Required inputs

- DECISION_0003
- TASK_CLAUDE_0007
- REVIEW_CLAUDE_0003
- REVIEW_CODEX_0003
- latest EVENT_LOG, STATUS, DECISIONS, and Project Ledger
- TASK_CLAUDE_0004 and TASK_CLAUDE_0006 outputs
- latest chapter packets and reviews not yet synchronized

## GitHub work

1. Add DECISION_0003.
2. Add TASK_CLAUDE_0007.
3. Update DECISIONS.md and STATUS.md.
4. Append event-log entries.
5. Register missing Claude outputs and reviews.
6. Create a focused branch and pull request.

## Notion work

Update Project Ledger, Dashboard, Chapters, Research, Tasks, and linked decision records.

Create or update task records for TASK_CLAUDE_0007 and TASK_CODEX_0006.

Do not mark Claude deliverables complete before they exist.

## Validation

Confirm:

- GitHub remains canonical;
- Notion links to canonical files;
- no duplicate chapter records exist;
- no obsolete definition remains approved;
- Project Ledger points to the latest decision and active tasks;
- statuses match reality;
- links resolve.

## Deliverables

1. updated repository;
2. updated Notion workspace;
3. `IMPLEMENTATION_REPORT_TASK_CODEX_0006.md`;
4. pull request;
5. validation summary.

## Constraints

- Do not edit manuscript prose.
- Do not alter DECISION_0003.
- Do not invent completion states.
- Preserve provenance and history.
