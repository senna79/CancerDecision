# Supporting Module #1 — Understanding Lung Cancer Types

**Status:** Content Document v1.0 — implemented (`/cancers/lung-cancer/understanding-types`)  
**Module class:** Supporting Module (Diagnosis Orientation)  
**Not:** Decision Entry / Decision Path  
**Sibling pattern:** Treatment Landscape (`/cancers/lung-cancer/treatment-landscape`)  
**Route:** `/cancers/lung-cancer/understanding-types`  
**Slug / content key:** `understanding-types`

---

## 0. Product contract

### User before

“My doctor said I have lung cancer, but I don’t know what that means yet.”

### User after

They can answer:

1. Which broad type applies to me (or what to confirm)?
2. Why that type changes treatment discussions?
3. Which words to find on my pathology report?
4. Which questions to take to my doctor — and which Decision Entry to open next?

### Job of this page

**Recognize my cancer → understand why decisions differ → take the next action.**

### Explicit non-goals

- Not a lung-cancer taxonomy encyclopedia  
- Not NSCLC vs SCLC ranking (“which is better”)  
- Not a Decision Path (Understand → Compare → Practical → Conversation)  
- No gene lists, tumor imagery, or large comparison tables  

### Information logic (not UI steps)

`Knowledge → Meaning → Action`

Rendered as five page sections (see §2).

---

## 1. Implementation map

| Concern | Suggested code |
|--------|----------------|
| Copy + section IDs | `lib/content/lung-understanding-types.ts` |
| Page shell | `components/cancer/understanding-types.tsx` (or `supporting-module.tsx` shell + content prop) |
| Route | `app/(public)/cancers/lung-cancer/understanding-types/page.tsx` |
| Checklist + Copy | Reuse `DoctorChecklistTakeaway` |
| Related Entries | Reuse Entry-ending related-path pattern (≤3) |
| Sources | Collapsed by default (same as Entry v2 / Landscape) |

**Do not import / mount:** `DecisionWorkspaceV2`, `getEntryPathV2`, path step chrome.

### Visual rules

- Single-column narrative on desktop (not 70/30 workspace)  
- Light in-page anchors only (not a sticky Quick Nav card)  
- Type Map = two map units (NSCLC / SCLC), not a card wall  
- FAQ = accordion disclosures  
- Checklist = takeaway with Copy  
- Cards only where they hold interaction or a clear map unit  

### Anchor / section IDs (stable for deep links)

| Section ID | Purpose |
|------------|---------|
| `#hero` | Hero + H1 |
| `#direct-answer` | Compact one-minute answer |
| `#type-map` | NSCLC / SCLC map |
| `#nsclc` | NSCLC unit |
| `#sclc` | SCLC unit |
| `#why-it-matters` | How type changes conversations |
| `#common-questions` | FAQ accordion |
| `#pathology-report` | Find terms on your report |
| `#doctor-checklist` | Takeaway checklist |
| `#related-decisions` | Decision Entry exits |
| `#sources` | Sources & review (collapsed) |

Light desktop/mobile nav labels (optional strip under hero):

- Types → `#type-map`
- Why it matters → `#why-it-matters`
- Pathology → `#pathology-report`
- Ask doctor → `#doctor-checklist`

---

## 2. Page structure (render order)

### Desktop & mobile (same order)

1. `#hero` + `#direct-answer`  
2. `#type-map` (`#nsclc`, `#sclc`)  
3. `#why-it-matters`  
4. `#common-questions`  
5. `#pathology-report`  
6. `#doctor-checklist`  
7. `#related-decisions`  
8. `#sources` (collapsed)

---

## 3. Final copy (English)

### `#hero`

**eyebrow**  
Supporting guide · Lung cancer

**H1**  
What Type of Lung Cancer Do I Have?

**subtitle**  
Lung cancer is not one single disease. Understanding your cancer type helps explain why certain tests and treatments may be discussed.

**boundary line** (optional, under subtitle — Landscape-style)  
This page helps you orient to your diagnosis. It is not a treatment recommendation.

---

### `#direct-answer`

**label**  
Direct answer

**body**

Your lung cancer type comes mainly from pathology and biopsy results.

Knowing your type helps your care team understand:

