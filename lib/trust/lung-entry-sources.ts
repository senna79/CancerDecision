/**
 * Lung Cancer Tier-1 AI Entry → source catalog IDs (seed src-NNNN).
 * See docs/CancerDecision_Lung_AI_Entry_Source_Mapping_v1.0.md
 *
 * Order in each array = References display order.
 */

/** Question n → source n list */
export const LUNG_FLAGSHIP_SOURCES_BY_QUESTION_N: Record<number, number[]> = {
  // Entry #2 — Second Opinion
  1: [4, 5, 1, 9, 11, 8],
  // Entry #1 — New Diagnosis
  2: [9, 1, 10, 11, 4, 8],
  // Entry #4 — Treatment Comparison
  3: [1, 9, 10, 11, 2],
  // Entry #3 — Biomarker Testing
  21: [1, 9, 10, 11],
  // Entry #5 — Care Center & Expertise
  26: [5, 1, 10, 9, 11, 4],
  // Entry #6 — Stage IV / Advanced
  27: [9, 1, 10, 11],
  // Entry #7 — Clinical Trial
  28: [12, 13, 1, 9, 10, 11],
  // Entry #8 — Recurrence
  29: [9, 1, 10, 11, 4],
  // Entry #9 — Treatment Progression
  30: [9, 1, 10, 11, 12, 4],
  // Module #10 — Surgery (supporting)
  31: [9, 1, 10, 11, 2, 4],
  // Module #11 — Quality of Life (supporting)
  32: [9, 10, 2, 11, 7, 8],
  // Module #12 — Treatment Feasibility / Cost & Logistics (supporting)
  33: [2, 5, 1, 10, 6, 8],
};

export const LUNG_FLAGSHIP_QUESTION_NS = Object.keys(
  LUNG_FLAGSHIP_SOURCES_BY_QUESTION_N
).map(Number);
