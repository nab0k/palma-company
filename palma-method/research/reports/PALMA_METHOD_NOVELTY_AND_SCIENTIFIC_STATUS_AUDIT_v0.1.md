# Palma Method — Novelty and Scientific Status Audit v0.1

Task: TASK_CLAUDE_0024, Streams 1 and 3
Owner: Claude
Status: draft for editorial review (Codex / Serhii)
Scope: reconstructs Palma Method as it currently exists across its governing
documents, working drafts, and the manuscript itself, then evaluates its
scientific status. Does not improve, resolve, or harmonize the Method before
reconstructing it - divergences found between sources are reported as findings,
not silently fixed.

This is not a promotional exercise. Several findings below are negative. That is
the correct outcome of this kind of audit, not a failure of it.

---

## Part A — Stream 1: Reconstructing the Method as it actually exists

### A.0 A finding that shapes everything below: three layers, not one Method

Before describing any component, one structural fact has to be stated plainly,
because it affects how every subsequent claim should be read: **"Palma Method"
currently exists as three overlapping but not fully reconciled layers of
documentation**, and this audit found real, specific divergences between them -
not just differences of emphasis.

1. **The governing decisions** - `DECISION_0003_RELATIONSHIP_CAPITAL_ARCHITECTURE.md`
   (approved 2026-07-16) and `DECISION_0005_PALMA_METHOD_CORE_ARCHITECTURE.md`
   (approved 2026-07-19), both authored by Founder Serhii Nabok, both explicitly
   marked `status: approved`, and `PALMA_METHOD_CANON_v1.0.md` (TASK_CLAUDE_0017,
   2026-07-20), which states it defers to both Decisions and treats disagreement
   with either as automatically losing.
2. **The editorial tool-spec drafts** - `PALMA_METHOD_TOOL_SPEC_v0.1.md`
   (TASK_CLAUDE_0020) and `PALMA_METHOD_TOOL_SPEC_v0.2.md` (TASK_CLAUDE_0021),
   both dated 2026-08-15, both explicitly marked "editorial working document, not
   manuscript prose," built per what v0.2 itself calls "current author direction"
   rather than a new registered Decision.
3. **The manuscript itself** - `MANUSCRIPT_SNAPSHOT_2026-08-15.md`, the sole
   authoritative current book text per this repository's own AGENTS.md and per
   the snapshot file's own header.

These three layers agree closely on some things (the five Relationship Capital
dimensions; the Palma Moment as a named concept) and diverge specifically and
non-trivially on others (the phase architecture; the tool inventory - see A.3
and A.4 below). This audit reports each component's status in all three layers
where they differ, rather than picking one as "the" Method and treating the
others as noise.

### A.1 The central question

**As stated in the manuscript's own introduction** (lines 31-33 of the snapshot):
what turns the ability to reach people into their readiness to respond, help, or
act together. The book's own formulation: "что именно превращает возможность
обратиться к людям в их готовность откликнуться?" - and, immediately after,
the book's own working answer: "настоящая единица коммуникации - не сообщение,
а отклик" (the real unit of communication is not the message but the response).

This framing is present, consistent, and load-bearing across the manuscript -
Chapter 1's central metaphor (the sound of one hand clapping) is built directly
on it, and Chapters 11-16 (the practice chapters) and 17-21 (the client-cycle
chapters) both operate as elaborations of the same question at different scales.
This is the one component of the reconstruction with no divergence across the
three layers.

### A.2 Relationship Capital and its five dimensions

**Per DECISION_0003 (canonical, governing document):** "Relationship Capital is
the value accumulated in an organization's relationships that enables trust,
cooperation, access, support, and coordinated action." Architecture:
capabilities/conduct → relationships → accumulated relational value →
situational mobilizability → actions/outcomes. Five core dimensions, and only
these five: trust, reciprocity, access, relationship strength, network
structure. Institutionalization is a process, not a sixth dimension.
Mobilizability is derived, not a core dimension. Two levels of analysis: dyadic
and portfolio. DECISION_0003 states its own evidence standard explicitly: "This
definition is a Palma Method synthesis, not a claim of universal academic
consensus."

