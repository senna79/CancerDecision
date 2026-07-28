# Breast Cancer — Direct Answer Rewrite Pack

**Standard:** [`Cancer_Next_Step_Direct_Answer_Standard_v1.0.md`](./Cancer_Next_Step_Direct_Answer_Standard_v1.0.md) (plus lung v1.1 language polish rules)
**Purpose:** Rewrite all 17 breast portfolio Direct Answers in one pass, then apply into `BREAST_*_DIRECT_ANSWER` constants + reseed store.
**Extracted:** from `data/store.json` · 2026-07-28
**Status:** Revised (v1.1 polish) applied to seed · 2026-07-28

## How to use

1. Review each **Revised (v1.1)** block (ChatGPT polish on 5 items).
2. Keep **3–4 sentences, 40–90 words** (max 110). Continuous prose — no lists.
3. Structure: direct answer (H1 keywords) → factors → boundary → next ask.
4. When approved, apply Revised text into the listed content constant + reseed `data/store.json`.

## Scoreboard (current → revised)

| # | Portfolio id | Cur | Rev | Current flags | Slug |
|---|--------------|----:|----:|---------------|------|
| 1 | newly-diagnosed | 108 | 74 | `near_max` `LIST_FORMAT` | `what-decisions-matter-most-after-new-breast-cancer-diagnosis` |
| 2 | subtype | 101 | 74 | `near_max` | `do-i-need-breast-cancer-subtype-results-before-choosing-treatment` |
| 3 | sequencing | 102 | 67 | `near_max` `weak_boundary` | `should-breast-cancer-treatment-start-before-or-after-surgery` |
| 4 | surgery | 83 | 72 | `weak_boundary` | `how-to-compare-lumpectomy-and-mastectomy` |
| 5 | second-opinion | 72 | 78 | `weak_boundary` | `when-is-breast-cancer-second-opinion-most-useful` |
| 6 | systemic | 69 | 74 | `weak_boundary` | `choose-systemic-therapy-options-breast-cancer` |
| 7 | genetics | 102 | 81 | `near_max` | `do-i-need-genetic-counseling-before-breast-cancer-surgery` |
| 8 | reconstruction | 83 | 88 | `weak_boundary` | `how-do-breast-reconstruction-timing-and-choices-fit` |
| 9 | radiation | 101 | 76 | `near_max` | `how-should-radiation-factor-into-breast-cancer-treatment` |
| 10 | care-team | 85 | 80 | `ok` | `how-do-i-choose-a-breast-cancer-care-team-or-center` |
| 11 | metastatic | 80 | 84 | `ok` | `what-are-my-options-for-metastatic-stage-iv-breast-cancer` |
| 12 | recurrence | 83 | 72 | `ok` | `what-should-i-sort-out-if-breast-cancer-comes-back` |
| 13 | quality-of-life | 70 | 75 | `ok` | `how-should-quality-of-life-factor-into-breast-cancer-decisions` |
| 14 | practical-fit | 87 | 58 | `weak_boundary` | `can-my-breast-cancer-treatment-plan-work-with-my-real-life` |
| 15 | clinical-trial | 73 | 83 | `ok` | `should-i-consider-a-clinical-trial-for-breast-cancer` |
| 16 | follow-up | 76 | 80 | `ok` | `how-do-i-monitor-my-health-after-breast-cancer-treatment` |
| 17 | global-care | 136 | 72 | `TOO_LONG (>110)` `LIST_FORMAT` | `when-to-consider-breast-cancer-care-abroad` |

## Spec reminder

1. Direct answer with H1 keywords
2. Decision factors
3. Boundary — when it may not change the plan
4. Next question to ask the care team

Forbidden: empty openers, dictionary definitions, disclaimers, brand, treatment orders, numbered lists.

**Breast-specific polish (from lung v1.1):**
- Prefer importance/timing language for subtype/genetics (not “some people don’t need”).
- Avoid “only works”, “next best”, “supportive care focus = giving up”.
- Global care: prose only, no bullet list of reasons.

