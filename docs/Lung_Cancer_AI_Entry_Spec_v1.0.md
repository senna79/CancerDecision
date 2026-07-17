# Lung Cancer AI Entry Specification v1.0

**Status:** Active (Validation Sprint)  
**Product role:** Acquisition layer (AEO) that feeds the Decision Journey  
**North star connection:** A cited answer must land the patient in “What to do next” within ~3 minutes.

---

## 1. Purpose

This spec defines how **5 lung cancer decision entries** simultaneously satisfy:

1. **AI citation** — a short, quotable answer block  
2. **Patient trust** — boundaries, timing honesty, sources  
3. **Journey conversion** — continue into What to do next / Decision Map  

AI Search is an **entry channel**, not the product goal.

**Validation Sprint goal:** polish these five pages to template quality — do **not** expand cancer types or question volume until citation → journey conversion is proven.

---

## 2. Core architecture (three layers)

```text
Acquisition  →  Question (AI Entry page + Citation Block)
Product      →  What to do next + Journey navigation
Graph        →  Cancer ↔ Moment ↔ Question ↔ Treatment ↔ Story
```

All three layers must exist. Content without Journey is an encyclopedia. Journey without Entry pages has no discovery. Graph without either is a database.

---

## 3. Portfolio: 5 AI Entry decisions

| # | Entry | Patient moment | Canonical slug | Primary search intents (Tier 1) |
|---|---|---|---|---|
| 1 | Newly diagnosed | First checkpoints | `what-decisions-matter-most-after-new-lung-cancer-diagnosis` | what should I do first after lung cancer diagnosis |
| 2 | Second opinion | Diagnosis / plan confidence | `should-i-get-second-opinion-after-lung-cancer-diagnosis` | should I get a second opinion lung cancer |
| 3 | Biomarker | Wait vs start | `do-i-need-biomarker-testing-before-lung-cancer-treatment` | biomarker testing before lung cancer treatment |
| 4 | Treatment comparison | Options fork | `how-to-compare-surgery-and-systemic-therapy-lung-cancer` | lung cancer treatment options comparison; surgery vs systemic |
| 5 | Global option | Abroad / other center | `when-to-consider-lung-cancer-care-abroad` | lung cancer treatment abroad worth it |

**Out of Tier-1 portfolio (for now):** generic symptoms, survival rates, hospital directories, recurrence as a sixth entry (route via comparison / second opinion).

---

## 4. Page template (required order)

1. **Title** — patient decision question (search-shaped)  
2. **Citation Block** — four-sentence Direct Answer (`summary`)  
3. **Relationship strip** — About / Decision / Part of / Related  
4. **What to do next** — action closure (north star)  
5. **Decision triggers** — `decision_triggers` (“You may be asking this because…”)  
6. **Who this is for** — `when_this_may_help`  
7. **When it may not change the decision** — `when_it_may_not_help`  
8. **Timing / if I wait** — `timing_considerations`  
9. **Decision context** — `decision_context`  
10. **Options, benefits, trade-offs** — `options_and_tradeoffs`  
11. **Doctor questions** — `doctor_questions`  
12. **Records / conflict / body / sources** as available  
13. **Your next step** (end recap) + Journey continue  

Deeper reading never precedes Citation Block + What to do next.

---

## 5. Citation Block rules (mandatory 4-sentence form)

**Source field:** `summary`  
**JSON-LD:** `Question.acceptedAnswer` = same text  

| Sentence | Job |
|---|---|
| 1 | Direct answer to the H1 question |
| 2 | When this decision matters most |
| 3 | When it may *not* change the plan / not for everyone |
| 4 | Concrete next step (records, ask, or continue journey) |

**Must not:** personalized treatment orders, outcome guarantees, attacking the current doctor.

**Example (second opinion):**

> A second opinion can be valuable after a lung cancer diagnosis, especially when treatment decisions are complex or major procedures are being considered. It can help confirm the diagnosis and understand available options. However, it may not change the plan in every situation — especially when data are complete and multidisciplinary advice already agrees. The next step is to gather pathology, staging, and the current plan in writing before seeking another review.

---

## 6. Trust & intent fields

| Field | Patient question it answers |
|---|---|
| `decision_triggers` | Why might I be searching this *right now*? |
| `when_this_may_help` | Who is this decision for? |
| `when_it_may_not_help` | When might this not change anything? |
| `timing_considerations` | What if I wait / can I pause? |
| Sources + reviewed date | Why should I trust this page? |

---

## 7. Relationship strip (visible graph)

Every AI Entry page must show:

- **About** → cancer decision center  
- **Decision** → short decision label  
- **Part of** → Lung Cancer Decision Journey / Map  
- **Related** → other portfolio entries  

This is for patients and for AI/agents — not only database joins.

---

## 8. Structured data (restrained)

**Use:** `MedicalWebPage` + `Article` + `BreadcrumbList` + `Question`/`acceptedAnswer`  

**Do not** add bulk `FAQPage`.  

**Optional later** only when content matches: `HowTo`, Decision Map `ItemList`.

---

## 9. Validation checklist (per page)

### AI layer
- [ ] H1 is a decision question AI can parse in one line  
- [ ] Direct Answer follows the 4-sentence form and can be quoted alone  
- [ ] Relationship strip names About / Decision / Part of / Related  

### User layer
- [ ] Within ~3 minutes, What to do next is clear  
- [ ] Decision triggers feel like “why I’m here”  

### Journey layer
- [ ] One-click continue into Journey / Map  
- [ ] Related portfolio entries link sideways  

### Business layer
- [ ] Intent is Tier-1 decision traffic (not symptoms / survival)  

Portfolio v1 passes when all five pages clear this checklist.

---

## 10. Implementation map

| Spec element | Code |
|---|---|
| Portfolio list | `lib/seo/ai-entry-portfolio.ts` |
| Citation UI | `components/question/citation-block.tsx` |
| Triggers / Who-for / Timing | `components/question/ai-entry-sections.tsx` |
| Relationship strip | `components/question/relationship-strip.tsx` |
| Page order | `app/(public)/questions/[slug]/page.tsx` |
| Fields | `decision_triggers`, `timing_considerations`, … |
| Content | `lib/db/seed-data.ts` (lung AI Entry flagship) |
