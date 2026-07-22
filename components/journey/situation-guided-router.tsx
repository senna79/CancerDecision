import Link from "next/link";
import type { ReactNode } from "react";
import { TrackLink } from "@/components/analytics/track-link";
import { DecisionMarkBadge } from "@/components/brand/decision-marks";
import { markForSituationBucket } from "@/lib/brand/situation-marks";
import {
  filterMomentsByIds,
  type DecisionMoment,
} from "@/lib/journey/decision-moments";
import {
  LUNG_ORIENTATION_LINKS,
  LUNG_SITUATION_BUCKETS,
  type OrientationLink,
  type SituationBucket,
  type SituationQuickScenario,
} from "@/lib/journey/situation-buckets";
import { cn } from "@/lib/utils";

function MomentLink({
  moment,
  isActive,
  compact,
  tone = "primary",
}: {
  moment: DecisionMoment;
  isActive: boolean;
  compact?: boolean;
  /** Primary = start-here guides; also = secondary related links */
  tone?: "primary" | "also";
}) {
  const isAlso = tone === "also";

  return (
    <TrackLink
      href={moment.href}
      event="situation_click"
      eventProps={{
        moment: moment.id,
        tone,
      }}
      className={cn(
        "group block rounded-md transition",
        compact || isAlso ? "px-2.5 py-1.5" : "px-3 py-2",
        isActive
          ? "bg-[rgba(15,118,110,0.1)]"
          : "hover:bg-[rgba(15,118,110,0.06)]"
      )}
    >
      <span
        className={cn(
          "block group-hover:text-[var(--accent)]",
          isAlso
            ? "text-sm font-medium text-[var(--ink-soft)]"
            : cn(
                "font-semibold text-[var(--ink)]",
                compact ? "text-sm" : "text-sm md:text-[0.95rem]"
              )
        )}
      >
        {moment.label}
      </span>
      {!compact && !isAlso ? (
        <span className="mt-0.5 block text-sm text-[var(--ink-soft)]">
          {moment.hint}
        </span>
      ) : null}
    </TrackLink>
  );
}

function TreeBranch({
  children,
  last = false,
}: {
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <li className="relative pl-5">
      {/* vertical rail */}
      <span
        aria-hidden
        className={cn(
          "absolute left-[0.35rem] top-0 w-px bg-[var(--line)]",
          last ? "h-3.5" : "bottom-0"
        )}
      />
      {/* horizontal stub */}
      <span
        aria-hidden
        className="absolute left-[0.35rem] top-3.5 h-px w-3 bg-[var(--line)]"
      />
      {children}
    </li>
  );
}

