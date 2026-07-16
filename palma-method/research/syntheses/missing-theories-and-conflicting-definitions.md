# Missing Theories and Conflicting Definitions

```yaml
artifact_id: ART-003
artifact_type: synthesis
title: "Missing Theories and Conflicting Definitions"
version: "1.1"
status: draft_synthesis
owner: Claude (Research Synthesizer role, Section 19 of the handoff)
created_date: "2026-07-16"
last_updated: "2026-07-16"
research_track: "Track A - Theoretical Foundations"
related_chapters:
  - "Chapter 6 (Relationship Capital)"
  - "Chapter 7 (Strong Ties, Weak Ties, and Bridges)"
  - "Chapter 8 (Trust, Status, and Reciprocity)"
  - "Chapter 13 (Design)"
  - "Chapter 15 (Measure)"
related_source_cards:
  - SC-001
  - SC-002
  - SC-003
  - SC-005
  - SC-006
  - SC-011
  - SC-017
related_open_questions:
  - OQ-001
  - OQ-002
  - OQ-003
  - OQ-004
  - OQ-009
  - OQ-010
  - OQ-011
  - OQ-012
  - OQ-013
  - OQ-014
  - OQ-015
downstream_artifacts: []
```

**Prepared by:** Claude (Research Synthesizer role, per Section 19 of the handoff)
**Date:** 16 July 2026
**Purpose:** Per Section 26 ("For Claude," item 4), this note flags theories missing from the handoff's Track A priority list and makes explicit the conflicting definitions already latent in the sources that are on the list. These are editorial decisions ChatGPT (Chief Architect role) and Serhii should resolve and log in `DECISIONS.md`, not choices Claude should make unilaterally. **Migration note (v1.1):** every atomic unresolved item below has been promoted to a tracked entry in `research/open-questions/open-questions-log.md` (IDs noted inline) — this document remains the analytical rationale behind each entry, not the tracker of record.

---

## Part 1: Conflicting definitions that need an explicit editorial decision

### 1.1 What is social capital, and at what level does it live? `→ OQ-001`

The three founding sources on the handoff's own priority list do not agree with each other, and the disagreement is not cosmetic:

Bourdieu (SC-001) locates social capital in the individual/family, treats it as a private, unevenly distributed asset convertible into other forms of capital, and frames it inside a theory of class reproduction. Coleman (SC-002) locates it in the *structure of relations* - a public-good-like resource that inheres in the relationship itself, benefiting everyone embedded in the structure. Putnam (SC-003) scales it further, to the community or societal level, and treats its erosion as a civic/democratic problem, not primarily an individual-advantage problem.

**Why this matters for the book:** Chapter 6 promises "a clear managerial definition" of relationship capital. If the book borrows language from all three sources without picking a level of analysis, readers (and reviewers) will notice the inconsistency - is relationship capital something a leader personally accumulates (Bourdieu), something an organization builds into its structure (Coleman), or something a whole stakeholder ecosystem either has or lacks (Putnam)? Palma's own commercial model (advising individual leaders, but building organizational systems) suggests the book may need to explicitly operate at two levels simultaneously and say so, rather than picking one silently.

**Recommended decision-log entry:** State explicitly which level(s) "Relationship Capital" operates at in the book's working definition, and cite which source(s) that choice draws from.

### 1.2 Closure vs. brokerage: are dense networks or bridging networks more valuable? `→ OQ-002`

Coleman's closure argument (dense, mutually-connected networks enable trust and norm enforcement) and Burt's brokerage argument (bridging ties across structural holes generate novel information and advantage) point in different directions. Both are well-evidenced. The book's Chapter 7 title ("Strong Ties, Weak Ties, and Bridges") suggests awareness of this tension, but the current chapter outline does not yet state a resolution.

**Recommended resolution (draft, for editorial review):** Present closure and brokerage as complementary, not competing - Uzzi's paradox-of-embeddedness finding (SC-017) supplies exactly this synthesis empirically: organizations need both, in balance, and the imbalance (not the presence of either) is the actual risk.

### 1.3 "Social capital" vs. "relationship capital" - is Palma's core term academically grounded or a proprietary coinage? `→ OQ-003`

As flagged in the literature map, "relationship capital" is not a term with the same academic pedigree as "social capital." It appears in intellectual-capital accounting literature (relational capital as a third leg alongside human and structural capital) more than in foundational sociology. The book currently uses "Relationship Capital" as if it were an established scholarly category (Section 6, Chapter 6 title) without stating its lineage.

**This is the single highest-priority open item from this research pass.** Recommend one of two paths, decided and logged before Chapter 6 is drafted: (a) explicitly define "Relationship Capital" as Palma's applied, diagnostic reframing of social capital for an executive audience, citing Bourdieu/Coleman/Putnam as the underlying scholarship and stating the translation openly; or (b) anchor it formally to the intellectual-capital/relational-capital literature (a research gap - see Part 2 below) and cite that lineage instead. Presenting it as neither, as currently drafted, risks an early credibility gap with the sophisticated, skeptical-of-buzzwords readership the book targets (Section 18).

### 1.4 Rational-choice vs. embeddedness: why do people actually cooperate? `→ OQ-004`

Coleman and Olson both start from a rational-choice premise (actors calculate self-interest); Granovetter's broader body of work (embeddedness) and Ostrom's empirical commons research push back against the idea that cooperation is purely calculative, showing that norms, identity, and trust do independent explanatory work beyond incentive design. The book will implicitly take a position on this every time it explains *why* a Palma intervention works - it should do so explicitly rather than switching registers between chapters (sometimes explaining behavior as incentive-driven, sometimes as trust/norm-driven) without acknowledging the theoretical difference.

