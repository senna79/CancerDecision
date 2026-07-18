/**
 * Lung Cancer Treatment Landscape — cognitive map, not a treatment encyclopedia.
 * Primary exits go to Decision Entries.
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

export const LUNG_TREATMENT_LANDSCAPE = {
  path: "/cancers/lung-cancer/treatment-landscape",
  title: "Lung Cancer Treatment Landscape",
  eyebrow: "Understand treatment approaches",
  lead:
    "A map of the main directions you may hear about — so you can see how they relate before you compare options with your care team.",
  notThis:
    "This is not a treatment menu, not a ranking, and not a recommendation of what you should choose.",

  mapTitle: "The main directions",
  mapLead:
    "Most lung cancer discussions fall into a few large approaches. Systemic therapy then branches into several methods that work throughout the body.",
  topBranches: [
    {
      id: "surgery",
      name: "Surgery",
      note: "Often discussed when removing the cancer may be possible.",
    },
    {
      id: "radiation",
      name: "Radiation",
      note: "Local treatment using focused beams — alone or with other approaches.",
    },
    {
      id: "systemic",
      name: "Systemic therapy",
      note: "Treatment that works throughout the body.",
    },
    {
      id: "trials",
      name: "Clinical trials",
      note: "Research studies testing newer or different approaches.",
    },
  ] satisfies LandscapeBranch[],
  systemicBranches: [
    {
      id: "chemo",
      name: "Chemotherapy",
      note: "Medicines that affect fast-growing cells.",
    },
    {
      id: "immuno",
      name: "Immunotherapy",
      note: "Helps the immune system recognize cancer.",
    },
    {
      id: "targeted",
      name: "Targeted therapy",
      note: "Usually depends on specific cancer features (biomarkers).",
    },
  ] satisfies LandscapeBranch[],

  approachesTitle: "Why one option may be discussed over another",
  approaches: [
    {
      id: "surgery",
      name: "Surgery",
      what: "An operation to remove cancer when that may be possible and useful for your goals.",
      whenDiscussed:
        "Often when the cancer appears localized enough that removal could be part of the plan — and when overall health supports an operation.",
      questions: [
        "Is surgery possible in my situation — and what would it try to achieve?",
        "What are the main risks and recovery trade-offs?",
        "What happens if surgery is not recommended?",
      ],
      entryHref:
        "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      entryLabel: "Surgery decision guide",
    },
    {
      id: "radiation",
      name: "Radiation",
      what: "Focused energy aimed at a target area — sometimes instead of surgery, sometimes alongside other treatments.",
      whenDiscussed:
        "When local control matters, surgery is not the best fit, or radiation is part of a combined plan.",
      questions: [
        "What is the goal of radiation in my case?",
        "Is this instead of surgery, or combined with other treatment?",
        "What side effects should I prepare for?",
      ],
      entryHref:
        "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      entryLabel: "Compare treatment options",
    },
    {
      id: "systemic",
      name: "Systemic therapy",
      what: "Medicines that act throughout the body — including chemotherapy, immunotherapy, and targeted therapy.",
      whenDiscussed:
        "When treatment needs to address disease beyond one spot, or when medicines are the main path (or part of a combined plan).",
      questions: [
        "Why this approach rather than a local treatment alone?",
        "Which type of systemic therapy are we discussing — and why?",
        "What information supports this choice?",
      ],
      entryHref:
        "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      entryLabel: "Compare treatment options",
    },
    {
      id: "targeted",
      name: "Targeted therapy",
      what: "Treatment matched to specific features of the cancer — often guided by biomarker testing.",
      whenDiscussed:
        "When test results show a feature that may open a matched approach — or when your team is checking whether that information is complete.",
      questions: [
        "Has biomarker testing been completed for my decision?",
        "Could results change the options we discuss?",
        "What if no matched finding is reported?",
      ],
      entryHref:
        "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
      entryLabel: "Biomarker testing decision",
    },
    {
      id: "trials",
      name: "Clinical trials",
      what: "Structured research that may offer access to newer or different approaches under careful monitoring.",
      whenDiscussed:
        "When standard options are limited, results are unclear, or you want to know whether a study fits your situation.",
      questions: [
        "Are there trials that fit my cancer type and stage?",
        "What would I gain or give up compared with standard care?",
        "What does participation require in time, travel, and follow-up?",
      ],
      entryHref: "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
      entryLabel: "Clinical trial decision",
    },
  ] satisfies LandscapeApproach[],

  emergingTitle: "Newer and evolving approaches",
  emergingLead:
    "Lung cancer treatment continues to change. Newer directions may matter for some people — but “newer” is not automatically better for everyone.",
  emergingItems: [
    "More precise targeted therapies as new biomarkers are studied",
    "New immunotherapy combinations and sequencing strategies",
    "Biomarker-guided treatment planning across the journey",
    "Clinical trials testing approaches not yet routine care",
  ],
  emergingAsk:
    "Are there newer approaches that fit my situation — and what would they change compared with the current plan?",

  continueTitle: "Continue into your decision",
  continueLead:
    "Use the map above to orient. Then open the guide that matches the decision in front of you.",
  continueLinks: [
    {
      label: "Recently diagnosed?",
      href: "/questions/what-decisions-matter-most-after-new-lung-cancer-diagnosis",
      hint: "What should come first after diagnosis",
    },
    {
      label: "Need more information first?",
      href: "/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment",
      hint: "Whether testing could change options",
    },
    {
      label: "Comparing paths?",
      href: "/questions/how-to-compare-surgery-and-systemic-therapy-lung-cancer",
      hint: "How to weigh goals, benefits, and trade-offs",
    },
    {
      label: "Considering surgery?",
      href: "/questions/should-surgery-be-part-of-my-lung-cancer-treatment-plan",
      hint: "Whether surgery should be part of the plan",
    },
    {
      label: "Wondering about a trial?",
      href: "/questions/should-i-consider-a-clinical-trial-for-lung-cancer",
      hint: "Whether a study belongs in the discussion",
    },
  ] satisfies LandscapeContinueLink[],
} as const;
