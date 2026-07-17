import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Decisions can change over time — Stage IV / progression connection */
export function ProgressionChange({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.progressionTitle) return null;

  return (
    <Section id="progression-change" title={modules.progressionTitle}>
      {modules.progressionLead ? <p>{modules.progressionLead}</p> : null}
      {modules.progressionFactors?.length ? (
        <ul className="mt-3 space-y-2">
          {modules.progressionFactors.map((item) => (
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
      {modules.progressionCloseIntro && modules.progressionClose?.length ? (
        <>
          <p className="mt-4 text-sm font-medium text-[var(--ink)]">
            {modules.progressionCloseIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.progressionClose.map((item) => (
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
