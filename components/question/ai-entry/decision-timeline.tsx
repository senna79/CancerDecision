import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function DecisionTimeline({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <Section id="decision-timeline" title={modules.timelineTitle}>
      <ol className="mt-1 space-y-0">
        {modules.timelineSteps.map((step, index) => (
          <li key={step} className="relative flex gap-4 pb-5 last:pb-0">
            <div className="flex w-6 flex-col items-center">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/50 bg-white text-xs font-semibold text-[var(--accent)]">
                {index + 1}
              </span>
              {index < modules.timelineSteps.length - 1 ? (
                <span
                  aria-hidden
                  className="mt-1 w-px flex-1 bg-[var(--line)]"
                />
              ) : null}
            </div>
            <p className="pt-0.5 text-[var(--ink)]">{step}</p>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-sm text-[var(--muted)]">{modules.timelineNote}</p>
    </Section>
  );
}
