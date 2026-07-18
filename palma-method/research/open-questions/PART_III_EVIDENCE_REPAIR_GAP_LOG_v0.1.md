---
id: RG-002
type: research_gap
status: open
research_status: open
owner: claude
created: 2026-07-18
privacy_level: internal
project: palma-method-book
task_id: TASK_CLAUDE_0014
question: "Which Part III evidence and case gaps remain after TASK_CLAUDE_0014?"
chapter_refs: [CHAPTER_11, CHAPTER_12, CHAPTER_13, CHAPTER_14, CHAPTER_15, CHAPTER_16]
personal_story_use: prohibited
---

# Part III Evidence Repair Gap Log v0.1

This log consolidates the open gaps, negative findings, and unresolved
verification issues identified in the evidence-repair and published-case
packages. It does not silently resolve gaps already recorded in the Wave 3 or
sociology-of-microcommunities gap logs.

Entries are atomic. Status values: `open` (unresolved, needs future work), `negative_finding` (a genuine "no such instrument/source exists" result, logged per this task's explicit instruction rather than filled with invention), `environment_gap` (this session's sandbox could not access something; not evidence anything is wrong).

---

```yaml
id: PIER-GAP-001
title: "Fine & van den Scott (2011) full body text remains inaccessible"
status: open
priority: medium-elevated
raised_by: Claude
date_raised: "2026-07-18"
context: >
  SAGE Journals marks the article "Restricted access." This pass obtained the complete verbatim
  abstract and full reference list directly from the primary publisher, plus independent
  bibliographic confirmation from a co-author's own faculty page - a material improvement over
  the prior abstract-and-secondary-summary-only state - but the body text, including how the
  named examples (Woodstock, Burning Man, Lebowski Fest) are actually analyzed, was not obtained.
  This carries elevated priority because Chapter 16 v0.2 makes this source central to its Problem E
  correction (community is not a universal destination).
related_artifact: PART_III_EVIDENCE_REPAIR_v0.1.md
related_chapters: ["Chapter 12", "Chapter 16"]
related_source_cards: ["SC-039"]
recommended_resolution: >
  Obtain institutional/library access, purchase, or interlibrary loan for the full SAGE article
  before Chapter 16's community-as-destination correction is finalized for manuscript prose.
owner_for_decision: "Chief Editor / whoever holds institutional journal access"
```

```yaml
id: PIER-GAP-002
title: "Borgatti & Molina (2003) full text not independently obtained"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-18"
context: >
  The 2005 companion article (read in full) supersedes and extends the 2003 piece substantially,
  reducing the urgency of separately verifying the earlier article, but the 2003 article's own
  top-three-concerns framing (privacy violation, psychological harm, harm to individual standing)
  is currently cited only via abstract-level secondary confirmation.
related_artifact: PART_III_EVIDENCE_REPAIR_v0.1.md
related_chapters: ["Chapter 12"]
related_source_cards: []
recommended_resolution: "Low priority; the 2005 article covers substantially the same ground and was read in full."
owner_for_decision: "Chief Editor (low priority)"
```

```yaml
id: PIER-GAP-003
title: "Kadushin (2005) journal article and Kadushin (2012) book Chapter 11 both remain abstract-level or unread"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-18"
context: >
  Kadushin's specific, quotable benefit-asymmetry finding ("academic researchers always benefit...
  individual respondents rarely do") is confirmed via abstract only. Kadushin's full book chapter
  on ethics (2012, Understanding Social Networks) was not obtained at all - only referenced via
  book reviews.
related_artifact: PART_III_EVIDENCE_REPAIR_v0.1.md
related_chapters: ["Chapter 12"]
related_source_cards: []
recommended_resolution: "Obtain full text of both if Chapter 12's ethics discussion is expanded beyond its current v0.2 scope in a future wave."
owner_for_decision: "Claude (future research pass) or Chief Editor"
```

