import { Section } from "@/components/content/section";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";

export type HowTestingDoneFocus = "all" | "sources" | "biopsy" | "risks";

/** Practical: sample sources, another biopsy?, risks if new tissue is needed */
export function HowTestingDone({
  modules,
  focus = "all",
}: {
  modules: AiEntryFlagshipModules;
  focus?: HowTestingDoneFocus;
}) {
  if (!modules.howDoneTitle || !modules.howDoneLead) return null;

  if (focus === "biopsy") {
    if (!modules.howDoneBiopsyTitle) return null;
    return (
      <div id="another-biopsy" className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
        {modules.howDoneBiopsyBody?.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    );
  }

  if (focus === "risks") {
    if (!modules.howDoneRisksTitle) return null;
    return (
      <div id="biopsy-risks" className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
        {modules.howDoneRisksLead ? <p>{modules.howDoneRisksLead}</p> : null}
        {modules.howDoneRisksItems?.length ? (
          <ul className="space-y-2">
            {modules.howDoneRisksItems.map((item) => (
              <li key={item} className="flex gap-2.5 text-[var(--ink)]">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {modules.howDoneRisksClose ? (
          <p className="font-medium text-[var(--ink)]">{modules.howDoneRisksClose}</p>
        ) : null}
      </div>
    );
  }

  const sourcesOnly = focus === "sources";

  return (
    <Section
      id="how-testing-done"
      title={modules.howDoneTitle}
      embedded={sourcesOnly}
    >
      <p>{modules.howDoneLead}</p>

      {modules.howDoneSources?.length ? (
        <div className="mt-4 space-y-3">
          {modules.howDoneSources.map((block) => (
            <article
              key={block.title}
              className="rounded-lg border border-[var(--line)] bg-white/70 px-4 py-3"
            >
              <h3 className="font-heading text-base font-semibold text-[var(--ink)]">
                {block.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-soft)]">
                {block.body}
              </p>
            </article>
          ))}
        </div>
      ) : null}

      {!sourcesOnly && modules.howDoneBiopsyTitle ? (
        <div
          id="another-biopsy"
          className="mt-5 scroll-mt-24 rounded-md border border-[var(--accent)]/25 bg-[rgba(15,118,110,0.06)] px-4 py-4"
        >
          <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
            {modules.howDoneBiopsyTitle}
          </h3>
          {modules.howDoneBiopsyBody?.map((line) => (
            <p key={line} className="mt-2 text-[var(--ink-soft)]">
              {line}
            </p>
          ))}
        </div>
      ) : null}

      {!sourcesOnly && modules.howDoneRisksTitle ? (
        <div id="biopsy-risks" className="mt-5 scroll-mt-24">
          <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
            {modules.howDoneRisksTitle}
          </h3>
          {modules.howDoneRisksLead ? (
            <p className="mt-2">{modules.howDoneRisksLead}</p>
          ) : null}
          {modules.howDoneRisksItems?.length ? (
            <ul className="mt-3 space-y-2">
              {modules.howDoneRisksItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-4 py-3"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {modules.howDoneRisksClose ? (
            <p className="mt-4 font-medium text-[var(--ink)]">
              {modules.howDoneRisksClose}
            </p>
          ) : null}
        </div>
      ) : null}
    </Section>
  );
}
