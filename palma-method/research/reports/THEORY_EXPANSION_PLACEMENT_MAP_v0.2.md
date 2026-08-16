# Theory Expansion Placement Map v0.2

Task: TASK_CLAUDE_0023 (repair of TASK_CLAUDE_0022 Stream 3)
Owner: Claude
Status: draft for editorial review (Codex / Serhii)
Supersedes: `THEORY_EXPANSION_PLACEMENT_MAP_v0.1.md` (left in place, not deleted -
its recommendations are retracted or corrected below, item by item, not silently
replaced)

## Why this version exists

TASK_CLAUDE_0022 was rejected: its placement work was built by reading
`manuscript/part-*` files, which are stale (the snapshot file's own header states
they have not been updated since August 4 and do not reflect current content).
`palma-method/research/chapter-packets/MANUSCRIPT_SNAPSHOT_2026-08-15.md` is the
sole authoritative current manuscript text in this repository, per that file's own
header. This version was built by reading that file in full - all 21 chapters, 623
lines, start to finish - and nothing else. No `manuscript/part-*` file was opened
or cited anywhere in this document.

Concretely, the error the user caught: Scott Feld is fully and explicitly present
in the real Chapter 5 (lines 147-149), directly contradicting v0.1's claim that he
was absent. Rechecking all 11 concepts against the real text found the same
pattern repeatedly - the actual manuscript is substantially more theory-dense than
the stale files suggested, and several other v0.1 recommendations were similarly
invalid or overstated once checked against real content.

## Total recommended new theoretical words: ~1,180

This is far below both the original 6,000-9,000 target and v0.1's already-reduced
~4,070 estimate. The reason is not caution for its own sake - it is what direct
reading found. The real manuscript already names and correctly applies, across the
21 chapters, well over twenty distinct academic sources (Simmel twice, Craig,
Wenger, Coleman, Portes, Bourdieu, Granovetter, Burt, Barabási-family, Mayer/Davis/
Schoorman, Gouldner, Uzzi, McPherson/Smith-Lovin/Cook, Krackhardt & Hanson, Lamont &
Molnár, Freeman, Goffman, McNamara, Morrison, Edmondson, Arnstein, Fine, Fine & van
den Scott, Ostrom, Weiss, Snowden & Boone, Rogers, Sampson/Raudenbush/Earls,
Barcelona Principles, Schein, Croskerry, Dynes & Quarantelli, Weick, Brehm,
Selznick), several of them with more precise, quantified detail than the English
placeholder text used in v0.1 ever had (e.g., Burt's Raytheon finding is cited with
the exact "$681 per point of network constraint reduction" figure at line 119,
where the English version only described the finding qualitatively). Of the 11
named concepts this task covers, 5 are already fully and correctly resourced with
no genuine gap left (interaction/communication, social foci, trust, reciprocity,
and - contrary to v0.1's own worry - institutionalization's hardest case,
TAK.Shtab, already has Selznick named and directly applied to it in Chapter 21).
Padding any of these to hit a word-count target would be pure volume for volume's
sake, forbidden by this task's own governance file and by TASK_CLAUDE_0022's
original forbidden list. The ~1,180 words recommended below are the genuine,
non-redundant gaps found after checking every concept against the real text.

## Method

For every chapter referenced below, the claim "the chapter already contains X" is
backed by a specific line range in `MANUSCRIPT_SNAPSHOT_2026-08-15.md`. Where a
v0.1 recommendation is retracted, that is stated explicitly as a **retraction**,
not silently dropped. Where a recommendation survives but at a different size or
anchor, that is stated as a **correction**. New, unchanged-from-v0.1 items are
marked **unchanged**.

---

## 1. Interaction / communication - Craig (1999)

- **Home chapter:** Chapter 1 (Глава 1. Звук хлопка одной ладони), snapshot lines
  40-68.
- **What the chapter already contains:** The chapter's central metaphor (the sound
  of one hand clapping, giving the method its name "Palma") is built directly on
  top of Robert Craig's 1999 transmission/constitutive distinction, cited by name,
  with the publication ("Communication Theory as a Field," 1999) and Craig's own
  seven-tradition framing explicitly described (lines 48-50). Georg Simmel's 1908
  "Wie ist Gesellschaft möglich?" is cited alongside it (line 46) making the same
  point from a different angle (society as ongoing interaction, not a list of
  contacts). The chapter explicitly names the transmission model as "movement of
  one palm mistaken for a clap" - the source's core distinction is not just cited,
  it is the chapter's organizing image.
