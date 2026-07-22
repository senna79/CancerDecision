/** Hang-card bodies for Breast Systemic Therapy Decision Path (Entry Template v2) */

export const BREAST_SYSTEMIC_ENTRY_CARDS = {
  whatIs: {
    lead: "Systemic therapy means medicines that travel through the body — such as endocrine (hormone) therapy, chemotherapy, HER2-targeted therapy, or immunotherapy in selected cases — rather than only treating the breast surgically.",
    close:
      "Which families belong in the discussion usually depends first on subtype (HR+ / HER2+ / triple-negative), then on stage, goals, and sequencing.",
  },
  subtypeForks: {
    lead: "Breast cancer is not one systemic conversation. Subtype forks the options:",
    items: [
      "HR+ (hormone receptor–positive) — endocrine therapy is often central; chemo is situational",
      "HER2+ — HER2-targeted therapy is usually part of the plan, often with chemo",
      "Triple-negative (TNBC) — chemo leads for many people; immunotherapy may apply in selected cases",
    ],
    close:
      "Start with your subtype label in plain language before comparing drug names online.",
  },
  notDrugMenu: {
    lead: "A useful systemic decision is not “pick the strongest drug from a menu.” It is “which option families fit my subtype, stage, and goals — and what trade-offs am I accepting?”",
    close:
      "Ask what each recommendation is trying to achieve, not only what it is called.",
  },
  sequencing: {
    lead: "Systemic therapy may start before surgery (neoadjuvant) or after surgery (adjuvant). Timing can change what you learn and when surgery happens.",
    close:
      "If before-vs-after surgery timing is still open, clarify sequencing alongside which systemic families are being discussed.",
  },
  hrPositive: {
    lead: "ER+/PR+/HER2− (hormone receptor–positive, HER2-negative) usually means endocrine therapy is central. Chemotherapy, ovarian suppression, CDK4/6 inhibitors, or other agents may still enter depending on stage and risk — HER2-targeted therapy is not the lead fork here.",
    items: [
      "Endocrine therapy is often a long-duration backbone",
      "Chemotherapy may or may not add enough benefit — ask why it is or is not recommended",
      "Genomic assays (Oncotype-class) may refine chemo vs endocrine discussions for some early cancers",
      "If HER2 were positive instead, the conversation would usually add HER2-targeted therapy",
    ],
    close:
      "Ask: “For my ER/PR and HER2 results, what is the goal of each medicine — and would a genomic assay change chemo discussions?”",
  },
  cdk46: {
    lead: "CDK4/6 inhibitors are medicines often discussed for hormone receptor–positive breast cancer — in metastatic settings and, for some people, in higher-risk early disease. They are usually combined with endocrine therapy, not used as a stand-alone “chemo replacement” for every case.",
    ask: [
      "Is a CDK4/6 inhibitor part of my plan — and why or why not?",
      "Would it be used in the early/adjuvant setting or only if disease is metastatic?",
      "What side effects and monitoring should I expect if it is recommended?",
    ],
    close:
      "Ask whether CDK4/6 therapy fits your subtype, stage, and goals — not whether the drug class exists in general.",
  },
  erGoodOrBad: {
    lead: "Estrogen receptor–positive (ER+) is not simply “good” or “bad.” It usually means endocrine (hormone) therapy belongs in the conversation — which can be a helpful treatment path — while stage, grade, HER2 status, and genomic risk still shape how serious the situation is and whether chemotherapy is added.",
    ask: [
      "For my ER status, what does that open or change in the plan?",
      "Does PR and HER2 status change how we interpret ER+?",
      "Would a genomic assay refine whether chemo adds enough benefit?",
    ],
    close:
      "Treat ER+ as a treatment fork and planning clue — not a fortune-telling label.",
  },
  chemoRounds: {
    lead: "There is no single “normal” number of chemotherapy rounds for every breast cancer. Regimens differ by subtype, stage, goals (before vs after surgery), and whether other medicines are paired with chemo.",
    ask: [
      "How many cycles are planned for me — and over how many weeks?",
      "What is this regimen trying to achieve?",
      "What would change the number of cycles if response or side effects change?",
    ],
    close:
      "Ask for your regimen’s purpose and calendar — not an internet average of “how many rounds.”",
  },
  tnbcImmuno: {
    lead: "Immunotherapy can be part of care for some people with triple-negative breast cancer — often with chemotherapy in selected early or metastatic situations. It is not automatic for every TNBC diagnosis.",
    ask: [
      "Is immunotherapy recommended for my TNBC — and what makes me eligible or not?",
      "Would it be used before surgery, after surgery, or for metastatic disease?",
      "What immune-related side effects should I watch for?",
    ],
    close:
      "Ask for your eligibility and goal in plain language — “TNBC” alone does not mean immunotherapy is next.",
  },
  her2Positive: {
    lead: "HER2-positive treatment usually includes HER2-targeted therapy as a core part of the systemic plan, often combined with chemotherapy, and sometimes sequenced before or after surgery. Exact protocol names and durations vary by stage and response.",
    items: [
      "HER2-targeted therapy is not the same as generic “chemo”",
      "Duration, combinations, and heart monitoring differ by stage and response",
      "Surgery timing may interact with neoadjuvant HER2-directed therapy",
      "HR+/HER2+ plans may also include endocrine therapy later",
    ],
    close:
      "Ask: “What is the HER2-targeted part trying to achieve — and how will we know if the plan is working?” — not only for a protocol name online.",
  },
  whenChemo: {
    lead: "Chemotherapy is recommended when the expected benefit outweighs the burden for your situation. Doctors weigh subtype, stage/nodes, tumor features, genomic assays (when relevant), and overall health — not a single internet rule.",
    ask: [
      "For my subtype and stage, what tips a chemo recommendation — or against it?",
      "Would a genomic assay change whether chemo is discussed?",
      "Is chemo planned before surgery, after surgery, or not at all?",
    ],
    close:
      "Ask what factors tip your plan. Stage alone or a neighbor’s story is not enough.",
  },
  stage1Chemo: {
    lead: "Stage 1 does not automatically mean “no chemo” or “must have chemo.” Some Stage 1 cancers are treated with surgery and endocrine or HER2-targeted therapy without chemo; others still include chemo based on subtype, size, grade, nodes, and genomic risk.",
    ask: [
      "For my Stage 1 cancer, what tips chemo yes vs no?",
      "Does my subtype (HR+, HER2+, TNBC) change that answer?",
      "Would Oncotype or another assay refine the decision?",
    ],
    close:
      "Treat Stage 1 as a starting frame — ask for the risk factors that tip your systemic plan.",
  },
  ovarian: {
    lead: "Ovarian suppression means temporarily stopping ovarian estrogen production — often with injections — and may be discussed for some premenopausal people with hormone receptor–positive breast cancer, sometimes alongside tamoxifen or an aromatase inhibitor.",
    ask: [
      "Is ovarian suppression part of my plan — and why or why not?",
      "How long would it last, and what side effects are common?",
      "How does this interact with fertility goals?",
    ],
    close:
      "Ask whether it applies to your age, subtype, and risk — not whether the term appears in general articles.",
  },
  skipEndocrine: {
    lead: "If your cancer is hormone receptor–positive, endocrine (hormone) therapy is often part of the plan after lumpectomy — alongside surgery and usually radiation. Skipping it is a risk-tradeoff conversation, not a routine default.",
    ask: [
      "If I skip endocrine therapy after lumpectomy, how does my risk change?",
      "Are there side-effect or fertility reasons to adjust duration or medicine?",
      "What monitoring would you recommend if I cannot tolerate the medicine?",
    ],
    close:
      "Ask for your personal risk change. Online “I skipped it” stories are not a plan.",
  },
  endocrineDuration: {
    lead: "Endocrine therapy for hormone receptor–positive breast cancer often lasts years — commonly discussed in ranges such as 5 years, with longer courses for some higher-risk situations. Exact duration depends on stage, risk, medicine type, and tolerance.",
    ask: [
      "How long is endocrine therapy planned for me — and why that duration?",
      "What would make us shorten, extend, or switch medicines?",
      "Which side effects should trigger a call vs a routine visit?",
    ],
    close:
      "Ask for a duration and review plan — not only the drug name.",
  },
  tnbcStage1: {
    lead: "Stage 1 triple-negative breast cancer is still a TNBC decision fork. Chemotherapy often leads systemic discussions for many people, and sequencing (before vs after surgery), immunotherapy eligibility, and genetics counseling may also enter — Stage 1 does not mean “no systemic therapy” by default.",
    ask: [
      "For my Stage 1 TNBC, what systemic therapy is recommended — and why?",
      "Is treatment before surgery on the table?",
      "Should we discuss immunotherapy, genetics counseling, or a trial?",
    ],
    close:
      "Ask what tips your Stage 1 TNBC plan — subtype still matters more than the Stage number alone.",
  },
  tnbc: {
    lead: "If your cancer is triple-negative (ER, PR, and HER2 negative), chemotherapy often leads the systemic discussion. Immunotherapy may be added in selected situations — ask whether it applies to you.",
    items: [
      "Chemo regimens and sequencing (before vs after surgery) are common decision points",
      "Immunotherapy is not automatic for every TNBC diagnosis",
      "Clinical trials may be especially relevant in some settings",
      "Genetics (germline) can matter for some later options — ask if counseling is needed",
    ],
    close:
      "Ask: “For my TNBC, which systemic approach is recommended — and is immunotherapy or a trial part of the discussion?”",
  },
  goals: {
    lead: "Before comparing drug names, clarify the goal of systemic therapy in your sequence:",
    items: [
      "Cure-intent / reduce recurrence risk after local treatment",
      "Shrink disease before surgery and assess response",
      "Control disease when cure is not the framing",
      "Balance benefit with side effects and daily life",
    ],
    close:
      "The same medicine family can serve different goals depending on stage and timing.",
  },
  genomic: {
    lead: "For some early HR+ / HER2− cancers, genomic assays (often discussed as Oncotype DX–class and similar tests) help estimate whether chemotherapy adds enough benefit beyond endocrine therapy.",
    ask: [
      "Is Oncotype or another genomic assay relevant for my situation?",
      "Would the result change whether we discuss chemotherapy?",
      "When would it be ordered — before or after surgery?",
    ],
    close:
      "Not everyone needs this assay. Ask whether it would change your chemo decision — not whether the brand name exists.",
  },
  sideEffects: {
    lead: "Side-effect profiles differ by family — endocrine symptoms, chemo effects, HER2-therapy heart monitoring, immunotherapy immune-related effects.",
    ask: [
      "What side effects are most common for the plan you recommend?",
      "Which effects should make me call urgently?",
      "How will we monitor safety during treatment?",
    ],
  },
  timeline: {
    lead: "Ask for a plain-language calendar: how long therapy lasts, visit frequency, and how it fits around surgery if relevant.",
    ask: [
      "How long would each part of the plan last?",
      "What does a typical treatment week look like?",
      "How does this interact with work, fertility timing, or caregiving?",
    ],
  },
  fertility: {
    lead: "If future pregnancy matters to you, fertility preservation is often discussed before chemotherapy, ovarian suppression, or other treatments that can affect fertility. Timing matters — raise it before locking the first systemic step.",
    ask: [
      "Should I see a fertility specialist before starting treatment?",
      "What preservation options fit my timeline and cancer plan?",
      "Would waiting briefly for fertility steps change cancer safety?",
    ],
    close:
      "Ask early. Fertility goals are medical information — not a side conversation after treatment starts.",
  },
  thisWeek: {
    lead: "If systemic options are the decision in front of you, focus on:",
    steps: [
      "Confirm your subtype in plain language (HR+ / HER2+ / TNBC — and combinations)",
      "Ask which option families fit that subtype — and the goal of each",
      "Clarify sequencing (before vs after surgery) and what would change the recommendation",
    ],
    close:
      "Subtype + goal + sequence beats memorizing every drug brand name.",
  },
  mistakes: {
    lead: "Common systemic-therapy mistakes include:",
    items: [
      {
        mistake: "Comparing drug names without knowing your subtype fork",
        why: "HR+, HER2+, and TNBC open different option families.",
      },
      {
        mistake: "Assuming “more chemo” is always stronger care",
        why: "Fit and goals matter more than maximum intensity.",
      },
      {
        mistake: "Ignoring sequencing and fertility until after the plan is locked",
        why: "Timing questions are part of the systemic decision, not an afterthought.",
      },
    ],
  },
} as const;

export const BREAST_SYSTEMIC_GLOSS =
  "Breast cancer systemic therapy choices fork by subtype (HR+ / HER2+ / TNBC): endocrine, chemo, HER2-targeted, and immunotherapy in selected cases — compared by goals, sequencing, and trade-offs, not as a flat drug menu.";

export const BREAST_SYSTEMIC_DIRECT_ANSWER = `Systemic therapy options for breast cancer depend first on subtype — hormone receptor–positive, HER2-positive, or triple-negative — then on stage, goals, and whether medicines start before or after surgery.

Compare option families and trade-offs for your subtype. Do not start from a ranked list of drug names.

Ask: “For my subtype, which systemic approaches fit — what is each trying to achieve — and what would change the recommendation?”`;
