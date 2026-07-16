# Verification Issues / Claims Ledger

```yaml
document_id: LOG-VI-001
document_type: verification_issues_ledger
version: "1.0"
status: active
owner: Claude (Research Synthesizer role, Section 19 of the handoff)
created_date: "2026-07-16"
last_updated: "2026-07-16"
scope: >
  Tracks every claim or statistic in the current research base that does not yet meet Section 24's
  Evidence Standards for unqualified manuscript use (primary-sourced, page-referenced, or otherwise
  fully verified). No claim listed here should be cited in manuscript prose as a hard fact until its
  status is changed to resolved. This ledger was built by auditing the verification_status and notes
  fields already present in the 17 existing source cards - it required no new research.
```

Four issues logged. Severity reflects how load-bearing the claim is likely to be if used in the manuscript, not how likely it is to be wrong.

---

```yaml
id: VI-001
claim: "Ostrom's eight design principles for enduring commons institutions, as stated."
source_card: SC-006
severity: medium
status: open
issue: >
  The eight principles were confirmed via secondary summaries (P2P Foundation Wiki, Agrarian Trust)
  cross-checked against each other, not verified against page numbers in Ostrom's original 1990 text
  (access to the full primary text was limited to previews during this research pass).
risk_if_uncorrected: >
  Low risk of the principles being substantively wrong (they are consistently reported across
  independent secondary sources), but citing them with a specific page reference in the manuscript
  without primary verification would violate Section 24's citation standard.
required_action: "Obtain and page-check the original 1990 Cambridge University Press text (or a verified reprint) before citing a specific page number in manuscript prose."
related_artifact: ART-001
related_chapters:
  - "Chapter 13 (Design)"
```

```yaml
id: VI-002
claim: "Scale-free (power-law) network structure is a reliable general description of social/professional networks, including small organizational ones."
source_card: SC-012
severity: low
status: open
issue: >
  The scale-free finding is well-established for very large, open-growth networks (the original web
  dataset and subsequent large-network replications), but statistical critiques (e.g., Clauset,
  Shalizi & Newman, 2009) argue power-law claims in many real-world datasets are overstated, and the
  card's own notes flag that applicability to small, bounded client networks is weaker and untested.
risk_if_uncorrected: >
  Medium risk of overclaiming if the manuscript states a specific client or example network is
  'scale-free' without having actually measured its degree distribution.
required_action: "Use hub/preferential-attachment language as an illustrative structural lens in manuscript prose; do not assert literal scale-free status for any specific named network without direct measurement."
related_artifact: ART-001
related_chapters:
  - "Chapter 9 (Networks, Groups, and Structural Advantage)"
```

```yaml
id: VI-003
claim: "Google's 'Project Aristotle' internal study found psychological safety was the top predictor of team effectiveness among Google's own teams."
source_card: SC-013
severity: medium
status: open
issue: >
  This connection is widely reported in secondary/practitioner sources but was not independently
  verified against Google's own primary re:Work publication during this research pass.
risk_if_uncorrected: >
  Medium risk - this is a frequently-used but occasionally imprecisely cited statistic in management
  writing; using it without primary verification risks repeating a popularized inaccuracy.
required_action: "Verify directly against Google re:Work's published materials before using as a cited example in manuscript prose; if unverifiable, use Edmondson's original 1999 hospital-team study (already primary-verified) as the sole cited evidence instead."
related_artifact: ART-001
related_chapters:
  - "Chapter 8 (Trust, Status, and Reciprocity)"
  - "Chapter 13 (Design)"
```

```yaml
id: VI-004
claim: "Employees in high-trust organizations show 50% higher productivity, 76% more engagement, and 40% less burnout than those in low-trust organizations."
source_card: SC-015
severity: high
status: open
issue: >
  This statistic appears in HBR-adjacent secondary coverage but its primary source was not traced
  during this research pass (likely origin: Paul Zak's HBR neuroscience-of-trust research or a Great
  Place to Work study, per the card's own notes) - it is explicitly flagged as not yet
  manuscript-ready.
risk_if_uncorrected: >
  High risk if used - this is exactly the kind of precise, quotable, three-number statistic that is
  attractive for a management book's opening pages, and exactly the kind that draws the most scrutiny
  from a skeptical reviewer or fact-checker if its origin can't be produced on request.
required_action: "Trace to primary source before any manuscript use. If the primary source cannot be confirmed, drop the specific numbers and use only the directionally-supported, already-verified claims from SC-014 (Edelman 2026) and SC-008 (Mayer, Davis & Schoorman) instead."
related_artifact: ART-001
related_chapters:
  - "Chapter 4 (The Cost of Weak Relationships)"
blocking: "Do not cite the 50%/76%/40% figures in any manuscript draft until resolved."
```

---

## Summary

4 verification issues logged, none requiring new literature research to identify (all were already flagged in existing source-card `notes`/`verification_status` fields and are now tracked as atomic, actionable items). One is high severity and blocking (VI-004); the rest are open with a clear required action. No claim in this ledger should be treated as a confirmed manuscript-ready fact until its status changes to `resolved`.
