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

```yaml
id: VI-005
claim: "Macnamara's Organizational Listening Project found organizations spend, on average, around 80% (up to 95% in some cases) of communication-related resources on disseminating messages rather than listening."
source_card: SC-029
severity: medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0011, Wave 3): directional finding from one qualitative, multi-organization
  research program (36 organizations, 3 countries), built from abstract and secondary summaries in
  this research pass - the primary journal article (Journal of Public Relations Research, 2016) was
  not read end-to-end or page-checked.
risk_if_uncorrected: "Medium risk of overclaiming if the 80%/95% figures are cited as a precise, universal statistic rather than a directional finding from one research program."
required_action: "Attribute narratively ('Macnamara's research found...') rather than as a standalone precise statistic; obtain and page-check the primary journal text before more specific quotation."
related_artifact: ART-001
related_chapters:
  - "Chapter 11 (Listen)"
  - "Chapter 16 (Connect Communication and Community)"
```

```yaml
id: VI-006
claim: "Arnstein's ladder of citizen participation transfers validly from 1960s U.S. public-sector citizen-government relationships to private-organization stakeholder engagement."
source_card: SC-030
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0011, Wave 3): the ladder itself is a well-corroborated typology in its
  original public-sector context; its application to corporate/organizational stakeholder
  engagement is a widely-used practitioner extension, not a transfer Arnstein herself tested.
risk_if_uncorrected: "Low risk; the underlying logic (consultation without power is not participation) is conceptually robust, but manuscript prose should flag the transfer explicitly rather than presenting it as a direct finding."
required_action: "Flag the transfer explicitly wherever the ladder is used in manuscript prose."
related_artifact: ART-001
related_chapters:
  - "Chapter 11 (Listen)"
  - "Chapter 13 (Design)"
```

```yaml
id: VI-007
claim: "Krackhardt & Hanson's advice/trust/communication three-network typology is an exhaustive, validated taxonomy of organizational relationship types."
source_card: SC-031
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0011, Wave 3): the typology is a well-established practitioner method grounded
  in academic network-analysis research, not itself an independently validated claim that all
  organizational relationships reduce to exactly three categories.
risk_if_uncorrected: "Low risk; present as a well-established applied method, not as an exhaustive taxonomy."
required_action: "No page-level citation risk; use as an applied mapping method, not a closed theoretical claim."
related_artifact: ART-001
related_chapters:
  - "Chapter 12 (Map)"
```

```yaml
id: VI-008
claim: "The Cynefin framework's five domains (simple, complicated, complex, chaotic, disorder) are objectively, empirically distinguishable categories."
source_card: SC-032
severity: low-medium
status: open
issue: >
  ADDED (TASK_CLAUDE_0011, Wave 3): Cynefin's domain boundaries are practitioner judgment calls, not
  objectively or empirically validated thresholds; the framework's predictive accuracy has not been
  independently, statistically tested.
risk_if_uncorrected: "Medium risk if presented as a validated predictive model rather than a bounded sense-making aid for leaders."
required_action: "Always present as a practitioner framework with limitations, never as a universal law, per this task's explicit instruction."
related_artifact: ART-001
related_chapters:
  - "Chapter 14 (Activate)"
```

```yaml
id: VI-009
claim: "Rogers's adopter-category percentages (2.5% innovators / 13.5% early adopters / 34% early majority / 34% late majority / 16% laggards) precisely predict adoption patterns in any given population, including internal organizational practice adoption."
source_card: SC-033
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0011, Wave 3): the percentages are a normalized statistical idealization based
  on an assumed distribution, not a precise prediction for any specific real population; the
  framework's transfer from market/product adoption to internal organizational practice adoption is
  a well-established but not directly tested extension.
risk_if_uncorrected: "Low risk; use the adopter-category logic narratively, avoid citing precise percentages as predictions for any named organization."
required_action: "Use qualitative adopter-category logic (early adopters as trusted, integrated, non-first movers); avoid precise percentage claims for specific organizations."
related_artifact: ART-001
related_chapters:
  - "Chapter 14 (Activate)"
```

