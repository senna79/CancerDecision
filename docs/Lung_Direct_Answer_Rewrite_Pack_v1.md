# Lung Cancer — Direct Answer Rewrite Pack

**Standard:** [`Cancer_Next_Step_Direct_Answer_Standard_v1.0.md`](./Cancer_Next_Step_Direct_Answer_Standard_v1.0.md)  
**Purpose:** Edit all 15 lung portfolio Direct Answers in one pass, then apply into `lib/db/seed-data.ts` (and `GLOBAL_CARE_DIRECT_ANSWER_SUMMARY` for care abroad) + reseed store.  
**Extracted:** from `data/store.json` · 2026-07-27  
**Status:** Revised (v1.1 language polish) applied to seed · 2026-07-28

## How to use

1. For each Entry, rewrite under **Revised (v1.0)**.
2. Keep **3–4 sentences, 40–90 words** (max 110). Continuous prose — no lists.
3. Structure: direct answer (H1 keywords) → factors → boundary → next ask.
4. When the pack is approved, apply Revised text into seed (and matching content constants if any).

## Scoreboard (current)

| # | Portfolio id | Words | Flags | Slug |
|---|--------------|------:|-------|------|
| 1 | newly-diagnosed | 71 | ok | `what-decisions-matter-most-after-new-lung-cancer-diagnosis` |
| 2 | second-opinion | 64 | ok | `should-i-get-second-opinion-after-lung-cancer-diagnosis` |
| 3 | biomarker | 75 | ok | `do-i-need-biomarker-testing-before-lung-cancer-treatment` |
| 4 | treatment-comparison | 69 | ok | `how-to-compare-surgery-and-systemic-therapy-lung-cancer` |
| 5 | care-center | 77 | ok | `do-i-need-different-lung-cancer-center-or-specialized-expertise` |
| 6 | global-care | 72 | ok | `when-to-consider-lung-cancer-care-abroad` |
| 7 | stage-iv | 76 | ok | `how-to-choose-treatment-options-for-stage-iv-lung-cancer` |
| 8 | clinical-trial | 69 | ok | `should-i-consider-a-clinical-trial-for-lung-cancer` |
| 9 | recurrence | 61 | ok | `what-are-my-options-if-lung-cancer-comes-back` |
| 10 | treatment-progression | 66 | ok | `what-are-my-options-if-lung-cancer-treatment-no-longer-working` |
| 11 | brain-mets | 70 | ok | `what-are-my-options-if-lung-cancer-spreads-to-the-brain` |
| 12 | surgery | 78 | ok | `should-surgery-be-part-of-my-lung-cancer-treatment-plan` |
| 13 | quality-of-life | 74 | ok | `how-should-quality-of-life-factor-into-lung-cancer-decisions` |
| 14 | follow-up | 67 | ok | `how-do-i-monitor-my-health-after-lung-cancer-treatment` |
| 15 | treatment-feasibility | 70 | ok | `can-my-lung-cancer-treatment-plan-work-with-my-real-life` |

## Spec reminder (copy while editing)

1. Direct answer with H1 keywords (Often / Sometimes / Depends / For many people…)  
2. Decision factors  
3. Boundary — when it may not change the plan  
4. Next question to ask the care team  

Forbidden: empty openers, dictionary definitions, disclaimers, brand, treatment orders, numbered lists.

---

## 1. Newly diagnosed

| Field | Value |
|-------|-------|
| Portfolio id | `newly-diagnosed` |
| H1 / title | I Was Just Diagnosed With Lung Cancer. What Happens Next? |
| Decision label | What happens next after a new diagnosis |
| Slug | `what-decisions-matter-most-after-new-lung-cancer-diagnosis` |
| Current words | **71** |
| Flags | `ok`|
| Path | `/questions/what-decisions-matter-most-after-new-lung-cancer-diagnosis` |

### Current Direct Answer

