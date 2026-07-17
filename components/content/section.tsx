export function Section({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) {
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
