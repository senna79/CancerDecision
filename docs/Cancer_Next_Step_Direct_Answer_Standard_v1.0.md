# Cancer Next Step — Direct Answer Standard v1.0

**Status:** Active — use for all new Entries and Direct Answer rewrites  
**Supersedes for Direct Answer form:** the 4-sentence sketch in `Lung_Cancer_AI_Entry_Spec_v1.0.md` §5 and the “2–3 sentences” note in `Entry_Template_v2.0.md` hero (those docs remain valid for path/UI; DA length/structure follows **this** standard).

## Purpose

Direct Answer is the AI-readable answer block at the top of each decision page (`question.summary` → Citation Block → `Question.acceptedAnswer`).

Cancer Next Step is a **Decision OS**, not a medical FAQ site. The Direct Answer must:

1. Directly answer the patient’s question  
2. Explain why the answer depends on context  
3. Prevent over-simplification (boundary)  
4. Lead the patient to the next useful question  

It is **not**: a page summary, medical definition, treatment recommendation, brand blurb, or disclaimer.

**Product stack reminder**

| Layer | Audience |
|-------|----------|
| Direct Answer | AI extraction + instant patient clarity |
| Decision Path | Human navigation |
| Hang cards | Long-tail questions (in-page HTML) |
| Doctor checklist | Utility |

## Structure (3–4 sentences)

| # | Job | Requirement |
|---|-----|-------------|
| 1 | **Direct answer** | Answer the H1; include H1 keywords naturally; uncertainty-aware language |
| 2 | **Decision factors** | Why paths differ (subtype/risk, stage, goals, timing, priorities…) |
| 3 | **Boundary** | When it may *not* change the plan / not for everyone — **required for CNS** |
| 4 | **Next question** | One concrete question to ask the care team |

Sentence 3 may be short but should not be omitted on medical decision pages.

### Preferred openings (sentence 1)

- Often… / Sometimes… / Depends on… / For many people… / In some situations…

### Avoid openings

- You should… / The best treatment is… / Everyone needs…  
- Empty: “Every patient is different.” (alone)  
- Dictionary: “X are biological molecules that…”  
- Brand: “Cancer Next Step helps…”  
- Disclaimer: “This is not medical advice.” (footer / Sources only)

## Length

| Band | Words |
|------|------:|
| Recommended | 40–90 |
| Maximum | 110 |
| Too shallow | &lt; 40 |
| Usually a summary | &gt; 110 |

No numbered checklists inside the Direct Answer — continuous prose only.

## Four question templates

### Type 1 — Should I / Do I need

Often/Some people… because… Sometimes it may not change… Ask…

### Type 2 — What should happen first

The first step is usually clarifying… because… Not every pending result changes timing… Ask…

### Type 3 — A vs B

The choice depends on… because… Neither option is automatically right for everyone… Ask…

### Type 4 — When should I

A second opinion / review may help when… because… It is not always necessary if… Ask…

## Acceptance tests (before ship)

1. **Standalone answer** — Copy only the Direct Answer (no H1, no path). Does it answer the page question? → Must yes.  
2. **Next ask** — Does the reader know what to ask the care team next? → Must yes.  
3. **AI-quotable** — Delete title and body; the block still makes sense alone. → Must yes.

## Rewrite rollout (recommended)

1. Breast portfolio (calibration set)  
2. Lung portfolio (complex decision types)  
3. Prostate portfolio (fix list-heavy drafts first)

## Optional future metadata

Not required in the data model yet. When generating Entries, agents may self-check against:

```yaml
direct_answer:
  type: decision_answer
  max_words: 110
  contains:
    - direct_response
    - decision_factors
    - boundary
    - next_question
```

## Source of truth

- Spec: this file  
- Cursor rule: `.cursor/rules/direct-answer-standard.mdc`  
- Runtime field: `question.summary` (seed + store); UI: `CitationBlock` / `#citation-answer`