```text
After a lung cancer diagnosis, you do not need to know every answer immediately.

The first steps are to understand what type of lung cancer you have, what stage it is, whether more information is needed before treatment discussions, and what to ask your care team next.

A good treatment decision starts with understanding your cancer — not rushing into a choice. You are not lost; you are at the start of a journey.
```

### Revised (v1.0)

```text
After a new lung cancer diagnosis, the first step is usually clarifying the cancer type, stage, and information that could change treatment decisions. Paths differ based on how complete staging is, whether biomarker results could change options, and how urgent the next decision feels. Not every pending test must delay every conversation. Ask your care team: what do we already know, what are we waiting for, and what decision comes next?
```

### Notes

- v1.1: Type-2 opener — After… first step is usually…

---

## 2. Second opinion

| Field | Value |
|-------|-------|
| Portfolio id | `second-opinion` |
| H1 / title | Should I Get a Second Opinion After a Lung Cancer Diagnosis? |
| Decision label | Whether a second opinion may help |
| Slug | `should-i-get-second-opinion-after-lung-cancer-diagnosis` |
| Current words | **64** |
| Flags | `ok`|
| Path | `/questions/should-i-get-second-opinion-after-lung-cancer-diagnosis` |

### Current Direct Answer

```text
A second opinion is another specialist review of your diagnosis and options. It is often about confidence and clarity — not about proving your first doctor wrong.

It may confirm a plan, surface alternatives, or show where more information is still needed.
```

### Revised (v1.0)

```text
Often a second opinion helps before a major or hard-to-reverse lung cancer decision when diagnosis, stage, or options still feel uncertain. Value depends on timing, how complete your records are, and whether you need confirmation, more options, or gap-finding. It is not always necessary if the plan feels clear and records support the recommendation. Ask: what specifically should another review clarify before we decide?
```

### Notes

- 

---

## 3. Biomarker decision

| Field | Value |
|-------|-------|
| Portfolio id | `biomarker` |
| H1 / title | Do I Need Biomarker Testing Before Choosing Lung Cancer Treatment? |
| Decision label | Whether additional information may change treatment choices |
| Slug | `do-i-need-biomarker-testing-before-lung-cancer-treatment` |
| Current words | **75** |
| Flags | `ok`|
| Path | `/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment` |

### Current Direct Answer

```text
Biomarker testing looks for features of your cancer that may affect which treatments your care team discusses. It helps make sure important information is available before treatment decisions are made.

It does not decide your treatment by itself.
```

### Revised (v1.0)

```text
Often biomarker testing should be considered before lung cancer treatment decisions when results could change which options your team discusses. The importance and timing of testing depend on cancer type, stage, treatment options being considered, and what information is still missing. It may not change the plan if results are already complete or would not alter the next step. Ask: which tests matter for my cancer, and should we wait for results before choosing treatment?
```

### Notes

- v1.1: S2 importance/timing (not “some people don’t need”)

---

## 4. Treatment comparison

| Field | Value |
|-------|-------|
| Portfolio id | `treatment-comparison` |
| H1 / title | How Should I Compare Lung Cancer Treatment Options? |
| Decision label | How to compare treatment choices |
| Slug | `how-to-compare-surgery-and-systemic-therapy-lung-cancer` |
| Current words | **69** |
| Flags | `ok`|
| Path | `/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer` |

### Current Direct Answer

```text
Comparing lung cancer treatment options is not about finding one “best” treatment. Compare each option by goal, expected benefit, trade-offs, what it requires, and how it fits your priorities.

It does not replace a conversation with your care team.
```

### Revised (v1.0)

```text
The choice among lung cancer treatment options depends on cancer type and stage, biomarker information when relevant, overall health, and what you want treatment to achieve. Surgery, radiation, systemic therapy, or trials may be alone, combined, or sequenced for different reasons. No single option is automatically right for everyone. Ask: why this plan fits my situation, and how do the realistic alternatives compare for benefit, risk, and daily life?
```

