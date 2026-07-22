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

/** Breast orientation — pages ship with orientation content; links reserved. */
export const BREAST_ORIENTATION_LINKS: OrientationLink[] = [
  {
    label: "Subtype",
    href: "/cancers/breast-cancer/understanding-subtype",
    hint: "Receptor/HER2 status and why it shapes the first plan.",
  },
  {
    label: "Stage",
    href: "/cancers/breast-cancer/understanding-stage",
    hint: "What stage (including locally advanced / nodes) means for options — not a prognosis table.",
  },
  {
    label: "Treatment map",
    href: "/cancers/breast-cancer/treatment-landscape",
    hint: "The main treatment families, so comparisons make sense.",
  },
];

export const BREAST_SITUATION_BUCKETS: SituationBucket[] = [
  {
    id: "recently-diagnosed",
    label: "Recently diagnosed",
    hint: "New diagnosis, or waiting on pathology / receptor / HER2 results and what comes first.",
    momentIds: ["newly-diagnosed", "subtype-testing", "second-opinion"],
    alsoMomentIds: ["treatment-sequencing"],
  },
  {
    id: "choosing-treatment",
    label: "Choosing a treatment",
    hint: "Comparing surgery, sequencing, or systemic options.",
    momentIds: [
      "treatment-sequencing",
      "surgery-decision",
      "treatment-comparison",
    ],
    alsoMomentIds: ["subtype-testing"],
  },
  {
    id: "another-opinion",
    label: "Unsure about the plan or care team",
    hint: "Want more confidence, another review, or different expertise.",
    momentIds: ["second-opinion", "surgery-decision"],
    alsoMomentIds: ["treatment-sequencing"],
  },
  {
    id: "cancer-changed",
    label: "Cancer or treatment has changed",
    hint: "Metastatic disease, progression, or a plan that stopped working.",
    momentIds: ["stage-iv-options", "recurrence"],
  },
  {
    id: "real-life",
    label: "Treatment feels hard on life or logistics",
    hint: "Daily life, side effects, time, cost, work, fertility, and whether the plan is workable.",
    momentIds: ["surgery-decision", "treatment-comparison"],
  },
  {
    id: "after-treatment",
    label: "Finished treatment / in follow-up",
    hint: "Monitoring, late effects, and life after treatment.",
    // Recurrence guide is P1 — hide this bucket until that Moment is active.
    momentIds: ["recurrence"],
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