---

## 1. Newly diagnosed

| Field | Value |
|-------|-------|
| Portfolio id | `newly-diagnosed` |
| H1 / title | What decisions matter most after a new breast cancer diagnosis? |
| Decision label | What happens next after a new diagnosis |
| Slug | `what-decisions-matter-most-after-new-breast-cancer-diagnosis` |
| Apply to | `BREAST_NEWLY_DIAGNOSED_DIRECT_ANSWER` in `lib/content/breast-newly-diagnosed-entry-cards.ts` |
| Current words | **108** |
| Revised words | **74** |
| Current flags | `near_max` `LIST_FORMAT` |
| Path | `/questions/what-decisions-matter-most-after-new-breast-cancer-diagnosis` |

### Current Direct Answer

```text
After a new breast cancer diagnosis, you do not need every answer immediately.

In the first days and weeks, the focus is usually:
1. Confirm your breast cancer subtype (ER/PR/HER2)
2. Understand stage and extent
3. Know whether treatment should start before or after surgery
4. Prepare questions for your care team

Ask what must happen this week, what can wait for results, and whether genetic counseling could change a surgery choice. Keep your key reports together.

Your next step is clarity and treatment order — not choosing every treatment today. Doctors call this “sequencing”: deciding what happens first, such as medicine before surgery or surgery before medicine.
```

### Revised (v1.1)

```text
After a new breast cancer diagnosis, the first step is usually clarifying subtype, stage, and whether treatment should start before or after surgery. Paths differ based on what results are still pending, how urgent the next decision feels, and whether genetic counseling could change an operation. You do not need to choose every treatment today. Ask your care team: what must happen this week, what can wait for results, and what decision comes next?
```

### Notes

- 

---

## 2. Subtype testing

| Field | Value |
|-------|-------|
| Portfolio id | `subtype` |
| H1 / title | Do I need my breast cancer subtype results before choosing treatment? |
| Decision label | Whether subtype results should guide treatment choices |
| Slug | `do-i-need-breast-cancer-subtype-results-before-choosing-treatment` |
| Apply to | `BREAST_SUBTYPE_DIRECT_ANSWER` in `lib/content/breast-subtype-entry-cards.ts` |
| Current words | **101** |
| Revised words | **74** |
| Current flags | `near_max` |
| Path | `/questions/do-i-need-breast-cancer-subtype-results-before-choosing-treatment` |

### Current Direct Answer

```text
A biopsy can confirm breast cancer, but doctors often still need subtype results — ER/PR and HER2, and sometimes genomic assays — before choosing systemic options or treatment order.

For many people, those results change which medicine families are discussed and whether treatment should start before or after surgery. Ask whether pending subtype results would change the plan before locking surgery or systemic therapy.

Subtype is tumor biology. It is not the same as germline genetic counseling (BRCA-class testing), which may separately affect surgery choices.

A useful question: “What does my subtype mean for the decisions I need to make next?”
```

### Revised (v1.1)

```text
Often subtype results — ER/PR, HER2, and sometimes genomic assays — should be considered before choosing a breast cancer treatment plan. The importance and timing depend on which decisions are next and what information is still missing. Subtype is tumor biology; it is not the same as germline genetic counseling. Ask: what does my subtype mean for the decisions I need to make next, and should we wait for results before locking a plan?
```

### Notes

- v1.1: choosing a treatment plan (not locking systemic therapy)

---

## 3. Treatment sequencing

| Field | Value |
|-------|-------|
| Portfolio id | `sequencing` |
| H1 / title | Should breast cancer treatment start before or after surgery? |
| Decision label | Whether treatment should start before or after surgery |
| Slug | `should-breast-cancer-treatment-start-before-or-after-surgery` |
| Apply to | `BREAST_SEQUENCING_DIRECT_ANSWER` in `lib/content/breast-sequencing-entry-cards.ts` |
| Current words | **102** |
| Revised words | **67** |
| Current flags | `near_max` `weak_boundary` |
| Path | `/questions/should-breast-cancer-treatment-start-before-or-after-surgery` |

