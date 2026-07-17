import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function DifferRecommendations({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.differTitle) return null;

  return (
    <Section id="differ-recommendations" title={modules.differTitle}>
      {modules.differLead ? <p>{modules.differLead}</p> : null}
      {modules.differFactorsIntro && modules.differFactors?.length ? (
        <>
          <p className="mt-3 text-sm font-medium text-[var(--ink)]">
            {modules.differFactorsIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.differFactors.map((item) => (
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
      {modules.differNotQuestion || modules.differBetterQuestion ? (
        <div className="mt-4 space-y-3 rounded-lg border border-[var(--line)] bg-white/70 px-4 py-4">
          {modules.differNotQuestion ? (
            <div>
              {modules.differNotLabel ? (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {modules.differNotLabel}
                </p>
              ) : null}
              <p className="mt-1 text-[var(--ink-soft)]">
                “{modules.differNotQuestion}”
              </p>
            </div>
          ) : null}
          {modules.differBetterQuestion ? (
            <div>
              {modules.differBetterLabel ? (
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                  {modules.differBetterLabel}
                </p>
              ) : null}
              <p className="mt-1 font-medium text-[var(--ink)]">
                “{modules.differBetterQuestion}”
              </p>
            </div>
          ) : null}
        </div>
      ) : null}
    </Section>
  );
}
