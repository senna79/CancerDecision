import Link from "next/link";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function RelatedDecisionPaths({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <section id="related-decision-paths" className="scroll-mt-24 py-8">
      <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
        {modules.relatedPathsTitle}
      </h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-1 md:grid-cols-3">
        {modules.relatedPaths.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className="rounded-lg border border-[var(--line)] bg-white/75 p-4 transition hover:border-[var(--accent)] hover:shadow-[0_8px_20px_rgba(23,48,42,0.06)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              {path.title}
            </p>
            <p className="mt-2 font-medium text-[var(--ink)]">{path.question}</p>
            <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
              {path.cta} →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
