import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-[var(--muted)]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--accent)]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--ink-soft)]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
