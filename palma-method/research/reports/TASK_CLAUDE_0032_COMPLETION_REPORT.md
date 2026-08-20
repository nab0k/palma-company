# TASK_CLAUDE_0032 — Completion Report

## Base and delivery

- Repository: `nab0k/palma-company`
- Base branch: `codex/manuscript-v07-editorial-integration`
- Base commit SHA: `b50237c301368a412feda0a18a7e87006ff8b8e9`
- Working branch: `codex/claude-international-case-audit-0032`
- Final commit SHA: see the commit this report ships in.

## Precondition drift, reported explicitly

This session's prior work (TASK_CLAUDE_0024-0027) left off on
`codex/prose-source-and-crossref-rules`. Between that work and this task,
the book advanced substantially on a different lineage: manuscript versions
v0.3 through v0.7, a new fifteen-chapter architecture (DECISION_0007) and a
revised four-field Infrastructure Canvas (DECISION_0008, both approved
2026-08-17), and task IDs through TASK_CLAUDE_0031. This is reported here,
not silently absorbed. The canonical v0.7 manuscript was located on exactly
one branch (`codex/manuscript-v07-editorial-integration`), confirmed not
merged into `main`, with `main` as its ancestor and no competing manuscript
state found on any other branch. Next free task ID confirmed as
`TASK_CLAUDE_0032` after checking all local and remote branches.

## What was delivered

### `INTERNATIONAL_CASE_EVIDENCE_AUDIT_v0.2.md`

Full primary-source audit of all ten named candidates, each with a
300-500-word narrative, verified timeline, mechanism, strongest Palma fit,
evidence table (tiered directly-established / associated / supported-
interpretation / Palma-interpretation / unsupported), alternative
explanations, overlap analysis, risks, verdict, and confidence level (1-5).
A correction table addresses five specific Classic-report errors,
including the Salesforce "Paul Adler" fabrication and parkrun's "entirely
volunteer" overclaim.

### `INTERNATIONAL_CASE_FOUNDER_DECISION_BRIEF_v0.1.md`

Readable standalone. 120-180-word descriptions with memorability/teaching/
risk fields and a recommended size for each of the ten candidates, plus
three named portfolios (most useful to founders / strongest evidence / best
narrative), each sized 6-8 cases, each case assigned one distinct function,
duplication named explicitly, word-count estimated, and what remains
unexplained stated per portfolio. No final selection made - six explicit
decisions are listed for the Founder.

### `INTERNATIONAL_CASE_PLACEMENT_MAP_v0.2.md`

Read against the full v0.7 manuscript text (Chapters 1, 3, 6, 8, 9, 10, 11,
13, 15 read in full) before drafting. Every retained candidate maps to an
exact quoted existing passage, what would need removing (in every case:
nothing structural - all are additions, per DECISION_0007's own case-
discipline instruction being respected rather than displacing existing
material), the personal-story or theoretical block to pair with, source-
card status, estimated word effect, and duplication risk. Mondragon is
honestly flagged as the weakest-fitting placement of the seven recommended
for consideration - no clean gap exists in either candidate chapter. No
manuscript prose was drafted; no manuscript file was edited.

### Source cards

Six new cards created (SC-145 parkrun, SC-146 Dewey & LeBoeuf, SC-147
Salesforce, SC-148 Occupy Sandy, SC-149 Stack Overflow, SC-150 Mondragon),
each searched against the existing 138-card corpus first (none existed).
One dated addendum added to the existing CrossFit card
(`crossfit-affiliate-model-2000-2010s.md`, SC-136) with the 2020 Glassman-
controversy detail this task's own research added, rather than creating a
duplicate card. All six new cards use `verification_status: checked`
(cross-corroborated across multiple independent search results, not a
single primary-document read) - consistent with this project's established
verification-tier convention, and explicitly distinguished from
`verified` throughout.

## Required corrections and stress tests - status

| Item | Status |
|---|---|
| Salesforce "Paul Adler" | Corrected - no source connects any Paul Adler to Salesforce; actual founders named |
| parkrun "entirely volunteer" | Corrected - paid central staff/technology/insurance layer documented |
| Dewey & LeBoeuf full reconstruction | Done - compensation-guarantee debt structure, alleged accounting fraud, individually-held client relationships, distinguished from the oversimplified "partners left" framing |
| Google+ exclusion explained | Done, in the evidence audit's opening context |
| Wikipedia WMF vs. volunteer governance | Done - Foundation's infrastructure/legal role separated from elected volunteer administrator/arbitration structure |
| AA ethical, non-clinical framing | Maintained - clinical-effectiveness literature explicitly and repeatedly excluded |
| Occupy Sandy vs. TAK.Shtab | Done - recommended as a short contrast only, given duplication risk |
| Mondragon current figures, asset-turnover claim | Done - current figures sourced with a noted count discrepancy (81-90); unsupported asset-turnover claim dropped |
| CrossFit sub-components, 2020 controversy | Done, plus a dated addendum to the existing card |
| H.O.G. independent research, "too canonical" question | Addressed - flagged as possibly overused in the decision brief |
| Stack Overflow vs. Wikipedia | Assessed as performing the same function - recommended as an either/or choice |

## Validation

