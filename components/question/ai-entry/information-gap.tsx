import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export function InformationGap({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  if (!modules.infoGapTitle) return null;

  return (
    <Section id="information-gap" title={modules.infoGapTitle}>
      {modules.infoGapKnownIntro && modules.infoGapKnown?.length ? (
        <>
          <p className="text-sm text-[var(--ink-soft)]">
            {modules.infoGapKnownIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.infoGapKnown.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-md border border-[var(--line)] bg-white/70 px-4 py-3"
              >
                <span
                  aria-hidden
                  className="mt-0.5 font-semibold text-[var(--accent)]"
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {modules.infoGapMissingIntro && modules.infoGapMissing?.length ? (
        <>
          <p className="mt-5 text-sm text-[var(--ink-soft)]">
            {modules.infoGapMissingIntro}
          </p>
          <ul className="mt-2 space-y-2">
            {modules.infoGapMissing.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-md border border-[var(--line)] bg-white/70 px-4 py-3"
              >
                <span
                  aria-hidden
                  className="mt-0.5 font-semibold text-[var(--muted)]"
                >
                  ?
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {modules.infoGapClose?.length ? (
        <div className="mt-4 space-y-2">
          {modules.infoGapClose.map((line) => (
            <p key={line} className="font-medium text-[var(--ink)]">
              {line}
            </p>
          ))}
        </div>
      ) : null}
    </Section>
  );
}
