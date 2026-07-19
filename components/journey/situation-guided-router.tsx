import Link from "next/link";
import type { ReactNode } from "react";
import {
  filterMomentsByIds,
  type DecisionMoment,
} from "@/lib/journey/decision-moments";
import {
  LUNG_ORIENTATION_LINKS,
  LUNG_SITUATION_BUCKETS,
  type OrientationLink,
  type SituationBucket,
} from "@/lib/journey/situation-buckets";
import { cn } from "@/lib/utils";

function MomentLink({
  moment,
  isActive,
  compact,
}: {
  moment: DecisionMoment;
  isActive: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href={moment.href}
      className={cn(
        "group block rounded-md transition",
        compact ? "px-2.5 py-1.5" : "px-3 py-2",
        isActive
          ? "bg-[rgba(15,118,110,0.1)]"
          : "hover:bg-[rgba(15,118,110,0.06)]"
      )}
    >
      <span
        className={cn(
          "block font-medium text-[var(--ink)] group-hover:text-[var(--accent)]",
          compact ? "text-sm" : "text-sm md:text-[0.95rem]"
        )}
      >
        {moment.label}
      </span>
      {!compact ? (
        <span className="mt-0.5 block text-sm text-[var(--ink-soft)]">
          {moment.hint}
        </span>
      ) : null}
    </Link>
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
  activeId,
  footer,
  cancerLabel = "lung cancer",
  variant = "full",
}: {
  moments: DecisionMoment[];
  buckets?: SituationBucket[];
  /** Supporting guides — not a 7th situation. Pass [] to hide. */
  orientationLinks?: OrientationLink[];
  activeId?: string | null;
  footer?: ReactNode;
  /** Used in the section title */
  cancerLabel?: string;
  /** full = hub/home; compact = Entry page ending for organic traffic */
  variant?: "full" | "compact";
}) {
  const compact = variant === "compact";

  const momentsByBucket = buckets.map((bucket) => ({
    bucket,
    primary: filterMomentsByIds(moments, bucket.momentIds),
    also: filterMomentsByIds(moments, bucket.alsoMomentIds ?? []),
  }));

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
          : `Where are you in your ${cancerLabel} journey?`}
      </h2>
      <p
        className={cn(
          "mt-2 max-w-2xl leading-relaxed text-[var(--muted)]",
          compact ? "text-sm" : "text-sm md:text-base"
        )}
      >
        {compact
          ? "Scan the map below and open the guide that fits — then come back here anytime for the next decision."
          : "This is a navigation map, not a reading list. Find your situation, open one guide, and return when the next question comes up."}
      </p>

      {!compact && orientationLinks.length ? (
        <p className="mt-4 max-w-2xl border-l-2 border-[var(--accent)]/40 pl-3 text-sm text-[var(--ink-soft)]">
          <span className="font-semibold text-[var(--ink)]">
            Need orientation first?{" "}
          </span>
          {orientationLinks.map((link, index) => (
            <span key={link.href}>
              {index > 0 ? (
                <span className="text-[var(--muted)]"> · </span>
              ) : null}
              <Link
                href={link.href}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </p>
      ) : null}

      <ol className="mt-6 space-y-5 md:space-y-6">
        {momentsByBucket.map(({ bucket, primary, also }, index) => {
          const hasActive =
            primary.some((m) => m.id === activeId) ||
            also.some((m) => m.id === activeId);
          const branchItems = [
            ...primary.map((moment) => ({ kind: "primary" as const, moment })),
            ...also.map((moment) => ({ kind: "also" as const, moment })),
          ];

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
                <span
                  className={cn(
                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                    hasActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--line)] bg-[var(--paper)] text-[var(--muted)]"
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
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
                            <p className="mb-0.5 px-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                              Also
                            </p>
                          ) : null}
                          <MomentLink
                            moment={item.moment}
                            isActive={activeId === item.moment.id}
                            compact={compact}
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
