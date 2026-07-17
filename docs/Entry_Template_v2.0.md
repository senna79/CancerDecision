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
5. **Quick actions** — jump to doctor questions + next step  
6. **Why this matters** — one module, no triple restatement  
7. **Highest-anxiety timing question** (when relevant) — e.g. delay fear  
8. **When this decision usually appears** — 2–3 situations  
9. **What it can / cannot decide alone** — boundaries  
10. **Questions to ask your doctor** — core output card  
11. **Your next step** — 3 concrete actions (brand-critical)  
12. **Continue journey** — related Moments  
13. **More about this decision** — `<details>`: examples, mistakes, deeper modules  
14. **Sources & Review** — trust footer  

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
