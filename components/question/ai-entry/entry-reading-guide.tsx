/** Tell anxious readers the 3-layer path before they scroll the whole page */
export function EntryReadingGuide() {
  return (
    <aside
      aria-label="How to read this page"
      className="mt-4 rounded-md border border-[var(--line)] bg-[var(--paper)]/90 px-4 py-3 text-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        How to read this page · about 3 minutes
      </p>
      <ol className="mt-2 space-y-1.5 text-[var(--ink-soft)]">
        <li>
          <span className="font-medium text-[var(--ink)]">1. Quick answer</span>
          {" — "}
          the short answer above
        </li>
        <li>
          <span className="font-medium text-[var(--ink)]">2. Main path</span>
          {" — "}
          why it matters, delay, how testing is done, then{" "}
          <a href="#doctor-questions" className="font-medium text-[var(--accent)] hover:underline">
            questions for your doctor
          </a>{" "}
          and{" "}
          <a href="#your-next-step" className="font-medium text-[var(--accent)] hover:underline">
            your next step
          </a>
        </li>
        <li>
          <span className="font-medium text-[var(--ink)]">3. Optional detail</span>
          {" — "}
          open{" "}
          <a href="#more-about-decision" className="font-medium text-[var(--accent)] hover:underline">
            More about this decision
          </a>{" "}
          only if you want deeper explanation
        </li>
      </ol>
    </aside>
  );
}
