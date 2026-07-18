export function Section({
  title,
  children,
  id,
  embedded = false,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
  /** When true, omit the h2 (parent step already provides the title). */
  embedded?: boolean;
}) {
  if (embedded) {
    return (
      <div id={id} className="scroll-mt-24">
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          {children}
        </div>
      </div>
    );
  }

  return (
    <section id={id} className="scroll-mt-24 py-8">
      <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-[1.75rem]">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[var(--ink-soft)] leading-relaxed">
        {children}
      </div>
    </section>
  );
}
