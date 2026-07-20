# Final Definition Package: Relationship Capital

```yaml
document_id: TASK_CLAUDE_0006_FINAL_DEFINITION_PACKAGE
document_type: decision_package
prepared_by: Claude (Research Synthesizer role)
date: "2026-07-16"
task_reference: TASK_CLAUDE_0006.md
inputs_used:
  - DECISION_MEMO_relationship-capital-TASK-0005.md
  - DECISION_MEMO_ADDENDUM_asset-vs-dimensions-architecture.md
  - REVIEW_CLAUDE_0002.md
  - existing source cards (SC-001 through SC-023)
new_external_research_conducted: false
status: awaiting_serhii_and_chatgpt_decision
```

This package covers Required Deliverables 1-4 and 7 of TASK_CLAUDE_0006. Deliverable 5 (Chapter 6 v0.2) and Deliverable 6 (Cross-Chapter Change Map) are separate files, cross-referenced at the end. No existing accepted artifact has been modified as part of this task; this is new material only.

---

# 1. Final Definition Package

## A. Short definition (≤25 words)

> **Relationship Capital is the system of relationships an organization holds with the people and groups it depends on.**

(18 words.) Per the task constraint, "stock" is deliberately not used here - "system" is used instead, drawn directly from the Working Direction's own phrasing ("the asset or relational system itself"). Justification for this choice over "stock": "stock" implies a static, ownable quantity (consistent with financial-capital metaphors this book wants to use carefully, per Objection 2 below); "system" implies a set of live, ongoing, mutual connections, which better avoids the ownership/control problem named explicitly in this task's constraints. The word "stock" is retained in the technical definition below, where its use can be properly scoped and justified.

## B. Executive definition (one paragraph, for a CEO or founder)

Relationship Capital is the system of relationships your organization holds with the people and groups you depend on - customers, employees, partners, communities, and others - built up over time through real exchange, not just exposure. It is not the same as your reputation, and it is not the same as how many people follow or recognize you. It is whether the specific relationships you have would actually hold up if you needed them: to vouch for you, to give you the benefit of the doubt, to share information, to cooperate, to show up. Some of these relationships are active and easy to call on; others are dormant but real, and could be reactivated if needed. Like any other capital your organization manages, it can be mapped, assessed, and deliberately strengthened - but unlike financial capital, it cannot be owned, controlled, or spent unilaterally, because every relationship in it depends on another party's continued willingness to participate.

## C. Technical definition (one paragraph)

**Unit of analysis:** Relationship Capital is assessed at two nested levels - the individual relationship (a specific tie between the organization, or a person acting for it, and one stakeholder) and the organizational portfolio (the full set of such ties, viewed as a structure). **Boundaries of the asset:** it includes active and latent ties with identifiable stakeholders (customers, employees, partners, communities, regulators, and similar groups) through which value could plausibly move in either direction; it excludes one-directional audience exposure with no plausible path to exchange (e.g., an anonymous social media follower with no further contact), and it excludes the organization's general standing with people it has no specific relationship with at all. **Distinction from social capital:** social capital is the broader academic tradition (Bourdieu, Coleman, Putnam) describing value embedded in social structure generally, at scales ranging from the individual to the whole of society; Relationship Capital is Palma's narrower, applied, organization-level operationalization of that tradition, not a restatement of it, and is not itself an established academic discipline. **Distinction from reputation:** reputation is a broad, largely one-directional perception held by people who may have no direct relationship with the organization at all; Relationship Capital exists only where an identifiable, potentially reciprocal tie exists. **Distinction from stakeholder relationships generally:** "stakeholder relationships" names the full universe of parties an organization affects or is affected by (per Freeman); Relationship Capital is the *asset value* embedded in the subset of those relationships that are identifiable, hold some functional potential, and can be assessed - not every stakeholder interaction rises to the level of an asset. **Distinction from outcomes:** business or social results (revenue, referrals, cooperation obtained, legitimacy conferred) are what Relationship Capital can produce when mobilized, not the capital itself; conflating the two would make the term unfalsifiable, since any good result could then be retroactively relabeled as evidence of the asset's existence.

---

# 2. Model Architecture

