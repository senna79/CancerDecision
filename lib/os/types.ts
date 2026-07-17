/**
 * Cancer Decision OS — Decision Moment definitions.
 * See docs/Cancer_Decision_OS_Architecture_v1.0.md
 */

export type MomentStatus = "active" | "planned" | "supporting";
export type MomentTier = 1 | 2 | 3;

export type MomentStage =
  | "diagnosis"
  | "testing"
  | "treatment"
  | "second_opinion"
  | "global"
  | "recurrence"
  | "practical"
  | "supportive";

/** Patient-facing homepage / center router card (only used when status=active) */
export type PatientRouterCopy = {
  label: string;
  hint: string;
  nextStep: string;
};

/**
 * Canonical Decision Moment — tree root in the Decision OS.
 * Active moments power the Decision Map + AI Entry; planned stay in the skeleton only.
 */
export type DecisionMomentDef = {
  id: string;
  slug: string;
  label: string;
  state_label: string;
  summary: string;
  why_this_matters: string;
  tier: MomentTier;
  status: MomentStatus;
  stage: MomentStage;
  sort_order: number;
  /** Optional branch on the map when active/supporting */
  optional?: boolean;
  /** Tier-1 AI Entry question slug when activated */
  ai_entry_slug: string | null;
  question_slugs: string[];
  treatment_slugs: string[];
  story_slugs: string[];
  /** Edges to other moment ids */
  next_moment_ids: string[];
  /** Super-node facets (e.g. under Treatment Comparison) — not separate Moments */
  facets?: string[];
  /** Homepage / center moment router; omit for planned */
  patient_router?: PatientRouterCopy | null;
};

export type CancerDecisionOs = {
  cancer_slug: string;
  title: string;
  intro: string;
  moments: DecisionMomentDef[];
};
