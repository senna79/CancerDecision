# Cancer Decision OS Architecture v1.0

**Status:** Active  
**Goal:** Full Decision Moment skeleton; only Tier-1 active moments are patient-visible.

---

## 1. Product model

```text
Cancer Decision Platform
        │
 Cancer Type (e.g. Lung Cancer)
        │
 Decision Moments (12 — skeleton)
        │
 Decision Center / Map (active only)
        │
 AI Entry Questions (5)
        │
 What to do next → Supporting content → Stories → Next step
```

Each Moment is a **tree root**, not a single page. Leaves (hub pages, sub-questions) grow after validation — not as empty SEO pages.

---

## 2. Moment attributes

| Field | Purpose |
|---|---|
| `tier` | 1 core · 2 high-value expansion · 3 practical/supportive |
| `status` | `active` (public) · `planned` (skeleton only) · `supporting` (reserved) |
| `ai_entry_slug` | Tier-1 citation page when activated |
| `next_moment_ids` | Graph edges |
| `facets` | Super-node children (e.g. under Treatment Comparison) |

**Runtime rule:** Decision Map and patient Moment Router render **`status === active` only**.

---

## 3. Lung Cancer — 12 Moments

### Tier 1 · active (patient-visible)

1. Newly diagnosed  
2. Biomarker testing  
3. Treatment comparison *(super-node; surgery/radiation/IO/targeted/chemo as facets)*  
4. Second opinion  
5. Global care  

### Tier 2 · planned

6. Surgery decision  
7. Clinical trial  
8. Choosing cancer center  
9. Recurrence  
10. Stage IV / advanced options  

### Tier 3 · planned

11. Cost & logistics  
12. Quality of life / palliative  

---

## 4. Implementation map

| Piece | Location |
|---|---|
| Types | `lib/os/types.ts` |
| Lung skeleton | `lib/os/lung-cancer.ts` |
| Map builder | `lib/os/build-decision-map.ts` |
| Seed map | `lib/db/seed-data.ts` ← builds from OS |
| Patient router | `lib/journey/decision-moments.ts` ← active Tier-1 from OS |
| Map UI | `components/cancer/decision-map.tsx` |

---

## 5. Explicit non-goals (this version)

- No empty Question pages for planned moments  
- No new cancer types  
- No hospital directory / AI diagnosis  
- Do not grow 5–20 leaves per Moment until Tier-1 Entries prove citation → journey  

---

## 6. Activation protocol

To open a planned Moment later:

1. Set `status: "active"`  
2. Attach `ai_entry_slug` + Citation-ready Question  
3. Fill map edges / stories / treatments  
4. Ship — Map and router pick it up automatically  

No redesign of the tree required.
