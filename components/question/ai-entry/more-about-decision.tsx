"use client";

import type { ReactNode } from "react";

/** Keeps depth in the DOM for AI/SEO; collapsed by default for patients */
export function MoreAboutDecision({ children }: { children: ReactNode }) {
  return (
    <details
      id="more-about-decision"
      className="mt-10 scroll-mt-24 rounded-lg border border-[var(--line)] bg-white/70 open:bg-white/90"
    >
      <summary className="cursor-pointer list-none px-5 py-4 font-heading text-lg font-semibold tracking-[-0.02em] text-[var(--ink)] marker:content-none md:px-6 [&::-webkit-details-marker]:hidden">
        <span className="flex items-center justify-between gap-3">
          <span>More about this decision</span>
          <span className="text-sm font-medium text-[var(--accent)]">
            Show details
          </span>
        </span>
        <span className="mt-1 block text-sm font-normal text-[var(--muted)]">
          When this decision usually appears, deeper explanation, common
          misunderstandings, and examples — optional reading.
        </span>
      </summary>
      <div className="border-t border-[var(--line)] px-5 pb-6 pt-2 md:px-6">
        {children}
      </div>
    </details>
  );
}
