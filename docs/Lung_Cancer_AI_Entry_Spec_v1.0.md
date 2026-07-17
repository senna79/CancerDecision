# Lung Cancer AI Entry Specification v1.0

**Status:** Active  
**Product role:** Acquisition layer (AEO) that feeds the Decision Journey  
**North star connection:** A cited answer must land the patient in “What to do next” within ~3 minutes.

---

## 1. Purpose

This spec defines how **5 lung cancer decision entries** simultaneously satisfy:

1. **AI citation** — a short, quotable answer block  
2. **Patient trust** — boundaries, timing honesty, sources  
3. **Journey conversion** — continue into What to do next / Decision Map  

AI Search is an **entry channel**, not the product goal.

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

**Do not expand** to 500 questions until these five prove citation → journey conversion.

---

## 4. Page template (required order)

For every AI Entry Question page:

1. **Title** — patient decision question (search-shaped)  
2. **Citation Block** — 2–5 sentences (`summary`); the AI answer unit  
3. **What to do next** — action closure (north star)  
4. **Who this is for** — `when_this_may_help`  
5. **When it may not change the decision** — `when_it_may_not_help`  
6. **Timing / if I wait** — `timing_considerations`  
7. **Decision context** — `decision_context`  
8. **Options, benefits, trade-offs** — `options_and_tradeoffs`  
9. **Doctor questions** — `doctor_questions`  
10. **Records / conflict / body / sources** as available  
11. **Your next step** (end recap) + Journey continue  

Deeper reading never precedes Citation Block + What to do next.

---

## 5. Citation Block rules

- **Source field:** `summary`  
- **Length:** 2–5 sentences (~40–90 words)  
- **Must include:** when it helps, what it is *not*, and a decision frame (not a treatment order)  
- **Must not:** claim personalized medical advice, guarantee outcomes, or attack the patient’s current doctor  
- **JSON-LD:** `Question.acceptedAnswer` uses this same text  

Example shape:

> A second opinion may be especially valuable when the diagnosis is complex, multiple treatment options exist, or a major procedure is being considered. It does not mean the first doctor is wrong — it helps confirm the plan and clarify alternatives. Timing matters: urgent clinical risk can outweigh a brief delay for review.

---

## 6. Trust & timing fields

| Field | Patient question it answers |
|---|---|
| `when_this_may_help` | Who is this decision for? |
| `when_it_may_not_help` | When might this not change anything? |
| `timing_considerations` | What if I wait / can I pause? |
| Sources + reviewed date | Why should I trust this page? |

---

## 7. Structured data (restrained)

**On AI Entry Question pages, use:**

- `MedicalWebPage` (about cancer, mentions decision topic, related therapies, `isPartOf` journey)  
- `Article`  
- `BreadcrumbList`  
- `Question` + `acceptedAnswer` (Citation Block text)  

**Do not** add bulk `FAQPage` for filler Q&A.

**Optional later (only when page content matches):**

- `HowTo` — e.g. “How to prepare records for a second opinion”  
- `ItemList` — Decision Map steps on the cancer center page  

Schema must reflect visible content. Never schema-wash.

---

## 8. Internal linking rules

Each AI Entry page must link to:

1. Continue Journey node (suggested next)  
2. Cancer Decision Map (`/cancers/lung-cancer#decision-map`)  
3. ≥1 related Treatment comparison when relevant  
4. ≥1 Illustrative Story when mapped  

Homepage Decision Moment Router must deep-link to these five entry slugs (plus secondary moments).

---

## 9. Keyword / intent policy

| Tier | Intent | Priority |
|---|---|---|
| 1 | Decision queries (should I / how do I compare / do I need before…) | **Build now** |
| 2 | Treatment decision comparisons | Support via Treatment pages linked from Entry 4 |
| 3 | Global / abroad | Entry 5 only |
| Avoid as primary | symptoms, survival rate, generic “lung cancer” | Do not chase |

---

## 10. Acceptance criteria

An AI Entry page is “done” when:

1. Citation Block can be quoted without the rest of the page  
2. Who-for + when-not + timing are visible above the fold cluster  
3. What to do next gives ≤3 concrete actions + doctor ask  
4. User can reach Journey continue in one click  
5. Schema uses Citation text as `acceptedAnswer`  
6. No false FAQ schema  

Portfolio v1 is “done” when all five entries meet the above and the homepage Moment router points at them.

---

## 11. Implementation map

| Spec element | Code |
|---|---|
| Portfolio list | `lib/seo/ai-entry-portfolio.ts` |
| Citation UI | `components/question/citation-block.tsx` |
| Who-for / Timing UI | `components/question/ai-entry-sections.tsx` |
| Page order | `app/(public)/questions/[slug]/page.tsx` |
| Timing field | `Question.timing_considerations` |
| Content | `lib/db/seed-data.ts` (lung flagship) |
