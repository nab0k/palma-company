# Part IV Evidence Audit v0.1

Task: TASK_CLAUDE_0027, Stream 1
Owner: Claude
Status: draft for editorial review (Codex / Serhii)
Source of all manuscript claims: `palma-method/research/chapter-packets/
PALMA_METHOD_MANUSCRIPT_v0.2.md` (the successor build named in this task's
preconditions), Chapters 17-21 and the conclusion only. No manuscript edit
was made to produce this audit.

## Method

All ten named claims already have a source card from TASK_CLAUDE_0018,
independently researched and epistemically qualified at that time (each
card states its own verification tier: `verified` vs. `checked_not_
verified`, and each already carries a "permissible level of claim" /
"forbidden overgeneralization" pair). This audit's job is narrower than
fresh research: check the *current* manuscript v0.2 prose against what each
card's own, already-established evidentiary boundary permits, and flag any
drift. Where a card's own verification tier is secondary-source-grounded
rather than primary-text-verified, that is restated plainly here, not
upgraded by repetition.

---

## 1. Croskerry and premature closure

1. **Exact manuscript formulation** (Chapter 17): "Врач и исследователь
   клинического мышления Пэт Крескери называет эту ошибку преждевременным
   закрытием (premature closure) — моментом, когда первая правдоподобная
   версия становится линзой, через которую человек читает все последующие
   факты, а поиск альтернатив просто прекращается. В приёмном покое цена
   такой ошибки — жизнь пациента. У военкомата и в разговоре о зале цена
   ниже, но **механизм совпадает буквально**."
2. **Source and source card**: Croskerry, P. (2002), cognitive dispositions
   to respond / premature closure. SC-101.
3. **What the source actually supports**: a named clinical cognitive-bias
   concept - the first plausible hypothesis becomes the lens for all later
   evidence, and the search for alternatives stops. SC-101 is itself
   `checked_not_verified` - the primary 2002 Academic Emergency Medicine
   article was not directly read; the concept was cross-checked across
   multiple independent clinical-literature secondary sources that describe
   it consistently.
4. **What is this project's own interpretation**: that the *same mechanism*
   operates identically outside medicine - at a military-enlistment counter,
   in a conversation about a gym's social structure. SC-101's own
   `palma_implication` and `permissible level of claim` fields already state
   this should be framed as "the same mechanism plausibly applies here," not
   as a proven identity.
5. **Decision**: **TIGHTEN**. The phrase "механизм совпадает буквально" (the
   mechanism matches *literally*) claims more identity between the clinical
   and personal/organizational cases than SC-101's own permissible-claim
   language supports. This is a small, local overclaim, not a structural
   problem - the surrounding paragraph's framing (medicine's stakes are
   higher, the mechanism is analogous) is otherwise sound.
6. **Safe replacement building block**: state the analogy as an analogy, not
   an identity - e.g., a building block reading "the mechanism there is the
   same *kind* of failure, not a literally identical process, since
   Croskerry's own claim is specific to clinical reasoning and its extension
   here is this book's own move" - for the editor to phrase in narrative
   voice, not verbatim prose.

---

## 2. Gerstner / IBM and the "diagnosis of experts" formulation

1. **Exact manuscript formulation** (Chapter 17): "В 1993 году совет
   директоров IBM был убеждён в диагнозе: компания слишком большая, и её
   нужно разделить на независимые части — инвестиционные банкиры уже
   оценивали будущие осколки. Новый гендиректор Лу Герстнер пришёл с другим
   взглядом... Диагноз всех экспертов был согласованным. Это не делало его
   верным."
2. **Source and source card**: Gerstner's 1993 IBM breakup reversal and IBM
   Global Services. SC-102, `verified` (Gerstner's own memoir, IBM's
   corporate history materials, independent business-press retrospectives,
   all cross-checked).
3. **What the source actually supports**: the board's diagnosis was
   near-unanimous (investment bankers already pricing prospective spin-offs)
   and Gerstner reversed it, building IBM Global Services, which became a
   major growth driver. SC-102 independently re-verified the manuscript's
   own separate 65-km-convoy fact-check in the same chapter and found no
   discrepancy.
4. **What is this project's own interpretation**: none beyond the case
   itself - the manuscript's use ("consensus does not equal correctness")
   is exactly the point SC-102's own `palma_implication` field identifies as
   supported.