### Current Direct Answer

```text
A core early decision is treatment order: whether medicines start before surgery, or surgery comes first and medicines follow. Doctors call this sequencing (neoadjuvant vs adjuvant).

Some people start systemic therapy before breast cancer surgery; others have surgery first, then medicines afterward. The better order depends on subtype, stage/extent, and what your team is trying to learn or achieve — not which approach sounds “stronger.”

Ask: “For my subtype and stage, should treatment start before or after surgery — and what would change that recommendation?”

If subtype results are still pending, ask whether that information should arrive before locking the treatment order.
```

### Revised (v1.1)

```text
The choice of whether breast cancer treatment starts before or after surgery depends on subtype, stage and extent, and what your team is trying to learn or achieve. Some people start medicines first; others have surgery first, then systemic therapy. Neither order is automatically stronger for everyone. Ask: for my subtype and stage, should treatment start before or after surgery — and what would change that recommendation?
```

### Notes

- 

---

## 4. Surgery choice (lumpectomy vs mastectomy)

| Field | Value |
|-------|-------|
| Portfolio id | `surgery` |
| H1 / title | How should I choose between lumpectomy and mastectomy? |
| Decision label | How to choose between lumpectomy and mastectomy |
| Slug | `how-to-compare-lumpectomy-and-mastectomy` |
| Apply to | `BREAST_SURGERY_DIRECT_ANSWER` in `lib/content/breast-surgery-entry-cards.ts` |
| Current words | **83** |
| Revised words | **72** |
| Current flags | `weak_boundary` |
| Path | `/questions/how-to-compare-lumpectomy-and-mastectomy` |

### Current Direct Answer

```text
For many early breast cancers, lumpectomy plus radiation and mastectomy can offer similar cancer control when you are a candidate for either. The decision often hinges on tumor extent, genetics, radiation willingness, reconstruction preferences, and personal priorities — not on picking the “stronger” surgery.

Ask: “Am I a candidate for both options — and what would change the recommendation either way?”

If genetic counseling or treatment sequencing could change the operation, ask whether those should be clear before you lock a surgery date.
```

### Revised (v1.1)

```text
For many early breast cancers, the choice between lumpectomy plus radiation and mastectomy depends on whether both can offer similar cancer control when you are a candidate for either option. Factors include tumor extent, genetics, radiation willingness, reconstruction preferences, and personal priorities — not which surgery sounds stronger. Neither option is automatically right for every candidate. Ask: am I a candidate for both options, and what would change the recommendation either way?
```

### Notes

- v1.1: when you are a candidate for either option

---

## 5. Second opinion

| Field | Value |
|-------|-------|
| Portfolio id | `second-opinion` |
| H1 / title | Should I get a second opinion before breast cancer surgery or systemic therapy? |
| Decision label | Whether a second opinion may help before surgery or systemic therapy |
| Slug | `when-is-breast-cancer-second-opinion-most-useful` |
| Apply to | `BREAST_SECOND_OPINION_DIRECT_ANSWER` in `lib/content/breast-second-opinion-entry-cards.ts` |
| Current words | **72** |
| Revised words | **78** |
| Current flags | `weak_boundary` |
| Path | `/questions/when-is-breast-cancer-second-opinion-most-useful` |

### Current Direct Answer

```text
A second opinion is especially useful before breast cancer surgery or major systemic therapy when the choice feels irreversible, recommendations conflict, sequencing is unclear, or genetics/reconstruction could change the operation.

It may confirm the current plan, suggest missing information, or discuss another reasonable approach. Confirmation is also a useful outcome.

Ask: “What decision do I want reviewed — and is there time for a focused second opinion before the next irreversible step?”
```

