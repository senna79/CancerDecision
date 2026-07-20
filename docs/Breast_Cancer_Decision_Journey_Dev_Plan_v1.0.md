# Breast Cancer Decision Journey — Development Plan v1.1

**Status:** Planned — second complete cancer after lung  
**Supersedes:** v1.0 (build order, titles, genetics priority, situation copy)  
**Product rule:** Situation → Decision Path (not encyclopedia, not AI doctor)  
**Reuse:** Entry Template v2.0 · situation router · decision marks · prep sheet · SEO/AEO patterns from lung  

---

## 1. Why breast second

| Factor | Notes |
|--------|--------|
| Framework fit | Maps cleanly onto lung moments: diagnosis, subtype/info, surgery, systemic therapy, second opinion, stage/metastatic, recurrence |
| Decision shape | High volume of situation-based searches (subtype, sequencing, surgery choice) |
| Breast vs lung | Core path is **Diagnosis → Subtype/biology → Stage → Surgery/local → Systemic sequencing** — subtype and neoadjuvant timing are more central than in lung |
| Audience | Patients + helpers deciding together — matches identity-neutral framing |
| Defer | Prostate (surveillance-first fork differs) · Liver / Brain (less reusable OS) |

**North star for v1:** Someone newly diagnosed can pick a situation, open one guide, and leave knowing a concrete next step — same bar as lung’s first complete journey.

---

## 2. Scope by phase

| Phase | Deliverable | Done when |
|-------|-------------|-----------|
| **v1 (ship)** | 3 orientation guides + **6 P0 Entries** + situation buckets + breast OS skeleton + hub wire-up | Indexable breast journey; homepage/chips can point to complete breast |
| **v1.1** | **Genetics first**, then +3–5 more **P1 Entries** | Situations feel full (genetics, reconstruction, radiation, team, metastatic, recurrence) |
| **v2** | **P2** as full Entries or thin pointers | Near lung breadth (~15); Practical Fit / QoL / trial / follow-up / abroad as needed |

**Do not** build all 17 Entries before shipping v1.  
**Do not** add a new hero “Who this may apply to” module — audience fit stays in Template v2 **Step 1** (write it sharp).

---

## 3. Orientation knowledge pages (3)

Same job as lung Types / Stage / Treatment map — **before** the six situations.

| # | Label | Suggested path | Job (one sentence) |
|---|--------|----------------|--------------------|
| 1 | **Subtype** | `/cancers/breast-cancer/understanding-subtype` | HR+ / HER2+ / triple-negative (and related biology) — how subtype changes the first plan, not a histology textbook |
| 2 | **Stage** | `/cancers/breast-cancer/understanding-stage` | What stage / nodal extent / locally advanced means for options and sequencing — not a prognosis table |
| 3 | **Treatment map** | `/cancers/breast-cancer/treatment-landscape` | Surgery, radiation, endocrine, chemo, targeted/immuno, reconstruction families — so later comparisons make sense |

**Optional later (not in v1 must-ship):**  
`/cancers/breast-cancer/understanding-genetics` — BRCA / genetic counseling and impact on surgery — or a short section inside Subtype / Stage. Full decision lives in P1 Genetics Entry.

**Router copy (orientation strip):**

- Subtype — Receptor/HER2 status and why it shapes the first plan.  
- Stage — What stage (including locally advanced / nodes) means for options — not a prognosis table.  
- Treatment map — The main treatment families, so comparisons make sense.

**Locally advanced:** search intents + Stage orientation + sequencing/surgery hang cards — **not** a separate v1 Entry.

---

## 4. Situation buckets (6)

Align with lung’s identity-neutral situation layer. No seventh bucket.

| id | Label | Hint (draft) |
|----|--------|----------------|
| `recently-diagnosed` | Recently diagnosed | New diagnosis, or waiting on pathology / receptor / HER2 results and what comes first. |
| `choosing-treatment` | Choosing a treatment | Comparing surgery, sequencing, or systemic options. |
| `another-opinion` | Unsure about the plan or care team | Want more confidence, another review, or different expertise. |
| `cancer-changed` | Cancer or treatment has changed | Metastatic disease, progression, or a plan that stopped working. |
| `real-life` | Treatment feels hard on life or logistics | Daily life, side effects, time, cost, work, fertility, and whether the plan is workable. |
| `after-treatment` | Finished treatment / in follow-up | Monitoring, late effects, and life after treatment. |

Hang **decision marks** with the same four-mark language as lung (diagnosis · testing/subtype · treatment · follow-up).

---

## 5. Entry portfolio

### 5.1 Clinical / content dependency (breast)

