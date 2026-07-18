/**
 * Homepage / lung center: situation layer before Decision Moments.
 * Patients pick where they are; then see 2–4 relevant next-step guides.
 */

export type SituationBucket = {
  id: string;
  label: string;
  hint: string;
  /** DecisionMoment.id values (moment slugs) */
  momentIds: string[];
};

export const LUNG_SITUATION_BUCKETS: SituationBucket[] = [
  {
    id: "recently-diagnosed",
    label: "I was recently diagnosed",
    hint: "Still figuring out what comes first.",
    momentIds: [
      "newly-diagnosed",
      "biomarker-testing",
      "second-opinion",
      "stage-iv-options",
    ],
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
    label: "I’m looking for another opinion or care team",
    hint: "Second opinion, specialist, or different expertise.",
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
    label: "I need the plan to fit real life",
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
      "second-opinion",
    ],
  },
];
