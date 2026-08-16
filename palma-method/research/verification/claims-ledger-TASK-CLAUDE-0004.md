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
status: strengthened_not_resolved
issue: >
  UPDATED (TASK_CLAUDE_0004, item 3): triangulated against three independent secondary/tertiary
  academic sources (Ostrom Workshop/Indiana University, Dartmouth SESMAD database, and a
  directly-quoted Chapter 3 paraphrase from a third academic-adjacent source) beyond the original
  two (P2P Foundation Wiki, Agrarian Trust). This substantially strengthens confidence that the
  eight principles are stated correctly and located correctly (7 core principles from Ostrom's
  Chapter 3 case analysis, plus "nested enterprises" as an 8th principle for larger/nested
  systems). However, the original 1990 Cambridge University Press text remains access-restricted
  (Internet Archive copy is borrow-only) and was NOT page-checked directly. This claim is
  strengthened, not resolved.
risk_if_uncorrected: >
  Low-to-medium risk of the principles being substantively wrong (now corroborated across five
  independent sources total), but citing a specific page number in the manuscript without direct
  primary-text verification would still violate Section 24's citation standard.
required_action: "Obtain and page-check the original 1990 Cambridge University Press text (or a verified reprint, e.g. via institutional library access) before citing a specific page number in manuscript prose. Until then, cite the principles without a page number, attributed generally to 'Ostrom, Governing the Commons, 1990, Chapter 3.'"
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
source_card: SC-020
severity: medium
status: resolved
issue: >
  RESOLVED (TASK_CLAUDE_0004, item 4): fetched and read directly from Google's own primary re:Work
  page (rework.withgoogle.com/intl/en/guides/understand-team-effectiveness). Confirms psychological
  safety as the #1-ranked (of 5) dynamic of team effectiveness among 180 Google teams studied, and
  confirms the study explicitly builds on and credits Edmondson's (SC-013) construct. Still a
  first-party corporate self-report, not independently replicated academic research - attribute
  explicitly as "Google's own internal research" in manuscript prose, not as an externally
  validated scientific law.
risk_if_uncorrected: n/a - resolved.
required_action: "None required to cite the finding; retain the framing note (first-party Google research, not independent academic replication) when used in manuscript prose."
related_artifact: ART-001
related_chapters:
  - "Chapter 8 (Trust, Status, and Reciprocity)"
  - "Chapter 13 (Design)"
```

```yaml
id: VI-004
claim: "Employees in high-trust organizations show 50% higher productivity, 76% more engagement, and 40% less burnout than those in low-trust organizations."
source_card: SC-018
severity: high
status: resolved
issue: >
  RESOLVED (TASK_CLAUDE_0004, item 2): traced to primary source - Paul J. Zak, "The Neuroscience of
  Trust," Harvard Business Review, January-February 2017, pp. 84-90 (hbr.org/2017/01/the-neuroscience-of-trust).
  The three numbers (50%, 76%, 40%) are a partial subset of a seven-statistic set Zak reports
  (74% less stress, 106% more energy, 50% higher productivity, 13% fewer sick days, 76% more
  engagement, 29% more life satisfaction, 40% less burnout), comparing high-trust vs. low-trust
  company employees via Zak's survey instrument. The underlying methodology is self-report survey
  research (not a controlled/causal experiment), and the HBR article does not disclose full sample
  size or significance testing - manuscript use should note the finding is correlational and
  self-reported, and should either use the full seven-statistic set or explicitly flag that only a
  subset is being cited.
risk_if_uncorrected: n/a - resolved.
required_action: "None required to cite the three-number subset with attribution to Zak (2017); recommend using the full seven-statistic set where space allows, and framing as self-reported/correlational rather than causal."
related_artifact: ART-001
related_chapters:
  - "Chapter 4 (The Cost of Weak Relationships)"
  - "Chapter 8 (Trust, Status, and Reciprocity)"
blocking: "RESOLVED - figures may now be cited with attribution to Zak, HBR 2017."
```

---

## Summary

4 verification issues logged. **Updated 2026-07-16 per TASK_CLAUDE_0004:** VI-003 (Project Aristotle) and VI-004 (50/76/40% statistic) are now **resolved** via primary-source verification (SC-020 and SC-018 respectively). VI-001 (Ostrom) is **strengthened, not resolved** - corroborated across five independent secondary/tertiary sources but still not page-verified against the original 1990 text. VI-002 (scale-free networks) remains **open**, unchanged, and was outside the scope of TASK_CLAUDE_0004's authorized research items. See `VERIFICATION_REPORT_TASK-0004.md` for the full consolidated report on all three items TASK_CLAUDE_0004 authorized research for.
