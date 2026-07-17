function formatDate(value: string | null | undefined) {
  if (!value) return "Not yet checked";
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

export function TrustStrip({
  reviewedAt,
}: {
  reviewedAt?: string | null;
}) {
  return (
    <div className="mb-6 rounded-md border border-[var(--accent-soft)] bg-[var(--accent-soft)]/45 px-4 py-3 text-sm text-[var(--ink-soft)]">
      <p>
        Educational information only — not a diagnosis or treatment
        recommendation.
      </p>
      <p className="mt-1 text-[var(--muted)]">
        Content last checked:{" "}
        <span className="font-medium text-[var(--ink)]">
          {formatDate(reviewedAt)}
        </span>
      </p>
      <p className="mt-1 text-xs text-[var(--muted)]">
        May use AI-assisted drafting. Editorially reviewed for clarity. Not
        medically reviewed by a physician unless separately stated.
      </p>
    </div>
  );
}
