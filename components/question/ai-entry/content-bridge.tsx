import Link from "next/link";
import { Section } from "@/components/content/section";
import type { AiEntryBridge } from "@/lib/content/ai-entry-modules";

/** Soft Journey bridge — e.g. global care — without commercial claims */
export function ContentBridge({ bridge }: { bridge: AiEntryBridge }) {
  return (
    <Section id="content-bridge" title={bridge.title}>
      <div className="space-y-3">
        {bridge.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {bridge.ctaHref && bridge.ctaLabel ? (
        <div className="mt-5 rounded-md border border-[var(--accent)]/30 bg-[rgba(15,118,110,0.06)] px-4 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Explore
          </p>
          <Link
            href={bridge.ctaHref}
            className="mt-1 inline-flex font-semibold text-[var(--accent)] hover:underline"
          >
            {bridge.ctaLabel} →
          </Link>
        </div>
      ) : null}
    </Section>
  );
}
