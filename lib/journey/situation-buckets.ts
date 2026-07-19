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

export const LUNG_SITUATION_BUCKETS: SituationBucket[] = [
  {
    id: "recently-diagnosed",
    label: "I was recently diagnosed",
    hint: "Still figuring out what comes first.",
    momentIds: [
      "newly-diagnosed",
      "biomarker-testing",
      "second-opinion",
    ],
    alsoMomentIds: ["stage-iv-options"],
  },
  {
    id: "choosing-treatment",
    label: "I’m trying to choose a treatment",
    hint: "Comparing paths, surgery, or a clinical trial.",
    momentIds: [
      "treatment-comparison",
      "surgery-decision",
      "clinical-trial",
    ],
  },
  {
    id: "another-opinion",
    label: "I’m unsure about my plan or care team",
    hint: "Want more confidence, another review, different expertise, or care elsewhere.",
    momentIds: [
      "second-opinion",
      "care-center-expertise",
      "global-care",
    ],
  },
  {
    id: "cancer-changed",
    label: "My cancer or treatment has changed",
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
    label: "Treatment feels hard on my life or logistics",
    hint: "Daily life, burden, travel, time, and whether the plan is workable — start with Quality of Life or Care Team.",
    momentIds: ["quality-of-life", "care-center-expertise"],
    alsoMomentIds: ["cost-logistics", "treatment-comparison"],
  },
  {
    id: "after-treatment",
    label: "I’ve finished treatment / I’m in follow-up",
    hint: "Monitoring, symptoms to report, and life after cancer.",
    momentIds: [
      "follow-up-monitoring",
      "recurrence",
      "quality-of-life",
    ],
    alsoMomentIds: ["second-opinion"],
  },
];
