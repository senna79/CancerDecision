import Link from "next/link";
import { TrackLink } from "@/components/analytics/track-link";
import { CareOptionsSection } from "@/components/care-navigation/care-options-section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { showsCareOptionsOnEntry } from "@/lib/care-partners/entry-slugs";
import { getEntryPathV2 } from "@/lib/content/entry-path-v2";
import {
  cancerSituationMapHref,
  momentIdForEntrySlug,
} from "@/lib/journey/decision-moments";
import type { DecisionGraphNode } from "@/lib/os/decision-graph";

const panelClass =
  "rounded-xl border border-[var(--line)] bg-white/85 px-5 py-5 md:px-6 md:py-6";

const eyebrowClass =
  "text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]";

/**
 * Secondary page ending after Decision Path Steps 1–4.
 * Three stacked panels share the same chrome so the exit feels aligned.
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

  const currentLabel =
    graphNode?.stateLabel ??
    modules.journeyPath.find((n) => n.current)?.label ??
    "Current step";

  const journeyNodes =
    modules.journeyPath.length > 0
      ? modules.journeyPath
      : [{ label: currentLabel, current: true as const }];

  const activeMomentId = momentIdForEntrySlug(slug);

  return (
    <div id="after-decision-path" className="mt-10 scroll-mt-24 space-y-3">
      {/* 1 — Closure */}
      <section className={panelClass} aria-label="Completed decision step">
        <p className={eyebrowClass}>You&apos;ve completed this decision step</p>
        <ol className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {completed.map((item, index) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-[var(--ink-soft)]"
            >
              <span
                aria-hidden
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)]/12 text-[11px] font-bold text-[var(--accent)]"
              >
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 2 — Leave panel */}
      <section
        id="your-next-step"
        aria-label="Continue after this decision"
        className={panelClass}
      >
        <p className={eyebrowClass}>Continue after this decision</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-8">
          <div>
            <p className="text-sm font-semibold text-[var(--ink)]">
              Your next step
            </p>
            <p className="mt-1 text-sm text-[var(--muted)]">
              One clear move after this page — not a new reading list.
            </p>
            <TrackLink
              href={modules.nextStepHref}
              event="next_step_click"
              eventProps={{
                slug,
                href: modules.nextStepHref,
                role: "primary",
              }}
              className="mt-4 inline-flex rounded-md bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
            >
              {modules.nextStepCtaLabel} →
            </TrackLink>
            {modules.nextStepCtaMeta ? (
              <p className="mt-2 text-xs text-[var(--muted)]">
                {modules.nextStepCtaMeta}
              </p>
            ) : null}
            <p className="mt-4 text-sm text-[var(--ink-soft)]">
              Saved questions for your visit?{" "}
              <Link
                href="/prep-sheet"
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                Open your prep sheet →
              </Link>
            </p>
          </div>

          {related.length > 0 ? (
            <div className="border-t border-[var(--line)] pt-5 md:border-t-0 md:border-l md:pl-8 md:pt-0">
              <p className="text-sm font-semibold text-[var(--ink)]">
                Also related
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
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

      {/* Care Options — immediately under Continue; commercial sibling, not clinical path */}
      {showsCareOptionsOnEntry(slug) ? (
        <CareOptionsSection source={slug} variant="panel" />
      ) : null}

      {/* 3 — Journey position only (no duplicate CTAs) */}
      <aside
        id="decision-journey"
        className={panelClass}
        aria-label="Decision journey position"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <p className={eyebrowClass}>
            Your {cancerName ?? modules.cancerLabel} Decision Journey
          </p>
          {cancerSlug ? (
            <Link
              href={cancerSituationMapHref(
                cancerSlug,
                activeMomentId ?? "newly-diagnosed"
              )}
              className="text-xs font-semibold text-[var(--accent)] hover:underline"
            >
              Where are you in your journey? →
            </Link>
          ) : null}
        </div>

        <ol className="mt-5 flex items-start overflow-x-auto pb-0.5">
          {journeyNodes.map((node, index) => {
            const isCurrent = Boolean(node.current);
            const isLast = index === journeyNodes.length - 1;
            return (
              <li
                key={node.label}
                className="flex min-w-[6.5rem] flex-1 items-start"
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
                          ? "size-3 shrink-0 rounded-full bg-[var(--accent)] ring-[6px] ring-[rgba(15,118,110,0.12)]"
                          : "size-2.5 shrink-0 rounded-full border-2 border-[var(--line)] bg-white"
                      }
                    />
                    <span
                      aria-hidden
                      className={
                        isLast
                          ? "h-px flex-1 bg-transparent"
                          : "h-px flex-1 bg-[var(--line)]"
                      }
                    />
                  </div>
                  <div className="mt-2.5 px-1">
                    {isCurrent ? (
                      <>
                        <span className="block text-sm font-semibold text-[var(--accent)]">
                          {node.label}
                        </span>
                        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                          You are here
                        </span>
                      </>
                    ) : node.href ? (
                      <Link
                        href={node.href}
                        className="text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] hover:underline"
                      >
                        {node.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-[var(--ink-soft)]">
                        {node.label}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </aside>
    </div>
  );
}
