import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function DoctorQuestionGroups({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.doctorTitle || !modules.doctorGroups?.length) return null;

  return (
    <section id="doctor-questions" className="scroll-mt-24 py-6">
      <div className="rounded-lg border border-amber-700/20 bg-amber-50/80 p-5 md:p-6">
        <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
          {modules.doctorTitle}
        </h2>
        <p className="mt-2 text-sm text-[var(--ink-soft)]">
          Use this as a visit checklist — pick the questions that match where you
          are now. You do not need to ask every item.
        </p>
        <div className="mt-5 space-y-5">
          {modules.doctorGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {group.heading}
              </h3>
              <ul className="mt-2 space-y-2.5">
                {group.questions.map((q) => (
                  <li
                    key={q}
                    className="flex gap-3 rounded-md border border-amber-800/10 bg-white/70 px-3 py-2.5 text-[var(--ink)]"
                  >
                    <span
                      className="mt-0.5 font-semibold text-[var(--accent)]"
                      aria-hidden
                    >
                      □
                    </span>
                    <span className="leading-relaxed">{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
