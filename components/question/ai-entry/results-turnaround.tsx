import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function ResultsTurnaround({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.resultsTimingTitle || !modules.resultsTimingLead) return null;

  return (
    <Section id="results-turnaround" title={modules.resultsTimingTitle}>
      <p>{modules.resultsTimingLead}</p>
      {modules.resultsTimingDependsIntro &&
      modules.resultsTimingDependsOn?.length ? (
        <>
          <p className="mt-4 text-sm font-medium text-[var(--ink)]">
            {modules.resultsTimingDependsIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.resultsTimingDependsOn.map((item) => (
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
      {modules.resultsTimingAskIntro && modules.resultsTimingAsk?.length ? (
        <div className="mt-4 rounded-md border border-[var(--accent)]/25 bg-[rgba(15,118,110,0.06)] px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            {modules.resultsTimingAskIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.resultsTimingAsk.map((q) => (
              <li key={q} className="flex gap-2 font-medium text-[var(--ink)]">
                <span className="text-[var(--accent)]" aria-hidden>
                  □
                </span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {modules.resultsTimingClose ? (
        <p className="mt-4 font-medium text-[var(--ink)]">
          {modules.resultsTimingClose}
        </p>
      ) : null}
    </Section>
  );
}
