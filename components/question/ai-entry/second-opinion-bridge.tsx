import Link from "next/link";
import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function SecondOpinionBridge({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <Section id="second-opinion-bridge" title={modules.secondOpinionTitle}>
      <p>{modules.secondOpinionLead}</p>
      <ul className="mt-3 space-y-2">
        {modules.secondOpinionWhen.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4">{modules.secondOpinionClose}</p>
      <div className="mt-5 rounded-md border border-[var(--accent)]/30 bg-[rgba(15,118,110,0.06)] px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          Explore
        </p>
        <Link
          href={modules.secondOpinionHref}
          className="mt-1 inline-flex font-semibold text-[var(--accent)] hover:underline"
        >
          {modules.secondOpinionCtaLabel} → Second Opinion Journey
        </Link>
      </div>
    </Section>
  );
}
