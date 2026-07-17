import Link from "next/link";
import type { JourneyContext } from "@/lib/journey/engine";
import { cn } from "@/lib/utils";

export function JourneyProgressRail({
  journey,
  cancerSlug,
}: {
  journey: JourneyContext;
  cancerSlug: string;
}) {
  return (
    <div className="mb-6 rounded-lg border border-[var(--line)] bg-white/80 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
            Decision journey
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-[var(--ink)]">
            {journey.map.title}
          </p>
        </div>
        <Link
          href={`/cancers/${cancerSlug}#decision-map`}
          className="text-xs font-semibold text-[var(--accent)] hover:underline"
        >
          Full map →
        </Link>
      </div>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">
        You are here:{" "}
        <span className="font-semibold text-[var(--ink)]">
          {journey.currentNode.label}
        </span>
      </p>
      <ol className="mt-4 flex flex-wrap gap-2">
        {journey.steps.map((step) => {
          const href = step.primaryQuestionSlug
            ? `/questions/${step.primaryQuestionSlug}`
            : `/cancers/${cancerSlug}#decision-map`;
          const isCurrent = step.status === "current";
          return (
            <li key={step.node.id}>
              <Link
                href={href}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition",
                  isCurrent &&
                    "border-[var(--accent)] bg-[var(--accent)] text-white",
                  step.status === "done" &&
                    "border-[var(--accent)]/40 bg-[var(--accent-soft)]/70 text-[var(--ink)]",
                  step.status === "upcoming" &&
                    "border-[var(--line)] bg-[var(--paper)] text-[var(--muted)]",
                  step.status === "optional" &&
                    "border-dashed border-[var(--line)] bg-white text-[var(--muted)]"
                )}
                aria-current={isCurrent ? "step" : undefined}
              >
                <span
                  className={cn(
                    "size-1.5 rounded-full",
                    isCurrent && "bg-white",
                    step.status === "done" && "bg-[var(--accent)]",
                    step.status === "upcoming" && "bg-[var(--line)]",
                    step.status === "optional" && "bg-[var(--muted)]/50"
                  )}
                />
                {step.node.label.replace(/^\d+\.\s*/, "")}
                {step.status === "optional" ? " (optional)" : ""}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