```text
Relationship system / asset
→ properties and dimensions
→ mobilizability
→ outcomes
```

## Layer 1: Relationship system / asset

**Belongs here:** the inventory of identifiable ties - active and latent - the organization holds with specific stakeholders. This layer answers only "which relationships exist," not how good, useful, or active they currently are.

**Does not belong here:** the quality or structure of those ties (Layer 2), whether they are currently usable (Layer 3), or any result produced through them (Layer 4). Also excluded: anonymous, non-specific audience exposure with no identifiable other party.

**How it can be observed:** relationship mapping and stakeholder audits - CRM records, alumni/former-client lists, partnership registries, community membership rolls, employee and former-employee networks.

**How it may be measured:** simple inventory counts, segmented by stakeholder type and by active/latent status; this layer should never be reported as a single aggregate number without the Layer 2 breakdown, since a large but low-quality stock is a different situation than a small but high-quality one.

**How management can influence it without implying complete control:** an organization can create conditions for relationships to form - outreach, community infrastructure, hiring, partnership development - and can choose which relationships to invest attention in. It cannot unilaterally create or guarantee a relationship, because a tie requires the other party's ongoing participation; this layer should always be described as something the organization *holds* or *participates in*, never something it *owns*.

## Layer 2: Properties and dimensions

**Belongs here:** the qualities and structural facts that describe how good, positioned, or well-formed the Layer 1 stock currently is - see the Dimension Set in Section 3 below for the recommended minimal list.

**Does not belong here:** whether a given relationship exists at all (Layer 1), whether it is currently actionable for a specific need (Layer 3), or any actual result (Layer 4).

**How it can be observed:** varies by dimension - trust and reciprocity through surveys, interviews, or interaction-history review; network structure through social-network mapping; relationship strength through frequency/duration/intensity of contact records; access and institutional reach through direct observation of responsiveness and formal-channel presence.

**How it may be measured:** dimension-specific instruments, kept separate rather than collapsed into one score at this layer (collapsing them here would reproduce the single-vanity-metric problem this project has already flagged in Chapter 1 and the literature map).

**How management can influence it without implying complete control:** consistent follow-through tends to build trust over time; visible, honored exchange tends to build reciprocity; deliberate outreach into new clusters tends to improve network diversity. None of these can be produced on command - trust and reciprocity in particular are granted by the other party, not manufactured by the organization, and the most an organization can do is create repeated, honest conditions under which they are more likely to develop.

## Layer 3: Mobilizability

**Belongs here:** the practical, current capacity to activate specific relationships for a specific need - information, cooperation, introductions, support, legitimacy, or coordinated action - as a derived readout of Layer 2's properties, evaluated against a particular purpose.

**Does not belong here:** the underlying properties themselves (already captured in Layer 2) or whether an actual mobilization attempt succeeded (Layer 4). Mobilizability is a capacity claim, not a performance record.

**How it can be observed:** through direct tests (making an actual request and tracking the response) or through a composite estimate built from Layer 2 measurements for the relevant relationships.

**How it may be measured:** as a weighted composite index derived transparently from Layer 2 scores (so it remains traceable back to specific properties, not a black box), or empirically via a track record of successful versus unsuccessful mobilization attempts over time.

**How management can influence it without implying complete control:** an organization can identify which currently under-mobilizable relationships are strategically important and prioritize investment in the specific Layer 2 properties holding them back. It cannot guarantee that mobilization will succeed on any specific occasion, because the outcome always depends on the other party's independent decision at that moment.

## Layer 4: Outcomes

**Belongs here:** the actual results produced when relationships are mobilized - information received, cooperation obtained, introductions made, support given, legitimacy conferred, coordinated action achieved - and the downstream business or social effects that follow (revenue, retention, resilience, reputational gain).

**Does not belong here:** the asset, its properties, or its mobilizability - outcomes are consequences of Relationship Capital, not components of it. This boundary is the one most at risk of being blurred in practice (a good outcome tempts a retroactive claim that "we clearly had strong Relationship Capital"), and Chapter 6 v0.2 states this explicitly as a caveat.

**How it can be observed:** through ordinary business tracking - deals closed, referrals received, introductions made, support given during a difficult period - provided the organization deliberately attributes the outcome back to a specific relationship rather than treating it as unexplained.