### Revised (v1.1)

```text
Often a second opinion helps before breast cancer surgery or major systemic therapy when the choice feels irreversible, recommendations conflict, sequencing is unclear, or genetics or reconstruction could change the operation. Value depends on timing, what you need clarified, and how complete your records are. It is not always necessary if the plan feels clear and concordant. Ask: what decision do I want reviewed, and is there time for a focused second opinion before the next irreversible step?
```

### Notes

- 

---

## 6. Systemic therapy by subtype

| Field | Value |
|-------|-------|
| Portfolio id | `systemic` |
| H1 / title | How do I choose among systemic therapy options for my breast cancer subtype? |
| Decision label | How to choose among systemic therapy options by subtype |
| Slug | `choose-systemic-therapy-options-breast-cancer` |
| Apply to | `BREAST_SYSTEMIC_DIRECT_ANSWER` in `lib/content/breast-systemic-entry-cards.ts` |
| Current words | **69** |
| Revised words | **74** |
| Current flags | `weak_boundary` |
| Path | `/questions/choose-systemic-therapy-options-breast-cancer` |

### Current Direct Answer

```text
Systemic therapy options for breast cancer depend first on subtype — hormone receptor–positive, HER2-positive, or triple-negative — then on stage, goals, and whether medicines start before or after surgery.

Compare option families and trade-offs for your subtype. Do not start from a ranked list of drug names.

Ask: “For my subtype, which systemic approaches fit — what is each trying to achieve — and what would change the recommendation?”
```

### Revised (v1.1)

```text
Choosing among systemic therapy options for breast cancer usually starts with subtype — hormone receptor–positive, HER2-positive, or triple-negative — then stage, goals, and whether medicines start before or after surgery. Compare option families and trade-offs for your subtype rather than a ranked list of drug names. No single regimen is automatically right for everyone. Ask: for my subtype, which systemic approaches fit, what is each trying to achieve, and what would change the recommendation?
```

### Notes

- 

---

## 7. Genetics / BRCA counseling before surgery

| Field | Value |
|-------|-------|
| Portfolio id | `genetics` |
| H1 / title | Should I talk about genetic testing before breast cancer surgery? |
| Decision label | Whether genetic counseling should happen before surgery |
| Slug | `do-i-need-genetic-counseling-before-breast-cancer-surgery` |
| Apply to | `BREAST_GENETICS_DIRECT_ANSWER` in `lib/content/breast-genetics-entry-cards.ts` |
| Current words | **102** |
| Revised words | **81** |
| Current flags | `near_max` |
| Path | `/questions/do-i-need-genetic-counseling-before-breast-cancer-surgery` |

### Current Direct Answer

```text
Some people should talk about genetic testing before a final breast cancer surgery choice. Genetic counseling helps decide whether inherited-risk testing (for example BRCA-class) is useful — and how a result could change lumpectomy vs mastectomy, or whether surgery on the other breast enters the discussion.

Germline genetics (inherited risk) is not the same as tumor subtype. Ask: “Do I need counseling before surgery — would a result change the operation — and is it safe to wait?”

If counseling is recommended, get a timeline and clarify what can proceed in parallel so you do not lock an irreversible plan too early.
```

### Revised (v1.1)

```text
Before a final breast cancer surgery choice, genetic counseling is often worth discussing when inherited-risk testing could change lumpectomy versus mastectomy, or whether surgery on the other breast enters the discussion. Timing depends on personal and family history, how soon an operation is planned, and whether a result would change the plan. Germline genetics is not the same as tumor subtype testing. Ask: do I need counseling before surgery, would a result change the operation, and is it safe to wait?
```

### Notes

- v1.1: Before a final surgery choice… (more direct S1)

---

## 8. Reconstruction timing & choices

