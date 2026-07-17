# Wave 3 Cross-Chapter Map

```yaml
document_id: WAVE_3_CROSS_CHAPTER_MAP
document_type: cross_chapter_map
prepared_by: Claude (Research Synthesizer role)
date: "2026-07-17"
task_reference: TASK_CLAUDE_0011.md
scope: "Audits the six Wave 3 chapters (11-16) for duplicated frameworks, inconsistent terminology, false-universal staging claims, level-of-analysis shifts, RC-vs-capability confusion, listening/mapping/design/activation/measurement/learning confusion, repeated sources, and repeated examples."
```

## 1. Position in the book

| Chapter | Part | Immediately precedes | Immediately follows |
|---|---|---|---|
| Chapter 10 | Part II | Chapter 9 | **Chapter 11 (new)** |
| **Chapter 11 - Listen (new)** | Part III | Chapter 10 | **Chapter 12 (new)** |
| **Chapter 12 - Map (new)** | Part III | Chapter 11 | **Chapter 13 (new)** |
| **Chapter 13 - Design (new)** | Part III | Chapter 12 | **Chapter 14 (new)** |
| **Chapter 14 - Activate (new)** | Part III | Chapter 13 | **Chapter 15 (new)** |
| **Chapter 15 - Measure (new)** | Part III | Chapter 14 | **Chapter 16 (new)** |
| **Chapter 16 - Connect Communication and Community (new)** | Part III (closing) | Chapter 15 | Part IV or closing material (not specified by this task) |

This map reflects the ordering given in TASK_CLAUDE_0011 and does not propose any change to book structure, consistent with this task's instruction not to redesign the book.

## 2. Framework reuse audit (checking for accidental duplication vs. intentional cross-reference)

| Framework/source | Chapter(s) used | Pattern |
|---|---|---|
| Edmondson - psychological safety (SC-013) | Ch8 (established), Ch11, Ch13, Ch14 | Reused and explicitly cross-referenced each time ("already established in Chapter 8"), not re-derived - intentional, correctly handled. Flagged below (Section 5) as a source now carrying interpretive weight across four chapters relative to its original single-study scope. |
| Arnstein - ladder of participation (SC-030) | Ch11 (primary), Ch13, Ch16 | Introduced fully once in Ch11; Ch13 and Ch16 reference it by name rather than re-explaining the eight rungs - correctly handled. |
| Weiss - theory of change (SC-035) | Ch13 (primary), Ch15 | Introduced fully once in Ch13; Ch15 reuses the attribution/contribution distinction it grounds rather than re-deriving it - correctly handled. |
| Macnamara - organizational listening (SC-029) | Ch11 (primary), Ch16 | Reused, not re-derived - correctly handled. |
| Freeman - stakeholder theory (SC-010) | Ch11 (light reference), Ch12 (primary) | Correctly sequenced - the narrower listening application in Ch11 does not re-explain stakeholder theory in full. |
| Burt - structural holes/brokerage (SC-005) | Ch9 (established), Ch12, Ch14 | Reused consistently as the grounding for brokerage in both mapping and activation contexts - no duplicated re-derivation found. |
| Barabási-derived hub/resilience findings (SC-012, SC-028) | Ch9 (established), Ch12 | VI-002/VI-004 caution reused and reinforced, not weakened, in Ch12 - correctly handled. |

No framework was found to be independently re-derived from scratch in two different Wave 3 chapters without cross-reference. This is a materially better pattern than would be expected by default and should be preserved in any manuscript integration pass.

## 3. Terminology consistency audit

