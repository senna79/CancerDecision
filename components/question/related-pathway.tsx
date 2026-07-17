import Link from "next/link";

type LinkItem = {
  href: string;
  title: string;
  meta?: string;
};

export function RelatedPathway({
  title,
  items,
  emptyHint,
}: {
  title: string;
  items: LinkItem[];
  emptyHint: string;
}) {
  return (
    <section className="scroll-mt-24 py-6">
      <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
        {title}
      </h2>
      {items.length === 0 ? (
        <p className="mt-3 text-sm text-[var(--muted)]">{emptyHint}</p>
      ) : (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-[var(--line)] bg-white/75 p-4 transition hover:border-[var(--accent)] hover:shadow-[0_8px_20px_rgba(23,48,42,0.06)]"
            >
              <p className="font-medium text-[var(--ink)]">{item.title}</p>
              {item.meta ? (
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
                  {item.meta}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