- **What is genuinely missing:** Nothing. This is fully, precisely, correctly
  resourced.
- **Verdict: RETRACTION.** v0.1 recommended ~650 new words introducing Craig to
  Chapter 1, on the false premise that he was absent. That recommendation is fully
  withdrawn.
- **Recommended added word count: 0**

---

## 2. Social capital / relational capital - terminology and legitimacy cluster

- **Home chapter:** Chapter 6 (Глава 6. Диалог ни о чём длиной в двадцать шесть
  лет), snapshot lines 165-194.
- **What the chapter already contains:** A full five-dimension definition of
  Relationship Capital built through a 26-year friendship narrative (trust,
  reciprocity, access, relationship strength explicitly walked through at line
  181; network structure named as a fifth dimension requiring a step back from any
  single pair, line 182). Institutionalization is explicitly defined (lines
  188-189), cross-referencing back to Chapter 4's publishing-house story. The
  chapter already states, in the author's own words, that Relationship Capital can
  be examined "at the level of a person, team, project, or organization - none of
  them owns the relationships: the unit of analysis changes, the other side's
  participation remains required" (line 179) - this is, independently and
  precisely, the focal-actor/unit-of-analysis discipline Adler & Kwon's academic
  framework provides. The chapter also already interrogates the word "capital"
  itself and its ownership-implying limits (lines 190-191).

This concept splits into three sub-items, as in v0.1:

### 2a. Nahapiet & Ghoshal (1998) - legitimizing precedent for combining structural and relational analysis

- **What is genuinely missing:** No academic precedent is named for treating
  network structure and relational quality as dimensions of one framework - the
  chapter does this (line 181-182) without citing anyone who has done it before.
- **Verdict: CORRECTION.** The underlying opportunity survives, but the anchor and
  framing change: the "dyadic vs. portfolio" split v0.1 assumed does not exist in
  this form in the real chapter - instead there are five dimensions, four assessed
  within a pair and a fifth (network structure) that requires "stepping back."
  N&G's structural/relational/cognitive framework still legitimizes combining
  these different levels of analysis, but the addition should be smaller and
  anchored specifically at line 182, not framed as validating a two-level
  architecture that isn't how the chapter is actually built.