```
Diagnosis
  → Subtype / biology (ER, PR, HER2, genomic risk)
  → Stage / extent
  → Surgery + local treatment
  → Systemic therapy sequencing & options
```

P0 narrative and internal links follow this order. Engineering may still ship **Newly diagnosed** first as the vertical slice.

### 5.2 P0 — Flagship (v1 must-ship)

| # | H1 (patient language) | Moment id (draft) | Situation primary | Seed / notes |
|---|----------------------|-------------------|-------------------|--------------|
| 1 | What decisions matter most after a new breast cancer diagnosis? | `newly-diagnosed` | recently-diagnosed | Upgrade `what-to-ask-after-new-breast-cancer-diagnosis` |
| 2 | Do I need my breast cancer subtype results before choosing treatment? | `subtype-testing` | recently-diagnosed, choosing-treatment | **New** — breast analogue of biomarker; cover receptor / HER2 / genomic (e.g. Oncotype-class) in path + cards, not as an encyclopedia |
| 3 | Should treatment start before or after breast cancer surgery? | `treatment-sequencing` | choosing-treatment | **New** — neoadjuvant vs adjuvant; breast-distinctive flagship |
| 4 | How should I choose between lumpectomy and mastectomy? | `surgery-decision` | choosing-treatment | Upgrade `how-to-compare-lumpectomy-and-mastectomy`; hang cards for genetic risk, reconstruction timing, recurrence concerns — **do not** split reconstruction into a P0 Entry |
| 5 | Should I get a second opinion before breast cancer surgery or systemic therapy? | `second-opinion` | another-opinion, recently-diagnosed | Upgrade `when-is-breast-cancer-second-opinion-most-useful` |
| 6 | How do I choose among systemic therapy options for my breast cancer subtype? | `treatment-comparison` | choosing-treatment | Upgrade `choose-systemic-therapy-options-breast-cancer`; path must **fork by subtype** (HR+ / HER2+ / TNBC), not a flat drug menu |

**SEO title examples (not always identical to H1):**

- Subtype: *Do I Need Biomarker and Receptor Testing Before Breast Cancer Treatment?*  
- Sequencing: *Should Breast Cancer Treatment Start Before or After Surgery?*  
- Surgery: *Lumpectomy vs Mastectomy: How to Choose*

**Build / publish order (dependency):** **1 → 2 → 3 → 4 → 5 → 6.**

### 5.3 P1 — Complete the situation tree

| Priority | # | Working title | Moment id (draft) | Situation |
|----------|---|---------------|-------------------|-----------|
| **P1 first (P0.5)** | 7 | Do I need genetic counseling / BRCA testing before surgery, and how does it change the operation? | `genetics` | recently-diagnosed, choosing-treatment |
| | 8 | How do reconstruction timing and choices fit into the cancer decision? | `reconstruction` | choosing-treatment, real-life |
| | 9 | How should radiation decisions factor into breast-conserving treatment? | `radiation-decision` | choosing-treatment |
| | 10 | How do I choose a breast cancer care team or center? | `care-center-expertise` | another-opinion |
| | 11 | What are my options for metastatic / stage IV breast cancer? | `stage-iv-options` | cancer-changed |
| | 12 | What if breast cancer comes back after treatment? | `recurrence` | cancer-changed, after-treatment |

**Genetics rule:** Not merged into Subtype (tumor biology ≠ germline). Until Entry #7 ships, surface “genetic testing before surgery?” as hang cards on **Surgery** and **Subtype**, plus a short orientation mention.

### 5.4 P2 — Pointers or full Entries (later)

| # | Working title | Moment id (draft) | Stance |
|---|---------------|-------------------|--------|
| 13 | How should quality of life and side effects factor into my plan? | `quality-of-life` | Full or shared with real-life |
| 14 | Can this breast cancer plan work with real life (time, cost, travel, work)? | `cost-logistics` | Prefer **pointer stub** (like lung Practical Fit); absorb cost seed page |
| 15 | Should I consider a clinical trial? | `clinical-trial` | Full when bandwidth allows |
| 16 | What should follow-up look like after breast cancer treatment? | `follow-up-monitoring` | Full |
| 17 | When should I consider care in another city / abroad? | `global-care` | Optional |

Existing thin seed to retire or absorb when P2 ships:  
`how-breast-cancer-treatment-costs-accumulate` → Practical Fit pointer (same pattern as lung cost orphan).

---

## 6. Mapping to lung OS / Template v2

