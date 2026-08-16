# Wave 3 Corrective Change Log

```yaml
document_id: WAVE_3_CORRECTIVE_CHANGE_LOG
document_type: corrective_change_log
version: v0.2
lifecycle: draft_for_editorial_review
editorial_status: under_revision
final_publication_copy: false
task_reference: TASK_CLAUDE_0012.md
owner: Claude (Research Synthesizer and Developmental Editor role)
created_date: "2026-07-17"
scope: "Traces every material change made in the v0.1 -> v0.2 revision of Chapters 11-16 to a specific numbered problem (A-G) in TASK_CLAUDE_0012."
```

This log is the authoritative traceability record for this revision wave. Every row states what changed, why (which problem it corrects), and where. Nothing in this log resolves a v0.1 claim by silently deleting it; superseded material remains readable in the preserved `CHAPTER_XX_v0.1.md` files.

## Problem A — Hidden linear pipeline

| Chapter | What changed |
|---|---|
| 11 | "Connections to Later Chapters" replaced with "Connections to other Part III chapters (revised for nonlinearity)"; added explicit loop: a measurement result (Ch15) or failed intervention (Ch14) routes the organization back to Ch11's questions, not forward past them. |
| 12 | Same section restructured; added explicit loop: mapping can follow a failed intervention or a measurement result, not only precede design. |
| 13 | Connections restated: design can begin with an already-existing social group discovered via mapping or intervention, not only a mapped gap. |
| 14 | Connections restated: a failed intervention is diagnostic of a listening gap (Ch11) or mapping error (Ch12), sending the organization backward, not only forward to Ch15. |
| 15 | Connections restated: a measurement result is one of the most common real triggers for returning to Ch11 or Ch12, not the final stage of a sequence. |
| 16 | Connections restated: Chapter 16's question (has member-to-member value creation begun) can be asked and answered independent of whether Chapters 11-15 were completed in order. |
| Part III framing | `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Sections 2 and 4, states the loop-back structure as the architecture's defining feature, not an add-on disclaimer. |

Per TASK_CLAUDE_0012's explicit instruction, this was corrected structurally (each chapter's purpose, connections, and internal logic) rather than by adding a single nonlinearity disclaimer.

## Problem B — Part III competes with Palma Method

| Chapter | What changed |
|---|---|
| 13 | Added explicit disclaiming language in the Central Argument, Section 6 header, Risks of Overclaiming, and closing paragraph of the Draft Chapter: the five-component architecture is stated as operationalizing already-established book concepts, not a proprietary methodology that could substitute for or anticipate Palma Method. |
| 14 | Retained existing Cynefin/Rogers bounded-framework language; no new proprietary-framework risk introduced. |
| 16 | Six coordination questions (extended from v0.1's three) explicitly re-labeled, in Editorial Notes, as not a new named model. |
| Part III framing | `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 5, states the boundary explicitly and confirms no chapter defines Palma Method indirectly. |

## Problem C — Terminology conflicts

| Item | Resolution | Where |
|---|---|---|
| Listening / sensing / measurement | Explicitly distinguished and their relationship stated (concurrent, not sequential) | `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 10 (canonical statement); referenced and applied in Ch11 Key Distinctions, Ch14 Proposed Architecture (sensing definition), Ch15 Chapter Purpose |
| Practice / institutionalization | Explicitly distinguished; not collapsed, and institutionalization not treated as automatically superior | `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 10; referenced in Ch13 Key Distinctions, Ch14 Key Distinctions and closing draft paragraph |

Both terminology conflicts identified in `WAVE_3_CROSS_CHAPTER_MAP.md` (v0.1) as unresolved are now resolved. See `WAVE_3_CROSS_CHAPTER_MAP_v0.2.md` for confirmation.

## Problem D — Design and Activate overlap

| Chapter | What changed |
|---|---|
| 13 | Added new "conditions vs. outcomes" key distinction; added the specify/enact/emerge/fail-or-mutate table (Section 6) applied to all five design components - this is the chapter's largest single addition. |
| 14 | Central Argument rewritten to state the activation-side half of the same distinction: intervention proceeds without assuming designed conditions will produce the intended social response. Added "designed conditions vs. designed-for social response" key distinction. Added new "safe-to-fail for the organization vs. costless for participants" distinction, directly responsive to TASK_CLAUDE_0012's specific caution that pilots involving people are not neutral technical experiments. |

The provisional distinction TASK_CLAUDE_0012 offered ("design asks what conditions might support better relationships; activation asks how an organization intervenes without assuming designed conditions will produce the intended social response") was tested against the sociology brief and retained without modification - it survived contact, per Fine's idioculture research (SC-038) and the sociology brief's Research Question 6 finding (conditions are designable, most valued outcomes are emergent).

## Problem E — Community as an assumed destination

