import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function TreatmentCategories({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (
    !modules.treatmentCategoriesTitle ||
    !modules.treatmentCategories?.length
  ) {
    return null;
  }

  return (
    <Section id="treatment-categories" title={modules.treatmentCategoriesTitle}>
      {modules.treatmentCategoriesLead ? (
        <p>{modules.treatmentCategoriesLead}</p>
      ) : null}
      <div className="mt-5 space-y-4">
        {modules.treatmentCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-lg border border-[var(--line)] bg-white/75 px-5 py-4"
          >
            <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
              {category.title}
            </h3>
            {category.includes?.length ? (
              <>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Including
                </p>
                <ul className="mt-1.5 space-y-1 text-sm text-[var(--ink-soft)]">
                  {category.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--muted)]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <p className="mt-3 text-sm font-medium text-[var(--ink)]">
              {category.questionsIntro}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
              {category.questions.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--muted)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {modules.treatmentCategoriesClose ? (
        <p className="mt-4 font-medium text-[var(--ink)]">
          {modules.treatmentCategoriesClose}
        </p>
      ) : null}
    </Section>
  );
}
