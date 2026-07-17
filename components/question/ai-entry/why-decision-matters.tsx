import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function WhyDecisionMatters({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <Section id="why-this-decision-matters" title={modules.whyTitle}>
      <p>{modules.whyLead}</p>
      <ul className="mt-3 space-y-2">
        {modules.whyQuestions.map((q) => (
          <li
            key={q}
            className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{q}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 space-y-2">
        {modules.whyClose.map((line) => (
          <p key={line} className="font-medium text-[var(--ink)]">
            {line}
          </p>
        ))}
      </div>
    </Section>
  );
}