---

## Part 2: Missing theories worth considering for inclusion

None of the following are on the handoff's Track A priority list. Each is flagged with a specific reason it would strengthen a specific chapter, not as a generic "more research" suggestion.

**Nan Lin, *Social Capital: A Theory of Social Structure and Action* (2001).** `→ OQ-009` Lin offers a fourth major definition, distinct from Bourdieu, Coleman, and Putnam: social capital as "resources embedded in social networks that actors can access or derive benefit from," formalized through network-analysis methodology. Lin's framework is arguably the most directly *measurable* of the four (it operationalizes social capital as accessible embedded resources, which maps closely onto what Track F is trying to measure). Worth adding specifically to strengthen Chapter 15/Track F's methodological grounding, and to give the book a fourth, more overtly executive-friendly definitional option alongside the three already covered.

**Francis Fukuyama, *Trust: The Social Virtues and the Creation of Prosperity* (1995).** `→ OQ-010` Argues national/organizational prosperity correlates with generalized trust and the capacity for spontaneous sociability beyond the family unit, contrasting "high-trust" societies (his examples: Germany, Japan, the U.S.) with "low-trust," family-centric societies that rely more on state intervention to build large organizations. Directly relevant to Chapter 8 (Trust, Status, and Reciprocity) and to the book's international audience (Serhii's Ukraine/Portugal/EU-spanning practice) - gives the book a comparative, cross-cultural angle on trust that the current source list lacks entirely. Should be added with the caveat that Fukuyama's national-culture generalizations have been contested by later comparative-institutions research and should not be presented as settled fact.

**Sherry Arnstein, "A Ladder of Citizen Participation" (1969).** `→ OQ-011` An eight-rung typology distinguishing manipulation and therapy (non-participation) from informing, consultation, and placation (tokenism) from partnership, delegated power, and citizen control (real power). This is precise, decades-tested vocabulary for exactly the anti-Palma Question 6 concern (when does stakeholder engagement become theater) and for distinguishing genuine reciprocity from its imitation. Strongly recommended addition to Chapter 13 (Design) as a practical diagnostic ladder clients can use to self-assess their own current stakeholder practices before Palma engages.

**Robin Dunbar, "Neocortex size as a constraint on group size in primates" (1992) and subsequent "Dunbar's number" research.** `→ OQ-012` Proposes a cognitive limit (commonly cited as ~150) on the number of stable social relationships a person can maintain, with nested layers of decreasing intimacy (close support group ~5, sympathy group ~15, and so on). Directly relevant to the practical design question of how large a "community" or stakeholder circle can genuinely function relationally versus merely nominally - useful for Chapter 2 (An Audience Is Not a Community) as a cognitive-science-grounded explanation for why scale itself degrades relationship quality. Caveat: the specific numbers are contested in recent replications and should be cited as an influential estimate, not an exact constant.

**Everett Rogers, *Diffusion of Innovations* (1962, multiple editions).** `→ OQ-013` The foundational framework for how new practices, ideas, or behaviors spread through a social system over time (innovators, early adopters, early/late majority, laggards; the role of opinion leaders and social networks in adoption speed). Relevant to Chapter 14 (Activate) - launching a small intervention and expecting it to spread through a stakeholder network is, structurally, a diffusion problem, and Rogers' framework gives Palma a well-established vocabulary for it that the current source list does not cover.

**Ernst Fehr and Simon Gächter, "Fairness and Retaliation: The Economics of Reciprocity" (2000) and related experimental economics.** `→ OQ-014` Provides the behavioral-economics complement to Gouldner's sociological account of reciprocity: experimental evidence that *negative* reciprocity (willingness to punish non-cooperators, even at a cost to the punisher) is often a stronger and more consistent driver of cooperation than positive reciprocity (rewarding generosity). This nuances the book's core proposition - it suggests designing for response should account for consequences of *non*-response, not just rewards for responding. Recommended addition to Chapter 8.

**Karl Weick, sensemaking theory (*Sensemaking in Organizations*, 1995).** `→ OQ-015` Concerns how people retrospectively construct meaning from ambiguous events, particularly relevant to Chapter 11 (Listen) and Chapter 19 (Launch/Document) - the live experiment at The Collective will generate ambiguous, real-time observational data, and Weick's framework offers a rigorous vocabulary for how the research team should interpret it responsibly rather than retrofitting a clean narrative onto messy events (a discipline directly relevant to the Evidence Standards in Section 24).

---

## Part 3: Summary recommendation

The single highest-priority action is resolving Part 1.3 (the academic status of "Relationship Capital" itself) before Chapter 6 is drafted, since it is the term the entire book's central proposition depends on. The remaining conflicting-definitions items (1.1, 1.2, 1.4) can be resolved as explicit, stated editorial choices rather than errors to fix - the book does not need to eliminate the tension between these theorists, but it does need to show its work when it borrows from more than one.

Of the missing theories in Part 2, Arnstein's participation ladder and Fehr & Gächter's reciprocity research are the two most directly actionable for the current chapter outline (Chapters 13 and 8 respectively) and are recommended for prompt addition to the research program; Nan Lin, Fukuyama, Dunbar, Rogers, and Weick are recommended as secondary additions for the relevant chapters as research capacity allows.
