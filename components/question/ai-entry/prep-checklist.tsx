import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function PrepChecklist({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <Section id="prep-checklist" title={modules.prepTitle}>
      <ul className="space-y-2">
        {modules.prepItems.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3 text-[var(--ink-soft)]"
          >
            <span
              aria-hidden
              className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border border-[var(--line)] bg-white text-[10px] text-[var(--muted)]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
