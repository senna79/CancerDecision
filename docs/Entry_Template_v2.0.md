# Entry Template v2.0 — Patient Decision Workspace

**Status:** Active sample on Biomarker Testing  
**Goal:** Help a frightened patient finish a decision prep in ~3 minutes — not read an 11-screen article.

## Layout

**Desktop (≈70 / 30)**

| Left — Main decision path | Right — Questions patients ask |
|---------------------------|--------------------------------|
| Why this matters | Will it delay treatment? |
| Could testing change options? | How is testing done? |
| What happens next? | Another biopsy? / risks |
| Leave-appointment confirms | How long? / Cost |
| Your next step | Doctor checklist |
| Continue journey | Common questions & deeper detail |

Right cards open in place with **← Questions patients ask** to return. No blog-style “related articles” rail.

**Mobile:** stack — H1 → quick answer → main path → next step → question cards → sources.

## Page chrome (above the workspace)

1. H1 — patient question  
2. Plain-language gloss  
3. Who this may help  
4. Light journey strip  
5. One-minute answer  
6. Dual intent + reading guide  

## Design rules

- Left is a **story**, not a table of contents.  
- Right is **patient questions**, not “more content.”  
- Depth stays available (card detail / deeper card) for humans who choose it and for AI crawlers when rendered.  
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

1. **Done:** Biomarker workspace sample  
2. Migrate other lung Entries onto the same shell with Entry-specific left story + right cards  
3. Keep v1 `AiEntryFlagshipBody` until migrated  

## Patient pass criteria

After the left path only, can they say:

1. Why this decision exists  
2. Whether options might change  
3. What happens next  
4. What to do / ask next  

Right cards are optional worry-resolvers — not required reading.
