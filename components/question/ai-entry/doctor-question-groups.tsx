import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function DoctorQuestionGroups({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <section id="doctor-questions" className="scroll-mt-24 py-6">
      <div className="rounded-lg border border-amber-700/20 bg-amber-50/80 p-5 md:p-6">
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
          {modules.doctorTitle}
        </h2>
        <div className="mt-5 space-y-5">
          {modules.doctorGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {group.heading}
              </h3>
              <ol className="mt-2 list-decimal space-y-2 pl-5 text-[var(--ink-soft)]">
                {group.questions.map((q) => (
                  <li key={q} className="leading-relaxed">
                    {q}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