- how your cancer may behave;
- which treatments may be discussed;
- whether additional testing may be useful.

Your cancer type is one important piece of the decision — not the only one.

**close**  
The useful next step is not memorizing every subtype. It is confirming your type and asking how it shapes the conversation ahead.

---

### `#type-map`

**section title**  
The two main types of lung cancer

**section lead**  
Start with the map patients hear most often. Your report may use these names, or a more specific subtype under one of them.

---

#### `#nsclc`

**name**  
Non-Small Cell Lung Cancer (NSCLC)

**tag**  
The most common type of lung cancer

**body**  
Most lung cancers are NSCLC.

NSCLC includes several subtypes, such as:

- Adenocarcinoma  
- Squamous cell carcinoma  
- Other less common types  

**whyItMattersTitle**  
Why it matters

**whyItMatters**  
Treatment discussions may depend on:

- cancer stage;
- biomarker results;
- whether surgery is possible;
- your overall health.

**unitNote**  
Questions about subtype and biomarkers belong in your doctor checklist below — not as homework before you know your report.

---

#### `#sclc`

**name**  
Small Cell Lung Cancer (SCLC)

**tag**  
A different type of lung cancer

**body**  
SCLC often behaves differently from NSCLC.

Doctors consider:

- where the cancer is located;
- whether it has spread;
- how it responds to treatment.

**whyItMattersTitle**  
Why it matters

**whyItMatters**  
SCLC treatment decisions may differ from NSCLC. Your doctor will consider the overall situation — not the cancer type alone.

**unitNote**  
If your report says small cell, ask what the treatment goal is in your situation and which options should be discussed now.

---

### `#why-it-matters`

**section title**  
Why does my cancer type matter?

**section lead**  
Cancer type helps guide treatment discussions. It does not choose a treatment by itself.

**bridge intro**  
Your cancer type can influence:

---

#### Bridge 1 — `why-treatments`

**title**  
Which treatments are considered

**body**  
Different cancer types may lead doctors to discuss different approaches — for example surgery, radiation, or systemic treatments — and in what order.

**ctaLabel**  
Compare treatment options  
**ctaHref**  
`/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer`

---

#### Bridge 2 — `why-biomarkers`

**title**  
Whether biomarker testing matters

**body**  
Some lung cancers — especially many NSCLC cases — may be tested for specific characteristics that can affect which options are discussed.

**ctaLabel**  
Biomarker testing decision  
**ctaHref**  
`/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment`

---

#### Bridge 3 — `why-trials`

**title**  
Which clinical trials may apply

**body**  
Some trials are designed for specific cancer types or characteristics. Knowing your type helps you ask whether research options belong in the conversation.

**ctaLabel**  
Clinical trial decision  
**ctaHref**  
`/questions/should-i-consider-a-clinical-trial-for-lung-cancer`

---

**section close**  
Type answers: “What kind of cancer is this?”  
Other information — stage, biomarkers, health, and goals — answers: “Which plan fits me now?”

---

### `#common-questions`

**section title**  
Questions patients often ask

**section lead**  
Open a question only if it matches what you are wondering.

---

#### FAQ `faq-better-type`

**question**  
Is one type of lung cancer better than another?

**answer**

Cancer types behave differently.

The important question is not:

“Which type is better?”

It is:

“What does my cancer type mean for my treatment options?”

---

#### FAQ `faq-determines-treatment`

**question**  
Does my cancer type determine my treatment?

**answer**

Not by itself.

Doctors also consider:

- stage;
- biomarkers;
- previous treatments;
- overall health;
- personal goals.

---

#### FAQ `faq-type-change`

**question**  
Can my cancer type change over time?

**answer**

The original cancer type usually remains part of your medical record.

However, cancer characteristics can change, especially after treatment. Your doctor may consider whether new information is needed.

---

#### FAQ `faq-why-biomarkers`

**question**  
Why do I need biomarker testing if my cancer type is already known?

**answer**

Cancer type and biomarkers answer different questions.

- Cancer type: “What kind of cancer is this?”  
- Biomarkers: “What characteristics might affect treatment choices?”

Both may be important.

---

#### FAQ `faq-friend-different`

