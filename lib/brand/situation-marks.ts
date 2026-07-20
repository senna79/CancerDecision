/** Four situation / journey-phase marks */
export type DecisionMarkId =
  | "diagnosis"
  | "testing"
  | "treatment"
  | "followUp";

/**
 * Six situations → four marks (reuse where meaning overlaps).
 * diagnosis · testing (also “another reading”) · treatment · followUp
 */
export const SITUATION_MARK_BY_BUCKET: Record<string, DecisionMarkId> = {
  "recently-diagnosed": "diagnosis",
  "choosing-treatment": "treatment",
  /** Linked nodes = another sample of judgment / second look */
  "another-opinion": "testing",
  "cancer-changed": "treatment",
  "real-life": "followUp",
  "after-treatment": "followUp",
};

/** Homepage featured lung journey — one mark per phase */
export const JOURNEY_PHASE_MARKS: DecisionMarkId[] = [
  "diagnosis",
  "testing",
  "treatment",
  "followUp",
];

export function markForSituationBucket(
  bucketId: string
): DecisionMarkId {
  return SITUATION_MARK_BY_BUCKET[bucketId] ?? "diagnosis";
}
