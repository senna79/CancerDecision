import { TRUST_COPY, formatTrustDate } from "@/lib/trust/framework";

/** Compact top-of-page trust boundary — detail lives in SourcesAndReview */
export function TrustStrip({
  reviewedAt,
}: {
  reviewedAt?: string | null;
}) {
  return (
    <div className="mb-6 rounded-md border border-[var(--accent-soft)] bg-[var(--accent-soft)]/45 px-4 py-3 text-sm text-[var(--ink-soft)]">
      <p>{TRUST_COPY.educationalBoundary}</p>
      <p className="mt-1 text-[var(--muted)]">
        Content last checked:{" "}
        <span className="font-medium text-[var(--ink)]">
          {formatTrustDate(reviewedAt, "short")}
        </span>
        <span className="mx-1.5 text-[var(--line)]">·</span>
        <a
          href="#sources-and-review"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          Sources &amp; review
        </a>
      </p>
    </div>
  );
}
