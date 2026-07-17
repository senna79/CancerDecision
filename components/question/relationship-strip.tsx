import Link from "next/link";

export type RelationLink = {
  href: string;
  label: string;
};

/** Visible graph for users + AI: About / Decision / Part of / Related */
export function RelationshipStrip({
  about,
  decision,
  partOf,
  related,
}: {
  about: RelationLink | null;
  decision: string;
  partOf: RelationLink | null;
  related: RelationLink[];
}) {
  return (
    <aside
      id="knowledge-relations"
      className="mt-5 rounded-md border border-[var(--line)] bg-[var(--paper)]/90 px-4 py-3 text-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Decision relationships
      </p>
      <dl className="mt-2 grid gap-2 sm:grid-cols-2">
        <div>
          <dt className="text-xs text-[var(--muted)]">About</dt>
          <dd className="font-medium text-[var(--ink)]">
            {about ? (
              <Link href={about.href} className="text-[var(--accent)] hover:underline">
                {about.label}
              </Link>
            ) : (
              "—"
            )}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-[var(--muted)]">Decision</dt>
          <dd className="font-medium text-[var(--ink)]">{decision}</dd>
        </div>
        <div>
          <dt className="text-xs text-[var(--muted)]">Part of</dt>
          <dd className="font-medium text-[var(--ink)]">
            {partOf ? (
              <Link href={partOf.href} className="text-[var(--accent)] hover:underline">
                {partOf.label}
              </Link>
            ) : (
              "—"
            )}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs text-[var(--muted)]">Related decisions</dt>
          <dd className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
            {related.length > 0 ? (
              related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  {item.label}
                </Link>
              ))
            ) : (
              <span className="text-[var(--muted)]">—</span>
            )}
          </dd>
        </div>
      </dl>
    </aside>
  );
}
