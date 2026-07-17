"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { DecisionMomentRouter } from "@/components/journey/decision-moment-router";
import {
  filterMomentsByIds,
  type DecisionMoment,
} from "@/lib/journey/decision-moments";
import {
  LUNG_SITUATION_BUCKETS,
  type SituationBucket,
} from "@/lib/journey/situation-buckets";
import { cn } from "@/lib/utils";

type View =
  | { kind: "buckets" }
  | { kind: "bucket"; bucketId: string }
  | { kind: "all" };

function initialView(activeId?: string | null): View {
  if (!activeId) return { kind: "buckets" };
  const match = LUNG_SITUATION_BUCKETS.find((b) =>
    b.momentIds.includes(activeId)
  );
  if (match) return { kind: "bucket", bucketId: match.id };
  return { kind: "all" };
}

export function SituationGuidedRouter({
  moments,
  buckets = LUNG_SITUATION_BUCKETS,
  activeId,
  footer,
}: {
  moments: DecisionMoment[];
  buckets?: SituationBucket[];
  activeId?: string | null;
  footer?: ReactNode;
}) {
  const [view, setView] = useState<View>(() => initialView(activeId));

  const selectedBucket = useMemo(() => {
    if (view.kind !== "bucket") return null;
    return buckets.find((b) => b.id === view.bucketId) ?? null;
  }, [buckets, view]);

  const visibleMoments = useMemo(() => {
    if (view.kind === "all") return moments;
    if (view.kind === "bucket" && selectedBucket) {
      return filterMomentsByIds(moments, selectedBucket.momentIds);
    }
    return [];
  }, [moments, selectedBucket, view]);

  if (view.kind === "buckets") {
    return (
      <section
        id="decision-moment"
        className="scroll-mt-24 rounded-lg border border-[var(--accent)]/30 bg-white/90 p-5 md:p-7"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Start here · about 3 minutes
        </p>
        <h2 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl">
          Where are you in your lung cancer journey?
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
          Tell us where you are — we’ll show the relevant next steps. You do not
          need to read every guide.
        </p>

        <ol className="mt-5 space-y-2">
          {buckets.map((bucket, index) => (
            <li key={bucket.id}>
              <button
                type="button"
                onClick={() =>
                  setView({ kind: "bucket", bucketId: bucket.id })
                }
                className="group flex w-full gap-3 rounded-md border border-[var(--line)] bg-[var(--paper)]/80 px-3 py-3 text-left transition hover:border-[var(--accent)] hover:bg-[rgba(15,118,110,0.05)] md:px-4 md:py-3.5"
              >
                <span
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[11px] font-bold text-[var(--muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                    {bucket.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-[var(--ink-soft)]">
                    {bucket.hint}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <button
            type="button"
            onClick={() => setView({ kind: "all" })}
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Explore all decision guides
          </button>
        </div>

        {footer ? <div className="mt-4 text-sm text-[var(--muted)]">{footer}</div> : null}
      </section>
    );
  }

  const stepTitle =
    view.kind === "all"
      ? "All lung cancer decision guides"
      : selectedBucket?.label ?? "Your next steps";

  const stepSubtitle =
    view.kind === "all"
      ? "Pick the guide that matches you now. Each one opens What to do next."
      : "These guides fit your situation. Pick one to see your next step.";

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <button
          type="button"
          onClick={() => setView({ kind: "buckets" })}
          className="font-semibold text-[var(--accent)] hover:underline"
        >
          ← Where are you?
        </button>
        {view.kind === "bucket" ? (
          <button
            type="button"
            onClick={() => setView({ kind: "all" })}
            className={cn("text-[var(--muted)] hover:text-[var(--accent)]")}
          >
            See all guides
          </button>
        ) : null}
      </div>
      <DecisionMomentRouter
        moments={visibleMoments}
        activeId={activeId}
        title={stepTitle}
        subtitle={stepSubtitle}
        eyebrow="Your next-step guides"
        footer={footer}
      />
    </div>
  );
}
