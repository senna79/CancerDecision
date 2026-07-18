/**
 * Lung Cancer Treatment Landscape — cognitive map, not a treatment encyclopedia.
 * Skeleton is reusable; copy is lung-specific. Primary exits go to Decision Entries.
 */

export type LandscapeApproach = {
  id: string;
  name: string;
  what: string;
  whenDiscussed: string;
  questions: string[];
  entryHref: string;
  entryLabel: string;
};

export type LandscapeBranch = {
  id: string;
  name: string;
  note: string;
};

export type LandscapeContinueLink = {
  label: string;
  href: string;
  hint: string;
};

export type LandscapeReadPoint = {
  title: string;
  body: string;
};

export const LUNG_TREATMENT_LANDSCAPE = {
  path: "/cancers/lung-cancer/treatment-landscape",
  title: "Lung Cancer Treatment Landscape",
  eyebrow: "Understand lung cancer treatment approaches",
  lead:
    "A lung-specific map of the directions you may hear after diagnosis — so you can see how they relate before you compare options with your care team.",
  notThis:
    "This is not a treatment menu, not a ranking, and not a recommendation of what you should choose.",

  lungReadTitle: "How to read this map for lung cancer",
  lungReadLead:
    "The big boxes look familiar across many cancers. In lung cancer, three facts usually change which box gets discussed first.",
  lungReadPoints: [
    {
      title: "Cancer type",
      body: "Non-small cell (NSCLC) and small cell (SCLC) are planned differently. Ask which type you have — it changes how surgery, radiation, medicines, and trials enter the conversation.",
    },
    {
      title: "How far it has spread",
      body: "Earlier-stage disease more often includes local treatments (surgery and/or radiation). More advanced disease more often starts with systemic therapy — sometimes with radiation for specific problems.",
    },
    {
      title: "Whether key information is complete",
      body: "For many people with NSCLC, biomarker testing is part of building the map — not an optional extra. Incomplete information can mean you are comparing options too early.",
    },
  ] satisfies LandscapeReadPoint[],

  mapTitle: "The main directions in lung cancer",
  mapLead:
    "Most lung cancer plans combine or sequence a few large approaches. Systemic therapy then branches into chemotherapy, immunotherapy, and targeted therapy.",
  topBranches: [
    {
      id: "surgery",
      name: "Surgery",
      note: "More often discussed in earlier-stage NSCLC when removing the tumor (and checking lymph nodes) may be part of the plan.",
    },
    {
      id: "radiation",
      name: "Radiation",
      note: "Used for local control in lung cancer — sometimes instead of surgery, sometimes with chemo, sometimes for symptoms or specific sites.",
    },
    {
      id: "systemic",
      name: "Systemic therapy",
      note: "Often central in advanced disease, and also used before/after local treatment in some NSCLC plans.",
    },
    {
      id: "trials",
      name: "Clinical trials",
      note: "Frequently discussed in advanced disease, after progression, or when biomarker-driven studies may fit.",
    },
  ] satisfies LandscapeBranch[],
  systemicBranches: [
    {
      id: "chemo",
      name: "Chemotherapy",
      note: "Still used alone or with other medicines; also common with radiation in some lung plans.",
    },
    {
      id: "immuno",
      name: "Immunotherapy",
      note: "A major option for many people with NSCLC — sometimes alone, sometimes with chemotherapy.",
    },
    {
      id: "targeted",
      name: "Targeted therapy",
      note: "When biomarkers match, this may become a leading discussion in NSCLC — testing status matters early.",
    },
  ] satisfies LandscapeBranch[],

  approachesTitle: "Why one option may be discussed over another",
  approaches: [
    {
      id: "surgery",
      name: "Surgery",
      what: "An operation to remove lung cancer when location, stage, and lung function make that realistic — often with lymph-node assessment.",
      whenDiscussed:
        "Most often in earlier-stage NSCLC. Less often the first path in widely metastatic disease, or in SCLC where medicines (and sometimes radiation) usually lead.",
      questions: [
        "Is surgery possible for my lung cancer type and stage — and what would it try to achieve?",
        "Do I need medicines or radiation before or after surgery?",
        "If surgery is not recommended, what local or systemic options replace it?",
      ],
      entryHref:
        "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      entryLabel: "Surgery decision guide",
    },
    {
      id: "radiation",
      name: "Radiation",
      what: "Focused treatment to a lung tumor, lymph nodes, or other sites — including techniques like stereotactic radiation in selected early cases.",
      whenDiscussed:
        "When local control matters but surgery is not the best fit; when chemo and radiation are paired; or when a specific area needs treatment for symptoms or control.",
      questions: [
        "Is radiation instead of surgery, or part of a combined lung cancer plan?",
        "What is the goal — cure intent, control, or symptom relief?",
        "How does timing fit with chemotherapy, immunotherapy, or surgery?",
      ],
      entryHref:
        "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      entryLabel: "Compare treatment options",
    },
    {
      id: "systemic",
      name: "Systemic therapy",
      what: "Medicines that work throughout the body — the backbone of many advanced lung cancer plans, and part of some earlier-stage plans too.",
      whenDiscussed:
        "Especially when cancer has spread, when medicines come before/after local treatment, or when the team is choosing among chemo, immunotherapy, targeted therapy, or combinations.",
      questions: [
        "Why systemic therapy for my stage and type of lung cancer?",
        "Are we discussing chemo, immunotherapy, targeted therapy, or a combination — and why?",
        "What results or tests support this choice right now?",
      ],
      entryHref:
        "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      entryLabel: "Compare treatment options",
    },
    {
      id: "immuno",
      name: "Immunotherapy",
      what: "Treatment that helps the immune system recognize lung cancer — a common discussion in NSCLC, sometimes with chemotherapy.",
      whenDiscussed:
        "Often when there is no matched targeted option, or when biomarker and pathology results support an immunotherapy-based plan. Timing and combinations vary.",
      questions: [
        "Is immunotherapy part of my plan alone, or with chemotherapy?",
        "What information made this a fit — or not a fit — for me?",
        "What should I watch for, and how will we judge if it is working?",
      ],
      entryHref:
        "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      entryLabel: "Compare treatment options",
    },
    {
      id: "targeted",
      name: "Targeted therapy",
      what: "Medicines matched to specific features of the cancer. In lung cancer — especially NSCLC — whether testing is complete often changes the whole comparison.",
      whenDiscussed:
        "When biomarker results may open a matched approach, when results are still pending, or when a prior plan stopped working and re-testing is being considered.",
      questions: [
        "Has biomarker testing been completed for my lung cancer decision?",
        "Should we wait for results before locking a first plan?",
        "What if no matched finding is reported — what do we discuss next?",
      ],
      entryHref:
        "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
      entryLabel: "Biomarker testing decision",
    },
    {
      id: "trials",
      name: "Clinical trials",
      what: "Research studies that may test newer medicines, combinations, or biomarker-selected approaches under structured follow-up.",
      whenDiscussed:
        "Common in advanced lung cancer, after progression, when standard options are limited, or when a study matches your cancer features.",
      questions: [
        "Are there lung cancer trials that fit my type, stage, and prior treatment?",
        "What would I gain or give up compared with standard care?",
        "What does participation require in time, travel, and monitoring?",
      ],
      entryHref: "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
      entryLabel: "Clinical trial decision",
    },
  ] satisfies LandscapeApproach[],

  emergingTitle: "Newer and evolving approaches in lung cancer",
  emergingLead:
    "Lung cancer care changes quickly — especially around biomarkers, immunotherapy combinations, and trial options. “Newer” is not automatically better for everyone.",
  emergingItems: [
    "Additional targeted options as more lung cancer biomarkers are studied",
    "Immunotherapy used alone, with chemotherapy, or in new sequences",
    "Using blood-based tests in some situations when tissue is limited",
    "Trials for people whose first plan stopped working or who have rare findings",
  ],
  emergingAsk:
    "For my type and stage of lung cancer, are there newer approaches or trials that fit — and what would they change compared with the current plan?",

  continueTitle: "Continue into your lung cancer decision",
  continueLead:
    "Use the map to orient. Then open the guide that matches the decision in front of you.",
  continueLinks: [
    {
      label: "Recently diagnosed?",
      href: "/questions/what-decisions-matter-most-after-new-lung-cancer-diagnosis",
      hint: "What should come first after a lung cancer diagnosis",
    },
    {
      label: "Need biomarker information first?",
      href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
      hint: "Whether testing could change lung cancer options",
    },
    {
      label: "Comparing paths?",
      href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      hint: "How to weigh goals, benefits, and trade-offs",
    },
    {
      label: "Considering surgery?",
      href: "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      hint: "Whether surgery should be part of your plan",
    },
    {
      label: "Facing advanced disease?",
      href: "/questions/how-to-choose-treatment-options-for-stage-iv-lung-cancer",
      hint: "How treatment decisions work in stage IV / advanced lung cancer",
    },
    {
      label: "Wondering about a trial?",
      href: "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
      hint: "Whether a study belongs in the discussion",
    },
  ] satisfies LandscapeContinueLink[],
} as const;
