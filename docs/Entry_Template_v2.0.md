# Entry Template v2.0 — Patient Decision Workspace

**Status:** Active sample on Biomarker Testing  
**Goal:** Turn a medical decision page from a long article into a tool a frightened patient can finish in ~3 minutes.

## North star

- **30 seconds:** know the direction  
- **3 minutes:** know the next step with the care team  
- **Not required:** read every section  

## Design rule

**Short path default-visible + long content expandable (still in HTML).**

Do not delete depth for SEO/AI. Collapse it for anxious human readers.

## Default reading path (required order)

1. **H1** — patient question  
2. **Plain-language gloss** — translate jargon once  
3. **Light journey strip** — `You are here: A → B → C` (not a Decision Map hero)  
4. **One-minute answer** — Direct Answer / citation block  
5. **Who this may help** — 3–4 fit bullets under H1  
6. **Quick actions** — dual intent: understand / prepare for visit  
7. **Reading guide** — 3-minute path → checklist → next step; details optional  
8. **Why this matters** — one module, no triple restatement  
9. **Does everyone need the same tests?** — trust + personalization (when relevant)  
10. **Highest-anxiety timing question** — e.g. will waiting delay care?  
11. **How is it done / another procedure?** — sample source, biopsy?, risks  
12. **How long for results?** — no fixed days; ask sample sent / window / wait-or-not  
13. **What it can / cannot decide alone** — including “no actionable finding”  
14. **Cost & insurance principles** — on main path, short; no fixed prices  
15. **Questions you can ask your doctor** — leave-confirms + checklist groups  
16. **Your next step** — 3 concrete actions (brand-critical)  
17. **Continue journey** — related Moments  
18. **More about this decision** — `<details>`: when it matters, deeper explanation, mistakes, examples  
19. **Sources & Review** — trust footer  

### Practical reality layer (Biomarker sample)

- Main path: who needs it · delay · how done · results turnaround · cost questions  
- Folded: when it matters + deeper explanation modules  
- Out of scope for this Entry: stage-by-stage nursing care (belongs on Journey Overview / other Moments)  

## What not to put first

- Full Decision Context grid  
- Heavy RelationshipStrip / graph chrome  
- Encyclopedia definitions (EGFR lists, etc.)  
- Product names like “Decision Map” as the first headline  

## Implementation map

| Concern | Code |
|--------|------|
| Opt-in slugs + gloss | `lib/content/entry-template-v2.ts` |
| v2 body order | `components/question/ai-entry/flagship-body-v2.tsx` |
| Journey strip | `components/question/ai-entry/journey-you-are-here.tsx` |
| Quick actions | `components/question/ai-entry/entry-quick-actions.tsx` |
| Disclosure | `components/question/ai-entry/more-about-decision.tsx` |
| Page branch | `app/(public)/questions/[slug]/page.tsx` via `usesEntryTemplateV2()` |
| Sample content | `BIOMARKER_FLAGSHIP` in `lib/content/ai-entry-modules.ts` |

## Rollout plan

1. **Done (sample):** Biomarker Testing Entry  
2. **Next:** Audit remaining 11 lung Entries against this checklist  
3. **Then:** Move each slug into `ENTRY_TEMPLATE_V2_BY_SLUG` with a gloss string  
4. Keep v1 `AiEntryFlagshipBody` until an Entry is migrated  

## Patient pass criteria (per Entry)

After reading the short path only, can the patient say:

1. How this relates to **their** decision  
2. Why it matters in plain language  
3. What to ask the doctor  
4. What to do next  

If not, fix order/weight — do not add more mid-page sections.

## Safety boundary

Workspace language prepares conversations. It does **not** prescribe personal treatment (“you should get this test”). Prefer: ask whether testing is complete / whether results could change options.
