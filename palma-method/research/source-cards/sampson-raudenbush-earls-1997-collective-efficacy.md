```yaml
id: SC-040
title: "Neighborhoods and Violent Crime: A Multilevel Study of Collective Efficacy"
author: Robert J. Sampson, Stephen W. Raudenbush, and Felton Earls
year: "1997"
source_type: peer_reviewed_journal_article
publisher_or_journal: "Science, 277(5328): 918-924"
url_or_identifier: "Science 277(5328):918-924, DOI: 10.1126/science.277.5328.918"
date_accessed: "2026-07-17"
research_track: "Sociology of Microcommunities Research v0.1"
book_chapters:
  - "Chapter 13 (Design) - candidate"
  - "Chapter 14 (Activate) - candidate"
  - "Chapter 16 (Connect) - candidate"
related_concepts:
  - collective-efficacy
  - social-cohesion
  - informal-social-control
  - shared-expectation-for-intervention
  - neighborhood-effects
related_cards:
  - "SC-006 (Ostrom - governing the commons, adjacent concept re: collective self-governance capacity)"
  - "SC-013 (Edmondson - psychological safety, adjacent concept re: willingness to intervene/speak up)"
core_claim: >
  **Collective efficacy** - defined as social cohesion among neighbors combined with their shared
  willingness to intervene on behalf of the common good - is negatively associated with violent crime
  at the neighborhood level, net of individual-level controls and of neighborhood structural
  characteristics (concentrated disadvantage, immigrant concentration, residential stability).
  Collective efficacy is measured, and analyzed, as a property of the neighborhood-level social unit
  (via a three-level hierarchical statistical model), not simply as an average of individual
  residents' attitudes. **Correction (TASK_CLAUDE_0016, full-text verification):** the article does
  NOT test, and this card previously overclaimed, that collective efficacy is a "stronger predictor
  than social cohesion alone." The two component scales - social cohesion/trust and informal social
  control - were combined into the single collective-efficacy measure at the outset of the analysis,
  because the authors found them "closely associated across neighborhoods" and concluded they were
  "tapping aspects of the same latent construct" (p. 920); cohesion-alone was never run as a separate,
  competing predictor against the combined measure, so no such comparison exists in the article to
  cite. What the article does directly support is a comparison against structural disadvantage: after
  controlling for concentrated disadvantage, immigrant concentration, and residential stability,
  collective efficacy's standardized effect on the violent-crime scale (-0.53) is larger than the
  remaining effect of concentrated disadvantage (0.171-0.175 across models), and collective efficacy
  substantially reduces (partially mediates) the disadvantage coefficient once added to the model.
summary: >
  Using a large multilevel survey of 343 Chicago neighborhoods combined with 1995 homicide counts
  independently obtained from Chicago police records, Sampson, Raudenbush, and Earls show that
  neighborhoods with similar levels of poverty and residential instability can have different violent-
  crime rates depending on their level of collective efficacy - i.e., whether residents trust each
  other AND believe their neighbors would act (e.g., intervene if children were skipping school or a
  fight broke out) if needed. **Correction (TASK_CLAUDE_0016):** the article does not claim, and this
  card previously overclaimed, that it is "the origin of" collective efficacy as a term. The article
  explicitly builds on Albert Bandura's theory of individual self-efficacy (cited in-text as ref. 11)
  and extends it "by analogy" to the neighborhood level; it does not claim priority for coining the
  phrase "collective efficacy" itself. What is well supported is narrower and more specific: this
  article is the widely cited paper that established "neighborhood collective efficacy" as a
  specific, multilevel-measured construct in the urban-sociology/criminology literature, distinct from
  looser notions of "community spirit" - a foundational-in-its-subfield claim, not an origin-of-the-
  term-itself claim.
key_evidence: >
  Multilevel study (Project on Human Development in Chicago Neighborhoods, PHDCN): community survey
  data from Chicago residents (see `sample` field below for the article's own internal sample-size
  discrepancy) across 343 neighborhood clusters, analyzed with a three-level hierarchical statistical
  model (item within person, person within neighborhood, neighborhood within city). Three violence
  outcomes were used, from two distinct data sources, NOT one uniform source as this card previously
  and inaccurately implied: (1) **perceived neighborhood violence**, a five-item self-report survey
  scale (fights with weapons, violent arguments between neighbors, gang fights, sexual assault/rape,
  robbery/mugging, in the past 6 months); (2) **violent victimization**, a single self-report binary
  survey item (whether the respondent or household member was personally victimized); (3) **1995
  homicide counts**, independently obtained from actual Chicago police records ("the address location
  of all homicide incidents known to the Chicago police," p. 924, note 23) and aggregated to the
  neighborhood level - this is the only outcome genuinely sourced from official/police records, and
  the article explains why: "Homicide is one of the most reliably measured crimes by the police and
  does not suffer the reporting limitations associated with other violent crimes" (p. 920).
  **Correction (TASK_CLAUDE_0016):** this card previously and inaccurately described the data sources
  as "police records, systematic social observation." Systematic social observation does not appear
  anywhere in this article - it is not a method this study uses. (It is the method of a related but
  separate PHDCN publication, Sampson & Raudenbush's 1999 "Systematic Social Observation of Public
  Spaces," American Journal of Sociology, which is NOT the source underlying SC-040 and was not read
  or verified in this pass.) That unsupported claim has been removed.
important_quote: >
  "Social cohesion among neighbors combined with their willingness to intervene" (abstract, p. 918) -
  the article's operational definition of collective efficacy, quoted exactly and shortened to stay
  within this project's copyright-handling word limit. The fuller definition on the same page adds
  "on behalf of the common good," which is preserved in this card's core_claim field but not
  repeated verbatim here for length reasons.
quote_page_or_location: "Sampson, Raudenbush & Earls (1997), Science 277(5328):918-924, p. 918 (abstract). Page and wording confirmed against the full original article text, read in full (7 pages) in TASK_CLAUDE_0016."
methodology: "Multilevel (three-level hierarchical) statistical analysis combining resident community-survey data with two self-report violence measures and one independently-recorded (Chicago police) homicide measure, across 343 Chicago neighborhood clusters. Cross-sectional/correlational design; the article itself states directly, 'causal effects were not proven' (p. 923, Discussion)."
sample: >
  343 Chicago neighborhood clusters (NCs), part of the Project on Human Development in Chicago
  Neighborhoods (PHDCN), 1995 community survey. **Sample-size discrepancy (TASK_CLAUDE_0016, required
  reconciliation):** the article's own text contains three different resident-count figures, and does
  not reconcile them: the abstract (p. 918) states "8782 residents of 343 neighborhoods"; the
  Research Design section (p. 919) states "8752 Chicago residents representing all 343 NCs were
  interviewed"; and footnote 21 (p. 924) states the reported multilevel analyses "were based on the
  7729 cases having sufficient data for all models estimated." No footnote, erratum note, or other
  passage in the article explains the 8782-versus-8752 discrepancy between the abstract and the body
  text; this card does not invent an explanation (for example, a typo in one location) and instead
  records both figures with their exact locations, plus the separate, explained 7729 analytic-subsample
  figure (which reflects respondents with sufficient data for the estimated models, not a
  transcription inconsistency).
limitations: >
  Findings are specific to urban U.S. neighborhoods (Chicago, 1995) and violent crime as the outcome
  variable; transfer to organizational settings (teams, business units, online communities) requires
  explicit, cautious adaptation, since neither the measurement instrument nor the outcome variable was
  designed for organizational contexts - this transfer limit is preserved and restated in the updated
  claims-ledger entries (VI-020, VI-021, VI-023). Correlational, cross-sectional design, not a
  randomized experiment; the article explicitly states its own causal claims were "not proven." The
  article's own Discussion section separately notes: informal-control/cohesion indicators were
  "inferred from informant reports," not observed directly; the study was limited to one city and did
  not extend beyond Chicago's official boundaries; and other dimensions of neighborhood efficacy (for
  example, political ties) were explicitly outside its scope.
counterarguments: >
  Some critics of the "neighborhood effects" literature argue selection effects (who chooses to live
  where) could confound some of the observed relationship despite statistical controls; later
  scholarship has also debated how well collective efficacy as measured in Chicago generalizes to
  very different urban and cultural contexts.
business_implication: >
  Provides the field's most rigorous, most cited empirical anchor for distinguishing "people know and
  trust each other" (cohesion/social capital in a loose sense) from "people believe they can and will
  act together when needed" (collective efficacy) - a distinction directly useful for correcting any
  conflation of community, trust, and coordinated capacity in Part III.
palma_implication: >
  Central evidence for Research Question 4 (distinguishing collective efficacy, collective capacity,
  participation, solidarity, identity, and coordinated action). Supports treating "collective
  efficacy" as a specific, narrower, more precisely measurable construct than generic "community
  strength," directly relevant to Chapter 14's activation-and-ownership-transfer logic and Chapter
  15's caution against inventing a single universal Relationship Capital score.
potential_case_use: "Chicago neighborhoods (PHDCN study sites) - academic case, not a business case; do not present as an organizational example without new sourcing."
potential_linkedin_post: >
  "Trusting your neighbors and believing they'd actually step in if something went wrong are two
  different things. The gap between them - not trust alone - is what predicts whether a
  neighborhood, or a team, can actually act together when it matters."
confidence_level: high
verification_status: verified_with_scope_limit
notes: >
  [Original note, TASK_CLAUDE_0012/0014] One of the most rigorously empirically grounded sources in
  this brief (large-N, multilevel, peer-reviewed in Science) - appropriate to cite with high
  confidence for the core construct definition, while still flagging that transfer from
  urban-violence context to organizational context is an explicit, unproven extension requiring its
  own hedging language in manuscript prose.

  [TASK_CLAUDE_0016 update] The user supplied the complete 7-page original article as a PDF (SHA-256,
  computed directly from the supplied file: f16db6bd775f525dea284a9fb22b98834f8845578f78a60ae89833cdbdd8b0ec
  - this checksum arrived intact and matched the computed value exactly, unlike the corrupted checksum
  transmission in TASK_CLAUDE_0015). The full text was read in this pass. This resolved several
  errors and overclaims in the prior card: (1) removed the unsupported claim that collective efficacy
  was tested as "a stronger predictor... than social cohesion alone" - the two component scales were
  combined at the outset based on their high correlation, not tested as competing predictors, so no
  such comparison exists in the article; (2) removed the overclaim that this paper is "the origin of"
  collective efficacy as a term - the article explicitly builds on Bandura's individual self-efficacy
  theory and extends it by analogy, without claiming to coin the phrase; narrowed to the accurate,
  well-supported claim that this is the foundational paper for neighborhood collective efficacy as a
  specific measured construct in this subfield; (3) removed the unsupported claim that "systematic
  social observation" was a data source in this study - it is not; that method belongs to a separate,
  related 1999 PHDCN publication not verified in this pass; corrected the violence-outcome data
  sources to accurately distinguish the two self-report survey measures from the one genuinely
  police-record-based measure (1995 homicide counts); (4) replaced the paraphrased important_quote
  with a short, exact, page-cited quotation; (5) reconciled, without inventing an explanation, the
  article's own internal sample-size discrepancy (8782 in the abstract vs. 8752 in the body text vs.
  7729 in the analytic-subsample footnote). This full-text read does NOT resolve, and should not be
  read as resolving, whether collective efficacy as measured in a 1995 urban-violence context
  transfers validly to organizational relationship-building or group-capacity measurement - the
  article contains no organizational case and makes no such claim itself; that transfer remains an
  explicit Palma/Part-III extension, labeled as such in Chapters 14, 15, and 16 (see
  CHAPTER_14_v0.3.md, CHAPTER_15_v0.3.md, and CHAPTER_16_v0.4.md). Hence `resolved_with_scope_limit`
  rather than a plain `resolved` or `verified` status.
```
