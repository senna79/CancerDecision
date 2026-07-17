import Link from "next/link";
import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function JourneyLinks({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.journeyLinksTitle || !modules.journeyLinks?.length) return null;

  return (
    <Section id="journey-links" title={modules.journeyLinksTitle}>
      {modules.journeyLinksLead ? (
        <p className="text-sm text-[var(--muted)]">{modules.journeyLinksLead}</p>
      ) : null}
      <ol className="mt-5 space-y-0">
        {modules.journeyLinks.map((link, index) => (
          <li key={link.href} className="relative flex gap-4 pb-5 last:pb-0">
            <div className="flex w-6 flex-col items-center">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/50 bg-white text-xs font-semibold text-[var(--accent)]">
                {index + 1}
              </span>
              {index < modules.journeyLinks!.length - 1 ? (
                <span
                  aria-hidden
                  className="mt-1 w-px flex-1 bg-[var(--line)]"
                />
              ) : null}
            </div>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="font-heading text-lg font-semibold text-[var(--ink)]">
                {link.title}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{link.body}</p>
              <Link
                href={link.href}
                className="mt-2 inline-flex text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                {link.cta} →
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
