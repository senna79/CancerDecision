/** Fast “is this my situation?” under H1 — not a nursing-care guide */
export function WhoThisIsFor({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items.length) return null;

  return (
    <div className="rounded-md border border-[var(--line)] bg-white/70 px-4 py-3">
      <p className="text-sm font-semibold text-[var(--ink)]">{title}</p>
      <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-[var(--accent)]" aria-hidden>
              ·
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