**Per the manuscript** (Chapter 6, lines 165-194): matches DECISION_0003
closely and precisely - the same five dimensions (lines 181-182), the same
"capital" caveat about ownership and non-fungibility (lines 190-191), the same
institutionalization definition (lines 188-189), the same "not identical to
personality traits, reputation, or contact databases" distinctions carried
through concretely via the 26-year-friendship narrative. This is the strongest
point of alignment across all three layers - the manuscript did not drift from
the governing Decision.

**Per the tool-spec drafts:** consistent with DECISION_0003, adds an
operational split of the fifth dimension (network structure) into a "dyadic
layer" (trust, reciprocity, access, tie strength) and "network layer"
(structure, bridges, redundancy, bottlenecks) for the Relationship Capital Map
tool specifically (v0.2). This is an elaboration for tool-building purposes, not
a contradiction of the four-dimension-plus-portfolio-view architecture
DECISION_0003 and the manuscript both already establish.

### A.3 The phase architecture - the sharpest divergence found in this audit

**Per DECISION_0005 (canonical, governing document, approved by the Founder):**
six phases - **Orient, Diagnose, Decide, Design, Enable, Evaluate** - explicitly
"an iterative reasoning architecture, not a guaranteed linear transformation
sequence." The book's five-chapter Part IV route is explicitly *not* treated as
a seventh phase or a competing architecture: "The sequence Diagnose → Design →
Launch → Advise → Handover remains the book's client-engagement route, not the
Method core." DECISION_0005's own chapter-to-phase mapping: Chapter 17
(Diagnose) covers Orient + Diagnose; Chapter 18 (Design) covers Decide + Design;
Chapter 19 (Launch) covers Enable; Chapter 20 (Advise) covers "Evaluate, plus
course correction, while ownership remains with the organization"; Chapter 21
(Handover) is explicitly *not* a seventh phase but "the ownership and capability
principle that runs through Enable and Evaluate."

**Per the tool-spec drafts (v0.1, then revised in v0.2):** a *different*
four-stage architecture - **Diagnose → Design → Launch → Transfer** - with
**Facilitate** (v0.1 called it "Advise/Facilitate") named as the cross-cutting
principle operating across all four stages, explicitly stated to have "no
artifact or completion criterion of its own" and not to be "stage 5." This is
described in v0.2 as built per "current author direction," not as an
application of DECISION_0005.

**This is a direct structural inversion, not a naming difference.** DECISION_0005
treats **Advise (Chapter 20)** as a normal phase-mapped stage (Evaluate) and
treats **Handover (Chapter 21)** as the cross-cutting, non-phase principle. The
tool-spec drafts treat **Handoff/Transfer (mapped to Chapter 21)** as a full
stage with its own five completion criteria, and treat **Facilitate (mapped to
Chapter 20's content)** as the cross-cutting, non-stage principle. The two
documents agree on which chapter is "diagnose," "design," and "launch," and
they agree that four things are sequential and one thing is cross-cutting - but
they disagree, specifically, about **which of the two remaining components
(Advise or Handover) is the sequential fourth stage and which is the
cross-cutting principle.**

**Per the manuscript itself:** neither architecture's vocabulary appears by
name. The manuscript uses only the five chapter titles - Диагноз, Дизайн,
Запуск, Совет, Передача (Diagnose, Design, Launch, Advise/Counsel, Handover) -
and does not use "Orient," "Decide," "Enable," "Evaluate," "Transfer," or
"Facilitate" anywhere in the snapshot text. Read on its own terms, without
either external framework imposed, Chapter 20's content (Schein's process
consultation, humble inquiry, psychological reactance, the Bombom-advice
episode) is substantively about a facilitative, non-deciding stance - closer in
spirit to what the tool-spec calls "Facilitate" than to a discrete "Evaluate"
phase with its own completion criteria. Chapter 21's content (institutionalization,
Selznick, the Handoff-adjacent "would the structure survive" question) is
substantively about a testable transition - closer in spirit to what the
tool-spec calls "Transfer" than to DECISION_0005's characterization of it as "not
a seventh phase." **On this specific point, the manuscript's actual prose reads
as more consistent with the tool-spec's structure than with DECISION_0005's own
stated chapter mapping** - which does not resolve the inconsistency, but is
worth stating plainly, since it suggests the tool-spec drafts may reflect a real
authorial reconsideration that has not yet been captured in a new Decision.

