import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function IllustrativeScenario({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <Section id="illustrative-scenario" title={modules.scenarioTitle}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded border border-[var(--line)] bg-white/80 px-2 py-0.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--muted)]">
          {modules.scenarioTag}
        </span>
        <span className="text-xs text-[var(--muted)]">
          {modules.scenarioDisclaimer}
        </span>
      </div>
      <div className="mt-4 space-y-3 text-[var(--ink-soft)]">
        {modules.scenarioBody.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <ul className="space-y-1.5 pl-1">
          {modules.scenarioFocus.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[var(--muted)]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>{modules.scenarioClose}</p>
      </div>
    </Section>
  );
}