/** Directory tree: situation → always-visible guide links (homepage / cancer hub nav) */
export function SituationGuidedRouter({
  moments,
  buckets = LUNG_SITUATION_BUCKETS,
  orientationLinks = LUNG_ORIENTATION_LINKS,
  quickScenarios,
  activeId,
  footer,
  cancerLabel = "lung cancer",
  variant = "full",
}: {
  moments: DecisionMoment[];
  buckets?: SituationBucket[];
  /** Supporting guides — not a 7th situation. Pass [] to hide. */
  orientationLinks?: OrientationLink[];
  /** Optional jump chips that scroll to existing situation buckets */
  quickScenarios?: SituationQuickScenario[];
  activeId?: string | null;
  footer?: ReactNode;
  /** Used in the section title */
  cancerLabel?: string;
  /** full = hub/home; compact = Entry page ending for organic traffic */
  variant?: "full" | "compact";
}) {
  const compact = variant === "compact";
  const bucketIds = new Set(buckets.map((b) => b.id));
  const visibleQuickScenarios = (quickScenarios ?? []).filter((s) =>
    bucketIds.has(s.bucketId)
  );

  const momentsByBucket = buckets
    .map((bucket) => ({
      bucket,
      primary: filterMomentsByIds(moments, bucket.momentIds),
      also: filterMomentsByIds(moments, bucket.alsoMomentIds ?? []),
    }))
    .filter(({ primary, also }) => primary.length > 0 || also.length > 0);

  return (
    <section
      id={compact ? "where-next-decision" : "decision-moment"}
      className={cn(
        "scroll-mt-24 rounded-lg border bg-white/90",
        compact
          ? "border-[var(--line)] p-4 md:p-5"
          : "border-[var(--accent)]/30 p-5 md:p-7"
      )}
    >
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.14em]",
          compact ? "text-[var(--muted)]" : "text-[var(--accent)]"
        )}
      >
        {compact ? "Continue exploring" : "Your decision map · about 3 minutes"}
      </p>
      <h2
        className={cn(
          "mt-1 font-heading font-semibold tracking-[-0.02em] text-[var(--ink)]",
          compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
        )}
      >
        {compact
          ? "Still deciding something else?"
          : `Find the ${cancerLabel} decision you are facing now`}
      </h2>
      <p
        className={cn(
          "mt-2 max-w-2xl leading-relaxed text-[var(--muted)]",
          compact ? "text-sm" : "text-sm md:text-base"
        )}
      >
        {compact
          ? "Scan the map below and open the guide that fits — then come back here anytime for the next decision."
          : "A diagnosis creates many questions at once. You do not need to solve them all today. This is a navigation map, not a reading list — find the decision you are facing now, open one guide, then return when the next question comes up."}
      </p>

      {!compact && visibleQuickScenarios.length ? (
        <div className="mt-5 rounded-lg border border-[var(--line)] bg-[rgba(15,118,110,0.03)] p-4 md:p-5">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Quick start
          </p>
          <h3 className="mt-1 font-heading text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
            Which sounds most like you?
          </h3>
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            Jump to a situation below — same map, fewer steps to choose.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {visibleQuickScenarios.map((scenario) => (
              <li key={scenario.bucketId + scenario.label}>
                <a
                  href={`#situation-${scenario.bucketId}`}
                  className="inline-flex rounded-md border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--accent)]/50 hover:text-[var(--accent)]"
                >
                  {scenario.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {!compact && orientationLinks.length ? (
        <div className="mt-6 rounded-lg border border-[var(--accent)]/25 bg-[rgba(15,118,110,0.04)] p-4 md:p-5">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                Optional foundation
              </p>
              <h3 className="mt-1 font-heading text-lg font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-xl">
                Need a quick foundation first? (Optional)
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-[var(--ink-soft)]">
                You can start with a decision situation below even if you do not
                know all the details yet. Open a short guide only if you want
                basics first.
              </p>
            </div>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {orientationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex h-full min-h-[7.5rem] flex-col rounded-md border border-[var(--line)] bg-white px-4 py-4 transition hover:border-[var(--accent)]/50 hover:bg-[rgba(15,118,110,0.05)]"
                >
                  <span className="font-heading text-base font-semibold tracking-[-0.02em] text-[var(--ink)] group-hover:text-[var(--accent)] md:text-lg">
                    {link.label}
                  </span>
                  <span className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {link.hint}
                  </span>
                  <span className="mt-3 text-sm font-semibold text-[var(--accent)]">
                    Open guide →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <ol className="mt-6 space-y-5 md:space-y-6">
        {momentsByBucket.map(({ bucket, primary, also }) => {
          const hasActive =
            primary.some((m) => m.id === activeId) ||
            also.some((m) => m.id === activeId);
          const branchItems = [
            ...primary.map((moment) => ({ kind: "primary" as const, moment })),
            ...also.map((moment) => ({ kind: "also" as const, moment })),
          ];
          const markId = markForSituationBucket(bucket.id);

          return (
            <li
              key={bucket.id}
              id={`situation-${bucket.id}`}
              className={cn(
                "scroll-mt-24",
                hasActive && "rounded-md ring-1 ring-[var(--accent)]/25"
              )}
            >
              <div className="flex gap-3">
                <DecisionMarkBadge
                  id={markId}
                  active={hasActive}
                  className="mt-0.5 size-6"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-base font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-lg">
                    {bucket.label}
                  </h3>
                  <p className="mt-0.5 text-sm text-[var(--ink-soft)]">
                    {bucket.hint}
                  </p>

                  <ul className="mt-2.5">
                    {branchItems.map((item, itemIndex) => {
                      const isLast = itemIndex === branchItems.length - 1;
                      const showAlsoLabel =
                        item.kind === "also" &&
                        (itemIndex === 0 ||
                          branchItems[itemIndex - 1]?.kind === "primary");

                      return (
                        <TreeBranch key={item.moment.id} last={isLast}>
                          {showAlsoLabel ? (
                            <p className="mb-1 mt-2 px-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                              You may also need to consider
                            </p>
                          ) : null}
                          <MomentLink
                            moment={item.moment}
                            isActive={activeId === item.moment.id}
                            compact={compact}
                            tone={item.kind === "also" ? "also" : "primary"}
                          />
                        </TreeBranch>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {footer ? (
        <div className="mt-5 border-t border-[var(--line)]/70 pt-4 text-sm text-[var(--muted)]">
          {footer}
        </div>
      ) : null}
    </section>
  );
}
