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
            2. Decision path (4 steps)
          </span>
          {" — "}
          why it matters → could options change → practical realities →{" "}
          <a
            href="#path-step-conversation"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            what to discuss with your doctor
          </a>
        </li>
        <li>
          <span className="font-medium text-[var(--ink)]">
            3. Questions beside each step
          </span>
          {" — "}
          open only the worries for that step (what it is, biopsy, cost,
          checklist)
        </li>
      </ol>
    </aside>
  );
}
