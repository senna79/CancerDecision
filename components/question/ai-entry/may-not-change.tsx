import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function MayNotChange({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.mayNotTitle) return null;

  return (
    <Section id="may-not-change" title={modules.mayNotTitle}>
      {modules.mayNotLead ? <p>{modules.mayNotLead}</p> : null}
      {modules.mayNotWhenIntro && modules.mayNotWhen?.length ? (
        <>
          <p className="mt-3 text-sm font-medium text-[var(--ink)]">
            {modules.mayNotWhenIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.mayNotWhen.map((item) => (
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
      {modules.mayNotValueIntro && modules.mayNotValue?.length ? (
        <>
          <p className="mt-4">{modules.mayNotValueIntro}</p>
          <ul className="mt-2 space-y-2">
            {modules.mayNotValue.map((item) => (
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
    </Section>
  );
}
