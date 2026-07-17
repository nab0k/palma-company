# Decision Memo Addendum: Testing the Asset-vs-Dimensions Architecture for Relationship Capital

```yaml
document_id: DECISION_MEMO_ADDENDUM_asset-vs-dimensions-architecture
document_type: decision_memo_addendum
prepared_by: Claude (Research Synthesizer role)
date: "2026-07-16"
supersedes: none
refines: DECISION_MEMO_relationship-capital-TASK-0005.md
requested_by: Serhii (direct question, not a TASK_CLAUDE ticket)
new_external_research_conducted: false
related_source_cards: [SC-001, SC-002, SC-003, SC-004, SC-005, SC-008, SC-009, SC-012, SC-019]
status: awaiting_decision
```

Serhii asked whether Relationship Capital can be defined as the asset itself - a stock - while trust, reciprocity, network position, access, diversity, and mobilizability are treated as properties or dimensions of that stock rather than built into its core definition. No new external research was conducted; this addendum tests the proposal against the existing evidence base already gathered for this project.

---

## 1. Is the distinction conceptually defensible?

Yes, with one important qualification. The split between "the asset" and "its properties" has real precedent and real operational necessity in the literature this project has already gathered - but it is not uncontested, and the literature itself is split on whether the separation is even coherent.

The strongest support for defensibility comes from the network-science tradition. Granovetter's entire 1973 finding depends on being able to describe a tie (weak, infrequent, low-intimacy) independently of its value - if "closeness" or "trust" were part of the definition of a tie itself, his central, counterintuitive result (weak ties carry more novel information than strong ones) couldn't even be stated, because it requires trust/intimacy and value to vary independently of each other. Burt's structural-holes research depends on the same move: brokerage position is a fact about network topology, measurable without reference to how much any individual likes or trusts the people on either side of the hole. Mayer, Davis, and Schoorman's ABI model does the same thing at the relationship level - it treats trust as a separate, measurable perception about a relationship, not a precondition for the relationship to exist or count. All three of these - the most rigorously operationalized sources in the entire research base - already assume something close to the split you're proposing. That is meaningful evidence it is workable, not just theoretically appealing.

The qualification: Coleman and Putnam do not make this split, and it is worth being honest that they made that choice deliberately, not carelessly.

## 2. Strongest objections

**Objection A - Coleman's functional-definition challenge.** Coleman defines social capital *by what it does* - "social capital is defined by its function... it facilitates certain actions" - not as a substance with attributes. Under a strict Coleman reading, a set of relationships with zero trust, zero reciprocity, and zero mobilizability is not "low-quality capital." It is not capital at all, because it isn't functioning as capital. This is the single strongest objection to the proposed architecture: it implies a floor exists below which a "relationship" is just a contact, not an asset, and a clean asset/property split can obscure exactly where that floor is.

**Objection B - Putnam's bundled-definition precedent.** Putnam explicitly defines social capital as "networks... and the norms of reciprocity and trustworthiness that arise from them" - reciprocity and trust are written into the definition itself, not listed as separate variables. Precedent from the field's most business-recognizable definition argues against a hard separation.

**Objection C - the measurement-collapse risk.** If the asset is counted independently of its properties, "how much Relationship Capital do we have" becomes ambiguous by headcount alone - 10,000 low-trust, low-access contacts could register as "more capital" than 50 deeply trusted ones unless the properties are reintroduced at the measurement stage. This risks quietly reproducing the exact vanity-metric problem Chapter 1 already criticizes in follower counts, one level up.

**Objection D - practical inertness.** If everything a leader can actually act on - strengthen trust, deepen reciprocity, improve network position - lives in the "properties" layer, then the "asset" layer by itself is not something anyone manages directly. This is not fatal, but it means the core definition alone will rarely appear in isolation in usable prose; nearly every actionable sentence in Chapters 6-8 will need to talk about a property, not the asset.

