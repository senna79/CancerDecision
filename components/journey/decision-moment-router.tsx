import Link from "next/link";
import type { ReactNode } from "react";
import type { DecisionMoment } from "@/lib/journey/decision-moments";
import { cn } from "@/lib/utils";

export function DecisionMomentRouter({
  moments,
  title = "Where are you in this decision?",
  subtitle = "Pick the moment that matches you now. You’ll land on a guided next step — not a reading list.",
  activeId,
  compact = false,
  footer,
}: {
  moments: DecisionMoment[];
  title?: string;
  subtitle?: string;
  activeId?: string | null;
  compact?: boolean;
  footer?: ReactNode;
}) {
  return (
    <section
      id="decision-moment"
      className={cn(
        "scroll-mt-24",
        compact
          ? "rounded-lg border border-[var(--accent)]/25 bg-white/85 p-4 md:p-5"
          : "rounded-lg border border-[var(--accent)]/30 bg-white/90 p-5 md:p-7"
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
        Start here · about 3 minutes
      </p>
      <h2
        className={cn(
          "mt-1 font-heading font-semibold tracking-[-0.02em] text-[var(--ink)]",
          compact ? "text-xl" : "text-2xl md:text-3xl"
        )}
      >
        {title}
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
        {subtitle}
      </p>

      <ol className="mt-5 space-y-2">
        {moments.map((moment, index) => {
          const isActive = activeId === moment.id;
          return (
            <li key={moment.id}>
              <Link
                href={moment.href}
                className={cn(
                  "group flex gap-3 rounded-md border px-3 py-3 transition md:px-4 md:py-3.5",
                  isActive
                    ? "border-[var(--accent)] bg-[rgba(15,118,110,0.08)]"
                    : "border-[var(--line)] bg-[var(--paper)]/80 hover:border-[var(--accent)] hover:bg-[rgba(15,118,110,0.05)]"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold",
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--line)] bg-white text-[var(--muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                  )}
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                    {moment.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-[var(--ink-soft)]">
                    {moment.hint}
                  </span>
                  <span className="mt-1.5 block text-sm font-medium text-[var(--accent)]">
                    {moment.nextStep} →
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>

      {footer ? <div className="mt-4 text-sm text-[var(--muted)]">{footer}</div> : null}
    </section>
  );
}
