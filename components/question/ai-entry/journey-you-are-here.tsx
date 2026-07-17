import Link from "next/link";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Light journey strip — brand signal without owning the first viewport */
export function JourneyYouAreHere({
  modules,
  mapHref,
}: {
  modules: AiEntryFlagshipModules;
  mapHref?: string | null;
}) {
  return (
    <nav
      aria-label="Decision journey position"
      className="mt-4 rounded-md border border-[var(--line)] bg-white/70 px-4 py-3 text-sm"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          {modules.journeyLabel}
        </p>
        {mapHref ? (
          <Link
            href={mapHref}
            className="text-xs font-medium text-[var(--accent)] hover:underline"
          >
            Full map →
          </Link>
        ) : null}
      </div>
      <p className="mt-1 text-xs text-[var(--muted)]">You are here</p>
      <ol className="mt-1.5 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[var(--ink-soft)]">
        {modules.journeyPath.map((node, index) => (
          <li key={node.label} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span aria-hidden className="text-[var(--muted)]">
                →
              </span>
            ) : null}
            {node.current ? (
              <span className="font-semibold text-[var(--accent)]">
                {node.label}
              </span>
            ) : node.href ? (
              <Link
                href={node.href}
                className="font-medium text-[var(--accent)] hover:underline"
              >
                {node.label}
              </Link>
            ) : (
              <span>{node.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
