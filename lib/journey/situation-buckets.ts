/**
 * Homepage / lung center: situation layer before Decision Moments.
 * Patients pick where they are; then see 2–3 primary guides (+ optional Also).
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
};

/** Not a 7th situation — orientation before choosing a decision path */
export const LUNG_ORIENTATION_LINKS: OrientationLink[] = [
  {
    label: "Types",
    href: "/cancers/lung-cancer/understanding-types",
  },
  {
    label: "Stage",
    href: "/cancers/lung-cancer/understanding-stage",
  },
  {
    label: "Treatment map",
    href: "/cancers/lung-cancer/treatment-landscape",
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
    hint: "Want more confidence, another review, or different expertise.",
    momentIds: ["second-opinion", "care-center-expertise"],
  },
  {
    id: "cancer-changed",
    label: "My cancer or treatment has changed",
    hint: "Advanced disease, recurrence, or a plan that stopped working.",
    momentIds: [
      "stage-iv-options",
      "recurrence",
      "treatment-progression",
    ],
  },
  {
    id: "real-life",
    label: "Treatment feels hard on my life or logistics",
    hint: "Goals, daily life, cost, travel, time, and support.",
    momentIds: ["quality-of-life", "cost-logistics"],
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
