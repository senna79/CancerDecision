import Link from "next/link";
import type { JourneyContext } from "@/lib/journey/engine";
import { cn } from "@/lib/utils";

function statusMarker(status: JourneyContext["steps"][number]["status"]) {
  if (status === "done") return "✓";
  if (status === "current") return "?";
  if (status === "optional") return "◇";
  return "?";
}

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
            Your decision status
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
        Focusing on:{" "}
        <span className="font-semibold text-[var(--ink)]">
          {journey.currentNode.state_label ??
            journey.currentNode.label.replace(/^\d+\.\s*/, "")}
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
                  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs transition",
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
                    "font-semibold",
                    isCurrent && "text-white",
                    step.status === "done" && "text-[var(--accent)]"
                  )}
                  aria-hidden
                >
                  {statusMarker(step.status)}
                </span>
                {step.stateLabel}
                {step.status === "optional" ? " (optional)" : ""}
              </Link>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-[11px] text-[var(--muted)]">
        ✓ earlier on this path · ? open decision · ◇ optional branch
      </p>
    </div>
  );
}
