import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Patient Q&A block — visible content only; not FAQPage schema */
export function PatientFaq({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.faqTitle || !modules.faqItems?.length) return null;

  return (
    <Section id="patient-faq" title={modules.faqTitle}>
      <div className="space-y-4">
        {modules.faqItems.map((item) => (
          <article
            key={item.question}
            className="rounded-lg border border-[var(--line)] bg-white/75 px-5 py-4"
          >
            <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
              {item.question}
            </h3>
            <div className="mt-2 space-y-2 text-sm text-[var(--ink-soft)]">
              {item.answer.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
