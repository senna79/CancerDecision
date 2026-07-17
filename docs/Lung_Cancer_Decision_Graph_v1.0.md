# Lung Cancer Decision Graph v1.0

**Status:** Active  
**Code:** `lib/os/decision-graph.ts`  
**Source of truth:** `lib/os/lung-cancer.ts` (moments + `next_moment_ids`) + `lib/seo/ai-entry-portfolio.ts` (related)

---

## Purpose

Turn 12 lung decision pages into one machine-readable **Decision Graph** so:

1. **Journey Navigation** can show “you are here / next / related”
2. **AI Search** can understand the page is part of a Lung Cancer Decision Journey

This is not a decorative UI graph. It is the product’s relationship layer.

---

## Edge types

| Edge | Meaning | Source |
|---|---|---|
| `next` | Likely next decision after this moment | `next_moment_ids` (active only) |
| `previous` | Moments that commonly lead here | Reverse of `next` |
| `related` | Parallel / useful nearby decisions | Portfolio `relatedEntryIds` mapped via `ai_entry_slug` |

`related` never duplicates `previous` or `next`.

---

## Active nodes (12)

1. Newly diagnosed  
2. Biomarker testing  
3. Treatment comparison  
4. Second opinion  
5. Care center & expertise  
6. Stage IV / advanced  
7. Clinical trial  
8. Recurrence  
9. Treatment progression  
10. Surgery *(optional supporting)*  
11. Quality of life / personal goals *(optional supporting)*  
12. Treatment feasibility / cost & logistics *(optional supporting)*  

Planned-only moments (e.g. global care) stay out of the public graph until activated.

---

## Intended journey shape (simplified)

```text
New Diagnosis
    ├── Biomarker Testing
    ├── Second Opinion
    ├── Care Center
    └── Treatment Comparison
            ├── Surgery
            ├── Stage IV
            ├── Clinical Trial
            └── Quality of Life / Feasibility
                    │
            Recurrence ←→ Treatment Progression
```

Edges are multi-path, not a single forced sequence.

---

## API

```ts
import {
  LUNG_DECISION_GRAPH,
  getDecisionGraphNodeByAiEntrySlug,
} from "@/lib/os/decision-graph";

const node = getDecisionGraphNodeByAiEntrySlug(questionSlug);
// node.previous / node.next / node.related
```

---

## Non-goals

- No complex canvas graph UI in v1  
- No second-cancer graph yet  
- Do not invent edges that are not in OS/portfolio  

---

## Next layers

1. **Journey Navigation** — render previous/next/related on flagship pages  
2. **AI Search Structure** — expose graph neighbors in JSON-LD  
