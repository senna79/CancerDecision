# Prostate Cancer — Direct Answer Rewrite Pack

**Standard:** [`Cancer_Next_Step_Direct_Answer_Standard_v1.0.md`](./Cancer_Next_Step_Direct_Answer_Standard_v1.0.md) (plus lung/breast v1.1 polish)
**Also applied:** cancer-keyword binding for Entry titles, hang-card H3s, and continue chips
**Status:** Revised (v1.0) applied to seed · 2026-07-28

## Scoreboard

| # | Portfolio id | Cur | Rev | Slug |
|---|--------------|----:|----:|------|
| 1 | newly-diagnosed | 107 | 73 | `what-decisions-matter-most-after-new-prostate-cancer-diagnosis` |
| 2 | surveillance | 118 | 67 | `is-active-surveillance-reasonable-for-prostate-cancer` |
| 3 | second-opinion | 75 | 79 | `should-i-get-second-opinion-for-prostate-cancer` |
| 4 | treatment-compare | 40 | 71 | `how-to-compare-surgery-and-radiation-for-prostate-cancer` |
| 5 | costs | 25 | 68 | `how-prostate-cancer-treatment-costs-differ` |
| 6 | care-team | 34 | 66 | `when-prostate-recommendations-differ-across-specialists` |
| 7 | global-care | 25 | 77 | `evaluate-treatment-abroad-for-prostate-cancer` |

---

## 1. newly-diagnosed

| Field | Value |
|-------|-------|
| Portfolio id | `newly-diagnosed` |
| H1 / title | What decisions matter most after a new prostate cancer diagnosis? |
| Decision label | What happens next after a new diagnosis |
| Slug | `what-decisions-matter-most-after-new-prostate-cancer-diagnosis` |
| Apply to | `PROSTATE_NEWLY_DIAGNOSED_DIRECT_ANSWER` in `lib/content/prostate-newly-diagnosed-entry-cards.ts` |
| Revised words | **73** |
| Path | `/questions/what-decisions-matter-most-after-new-prostate-cancer-diagnosis` |

### Prior Direct Answer

```text
After a new prostate cancer diagnosis, you usually do not need to choose surgery or radiation on day one.

In the first days and weeks, the focus is usually:
1. Clarify your risk group (PSA, Grade Group / Gleason, MRI and staging)
2. Know what results are still pending
3. Ask whether active surveillance could be reasonable for someone like you
4. Prepare questions for your care team

Ask what must happen this week, what can wait for results, and what would change monitoring versus treatment. Keep your key reports together.

Your next step is risk clarity and the first-path fork — not locking every treatment today.
```

### Revised (v1.0)

```text
After a new prostate cancer diagnosis, the first step is usually clarifying your risk group, what results are still pending, and whether active surveillance could be reasonable. Paths differ based on PSA, Grade Group, imaging, how urgent the next decision feels, and your priorities. You do not need to choose surgery or radiation today. Ask your care team: what must happen this week, what can wait for results, and what decision comes next?
```

---

## 2. surveillance

| Field | Value |
|-------|-------|
| Portfolio id | `surveillance` |
| H1 / title | Is active surveillance a reasonable option for prostate cancer? |
| Decision label | Whether active surveillance is a reasonable first path |
| Slug | `is-active-surveillance-reasonable-for-prostate-cancer` |
| Apply to | `PROSTATE_SURVEILLANCE_DIRECT_ANSWER` in `lib/content/prostate-surveillance-entry-cards.ts` |
| Revised words | **67** |
| Path | `/questions/is-active-surveillance-reasonable-for-prostate-cancer` |

### Prior Direct Answer

```text
Active surveillance can be a reasonable option for selected lower-risk prostate cancers — and for some favorable intermediate situations, depending on findings.

It means structured monitoring (PSA, exams, and usually MRI or repeat biopsy on a schedule) to defer treatment side effects while watching for change. It is not the same as ignoring the cancer.

Before choosing it, ask:
1. Is surveillance appropriate for my risk group?
2. What is the exact follow-up schedule?
3. What PSA, MRI, or biopsy changes would end surveillance?
4. How do I feel about living with monitoring uncertainty?

If surveillance is not appropriate — or you prefer treatment now — the next step is usually comparing surgery and radiation for your situation.
```

### Revised (v1.0)

```text
Often active surveillance is a reasonable option for selected lower-risk prostate cancers — and sometimes for favorable intermediate situations, depending on findings. It means structured monitoring to defer treatment side effects while watching for change, not ignoring the cancer. It is not automatically right for every early diagnosis. Ask: is surveillance appropriate for my risk group, what is the follow-up schedule, and what would trigger treatment instead?
```

---

## 3. second-opinion

| Field | Value |
|-------|-------|
| Portfolio id | `second-opinion` |
| H1 / title | Should I get a second opinion for prostate cancer? |
| Decision label | Whether a second opinion may help |
| Slug | `should-i-get-second-opinion-for-prostate-cancer` |
| Apply to | `PROSTATE_SECOND_OPINION_DIRECT_ANSWER` in `lib/content/prostate-second-opinion-entry-cards.ts` |
| Revised words | **79** |
| Path | `/questions/should-i-get-second-opinion-for-prostate-cancer` |

### Prior Direct Answer