**Objection E - mixed variable types inside one list.** Trust and reciprocity are perceptual/relational (they exist between two specific parties and can differ depending on who's asked). Network position and diversity are structural (facts about topology, in principle measurable by a third party without asking anyone how they feel). Access and mobilizability sit in between - partly perceptual, partly behavioral/observed. Treating all six as one flat list of "dimensions" understates that they are measured in genuinely different ways and would need different instruments.

None of these objections is fatal to the proposal. Together they argue for a specific refinement: **the split is defensible only if the core definition retains a minimal functional floor** (the stock has to have *some* plausible capacity to generate value, even if unrealized) rather than being a purely neutral inventory that would just as happily describe a spreadsheet of cold-outreach targets.

## 3. Core definition of the asset

> **Relationship Capital is the organization's accumulated stock of stakeholder relationships - the specific, identifiable ties, active or latent, through which value could potentially be exchanged.**

This retains a functional floor ("through which value could potentially be exchanged" - answering Objection A) without smuggling trust, reciprocity, or any other property into the definition as a precondition. A cold, unmobilized, low-trust contact still counts, because value could potentially move through it; a name on a list with no plausible path to any exchange at all (e.g., a stranger's public social media handle) does not.

## 4. Properties / dimensions of the asset

Organized by level, since Objection E showed these are not all the same kind of variable:

**Relationship-level properties** (vary tie by tie):
- **Trust** - per the ABI model (SC-008): perceived ability, benevolence, and integrity.
- **Reciprocity** - per Gouldner (SC-009): whether an expectation of mutual exchange is active, dormant, or absent for this specific tie.
- **Access** - whether this specific party will actually respond or act when called on (the book's own reputation-vs-access distinction from the Introduction).

**Portfolio-level properties** (properties of the stock as a whole, not any single tie):
- **Network position** - per Burt and Barabási (SC-005, SC-012): closure vs. brokerage, hub vs. periphery - a structural fact about the whole network, not any one relationship.
- **Diversity** - per Putnam's bonding/bridging distinction (SC-003) and Granovetter (SC-004): how varied the sources of information and opportunity are across the full stock, directly relevant to the over-embeddedness risk named in Chapter 10.

**Composite / derived property:**
- **Mobilizability** - the practical, realized ability to convert part of the stock into actual support when needed. This is not independent of the other five; it is closest to their joint output (high trust + active reciprocity + real access + favorable network position, for the relevant relationships, is close to a definition of high mobilizability). It should be presented in Chapter 6 as the "so what" summary property, not as a sixth item of equal standing with the other five.

## 5. Implications for measurement and for Chapters 6-8

**Measurement:** This architecture supports a genuine two-layer instrument rather than one flat score, which directly answers the caution already logged in the literature map against reducing relationship value to a single vanity metric. Layer one is inventory (map the stock - which ties exist, active and latent; this is a "Map"-stage exercise). Layer two is assessment (score each relevant tie or the portfolio as a whole on trust, reciprocity, access, network position, and diversity, using existing instruments already in the evidence base - the ABI model for trust, a Gouldner-style reciprocity check, Burt/Barabási-style structural mapping for position, a bonding/bridging ratio for diversity). Mobilizability then becomes a derived, composite readout rather than something measured directly from scratch - useful as an executive summary number precisely because it is transparently built from the other five, not a black box.

This resolves the weak/latent/asymmetric-tie objection from REVIEW_CLAUDE_0002 more cleanly than Candidate B in the prior decision memo did. Candidate B still folded trust and convertibility into one long definitional sentence. This architecture removes them from the definition entirely - a weak, low-trust, or asymmetric relationship is unambiguously still part of the stock; it simply scores low on certain properties. Nothing has to be defined away or specially carved out.

**Chapter 6:** Should be restructured (in a future revision, not this memo) around exactly this two-part shape: state the core definition first, then introduce the five-plus-one property framework as a named model. This is a stronger, more citable structure than a single dense sentence, and it directly answers the review's request to distinguish relationship assets, network position, reputation/access, trust, and realized business value as related but separate things.

**Chapter 7 (Strong Ties, Weak Ties, and Bridges):** This resolves a real tension that existed in the v0.1 packet. Under a reciprocity-centered definition (Candidate A from the prior memo), weak ties sat awkwardly at the edge of what even counts as Relationship Capital. Under this architecture, weak ties are unambiguously part of the stock - Chapter 7 becomes explicitly about two of the named properties (network position and diversity), not about whether the underlying asset category applies to them at all.

**Chapter 8 (Trust, Status, and Reciprocity):** Similarly clarifies rather than needing further revision on this specific point - the chapter is already, in substance, an explanation of two of the six named properties (trust and reciprocity), plus a related-but-distinct construct (psychological safety) that REVIEW_CLAUDE_0002 already flagged should not be merged with trust. This architecture gives that separation a formal home: trust and reciprocity are properties of Relationship Capital; psychological safety is a related team-level construct that predicts effectiveness but is not, itself, one of Relationship Capital's defining properties.

## 6. Recommended final formulation

Adopt the asset-vs-dimensions architecture. It is a refinement of, not a replacement for, Candidate B from the prior decision memo (DECISION_MEMO_relationship-capital-TASK-0005.md) - the substance is similar, but decomposing it into a core definition plus a named set of properties is more defensible against the specific objections raised here, more measurable, and resolves the Chapter 7 tension that Candidate B did not fully address.

**Recommended core definition:** "Relationship Capital is the organization's accumulated stock of stakeholder relationships - the specific, identifiable ties, active or latent, through which value could potentially be exchanged."

**Recommended properties framework:** trust, reciprocity, and access (relationship-level); network position and diversity (portfolio-level); mobilizability (composite/derived summary property).

This does not supersede the requirement, already logged in both the Chapter 6 packet and the prior decision memo, that the exact final wording receive Serhii's direct approval before use elsewhere in the manuscript.