5. **Decision**: **KEEP**. The manuscript does not claim the reversal alone
   saved IBM (SC-102's own forbidden-overgeneralization line), and correctly
   treats this as one case illustrating that near-unanimous diagnosis can be
   wrong, not as proof that contrarian diagnosis is generally right.
6. **Safe replacement building block**: not needed.

---

## 3. Ostrom on boundaries, roles, instructions, salaries, reporting, and institutional durability

1. **Exact manuscript formulation** (Chapter 18, on the general durability
   point): "Экономист Элинор Остром... показала: устойчивые институты почти
   всегда имеют чётко очерченные границы — кто внутри, а кто нет, — и
   правила, подогнанные под конкретные, локальные условия... Остром
   описывала условия, которые делают институт устойчивым, — не гарантию,
   что он таким станет." **Separately, Chapter 21**: "К 2023-му у
   организации появились роли, инструкции, зарплаты, отчётность перед
   донором — всё то, **что делает институт устойчивым по Остром**."
2. **Source and source card**: Ostrom, E. (1990), *Governing the Commons*.
   SC-006, `verified_via_secondary_summaries_cross-checked` (the eight
   design principles were cross-verified across secondary summaries; the
   card itself states "primary text access limited to previews, so treat as
   secondary-source-grounded rather than page-verified" - this card also
   carries a standing, still-open project restriction, VI-001, requiring
   primary page-level verification before unqualified use).
3. **What the source actually supports**: eight specific design principles
   in long-enduring common-pool-resource institutions - clearly defined
   boundaries; rules matched to local conditions; collective-choice
   arrangements; monitoring by or accountable to appropriators; graduated
   sanctions; fast, low-cost conflict resolution; a recognized right to
   self-organize; and nested enterprises for larger systems. **"Roles,
   instructions, salaries, and donor reporting" are not among these eight
   principles in any form.** Ostrom's framework is about governance-rule
   design for shared-resource management, not about the operational
   apparatus (staffing, pay, funder accountability) a growing organization
   accumulates.
4. **What is this project's own interpretation**: the Chapter 18 sentence
   (boundaries; locally-fitted rules) is a faithful, correctly-scoped
   restatement of two of Ostrom's actual eight principles. The Chapter 21
   sentence is a different move entirely: it lists four items that are
   general markers of organizational formalization (defined roles,
   documented instructions, paid staff, donor-facing reporting) and
   attributes all of them to Ostrom's framework by name ("по Остром"),
   when none of the four is one of her eight named principles. This reads
   as the manuscript's own idea - a reasonable one, that institutionalizing
   organizations tend to accumulate this kind of infrastructure - dressed in
   a citation Ostrom's own work does not actually supply.
5. **Decision**: **REATTRIBUTE**. This is the most significant finding in
   this audit. The Chapter 18 use of Ostrom (boundaries, locally-fitted
   rules) should **KEEP**. The Chapter 21 use ("роли, инструкции, зарплаты,
   отчётность перед донором... по Остром") should be **REATTRIBUTED**: this
   list of organizational features is not Ostrom's own content and should
   either lose the "по Остром" attribution entirely (presenting it as the
   author's own observation about what durable organizations tend to
   accumulate) or be reattributed to Selznick, who is cited two sentences
   later in the same chapter for institutionalization specifically, and
   whose concept (an organization's form gaining value beyond pure
   technical necessity) is a closer, though still not exact, match for
   "roles, instructions, salaries, reporting" as *symptoms* of
   institutionalization rather than *design principles* for it.
6. **Safe replacement building block**: "By 2023 the organization had
   accumulated roles, instructions, salaries, and donor reporting - the
   ordinary infrastructure of a formalized institution. [Remove 'по
   Остром'; this list is not one of Ostrom's eight named design principles
   (boundaries, locally-fitted rules, collective choice, monitoring,
   graduated sanctions, conflict resolution, self-organization rights,
   nested enterprises) - if a citation is wanted here, Selznick's
   institutionalization concept, already used two sentences later in the
   same chapter, is the closer fit for 'form gaining value beyond technical
   necessity,' though even Selznick's framework does not itemize this
   specific list either.]"

---

## 4. Dynes and Quarantelli

1. **Exact manuscript formulation** (Chapter 19): "Социологи катастроф
   Расселл Дайнс и Энрико Куарантелли ещё в шестидесятых предложили делить
   организации, работающие на месте бедствия, на четыре типа: постоянные,
   расширившиеся, присоединившиеся и возникшие с нуля — те, у кого не было
   ни структуры, ни мандата до самой катастрофы. Штаб... — учебный пример
   последнего типа."
2. **Source and source card**: Dynes, R. R. & Quarantelli, E. L. (1968 and
   subsequent DRC papers), the established/expanding/extending/emergent
   typology. SC-103, `verified` (DRC's own institutional materials
   cross-checked against an independent academic secondary summary,
   Strandh 2018).
3. **What the source actually supports**: exactly this four-part typology,
   with "emergent" defined as new structure and new personnel relative to
   the disaster - no prior organizational structure or mandate.
4. **What is this project's own interpretation**: applying the typology
   (developed from natural-disaster field studies) to a wartime humanitarian
   organization is an analogical extension, correctly flagged as such in
   SC-103's own limitations field.
5. **Decision**: **KEEP**. The manuscript names the typology correctly, in
   the right order, and applies it via explicit analogy rather than
   claiming TAK.Shtab was part of the DRC's own original sample.
6. **Safe replacement building block**: not needed.

---

## 5. Weick and Mann Gulch, including improvisation, virtual role systems, and respectful interaction

1. **Exact manuscript formulation** (Chapter 19): "Организационный психолог
   Карл Вейк изучал похожую, гораздо более трагическую ситуацию — гибель
   тринадцати пожарных в Манн-Галч в 1949 году... Вейк вывел, что удерживает
   группу от такого распада... способность импровизировать без паники,
   представление о том, какую роль сыграл бы отсутствующий человек, будь он
   рядом, и обычная взаимная вежливость."
2. **Source and source card**: Weick, K. E. (1993), "The Collapse of
   Sensemaking in Organizations: The Mann Gulch Disaster," *Administrative
   Science Quarterly* 38(4). SC-104, `verified` (primary journal article,
   one of organizational theory's most-cited papers).
3. **What the source actually supports**: three factors Weick identifies as
   holding a group together once the plan stops applying - the capacity to
   improvise without panic; what Weick's own paper names a "virtual role
   system" (an internalized sense of what an absent member would do); and
   ordinary role differentiation and mutual respect persisting past the
   plan's breakdown. The manuscript's three-item list (impovise without
   panic; a sense of what the absent person would do; ordinary courtesy)
   maps onto these three factors correctly in substance, though it
   paraphrases "virtual role system" rather than naming Weick's own term.
4. **What is this project's own interpretation**: applying the framework to
   a non-fatal convoy incident (no injuries) rather than a fatal wildfire
   (13 of 15 dead) is an analogical extension - the manuscript already
   avoids equating the two cases' severity, using Weick's framework only for
   the mechanism, consistent with SC-104's own guidance.
5. **Decision**: **KEEP**, with an optional TIGHTEN. The substance is
   accurate and the severity-equation trap SC-104 warns against is already
   avoided. The only improvement available, not required, is naming
   "virtual role system" as Weick's own term rather than only paraphrasing
   it, which would let a reader who wants to go to the primary source find
   the exact concept.
6. **Safe replacement building block**: optional addition - "Weick's own
   name for this second factor is a 'virtual role system': not a role
   someone is actually performing, but each member's internalized model of
   what an absent colleague would do in their place."

---

## 6. CrowdStrike and Delta

1. **Exact manuscript formulation** (Chapter 19): "19 июля 2024 года
   сбойное обновление CrowdStrike вывело из строя восемь с половиной
   миллионов компьютеров по всему миру одновременно... Delta отменила около
   семи тысяч рейсов за пять дней, **потеряла, по собственной оценке, 550
   миллионов долларов**, и позже подала в суд на CrowdStrike."
2. **Source and source card**: CrowdStrike outage and Delta's response.
   SC-105, `verified` "for the undisputed facts used in the manuscript."
3. **What the source actually supports**: 8.5 million affected devices
   (Microsoft's own figure); roughly 7,000 Delta cancellations over five
   days; and, per SC-105's own core_claim field, "estimated its own losses
   at **$500 million** (Delta's own public figure; some reporting cites
   figures **up to $550 million**)." The card's own language distinguishes
   Delta's own stated figure ($500M) from a broader-reporting ceiling figure
   ($550M) that is not clearly attributed to Delta's own statement in the
   card itself.
4. **What is this project's own interpretation**: the manuscript's phrase
   "по собственной оценке, 550 миллионов долларов" (by its own estimate,
   $550 million) asserts that $550M specifically is Delta's own
   self-reported figure - but SC-105's own evidentiary base supports only
   $500M as clearly Delta's own figure, with $550M described more loosely
   as something "some reporting cites."
5. **Decision**: **TIGHTEN**. This is a precision gap, not a fabrication -
   both figures are in the same general range and both are independently
   reported somewhere in SC-105's evidence base - but the manuscript
   currently states a specific number ($550M) as Delta's own claim with more
   confidence than the underlying card supports. Recommend either (a)
   switching to $500M with the "by its own estimate" framing, which SC-105
   supports cleanly, or (b) keeping $550M but removing "по собственной
   оценке" and instead framing it as a reported range.
6. **Safe replacement building block**: "Delta cancelled roughly 7,000
   flights over five days and estimated its own losses at $500 million
   (some reporting cites figures up to $550 million) - [pick one framing
   consistent with SC-105's own distinction between Delta's stated figure
   and the broader reported range, rather than attributing the higher
   number to Delta's own estimate]."

---

## 7. Schein: process consultation, the expert model, and humble inquiry

1. **Exact manuscript formulation** (Chapter 17 and 20): "Организационный
   психолог Эдгар Шейн построил на этом наблюдении целую консультационную
   практику. По Шейну, клиент почти никогда не знает точно, в чём его
   настоящая проблема... Шейн называл это процессным консультированием." /
   (Chapter 20) "В модели, которую он называл экспертной, решение переходит
   к консультанту вместе с проблемой... В процессном консультировании
   решение остаётся у того, кто и так будет жить с его последствиями...
   Практически это означает то, что Шейн в другой своей книге назвал humble
   inquiry... Сам Шейн... двадцать шесть лет — с 1966 по 1992 год —
   консультировал совет директоров компании Digital Equipment Corporation.
   DEC всё равно не выжила как самостоятельная компания. Это не опровергает
   метод."
2. **Source and source card**: Schein, E. H., *Process Consultation*
   (1969/1999) and *Humble Inquiry* (2013); the 1966-1992 DEC consulting
   relationship. SC-100, `verified` (Schein's own two books read directly
   for their central distinctions; the DEC relationship's duration and
   outcome independently, publicly corroborated via WebSearch rather than
   taken only from Schein's own account).
3. **What the source actually supports**: the expert-vs-process distinction
   and the Humble Inquiry definition, both Schein's own coinages; the
   26-year DEC relationship (1966-1992) and DEC's 1998 acquisition by
   Compaq, both independently, uncontroversially documented.
4. **What is this project's own interpretation**: none required - the
   manuscript's own explicit hedge ("Это не опровергает метод: право на
   совет — не гарантия результата") is exactly SC-100's own forbidden-
   overgeneralization guidance ("do not use DEC's eventual fate as evidence
   process consultation failed") stated in the manuscript's own words.
5. **Decision**: **KEEP**. This is the cleanest of the ten claims audited -
   the manuscript's hedge language matches the source card's own permissible
   framing almost verbatim in spirit.
6. **Safe replacement building block**: not needed.

---

## 8. Brehm and psychological reactance

1. **Exact manuscript formulation** (Chapter 20): "Психолог Джек Брэм ещё в
   1966 году показал механизм, из-за которого непрошеный совет работает
   хуже, чем кажется его автору... Брэм назвал это реактивным сопротивлением
   (psychological reactance). Совет, о котором не просили, борется не
   только с нехваткой информации у человека, но и с этим сопротивлением —
   и **обычно проигрывает именно ему**."
2. **Source and source card**: Brehm, J. W. (1966), *A Theory of
   Psychological Reactance*. SC-106, `verified` (foundational original
   text, cross-checked against contemporary secondary summaries).
3. **What the source actually supports**: unsolicited advice can trigger a
   defensive, autonomy-protective response independent of the advice's
   actual quality - a well-established, extensively-replicated mechanism.
4. **What is this project's own interpretation**: the closing clause
   "обычно проигрывает именно ему" (usually loses specifically to this
   resistance) makes an implicit claim about how *often* unsolicited advice
   fails for this specific reason, which is broader than the theory itself
   establishes - SC-106's own limitations note that the theory "does not
   itself specify exactly when advice will trigger reactance," and its
   forbidden-overgeneralization line warns against implying reactance
   explains *all* resistance to advice.
5. **Decision**: **TIGHTEN** (minor). The manuscript does not claim reactance
   explains *all* resistance, but "обычно" (usually) does assert a general
   frequency claim the theory itself does not quantify. This is a small,
   defensible rhetorical flourish more than a factual overclaim, and could
   reasonably be left as-is - flagged here for completeness since the task
   asked for every claim to be checked, not because it rises to the level of
   the Ostrom or CrowdStrike items above.
6. **Safe replacement building block**: optional softening - "advice that
   wasn't asked for has to fight not only a shortage of information, but
   this resistance too - a real cost the advice-giver rarely accounts for,
   even when eventually the advice does land."

---

## 9. Selznick, institutionalization, and the attributed "simple test"

1. **Exact manuscript formulation** (Chapter 21): "Социолог Филип Селзник
   называл этот процесс институционализацией... Проверка на это, по
   Селзнику, простая: выбросили бы участники штаба его нынешнее устройство,
   найдись завтра способ делать то же самое эффективнее? К 2023 году штаб
   **показывал некоторые признаки такой институционализации. Формальной
   проверки мы не проводили.**"
2. **Source and source card**: Selznick, P. (1957), *Leadership in
   Administration*. SC-107, `verified` (primary 1957 text; the quote and
   page number - p. 17 - cross-checked across multiple independent
   secondary sources including a dedicated academic volume on Selznick's
   legacy).
3. **What the source actually supports**: institutionalization as "infusion
   with value beyond the technical requirements of the task," testable in
   principle by asking whether participants would discard the current
   structure if a more efficient alternative appeared. SC-107's own
   limitations field states this test "is difficult to observe directly
   except in retrospect or in a genuine test case," and its permissible-
   claim line explicitly distinguishes "TAK.Shtab passed Selznick's
   expendability test" (an overclaim, since no such test actually occurred)
   from using the framework as an interpretive lens.
4. **What is this project's own interpretation**: applying Selznick's test
   to TAK.Shtab's actual, observed 2023 features.
5. **Decision**: **KEEP - and explicitly note this claim's history**. This
   is the one claim in this audit with a documented prior problem now
   resolved: an earlier manuscript version (flagged across TASK_CLAUDE_0024,
   0025, and 0026) stated the organization "судя по всему, эту проверку
   прошёл" (apparently passed this test) - language a reasonable reader
   could take as claiming a formal test occurred. The current v0.2 text
   ("показывал некоторые признаки такой институционализации. Формальной
   проверки мы не проводили") replaces this with exactly the framing
   SC-107's own card, and three prior audit tasks, recommended: observed
   features, explicitly not a completed test. `PALMA_METHOD_MANUSCRIPT_
   CHANGE_LOG_v0.1.md` confirms this repair was made deliberately ("repaired
   overclaim"). No further action needed.
6. **Safe replacement building block**: not needed - already fixed.

---

## 10. Zoho and Sridhar Vembu's role transfer

1. **Exact manuscript formulation** (Chapter 21): "В январе 2025 года
   Шридхар Вембу, основавший Zoho и двадцать восемь лет руководивший
   компанией без единого внешнего инвестора, передал пост генерального
   директора сооснователю, а сам стал главным научным сотрудником.
   Показательно, что передача оказалась не одному человеку, а
   распределённой... Вембу не выбирал одного преемника, похожего на себя.
   Он проверял, может ли компания держаться на способностях многих людей
   сразу."
2. **Source and source card**: Vembu's January 2025 CEO-to-Chief-Scientist
   transition at Zoho. SC-108, `verified` (widely and consistently reported
   in business/technology press at the time of the event).
3. **What the source actually supports**: the 28-year tenure without
   external investment, the January 2025 transition, and the distributed
   (not single-successor) restructuring of leadership across multiple
   domains.
4. **What is this project's own interpretation**: framing this as "testing
   whether the company can hold on many people's capability" is a
   reasonable reading of the distributed structure, not a claim the
   manuscript sources to Vembu's own stated intent beyond what was publicly
   reported.
5. **Decision**: **KEEP**. The manuscript does not claim the distributed
   structure has proven durable or successful - it describes the choice
   made at the moment of transition, consistent with SC-108's own
   forbidden-overgeneralization guidance ("do not present Zoho's transition
   as a completed success story").
6. **Safe replacement building block**: not needed.

---

## Summary

| # | Claim | Decision |
|---|---|---|
| 1 | Croskerry / premature closure | TIGHTEN |
| 2 | Gerstner / IBM | KEEP |
| 3 | Ostrom / institutional durability | **REATTRIBUTE** (Chapter 21 use) / KEEP (Chapter 18 use) |
| 4 | Dynes & Quarantelli | KEEP |
| 5 | Weick / Mann Gulch | KEEP (optional TIGHTEN) |
| 6 | CrowdStrike / Delta | TIGHTEN |
| 7 | Schein | KEEP |
| 8 | Brehm | TIGHTEN (minor) |
| 9 | Selznick | KEEP (already repaired) |
| 10 | Zoho / Vembu | KEEP |

No claim required **REMOVE**. One claim (Ostrom, item 3) requires genuine
editorial attention before the next manuscript pass - it is the only item in
this audit that attributes specific content to a named source that source
does not actually contain.