**How it may be measured:** standard business and social-impact metrics; the causal link back to a specific relationship or to Relationship Capital generally requires a deliberate attribution practice most organizations do not currently have in place - flagged as a Missing Evidence item for the Measure chapter (not yet drafted).

**How management can influence it without implying complete control:** only indirectly, by investing in Layers 1 through 3. Outcomes also depend on market conditions, timing, and the other party's independent decisions - this is the least directly controllable of the four layers, and the book should not imply that strong Relationship Capital guarantees any specific outcome.

---

# 3. Dimension Set (smallest defensible set)

The Working Direction lists seven candidate terms: trust, reciprocity, access, network position, diversity, relationship strength, institutional reach. Tested against the existing evidence base, two of these (network position and diversity) are both structural/topological facts about the same underlying thing - the shape of the portfolio, not the quality of any single tie - and are recommended for consolidation into one dimension with two named sub-readouts, rather than being carried as two separate dimensions. This yields six dimensions rather than seven, avoiding a longer list without losing any of the distinctions the Working Direction asked to preserve.

### 1. Trust

- **Definition:** the belief that a relationship partner has the ability, benevolence, and integrity to be relied on (the ABI model).
- **Level of analysis:** individual relationship (dyadic; can differ depending on who within the organization is asked).
- **Observable indicators:** survey instruments using the ABI framework; interaction-history patterns (promises kept vs. broken); third-party endorsement.
- **Risks of mismeasurement:** self-reported trust surveys are subject to social-desirability bias; a single trust "score" can obscure which of the three ABI components (ability, benevolence, integrity) is actually weak, which matters for what intervention is needed.
- **Relevant source cards:** SC-008 (Mayer, Davis & Schoorman), SC-018 (Zak - organizational-outcome evidence for high-trust environments).

### 2. Reciprocity

- **Definition:** whether an expectation of mutual exchange is active, dormant, or absent for a given relationship - distinct from trust, which is a belief, because reciprocity is a normative pattern of behavior over time.
- **Level of analysis:** individual relationship.
- **Observable indicators:** history of exchanges given and received; whether obligations are being tracked (even informally) by either party; response to a specific request for reciprocation.
- **Risks of mismeasurement:** reciprocity can be confused with simple transaction frequency; a relationship can transact often without any real norm of mutual obligation (e.g., a purely contractual vendor relationship), which would overstate this dimension if only frequency is measured.
- **Relevant source cards:** SC-009 (Gouldner).

### 3. Access

- **Definition:** whether a specific party will actually respond or act when called on - the book's own reputation-vs-access distinction, applied at the level of a single relationship.
- **Level of analysis:** individual relationship.
- **Observable indicators:** response rate and response time to direct requests; willingness to take an unscheduled call or meeting; track record of follow-through on stated intentions.
- **Risks of mismeasurement:** access can be conflated with warmth or friendliness (a relationship can feel warm in conversation but fail to deliver access when actually tested) - this dimension should be measured behaviorally (did they respond when asked), not through sentiment alone.
- **Relevant source cards:** SC-014 (Edelman - macro-level trust/access context); grounded conceptually in the Introduction packet's reputation-vs-access argument rather than a single dedicated source card.

### 4. Relationship strength

- **Definition:** the frequency, duration, and intensity of contact within a specific tie - a structural/behavioral fact about the relationship's tempo, distinct from trust (a belief) and reciprocity (a normative pattern), even though the three are often correlated.
- **Level of analysis:** individual relationship.
- **Observable indicators:** contact frequency over a defined period; length of the relationship's history; range of contexts in which the two parties interact (single-context vs. multi-context relationship).
- **Risks of mismeasurement:** this is the dimension most at risk of being double-counted with trust and reciprocity, since Granovetter's own original definition of tie strength already blends "amount of time, emotional intensity, intimacy, and reciprocal services" into one construct - if this dimension is measured using intimacy or reciprocity indicators rather than pure contact frequency/duration, it will not be adding independent information and should be flagged as redundant in practice.
- **Relevant source cards:** SC-004 (Granovetter), SC-005 (Burt - complementary structural view of tie value).

