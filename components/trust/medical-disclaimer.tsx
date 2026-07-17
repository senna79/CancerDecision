import type { Source } from "@/types/database";

function formatDate(value: string | null | undefined) {
  if (!value) return "Not yet reviewed";
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(value));
}

export function MedicalDisclaimer({
  reviewedAt,
  sources = [],
}: {
  reviewedAt?: string | null;
  sources?: Source[];
}) {
  return (
    <aside className="mt-12 border-t border-[var(--line)] pt-8">
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        This content provides educational information and does not replace
        professional medical advice, diagnosis, or treatment. Always discuss
        decisions with your clinicians.
      </p>
      <p className="mt-3 text-sm text-[var(--muted)]">
        Content review date:{" "}
        <span className="text-[var(--ink)]">{formatDate(reviewedAt)}</span>
      </p>
      {sources.length > 0 ? (
        <div className="mt-4">
          <h3 className="font-heading text-sm font-semibold tracking-wide text-[var(--ink)]">
            Sources / References
          </h3>
          <ul className="mt-2 space-y-1 text-sm">
            {sources.map((source) => (
              <li key={source.id}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] underline-offset-4 hover:underline"
                >
                  {source.title}
                </a>
                {source.publisher ? (
                  <span className="text-[var(--muted)]"> — {source.publisher}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </aside>
  );
}