- `ruby scripts/validate_research_package.rb`: **pass**, 145 source cards
  found, 145 parsed, 0 errors, 24 warnings (pre-existing, unrelated to this
  task's six new cards - confirmed by name-searching the warning list).
- `ruby scripts/validate_metadata.rb`: 3 pre-existing errors, none
  introduced by this task - two are duplicate-ID issues in
  `TASK_CLAUDE_0030` files from a prior task, one is the long-standing
  unreadable-fenced-metadata error in `MANUSCRIPT_SNAPSHOT_2026-08-15.md`,
  documented since TASK_CLAUDE_0022.
- `python3 scripts/validate_cards.py`: exit clean, 0 checked/0 failed (this
  script scans a different, currently-empty legacy path and is not
  exercised by this task's changes).
- `ruby scripts/generate_repository_index.rb --check` and
  `ruby scripts/generate_book_dashboard.rb --check`: both report out-of-
  date/failing, as expected whenever new governed files are added and
  consistent with prior tasks' own reporting (e.g., TASK_CODEX_0021).
  **Not regenerated**, per this task's explicit forbidden-changes list.

## Cases rejected

Salesforce Trailblazer Community - rejected outright. Its structural facts
(program scale, employee-exclusion governance rule) are checkable, but
every claim about its effect on members traces only to Salesforce's own
surveys, which this task's evidence standard explicitly excludes, and its
mechanism duplicates H.O.G./CrossFit without adding anything distinct.

## Cases requiring Founder decisions

1. **Dewey & LeBoeuf** - restore against DECISION_0007's removal, or leave
   it removed. This task reconstructed the case in full per its own
   instructions but did not restore it; that is explicitly the Founder's
   call, and doing otherwise would have violated both this task's own
   "does not authorize... changing accepted decisions" precondition and
   `AGENTS.md`'s instruction to surface conflicts rather than invent
   policy.
2. **Wikipedia vs. Stack Overflow** - the two candidates perform the same
   function; pick one.
3. **Chapter 8 sizing** - whether a third case (CrossFit) alongside H.O.G.
   and Google+ still reads as one argument.
4. **Mondragon** - worth the space needed to tell it honestly, including
   its international-subsidiary complication, or better left out.
5. Whether to accept any of the three offered portfolios as drafted, or
   assemble a different combination from the individual case
   recommendations.

## Unresolved evidence gaps

- The specific "iron law of oligarchy" empirical studies of Wikipedia's
  editor governance are confirmed to exist but have not been individually
  identified, read, or cited by name (inherited from TASK_CLAUDE_0031, not
  closed by this task).
- No peer-reviewed academic study of Stack Overflow's newcomer-attrition
  pattern was located, despite extensive independent technology-press
  documentation.
- The 2014 Dewey & LeBoeuf criminal indictment's final legal disposition
  (trial outcome, plea, or conviction for each named defendant) was not
  independently re-confirmed and must be checked before the manuscript
  states a specific legal outcome, if the case is restored.
- The specific federal (DHS/FEMA) study of Occupy Sandy's methods,
  referenced by secondary journalism, was not independently located as a
  citable primary document.
- Community-organizing and stakeholder-engagement prior-art gaps flagged in
  earlier tasks remain open and are outside this task's scope.

## Confirmation

- The manuscript (`PALMA_METHOD_MANUSCRIPT_v0.7.md`) was read in full for
  the chapters this task's placements reference and was **not edited**.
- No approved Decision (0003, 0006, 0007, 0008) was rewritten or altered.
- `PALMA_METHOD_CANON_v1.1.md` was not touched.
- No Google Doc or Notion page was edited.
- No unrelated file was staged - the working tree at the base commit was
  clean, and only the declared task outputs appear in the diff.
- No case selection was made on the Founder's behalf.
- The attached Classic report was treated throughout as an untrusted lead
  list, never as evidence - every claim carried forward from it was
  independently re-verified, and five specific errors in it are corrected
  in a dedicated table.

## Changed paths (exact)

```
palma-method/governance/TASK_CLAUDE_0032_INTERNATIONAL_CASE_EVIDENCE_AUDIT.md
palma-method/research/reports/TASK_CLAUDE_0032_COMPLETION_REPORT.md
palma-method/research/reports/INTERNATIONAL_CASE_EVIDENCE_AUDIT_v0.2.md
palma-method/research/reports/INTERNATIONAL_CASE_FOUNDER_DECISION_BRIEF_v0.1.md
palma-method/research/reports/INTERNATIONAL_CASE_PLACEMENT_MAP_v0.2.md
palma-method/research/source-cards/parkrun-volunteer-and-paid-staff-structure.md
palma-method/research/source-cards/dewey-leboeuf-2012-bankruptcy-relationship-dependence.md
palma-method/research/source-cards/salesforce-trailblazer-community-governance.md
palma-method/research/source-cards/occupy-sandy-2012-emergent-mutual-aid.md
palma-method/research/source-cards/stack-overflow-reputation-governance-decline.md
palma-method/research/source-cards/mondragon-cooperative-federation-governance.md
palma-method/research/source-cards/crossfit-affiliate-model-2000-2010s.md
palma-method/research/validation/claude-package-validation.json
palma-method/research/validation/claude-package-validation.md
```
