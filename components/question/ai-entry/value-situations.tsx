import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function ValueSituations({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.valueTitle || !modules.valueSituations?.length) return null;

  return (
    <Section id="value-situations" title={modules.valueTitle}>
      <div className="grid gap-4 sm:grid-cols-2">
        {modules.valueSituations.map((situation) => (
          <article
            key={situation.title}
            className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-4"
          >
            <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
              {situation.title}
            </h3>
            {situation.summary ? (
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                {situation.summary}
              </p>
            ) : null}
            {situation.examples?.length ? (
              <>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Examples
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
                  {situation.examples.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--muted)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
