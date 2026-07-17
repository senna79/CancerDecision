/** Jump links for anxious scanners — doctor questions + next step */
export function EntryQuickActions() {
  return (
    <div className="mt-4 flex flex-wrap gap-3 text-sm">
      <a
        href="#doctor-questions"
        className="inline-flex rounded-md border border-[var(--accent)]/40 bg-white/90 px-3.5 py-2 font-semibold text-[var(--ink)] hover:border-[var(--accent)] hover:bg-[rgba(15,118,110,0.06)]"
      >
        Questions to ask your doctor
      </a>
      <a
        href="#your-next-step"
        className="inline-flex rounded-md bg-[var(--accent)] px-3.5 py-2 font-semibold text-white hover:bg-[#0d655e]"
      >
        Your next step
      </a>
    </div>
  );
}
