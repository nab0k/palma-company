# Wave 3 Evidence Gap Log v0.2

```yaml
document_id: WAVE_3_EVIDENCE_GAP_LOG_v0.2
document_type: evidence_gap_log
version: v0.2
lifecycle: draft_for_editorial_review
editorial_status: under_revision
final_publication_copy: false
supersedes: WAVE_3_EVIDENCE_GAP_LOG.md
task_reference: TASK_CLAUDE_0012.md
owner: Claude (Research Synthesizer and Developmental Editor role)
created_date: "2026-07-17"
scope: "Carries forward every still-open gap from WAVE_3_EVIDENCE_GAP_LOG.md (v0.1) and SOCIOLOGY_OF_MICROCOMMUNITIES_EVIDENCE_GAP_LOG_v0.1.md, and adds gaps newly identified during the v0.2 corrective revision."
```

`WAVE_3_EVIDENCE_GAP_LOG.md` (v0.1) is preserved unchanged. This document does not repeat every row of that log; it confirms which v0.1 gaps remain open, notes any that the v0.2 revision closed, and adds new gaps specific to this revision wave.

## 1. Status of v0.1 gaps (per-chapter, from WAVE_3_EVIDENCE_GAP_LOG.md)

All chapter-specific missing-primary-source, weak-claim, and missing-case gaps logged in v0.1 remain open and unchanged in v0.2 - this revision wave corrected editorial architecture (per TASK_CLAUDE_0012's seven problems), not the underlying evidence base for claims v0.1 already carried. Specifically still open, unchanged: no source directly studies private-sector-isolated listening/speaking imbalance (Ch11); no source measures mapping completeness rates (Ch12); Ostrom's transfer to organizational governance untested (Ch13); no source specifies ownership-transfer timing signals (Ch14); no source specifies optimal re-measurement frequency (Ch15); no source directly studies how communication/community functions are formally structured across organizations (Ch16). All six editorial placeholders (one per chapter) remain open in the v0.2 packets - none was filled with an invented case.

## 2. Status of SOCIOLOGY_OF_MICROCOMMUNITIES_EVIDENCE_GAP_LOG_v0.1.md gaps

- **SMC-GAP-001 (Vakhstayn claim, excluded):** Remains excluded. No chapter in this v0.2 revision imports any Vakhstayn-attributed claim.
- **SMC-GAP-002 (dissensus, deferred):** Remains deferred. No chapter in this v0.2 revision imports "dissensus" as a named concept; the underlying need (conflict as diagnostic data) continued to be served by Ostrom (SC-006) and Portes (SC-016), consistent with the sociology brief's recommendation.
- **SMC-GAP-003 (Baehr community-of-fate citation):** Remains open. SC-042 was reviewed for this wave but not used in any chapter revision (see `WAVE_3_CORRECTIVE_CHANGE_LOG.md`, cross-cutting section) - the gap is therefore inherited but not activated by this wave, and does not require resolution before this wave's outputs can be reviewed.
- **SMC-GAP-004 (collective capacity as umbrella term):** Remains open, and is now directly relevant: Chapter 15's v0.2 revision uses "collective capacity" as an umbrella term encompassing collective efficacy (SC-040), consistent with the sociology brief's own interpretive framing - flagged again here because this wave increases how much manuscript-relevant weight that framing carries.
- **SMC-GAP-005 and SMC-GAP-006 (missing TASK_CLAUDE_0012_RECOVERY_RECORD.md and TASK_CODEX_0012/0009 files):** Directly relevant to this task's own execution. See Section 4 below and `TASK_CLAUDE_0012_COMPLETION_REPORT.md` for full disclosure.
- **SMC-GAP-007 (Wenger vs. wispy communities soft tension):** Resolved by this wave's Chapter 16 revision, which now explicitly holds both models as legitimate rather than defaulting to Wenger's durable-practice model as the implicit target state (Chapter 16, Key Distinctions and closing draft paragraph).

## 3. New gaps identified during this v0.2 revision

```yaml
id: W3-V2-GAP-001
title: "No source specifies how much member-to-member value creation triggers Chapter 16's infrastructural shift"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-17"
context: >
  Chapter 16 v0.2's central argument treats the shift from audience activity to member-to-member
  value creation as a matter of degree, not a binary threshold, but no source in the current
  evidence base specifies how much member-to-member activity is needed before an organization's
  communication function actually needs to renegotiate its role. This is stated as an open
  question in the chapter itself rather than resolved with an invented threshold.
related_chapters: ["Chapter 16"]
related_source_cards: []
recommended_resolution: "Flag for a future research wave if the book wants a more precise operational threshold; the qualitative 'matter of degree' framing may be sufficient for manuscript purposes."
owner_for_decision: "Chief Editor"
```

```yaml
id: W3-V2-GAP-002
title: "No source specifies a validated instrument for organizational microgroup durability or role-transfer success"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-17"
context: >
  Chapter 15 v0.2 recommends measuring microgroup durability and role transfer as social-level
  phenomena, but no source in the current evidence base offers a validated measurement instrument
  for either, specifically in organizational (as opposed to neighborhood or sports-team) contexts.
related_chapters: ["Chapter 15"]
related_source_cards: ["SC-038", "SC-040"]
recommended_resolution: "Flag as a research gap; practitioner judgment, informed by Chapter 12's mapping methods repeated over time, is the interim approach this chapter recommends."
owner_for_decision: "Claude (future research pass) or Chief Editor"
```

```yaml
id: W3-V2-GAP-003
title: "Wispy communities (SC-039) is now load-bearing for Chapter 16's central correction but remains checked via abstract only"
status: open
priority: medium-elevated
raised_by: Claude
date_raised: "2026-07-17"
context: >
  SC-039 was already flagged in SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md as checked via
  abstract and secondary summaries, not full original text. This wave's Chapter 16 revision makes
  this source considerably more load-bearing than its use in Chapter 12 - it now directly grounds
  Chapter 16's central Problem E correction (community is not a universal destination). The
  verification gap is unchanged, but its consequence if the source turns out to be misread is
  now higher, since more of Chapter 16's new argument depends on it.
related_chapters: ["Chapter 16", "Chapter 12"]
related_source_cards: ["SC-039"]
recommended_resolution: >
  Obtain and read the full original Fine & van den Scott (2011) article before Chapter 16's
  community-as-destination correction is finalized for manuscript prose. This is logged with
  elevated priority relative to its original Chapter 12 use (VI-017, low-medium) - see VI-022
  in Chapter 16's own VI Items section.
owner_for_decision: "Claude (future research pass) or Chief Editor"
```

```yaml
id: W3-V2-GAP-004
title: "How unpaid relational labor should be recognized or compensated without converting participation into disguised employment"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-17"
context: >
  Chapter 16 v0.2 names unpaid relational labor as a specific accounting question (per
  TASK_CLAUDE_0012's required territory) but no source in the current evidence base addresses
  how to recognize or compensate this labor without risking converting genuine voluntary
  participation into something resembling disguised, uncompensated employment - a live tension
  the chapter names but does not resolve.
related_chapters: ["Chapter 16"]
related_source_cards: ["SC-016", "SC-024"]
recommended_resolution: "Flag as a research gap for a future wave if the book wants to address this territory more specifically than as a named open tension."
owner_for_decision: "Chief Editor"
```

## 4. Provenance/dependency gap (disclosed, not a research evidence gap)

`TASK_CLAUDE_0012_RECOVERY_RECORD.md` and confirmation of the specific `TASK_CODEX_0009`/`TASK_CODEX_0012` repository-state documents referenced in this task's resumption were not locatable in this sandbox or the connected folder at the time this wave's work was performed. Per the explicit fresh-authorization instruction resuming this task, this was treated as an environment-visibility gap, disclosed here and in `TASK_CLAUDE_0012_COMPLETION_REPORT.md`, and this wave proceeded using the exact TASK_CLAUDE_0012 task text and the research inputs already available (the six v0.1 chapter packets, `WAVE_3_CROSS_CHAPTER_MAP.md`, `WAVE_3_EVIDENCE_GAP_LOG.md`, `TASK_CLAUDE_0011_COMPLETION_REPORT.md`, and `SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md` and its accompanying gap log and source cards). This is not logged as a content gap because none of this wave's actual editorial corrections (Problems A-G) depended on repository-state numbers or a recovery record to be resolved substantively.

## 5. Summary

Six chapter-specific gaps and four cross-cutting sociology-brief gaps are carried forward unresolved from prior waves. One prior gap (SMC-GAP-007) is resolved by this wave's Chapter 16 revision. Four new gaps are identified, one with elevated priority (W3-V2-GAP-003, given SC-039's increased load-bearing role). The provenance gap regarding missing Codex/recovery-record files is disclosed as an environment-visibility issue, not a content gap, and did not block this wave's substantive work.