- **Recommended added word count: ~150** (down from v0.1's ~300)

### 2b. Adler & Kwon (2002/2014) - the focal-actor discipline

- **What is genuinely missing:** Nothing substantive. Line 179 already states the
  focal-actor/unit-of-analysis discipline in the author's own words, independently
  of Adler & Kwon.
- **Verdict: RETRACTION.** v0.1 recommended ~150 words to introduce this
  discipline; the discipline is already present, expressed in the manuscript's own
  voice. Citing Adler & Kwon would only add an academic footnote to a point
  already made - not close a gap.
- **Recommended added word count: 0**

### 2c. Kale, Singh & Perlmutter (2000) vs. David Nour (2023) - terminology positioning

- **What is genuinely missing:** The chapter interrogates the word "capital" at
  length (lines 190-191: it implies ownership the organization doesn't have, it
  implies fungibility relationships don't have) but never addresses that closely
  related terms - the narrower academic "relational capital" and the commercial,
  trademarked "Relationship Capital" - are already in use elsewhere. This gap is
  real and unaffected by the Feld/Craig corrections above.
- **Verdict: UNCHANGED** from v0.1, with the anchor point corrected: the natural
  insertion point is near line 190, alongside the chapter's existing interrogation
  of the word "capital," not as a free-standing footnote.
- **Recommended added word count: ~200**

---

## 3. Social foci - Feld (1981)

- **Home chapter:** Chapter 5 (Глава 5. Событие - не инфраструктура), snapshot
  lines 132-164.
- **What the chapter already contains:** Feld is named explicitly, with full
  citation detail: "В 1981 году социолог Скотт Фелд предложил теорию... Он
  опубликовал её в American Journal of Sociology и проверил... на данных
  детройтского исследования домохозяйств середины 1960-х" (lines 147-149). The
  term "социальные фокусы" (social foci) is used directly. The causality caveat
  Feld's own theory insists on is stated in the author's own words: "Социальный
  фокус не создаёт дружбу. Он распределяет возможности для неё" (a focus does not
  create friendship, it distributes opportunities for it - line 148). The
  mechanism is applied concretely to the TCF gym schedule (line 149).
- **What is genuinely missing:** Nothing. This is the specific error the user
  flagged, and it is fully confirmed: Feld is comprehensively present.
- **Verdict: RETRACTION.** v0.1 recommended ~850 new words introducing Feld to
  Chapter 5 - the single largest item in that report. It is fully withdrawn. See
  the correction addendum on SC-111 (`feld-1981-focused-organization-social-
  ties.md`) for the full record of this error.
- **Recommended added word count: 0**

---

## 4. Interaction rituals - Collins (2004) and the emotional-energy measurement caution

- **Home chapter:** Chapter 5, snapshot lines 150-153, with a return at line 431
  (Chapter 13).
- **What the chapter already contains:** Collins's four ritual conditions, the
  1949 grounding in Durkheim's collective effervescence framing, the emotional-
  energy concept, and the ritual-chain mechanism are all cited with real detail and
  correctly attributed to "Interaction Ritual Chains" (2004) (lines 150-152). The
  measurement caution v0.1 wanted to import from Baker (2019) is already
  substantively present, in the author's own words: "С четвёртым сложнее...
  Это нельзя установить по расписанию или фотографии после занятия" (the fourth
  condition [shared emotional mood] is harder... this can't be established from a
  schedule or a photo taken after the session - line 151). This is functionally
  the same caution Baker's review makes (a visible behavioral proxy does not prove
  the underlying construct), independently arrived at.
- **What is genuinely missing:** Baker (2019) is not cited by name anywhere. The
  substance of his caution is present; the academic backing for it is not.
- **Verdict: CORRECTION**, substantially downgraded. This is now a citation-
  grounding nicety, not a content gap - the manuscript already protects itself
  against the exact overclaim Baker's review warns about. Adding Baker by name
  would let the chapter cite a reviewed academic source for a caution it currently
  makes only in its own voice - marginally useful, genuinely optional.