| Field | Value |
|-------|-------|
| Portfolio id | `reconstruction` |
| H1 / title | How do breast reconstruction timing and choices fit into the cancer decision? |
| Decision label | How reconstruction timing and choices fit the cancer plan |
| Slug | `how-do-breast-reconstruction-timing-and-choices-fit` |
| Apply to | `BREAST_RECONSTRUCTION_DIRECT_ANSWER` in `lib/content/breast-reconstruction-entry-cards.ts` |
| Current words | **83** |
| Revised words | **88** |
| Current flags | `weak_boundary` |
| Path | `/questions/how-do-breast-reconstruction-timing-and-choices-fit` |

### Current Direct Answer

```text
Reconstruction after mastectomy can be immediate, delayed, or not chosen at all. The useful question is not “Which result looks best online?” It is “Which timing and method family fit my cancer plan, radiation likelihood, recovery, and personal goals?”

Ask: “Is immediate reconstruction appropriate for me — or should we wait — and how would radiation or systemic therapy change that?”

You can decide later. What matters now is not locking a mastectomy date that ignores reconstruction timing you still need to understand.
```

### Revised (v1.1)

```text
Reconstruction after mastectomy can be immediate, delayed, or not chosen at all — the useful choice depends on cancer plan, radiation likelihood, recovery, and personal goals, not which result looks best online. Timing and method family should fit the cancer treatment plan, not the other way around. You can decide later; what matters now is not locking a date that ignores reconstruction questions you still need answered. Ask: is immediate reconstruction appropriate for me, or should we wait — and how would radiation or systemic therapy change that?
```

### Notes

- v1.1: cancer treatment plan (not oncology path)

---

## 9. Radiation after surgery

| Field | Value |
|-------|-------|
| Portfolio id | `radiation` |
| H1 / title | Will I need radiation after breast cancer surgery? |
| Decision label | Whether radiation is needed after surgery |
| Slug | `how-should-radiation-factor-into-breast-cancer-treatment` |
| Apply to | `BREAST_RADIATION_DIRECT_ANSWER` in `lib/content/breast-radiation-entry-cards.ts` |
| Current words | **101** |
| Revised words | **76** |
| Current flags | `near_max` |
| Path | `/questions/how-should-radiation-factor-into-breast-cancer-treatment` |

### Current Direct Answer

```text
Many people ask whether they will need radiation after breast cancer surgery. After lumpectomy, radiation is often part of the plan. After mastectomy, it is situational — not automatically zero.

The useful question is not “Is radiation the strongest option?” It is “How does radiation fit my surgery path, reconstruction timing, calendar, and goals?”

Ask: “If I choose lumpectomy, what radiation would I need? If I choose mastectomy, am I still likely to need radiation — and how would that change reconstruction?”

Clarify the expected schedule and side effects early enough that surgery and life plans are made with eyes open.
```

### Revised (v1.1)

```text
After breast cancer surgery, radiation is often part of the plan after lumpectomy; after mastectomy it is situational, not automatically zero. Whether and how it fits depends on your surgery path, reconstruction timing, calendar, side effects, and goals. Radiation is not automatically the “strongest” add-on for everyone. Ask: if I choose lumpectomy, what radiation would I need — and if I choose mastectomy, am I still likely to need it, and how would that change reconstruction?
```

### Notes

- 

---

## 10. Care team & center

| Field | Value |
|-------|-------|
| Portfolio id | `care-team` |
| H1 / title | How do I choose a breast cancer care team or center? |
| Decision label | How to choose the right breast cancer care team |
| Slug | `how-do-i-choose-a-breast-cancer-care-team-or-center` |
| Apply to | `BREAST_CARE_TEAM_DIRECT_ANSWER` in `lib/content/breast-care-team-entry-cards.ts` |
| Current words | **85** |
| Revised words | **80** |
| Current flags | `ok` |
| Path | `/questions/how-do-i-choose-a-breast-cancer-care-team-or-center` |

### Current Direct Answer

