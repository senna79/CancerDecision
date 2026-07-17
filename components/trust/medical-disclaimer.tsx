import type { Source } from "@/types/database";
import { SourcesAndReview } from "@/components/trust/sources-and-review";

/**
 * @deprecated Prefer SourcesAndReview directly.
 * Kept as a thin wrapper so existing cancer/treatment/story pages keep working.
 */
export function MedicalDisclaimer({
  reviewedAt,
  sources = [],
}: {
  reviewedAt?: string | null;
  sources?: Source[];
}) {
  return <SourcesAndReview reviewedAt={reviewedAt} sources={sources} />;
}
