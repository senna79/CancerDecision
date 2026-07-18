/** Tell anxious readers how the workspace is meant to be used */
export function EntryReadingGuide() {
  return (
    <aside
      aria-label="How to use this page"
      className="mt-4 rounded-md border border-[var(--line)] bg-[var(--paper)]/90 px-4 py-3 text-sm"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        How to use this page · about 3 minutes
      </p>
      <ol className="mt-2 space-y-1.5 text-[var(--ink-soft)]">
        <li>
          <span className="font-medium text-[var(--ink)]">1. Quick answer</span>
          {" — "}
          the short answer above
        </li>
        <li>
          <span className="font-medium text-[var(--ink)]">
            2. Main decision path
          </span>
          {" — "}
          on the left (or first on mobile): why it matters, what can change, what
          happens next, and{" "}
          <a
            href="#your-next-step"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            your next step
          </a>
        </li>
        <li>
          <span className="font-medium text-[var(--ink)]">
            3. Questions patients ask
          </span>
          {" — "}
          on the right (or below on mobile): open only the worries you have now
          (biopsy, timing, cost, doctor checklist)
        </li>
      </ol>
    </aside>
  );
}
