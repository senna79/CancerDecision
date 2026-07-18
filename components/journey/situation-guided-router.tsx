"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
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

function bucketContaining(
  activeId: string | null | undefined,
  buckets: SituationBucket[]
) {
  if (!activeId) return null;
  return (
    buckets.find(
      (b) =>
        b.momentIds.includes(activeId) ||
        b.alsoMomentIds?.includes(activeId)
    )?.id ?? null
  );
}

function MomentLink({
  moment,
  isActive,
}: {
  moment: DecisionMoment;
  isActive: boolean;
}) {
  return (
    <Link
      href={moment.href}
      className={cn(
        "block rounded-md px-3 py-2.5 transition",
        isActive
          ? "bg-[rgba(15,118,110,0.1)]"
          : "hover:bg-[rgba(15,118,110,0.06)]"
      )}
    >
      <span className="block text-sm font-semibold text-[var(--ink)]">
        {moment.label}
      </span>
      <span className="mt-0.5 block text-sm text-[var(--ink-soft)]">
        {moment.hint}
      </span>
    </Link>
  );
}

/** Accordion: situation entries → 2–3 primary Entry links (+ optional Also) */
export function SituationGuidedRouter({
  moments,
  buckets = LUNG_SITUATION_BUCKETS,
  orientationLinks = LUNG_ORIENTATION_LINKS,
  activeId,
  footer,
  cancerLabel = "lung cancer",
}: {
  moments: DecisionMoment[];
  buckets?: SituationBucket[];
  /** Supporting guides — not a 7th situation. Pass [] to hide. */
  orientationLinks?: OrientationLink[];
  activeId?: string | null;
  footer?: ReactNode;
  /** Used in the section title */
  cancerLabel?: string;
}) {
  const initialOpen = bucketContaining(activeId, buckets);
  const [openId, setOpenId] = useState<string | null>(initialOpen);

  const momentsByBucket = useMemo(() => {
    const map = new Map<
      string,
      { primary: DecisionMoment[]; also: DecisionMoment[] }
    >();
    for (const bucket of buckets) {
      map.set(bucket.id, {
        primary: filterMomentsByIds(moments, bucket.momentIds),
        also: filterMomentsByIds(moments, bucket.alsoMomentIds ?? []),
      });
    }
    return map;
  }, [buckets, moments]);

  return (
    <section
      id="decision-moment"
      className="scroll-mt-24 rounded-lg border border-[var(--accent)]/30 bg-white/90 p-5 md:p-7"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Start here · about 3 minutes
      </p>
      <h2 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl">
        Where are you in your {cancerLabel} journey?
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
        Open the situation that matches you — then pick one guide. You do not
        need to read every page.
      </p>

      {orientationLinks.length ? (
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

      <div className="mt-5 space-y-2">
        {buckets.map((bucket, index) => {
          const isOpen = openId === bucket.id;
          const { primary, also } = momentsByBucket.get(bucket.id) ?? {
            primary: [],
            also: [],
          };

          return (
            <div
              key={bucket.id}
              className={cn(
                "rounded-md border transition",
                isOpen
                  ? "border-[var(--accent)]/40 bg-white"
                  : "border-[var(--line)] bg-[var(--paper)]/80"
              )}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : bucket.id)}
                className="flex w-full gap-3 px-3 py-3 text-left md:px-4 md:py-3.5"
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                    isOpen
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--line)] bg-white text-[var(--muted)]"
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-[var(--ink)]">
                    {bucket.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-[var(--ink-soft)]">
                    {bucket.hint}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 shrink-0 text-[var(--muted)] transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 5l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              {isOpen ? (
                <div className="border-t border-[var(--line)]/80 px-3 py-3 md:px-4">
                  <ul className="space-y-1">
                    {primary.map((moment) => (
                      <li key={moment.id}>
                        <MomentLink
                          moment={moment}
                          isActive={activeId === moment.id}
                        />
                      </li>
                    ))}
                  </ul>
                  {also.length ? (
                    <div className="mt-3 border-t border-[var(--line)]/60 pt-3">
                      <p className="px-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                        Also
                      </p>
                      <ul className="mt-1 space-y-1">
                        {also.map((moment) => (
                          <li key={moment.id}>
                            <MomentLink
                              moment={moment}
                              isActive={activeId === moment.id}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {footer ? (
        <div className="mt-4 text-sm text-[var(--muted)]">{footer}</div>
      ) : null}
    </section>
  );
}
