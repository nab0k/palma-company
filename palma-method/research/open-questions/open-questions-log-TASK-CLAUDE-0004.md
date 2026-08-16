# Open Questions Log

```yaml
document_id: LOG-OQ-001
document_type: open_questions_ledger
version: "1.0"
status: active
owner: Claude (Research Synthesizer role, Section 19 of the handoff)
created_date: "2026-07-16"
last_updated: "2026-07-16"
scope: >
  Tracks every unresolved issue surfaced by Claude's research pass (literature map ART-001,
  anti-Palma argument map ART-002, missing-theories note ART-003). Does not duplicate the
  project-level open questions already logged in Section 25 of PALMA_BOOK_SPRINT_HANDOFF.md -
  those remain owned at the project level and should be migrated separately by whoever owns that
  document (Codex/ChatGPT per Section 19).
```

Fifteen entries. Each entry is atomic (one decision, one owner action) per the migration Definition of Done ("every unresolved issue becomes an Open Question"). Status values: `open` (no decision yet), `recommendation-pending-approval` (Claude has proposed an answer, needs Serhii/ChatGPT sign-off).

---

```yaml
id: OQ-001
title: "What level of analysis does social capital/relationship capital operate at?"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Bourdieu (individual/family asset), Coleman (relational public good), and Putnam (community-level
  resource) define social capital at three different levels of analysis, and the book has not yet
  stated which level(s) "Relationship Capital" operates at.
related_artifact: ART-003
related_chapters:
  - "Chapter 6 (Relationship Capital)"
related_source_cards: [SC-001, SC-002, SC-003]
recommended_resolution: >
  State explicitly, in a DECISIONS.md entry, which level(s) Relationship Capital operates at
  (individual, organizational, and/or stakeholder-ecosystem) before Chapter 6 is drafted.
owner_for_decision: "ChatGPT (Chief Architect) + Serhii"
```

```yaml
id: OQ-002
title: "How should the closure-vs-brokerage tension be resolved in the manuscript?"
status: recommendation-pending-approval
priority: medium
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Coleman's closure argument and Burt's brokerage argument point in different directions; Chapter 7
  needs a stated position, not silent borrowing from both.
related_artifact: ART-003
related_chapters:
  - "Chapter 7 (Strong Ties, Weak Ties, and Bridges)"
related_source_cards: [SC-002, SC-005, SC-017]
recommended_resolution: >
  Present closure and brokerage as complementary, not competing, using Uzzi's paradox-of-
  embeddedness finding (SC-017) as the synthesis: both are needed in balance; imbalance, not
  the presence of either, is the risk.
owner_for_decision: "ChatGPT (Chief Architect) + Serhii"
```

```yaml
id: OQ-003
title: "Is 'Relationship Capital' an academically grounded term or a Palma coinage - and which is it presented as?"
status: addressed_via_task_claude_0004
priority: high
raised_by: Claude
date_raised: "2026-07-16"
date_addressed: "2026-07-16"
context: >
  'Relationship capital' lacks the academic pedigree of 'social capital' - it appears more in
  intellectual-capital/relational-capital accounting literature than in foundational sociology.
  The handoff currently uses it as if self-evidently grounded (Section 6, Chapter 6 title).
  Flagged as the single highest-priority open item from the entire research pass.
resolution_summary: >
  TASK_CLAUDE_0004 authorized targeted research (item 1) resolving this via path (a): Relationship
  Capital is now explicitly defined, in the Chapter 6 packet and the companion comparison table
  (ART-004), as Palma's own applied managerial term - grounded in but distinct from social capital,
  trust, reciprocity, stakeholder theory, network science, and communities-of-practice research.
  New source card SC-019 (IIRC Six Capitals Framework, "Social and Relationship Capital") supplies
  the closest existing institutional cousin, without claiming Relationship Capital is itself an
  established academic discipline (per REVIEW_CLAUDE_0001's approved editorial decision and
  TASK_CLAUDE_0004's explicit constraint). Marked "addressed" rather than "resolved" because no
  single external authority formally validates the term - it remains, correctly, a stated Palma
  synthesis, not an imported consensus.
related_artifact: ART-003
related_chapters:
  - "Chapter 6 (Relationship Capital)"
related_source_cards: [SC-001, SC-002, SC-003, SC-019]
recommended_resolution: >
  Choose and log one of two paths before Chapter 6 is drafted: (a) define Relationship Capital
  explicitly as Palma's applied reframing of social capital for an executive audience, citing
  Bourdieu/Coleman/Putnam and stating the translation openly; or (b) anchor it to the intellectual-
  capital/relational-capital literature (research gap - see OQ-009 area) and cite that lineage.
  RESOLVED VIA PATH (a), see resolution_summary above.
owner_for_decision: "ChatGPT (Chief Architect) + Serhii - final sign-off on Chapter 6 packet v0.1 wording still recommended"
blocking: "No longer blocking - Chapter 6 packet v0.1 has been drafted using this resolution; ChatGPT sign-off on final wording still recommended before v1.0."
```

