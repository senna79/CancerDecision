import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function DoesNotDecide({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.doesNotDecideTitle) return null;

  return (
    <Section id="does-not-decide" title={modules.doesNotDecideTitle}>
      {modules.doesNotDecideLead ? <p>{modules.doesNotDecideLead}</p> : null}
      {modules.doesNotDecideItems?.length ? (
        <>
          <p className="mt-3 text-sm font-medium text-[var(--ink)]">
            Treatment decisions may also depend on:
          </p>
          <ul className="mt-2 space-y-2">
            {modules.doesNotDecideItems.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {modules.doesNotDecideClose ? (
        <p className="mt-4 font-medium text-[var(--ink)]">
          {modules.doesNotDecideClose}
        </p>
      ) : null}
    </Section>
  );
}