| Term | Finding |
|---|---|
| Access / relational access / structural access | Used consistently with Chapter 3 v0.2/Chapter 6 v0.4/Chapter 9 v0.3's synced definitions throughout (Ch11's "channel existence," Ch12's explicit relational/structural distinction, Ch15's reach-vs-access distinction). No conflicts found. |
| Mobilizability | Used consistently as the situation-specific capacity governing conversion of accumulated value into action (Ch13, Ch14) - not redefined or treated as a sixth dimension anywhere in this wave. |
| "Practice" (Ch13's term) vs. "institutionalization" (Chapter 6's term) | **Genuine inconsistency, not resolved in this wave.** Chapter 13 introduces "practice" as a repeated, socially recognized pattern (echoing Chapter 5's ritual-chain vocabulary); Chapter 6 uses "institutionalization" for the process by which relational value moves from an individual to an organization. Chapter 14 uses Chapter 6's institutionalization standard directly as its definition of activation success. The two terms are related but not explicitly reconciled anywhere in this wave - flagged in Chapter 13's own Open Questions section and repeated here for visibility. Recommend a future integration pass state explicitly whether "practice" is a component of institutionalization, a precondition for it, or a synonym. |
| "Sensing" (Ch14, Cynefin-derived) vs. "listening" (Ch11) vs. "measurement" (Ch15) | **Genuine gap, not resolved in this wave.** Three related but distinct information-gathering concepts are used at three different points in Part III without an explicit statement of how they relate to each other. Listening (Ch11) is a pre-decision organizational capability; sensing (Ch14) is the observation step within a bounded activation cycle; measurement (Ch15) is formal, decision-supporting, baseline-referenced tracking. A reader moving through all three chapters could reasonably ask whether these are the same underlying capability applied at different moments, or genuinely different activities - this wave does not answer that question explicitly. Recommend Chapter 16 or a Part III framing note state the relationship directly in a future pass. |
| Community models: Wenger's domain/community/practice triad (Ch2, reused Ch16) vs. Chapter 5's six-rung ladder (event → ... → community infrastructure) | Both are used in Chapter 16 without an explicit statement of how they relate - Wenger's triad describes what a community *is*; Chapter 5's ladder describes how an organization *gets there* from a single event. This is not a contradiction (the two operate at different levels: definitional vs. developmental), but Chapter 16 does not state this relationship explicitly, and a reader could experience the two frameworks as competing rather than complementary. Flagged for a future integration pass. |
| Five Relationship Capital dimensions | Used identically across all six chapters, with no chapter proposing a sixth dimension or redefining any of the five. Confirmed clean. |

## 4. Sequencing and false-universality audit

Each individual Wave 3 chapter explicitly avoids presenting its own internal components as a strictly required, universally sequential process (Chapter 11's three listening dimensions, Chapter 12's four mapping layers, Chapter 13's five design components, and Chapter 15's three measurement questions are all explicitly framed as complementary considerations, not stages). Chapter 14's activation cycle is the one partial exception: its four elements (limited intervention, facilitated convening, sensing, response/ownership transfer) have an inherent internal logical order within a single cycle (one cannot sense before intervening), which is appropriate and was not flagged as a problem, since the chapter frames the *cycle itself* as repeating rather than the four elements as a one-time, book-wide sequence.

**A subtler risk was found at the cross-chapter level rather than within any single chapter.** Each chapter's "Connections to Later Chapters" section describes its output feeding directly into the next chapter (Listen feeds Map; Map feeds Design; Design's assumptions get tested in Activate; Activate's implementation feedback becomes Measure's formal practice; Measure's distinctions inform Connect). Read together across all six chapters, these connections describe a linear pipeline, even though no single chapter claims this pipeline is the only valid order or that it must run start-to-finish for every engagement. This is worth naming explicitly rather than leaving implicit: in real organizational practice, these capabilities are iterative and revisited out of order - an organization activates something, measures it, and returns to listening and mapping in light of what it learned, rather than passing through all six chapters exactly once. **Recommendation:** a short explicit caveat (in Chapter 16 or a Part III introduction, neither of which is in this wave's deliverable scope) should state that this ordering reflects a pedagogically useful sequence for explaining the capabilities, not a claim that real engagements proceed through them once, in order, and then stop - directly responsive to this task's instruction not to present the six chapters as a universally linear process without evidentiary support.

## 5. Level-of-analysis audit

| Chapter | Primary level(s) of analysis | Finding |
|---|---|---|
| Chapter 11 (Listen) | Organizational capability | Consistent throughout; does not drift into network-structural language. |
| Chapter 12 (Map) | Stakeholder / relationship (dyadic) / network (portfolio) / flow | Explicitly named as four distinct levels within the chapter itself - the strongest level-of-analysis discipline in this wave, and a useful model for the other chapters. |
| Chapter 13 (Design) | Organizational system design | Consistent; explicitly notes portfolio-wide consequences of single-stakeholder-group design choices. |
| Chapter 14 (Activate) | Organizational process, with network-position concepts (early adopters, brokers) applied at the level of change adoption | Deliberate, explicitly sourced cross-level application (Rogers/Burt, network-position findings applied to organizational change process) - not an accidental conflation, but flagged here so a future reviewer can confirm the application remains explicitly labeled as an application rather than presented as if diffusion research were itself about organizational change specifically. |
| Chapter 15 (Measure) | All five levels simultaneously, organized around organizational decision-making | Explicitly ties each dimension-level measurement back to a decision-support purpose; no drift found. |
| Chapter 16 (Connect) | Communication function / community structure / cross-functional organizational | The stated purpose of the chapter; level shifts are named and intentional throughout. |