| Breast moment | Closest lung moment | Template reuse |
|---------------|---------------------|----------------|
| newly-diagnosed | newly-diagnosed | Orientation path |
| subtype-testing | biomarker-testing | Information-gap / results-change-options |
| treatment-sequencing | (lung partial overlap) | **Breast-weighted** path shape; still 4 stages |
| surgery-decision | surgery-decision | Compare two paths + genetics/reconstruction cards |
| treatment-comparison | treatment-comparison | Systemic families compare **by subtype** |
| second-opinion | second-opinion | High reuse |
| genetics | (lung weaker) | Breast-specific; P1 first |
| reconstruction / radiation | — | Breast-specific; after surgery Entry exists |
| care-center / stage-iv / recurrence / QoL / trial / follow-up / global / practical | same slugs | High reuse of path chrome |

Every P0/P1 Entry: **Entry Template v2** (hero Direct Answer → 4-stage path → hang cards in main column / list on rail → page ending with next step + situation continue).

---

## 7. Engineering checklist (v1)

- [ ] `lib/os/breast-cancer.ts` — Decision OS + `patient_router` + `ai_entry_slug`  
- [ ] `lib/journey/situation-buckets.ts` — `BREAST_*` buckets + orientation links  
- [ ] Shared helpers only where pain is obvious; **extract a Cancer OS factory after breast ships** (or mid-build if duplication hurts) — do not block v1 on a grand abstraction  
- [ ] `lib/content/entry-path-v2.ts` + entry cards + `entry-template-v2` + flagship modules for 6 P0 slugs  
- [ ] `lib/seo/ai-entry-portfolio.ts` — `BREAST_AI_ENTRY_PORTFOLIO` (or namespaced ids)  
- [ ] Supporting guide content modules + routes under `app/(public)/cancers/breast-cancer/`  
- [ ] Seed: upgrade existing questions; add new slugs; sources/trust mapping  
- [ ] Hub: breast uses situation router when `complete` (not only lung special-case)  
- [ ] Homepage: breast chip → live journey (not “in development”) when v1 ships  
- [ ] Indexing: allowlist breast when journey is complete (`indexing.ts` / sitemap / llms.txt)  
- [ ] Decision map build from breast OS (parity with lung map)

---

## 8. SEO / AEO notes

- Decision-shaped H1 + Direct Answer on every Entry  
- Search intents = **situation + subtype + light context** — not hospital rankings, not one page per demographic  
- Context examples to attach on the right Entries (intent layer / hang cards, **not** new pages):  
  - older adults / postmenopausal  
  - fertility / pregnancy concerns  
  - family history / BRCA-oriented queries (until Genetics Entry ships)  
  - HER2-positive / triple-negative / hormone-receptor-positive “what next”  
  - locally advanced / lymph nodes  
- `llms.txt`: add breast portfolio only after v1 is ship-quality  
- noindex thin leftover pages; redirect cost orphan into Practical Fit when that pointer exists  

---

## 9. Out of scope for v1

- Full 17-Entry parity with lung on day one  
- Genetics / reconstruction / radiation as P0 (genetics is **first P1**)  
- Separate “locally advanced” or fertility Entries  
- New hero Decision Context chrome (use Step 1)  
- Premature Cancer OS Factory blocking ship  
- Prostate / other cancers  
- Expanding Practical Fit into a deep cost encyclopedia  
- Fake physician reviewers in schema  

---

## 10. Next working session

1. Lock final slugs for the 6 P0 H1s above  
2. Draft breast situation → momentId wiring table (which Entry under which bucket)  
3. Implement OS + first Entry (newly diagnosed) as the vertical slice  
4. Then subtype → sequencing → surgery in dependency order  

**Document owner:** Product / content + engineering  
**Related:** `docs/Entry_Template_v2.0.md` · `docs/Cancer_Decision_OS_Architecture_v1.0.md` · lung portfolio in `lib/seo/ai-entry-portfolio.ts`

---

## Changelog (v1.0 → v1.1)

| Change | Why |
|--------|-----|
| Build order **1 → 2 → 3 → 4 → 5 → 6** (subtype & sequencing before surgery) | Matches breast clinical dependency |
| Subtype / sequencing / surgery H1s → patient search language | Drop “locking a plan”; before/after surgery wording |
| Surgery Entry absorbs genetics/reconstruction/recurrence **cards** | Sharper surgery decision without premature page splits |
| Genetics = **P1 first (P0.5)** | Important for breast; keep v1 P0 at six |
| Recently diagnosed hint includes waiting for results | High anxiety moment; no new bucket |
| Stage orientation + intents cover locally advanced | No extra Entry in v1 |
| SEO context intents listed; no demographic page farm | AEO without scope creep |
| Factory deferred until after/during breast duplication pain | Avoid premature abstraction |
| Explicit: no new hero “who this applies to” module | Preserve Template v2 hero discipline |
