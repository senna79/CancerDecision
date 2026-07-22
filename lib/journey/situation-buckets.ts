/**
 * Homepage / lung center: situation layer before Decision Moments.
 * Directory tree — each situation always shows 2–3 primary guides (+ optional Also).
 */

export type SituationBucket = {
  id: string;
  label: string;
  hint: string;
  /** Primary DecisionMoment.id values (moment slugs) — aim for 2–3 */
  momentIds: string[];
  /** Optional secondary links shown under “Also” */
  alsoMomentIds?: string[];
};

export type OrientationLink = {
  label: string;
  href: string;
  /** Short line under the tile title */
  hint: string;
};

/** Optional hub jump chips — must map to an existing SituationBucket.id */
export type SituationQuickScenario = {
  label: string;
  bucketId: string;
};

/** Not a 7th situation — orientation before choosing a decision path */
export const LUNG_ORIENTATION_LINKS: OrientationLink[] = [
  {
    label: "Types",
    href: "/cancers/lung-cancer/understanding-types",
    hint: "NSCLC, SCLC, and why the type shapes decisions.",
  },
  {
    label: "Stage",
    href: "/cancers/lung-cancer/understanding-stage",
    hint: "What stage means for options — not a prognosis table.",
  },
  {
    label: "Treatment map",
    href: "/cancers/lung-cancer/treatment-landscape",
    hint: "The main treatment families, so comparisons make sense.",
  },
];

/** Breast orientation — same strip as lung Types / Stage / Landscape. */
export const BREAST_ORIENTATION_LINKS: OrientationLink[] = [
  {
    label: "What type of breast cancer do I have?",
    href: "/cancers/breast-cancer/understanding-subtype",
    hint: "Subtype (receptors / HER2) — and why it shapes the first plan.",
  },
  {
    label: "How far has it spread?",
    href: "/cancers/breast-cancer/understanding-stage",
    hint: "Stage and extent for options — not a prognosis table.",
  },
  {
    label: "What happens in treatment?",
    href: "/cancers/breast-cancer/treatment-landscape",
    hint: "The main treatment families, so comparisons make sense.",
  },
];

/**
 * Breast keeps the same 6-slot shell as lung for cross-cancer literacy.
 * Empty / planned Moments are filtered out in SituationGuidedRouter.
 * Clinical spine on the map: diagnosis → subtype → sequencing → surgery.
 * Hub UX: aim for ≤3 primary + ≤2 also per situation.
 */
export const BREAST_SITUATION_BUCKETS: SituationBucket[] = [
  {
    id: "recently-diagnosed",
    label: "Newly diagnosed or waiting for results",
    hint: "Your first decisions usually depend on confirming the cancer type, subtype, and what information is needed before treatment choices.",
    momentIds: ["newly-diagnosed", "subtype-testing", "second-opinion"],
    alsoMomentIds: ["genetics", "treatment-sequencing"],
  },
  {
    id: "choosing-treatment",
    label: "Comparing treatment options",
    hint: "Understand how surgery, systemic therapy, and treatment timing may fit together.",
    momentIds: [
      "treatment-sequencing",
      "surgery-decision",
      "treatment-comparison",
    ],
    alsoMomentIds: ["radiation-decision", "reconstruction"],
  },
  {
    id: "real-life",
    label: "Balancing treatment with everyday life",
    hint: "Questions about side effects, work, fertility, family, cost, and whether the plan is workable day to day.",
    momentIds: ["quality-of-life", "cost-logistics", "reconstruction"],
    alsoMomentIds: ["radiation-decision"],
  },
  {
    id: "another-opinion",
    label: "Unsure about your treatment plan or care team",
    hint: "When you want another perspective, more expertise, or a clearer understanding before moving forward.",
    momentIds: ["second-opinion", "care-center-expertise"],
    alsoMomentIds: ["global-care", "surgery-decision"],
  },
  {
    id: "cancer-changed",
    label: "Cancer or treatment has changed",
    hint: "Metastatic disease, progression, or a plan that stopped working.",
    momentIds: ["stage-iv-options", "recurrence"],
    alsoMomentIds: ["treatment-comparison", "clinical-trial"],
  },
  {
    id: "after-treatment",
    label: "Finished treatment / in follow-up",
    hint: "Monitoring, late effects, and life after treatment — including what to sort out if cancer returns.",
    momentIds: ["follow-up-monitoring", "recurrence"],
    alsoMomentIds: ["second-opinion", "quality-of-life"],
  },
];

/** Breast hub only — anchors to existing situation buckets (not a parallel taxonomy). */
export const BREAST_QUICK_SCENARIOS: SituationQuickScenario[] = [
  {
    label: "I was just told I have breast cancer",
    bucketId: "recently-diagnosed",
  },
  {
    label: "I am choosing surgery or treatment",
    bucketId: "choosing-treatment",
  },
  {
    label: "My doctor recommended a plan and I am unsure",
    bucketId: "another-opinion",
  },
  {
    label: "Treatment feels overwhelming for daily life",
    bucketId: "real-life",
  },
  {
    label: "My cancer came back or has spread",
    bucketId: "cancer-changed",
  },
];

export const LUNG_SITUATION_BUCKETS: SituationBucket[] = [
  {
    id: "recently-diagnosed",
    label: "Recently diagnosed",
    hint: "Still figuring out what comes first after a new diagnosis.",
    momentIds: [
      "newly-diagnosed",
      "biomarker-testing",
      "second-opinion",
    ],
    alsoMomentIds: ["stage-iv-options"],
  },
  {
    id: "choosing-treatment",
    label: "Choosing a treatment",
    hint: "Comparing paths, surgery, or a clinical trial.",
    momentIds: [
      "treatment-comparison",
      "surgery-decision",
      "clinical-trial",
    ],
  },
  {
    id: "another-opinion",
    label: "Unsure about the plan or care team",
    hint: "Want more confidence, another review, different expertise, or care elsewhere.",
    momentIds: [
      "second-opinion",
      "care-center-expertise",
      "global-care",
    ],
  },
  {
    id: "cancer-changed",
    label: "Cancer or treatment has changed",
    hint: "Advanced disease, brain metastases, recurrence, or a plan that stopped working.",
    momentIds: [
      "stage-iv-options",
      "brain-mets",
      "recurrence",
      "treatment-progression",
    ],
  },
  {
    id: "real-life",
    label: "Treatment feels hard on life or logistics",
    hint: "Daily life, burden, travel, time, and whether the plan is workable — start with Quality of Life, Care Team, or Practical Fit.",
    momentIds: [
      "quality-of-life",
      "care-center-expertise",
      "cost-logistics",
    ],
    alsoMomentIds: ["treatment-comparison"],
  },
  {
    id: "after-treatment",
    label: "Finished treatment / in follow-up",
    hint: "Monitoring, symptoms to report, and life after cancer.",
    momentIds: [
      "follow-up-monitoring",
      "recurrence",
      "quality-of-life",
    ],
    alsoMomentIds: ["second-opinion"],
  },
];
