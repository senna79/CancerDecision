import Link from "next/link";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { getEntryPathV2 } from "@/lib/content/entry-path-v2";
import type { DecisionGraphNode } from "@/lib/os/decision-graph";

/**
 * Secondary page ending after Decision Path Steps 1–4.
 * Hierarchy: closure → one next step → light related → one journey.
 */
export function EntryPageEndingV2({
  modules,
  slug,
  graphNode,
  cancerSlug,
  cancerName,
}: {
  modules: AiEntryFlagshipModules;
  slug: string;
  graphNode?: DecisionGraphNode | null;
  cancerSlug?: string | null;
  cancerName?: string | null;
}) {
  const path = getEntryPathV2(slug);
  const completed = path?.completedLabels ?? [
    "Why this decision matters",
    "What could change your options",
    "What to know before acting",
    "Questions to ask your doctor",
  ];
  const related = modules.relatedPaths
    .filter((path) => path.href !== modules.nextStepHref)
    .slice(0, 3);

  const nextFromGraph = (graphNode?.next ?? [])
    .filter((item) => item.href)
    .slice(0, 3);

  const currentLabel =
    graphNode?.stateLabel ??
    modules.journeyPath.find((n) => n.current)?.label ??
    "Biomarker Testing";

  return (
    <div
      id="after-decision-path"
      className="mt-8 scroll-mt-24 space-y-6 print:hidden"
    >
      <div className="border-t border-[var(--line)]/80 pt-6">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          You&apos;ve completed this decision step
        </p>
        <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-[var(--ink-soft)]">
          {completed.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="text-[var(--accent)]" aria-hidden>
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <section id="your-next-step" className="scroll-mt-24">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Your next step
        </p>
        <p className="mt-1 text-sm text-[var(--muted)]">
          One clear move after this page — not a new reading list.
        </p>
        <div className="mt-3">
          <Link
            href={modules.nextStepHref}
            className="inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
          >
            {modules.nextStepCtaLabel} →
          </Link>
          {modules.nextStepCtaMeta ? (
            <p className="mt-2 text-xs text-[var(--muted)]">
              {modules.nextStepCtaMeta}
            </p>
          ) : null}
        </div>
      </section>

      {related.length > 0 ? (
        <section aria-label="Related decisions">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Related decisions
          </p>
          <ul className="mt-1.5 flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-5">
            {related.map((path) => (
              <li key={path.href}>
                <Link
                  href={path.href}
                  className="text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  {path.cta} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <aside
        id="decision-journey"
        className="border-t border-[var(--line)]/80 pt-4"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Your {cancerName ?? modules.cancerLabel} Decision Journey
          </p>
          {cancerSlug ? (
            <Link
              href={`/cancers/${cancerSlug}#decision-map`}
              className="text-xs font-medium text-[var(--accent)] hover:underline"
            >
              Full map →
            </Link>
          ) : null}
        </div>

        <p className="mt-3 text-sm text-[var(--ink-soft)]">
          Where you are now:{" "}
          <span className="font-semibold text-[var(--accent)]">
            {currentLabel}
          </span>
        </p>

        {nextFromGraph.length > 0 ? (
          <div className="mt-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              Next decisions
            </p>
            <ul className="mt-1.5 space-y-1">
              {nextFromGraph.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href!}
                    className="text-sm font-medium text-[var(--accent)] hover:underline"
                  >
                    → {item.stateLabel}
                    {item.optional ? " (optional)" : ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-[var(--ink-soft)]">
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
        )}
      </aside>
    </div>
  );
}
