import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function AffectDecisions({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.affectTitle || !modules.affectBlocks?.length) return null;

  return (
    <Section id="affect-decisions" title={modules.affectTitle}>
      <div className="space-y-4">
        {modules.affectBlocks.map((block) => (
          <article
            key={block.title}
            className="rounded-lg border border-[var(--line)] bg-white/75 px-5 py-4"
          >
            <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
              {block.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">{block.body}</p>
          </article>
        ))}
      </div>
      {modules.affectClose ? (
        <p className="mt-4 font-medium text-[var(--ink)]">{modules.affectClose}</p>
      ) : null}
    </Section>
  );
}
