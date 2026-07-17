import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function CommonMistakes({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.mistakesTitle || !modules.mistakes?.length) return null;

  return (
    <Section id="common-mistakes" title={modules.mistakesTitle}>
      <div className="space-y-4">
        {modules.mistakes.map((item, index) => (
          <article
            key={item.mistake}
            className="rounded-lg border border-[var(--line)] bg-white/70 px-5 py-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              Mistake {index + 1}
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold text-[var(--ink)]">
              {item.mistake}
            </h3>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              <span className="font-medium text-[var(--ink)]">Why it matters: </span>
              {item.why}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
