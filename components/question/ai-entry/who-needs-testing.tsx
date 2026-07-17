import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function WhoNeedsTesting({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.whoNeedsTitle || !modules.whoNeedsLead) return null;

  return (
    <Section id="who-needs-testing" title={modules.whoNeedsTitle}>
      <p>{modules.whoNeedsLead}</p>
      {modules.whoNeedsBody?.map((line) => (
        <p key={line} className="mt-3">
          {line}
        </p>
      ))}
      {modules.whoNeedsDependsIntro && modules.whoNeedsDependsOn?.length ? (
        <>
          <p className="mt-4 text-sm font-medium text-[var(--ink)]">
            {modules.whoNeedsDependsIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.whoNeedsDependsOn.map((item) => (
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
      {modules.whoNeedsClose ? (
        <p className="mt-4 font-medium text-[var(--ink)]">
          {modules.whoNeedsClose}
        </p>
      ) : null}
    </Section>
  );
}