### Notes

- 

---

## 5. Care center & expertise

| Field | Value |
|-------|-------|
| Portfolio id | `care-center` |
| H1 / title | How Do I Choose the Right Lung Cancer Care Team? |
| Decision label | How to choose the right lung cancer care team |
| Slug | `do-i-need-different-lung-cancer-center-or-specialized-expertise` |
| Current words | **77** |
| Flags | `ok`|
| Path | `/questions/do-i-need-different-lung-cancer-center-or-specialized-expertise` |

### Current Direct Answer

```text
Choosing lung cancer care is not only about finding a famous hospital. It is about finding a team with the right expertise, coordination, access to needed services, and clear communication.

Many people receive excellent care close to home. A specialized team may help when decisions are complex, local experience feels limited, or you need multidisciplinary review or trial access. Some patients combine specialist planning with local treatment.

The best care team is the one that fits your cancer, your situation, and your goals — not the one with the biggest name.
```

### Revised (v1.0)

```text
Choosing the right lung cancer care team usually means finding the expertise and coordination your situation requires, not simply the most famous hospital. A specialized team may help when decisions are complex, local experience feels limited, or you need multidisciplinary review or trial access; many people still do well close to home. A bigger name is not automatically better. Ask: what expertise gap am I trying to close, and how would follow-up work with my local team?
```

### Notes

- v1.1: Choosing… usually means… (direct How-to answer)

---

## 6. Care abroad / another city

| Field | Value |
|-------|-------|
| Portfolio id | `global-care` |
| H1 / title | When should I consider lung cancer care abroad? |
| Decision label | When to consider lung cancer care abroad |
| Slug | `when-to-consider-lung-cancer-care-abroad` |
| Current words | **72** |
| Flags | `ok`|
| Path | `/questions/when-to-consider-lung-cancer-care-abroad` |

### Current Direct Answer

```text
People consider lung cancer care in another city or country for one or more of these reasons — not because a hospital or country is simply more famous:

- Access where you are is limited (specialists, wait times, or coordinated review)
- You have already seen more than one team and still lack confidence in the plan
- You do not accept the current recommendation and want an outside review
- You need coordinated international-patient support (records, language, written plan)
- Cost or coverage makes the local path hard to continue
- A technique, trial, or treatment path is not available locally

Name your reason in one sentence. When safe, try remote review before travel. Ask the receiving center’s international desk for a written next-step plan. Desperation alone is not a clinical reason to book flights.
```

### Revised (v1.0)

```text
Sometimes people consider lung cancer care in another city or country when a named capability, second review, or support path is hard to get locally. Whether travel helps depends on the specific gap, fitness for travel, record quality, follow-up after return, and total cost. Moving for a famous name alone usually does not improve care. Ask: is there a capability abroad that changes my options, and can remote review answer that first?
```

### Notes

- 

---

## 7. Stage IV / advanced

| Field | Value |
|-------|-------|
| Portfolio id | `stage-iv` |
| H1 / title | What Should I Know After a Stage IV Lung Cancer Diagnosis? |
| Decision label | What to know after a Stage IV diagnosis |
| Slug | `how-to-choose-treatment-options-for-stage-iv-lung-cancer` |
| Current words | **76** |
| Flags | `ok`|
| Path | `/questions/how-to-choose-treatment-options-for-stage-iv-lung-cancer` |

### Current Direct Answer

```text
A Stage IV diagnosis can feel overwhelming. You do not need to answer everything today.

First understand what Stage IV means in your situation, clarify what treatment may aim for with your care team, make sure key information is available, and prepare for the next conversation.

A Stage IV diagnosis changes the conversation. It does not end the conversation. Different treatment goals do not mean less care — they mean care designed around your situation.
```

### Revised (v1.0)

