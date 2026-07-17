import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Principle-level cost/insurance — never fixed prices */
export function CostConsiderations({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.costTitle || !modules.costLead) return null;

  return (
    <Section id="cost-considerations" title={modules.costTitle}>
      <p>{modules.costLead}</p>
      {modules.costItems?.length ? (
        <ul className="mt-3 space-y-2">
          {modules.costItems.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {modules.costClose ? (
        <p className="mt-4 font-medium text-[var(--ink)]">{modules.costClose}</p>
      ) : null}
    </Section>
  );
}