```yaml
id: OQ-004
title: "Does the manuscript explain cooperation as rational-choice-driven or embeddedness/norm-driven, and is that choice consistent across chapters?"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Coleman and Olson start from rational-choice premises; Granovetter and Ostrom's empirical work
  push back toward norms/identity/trust as independent explanatory factors. The book will
  implicitly take a position every time it explains why an intervention works.
related_artifact: ART-003
related_chapters:
  - "Chapter 8 (Trust, Status, and Reciprocity)"
  - "Chapter 13 (Design)"
related_source_cards: [SC-002, SC-004, SC-006, SC-011]
recommended_resolution: "No single resolution recommended - flag for editorial awareness so register doesn't switch silently between chapters."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-005
title: "Need a citable, specific case of community-as-unpaid-labor-extraction."
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Anti-Palma Track H Question 5 (when does community become unpaid labor extraction) is currently
  supported only by directional/adjacent literature (participation-washing critiques in crowdsourced-
  labor research), not a specific, named, citable corporate case.
related_artifact: ART-002
related_chapters:
  - "Chapter 10 (Dark Side of Social Capital)"
related_source_cards: []
recommended_resolution: "Targeted follow-up search: 'community manager unpaid moderators exploitation', 'brand ambassador program criticism free labor'."
owner_for_decision: "Claude (next research pass) or ChatGPT"
```

```yaml
id: OQ-006
title: "Convert the CSR-greenwashing/stakeholder-theater literature into a formal research card."
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Anti-Palma Track H Question 6 cites 2025 CSR-EM greenwashing research directionally but it has
  not been converted into a full Section-15-template source card.
related_artifact: ART-002
related_chapters:
  - "Chapter 13 (Design)"
related_source_cards: []
recommended_resolution: "Add a formal card for the Keresztúri et al. 2025 Corporate Social Responsibility and Environmental Management study (or an equivalent stronger source) in the next research pass."
owner_for_decision: "Claude (next research pass)"
```

```yaml
id: OQ-007
title: "Need a named, well-documented case of stakeholder-engagement theater with a citable outcome."
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Anti-Palma Track H Question 6 is currently supported by general literature, not a specific,
  named case with a documented reputational or financial cost.
related_artifact: ART-002
related_chapters:
  - "Chapter 13 (Design)"
  - "Chapter 17 (Diagnose)"
related_source_cards: []
recommended_resolution: "Targeted follow-up search for a named case in the next research pass."
owner_for_decision: "Claude (next research pass) or ChatGPT"
```