```text
You do not automatically need a major cancer center. Many people get excellent breast cancer care close to home. Consider another team — or a hybrid setup — when decisions are complex, recommendations conflict, specialized expertise is missing, or coordination feels fragmented.

Ask: “What gap am I trying to fix — expertise, coordination, or confidence — and who will own my next decisions?”

A second opinion reviews a specific fork. A care-team choice decides who coordinates the journey. You may need one, both, or neither.
```

### Revised (v1.1)

```text
Choosing the right breast cancer care team usually means finding the expertise and coordination your situation requires, not simply the most famous hospital. Many people do well close to home; another team or a hybrid setup may help when decisions are complex, recommendations conflict, specialized expertise is missing, or coordination feels fragmented. A bigger name is not automatically better. Ask: what gap am I trying to fix — expertise, coordination, or confidence — and who will own my next decisions?
```

### Notes

- 

---

## 11. Metastatic / Stage IV

| Field | Value |
|-------|-------|
| Portfolio id | `metastatic` |
| H1 / title | What are my options for metastatic / Stage IV breast cancer? |
| Decision label | What to know after metastatic / Stage IV diagnosis |
| Slug | `what-are-my-options-for-metastatic-stage-iv-breast-cancer` |
| Apply to | `BREAST_METASTATIC_DIRECT_ANSWER` in `lib/content/breast-metastatic-entry-cards.ts` |
| Current words | **80** |
| Revised words | **84** |
| Current flags | `ok` |
| Path | `/questions/what-are-my-options-for-metastatic-stage-iv-breast-cancer` |

### Current Direct Answer

```text
Metastatic breast cancer means disease has spread beyond the breast and regional nodes. Decisions usually focus on controlling cancer, easing symptoms, and protecting quality of life — not on a single curative package like many early-stage plans.

Ask: “What is the goal of the next treatment for my subtype — and what trade-offs matter most for my life right now?”

You do not need every answer today. Start with what is known, what is pending, and which decision is time-sensitive.
```

### Revised (v1.1)

```text
After a metastatic or Stage IV breast cancer diagnosis, the first useful step is usually clarifying what treatment is trying to achieve for your subtype — control, symptoms, and quality of life — not assuming care is ending. Goals and options differ by subtype, prior treatments, symptoms, and priorities for daily life. You do not need to settle every future decision today. Ask: what is the goal of the next treatment for my subtype, and what trade-offs matter most for my life right now?
```

### Notes

- 

---

## 12. Recurrence

| Field | Value |
|-------|-------|
| Portfolio id | `recurrence` |
| H1 / title | What should I sort out if breast cancer comes back? |
| Decision label | How to make decisions after recurrence |
| Slug | `what-should-i-sort-out-if-breast-cancer-comes-back` |
| Apply to | `BREAST_RECURRENCE_DIRECT_ANSWER` in `lib/content/breast-recurrence-entry-cards.ts` |
| Current words | **83** |
| Revised words | **72** |
| Current flags | `ok` |
| Path | `/questions/what-should-i-sort-out-if-breast-cancer-comes-back` |

### Current Direct Answer

```text
If breast cancer comes back after treatment, the first job is to understand what changed — where it returned, how long after treatment, and whether subtype or other biology should be re-checked.

Recurrence does not automatically mean previous care failed or that options have ended. Ask: “Given where cancer returned and what we already used, which option families belong in the discussion now?”

You do not need every answer today. Start with what is known, what is pending, and which decision is time-sensitive.
```

### Revised (v1.1)

```text
If breast cancer comes back, the next options depend on where it returned, how long after treatment, prior therapies, and whether subtype or other biology should be re-checked. The next plan is usually a reassessment — not simply repeating the last treatment. Recurrence does not mean previous care failed or that options have ended. Ask: given where cancer returned and what we already used, which option families belong in the discussion now?
```

### Notes

- 

---

## 13. Quality of life & supportive care

