# Entry Template v2.0 — Patient Decision Workspace

**Status:** Active sample on Biomarker Testing  
**Goal:** 30 seconds to know this page fits · ~3 minutes on the Decision Path · depth only when chosen.

## Hero (above the path)

Only three jobs:

1. **H1** — Is this my question?  
2. **Direct Answer** — 2–3 sentences (compact; no repeated H1)  
3. **CTA** — `Follow the decision path below` → `#decision-path`

Moved out of hero (kept elsewhere):

| Content | Where |
|---------|--------|
| Audience / “is this my situation?” | Step 1 question card |
| Journey “You are here” | Below the Decision Path |
| Reading guide / dual-intent chrome | Removed (path is self-explanatory) |

## Decision OS stages (every Entry)

Light eyebrows above patient-facing step titles — not big headlines, not watermarks.

| Stage | Biomarker step title |
|-------|----------------------|
| Understand the decision | Why does biomarker testing matter? |
| Compare what matters | Could biomarker results change my treatment options? |
| Consider practical realities | What should I know before testing? |
| Prepare for next conversation | What should I discuss with my doctor? |

## Layout

**Desktop (~70 / 30)**

- Left — numbered Decision Path (must-walk story)  
- Right — accordion **Questions you may have** for that step only  

**Mobile:** step story → that step’s cards → next step.

Cards expand **inline** (accordion). No page jump. No single global question rail.

## Design rules

- Main axis is a numbered path, not a preface-heavy article.  
- Practical Reality is its own step (sample / biopsy / risk / time / cost).  
- “Which biomarkers…” = ask-your-doctor framing — **no gene lists**.  
- No fixed prices, no “you should get tested.”  

## Implementation map

| Concern | Code |
|--------|------|
| Opt-in + audience (for Step 1 card) | `lib/content/entry-template-v2.ts` |
| Workspace shell | `components/question/ai-entry/decision-workspace-v2.tsx` |
| Body entry | `components/question/ai-entry/flagship-body-v2.tsx` |
| Compact Direct Answer | `CitationBlock` `compact` on v2 pages |
| Sample content | `BIOMARKER_FLAGSHIP` in `lib/content/ai-entry-modules.ts` |

## Page ending (after Step 4)

Secondary only — do not compete with the path:

1. Light closure — “You've completed this decision step”  
2. **One** next-step CTA  
3. Related decisions — ≤3 text links  
4. **One** journey strip — where you are + next decisions + Full map  
5. Sources & Review — **collapsed by default**

Do not mount both `JourneyYouAreHere` and `DecisionJourneyNav` on v2 pages.

## Patient pass criteria

After the path only (without opening cards):

1. Why this decision exists  
2. Whether options might change  
3. What they may experience before testing  
4. What to ask next with their doctor  