**question**  
Why did my friend with lung cancer get different treatment?

**answer**

Different treatment plans may happen because cancers differ in:

- type;
- stage;
- biomarkers;
- previous treatments;
- personal health.

A treatment that fits one person may not fit another.

---

### `#pathology-report`

**section title**  
Understanding your pathology report

**hero sentence**  
Your pathology report contains important information about your cancer.

**reassure**  
You do not need to understand every medical term.

**prompt**  
Start by looking for these:

---

#### Finder `find-cancer-type`

**label**  
Cancer type

**examples**  
NSCLC · SCLC

**hint**  
Ask: “Which main type do I have?”

---

#### Finder `find-subtype`

**label**  
Subtype

**examples**  
Adenocarcinoma · Squamous cell carcinoma

**hint**  
Ask: “What subtype is listed — and does it change anything we discuss?”

---

#### Finder `find-biomarkers`

**label**  
Biomarker information

**examples**  
May appear as molecular / genomic / biomarker results — or as “pending” / “not performed”

**hint**  
Ask: “Has biomarker testing been performed for my decision?”

---

#### Finder `find-other`

**label**  
Other important details

**examples**  
Findings your doctor says affect staging or treatment timing

**hint**  
Ask: “Which findings on this report change the next decision?”

---

**section close**  
Bring the report (or a photo/PDF) to your appointment. Confirming a few terms is enough to start a clearer conversation.

---

### `#doctor-checklist`

**section title**  
Questions to take to your doctor

**leaveTitle**  
Before you leave, confirm:

**leaveItems** (short takeaway — always visible + Copy)

1. What type of lung cancer do I have — and what subtype?  
2. Can you explain the key lines on my pathology report?  
3. How does my cancer type affect the options we should discuss?  
4. Are there tests that could provide more information before we decide?

---

#### Group `checklist-diagnosis`

**heading**  
Understand my diagnosis

- What type of lung cancer do I have?  
- What subtype is it?  
- Can you explain my pathology report?

---

#### Group `checklist-impact`

**heading**  
Understand treatment impact

- How does my cancer type affect treatment options?  
- Are there tests that could provide more information?  
- What decisions will this information help us make?

---

#### Group `checklist-next`

**heading**  
Plan my next step

- What should I learn about next?  
- Which decisions should I prepare for?

---

### `#related-decisions`

**section title**  
Continue into a decision

**section lead**  
Your next steps may include one of these Decision Paths — not more articles.

---

#### Related `related-biomarker`

**title**  
Biomarker testing  
**question**  
Do I need biomarker testing before choosing lung cancer treatment?  
**hint**  
Understand whether additional cancer information may affect treatment discussions.  
**href**  
`/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment`  
**cta**  
Open biomarker decision

---

#### Related `related-treatment`

**title**  
Treatment options  
**question**  
How should I compare lung cancer treatment options?  
**hint**  
Learn how doctors compare different approaches for your situation.  
**href**  
`/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer`  
**cta**  
Open treatment comparison

---

#### Related `related-trial`

**title**  
Clinical trials  
**question**  
Should I consider a clinical trial for lung cancer?  
**hint**  
Understand whether research options may apply to your type and situation.  
**href**  
`/questions/should-i-consider-a-clinical-trial-for-lung-cancer`  
**cta**  
Open clinical trial decision

---

**secondary link** (text only, optional under related)  
Also useful: [Lung Cancer Treatment Landscape](/cancers/lung-cancer/treatment-landscape) — a map of treatment directions after you know your type.

---

### `#sources`

**section title**  
Sources & review

**default**  
Collapsed

**purpose line**  
This guide helps patients understand lung cancer type as part of decision preparation. It does not replace medical advice.

**sources**

- National Cancer Institute (NCI)  
- NCCN Guidelines for Patients: Non-Small Cell Lung Cancer  
- American Cancer Society (ACS)  
- American Society of Clinical Oncology (ASCO)

---

## 4. Suggested TypeScript content shape

For `lib/content/lung-understanding-types.ts` — field names map 1:1 to §3.