```yaml
id: PIER-GAP-004
title: "No validated instrument exists for microgroup durability as a bounded-unit-survival measure"
status: negative_finding
priority: medium
raised_by: Claude
date_raised: "2026-07-18"
context: >
  McPherson's ecology of affiliation (1983) and related Blau-space research model individual
  membership duration within a competitive population of voluntary associations - a related but
  different question from whether a specific, bounded microgroup identified through mapping still
  exists as a unit at a later point in time. No source located in this pass directly measures the
  latter. This is reported as a negative finding per this task's explicit instruction, not filled
  with an invented instrument.
related_artifact: PART_III_EVIDENCE_REPAIR_v0.1.md
related_chapters: ["Chapter 12", "Chapter 15"]
related_source_cards: []
recommended_resolution: >
  If the book needs a specific microgroup-durability measurement approach, commission targeted
  research into a narrower question (e.g., ethnographic longitudinal studies of specific
  microgroup types) rather than assuming McPherson's framework transfers directly.
owner_for_decision: "Chief Editor"
```

```yaml
id: PIER-GAP-005
title: "No general-purpose validated instrument exists for organizational role-transfer/succession success"
status: negative_finding
priority: medium
raised_by: Claude
date_raised: "2026-07-18"
context: >
  Nonprofit-sector succession-planning research consistently finds succession planning is
  important-but-often-absent-in-practice - a real, well-corroborated finding, but a finding about
  practice adoption, not a validated measurement instrument. The "bus factor" concept from
  software engineering is real and quantifiable but domain-specific to code contribution.
related_artifact: PART_III_EVIDENCE_REPAIR_v0.1.md
related_chapters: ["Chapter 14", "Chapter 15"]
related_source_cards: []
recommended_resolution: >
  Do not present bus factor as validated for general organizational use without stating the
  software-domain-specific origin explicitly every time it is invoked.
owner_for_decision: "Chief Editor"
```

```yaml
id: PIER-GAP-006
title: "No single instrument bridges founder-dependence measurement across sectors"
status: negative_finding
priority: low
raised_by: Claude
date_raised: "2026-07-18"
context: >
  Founder/key-person dependence is well-documented as a real problem in two separate literatures
  (nonprofit succession planning; software bus factor) using two incompatible methods, neither
  validated for general organizational-community use. This is the same underlying gap as
  PIER-GAP-005, restated from the founder-dependence angle specifically per this task's explicit
  requirement to address founder dependence as its own named item.
related_artifact: PART_III_EVIDENCE_REPAIR_v0.1.md
related_chapters: ["Chapter 14", "Chapter 15"]
related_source_cards: []
recommended_resolution: "No action required beyond disclosure; do not invent a bridging instrument."
owner_for_decision: "Chief Editor (informational, low priority)"
```

```yaml
id: PIER-GAP-007
title: "Chapter 12's primary published-case candidate (Schoder et al. 2008) does not name its studied organization"
status: negative_finding
priority: low
raised_by: Claude
date_raised: "2026-07-18"
context: >
  Consistent with the ethics evidence in Part B (Borgatti & Molina 2005; Kadushin 2005),
  anonymization of the studied organization is standard practice in organizational network-
  mapping research generally, not a defect specific to this one candidate. Multiple case-study
  searches for Chapter 12 turned up either anonymized academic cases or unverifiable
  marketing-blog claims about named companies (Coca-Cola, AT&T, Unilever) that could not be
  traced to any primary source and were therefore excluded entirely from
  PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md rather than used with a weak citation.
related_artifact: PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md
related_chapters: ["Chapter 12"]
related_source_cards: ["SC-031"]
recommended_resolution: >
  If a fully named, primary-sourced organizational network-mapping case is required for
  manuscript prose, this remains an open research need; the field's general preference for
  anonymization (for the same consent/exposure reasons documented in Part B) makes this a
  structurally difficult gap to close, not simply an unperformed search.
owner_for_decision: "Chief Editor"
```

```yaml
id: PIER-GAP-008
title: "Chapter 13's case candidate (Google Project Aristotle) may duplicate an existing case elsewhere in the book"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-18"
context: >
  This project's own records show Project Aristotle was previously researched and verified
  (TASK_CLAUDE_0004), likely for use in Chapter 8's trust/psychological-safety material. Using it
  again as Chapter 13's flagship case risks redundancy the Chief Editor should resolve before
  adoption. This pass did not open or re-read Chapter 8 to confirm the extent of overlap, since
  Chapter 8 is outside this task's scope (Chapters 11-16 only) and editing or even auditing
  accepted chapters was not authorized.
related_artifact: PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md
related_chapters: ["Chapter 8", "Chapter 13"]
related_source_cards: ["SC-020"]
recommended_resolution: >
  Chief Editor should check Chapter 8's actual use of Project Aristotle before adopting it as
  Chapter 13's case; if Chapter 8 already uses it as a full narrative case, choose a different
  candidate for Chapter 13.
owner_for_decision: "Chief Editor"
```

