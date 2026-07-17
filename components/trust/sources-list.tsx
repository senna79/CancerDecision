import type { Source } from "@/types/database";

export function SourcesList({
  sources,
  title = "Sources & References",
}: {
  sources: Source[];
  title?: string;
}) {
  if (sources.length === 0) return null;

  return (
    <section className="scroll-mt-24 py-8">
      <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)]">
        {title}
      </h2>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {sources.map((source) => (
          <li key={source.id} className="flex gap-2">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <div>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--accent)] underline-offset-4 hover:underline"
              >
                {source.title}
              </a>
              {source.publisher ? (
                <span className="text-[var(--muted)]"> — {source.publisher}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