| Field | Value |
|-------|-------|
| Portfolio id | `quality-of-life` |
| H1 / title | How should quality of life factor into breast cancer decisions? |
| Decision label | How to balance treatment goals with the life you want to protect |
| Slug | `how-should-quality-of-life-factor-into-breast-cancer-decisions` |
| Apply to | `BREAST_QOL_DIRECT_ANSWER` in `lib/content/breast-qol-entry-cards.ts` |
| Current words | **70** |
| Revised words | **75** |
| Current flags | `ok` |
| Path | `/questions/how-should-quality-of-life-factor-into-breast-cancer-decisions` |

### Current Direct Answer

```text
Breast cancer decisions include both cancer control and the life you need to protect while receiving care — energy, work, family roles, comfort, and body image all belong in the conversation.

Ask: “How can this plan support both my cancer goals and the life I need to protect right now?”

Supportive care can run alongside active treatment. You do not need to wait until symptoms become severe to speak up.
```

### Revised (v1.1)

```text
Often quality of life should shape breast cancer decisions because benefit, burden, energy, work, family roles, comfort, and body image belong in the same plan as cancer control. How much weight it carries depends on symptoms, side effects, treatment intensity, and personal priorities. Focusing more on symptom support is not the same as giving up care. Ask: how can this plan support both my cancer goals and the life I need to protect right now?
```

### Notes

- 

---

## 14. Practical fit (pointer)

| Field | Value |
|-------|-------|
| Portfolio id | `practical-fit` |
| H1 / title | Can my breast cancer treatment plan work with my real life? |
| Decision label | Whether a treatment plan can work with real life |
| Slug | `can-my-breast-cancer-treatment-plan-work-with-my-real-life` |
| Apply to | `BREAST_PRACTICAL_FIT_DIRECT_ANSWER` in `lib/content/breast-practical-fit-entry-cards.ts` |
| Current words | **87** |
| Revised words | **58** |
| Current flags | `weak_boundary` |
| Path | `/questions/can-my-breast-cancer-treatment-plan-work-with-my-real-life` |

### Current Direct Answer

```text
A good breast cancer treatment plan needs to fit both your medical situation and your real life. Cost, travel, time off work, radiation schedules, and caregiver support belong in the conversation — they do not replace medical advice.

Ask: “Is this plan workable for my life — and if not, what can we adjust?”

This page is a pointer, not a price list. Next, open Care Team (where care happens), Systemic options (which plan fits a real week), or Quality of Life (whether the burden is sustainable).
```

### Revised (v1.1)

```text
A breast cancer treatment plan is easier to follow when it fits real life — including travel, time off work, radiation schedules, cost, and support. Visit burden, caregiver help, and whether care can be coordinated across sites often decide what to adjust. Ask: is this plan workable for my life — and if not, what can we change?
```

### Notes

- v1.1: less disclaimer; what to adjust / what can we change

---

## 15. Clinical trial

| Field | Value |
|-------|-------|
| Portfolio id | `clinical-trial` |
| H1 / title | Should I consider a clinical trial for breast cancer? |
| Decision label | Whether a clinical trial should be part of the discussion |
| Slug | `should-i-consider-a-clinical-trial-for-breast-cancer` |
| Apply to | `BREAST_CLINICAL_TRIAL_DIRECT_ANSWER` in `lib/content/breast-clinical-trial-entry-cards.ts` |
| Current words | **73** |
| Revised words | **83** |
| Current flags | `ok` |
| Path | `/questions/should-i-consider-a-clinical-trial-for-breast-cancer` |

### Current Direct Answer

```text
A clinical trial is another option to evaluate alongside standard breast cancer care — not automatically better, and not only a last resort.

Ask: “Is there a trial that fits my subtype and situation — and how does it compare with standard options on goal, evidence, and daily-life impact?”

Discuss trials early enough that you are not locked out by timing. Not qualifying for one study does not mean other options have ended.
```

### Revised (v1.1)