```text
After a Stage IV lung cancer diagnosis, the first useful step is usually clarifying what Stage IV means in your case, what treatment is trying to achieve, and which information still matters before the next choice. Goals and options differ by cancer type, biomarkers, symptoms, and priorities for daily life. You do not need to settle every future decision today. Ask: what is the goal of the treatment we are discussing, and what decision comes next?
```

### Notes

- v1.1: what treatment is trying to achieve

---

## 8. Clinical trial

| Field | Value |
|-------|-------|
| Portfolio id | `clinical-trial` |
| H1 / title | Should I Consider a Clinical Trial for Lung Cancer? |
| Decision label | Whether a clinical trial should be part of your treatment discussion |
| Slug | `should-i-consider-a-clinical-trial-for-lung-cancer` |
| Current words | **69** |
| Flags | `ok`|
| Path | `/questions/should-i-consider-a-clinical-trial-for-lung-cancer` |

### Current Direct Answer

```text
A clinical trial may be worth discussing when you want to understand additional treatment options, especially if your situation is complex, your treatment choices are changing, or you want to explore approaches being studied by researchers.

A clinical trial is not automatically better than standard treatment, and considering one does not mean giving up other options. Whether a trial is appropriate depends on your cancer situation, available choices, possible benefits and risks, and your personal goals.

A useful question to ask your care team is: “Are there clinical trials that may be relevant to my situation, and how would they compare with my current options?”
```

### Revised (v1.0)

```text
A clinical trial may be worth discussing for lung cancer before starting treatment, while comparing options, or when the plan is changing. Fit depends on cancer type and stage, biomarkers, prior treatments, eligibility, and how a specific trial compares with standard care. A trial is not automatically better than standard treatment. Ask: is there a trial that fits my situation, and how does it compare with the standard options?
```

### Notes

- v1.1: A clinical trial may… (stronger Should-I answer)

---

## 9. Recurrence

| Field | Value |
|-------|-------|
| Portfolio id | `recurrence` |
| H1 / title | What Are My Options If Lung Cancer Comes Back? |
| Decision label | How to make decisions after recurrence |
| Slug | `what-are-my-options-if-lung-cancer-comes-back` |
| Current words | **61** |
| Flags | `ok`|
| Path | `/questions/what-are-my-options-if-lung-cancer-comes-back` |

### Current Direct Answer

```text
If lung cancer comes back, the next step is usually not simply repeating the previous treatment. Doctors typically reassess the current situation, including where the cancer has returned, previous treatments, new information about the cancer, and your personal goals.

Options after recurrence may depend on factors such as the location of recurrence, timing, previous treatment response, biomarker information, overall health, and what matters most to you.

A useful first question for your care team is: “What has changed, what options do I have now, and what information should guide my next decision?”
```

### Revised (v1.0)

```text
If lung cancer comes back, the next options depend on where it returned, how much is present, prior treatments, biomarkers, and your health and goals. The next plan is usually a reassessment — not simply repeating the last treatment. Recurrence does not mean there are no options left. Ask: what information do we need now to understand my next realistic options?
```

### Notes

- 

---

## 10. Treatment progression

| Field | Value |
|-------|-------|
| Portfolio id | `treatment-progression` |
| H1 / title | What Are My Options If My Lung Cancer Treatment Is No Longer Working? |
| Decision label | What to do when the current treatment is no longer achieving its goal |
| Slug | `what-are-my-options-if-lung-cancer-treatment-no-longer-working` |
| Current words | **66** |
| Flags | `ok`|
| Path | `/questions/what-are-my-options-if-lung-cancer-treatment-no-longer-working` |

### Current Direct Answer

```text
If lung cancer treatment is no longer working as expected, the next step is usually to reassess the situation rather than assume that there are no options left.

Doctors may review what has changed, how the cancer is responding, what treatments have already been used, whether additional information is needed, and what matters most to you.

Depending on the situation, the next decision may involve comparing different treatment approaches, reviewing new information, considering another opinion, or discussing clinical trials.

A useful question to ask your care team is: “What has changed, what options do I have now, and how should we decide the next step?”
```

