# Entry Template v2.0 — Patient Decision Workspace

**Status:** Active sample on Biomarker Testing  
**Goal:** Help a frightened patient finish decision prep in ~3 minutes — not read an 11-screen article.

## Decision OS stages (every Entry)

These four stage labels appear as **light eyebrows** above each patient-facing step title — not as big headlines, not as background watermarks.

| Stage | Patient question (Biomarker example) |
|-------|--------------------------------------|
| Understand the decision | Why does this matter? |
| Compare what matters | Could results change my options? |
| Consider practical realities | What should I know before testing? |
| Prepare for next conversation | What should I discuss with my doctor? |

## Layout

**Desktop:** vertical numbered Decision Path. Each step is a row:

- Left — step story (short main axis)
- Right — **Questions you may have** for that step only

Cards expand in place beside their step. No single global right-rail stack.

**Mobile:** for each step — story first, then that step’s cards, then the next step.

## Page chrome (above the workspace)

1. H1 — patient question  
2. Plain-language gloss  
3. Who this may help  
4. Light journey strip  
5. One-minute answer  
6. Dual intent + reading guide  

## Design rules

- Main axis is a **numbered path**, not a table of contents and not a blog.  
- Question cards **hang on the matching step** — they resolve worry for that stage.  
- Practical Reality is its own step (sample / biopsy / risk / time / cost) — not an appendix.  
- Depth stays available (card detail) for humans who choose it and for AI crawlers when rendered.  
- No fixed prices, no “you should get tested,” no EGFR encyclopedia walls.  

## Implementation map

| Concern | Code |
|--------|------|
| Opt-in + audience gloss | `lib/content/entry-template-v2.ts` |
| Workspace shell | `components/question/ai-entry/decision-workspace-v2.tsx` |
| Body entry | `components/question/ai-entry/flagship-body-v2.tsx` |
| Wider canvas | `app/(public)/questions/[slug]/page.tsx` when `usesEntryTemplateV2()` |
| Sample content | `BIOMARKER_FLAGSHIP` in `lib/content/ai-entry-modules.ts` |

## Rollout

1. **Done:** Biomarker 4-step Decision Path sample  
2. Migrate other lung Entries onto the same OS stages with Entry-specific step titles + cards  
3. Keep v1 `AiEntryFlagshipBody` until migrated  

## Patient pass criteria

After the path only (without opening cards), can they say:

1. Why this decision exists  
2. Whether options might change  
3. What they may experience before testing  
4. What to ask / do next with their doctor  

Cards are optional worry-resolvers — not required reading.