```yaml
id: PIER-GAP-009
title: "Chapter 15's case candidate (Enterprise Rent-A-Car / Reichheld 2003) sits in tension with the chapter's own anti-composite-score argument"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-18"
context: >
  Reichheld's original article promotes a single number as broadly sufficient for growth
  prediction; Chapter 15 v0.2 explicitly and permanently declines to endorse any single universal
  score. The case remains usable but only under an explicit framing constraint (a well-scoped
  single metric tied to one stated decision, not a general endorsement of single-number
  measurement) stated in PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md. This tension is disclosed
  rather than resolved by silently reframing Reichheld's own argument.
related_artifact: PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md
related_chapters: ["Chapter 15"]
related_source_cards: ["SC-026"]
recommended_resolution: >
  If adopted, the framing constraint stated in the case-candidates document must be preserved in
  any manuscript use; do not let this case's own framing override Chapter 15's established
  position.
owner_for_decision: "Chief Editor"
```

```yaml
id: PIER-GAP-010
title: "Secondary/unverified statistics appear in multiple case candidates and are flagged, not adopted as fact"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-18"
context: >
  Specific figures (Dell IdeaStorm's "400+ ideas implemented"; Adobe Kickbox's "6 of 1000"
  progression rate; LEGO Ideas' "~10 sets per year" and "4x faster development") were found via
  secondary press/summary sources during this research pass, not traced to primary company
  disclosures. Each is flagged individually in PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md under
  "unsafe claims" for its respective chapter.
related_artifact: PART_III_PUBLISHED_CASE_CANDIDATES_v0.1.md
related_chapters: ["Chapter 11", "Chapter 14", "Chapter 16"]
related_source_cards: []
recommended_resolution: "Trace each figure to a primary company source before any is quoted precisely in manuscript prose; use only qualitative framing until then."
owner_for_decision: "Chief Editor / future research pass"
```

```yaml
id: PIER-GAP-011
title: "Canonical task file, GitHub coordinates, and draft PR not visible in this session"
status: environment_gap
priority: medium
raised_by: Claude
date_raised: "2026-07-18"
context: >
  The task file at /Users/serhiinabok/Documents/Adshot Europe/palma-method/governance/ is outside
  this session's connected workspace folder. GitHub repository nab0k/palma-company, branches
  codex/part-iii-readiness-0015 and codex/part-iii-evidence-repair-claude-0014, commit
  6129652d4ce7fcdfc5d0cd32b11331783fb8272c, authorization commit 1d5b342, and draft PR #7 could
  not be independently accessed or verified from this sandbox (no GitHub connectivity). Per the
  authorizing message's own instruction, this was treated strictly as an environment-visibility
  gap and this package was produced using the bounded task text supplied directly in that message.
related_artifact: TASK_CLAUDE_0014_COMPLETION_REPORT.md
related_chapters: []
related_source_cards: []
recommended_resolution: >
  Codex or whoever has repository access should confirm this package's content against the
  canonical task file, once accessible, to check for any material difference this session could
  not detect.
owner_for_decision: "Codex / Chief Editor / Serhii"
```

## Summary

Eleven gaps logged: three verification-access gaps (Fine & van den Scott body text, elevated priority; Borgatti & Molina 2003; Kadushin), three negative findings on group-level measurement instruments (microgroup durability, role transfer, founder dependence - all explicitly not filled with invented substitutes), two case-specific tensions requiring Chief Editor resolution before adoption (Chapter 13 duplicate-case risk; Chapter 15 framing-constraint requirement), one case-source limitation (Chapter 12's unnamed studied organization, itself explained by the ethics research in Part B), one flagged-statistics item spanning three chapters, and one environment-visibility gap regarding this task's own canonical coordinates. None of these gaps was resolved by invention; each carries a stated, honest path to resolution and an owner.