### Revised (v1.0)

```text
When lung cancer treatment is no longer working as expected, the next step is usually reassessing what changed and which options remain realistic. Choices depend on prior therapy, how the cancer changed, biomarkers, urgency, and goals for control versus symptom focus. This is a new decision point, not proof that nothing else can help. Ask: what information do we need now to choose the next option?
```

### Notes

- v1.1: next option (not next best)

---

## 11. Brain metastases

| Field | Value |
|-------|-------|
| Portfolio id | `brain-mets` |
| H1 / title | What Are My Options If Lung Cancer Spreads to the Brain? |
| Decision label | What to do when lung cancer is found in the brain |
| Slug | `what-are-my-options-if-lung-cancer-spreads-to-the-brain` |
| Current words | **70** |
| Flags | `ok`|
| Path | `/questions/what-are-my-options-if-lung-cancer-spreads-to-the-brain` |

### Current Direct Answer

```text
When lung cancer is found in the brain, the next step is not one standard plan for everyone. Doctors usually look at how many lesions are present, whether you have symptoms, how much cancer is active elsewhere, prior treatments, and your goals — then compare local brain-directed options, systemic therapy, clinical trials, and supportive care.

Brain involvement changes the conversation. It does not automatically mean there are no options left.

A useful first question for your care team is: “What is the goal for these brain findings, which options are realistic for me, and what information should guide that choice?”
```

### Revised (v1.0)

```text
When lung cancer spreads to the brain, the next plan depends on how many lesions are present, symptoms, disease outside the brain, prior treatments, and your goals. Local brain-directed options, systemic therapy, trials, and supportive care may be combined differently for different people. Brain involvement changes the conversation; it does not automatically end options. Ask: what is the goal for these brain findings, and which options are realistic for me?
```

### Notes

- 

---

## 12. Surgery decision

| Field | Value |
|-------|-------|
| Portfolio id | `surgery` |
| H1 / title | Should Surgery Be Part of My Lung Cancer Treatment Plan? |
| Decision label | Whether surgery should be part of your treatment plan |
| Slug | `should-surgery-be-part-of-my-lung-cancer-treatment-plan` |
| Current words | **78** |
| Flags | `ok`|
| Path | `/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan` |

### Current Direct Answer

```text
Surgery may be an option for some people with lung cancer, but whether it should be part of your treatment plan depends on many factors, including the type and stage of cancer, where the cancer is located, your overall health, and your treatment goals.

Surgery is not automatically the best choice for everyone, and it is usually considered alongside other approaches that may include radiation, systemic treatments, or observation depending on the situation.

A useful question to ask your care team is: “Is surgery appropriate for my situation, and how does it compare with my other available options?”
```

### Revised (v1.0)

```text
Surgery may be part of a lung cancer treatment plan when the cancer can be safely removed and removal may offer meaningful benefit given stage, location, and overall health. Whether it belongs in your plan also depends on alternatives, possible treatment before or after surgery, and recovery capacity. Surgery is not the right choice for everyone who has a tumor. Ask: can surgery meaningfully help in my situation, and how does it compare with the other realistic options?
```

### Notes

- v1.1: Surgery may be part… simplified S1

---

## 13. Quality of life & supportive care

| Field | Value |
|-------|-------|
| Portfolio id | `quality-of-life` |
| H1 / title | How Do I Balance Lung Cancer Treatment and Quality of Life? |
| Decision label | How to balance treatment goals with the life you want to protect |
| Slug | `how-should-quality-of-life-factor-into-lung-cancer-decisions` |
| Current words | **74** |
| Flags | `ok`|
| Path | `/questions/how-should-quality-of-life-factor-into-lung-cancer-decisions` |

### Current Direct Answer