```ts
export const LUNG_UNDERSTANDING_TYPES = {
  path: "/cancers/lung-cancer/understanding-types",
  slug: "understanding-types",

  hero: {
    id: "hero",
    eyebrow: "Supporting guide · Lung cancer",
    title: "What Type of Lung Cancer Do I Have?",
    subtitle: "...",
    boundary: "...",
  },

  directAnswer: {
    id: "direct-answer",
    label: "Direct answer",
    lead: "...",
    points: ["...", "...", "..."],
    close: "...",
  },

  typeMap: {
    id: "type-map",
    title: "...",
    lead: "...",
    types: [
      {
        id: "nsclc",
        name: "...",
        tag: "...",
        body: "...",
        bullets: ["..."],
        whyTitle: "Why it matters",
        whyItems: ["..."],
        note: "...",
      },
      // sclc
    ],
  },

  whyItMatters: {
    id: "why-it-matters",
    title: "...",
    lead: "...",
    bridges: [
      {
        id: "why-treatments",
        title: "...",
        body: "...",
        ctaLabel: "...",
        ctaHref: "...",
      },
    ],
    close: "...",
  },

  faqs: {
    id: "common-questions",
    title: "...",
    lead: "...",
    items: [{ id: "faq-better-type", question: "...", answer: ["..."] }],
  },

  pathology: {
    id: "pathology-report",
    title: "...",
    heroSentence: "...",
    reassure: "...",
    prompt: "...",
    finders: [
      {
        id: "find-cancer-type",
        label: "...",
        examples: "...",
        hint: "...",
      },
    ],
    close: "...",
  },

  checklist: {
    id: "doctor-checklist",
    title: "...",
    leaveTitle: "...",
    leaveItems: ["..."],
    groups: [{ id: "checklist-diagnosis", heading: "...", questions: ["..."] }],
  },

  related: {
    id: "related-decisions",
    title: "...",
    lead: "...",
    items: [
      {
        id: "related-biomarker",
        title: "...",
        question: "...",
        hint: "...",
        href: "...",
        cta: "...",
      },
    ],
    landscapeHref: "/cancers/lung-cancer/treatment-landscape",
    landscapeLabel: "Lung Cancer Treatment Landscape",
  },

  sources: {
    id: "sources",
    title: "Sources & review",
    purpose: "...",
    items: ["...", "...", "...", "..."],
  },
} as const;
```

---

## 5. SEO / discoverability (seed or page metadata)

**seo_title**  
What Type of Lung Cancer Do I Have?

**seo_description**  
Understand NSCLC vs SCLC in plain language — why your lung cancer type changes treatment discussions, what to find on your pathology report, and questions to ask your doctor.

**seo_keywords**

- what type of lung cancer do I have  
- NSCLC vs SCLC patient guide  
- lung cancer pathology report  
- how cancer type affects treatment decisions  

**Internal links in**

- Newly Diagnosed Entry related paths / bridges  
- Treatment Landscape “How to read this map” → Cancer type  
- Lung Decision Center supporting strip (when wired)

---

## 6. Acceptance checks (patient pass)

- [ ] First viewport: brand + H1 + one subtitle + Direct Answer — no Path steps  
- [ ] User can name NSCLC vs SCLC without reading FAQ  
- [ ] “Type alone does not decide treatment” appears before checklist  
- [ ] Pathology section teaches find-words, not medical vocabulary  
- [ ] Checklist has Copy; longer groups may collapse  
- [ ] Exactly ≤3 primary Decision Entry exits  
- [ ] No Decision Path chrome; layout closer to Treatment Landscape than Entry v2 workspace  
- [ ] Sources collapsed by default  

---

## 7. Open for next Supporting Modules (same shell)

Reuse this shell for future Diagnosis Orientation modules:

| Slot | Module | Map metaphor |
|------|--------|----------------|
| #1 | Understanding Types (this doc) | Identity map |
| #2 | (TBD) Stage / spread orientation | Extent map |
| #3 | (TBD) | Third orientation map |

Shell contract: `Hero + Direct Answer → Map → Meaning bridges → Practical finder → Checklist → Related Entries`.

---

## Document control

| Field | Value |
|-------|--------|
| Version | v1.0 |
| Language | English (production copy) |
| Based on | Supporting Module design review (Knowledge → Meaning → Action) |
| Ready for | Content TS module + page implementation |