- **Recommended added word count: ~100** (down from v0.1's ~400)

---

## 5. Community of practice - Wenger, sharper "practice" test

- **Home chapter:** Chapter 2 (Глава 2. Когда люди приходят друг к другу),
  snapshot lines 69-88, with a return at line 547 (Chapter 16).
- **What the chapter already contains:** Wenger's domain/community/practice triad
  is cited and explained (lines 75-77), then applied concretely to three real
  cases: the Kyiv office (mixed result - domain and community present, practice
  visible mainly where people built the square-defense campaign together), Harley-
  Davidson's HOG (all three present, line 82-84), and a TCF member who explicitly
  rejected the word "community" in favor of "collective" (line 86). The chapter
  already treats the triad as a diagnostic, not a label everyone inside must
  accept (line 86: "Определение из этой главы — не единственно верное описание
  реальности. Это инструмент для точных вопросов").
- **What is genuinely missing:** A sharper, generalizable test specifically for
  the "practice" leg - distinguishing genuine, visible knowledge-exchange-and-
  repertoire-building from mere recurring co-presence - is not present. The
  chapter's own worked cases are good but ad hoc; a compact, transferable test
  (of the kind the dossier's gym/café/logistics-team illustrations provide) would
  give a reader a tool to apply to their own ambiguous case, which the chapter
  does not currently offer.
- **Verdict: CORRECTION**, downgraded from v0.1's ~450 words since the base
  concept, unlike v0.1 assumed, is already thoroughly applied to multiple real
  cases - only the transferable test itself is missing.
- **Recommended added word count: ~300** (down from v0.1's ~450)

---

## 6. Trust

- **Home chapters:** Chapter 3 (ABI model introduced, line 99), Chapter 7 (closure
  and embedded trust, lines 210-220), Chapter 8 (ABI model applied under real
  stakes during the Bombom crisis, lines 251-253).
- **Assessment:** Fully and precisely resourced across three chapters, including a
  real crisis case (Bombom) that tests the model against actual behavior rather
  than survey response. No genuine gap found.
- **Verdict: UNCHANGED** from v0.1's own "no expansion" call, with corrected
  chapter anchors (v0.1 anchored this to an English "Chapter 8" that does not
  correspond to the real Chapter 8's content, though the underlying judgment -
  no expansion needed - happens to still hold).
- **Recommended added word count: 0**

---

## 7. Reciprocity

- **Home chapters:** Chapter 4 (Gouldner's reciprocity norm introduced, line 123),
  Chapter 8 (revisited directly against the Bombom investment decision, line 259).
- **Assessment:** Fully resourced, including a real test case (which of Sandra and
  Pedro's contacts actually acted, and which didn't). No genuine gap found.
- **Verdict: UNCHANGED**, with corrected anchors as in item 6.
- **Recommended added word count: 0**

---

## 8. Tie strength and network structure - Bermiss & Greenbaum (2016) redundancy finding

- **Home chapter:** Chapter 9 (Глава 9. Если убрать одну точку), snapshot lines
  276-321, specifically the remedies list at line 317.
- **What the chapter already contains:** This chapter is extremely well-resourced
  on its own terms. Granovetter and Burt are both revisited (lines 296, 298-299);
  Burt's Raytheon finding is cited with more precision than the English version
  ever had ("каждая единица снижения «стеснённости» сети... была связана в
  среднем с 681 дополнительным долларом годового дохода" - line 119, referenced
  again in Ch9); the Albert/Jeong/Barabási robustness-and-fragility finding is
  applied to the publishing-house case and, separately, to the November 2023
  OpenAI/Sam Altman board crisis (line 319) as a live, real-time illustration of a
  network nearly collapsing when its central point was removed. The chapter
  already proposes, in its own voice, concrete remedies including building
  redundancy: "Познакомить людей напрямую... Создать второй канал в важный круг"
  (introduce people directly... build a second channel into an important circle -
  line 317).
- **What is genuinely missing:** The remedy at line 317 is stated as a design
  recommendation, not backed by any empirical finding that redundancy actually
  works. Bermiss & Greenbaum's finding - a second genuine internal relationship
  measurably increases the odds a client stays when the primary contact departs -
  is exactly the kind of real-organization evidence this specific sentence could
  cite, and nothing currently does.
- **Verdict: CORRECTION**, consolidated. v0.1 treated this as two separate items
  (one for a "Chapter 4" anchor, one for a "Chapter 9" anchor) totaling ~750
  words. The real Chapter 4 already has a comparable, arguably stronger real case
  (Dewey & LeBoeuf, 2012 - see item 10's note on Chapter 4 below) and does not
  need this citation. The genuine opportunity is narrower and single-sited: back
  up Chapter 9's existing redundancy recommendation with data, not introduce the
  concept of redundancy itself.
- **Recommended added word count: ~200** (down from v0.1's combined ~750 across
  two chapters)

---

## 9. (Consolidated into item 8 above - see note)

v0.1 listed tie strength and network structure as two separate concept entries
with two separate expansion sites (Chapter 4 and Chapter 9). Having read Chapter 4
in full (lines 109-131), it already has a directly on-topic, powerful, named real-
world case - the Dewey & LeBoeuf 2012 collapse (200 of 300 partners left within
four months; the firm filed for bankruptcy in what the chapter calls the largest
law-firm collapse in U.S. history, line 130) - alongside precisely-cited Granovetter
and Burt findings. This is stronger evidence than the Broschak/Bermiss academic
studies would add, and Chapter 4 does not need further citation. The one genuine
gap for this pair of concepts is the single item recorded under 8 above, sited in
Chapter 9 only.

**Recommended added word count for this item: 0 (folded into item 8, not double-
counted)**

---

## 10. Dark side of social capital - Portes, tautology caution

- **Home chapter:** Chapter 10 (Глава 10. Кого не познакомили), snapshot lines
  322-353.
- **What the chapter already contains:** Portes's four-part typology (exclusion,
  excessive claims, restricted freedom, downward-leveling norms) is cited fully
  and precisely (lines 326-330), directly connected to Bourdieu's stratification
  framing (line 339), Uzzi's embeddedness threshold (line 335), and the chapter's
  own Palma-specific vocabulary for capture and gatekeeping (line 343).
- **What is genuinely missing:** The chapter opens by noting that social-capital
  research "long tended toward listing its benefits" (line 326) - a framing that
  gestures at, but does not name, the specific tautology risk (defining social
  capital by its good outcomes, then citing those outcomes as proof) that
  sharpens Portes's own critical contribution.
- **Verdict: UNCHANGED** from v0.1, with the anchor corrected to the real
  chapter's opening (line 326) rather than an assumed English equivalent.
- **Recommended added word count: ~150**

---

## 11. Institutionalization

- **Home chapters:** Chapter 6 (defined, lines 188-189); Chapter 18 (Taktion/
  TAK.Shtab program named concretely, lines 585-587); Chapter 21 (Selznick's
  institutionalization theory named and directly applied to TAK.Shtab, line 620).
- **What the chapters already contain:** This concept is considerably more
  resourced than v0.1 assumed. Chapter 6 defines institutionalization precisely,
  cross-referencing back to Chapter 4's publishing-house story as the negative
  case (value that never institutionalized and left with the department). Chapter
  18 documents the Taktion program and U-LEAD z Europou funding concretely.
  Chapter 21 goes further than v0.1 anticipated: it names Philip Selznick's
  institutionalization theory directly ("Социолог Филип Селзник называл этот
  процесс институционализацией," line 620) and applies Selznick's own test
  (would participants have discarded the current structure if a more efficient
  alternative appeared?) directly to TAK.Shtab, concluding "судя по всему, эту
  проверку прошёл" (apparently passed this test).
- **What is genuinely missing:** Chapter 6's definition (lines 188-189) points
  backward to Chapter 4's story as its illustration; it does not point forward to
  Chapter 18 or Chapter 21, where the fuller theoretical and case treatment
  actually lives. A single forward cross-reference would help a reader connect the
  abstract definition to its fullest concrete application later in the book.
- **Verdict: CORRECTION** - the underlying opportunity survives in a much smaller
  form, and the destination changes from v0.1's assumed Chapter 18 to Chapter 21,
  where Selznick's theory (not just the TAK.Shtab case) actually appears.
- **Recommended added word count: ~80**

### A note outside this task's scope, flagged for the editorial team

While confirming this item, Chapter 21 (line 620) was found to state, in the
author's own voice, that TAK.Shtab "apparently passed" Selznick's
institutionalization test. TASK_CLAUDE_0021's binding restriction states that
TAK.Shtab must never be described as having undergone a formal institutionalization
test. Whether the manuscript's current phrasing ("судя по всему... прошёл" - "by
all appearances... passed") crosses that line is an editorial judgment call, not a
research-task decision, and this task is expressly forbidden from editing the
manuscript. It is flagged here only for the editorial team's attention, not acted
on.

---

## Summary table

| # | Concept | Home chapter(s) | v0.1 words | v0.2 words | Verdict |
|---|---|---|---|---|---|
| 1 | Interaction/communication | Ch1 | 650 | 0 | Retraction |
| 2a | Social capital (N&G) | Ch6 | 300 | 150 | Correction |
| 2b | Social capital (Adler & Kwon) | Ch6 | 150 | 0 | Retraction |
| 2c | Social capital (Kale/Nour) | Ch6 | 200 | 200 | Unchanged |
| 3 | Social foci (Feld) | Ch5 | 850 | 0 | Retraction |
| 4 | Interaction rituals (Baker) | Ch5 | 400 | 100 | Correction |
| 5 | Community of practice (Wenger) | Ch2 | 450 | 300 | Correction |
| 6 | Trust | Ch3/7/8 | 0 | 0 | Unchanged |
| 7 | Reciprocity | Ch4/8 | 0 | 0 | Unchanged |
| 8 | Tie strength | Ch4 | 450 | 0 | Retraction (Ch4 already resourced) |
| 9 | Network structure | Ch9 | 300 | 200 | Correction (consolidated with #8) |
| 10 | Dark side (Portes) | Ch10 | 200 | 150 | Unchanged (anchor corrected) |
| 11 | Institutionalization | Ch6/Ch21 | 120 | 80 | Correction (destination changed) |
| | **Total** | | **~4,070** | **~1,180** | |
