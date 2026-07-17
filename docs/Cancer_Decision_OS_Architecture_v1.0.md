# Cancer Decision OS Architecture v1.0

**Status:** Active  
**Goal:** Full Decision Moment skeleton with active graph edges; patient-visible moments power Journey + AI Entry.

---

## 1. Product model

```text
Cancer Decision Platform
        │
 Cancer Type (e.g. Lung Cancer)
        │
 Decision Moments (12 active)
        │
 Decision Graph (previous / next / related)
        │
 Decision Center / Map + Journey Navigation
        │
 AI Entry / Supporting Modules
        │
 What to do next → Sources & Trust → Next step
```

Each Moment is a **tree root**, not a single page.

---

## 2. Moment attributes

| Field | Purpose |
|---|---|
| `tier` | 1 core · 2 supporting expansion · 3 practical reserved |
| `status` | `active` (public) · `planned` (skeleton only) · `supporting` (reserved) |
| `ai_entry_slug` | Citation / decision page when activated |
| `next_moment_ids` | Graph **next** edges |
| `facets` | Super-node children (e.g. under Treatment Comparison) |

**Runtime rule:** Decision Map and Decision Graph render **`status === active` only**.

---

## 3. Lung Cancer — 12 active Moments

### Tier 1

1. Newly diagnosed  
2. Biomarker testing  
3. Treatment comparison  
4. Second opinion  
5. Care center & expertise  
6. Stage IV / advanced  
7. Clinical trial  
8. Recurrence  
9. Treatment progression  

### Tier 2 · supporting modules

10. Surgery decision  
11. Quality of life / personal goals  
12. Treatment feasibility / cost & logistics  

### Planned (not public graph)

- Global care branch  

---

## 4. Decision Graph + Journey + AI Search

| Layer | Location |
|---|---|
| OS moments | `lib/os/lung-cancer.ts` |
| Graph builder | `lib/os/decision-graph.ts` |
| Graph doc | `docs/Lung_Cancer_Decision_Graph_v1.0.md` |
| Journey UI | `components/journey/decision-journey-nav.tsx` + progress rail |
| Schema | `lib/seo/json-ld.ts` (`isPartOf`, `relatedLink`, `significantLink`) |

---

## 5. Implementation map

| Piece | Location |
|---|---|
| Types | `lib/os/types.ts` |
| Map builder | `lib/os/build-decision-map.ts` |
| Seed map | `lib/db/seed-data.ts` ← builds from OS |
| Patient router | `lib/journey/decision-moments.ts` |
| Map UI | `components/cancer/decision-map.tsx` |
| Trust | `docs/CancerDecision_Source_Trust_Framework_v1.0.md` |
| Entry Template v2.0 | `docs/Entry_Template_v2.0.md` (Biomarker sample) |

---

## 6. Explicit non-goals (this version)

- No empty Question pages for planned moments  
- No new cancer types until lung citation → journey is proven  
- No hospital directory / AI diagnosis  
- No complex graph canvas UI  

---

## 7. Activation protocol

To open a planned Moment later:

1. Set `status: "active"`  
2. Attach `ai_entry_slug` + Citation-ready Question  
3. Fill map edges / portfolio related ids  
4. Ship — Map, Graph, Journey, and Schema pick it up automatically  
