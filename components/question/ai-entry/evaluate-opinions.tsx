import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function EvaluateOpinions({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.evaluateTitle || !modules.evaluateBlocks?.length) return null;

  return (
    <Section id="evaluate-opinions" title={modules.evaluateTitle}>
      {modules.evaluateLead ? <p>{modules.evaluateLead}</p> : null}
      <div className="mt-5 space-y-4">
        {modules.evaluateBlocks.map((block) => (
          <article
            key={block.title}
            className="rounded-lg border border-[var(--line)] bg-white/75 px-5 py-4"
          >
            <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
              {block.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-[var(--ink)]">
              {block.intro}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
              {block.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--muted)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
