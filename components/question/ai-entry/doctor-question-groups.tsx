import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Grouped doctor questions — full visit checklist */
export function DoctorQuestionGroups({
  modules,
  embedded = false,
  omitLeave = false,
}: {
  modules: AiEntryFlagshipModules;
  /** Compact layout under Step 4 takeaway (no outer amber shell / no h2) */
  embedded?: boolean;
  /** Skip leave-items when the takeaway above already shows them */
  omitLeave?: boolean;
}) {
  if (!modules.doctorTitle || !modules.doctorGroups?.length) return null;

  const showLeave =
    !omitLeave &&
    Boolean(modules.doctorLeaveTitle && modules.doctorLeaveItems?.length);

  const body = (
    <>
      {showLeave ? (
        <div className="mt-4 rounded-md border border-amber-800/15 bg-white/80 px-4 py-3">
          <p className="text-sm font-semibold text-[var(--ink)]">
            {modules.doctorLeaveTitle}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.doctorLeaveItems!.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-medium text-[var(--ink)]"
              >
                <span className="text-[var(--accent)]" aria-hidden>
                  □
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className={embedded ? "mt-0 space-y-5" : "mt-5 space-y-5"}>
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
    </>
  );

  if (embedded) {
    return (
      <div id="doctor-questions" className="scroll-mt-24">
        <p className="text-sm font-semibold text-[var(--ink)]">
          {modules.doctorTitle}
        </p>
        <p className="mt-1 text-sm text-[var(--ink-soft)]">
          Pick the questions that match where you are now. You do not need to ask
          every item.
        </p>
        <div className="mt-4">{body}</div>
      </div>
    );
  }

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
        {body}
      </div>
    </section>
  );
}