| Chapter | What changed |
|---|---|
| 16 | This is the chapter's central correction. New key distinction: "Community as one outcome among several," explicitly rejecting a developmental-ladder reading of category/audience/customer base/network/group/club/community of practice/public/community/ecosystem. New evidence: Fine & van den Scott's wispy communities (SC-039) and Sampson, Raudenbush & Earls's collective efficacy (SC-040) used to state that a temporary group, a network without felt community, or "no community at all" can each be the correct outcome. Closing paragraph of the Draft Chapter states this directly. |
| 14 | Closing paragraph adds: not every practice produced by a repeating intervention cycle should be institutionalized; some are legitimately transient. |
| 13 | Design/control distinction reinforced with the observation that idioculture (an emergent local practice) is not something design can guarantee, undercutting any implicit promise that designed conditions produce community. |
| Part III framing | `PART_III_ARCHITECTURE_DECISION_v0.1.md`, Section 6, states explicitly that Part III's practices do not converge on one fixed endpoint. |

## Problem F — Individual behavior dominates the analysis

| Chapter | What changed |
|---|---|
| 11 | Added two new key distinctions: knowledge held inside microgroups (Fine, SC-038) and informal interpretation by intermediaries - both explicitly named in TASK_CLAUDE_0012's required chapter-by-chapter work and absent from v0.1. Added a fourth listening consideration (reach into microgroup-held knowledge) alongside the existing three-dimension architecture. |
| 12 | Added a fifth map layer: microgroups and boundaries, distinguishing symbolic from social boundaries (Lamont & Molnár, SC-041). Added caution against reifying transient/wispy gatherings as stable structures. |
| 13 | Added boundaries treatment to governance discussion using the symbolic/social boundary distinction; added idioculture as evidence that local norms are emergent, not designed. |
| 15 | Added a fourth architecture question (individual vs. group-level property) and a full new paragraph covering repeated interaction, reciprocity, concentration of participation, bridges and isolates, durability of microgroups, transfer of roles, collective capacity (via collective efficacy, SC-040), conflict handling, and founder-dependence - all named explicitly in TASK_CLAUDE_0012's required chapter-by-chapter work for Chapter 15. |
| 14 | Added collective efficacy (SC-040) as the specific illustration of an outcome an intervention can condition for but not install. |

Per TASK_CLAUDE_0012's explicit instruction, these concepts were added only where they materially change a chapter's claims, not bolted on generically to every chapter. Chapter 16, though clearly relevant to social-level analysis, received its Problem F-adjacent content primarily through Problem E and G corrections rather than a separate microgroup addition, since its existing scope already operated at the group level.

## Problem G — Chapter 16 lacks a sufficiently distinct function

| Chapter | What changed |
|---|---|
| 16 | Complete rebuild of the Central Argument around the new center of gravity TASK_CLAUDE_0012 proposed for testing: once participants create value through relationships with one another, communication becomes part of the infrastructure through which participation, knowledge, boundaries, and power are negotiated. Six coordination questions (up from three), two new required territories (unpaid relational labor; reverse influence on the organization), and a substantially rewritten Draft Chapter. This chapter's word-count target was raised (1900-3000 vs. the original 1800-2800) to accommodate the genuinely new argument without cutting the preserved v0.1 material that TASK_CLAUDE_0012 did not ask to be removed. |

This was tested, per TASK_CLAUDE_0012's instruction, and retained: it produces a new intellectual result (a structural claim about what changes in communication's function, not just a recommendation that communication and community cooperate), and it closes Part III while opening Part IV (Section 6 of `PART_III_ARCHITECTURE_DECISION_v0.1.md`).

## Cross-cutting: new source cards used across this wave

SC-037 (Goffman), SC-038 (Fine, idioculture), SC-039 (Fine & van den Scott, wispy communities), SC-040 (Sampson, Raudenbush & Earls, collective efficacy), SC-041 (Lamont & Molnár, boundaries) - all produced under TASK_CLAUDE_0013 and reused here exactly per that brief's own use/use-with-qualification decisions. SC-042 (Baehr, community of fate) was reviewed but not used in this wave's chapter revisions; the sociology brief itself flagged it as lower-confidence (medium-low), and no chapter's required correction specifically needed it. "Dissensus" was not imported into any chapter, consistent with the sociology brief's reject-or-defer decision.

## Cross-cutting: new VI items added this wave

VI-014 through VI-023 (ten new items across the six chapters). Full detail in each chapter's own Section 15/16 (VI Items). All ten follow the established pattern: state the source's original context, state the extension made in this wave, and require that extension be flagged explicitly wherever the claim appears in future manuscript prose. None upgrades a source's confidence level beyond what `SOCIOLOGY_OF_MICROCOMMUNITIES_RESEARCH_v0.1.md` itself established.

## What did not change

No chapter's core five-dimension Relationship Capital grounding, no chapter's central empirical anchor (Macnamara for Ch11, Krackhardt & Hanson for Ch12, Weiss/Ostrom/Collins for Ch13, Cynefin/Rogers for Ch14, Barcelona Principles/Weiss for Ch15, Wenger for Ch16) was altered, replaced, or reweighted. Every editorial placeholder from v0.1 remains an open placeholder in v0.2 - no case was invented to fill one. No VI item from v0.1 was deleted or downgraded; several were referenced and reinforced.
