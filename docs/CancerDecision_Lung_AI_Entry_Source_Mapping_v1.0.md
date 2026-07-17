# CancerDecision Lung Cancer AI Entry Source Mapping v1.0

Create Entry-specific source mapping for the 9 Lung Cancer Tier-1 AI Entries.

This is **not** inline citation yet.

**Goals:**

- Improve trust accuracy
- Make Sources & Review Information more relevant
- Prepare future Phase 2 sparse citations
- Help AI Search systems understand which authoritative sources support each decision page

Do not add citation markers to every sentence.

Use this mapping for:

- Sources & Review Information module
- Structured data relationships
- Future inline citations on Direct Answer only

**Implementation:** `lib/trust/lung-entry-sources.ts` → `lib/db/seed-data.ts` `content_sources`

---

## Global Source Families

### Clinical Guidelines

**NCCN** — treatment pathways, biomarker testing, staging-related decisions, clinical decision frameworks

**ESMO** — evidence-based oncology guidance, treatment decision frameworks, patient guidance

### Patient Education

**NCI** — lung cancer treatment overview, treatment changes, clinical trials, patient decision preparation

**ASCO / Cancer.Net** — patient communication, second opinions, treatment decisions, questions for doctors

### Clinical Research

**ClinicalTrials.gov** — clinical trial explanation, trial participation concepts

---

## Entry Source Mapping

Question `n` matches seed `questionDefs` / `id("q", n)`.

| Entry | Moment | q n | Source IDs (order = References order) |
|---|---|---|---|
| 1 | New Diagnosis | 2 | 9, 1, 10, 11, 4, 8 |
| 2 | Second Opinion | 1 | 4, 5, 1, 9, 11, 8 |
| 3 | Biomarker | 21 | 1, 9, 10, 11 |
| 4 | Treatment Comparison | 3 | 1, 9, 10, 11, 2 |
| 5 | Care Center | 26 | 5, 1, 10, 9, 11, 4 |
| 6 | Stage IV | 27 | 9, 1, 10, 11 |
| 7 | Clinical Trial | 28 | 12, 13, 1, 9, 10, 11 |
| 8 | Recurrence | 29 | 9, 1, 10, 11, 4 |
| 9 | Treatment Progression | 30 | 9, 1, 10, 11, 12, 4 |
| 10 | Surgery (supporting) | 31 | 9, 1, 10, 11, 2, 4 |
| 11 | Quality of Life (supporting) | 32 | 9, 10, 2, 11, 7, 8 |
| 12 | Treatment Feasibility (supporting) | 33 | 2, 5, 1, 10, 6, 8 |

Catalog keys:

1 NCCN Patient Resources · 2 ACS Making Treatment Decisions · 4 ASCO Second Opinion · 5 NCI Finding Health Care Services · 8 MedlinePlus Talking With Your Doctor · 9 NCI NSCLC PDQ Patient · 10 Cancer.Net Lung Cancer · 11 ESMO Lung Patient Guide · 12 ClinicalTrials.gov · 13 NCI Clinical Trials Information

---

## Implementation Rules

### Do NOT

- Add citations after every sentence
- Create fake physician review
- Use FAQPage schema
- Add unsupported medical claims

### Do

Every Entry bottom module should show Sources & Review Information with:

> This page is informed by publicly available cancer guidance from NCCN, NCI, ASCO/Cancer.Net, and ESMO.

Then list Entry-specific references.

---

## Future Phase 2

Only Direct Answer sections may add sparse citations:

> Treatment decisions depend on cancer characteristics, biomarker information, previous treatments, and personal goals.[1][2]

References appear at bottom. Do not interrupt decision-navigation flow.