**What this audit does, and does not, do about this finding:** per AGENTS.md
("When instructions conflict, stop and ask the Chief Editor or Founder; do not
invent policy"), this audit does not resolve which architecture is correct. It
is reported here as a finding requiring an editorial decision - either a new
Decision superseding or amending DECISION_0005's specific phase-to-chapter
mapping, or a correction to the tool-spec drafts to bring them back into line
with DECISION_0005 as written. Both are legitimate outcomes; this audit takes no
position on which.

### A.4 The five tools - status by layer

**Relationship Capital Map, Infrastructure Canvas, Response Signals, Palma
Moment, and Handoff Test** exist, with full specifications, only in
`PALMA_METHOD_TOOL_SPEC_v0.2.md` (and an earlier version in v0.1). None of
these five names appears in `MANUSCRIPT_SNAPSHOT_2026-08-15.md`. This does not
make the tool-spec work invalid - it was explicitly commissioned as forward
editorial material, not manuscript prose, and its own header says so - but it
means readers of the current manuscript would not encounter these five named
tools; they would encounter three different, already-organic constructs the
manuscript has independently developed:

- **Chapter 5's Palma Moment** (lines 154-155): matches the tool-spec's Palma
  Moment closely in substance (a counter-action that changes what each side can
  subsequently expect) and is the one tool-spec construct that genuinely does
  appear, by name, in the manuscript.
- **Chapter 12's "five maps"** (stakeholder map, organization-to-stakeholder
  relationship map, the network map itself, a flow map of what moves along which
  tie, and a microgroup-boundary map; lines 385-416): a five-part structure that
  does not correspond to the tool-spec's Relationship Capital Map (a two-layer,
  dyadic/network structure). Both are legitimate, non-contradictory mapping
  ideas, but they are not the same tool under two names - a reader encountering
  both would reasonably ask which one Palma actually uses.
- **Chapter 13's six design elements** - channel, role, rhythm, ritual, rules,
  value exchange (канал, роли, ритмы, ритуалы, правила, обмен ценностью; lines
  426-437) - a six-part structure that overlaps with, but does not match, the
  tool-spec's five-element Infrastructure Canvas (routes, roles, rhythms,
  channels, memory). "Ritual" and "rules"/"value exchange" appear in the
  manuscript's six but not the tool-spec's five; "memory" appears in the
  tool-spec's five but the manuscript instead discusses "institutional memory"
  as a related but separately-named concept in Chapter 5 (line 17), not as one
  of the six design elements in Chapter 13.

**Response Signals and Handoff Test have no manuscript-text equivalent at all**
under any name - Response Signals' nonlinear behavior checklist and the Handoff
Test's system-rhythm-dependent testing window are tool-spec constructs only, not
yet reflected in any chapter's prose.

### A.5 The grounding corpus (Canon v1.0's "twelve mandatory pillars")

Canon v1.0 §7 lists a fixed grounding corpus: Goffman, Collins, Fine, Simmel,
Granovetter/Burt, Lave/Wenger, Ostrom, Schein/Argyris/Schön, Weick/CCO, Freeman,
Action Research, Pawson & Tilley, plus modern/digital, power/labor, and
conflict/repair layers. Checking this list against the actual manuscript
snapshot: Goffman (Ch11), Collins (Ch5, Ch13), Fine (Ch11, Ch12, Ch16), Simmel
(Ch1, Ch7), Granovetter (Ch4, Ch7), Burt (Ch4, Ch7, Ch9), Wenger (Ch2, Ch16),
Ostrom (Ch10, Ch18, Ch21), Schein (Ch17, Ch20), Weick (Ch19), Freeman (Ch12) are
all confirmed present and correctly applied. **Argyris/Schön, CCO (communication
constitutes organizations) as a named tradition beyond Craig's transmission/
constitutive distinction, Action Research as a named methodology, and Pawson &
Tilley (realist evaluation) do not appear by name anywhere in the current
snapshot.** This is not necessarily a problem - Canon v1.0 describes a grounding
corpus for the working method, not a checklist every source must appear in
manuscript prose - but it means four of the twelve named pillars currently have
no visible manuscript presence, which is worth knowing before claiming the book
"applies" the full pillar set to a reader.

### A.6 Facilitate/Advise as a cross-cutting stance

