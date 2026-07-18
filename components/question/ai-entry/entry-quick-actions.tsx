/** Dual intent for night-time scanners — understand vs prepare for the visit */
export function EntryQuickActions() {
  return (
    <div className="mt-4 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        Choose how you want to use this page
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <a
          href="#why-this-decision-matters"
          className="inline-flex rounded-md border border-[var(--accent)]/40 bg-white/90 px-3.5 py-2.5 text-sm font-semibold text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[rgba(15,118,110,0.06)]"
        >
          I want to understand the decision
        </a>
        <a
          href="#patient-questions-panel"
          className="inline-flex rounded-md bg-[var(--accent)] px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-[#0d655e]"
        >
          I want to prepare for my doctor visit
        </a>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
        <a
          href="#patient-questions-panel"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          Questions patients ask
        </a>
        <a
          href="#your-next-step"
          className="font-medium text-[var(--accent)] hover:underline"
        >
          Your next step →
        </a>
      </div>
    </div>
  );
}
