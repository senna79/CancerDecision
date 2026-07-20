import Link from "next/link";
import { DecisionNodeMark } from "@/components/brand/decision-marks";
import type { JourneyContext } from "@/lib/journey/engine";
import { cn } from "@/lib/utils";

export function JourneyProgressRail({
  journey,
  cancerSlug,
}: {
  journey: JourneyContext;
  cancerSlug: string;
}) {
  const hereLabel =
    journey.currentNode.state_label ??
    journey.currentNode.label.replace(/^\d+\.\s*/, "");
  const nextLabel = journey.next
    ? journey.next.node.state_label ??
      journey.next.node.label.replace(/^\d+\.\s*/, "")
    : null;

  return (
    <div className="mb-6 rounded-lg border border-[var(--accent)]/25 bg-white/85 p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            Your path
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

      <div className="mt-3 rounded-md border border-[var(--line)] bg-[var(--paper)]/80 px-3 py-2.5">
        <p className="text-xs uppercase tracking-[0.12em] text-[var(--muted)]">
          You are here
        </p>
        <p className="mt-0.5 font-semibold text-[var(--ink)]">{hereLabel}</p>
        {nextLabel ? (
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            Next on your path:{" "}
            <span className="font-medium text-[var(--accent)]">{nextLabel}</span>
          </p>
        ) : (
          <p className="mt-1 text-sm text-[var(--ink-soft)]">
            Review the map for optional branches or related decisions.
          </p>
        )}
      </div>

      <ol className="mt-4 space-y-1.5">
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
                  "flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-sm transition",
                  isCurrent &&
                    "border-[var(--accent)] bg-[rgba(15,118,110,0.1)] font-semibold text-[var(--ink)]",
                  step.status === "done" &&
                    "border-transparent bg-transparent text-[var(--ink-soft)]",
                  step.status === "upcoming" &&
                    "border-transparent bg-transparent text-[var(--muted)]",
                  step.status === "optional" &&
                    "border-dashed border-[var(--line)] text-[var(--muted)]"
                )}
                aria-current={isCurrent ? "step" : undefined}
              >
                <DecisionNodeMark
                  active={isCurrent || step.status === "done"}
                  className={cn(
                    "size-4 shrink-0",
                    isCurrent || step.status === "done"
                      ? "text-[var(--accent)]"
                      : "text-[var(--muted)]",
                    step.status === "optional" && "opacity-70"
                  )}
                />
                <span>
                  {step.stateLabel}
                  {isCurrent ? " (current)" : ""}
                  {step.status === "optional" ? " (optional)" : ""}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-[11px] text-[var(--muted)]">
        Filled node = on your path · open node = still ahead
      </p>
    </div>
  );
}
