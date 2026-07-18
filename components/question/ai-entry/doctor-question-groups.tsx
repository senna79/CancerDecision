import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

/** Grouped doctor questions — optional expansion under Step 4 takeaway (Template v2) */
export function DoctorQuestionGroups({
  modules,
  embedded = false,
  omitLeave = false,
}: {
  modules: AiEntryFlagshipModules;
  /** Compact collapsed bank under Step 4 takeaway */
  embedded?: boolean;
  /** Skip leave-items when the takeaway above already shows them */
  omitLeave?: boolean;
}) {
  if (!modules.doctorTitle || !modules.doctorGroups?.length) return null;

  const showLeave =
    !omitLeave &&
    Boolean(modules.doctorLeaveTitle && modules.doctorLeaveItems?.length);

  if (embedded) {
    return (
      <div id="doctor-questions" className="scroll-mt-24">
        <details className="group rounded-lg border border-[var(--line)] bg-white/70 open:bg-white/90">
          <summary className="cursor-pointer list-none px-4 py-3 [&::-webkit-details-marker]:hidden">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">
                  More questions by situation
                </p>
                <p className="mt-0.5 text-sm text-[var(--muted)]">
                  Optional — open only the group that matches where you are now.
                </p>
              </div>
              <span
                aria-hidden
                className="mt-1 shrink-0 text-[var(--muted)] transition-transform duration-200 group-open:rotate-180"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </summary>
          <div className="space-y-2 border-t border-[var(--line)]/80 px-3 pb-3 pt-2">
            {modules.doctorGroups.map((group) => (
              <details
                key={group.heading}
                className="rounded-md border border-[var(--line)]/80 bg-[var(--paper)]/50"
              >
                <summary className="cursor-pointer list-none px-3 py-2.5 text-sm font-semibold text-[var(--ink)] [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-2">
                    {group.heading}
                    <span
                      aria-hidden
                      className="text-xs font-normal text-[var(--muted)]"
                    >
                      {group.questions.length} questions
                    </span>
                  </span>
                </summary>
                <ul className="space-y-2 border-t border-[var(--line)]/70 px-3 py-3 text-sm text-[var(--ink-soft)]">
                  {group.questions.map((q) => (
                    <li key={q} className="flex gap-2.5 leading-relaxed">
                      <span
                        className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]"
                        aria-hidden
                      />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </details>
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
                  <span
                    className="mt-1 size-3.5 shrink-0 rounded-[2px] border border-amber-900/40"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

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
                    className="rounded-md border border-amber-800/10 bg-white/70 px-3 py-2.5 leading-relaxed text-[var(--ink)]"
                  >
                    {q}
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