```text
A clinical trial may be worth discussing for breast cancer alongside standard care — before starting treatment, while comparing options, or when the plan is changing. Fit depends on subtype, stage, prior treatments, eligibility, and how a specific trial compares with standard options. A trial is not automatically better than standard treatment, and not only a last resort. Ask: is there a trial that fits my subtype and situation, and how does it compare with standard options on goal, evidence, and daily life?
```

### Notes

- 

---

## 16. Long-term monitoring & follow-up

| Field | Value |
|-------|-------|
| Portfolio id | `follow-up` |
| H1 / title | How do I monitor my health after breast cancer treatment? |
| Decision label | How to monitor health after treatment |
| Slug | `how-do-i-monitor-my-health-after-breast-cancer-treatment` |
| Apply to | `BREAST_FOLLOW_UP_DIRECT_ANSWER` in `lib/content/breast-follow-up-entry-cards.ts` |
| Current words | **76** |
| Revised words | **80** |
| Current flags | `ok` |
| Path | `/questions/how-do-i-monitor-my-health-after-breast-cancer-treatment` |

### Current Direct Answer

```text
Finishing active breast cancer treatment is an important milestone, but care does not simply stop. Follow-up helps monitor for possible changes, manage long-term effects, support recovery, and guide ongoing medicines such as endocrine therapy when relevant.

Ask: “What is my follow-up schedule, which symptoms should trigger a call, and who do I contact if something changes?”

The goal is not to live waiting for bad news. The goal is a clear plan you can act on.
```

### Revised (v1.1)

```text
After breast cancer treatment, follow-up usually means a personalized plan for visits, imaging, symptom watch, long-term effects, and ongoing medicines such as endocrine therapy when relevant — not waiting endlessly for bad news. What you need depends on cancer type and stage, treatments received, recurrence risk, and current health. Not every change on a scan means the same next step. Ask: what is my follow-up schedule, which symptoms should trigger a call, and who do I contact if something changes?
```

### Notes

- 

---

## 17. Care abroad / another city

| Field | Value |
|-------|-------|
| Portfolio id | `global-care` |
| H1 / title | When should I consider breast cancer care abroad? |
| Decision label | When to consider breast cancer care abroad |
| Slug | `when-to-consider-breast-cancer-care-abroad` |
| Apply to | `BREAST_GLOBAL_CARE_DIRECT_ANSWER` in `lib/content/breast-global-care-entry-cards.ts` |
| Current words | **136** |
| Revised words | **72** |
| Current flags | `TOO_LONG (>110)` `LIST_FORMAT` |
| Path | `/questions/when-to-consider-breast-cancer-care-abroad` |

### Current Direct Answer

```text
People consider breast cancer care in another city or country for one or more of these reasons — not because a hospital or country is simply more famous:

- Access where you are is limited (specialists, wait times, or coordinated review)
- You have already seen more than one team and still lack confidence in the plan
- You do not accept the current recommendation and want an outside review
- You need coordinated international-patient support (records, language, written plan)
- Cost or coverage makes the local path hard to continue
- A technique, trial, or treatment path is not available locally

Name your reason in one sentence. When safe, try remote review before travel. Ask the receiving center’s international desk for a written next-step plan. Desperation alone is not a clinical reason to book flights.
```

### Revised (v1.1)

```text
Sometimes people consider breast cancer care in another city or country when a named capability, second review, or support path is hard to get locally. Whether travel helps depends on the specific gap, fitness for travel, record quality, follow-up after return, and total cost. Moving for a famous name alone usually does not improve care. Ask: is there a capability abroad that changes my options, and can remote review answer that first?
```

### Notes

- 

---

## Apply checklist (after revisions approved)

- [x] Update each `BREAST_*_DIRECT_ANSWER` constant listed above
- [x] Sync any matching gloss strings if they duplicate the DA
- [x] Reseed / sync `data/store.json`
- [ ] Spot-check 3 pages: Citation Block + JSON-LD `acceptedAnswer` match
- [x] Word counts all in 40–90 (≤110)
