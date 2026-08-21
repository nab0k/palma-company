---
id: TASK_CODEX_0036_COMPLETION_REPORT
type: completion_report
status: delivered
owner: codex
reviewer: chief_editor
created: 2026-08-21
privacy_level: internal
task_id: TASK_CODEX_0036
base_branch: codex/manuscript-v09-miguel-practices
base_commit_sha: a694f207a0fddb36e39c4c01d3504f607e34852d
working_branch: codex/manuscript-v010-scholar-integration
final_content_commit_sha: b92a61c
---

# TASK_CODEX_0036 completion report

## Outcome

Created one append-only, continuous manuscript v0.10 for founder line review.
The fifteen-chapter architecture, case portfolio, four-field Infrastructure
Canvas, and the book's non-validation status remain unchanged. Manuscript v0.9
was not edited.

The new version expands the first substantive entrances of 38 planned scholar
blocks and three additional scholars already present in v0.9 but omitted from
the planning inventory: Mark Suchman, Kevin Lane Keller, and Alvin Gouldner.
Each full entrance now includes a concrete question or scene, the scholar's
relevance, memorable evidence or intellectual detail, the chapter-level use,
and an explicit boundary.

## Changed paths

- `palma-method/research/chapter-packets/PALMA_METHOD_MANUSCRIPT_v0.10.md`
- `palma-method/research/reports/SCHOLAR_INTEGRATION_MAP_v0.1.md`
- `palma-method/research/source-cards/brehm-psychological-reactance.md`
- `palma-method/research/source-cards/pagis-2015-evoking-equanimity-vipassana.md`
- `palma-method/research/source-cards/simmel-1908-sociology-forms.md`
- `palma-method/governance/TASK_CODEX_0036_INTEGRATE_SCHOLAR_INTRODUCTIONS.md`
- `palma-method/governance/TASK_CODEX_0036_COMPLETION_REPORT.md`

## Editorial decisions implemented

- Full scholar entrances are part of the running chapter argument rather than
  detachable academic sidebars.
- Granovetter and Burt are introduced fully in Chapter 10. Their earlier use in
  the Kichkine chapter is now an ordinary-language observation without a
  premature miniature biography.
- Incidental names that created unexplained secondary entrances were removed
  where attribution did not require them.
- The founder-approved Brehm version was integrated with the coffee maker,
  toaster, desk lamp, and radio detail, the failed expectation in the later
  experiment, and the narrow Handoff Test consequence.
- Suchman and Keller were expanded because the v0.9 passages did not yet meet
  the same introduction standard. Gouldner was retained after audit because his
  existing passage already introduced the problem, work, boundary, and use in
  more than 150 words.
- Repetitive `not X but Y` structures were reduced in the newly added prose
  where the contrast did not perform necessary analytical work.

## Evidence changes

- SC-106 now records the 1956 postdecision-choice study and the 1966
  attempted-control experiment used in the Brehm entrance.
- SC-051 records the primary-text read supporting Pagis's ten retreats, sixty
  interviews, alarm-clock episode, and sociality-of-non-engagement term.
- SC-067 records the primary-text check supporting Simmel's form/content and
  geometry account.
- No LinkedIn weak-ties experiment was added because the current repository has
  no canonical source card for that finding. The Granovetter passage stays
  within SC-004 and the original Newton study.

## Size and integrity checks

- v0.9 word count: 28,285.
- v0.10 word count at content commit: 35,703.
- Numbered chapter headings in v0.10: 15.
- Conceptual v0.9-to-v0.10 manuscript comparison: 385 inserted lines and 109
  locally replaced or removed lines around scholar passages.
- `git diff --check`: pass.
- v0.9 protected manuscript diff: empty.

## Repository validation

| Check | Result |
|---|---|
| `ruby palma-method/scripts/validate_research_package.rb` | Pass: 146/146 source cards parsed, 0 errors, 24 warnings |
| `python3 palma-method/scripts/validate_cards.py` | Pass, but this legacy checker reported 0 discoverable cards |
| `git diff --check` | Pass |
| Fifteen-chapter count and v0.9 immutability checks | Pass |
| `ruby palma-method/scripts/validate_metadata.rb` | Fails on three pre-existing baseline errors in untouched files: duplicate `TASK_CLAUDE_0030` IDs and unreadable metadata in `MANUSCRIPT_SNAPSHOT_2026-08-15.md` |
| `ruby palma-method/scripts/generate_book_dashboard.rb --check` | Fails because it calls the same baseline metadata validation |
| `ruby palma-method/scripts/generate_repository_index.rb --check` | Baseline generated index is broadly stale; regenerating it produced a large unrelated repository-wide diff, which was discarded |

The two validator-generated research-validation files were restored after each
run and are not part of this task.

## Protected and external systems

- No earlier manuscript version was edited.
- No approved decision was rewritten.
- No Notion or Google Docs page was changed.
- No pull request was merged.

## Founder review requested

Review the continuous v0.10 manuscript chapter by chapter, with particular
attention to voice, the amount of biographical detail, and whether each exit
from a scholar block returns naturally to the author's argument. Comments on
individual passages should become the next append-only editorial task rather
than edits to v0.10 in place.