```yaml
id: OQ-008
title: "Confirm evidence-tier labeling for practitioner (non-peer-reviewed) sources used in the anti-Palma map."
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-16"
context: >
  FeverBee/Richard Millington's branded-community-failure analysis (Anti-Palma Question 1) is
  practitioner evidence, not peer-reviewed academic evidence. Section 24's Evidence Standards
  require this distinction to be visible in the manuscript, not just in the research card.
related_artifact: ART-002
related_chapters:
  - "Chapter 14 (Activate)"
related_source_cards: []
recommended_resolution: "Confirm the manuscript's citation style visibly distinguishes practitioner sources from peer-reviewed ones (e.g., a labeled footnote convention)."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-009
title: "Should Nan Lin's resource-based social capital theory be added to Track A?"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Lin (2001) offers a fourth major, more directly measurable definition of social capital
  (resources embedded in networks, accessible via network-analysis methodology), distinct from
  Bourdieu/Coleman/Putnam and closely aligned with Track F's measurement goals.
related_artifact: ART-003
related_chapters:
  - "Chapter 15 (Measure)"
related_source_cards: []
recommended_resolution: "Add as a formal research card if Track F needs a more measurement-oriented definitional anchor."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-010
title: "Should Fukuyama's high-trust/low-trust societies framework be added to Track A?"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Fukuyama (1995) gives a comparative, cross-cultural account of trust and prosperity, directly
  relevant to Chapter 8 and to the book's international (Ukraine/Portugal/EU) frame, but is absent
  from the current source list. Caveat: national-culture generalizations are contested by later
  comparative-institutions research.
related_artifact: ART-003
related_chapters:
  - "Chapter 8 (Trust, Status, and Reciprocity)"
related_source_cards: []
recommended_resolution: "Add as a formal research card with the contested-generalization caveat stated explicitly."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-011
title: "Should Arnstein's Ladder of Citizen Participation be added to Track A/G?"
status: recommendation-pending-approval
priority: high
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Arnstein (1969) supplies precise, decades-tested vocabulary (manipulation/tokenism/citizen power)
  directly usable for the anti-Palma stakeholder-theater critique (OQ-007) and for Chapter 13's
  design practice.
related_artifact: ART-003
related_chapters:
  - "Chapter 13 (Design)"
related_source_cards: []
recommended_resolution: "Add as a formal research card - flagged as one of the two most actionable additions from this research pass (with OQ-014)."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-012
title: "Should Dunbar's number / group-size-limit research be added to Track A?"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Dunbar's cognitive-limit research on stable relationship group size is relevant to Chapter 2's
  audience-vs-community distinction, but the specific numeric claims are contested in recent
  replications.
related_artifact: ART-003
related_chapters:
  - "Chapter 2 (An Audience Is Not a Community)"
related_source_cards: []
recommended_resolution: "Add as a formal research card only if cited as an influential estimate, not an exact constant."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-013
title: "Should Rogers' Diffusion of Innovations be added to Track A/G?"
status: open
priority: medium
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Chapter 14 (Activate) currently lacks direct theoretical grounding for how a launched
  intervention is expected to spread through a stakeholder network; Rogers' framework is the
  standard vocabulary for this.
related_artifact: ART-003
related_chapters:
  - "Chapter 14 (Activate)"
related_source_cards: []
recommended_resolution: "Add as a formal research card to fill the identified Activate-stage theoretical gap."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-014
title: "Should Fehr & Gächter's negative-reciprocity research be added to Track A?"
status: recommendation-pending-approval
priority: high
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Behavioral-economics evidence that negative reciprocity (punishing non-cooperation) is often a
  stronger driver than positive reciprocity nuances the book's core proposition and Gouldner's
  (SC-009) purely sociological account.
related_artifact: ART-003
related_chapters:
  - "Chapter 8 (Trust, Status, and Reciprocity)"
related_source_cards: [SC-009]
recommended_resolution: "Add as a formal research card - flagged as one of the two most actionable additions from this research pass (with OQ-011)."
owner_for_decision: "ChatGPT (Chief Architect)"
```

```yaml
id: OQ-015
title: "Should Weick's sensemaking theory be added to Track A/G?"
status: open
priority: low
raised_by: Claude
date_raised: "2026-07-16"
context: >
  Weick's framework for how people retrospectively construct meaning from ambiguous events is
  relevant to Chapters 11 and 19 and to disciplined interpretation of The Collective's live
  observational data, per the Evidence Standards in Section 24.
related_artifact: ART-003
related_chapters:
  - "Chapter 11 (Listen)"
  - "Chapter 19 (Launch)"
related_source_cards: []
recommended_resolution: "Add as a formal research card if the live-experiment research team needs a documented interpretive discipline."
owner_for_decision: "ChatGPT (Chief Architect)"
```

---

## Summary

15 open questions logged. 3 flagged `high` priority: OQ-003 (Relationship Capital's academic grounding - blocking for Chapter 6), OQ-011 and OQ-014 (the two most actionable literature additions). 3 carry a Claude-drafted recommendation awaiting sign-off (`recommendation-pending-approval`: OQ-002, OQ-011, OQ-014). The remaining 12 are `open` with no recommendation yet, requiring an editorial decision from ChatGPT (Chief Architect) and/or Serhii before the relevant chapter is drafted.
