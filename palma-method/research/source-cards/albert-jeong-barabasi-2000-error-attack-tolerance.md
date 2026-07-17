```yaml
id: SC-028
title: "Error and Attack Tolerance of Complex Networks"
author: "Réka Albert, Hawoong Jeong, and Albert-László Barabási"
year: 2000
source_type: peer_reviewed_journal_article
publisher_or_journal: "Nature, Vol. 406, Issue 6794, pp. 378-382"
url_or_identifier: "https://doi.org/10.1038/35019019"
date_accessed: "2026-07-17"
research_track: "TASK_CLAUDE_0008 - Wave 2, Chapter 9 grounding"
book_chapters:
  - "Chapter 9 (Networks, Groups, and Structural Advantage)"
related_concepts:
  - network-resilience
  - concentration-risk
  - scale-free-networks
related_cards:
  - "SC-012 (Barabási - scale-free networks/preferential attachment, the foundational finding this article builds resilience analysis on top of)"
  - "SC-017 (Uzzi - paradox of embeddedness, a complementary finding about concentration risk at the relationship-quality level rather than the network-topology level)"
core_claim: >
  Scale-free networks (where a small number of hub nodes hold a disproportionate share of
  connections) display a specific, asymmetric resilience pattern: they are highly robust against
  random failures (removing randomly selected nodes barely affects overall connectivity, because
  most nodes are peripheral and non-critical) but highly vulnerable to targeted attacks on their
  hubs (removing even a small number of the most-connected nodes causes the network to fragment
  rapidly). This is the primary source establishing that concentration of network structure around
  a few central hubs is a genuine resilience trade-off, not simply an efficiency gain: the same
  structure that makes the network robust to everyday, random disruption makes it fragile to
  disruption specifically targeting its most central points.
summary: >
  A foundational network-science paper (extremely highly cited) that formally analyzes how
  different network topologies - specifically scale-free networks versus random (exponential)
  networks - respond to node removal under two scenarios: random failure and deliberate,
  targeted attack on the highest-degree nodes. The paper finds this asymmetry does not appear in
  random networks (which respond similarly to both kinds of node removal) - it is specifically a
  property of scale-free, hub-dominated structures.
key_evidence: >
  Computational and mathematical modeling of network topology under simulated node-removal
  scenarios, applied to both generated network models and real-world examples (including the
  World Wide Web and the Internet's router-level topology) cited in the original paper.
important_quote: >
  Complex networks display "a surprising degree of robustness" against random failure - attributed
  to redundant, non-hub wiring - "and vulnerability" against targeted removal of their most
  connected nodes.
quote_page_or_location: "Nature, Vol. 406, 27 July 2000, pp. 378-382 (paraphrase; a subsequent erratum corrected an unrelated software error in the exponential-network error-tolerance curves without affecting the core scale-free-network conclusions)"
methodology: "computational network modeling and simulation, applied to both generated network models and real-world large-scale network datasets"
sample: "large-scale network datasets (World Wide Web link structure, Internet router topology) and generated scale-free/random network models"
limitations: >
  As with the underlying scale-free/preferential-attachment finding this paper builds on (already
  flagged in this project as VI-004), this result is well-established for very large, open-growth
  networks studied at internet scale - whether the same resilience/vulnerability asymmetry applies
  in the same way to a small, bounded organizational stakeholder network has not been measured in
  this research pass and should not be asserted as literal fact about any specific client's network
  without direct measurement.
counterarguments: >
  A small organizational network may not have enough nodes or enough growth history to develop true
  scale-free structure at all - the hub-vulnerability finding may not transfer cleanly to a
  100-person stakeholder network the way it does to a million-node web graph. This should be used as
  an illustrative structural lens for concentration risk, not a literal, measured claim about a
  specific organization.
business_implication: >
  Gives Chapter 9 a rigorous, well-established grounding for the concentration-risk argument: an
  organization whose relationship network depends heavily on a small number of highly central
  people or relationships is structurally resilient to ordinary, random attrition (losing a random
  peripheral contact barely matters) but structurally fragile to the loss of any one of its hubs
  (losing a key central relationship, such as a single trusted executive sponsor, can fragment
  access far more than its single-relationship weight would suggest).
palma_implication: >
  Directly supports Chapter 9's treatment of "resilience" and "concentration risk" as measurable,
  structural properties of network structure - distinct from trust, reciprocity, or relationship
  strength - and gives a rigorous academic anchor (beyond Barabási's original preferential-
  attachment finding alone) for why over-reliance on a few central relationships is a structural,
  not just a relational, vulnerability.
potential_case_use: "Chapter 9's core grounding for the resilience/concentration-risk discussion, paired with VI-004's caveat against literal small-network application."
potential_linkedin_post: >
  "Networks built around a few hyper-connected hubs are unusually resilient to everyday disruption
  - and unusually fragile the moment someone deliberately or accidentally removes one of those
  hubs. If your organization's access runs through two or three people, you already know which
  kind of network you have."
confidence_level: high
verification_status: verified_via_primary_publisher_record
notes: >
  Created for TASK_CLAUDE_0008 (Wave 2, Chapter 9). Publication details confirmed via the paper's
  own DOI record; a subsequent Nature erratum corrected an unrelated computational error in the
  random-network comparison curves and does not affect the scale-free-network findings cited here.
  Carries the same VI-004 small-network-generalization caveat already established for SC-012.
```
