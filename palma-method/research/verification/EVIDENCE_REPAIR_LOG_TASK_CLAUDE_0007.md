# Evidence Repair Log — TASK_CLAUDE_0007

```yaml
document_id: EVIDENCE_REPAIR_LOG_TASK_CLAUDE_0007
document_type: evidence_repair_log
prepared_by: Claude (Research Synthesizer role)
date: "2026-07-16"
task_reference: TASK_CLAUDE_0007_REVISE_RELATIONSHIP_CAPITAL_CHAPTERS.md
scope: "Work Package D - resolve or flag unsupported Facebook metrics, the unsupported Millington example, claims of universal consensus, and unsupported causal claims."
```

Each item below is logged with: what was found, where, the action taken (resolved, partially resolved, or flagged), and the resulting state.

---

## Item 1: Facebook Page/Group reach and engagement figures

**Where found:** Chapter 1 v0.1, paragraph 2 ("current industry benchmarking puts Facebook Page organic reach at around 1.37%...").

**Problem:** Stated as settled fact with no source card, no publisher name, and no date - flagged in REVIEW_CLAUDE_0002.

**Action taken:** Partially resolved. The figures were not independently re-verified against a primary source in this pass (that would require new external research, which this task's scope did not authorize). Instead, the chapter text was edited (Chapter 1 v0.2) to explicitly label the figures as "practitioner and platform-analytics reporting, not yet independently verified against a primary source" and to frame the conclusion that follows them as conditional ("if the pattern holds...") rather than settled.

**Resulting state:** Flagged, not resolved. Remains listed in Chapter 1 v0.2's Missing Evidence as requiring a named, dated, primary source before manuscript finalization.

---

## Item 2: Millington "more than half" threshold and Dell Digital Nomads example

**Where found:** Chapter 1 v0.1, paragraph 5 (also referenced in the anti-Palma argument map, Track H Question 1, where it was originally flagged as "practitioner source, not yet a formal research card").

**Problem:** Cited without a formal source card; paired with an unsupported claim ("single clearest predictor") in the same paragraph.

**Action taken:** Resolved. A new source card, SC-024 (`millington-feverbee-branded-community-failure.md`), was created, formalizing the citation with an explicit `confidence_level: low` and `source_type: practitioner_analysis` classification. Chapter 1 v0.2's text was edited to attribute the claim explicitly to Millington's professional judgment ("in his experience..."), remove the unsupported "single clearest predictor" framing entirely, and add an explicit caveat that this is "one consultant's professional pattern-recognition... not a controlled study."

**Resulting state:** Resolved (formally source-carded and appropriately hedged in-text). Confidence remains low by design, reflecting the practitioner (not peer-reviewed) nature of the source - this is a permanent characteristic of the evidence, not a temporary gap.

---

## Item 3: "Single clearest predictor" (Chapter 1)

**Where found:** Chapter 1 v0.1, paragraph 5 - "close to the single clearest predictor of whether a branded community survives."

**Problem:** No study measured this comparatively against other predictors; the phrase asserts a superlative with no supporting comparison.

**Action taken:** Resolved. Removed from Chapter 1 v0.2 and replaced with "is proposed here as a useful diagnostic for whether a branded community will survive past its launch enthusiasm, not as an empirically proven predictor."

**Resulting state:** Resolved.

---

## Item 4: "The platforms themselves are, in effect, telling companies something" (Chapter 1)

**Where found:** Chapter 1 v0.1, paragraph 2.

**Problem:** Interpretation presented with the grammatical force of an observed fact (personifying "the platforms" as a source of evidence, when the actual evidence is the unverified reach/engagement figures in Item 1).

**Action taken:** Resolved. Removed in Chapter 1 v0.2; replaced with a conditional framing tied explicitly to the now-labeled benchmarking data ("If the pattern holds, it is worth taking seriously: it would suggest...").

**Resulting state:** Resolved.

---

## Item 5: "Close to a vanity metric" (Chapter 1)

**Where found:** Chapter 1 v0.1, paragraph 2.

**Problem:** REVIEW_CLAUDE_0002 requested this claim be qualified further.

**Action taken:** Resolved. Chapter 1 v0.2 retains the claim but adds an explicit condition: "it risks functioning as a vanity metric on its own when treated as a proxy for connection rather than exposure."

**Resulting state:** Resolved.

---

## Item 6: Putnam's bonding/bridging applied to brand communication (Chapter 1)

**Where found:** Chapter 1 v0.1, paragraph 4.

**Problem:** REVIEW_CLAUDE_0002 required this application be explicitly labeled as Palma's interpretation, not Putnam's own claim.

**Action taken:** Resolved. Chapter 1 v0.2 now reads "applied at brand scale rather than the community and societal scale Putnam himself studied - an extension this book is making deliberately, not a claim drawn directly from his research."

**Resulting state:** Resolved.

---

## Item 7: Content-vs-connection framing risk (Chapter 1)

**Where found:** Chapter 1 v0.1, general structure - REVIEW_CLAUDE_0002 warned the chapter "risks becoming an argument against content production" and required an explicit statement that content can initiate relationships but cannot substitute for reciprocal structure.

**Problem:** Not a specific unsupported claim, but a framing risk across the chapter.

**Action taken:** Resolved. A new paragraph was added to Chapter 1 v0.2 stating plainly: "it is not an argument against content production as such. Content plays a real and necessary role: it can initiate a relationship... What content cannot do is substitute for the reciprocal structure that has to come after it."

**Resulting state:** Resolved.

---

## Item 8: Claims of universal consensus (project-wide scan)

**Scope of scan:** Chapters 1, 6, 7, 8, and 10 (the chapters touched by this task); Introduction and Chapter 2 were not scanned in this pass since no edits were made to them.

**Findings:**
- Chapter 6 v0.3 and Chapter 8 v0.2 (newly written this round) were drafted with explicit language distinguishing Palma's synthesis from academic consensus throughout - no universal-consensus overclaims were introduced.
- Chapter 10 v0.1 contains one flagged instance not addressed in this round: "the well-documented default trajectory of unmanaged social capital" (Chapter Brief). This was identified by REVIEW_CLAUDE_0002 previously and was not part of this task's assigned Work Package C/D scope (which targeted DECISION_0003 terminology and the specific Chapter 1 evidence items); it is logged here as still open rather than silently dropped.
- Chapter 7 v0.1/v0.2 was reviewed and no new universal-consensus language was found beyond what REVIEW_CLAUDE_0002 already covers elsewhere.

**Action taken:** Partially resolved (new chapters written clean; one pre-existing instance flagged, not fixed, as out of this task's assigned scope).

**Resulting state:** One item remains open - see Chapter 10's "Remaining dependency" note in `CROSS_CHAPTER_CHANGE_MAP_v0.2.md`.

---

## Item 9: Unsupported causal claims (project-wide scan)

**Scope of scan:** Same five chapters as Item 8.

**Findings:** No new unsupported causal claims were identified beyond the items already logged above (Items 1-3, which were causal-adjacent overclaims about what predicts community survival). Chapter 8's revised trust/reciprocity discussion explicitly avoids new causal language, framing the ABI model and reciprocity as diagnostic and correlational, consistent with existing verification-report framing for the Zak (SC-018) and Project Aristotle (SC-020) findings.

**Action taken:** Resolved for the scope reviewed - no new issues found requiring correction.

**Resulting state:** Closed for this pass; a full project-wide causal-claims audit covering all chapters (including Introduction, Chapter 2, and the unauthored remaining manuscript) was not performed and would require separate authorization.

---

## Summary

| Item | Status |
|---|---|
| Facebook Page/Group metrics | Flagged (labeled in-text, primary source still needed) |
| Millington/Dell Digital Nomads | Resolved (new source card SC-024, hedged in-text) |
| "Single clearest predictor" | Resolved (removed) |
| "Platforms are telling companies..." | Resolved (removed) |
| "Close to a vanity metric" | Resolved (qualified) |
| Putnam bonding/bridging labeling | Resolved (explicitly labeled) |
| Content-vs-connection framing risk | Resolved (new paragraph added) |
| Universal-consensus language (project-wide) | Partially resolved (one pre-existing item in Chapter 10 remains open, out of this task's scope) |
| Unsupported causal claims (project-wide) | Resolved for scope reviewed |