```text
A second opinion is especially useful before locking active surveillance or irreversible prostate cancer treatment when recommendations diverge, risk features are borderline, or surgery and radiation are both offered without a clear comparison.

It may confirm the current plan, suggest missing information, or discuss another reasonable path. Confirmation is also a useful outcome.

Ask: “What decision do I want reviewed — and is there time for a focused second opinion before the next irreversible step?”
```

### Revised (v1.0)

```text
Often a second opinion helps before locking active surveillance or irreversible prostate cancer treatment when recommendations diverge, risk features are borderline, or surgery and radiation are both offered without a clear comparison. Value depends on timing, what you need clarified, and how complete your records are. It is not always necessary if the plan feels clear and concordant. Ask: what decision do I want reviewed, and is there time for a focused second opinion before the next irreversible step?
```

---

## 4. treatment-compare

| Field | Value |
|-------|-------|
| Portfolio id | `treatment-compare` |
| H1 / title | How do I compare surgery and radiation for prostate cancer? |
| Decision label | How to compare surgery and radiation |
| Slug | `how-to-compare-surgery-and-radiation-for-prostate-cancer` |
| Apply to | `inline summary` in `lib/db/seed-data.ts` |
| Revised words | **71** |
| Path | `/questions/how-to-compare-surgery-and-radiation-for-prostate-cancer` |

### Prior Direct Answer

```text
When definitive therapy is recommended, surgery and radiation can both be reasonable for many risk groups. Compare cancer-control expectations, urinary/sexual/bowel tradeoffs, recovery time, and what would change the recommendation for your situation — not a single “best” treatment for everyone.
```

### Revised (v1.0)

```text
The choice between surgery and radiation for prostate cancer depends on risk group, life expectancy, and what you want to protect — urinary, sexual, and bowel function. Both can be reasonable for many situations; paths differ by recovery, side-effect profiles, and center experience. Neither option is automatically right for everyone. Ask: for my risk group, how do outcomes and side effects compare — and what would change the recommendation either way?
```

---

## 5. costs

| Field | Value |
|-------|-------|
| Portfolio id | `costs` |
| H1 / title | How do prostate cancer treatment costs typically differ? |
| Decision label | How treatment costs typically differ by pathway |
| Slug | `how-prostate-cancer-treatment-costs-differ` |
| Apply to | `inline summary` in `lib/db/seed-data.ts` |
| Revised words | **68** |
| Path | `/questions/how-prostate-cancer-treatment-costs-differ` |

### Prior Direct Answer

```text
Surveillance usually has lower upfront cost but ongoing testing. Surgery and radiation concentrate costs differently over time. Ask for episode-of-care estimates including complications and follow-up.
```

### Revised (v1.0)

```text
Prostate cancer treatment costs often differ by pathway — active surveillance usually has lower upfront cost with ongoing testing, while surgery and radiation concentrate costs differently over time. What you need to ask depends on insurance, the proposed plan, and follow-up burden. Cost alone should not decide care, but it belongs in the conversation. Ask: can we estimate episode-of-care costs including complications and follow-up for each realistic path?
```

---

## 6. care-team

| Field | Value |
|-------|-------|
| Portfolio id | `care-team` |
| H1 / title | What if prostate cancer recommendations differ between urology and radiation oncology? |
| Decision label | What to do when specialty recommendations differ |
| Slug | `when-prostate-recommendations-differ-across-specialists` |
| Apply to | `inline summary` in `lib/db/seed-data.ts` |
| Revised words | **66** |
| Path | `/questions/when-prostate-recommendations-differ-across-specialists` |

### Prior Direct Answer

```text
Differing recommendations are common because multiple options can be reasonable. Ask each specialist to explain goals, side-effect profiles, and what would change their advice. A joint consult or second opinion can reconcile framing differences.
```

### Revised (v1.0)

```text
Differing prostate cancer recommendations between urology and radiation oncology are common because more than one option can be reasonable. How to resolve them depends on risk-group agreement, side-effect priorities, life expectancy, and what each team would change with new information. Discordance does not automatically mean someone is wrong. Ask: where exactly do you disagree, and would a joint consult or second opinion help finalize the plan?
```

---

## 7. global-care

| Field | Value |
|-------|-------|
| Portfolio id | `global-care` |
| H1 / title | How should I evaluate treatment abroad for prostate cancer? |
| Decision label | When to consider prostate cancer care abroad |
| Slug | `evaluate-treatment-abroad-for-prostate-cancer` |
| Apply to | `inline summary` in `lib/db/seed-data.ts` |
| Revised words | **77** |
| Path | `/questions/evaluate-treatment-abroad-for-prostate-cancer` |

### Prior Direct Answer

```text
Abroad care may be considered for specialized radiation platforms or high-volume surgery. Compare outcomes evidence, follow-up requirements, and whether equivalent care exists closer to home.
```

### Revised (v1.0)

```text
Sometimes people consider prostate cancer care in another city or country when a named capability — such as a specialized radiation platform or high-volume surgery — is hard to get locally. Whether travel helps depends on the specific gap, follow-up after return, fitness for travel, and total cost. Moving for a famous name alone usually does not improve care. Ask: is the abroad capability meaningfully different for my risk group, and can remote review answer that first?
```

---

## Also shipped with this pass

- Hang-card titles in `PROSTATE_*_PATH` (`entry-path-v2.ts`) bound with “prostate cancer”
- Continue chips in `prostate-ai-entry-modules.ts` bound
- Care-team Entry H1 updated to include prostate cancer