### 5. Network structure (consolidating "network position" and "diversity")

- **Definition:** the shape of the relationship portfolio as a whole - both where the organization sits relative to structural holes and hubs (position: closure vs. brokerage, hub vs. periphery) and how varied the clusters it connects to are (diversity/range). These are presented as two readouts of one structural dimension rather than two separate dimensions, because both describe portfolio-level topology, not the quality of any single tie.
- **Level of analysis:** portfolio (the organization's network as a whole), not any individual relationship.
- **Observable indicators:** social network analysis metrics (degree centrality, betweenness/brokerage measures); a bonding-vs-bridging ratio across the portfolio; count of distinct, non-overlapping clusters the organization connects to.
- **Risks of mismeasurement:** structural facts about the network are objective and third-party-measurable, unlike trust or reciprocity - the primary mismeasurement risk is applying findings from very large, open-growth networks (e.g., preferential-attachment/scale-free patterns) to a small, bounded organizational network without direct measurement, a risk already logged as VI-002 in the claims ledger.
- **Relevant source cards:** SC-005 (Burt), SC-003 (Putnam - bonding/bridging), SC-004 (Granovetter), SC-012 (Barabási, used only as an illustrative lens per VI-002's required action, not a literal claim).

### 6. Institutional reach

- **Definition:** the extent to which the relationship portfolio extends into formal, institutional, regulatory, or third-party-legitimizing structures - not just informal personal ties - giving the organization standing or voice in settings an individual relationship could not reach alone.
- **Level of analysis:** portfolio, with specific institutional ties assessable individually.
- **Observable indicators:** memberships, board seats, regulatory or industry-body relationships, formal partnership or accreditation status, media or institutional-gatekeeper relationships.
- **Risks of mismeasurement:** this is the most lightly sourced of the six dimensions in the current evidence base - it is not directly covered by a dedicated primary source card the way the other five are, and using it without further grounding risks the exact kind of unsupported claim REVIEW_CLAUDE_0002 flagged elsewhere in this package. It should be treated as the weakest-evidenced dimension until a dedicated source is found (see Missing Evidence in Chapter 6 v0.2).
- **Relevant source cards:** SC-010 (Freeman - stakeholder theory, the closest existing grounding for extending beyond informal personal ties to institutional stakeholders) and SC-019 (IIRC Six Capitals - institutional/reporting-level framing); neither directly defines "institutional reach" as such, so this dimension currently rests on inference from adjacent sources rather than a direct citation.

### Mobilizability - explicitly not counted among the six dimensions

Per the Working Direction, mobilizability is a derived, composite property (Layer 3 of the model), not a seventh item of equal standing with the six above. It is built from the six dimensions in combination, evaluated against a specific need, and should always be presented as downstream of them, not alongside them.

---

# 4. Strongest Objections to Calling This Asset "Relationship Capital"

These are objections to the *term* specifically - distinct from the architecture questions already tested in the prior addendum.

### Objection 1: "Capital" implies ownership or control over people

The word "capital" carries a strong connotation of something owned, held, and disposed of at the owner's discretion. Applied to relationships, this risks exactly the objectifying, extractive framing Chapter 10 already warns against (community-as-unpaid-labor extraction, disguised exchange). This is the most serious objection raised by this task's own constraints.

- **Resolvable?** Yes, through wording discipline, not through abandoning the term. The definitions above consistently use "holds" and "participates in" rather than "owns" or "controls," and the executive definition states explicitly that the asset "cannot be owned, controlled, or spent unilaterally."
- **Wording/limitation required:** Every formal definition of Relationship Capital should include an explicit non-ownership clause; this should become a standing style rule for the book, not just a one-time caveat in Chapter 6.
- **Scope of impact:** Chapter 6 directly; also relevant to Chapter 10's ethical framing, but does not require a title-level change.

### Objection 2: "Capital" implies fungibility and liquidity it does not have

Financial capital is transferable and comparably fungible (one dollar substitutes for another). Relationships are neither - a trusted relationship with one client cannot be sold, transferred, or substituted for a trusted relationship with another. Using "capital" risks importing an assumption of tradeability the asset does not support.

- **Resolvable?** Yes, via explicit wording. The technical definition should state plainly that, unlike financial capital, this asset is non-transferable and non-fungible.
- **Wording/limitation required:** An explicit non-fungibility clause in the technical definition (already partially present in this package; should be reinforced in the Measure chapter when drafted).
- **Scope of impact:** Chapter 6 and the future Measure chapter (Chapter 15, not yet in scope for this task).

### Objection 3: The term is already used loosely elsewhere and risks dilution

"Relationship capital" circulates informally in sales, CRM, and consulting writing as a loose synonym for goodwill or rapport, without the discipline this package is building. A reader who has encountered the term casually may assume Palma means the shallow version.

- **Resolvable?** Partially. Consistent, disciplined usage and an explicit "not to be confused with the informal usage" note in Chapter 6 can reduce but not eliminate this risk, since Palma cannot control how the phrase is used outside the book.
- **Wording/limitation required:** An explicit disambiguation sentence early in Chapter 6, and consistency in any external-facing material (website, LinkedIn) that uses the term.
- **Scope of impact:** Chapter 6 and marketing/website copy; not a Method-level or title-level issue.

### Objection 4: Coleman's functional-definition threshold problem

Coleman defines social capital by its function, not as a substance with attributes - under this view, a stock of relationships with no trust, no reciprocity, and no mobilizability is not "low-quality capital," it is not capital at all. A Layer-1 definition with no functional floor risks internal inconsistency with one of the book's own three foundational sources.

- **Resolvable?** Yes - already addressed in the short/executive/technical definitions above via the phrase "through which value could potentially move" (technical definition) and by requiring at least plausible functional potential to count as part of the asset at all.
- **Wording/limitation required:** The functional-floor language should remain in the technical definition even though it is not in the 25-word short definition (which cannot carry this nuance within its word limit).
- **Scope of impact:** Chapter 6 wording only.

### Objection 5: "Capital" framing sits in tension with the book's own consent-based ethics

Calling relationships "capital" nudges the reader's mental model toward "an asset to be optimized for the firm's benefit" - in tension with Chapter 10's explicit commitments to participant voice, visible and consensual reciprocity, and exit rights. This is a rhetorical and structural tension, not a wording error, and it is the one objection on this list that wording alone cannot fully resolve.

- **Resolvable?** Only partially. Careful, repeated pairing of "capital" language with mutual/reciprocal framing throughout the book can manage this tension, but as long as "capital" is the chosen central metaphor, some tension with the book's own ethical commitments will persist structurally.
- **Wording/limitation required:** No single fix; requires an ongoing editorial discipline (every use of "Relationship Capital" paired, at least in the book's early framing chapters, with language emphasizing mutuality and consent) rather than a one-time clause.
- **Scope of impact:** This is the one objection that plausibly extends beyond Chapter 6 to the Palma Method's broader positioning, and is worth flagging for ChatGPT and Serhii's attention at that level - not because a title change is being recommended here, but because the tension is real and durable, not a drafting error to be fixed once.

---

# 7. Decision Recommendation

```yaml
recommended_definition: "Relationship Capital is the system of relationships an organization holds with the people and groups it depends on."
recommended_dimensions:
  - trust
  - reciprocity
  - access
  - relationship_strength
  - network_structure (consolidates network position + diversity)
  - institutional_reach (weakest-evidenced; flagged for further sourcing)
mobilizability_status: derived_composite_property, not a dimension, sits between dimensions and outcomes in the model
unit_of_analysis: "dual - individual relationship (dyadic) for trust/reciprocity/access/relationship_strength; organizational portfolio for network_structure/institutional_reach"
editorial_risks:
  - "Objection 5 (capital-framing vs. consent ethics) is not fully resolvable by wording alone and should be flagged beyond Chapter 6."
  - "Institutional reach is under-sourced relative to the other five dimensions."
  - "The short definition necessarily omits the functional-floor clause carried in the technical definition; this gap should not cause confusion if the technical definition is always available alongside it."
ready_for_serhii_decision: yes
```

See companion files: `06-chapter-6-packet-v0.2.md` (Deliverable 5) and `CROSS_CHAPTER_CHANGE_MAP_TASK-0006.md` (Deliverable 6).
