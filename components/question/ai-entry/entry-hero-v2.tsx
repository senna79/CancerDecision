/** Brand-first Entry hero plane for Template v2 */
export function EntryHeroV2({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="entry-hero-v2 relative mb-2 overflow-hidden rounded-xl border border-[var(--accent)]/15">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_0%_0%,rgba(15,118,110,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_10%,rgba(49,92,84,0.08),transparent_50%),linear-gradient(180deg,#f8fbf9_0%,rgba(243,246,244,0.92)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative px-5 py-6 md:px-7 md:py-8">
        <p className="font-heading text-base font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-lg">
          Cancer Next Step
        </p>
        <p className="mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Decision Navigation
        </p>
        <h1 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-4xl">
          {title}
        </h1>
        {children ? <div className="mt-4">{children}</div> : null}
      </div>
    </div>
  );
}