Covered in A.3 above as part of the phase-architecture divergence. Substantively,
independent of which document's structural role assignment is used, the content
itself is consistent and well-formed: Chapter 20's own material (Schein's
process consultation vs. expert consultation distinction, humble inquiry, Brehm's
psychological reactance) is a coherent, well-sourced account of a facilitative
stance, whichever architectural slot it ultimately occupies.

### A.7 Movement from repeated encounters to durable relational infrastructure

This progression - repeated encounters (Feld's foci, Ch5) → interaction ritual
(Collins, Ch5) → a Palma Moment (Ch5, Ch14) → participant-to-participant value
creation (the "threshold" Chapter 16 names explicitly, lines 535-536) → durable
relational infrastructure (the six design elements of Ch13, tested via
Chapter 21's institutionalization framing) - is consistently present across the
manuscript as a real narrative arc, even though, per A.4 above, its component
tools are named and structured somewhat differently in the editorial tool-spec
drafts than in the manuscript's own prose. As a *narrative progression*
(not as a fixed, universally-required ladder - both the manuscript, at Ch16 line
549, and the tool-spec v0.2, in its Response Signals section, explicitly warn
against reading it as one) it is coherent and load-bearing throughout the book.

---

## Part B — Stream 3: Scientific-status audit

### B.1 Framing

This section evaluates the Method's propositions against ordinary standards for
theory and instrument quality - conceptual clarity, construct validity,
discriminant validity, causal plausibility, falsifiability, observable
indicators, measurement reliability, boundary conditions, alternative
explanations, empirical support, and generalizability - and classifies each
major proposition. Per this task's forbidden list, no classification below
should be read as, or extended into, a claim that any instrument is validated or
that the Method as a whole has been scientifically tested. It has not.

### B.2 Classification of major propositions

| Proposition | Classification | Basis |
|---|---|---|
| Response, not reach, is the unit that predicts durable value | Evidence-informed synthesis | Grounded in Craig's (1999) transmission/constitutive distinction (established academic taxonomy) and Gouldner's (1960) reciprocity norm (established), applied by extension to organizational communication - the extension itself is Palma's synthesis, not independently tested |
| Relationship Capital's five dimensions (trust, reciprocity, access, relationship strength, network structure) are conceptually distinct | Plausible interpretation, partially evidence-informed | Each individual dimension has independent academic grounding (Mayer/Davis/Schoorman for trust; Gouldner for reciprocity; Granovetter/Burt for tie strength and network structure); their combination into one five-part model, and the claim that exactly these five and no others belong, is Palma's own synthesis - DECISION_0003 states this explicitly |
| The five dimensions are empirically discriminant (i.e., actually separable when measured, not just conceptually distinct) | Unvalidated instrument / no evidence either way | No measurement instrument for the five dimensions has been built or tested in this project; discriminant validity is an empirical question DECISION_0003's own "non-blocking open questions" section leaves open ("measurement") |
| A Palma Moment is a real, observable event distinct from ordinary response | Practitioner heuristic with partial grounding | Builds on Collins's (2004) interaction-ritual mechanism (established) but the specific "counter-action that changes what happens next" definition is the tool-spec's own construction, explicitly and correctly labeled in v0.2 as "not a scientifically confirmed developmental stage" |
| Institutionalization (relational value transferring from a person to an organization) is a real, observable process | Evidence-informed synthesis | Builds on Selznick's institutionalization theory (established, and directly cited in the manuscript's own Chapter 21) - Palma's contribution is applying this lens specifically to relationship-value transfer, not the underlying mechanism itself |
| Network structure (bridging vs. closure) predicts organizational resilience and information flow | Established evidence, correctly bounded | Directly supported by Granovetter (1973), Burt (2004), and the Albert/Jeong/Barabási (2000) robustness-fragility finding - all with real quantified results; the manuscript's own VI-004 restriction correctly limits generalization from large-network studies to small organizational networks, which this audit confirms is being honored in the text checked |
| Dense, closed networks (Coleman's closure) produce both cohesion and the four downsides Portes documents | Established evidence | Directly supported, correctly presented as a genuine two-sided finding, not resolved in either direction |
| A "test of removal" (what disappears if one person is removed) is a valid diagnostic for structural dependency | Practitioner heuristic, evidence-adjacent | The underlying network-science finding it's built on (hub removal fragility) is established for large networks; applying it as a small-organization diagnostic exercise is Palma's own operationalization, not itself tested |
| The six/five behavioral signals (Response Signals, or the manuscript's own "responds/returns/helps/connects/coordinates/takes responsibility" framing) predict relationship durability | Original testable hypothesis | No academic source establishes this specific six-item checklist; it is explicitly presented in the tool-spec as an "observational checklist," not "a validated model with empirically established transition probabilities" |
| A Handoff/Transfer test can determine whether a system has become independent of its founder | Original testable hypothesis, unvalidated instrument | No fixed protocol exists; the tool-spec explicitly declines to specify a universal window, which is honest but also means the "test" is not yet a repeatable instrument |
| TCF and Bombom illustrate the Method's mechanisms | Practitioner heuristic / illustration | Explicitly and correctly labeled throughout the source cards and tool-spec as single-interview findings, not properties of "TCF" as a whole - this labeling discipline is itself a genuine strength of the current material, worth preserving |
| TAK.Shtab institutionalized successfully | Evidence-informed synthesis, correctly bounded in most places, but see the specific overclaim flagged below | Independently corroborated by TAK.Shtab's own public page (SC-110) beyond the founder's testimony - the strongest evidentiary case in the project - but see B.4 below for one place in the actual manuscript prose where this bounding may have slipped |

### B.3 Circularity and unfalsifiable framing - specific check

Two places were checked closely for circular or unfalsifiable framing, since the
task specifically asks for this:

1. **Relationship Capital as "whatever produces coordination"**: not found. The
   manuscript and DECISION_0003 both define Relationship Capital structurally
   (five named dimensions, each independently observable) rather than by its
   effects, which avoids the standard "define the cause by its effect" trap that
   Chapter 10 itself explicitly warns against for the broader social-capital
   literature (line 326, and the sharper "tautology caution" recommended in
   `THEORY_EXPANSION_PLACEMENT_MAP_v0.2.md` item 10). The book's own discipline
   here is a genuine strength.
2. **A Palma Moment's absence explained away**: partially found, and worth
   naming precisely. `PALMA_METHOD_TOOL_SPEC_v0.2.md`'s Stage 3 (Launch)
   states: "A successful launch does not require a Palma Moment. The absence of
   a counter-action is itself a valid, informative result, not evidence the
   launch failed procedurally." This is defensible as stated (a null result is
   real evidence), but it does create a structure where *no observed outcome of
   a launch can, by itself, count against the underlying mechanism* - a
   Palma Moment's presence confirms the mechanism; its absence is reframed as
   "the hypothesis was wrong, the timing was wrong, or the population wasn't
   ready" rather than as evidence against the Palma-Moment construct itself.
   This is a genuine, if modest, unfalsifiability risk worth flagging: as
   currently framed, it is hard to specify what pattern of launch outcomes
   *would* count as evidence against the Palma Moment construct existing at
   all, as opposed to evidence against one specific application of it. See
   `PALMA_METHOD_FALSIFIABLE_PROPOSITIONS_v0.1.md` for a proposed fix.

### B.4 One specific overclaim found in manuscript prose (flagged, not resolved)

Chapter 21 (line 620) states, in the author's own voice, that TAK.Shtab
"apparently passed" Selznick's institutionalization test ("судя по всему, эту
проверку прошёл"). This is close to, and may cross, the line TASK_CLAUDE_0021
established as binding: TAK.Shtab must never be described as having undergone a
formal institutionalization test. The hedge word "apparently" ("судя по всему")
provides some distance from a flat claim of a completed formal test, but a
reader could reasonably take the sentence as claiming TAK.Shtab was tested and
passed, which is stronger than the evidence (an informal, retrospective reading
of organizational features against Selznick's own qualitative criterion)
actually supports. This is an editorial judgment call about existing prose, not
a research-task decision, and this audit does not resolve it - it is logged here
and in `THEORY_EXPANSION_PLACEMENT_MAP_v0.2.md` for the editorial team.

### B.5 Discriminant-validity spot checks requested by the task brief

- **Reach vs. readiness to respond**: conceptually and observably distinct
  (reach = exposure count; readiness = a behavioral signal requiring an actual
  observed action) - clearly discriminant as defined, though no instrument
  currently measures "readiness" with a validated scale.
- **Relationship Capital vs. social capital**: distinct by design - Relationship
  Capital is explicitly scoped to identifiable dyadic/portfolio relationships an
  organization participates in, where social capital in the Bourdieu/Coleman/
  Putnam tradition is broader (societal, communitarian, or stratification-level).
  DECISION_0003 states this is a Palma synthesis, not a claim to have measured
  or improved on the academic construct - a distinction the manuscript maintains
  correctly (Chapter 6 does not claim to have superseded Bourdieu or Coleman).
- **Relationship Capital vs. the relationship itself**: explicitly and correctly
  distinguished in Chapter 6 (lines 5, 11) - a relationship is a fact of
  connection; Relationship Capital is the accumulated value within it. This
  distinction is well-maintained.
- **Relationship Capital vs. mobilizability**: explicitly distinguished (Chapter
  6, line 184, and DECISION_0003 directly: "Mobilizability is derived, not a
  standalone core dimension") - well-maintained, with an honest caution already
  built in (measuring mobilizability by testing it can change what's being
  measured - Chapter 6, line 185).
- **The five dimensions from each other**: conceptually distinct as defined
  (see B.2); empirically undemonstrated, since no instrument has measured them
  side by side on real data.
- **Participant-to-participant continuation vs. relational infrastructure**:
  Chapter 16 (lines 535-536) draws this distinction as a threshold ("part of the
  system creates value for participants directly") rather than a hard
  categorical line - defensible as a continuum, but not a bright-line
  discriminant test a practitioner could apply mechanically.
- **Transfer/Handover and the Handoff Test**: conceptually clear (see A.3, A.4);
  empirically untested as an instrument (see B.2 table).

### B.6 What would be required to call the Method "evidence-informed,"
"scientifically grounded," "testable," or "eventually validated"

- **"Evidence-informed"**: already defensible today, with the qualifications
  above - the Method draws on established research at nearly every component,
  correctly cited and (per this project's own verification discipline)
  independently checked in most cases. This is the honest, currently-earnable
  label.
- **"Scientifically grounded"**: defensible only if immediately qualified as
  "grounded in established research on its component parts, not itself an
  independently tested theory" - used bare, without that qualification, it
  overclaims.
- **"Testable"**: defensible for the propositions in
  `PALMA_METHOD_FALSIFIABLE_PROPOSITIONS_v0.1.md`, which restates the strongest
  claims in falsifiable form - but the Method as packaged today (five tools, six
  or four phases) is not yet stated in a form a third party could test without
  first operationalizing it further.
- **"Eventually validated"**: only defensible as a stated future intention with
  a concrete research program attached (see
  `PALMA_METHOD_FALSIFIABLE_PROPOSITIONS_v0.1.md`'s "after publication" section)
  - never as a claim about the current state of the Method.

---

## Part C — Summary of findings for this audit's own acceptance criteria

- The Method's central question, its five Relationship Capital dimensions, and
  its general narrative arc (repeated encounters → durable infrastructure) are
  consistent across governing decisions, editorial drafts, and manuscript prose.
- The Method's phase architecture is **not** currently consistent: DECISION_0005
  (six phases, Advise as a phase, Handover as cross-cutting) and the tool-spec
  drafts (four stages, Handoff/Transfer as a stage, Facilitate as cross-cutting)
  assign the same two chapters (20 and 21) to structurally opposite roles. This
  requires an editorial or Founder decision to resolve; this audit does not
  resolve it.
- The Method's five named tools (Relationship Capital Map, Infrastructure
  Canvas, Response Signals, Palma Moment, Handoff Test) exist fully specified
  only in editorial drafts. Only the Palma Moment currently appears, by name, in
  manuscript prose. The manuscript has independently developed its own,
  differently-structured mapping (five maps, Ch12) and design-element (six
  elements, Ch13) vocabularies that do not map cleanly onto the tool-spec's
  versions of the same ideas.
- No component of the Method claims, or should claim, independent scientific
  validation. The strongest honest claim available today is "evidence-informed
  synthesis with named, falsifiable, currently-untested propositions" - not
  "scientifically grounded" or "validated" used without qualification.
- One specific manuscript sentence (Chapter 21, line 620, on TAK.Shtab) is
  flagged as being in tension with a standing project restriction, for editorial
  attention, not resolved here.
