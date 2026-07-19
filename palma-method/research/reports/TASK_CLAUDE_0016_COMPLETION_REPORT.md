---
id: REPORT_TASK_CLAUDE_0016
type: completion_report
status: delivered
owner: claude
reviewer: chief_editor
created: 2026-07-19
privacy_level: internal
task_id: TASK_CLAUDE_0016
subject_refs:
  - SC-040
  - VI-020
  - VI-021
  - VI-023
---

# TASK_CLAUDE_0016 — Completion report

## Outcome

The complete seven-page Sampson, Raudenbush, and Earls (1997) article was read
and checked against SC-040 and the three affected Part III chapter packets. The
source-access gap is resolved. The transfer from Chicago neighborhoods and
violent-crime outcomes to organizational contexts remains explicitly limited.

No manuscript file was edited. The supplied PDF was not copied into the
repository.

## Source verification

- Source: Sampson, R. J., Raudenbush, S. W., & Earls, F. (1997),
  “Neighborhoods and Violent Crime: A Multilevel Study of Collective Efficacy,”
  *Science*, 277(5328), 918–924.
- DOI: 10.1126/science.277.5328.918.
- Supplied PDF checksum:
  `f16db6bd775f525dea284a9fb22b98834f8845578f78a60ae89833cdbdd8b0ec`.
- The article reports 8,782 residents in the abstract, 8,752 in the research
  design, and 7,729 cases with sufficient data for the estimated models. It
  explains the analytic subsample but does not explain the 8,782/8,752
  discrepancy.
- Violence outcomes comprise two self-report survey measures and police-recorded
  homicide counts. The previous reference to systematic social observation was
  removed because that method is not used in this article.
- The article does not compare collective efficacy against cohesion alone as a
  competing predictor and does not claim to originate the term generally.
- The observational design does not prove causal effects.

## Repository integration correction

Claude worked from an older local claims ledger whose SC-040 entries were
VI-018, VI-019, and VI-021. The canonical repository registry contains later,
append-only entries and assigns these three chapter-specific claims to:

- VI-020 — Chapter 14;
- VI-021 — Chapter 15;
- VI-023 — Chapter 16.

Codex normalized the delivered packet and synthesis references to those
canonical IDs during integration. No historical verification entry was
renumbered or deleted.

## Delivered paths

- `palma-method/research/source-cards/sampson-raudenbush-earls-1997-collective-efficacy.md`
- `palma-method/research/verification/VERIFICATION_ISSUES.md`
- `palma-method/research/syntheses/SC_040_FULL_TEXT_VERIFICATION_v0.1.md`
- `palma-method/research/chapter-packets/CHAPTER_14_v0.3.md`
- `palma-method/research/chapter-packets/CHAPTER_15_v0.3.md`
- `palma-method/research/chapter-packets/CHAPTER_16_v0.4.md`
- `palma-method/research/reports/TASK_CLAUDE_0016_COMPLETION_REPORT.md`

## Chapter impact

- Chapter 14 v0.3 narrows the wording around the construct’s origin and preserves
  organizational transfer as a Palma inference.
- Chapter 15 v0.3 grounds the measurement caution in the article’s actual
  three-level hierarchical design.
- Chapter 16 v0.4 grounds the distinction between collective efficacy and denser
  community forms while labeling the organizational conclusion as Palma’s own
  inference.

These are append-only research-packet revisions. They do not constitute
manuscript prose or chapter acceptance.

## Protection audit

- personal stories used: no;
- Collective Fitness material used: no;
- manuscript edited: no;
- prior packet versions edited: no;
- other source cards edited: no;
- approved decisions or Method files edited: no;
- supplied PDF committed: no.

## Remaining editorial decisions

- Chapter 14 title remains unresolved: “Activate” versus “Intervene Under
  Uncertainty.”
- Organizational use of collective efficacy remains a scoped Palma inference,
  not a finding established by the article.