```text
Quality of life is an important part of lung cancer decisions because treatment choices involve more than medical outcomes alone. Patients and care teams often consider treatment goals, daily activities, possible benefits, potential burdens, and personal priorities.

The best decision is not always the option with the most treatment or the least treatment. It is the option that best fits your medical situation and what matters most to you.

A useful question to ask your care team is: “How might each option affect both my health and the life I want to maintain?”
```

### Revised (v1.0)

```text
Often quality of life should shape lung cancer decisions because benefit, burden, independence, and what matters day to day belong in the same plan as cancer control. How much weight it carries depends on symptoms, side effects, treatment intensity, and personal priorities. Focusing more on symptom support is not the same as giving up care. Ask: how can this plan support both my cancer goals and the life goals that matter most to me?
```

### Notes

- v1.1: Focusing more on symptom support…

---

## 14. Long-term monitoring & follow-up

| Field | Value |
|-------|-------|
| Portfolio id | `follow-up` |
| H1 / title | How Do I Monitor My Health After Lung Cancer Treatment? |
| Decision label | How to monitor health and rebuild confidence after treatment |
| Slug | `how-do-i-monitor-my-health-after-lung-cancer-treatment` |
| Current words | **67** |
| Flags | `ok`|
| Path | `/questions/how-do-i-monitor-my-health-after-lung-cancer-treatment` |

### Current Direct Answer

```text
Finishing treatment is an important milestone, but cancer care does not simply stop. Follow-up care helps you and your medical team monitor for possible changes, manage long-term effects of treatment, address new symptoms, and support your health after cancer.

A follow-up plan is personalized based on your cancer type and stage, treatments you received, your risk of recurrence, and your current health. It may include appointments, imaging tests, symptom discussions, and long-term health management.

The goal is not to spend your life waiting for bad news. The goal is to have a clear plan: “What should I monitor, when should I contact my team, and what happens if something changes?”
```

### Revised (v1.0)

```text
After lung cancer treatment, follow-up usually means a personalized plan for visits, imaging, symptom watch, and long-term effects — not waiting endlessly for bad news. What you need depends on cancer type and stage, treatments received, recurrence risk, and current health. Not every change on a scan means the same next step. Ask: what should I monitor, when should I call, and what happens if something changes?
```

### Notes

- 

---

## 15. Practical fit (pointer)

| Field | Value |
|-------|-------|
| Portfolio id | `treatment-feasibility` |
| H1 / title | Can My Lung Cancer Treatment Plan Work With My Real Life? |
| Decision label | Whether a treatment plan can work with real life |
| Slug | `can-my-lung-cancer-treatment-plan-work-with-my-real-life` |
| Current words | **70** |
| Flags | `ok`|
| Path | `/questions/can-my-lung-cancer-treatment-plan-work-with-my-real-life` |

### Current Direct Answer

```text
A good treatment plan needs to fit both your medical situation and your real life. Cost, travel, time, and support do not replace medical advice — but they belong in the conversation, so the plan you choose is one you can realistically follow.

This page points you to the decisions where practical fit usually matters most: your care team setup, treatment comparison, and quality-of-life tradeoffs.

Ask: “What will a normal treatment week look like — and if this becomes too hard, what can we adjust?”
```

### Revised (v1.0)

```text
A lung cancer treatment plan is easier to follow when it fits real life — including travel, time, cost, and support. What to adjust depends on visit burden, caregiver help, and whether care can be coordinated across sites. Practical limits do not replace medical advice, but they belong in the conversation. Ask: what will a normal treatment week look like, and what can we change if it becomes too hard?
```

### Notes

- v1.1: easier to follow when it fits real life

---

## Apply checklist (after revisions approved)

- [x] Update inline `summary` strings in `lib/db/seed-data.ts` for each lung slug  
- [x] Update `GLOBAL_CARE_DIRECT_ANSWER_SUMMARY` if care-abroad text lives there  
- [x] Reseed / sync `data/store.json`  
- [ ] Spot-check 3 pages: Citation Block + JSON-LD `acceptedAnswer` match  
- [x] Word counts all in 40–90 (≤110)