No unintentional or unlabeled level-of-analysis shift was found in this wave.

## 6. Relationship Capital vs. relationship-building capability audit

Chapter 6's architecture explicitly separates "relationship-building capabilities and conduct" (Layer 1: individual traits like empathy, honesty, consistency) from Relationship Capital itself (Layer 3: the accumulated value). No Wave 3 chapter redefines Relationship Capital or conflates it with this capability layer. **One gap was found, not a conflict:** Chapter 11's central concept, "listening as an organizational capability," is conceptually adjacent to Chapter 6's Layer 1 (a capability that enables relationship-building) but operates at the organizational rather than individual level, and Chapter 11 does not explicitly cross-reference Chapter 6's Layer 1 to state this relationship. This is flagged as an integration opportunity for a future pass, not a contradiction requiring immediate correction.

## 7. Source reuse table (frequency check)

| Source | Total chapters using it (Wave 1-3 combined) | Note |
|---|---|---|
| SC-013 (Edmondson) | 4 (Ch8, Ch11, Ch13, Ch14) | Highest reuse count in this wave. Originally a single field study of hospital care teams (per the card's own limitations field). Recommend a future manuscript pass confirm this weight of reliance is matched by appropriately hedged language in each of the four chapters (spot-checked in this pass - all four chapters do hedge appropriately), rather than treating repetition itself as reducing the need for hedging. |
| SC-030 (Arnstein) | 3 (Ch11, Ch13, Ch16) | Appropriately reused, not re-derived. |
| SC-035 (Weiss) | 2 (Ch13, Ch15) | Appropriately reused. |
| SC-029 (Macnamara) | 2 (Ch11, Ch16) | Appropriately reused. |

No source was found being cited as though independently discovered in more than one chapter without cross-reference.

## 8. Repeated examples audit

All six Wave 3 chapters use an editorial placeholder rather than a real named case, per this task's exclusions - meaning there is no risk in this wave of an invented example being reused across chapters. The one real, named, secondary-sourced case reused in this wave is Harley-Davidson/HOG (SC-021), appearing in Chapter 16 as a brief counterexample to the community-reduced-to-content-channel failure mode, consistent with (not duplicating) its fuller treatment in Chapter 5. This is an appropriate, sparing reuse of the project's one approved illustrative case, not a repeated-example risk.

## 9. Duplication risks identified

1. **Chapter 11 and Chapter 16 both use Macnamara's organizational-listening research.** Intentional layering (Ch11 develops it fully; Ch16 reuses it narrowly to explain why communication without listening cannot connect to community) - not a conflict, cross-referenced correctly.
2. **Chapter 13 and Chapter 16 both touch governance and boundary-setting.** Chapter 13 develops governance as a design component in general terms; Chapter 16 applies it specifically to community boundaries and ownership. Flagged as intentional layering consistent with the project's existing pattern (e.g., the Chapter 4/Chapter 9 concentration-risk layering resolved in TASK_CLAUDE_0010), not a conflict requiring correction - but not yet explicitly cross-referenced in either chapter's text, unlike the resolved Chapter 4/9 and Chapter 9/10 cases. Recommend an explicit cross-reference be added in a future pass.

## 10. Exclusions confirmed

No chapter, source card, or supporting document produced in this wave references The Collective Fitness, any personal example from Serhii, any private conversation, any confidential client material, or any invented field observation. All six chapters use an explicit, clearly marked editorial placeholder in place of a real case. No chapter proposes a universal Relationship Capital score, a new proprietary method, final authorial-voice prose, or a standalone Palma Method fieldbook. The separate Palma Method architecture workstream was not redesigned, referenced substantively, or waited upon in the production of this wave.