```yaml
id: VI-010
claim: "AMEC's Barcelona Principles 3.0 represent an empirically validated causal model of what measurement approach improves communication/relationship outcomes."
source_card: SC-034
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0011, Wave 3): the Principles are an industry-consensus professional standard,
  not a peer-reviewed empirical study; a documented gap exists between broad endorsement and actual
  practitioner adoption (per AMEC's own measurement-month surveys, not independently re-verified in
  this pass).
risk_if_uncorrected: "Low risk; present as industry-consensus standard, not as an empirically validated causal finding."
required_action: "Label as professional-consensus framework wherever cited."
related_artifact: ART-001
related_chapters:
  - "Chapter 15 (Measure)"
```

```yaml
id: VI-011
claim: "Weiss's theory-of-change methodology and the attribution-vs-contribution distinction it grounds constitute an empirically validated predictive model."
source_card: SC-035
severity: low
status: open
issue: >
  ADDED (TASK_CLAUDE_0011, Wave 3): theory-of-change methodology is validated by widespread adoption
  across philanthropy, development, and public-policy evaluation practice, not itself an empirically
  tested predictive claim; more specific, later contribution-analysis literature (e.g., Mayne) was
  not independently researched or source-carded in this pass.
risk_if_uncorrected: "Low risk; present as methodological consensus/best practice, not as a validated causal model."
required_action: "Present as methodological guidance; flag contribution-analysis literature as a gap for a future research wave."
related_artifact: ART-001
related_chapters:
  - "Chapter 13 (Design)"
  - "Chapter 15 (Measure)"
```

---

## Note on existing VI-002/VI-004 numbering inconsistency (carried forward, not resolved by Wave 3)

As flagged during TASK_CLAUDE_0009's narrow correction pass: the TASK_CLAUDE_0007-era chapter files (Chapter 6 v0.3/v0.4, Chapter 8 v0.2, Chapter 9 v0.2/v0.3) use a corrected numbering where Zak's trust statistics = VI-002 and the Barabási/scale-free-network limitation = VI-004 - the reverse of this master ledger's original numbering (VI-002 = scale-free networks, VI-004 = Zak statistics, as originally logged above). This inconsistency remains unresolved and out of scope for Wave 3; it is repeated here only to ensure the new VI-005 through VI-011 numbering (added below the original four entries, continuing this ledger's original sequence) is not mistaken for an attempt to resolve or renumber the existing VI-002/VI-004 conflict. A future dedicated ticket should reconcile the master ledger with the corrected chapter-level numbering.

## Summary

11 verification issues logged (4 original + 7 added in TASK_CLAUDE_0011, Wave 3). **Updated 2026-07-16 per TASK_CLAUDE_0004:** VI-003 (Project Aristotle) and VI-004 (50/76/40% statistic) are now **resolved** via primary-source verification (SC-020 and SC-018 respectively). VI-001 (Ostrom) is **strengthened, not resolved** - corroborated across five independent secondary/tertiary sources but still not page-verified against the original 1990 text. VI-002 (scale-free networks) remains **open**, unchanged, and was outside the scope of TASK_CLAUDE_0004's authorized research items. See `VERIFICATION_REPORT_TASK-0004.md` for the full consolidated report on all three items TASK_CLAUDE_0004 authorized research for. **Updated 2026-07-17 per TASK_CLAUDE_0011:** VI-005 through VI-011 added, covering the eight new Wave 3 source cards (SC-029 through SC-036); all seven new items are low-to-medium severity and open, reflecting sources checked via secondary summaries rather than full primary-text reads, consistent with this project's disclosure standard. See `WAVE_3_EVIDENCE_GAP_LOG.md` for full Wave 3 detail.
