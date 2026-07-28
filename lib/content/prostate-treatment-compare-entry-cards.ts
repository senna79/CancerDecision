/** Hang-card bodies for Prostate Surgery vs Radiation Decision Path (Entry Template v2) */

export const PROSTATE_TREATMENT_COMPARE_ENTRY_CARDS = {
  whatIs: {
    lead: "When definitive therapy is recommended for prostate cancer, surgery (usually radical prostatectomy) and radiation (external beam and/or brachytherapy, depending on the plan) are the two most common local options. Both aim to control cancer in and around the prostate — with different recovery paths and side-effect patterns.",
    close:
      "This page compares the decision frame — not a ranking of hospitals or machines.",
  },
  whyMatters: {
    lead: "For many men, this fork shapes years of function and follow-up. Comparing surgery and radiation can change:",
    items: [
      "Which side-effect pattern is more likely — urinary, sexual, or bowel",
      "How recovery time and return to work look in the first months",
      "Whether you need both urology and radiation oncology input before locking a path",
      "What follow-up looks like after the treatment phase ends",
    ],
    close:
      "That is why surgery vs radiation sits on the prostate spine after monitoring-versus-treatment is settled — and before locking an irreversible plan.",
  },
  bothReasonable: {
    lead: "For many prostate cancer risk groups, surgery and radiation can both be reasonable when definitive therapy is needed. “Both can work” is common — which is why specialty framing can sound conflicting even when both paths are guideline-supported.",
    close:
      "Ask whether you are a candidate for both — and what would tip the recommendation either way.",
  },
  notStronger: {
    lead: "This decision is not “which prostate cancer treatment is strongest online.” Neither surgery nor radiation is automatically right for every man who needs definitive therapy.",
    close:
      "The useful comparison is fit for your risk group, health, and function priorities — not which option sounds more aggressive.",
  },
  riskFirst: {
    lead: "Risk group, life expectancy, and overall health still shape the prostate cancer surgery-versus-radiation discussion — even after surveillance is off the table.",
    ask: [
      "For my risk group, are both options still reasonable?",
      "Would any pending MRI, staging, or pathology detail change the comparison?",
      "Does life expectancy or other illness tip the recommendation?",
    ],
    close:
      "If risk information is incomplete, ask whether locking a modality should wait.",
  },
  surgery: {
    lead: "Choosing surgery for prostate cancer usually means removing the prostate (and often nearby nodes when indicated), with recovery focused on healing, catheter time, and early urinary and sexual function changes.",
    items: [
      "Hospital stay and early recovery are more “front-loaded” than radiation’s calendar",
      "Urinary leakage and erectile changes are common discussion points — ask what is typical for your situation",
      "Pathology after surgery can refine risk and whether additional therapy is discussed",
      "Salvage radiation may still be discussed later if PSA rises after surgery",
    ],
    close:
      "Ask what recovery looks like in the first 6–12 weeks — not only the operation name.",
  },
  radiation: {
    lead: "Choosing radiation for prostate cancer usually means a planned course of external beam treatments, sometimes with brachytherapy or temporary hormone therapy depending on risk — without removing the prostate.",
    items: [
      "Treatment days are spread over weeks (exact schedule depends on the technique)",
      "Bowel and urinary irritation during/after treatment are common discussion points",
      "Sexual function changes can still occur — ask what to expect for your plan",
      "Salvage options after radiation are more limited than after surgery — ask what “plan B” would look like",
    ],
    close:
      "Ask for the expected calendar, hormone-therapy role if any, and side-effect timeline in plain language.",
  },
  sideEffects: {
    lead: "For prostate cancer, the useful side-effect comparison is usually by domain — not a single “worse” label:",
    items: [
      "Urinary control and urgency",
      "Sexual function and recovery timeline",
      "Bowel habits and irritation",
      "Energy, work, and caregiving needs during treatment and early recovery",
    ],
    close:
      "Rank what matters most to you, then ask how each option typically affects those domains for someone like you.",
  },
  recovery: {
    lead: "Surgery and radiation load time differently in prostate cancer care. Surgery often concentrates recovery early; radiation spreads visits over weeks with a different fatigue and irritation pattern.",
    ask: [
      "What does a normal week look like during each path?",
      "When do most people return to work or caregiving roles?",
      "What support do I need at home in the first month?",
    ],
    close:
      "Calendar fit belongs in the medical conversation — not only after the path is locked.",
  },
  whatChanges: {
    lead: "Ask what would change the recommendation between surgery and radiation for your prostate cancer. Common factors include:",
    items: [
      "Risk group, PSA pattern, and imaging/staging details",
      "Prior pelvic surgery or bowel disease that changes radiation feasibility",
      "Urinary, sexual, and bowel priorities",
      "Ability to complete a multi-week radiation schedule — or surgery recovery",
      "Center experience and whether both specialties have reviewed the case",
    ],
    close:
      "A clear “what would change this?” answer beats a long menu of brand-name techniques.",
  },
  bothSpecialties: {
    lead: "Hearing both urology and radiation oncology is often useful before locking prostate cancer definitive therapy — especially when both options are still reasonable.",
    ask: [
      "Should I meet both specialists before deciding?",
      "Would a joint consult help reconcile the framing?",
      "If recommendations differ, where exactly do they disagree?",
    ],
    close:
      "Specialty differences are often complementary perspectives — not proof that one doctor is wrong.",
  },
  pendingInfo: {
    lead: "Before locking surgery or radiation for prostate cancer, confirm whether important information is still pending:",
    items: [
      "Complete risk-group summary (PSA, Grade Group / Gleason, staging)",
      "MRI or other imaging that could change local therapy planning",
      "Whether hormone therapy would be part of a radiation plan",
      "Any second-opinion or pathology re-review you still want",
    ],
    close:
      "Waiting for information that would change the modality choice is not automatically an unsafe delay — ask how urgent your situation is.",
  },
  lifeFit: {
    lead: "Practical fit matters when both prostate cancer paths are medically reasonable — travel to daily radiation, catheter and recovery support after surgery, time off work, and caregiver help.",
    ask: [
      "Which path fits my work and family responsibilities better?",
      "Can I complete the radiation schedule if that is the path?",
      "What home support do I need after surgery?",
    ],
  },
  thisWeek: {
    lead: "If surgery versus radiation is the prostate cancer decision in front of you, focus on:",
    steps: [
      "Confirm you are comparing for definitive therapy — not reopening surveillance if that fork is already closed",
      "Ask whether you are a candidate for both options — and what would tip either way",
      "Rank urinary, sexual, and bowel priorities, then hear both specialties if needed",
    ],
    close:
      "A clear comparison frame beats choosing the option that sounds more aggressive online.",
  },
  secondOpinion: {
    lead: "A second opinion can help when surgery and radiation are both offered without a clear comparison, specialty recommendations differ, or you want confidence before an irreversible prostate cancer step.",
    close: "It is about confidence, not distrust.",
  },
  mistakes: {
    lead: "For prostate cancer, common surgery-versus-radiation mistakes include:",
    items: [
      {
        mistake: "Picking the “stronger” option from online rankings",
        why: "Both paths can be reasonable — fit and priorities matter more than aggressiveness branding.",
      },
      {
        mistake: "Hearing only one specialty before locking the plan",
        why: "Urology and radiation oncology often frame tradeoffs differently; both views can help.",
      },
      {
        mistake: "Ignoring urinary, sexual, and bowel priorities until after treatment",
        why: "Those domains are often the real decision — bring them into the comparison early.",
      },
    ],
  },
} as const;

export const PROSTATE_TREATMENT_COMPARE_GLOSS =
  "When definitive therapy is needed, surgery and radiation can both be reasonable for many prostate cancer situations. Compare cancer control, urinary/sexual/bowel tradeoffs, and recovery — not a single “best” treatment.";

export const PROSTATE_TREATMENT_COMPARE_DIRECT_ANSWER = `The choice between surgery and radiation for prostate cancer depends on risk group, life expectancy, and what you want to protect — urinary, sexual, and bowel function. Both can be reasonable for many situations; paths differ by recovery, side-effect profiles, and center experience. Neither option is automatically right for everyone. Ask: for my risk group, how do outcomes and side effects compare — and what would change the recommendation either way?`;
