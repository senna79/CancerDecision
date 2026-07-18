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
    .filter((item) => item.href !== modules.nextStepHref)
    .slice(0, 3);

  const nextFromGraph = (graphNode?.next ?? [])
    .filter((item) => item.href)
    .slice(0, 3);

  const currentLabel =
    graphNode?.stateLabel ??
    modules.journeyPath.find((n) => n.current)?.label ??
    "Current step";

  const journeyNodes =
    modules.journeyPath.length > 0
      ? modules.journeyPath
      : [{ label: currentLabel, current: true as const }];

  return (
    <div id="after-decision-path" className="mt-10 scroll-mt-24 space-y-5">
      {/* Closure */}
      <div className="rounded-xl border border-[var(--accent)]/15 bg-[rgba(15,118,110,0.04)] px-4 py-4 md:px-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
          You&apos;ve completed this decision step
        </p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {completed.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-[var(--ink-soft)]"
            >
              <span
                aria-hidden
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] font-bold text-white"
              >
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Leave panel: primary next step + secondary related */}
      <section
        id="your-next-step"
        aria-label="Continue after this decision"
        className="scroll-mt-24 overflow-hidden rounded-xl border border-[var(--accent)]/25 bg-white/90"
      >
        <div className="border-b border-[var(--line)]/60 bg-[rgba(15,118,110,0.03)] px-4 py-2.5 md:px-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Continue after this decision
          </p>
        </div>
        <div className="grid md:grid-cols-[minmax(0,65fr)_minmax(0,35fr)]">
          <div className="border-l-4 border-[var(--accent)] px-4 py-4 md:px-5 md:py-5">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Your next step
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              One clear move after this page — not a new reading list.
            </p>
            <div className="mt-4">
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
          </div>

          {related.length > 0 ? (
            <div className="border-t border-[var(--line)]/70 px-4 py-4 md:border-t-0 md:border-l md:border-[var(--line)]/70 md:px-5 md:py-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Also related
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Optional — only if these fit your situation.
              </p>
              <ul className="mt-3 space-y-2">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-[var(--accent)] hover:underline"
                    >
                      {item.cta} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {/* Journey — visual path strip */}
      <aside
        id="decision-journey"
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-white/75"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)]/70 bg-[var(--paper)]/80 px-4 py-3 md:px-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Your {cancerName ?? modules.cancerLabel} Decision Journey
          </p>
          {cancerSlug ? (
            <Link
              href={`/cancers/${cancerSlug}#decision-map`}
              className="text-xs font-semibold text-[var(--accent)] hover:underline"
            >
              Full map →
            </Link>
          ) : null}
        </div>

        <div className="px-4 py-5 md:px-5">
          <p className="text-xs text-[var(--muted)]">Where you are now</p>

          {/* Visual node strip */}
          <ol className="mt-4 flex items-start gap-0 overflow-x-auto pb-1">
            {journeyNodes.map((node, index) => {
              const isCurrent = Boolean(node.current);
              const isLast = index === journeyNodes.length - 1;
              return (
                <li
                  key={node.label}
                  className="flex min-w-[7.5rem] flex-1 items-start"
                >
                  <div className="flex w-full flex-col items-center text-center">
                    <div className="flex w-full items-center">
                      <span
                        aria-hidden
                        className={
                          index === 0
                            ? "h-px flex-1 bg-transparent"
                            : "h-px flex-1 bg-[var(--line)]"
                        }
                      />
                      <span
                        aria-hidden
                        className={
                          isCurrent
                            ? "size-8 shrink-0 rounded-full bg-[var(--accent)] ring-4 ring-[rgba(15,118,110,0.15)]"
                            : "flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-[var(--line)] bg-white text-[11px] font-semibold text-[var(--muted)]"
                        }
                      >
                        {isCurrent ? null : index + 1}
                      </span>
                      <span
                        aria-hidden
                        className={
                          isLast
                            ? "h-px flex-1 bg-transparent"
                            : "h-px flex-1 bg-[var(--line)]"
                        }
                      />
                    </div>
                    <div className="mt-2 px-1">
                      {isCurrent ? (
                        <span className="text-sm font-semibold text-[var(--accent)]">
                          {node.label}
                        </span>
                      ) : node.href ? (
                        <Link
                          href={node.href}
                          className="text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--accent)] hover:underline"
                        >
                          {node.label}
                        </Link>
                      ) : (
                        <span className="text-sm text-[var(--ink-soft)]">
                          {node.label}
                        </span>
                      )}
                      {isCurrent ? (
                        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                          You are here
                        </span>
                      ) : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {nextFromGraph.length > 0 ? (
            <div className="mt-5 border-t border-[var(--line)]/70 pt-4">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Next decisions
              </p>
              <ul className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {nextFromGraph.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href!}
                      className="inline-flex items-center gap-2 rounded-md border border-[var(--accent)]/20 bg-[rgba(15,118,110,0.05)] px-3 py-2 text-sm font-semibold text-[var(--accent)] transition hover:border-[var(--accent)]/40 hover:bg-[rgba(15,118,110,0.08)]"
                    >
                      <span aria-hidden className="text-[var(--accent)]">
                        →
                      </span>
                      {item.stateLabel}
                      {item.optional ? " (optional)" : ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
