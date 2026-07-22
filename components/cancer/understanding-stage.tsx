import Link from "next/link";
import { DoctorChecklistTakeaway } from "@/components/question/ai-entry/doctor-checklist-takeaway";
import { BREAST_UNDERSTANDING_STAGE } from "@/lib/content/breast-understanding-stage";
import { LUNG_UNDERSTANDING_STAGE } from "@/lib/content/lung-understanding-stage";

export type UnderstandingStageContent =
  | typeof LUNG_UNDERSTANDING_STAGE
  | typeof BREAST_UNDERSTANDING_STAGE;

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[var(--ink)]">
          <span
            className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function UnderstandingStage({
  content = LUNG_UNDERSTANDING_STAGE,
}: {
  content?: UnderstandingStageContent;
}) {
  return (
    <article className="space-y-14 md:space-y-16">
      <header
        id={content.hero.id}
        className="relative scroll-mt-24 overflow-hidden border-b border-[var(--line)] pb-8"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(15,118,110,0.12),transparent_45%),linear-gradient(180deg,rgba(231,238,233,0.55),transparent)]"
        />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-2 max-w-3xl font-heading text-4xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-5xl">
            {content.hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
            {content.hero.subtitle}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">
            {content.hero.boundary}
          </p>

          <nav
            aria-label="On this page"
            className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-[var(--line)]/80 pt-4 text-sm"
          >
            {content.anchors.map((anchor) => (
              <a
                key={anchor.href}
                href={anchor.href}
                className="font-medium text-[var(--ink-soft)] hover:text-[var(--accent)]"
              >
                {anchor.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <section
        id={content.directAnswer.id}
        aria-labelledby="direct-answer-label"
        className="scroll-mt-24"
      >
        <p
          id="direct-answer-label"
          className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]"
        >
          {content.directAnswer.label}
        </p>
        <div className="mt-3 max-w-2xl space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>{content.directAnswer.lead}</p>
          <p>{content.directAnswer.intro}</p>
          <BulletList items={content.directAnswer.points} />
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            {content.directAnswer.close}
          </p>
        </div>
      </section>

      <section
        id={content.whatStageDescribes.id}
        aria-labelledby="what-stage-describes-title"
        className="scroll-mt-24"
      >
        <h2
          id="what-stage-describes-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.whatStageDescribes.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.whatStageDescribes.lead}
        </p>

        <ol className="mt-6 space-y-5">
          {content.whatStageDescribes.questions.map((item) => (
            <li key={item.id} id={item.id} className="flex gap-3">
              <span
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[11px] font-bold text-[var(--muted)]"
                aria-hidden
              >
                {item.number}
              </span>
              <div>
                <p className="font-semibold text-[var(--ink)]">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-2xl border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
          {content.whatStageDescribes.takeaway}
        </p>
      </section>

      <section
        id={content.stageMap.id}
        aria-labelledby="stage-map-title"
        className="scroll-mt-24"
      >
        <h2
          id="stage-map-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.stageMap.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.stageMap.lead}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-8">
          {content.stageMap.bands.map((band) => (
            <div
              key={band.id}
              id={band.id}
              className="scroll-mt-24 border-t-2 border-[var(--accent)]/50 pt-4"
            >
              <h3 className="font-heading text-xl font-semibold text-[var(--ink)]">
                {band.name}
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
                <p>
                  <span className="font-semibold text-[var(--ink)]">
                    What it generally means:{" "}
                  </span>
                  {band.means}
                </p>
                <p>{band.discussionsIntro}</p>
                <BulletList items={band.discussions} />
                <p className="text-sm text-[var(--muted)]">{band.note}</p>
                {"entryHref" in band && band.entryHref && band.entryLabel ? (
                  <p>
                    <Link
                      href={band.entryHref}
                      className="text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      {band.entryLabel} →
                    </Link>
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id={content.whyItMatters.id}
        aria-labelledby="why-it-matters-title"
        className="scroll-mt-24"
      >
        <h2
          id="why-it-matters-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.whyItMatters.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.whyItMatters.lead}
        </p>
        <p className="mt-4 max-w-2xl font-medium text-[var(--ink)]">
          {content.whyItMatters.bridgeIntro}
        </p>

        <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {content.whyItMatters.bridges.map((bridge) => (
            <div key={bridge.id} id={bridge.id} className="py-5 md:py-6">
              <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
                {bridge.title}
              </h3>
              <p className="mt-2 max-w-2xl text-[var(--ink-soft)] leading-relaxed">
                {bridge.body}
              </p>
              <p className="mt-3">
                <Link
                  href={bridge.ctaHref}
                  className="text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  {bridge.ctaLabel} →
                </Link>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 max-w-2xl space-y-1 border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
          {content.whyItMatters.closeLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section
        id={content.myths.id}
        aria-labelledby="myths-title"
        className="scroll-mt-24"
      >
        <h2
          id="myths-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.myths.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">{content.myths.lead}</p>

        <div className="mt-6 space-y-6">
          {content.myths.items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="border-l-2 border-[var(--line)] pl-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Myth
              </p>
              <p className="mt-1 font-medium text-[var(--ink)]">{item.myth}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                Reality
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
                {item.reality}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id={content.faqs.id}
        aria-labelledby="common-questions-title"
        className="scroll-mt-24"
      >
        <h2
          id="common-questions-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.faqs.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">{content.faqs.lead}</p>

        <div className="mt-6 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {content.faqs.items.map((faq) => (
            <details key={faq.id} id={faq.id} className="group py-1">
              <summary className="cursor-pointer list-none py-4 font-semibold text-[var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 text-[var(--muted)] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="space-y-2 pb-4 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
                {faq.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {"bullets" in faq && faq.bullets ? (
                  <BulletList items={faq.bullets} />
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        id={content.stageReport.id}
        aria-labelledby="stage-report-title"
        className="scroll-mt-24"
      >
        <h2
          id="stage-report-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.stageReport.title}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-[var(--ink-soft)]">
          {content.stageReport.heroSentence}
        </p>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.stageReport.reassure}
        </p>
        <p className="mt-5 font-medium text-[var(--ink)]">
          {content.stageReport.prompt}
        </p>

        <ol className="mt-5 space-y-5">
          {content.stageReport.finders.map((finder, index) => (
            <li key={finder.id} id={finder.id} className="flex gap-3">
              <span
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[11px] font-bold text-[var(--muted)]"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-[var(--ink)]">{finder.label}</p>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">
                  {finder.examples}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--ink)]">
                  {finder.hint}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-2xl border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
          {content.stageReport.close}
        </p>
      </section>

      <section
        id={content.checklist.id}
        aria-labelledby="doctor-checklist-title"
        className="scroll-mt-24"
      >
        <h2
          id="doctor-checklist-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.checklist.title}
        </h2>

        <div className="mt-6">
          <DoctorChecklistTakeaway
            title={content.checklist.title}
            lead={content.checklist.leaveTitle}
            items={[...content.checklist.leaveItems]}
            sourceLabel={content.checklist.title}
            sourceHref={content.path}
          />
        </div>

        <div className="mt-6 space-y-2">
          {content.checklist.groups.map((group) => (
            <details
              key={group.id}
              id={group.id}
              className="group rounded-lg border border-[var(--line)] bg-white/50"
            >
              <summary className="cursor-pointer list-none px-4 py-3 font-semibold text-[var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  <span>{group.heading}</span>
                  <span
                    aria-hidden
                    className="text-[var(--muted)] transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <ul className="space-y-2 border-t border-[var(--line)] px-4 py-3 text-sm text-[var(--ink-soft)]">
                {group.questions.map((q) => (
                  <li key={q} className="flex gap-2.5">
                    <span
                      className="mt-1 size-3.5 shrink-0 rounded-[2px] border border-[var(--line)]"
                      aria-hidden
                    />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section
        id={content.related.id}
        aria-labelledby="related-decisions-title"
        className="scroll-mt-24 border-t border-[var(--line)] pt-10"
      >
        <h2
          id="related-decisions-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.related.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.related.lead}
        </p>

        <ul className="mt-6 space-y-4">
          {content.related.items.map((item) => (
            <li key={item.id} className="border-b border-[var(--line)] pb-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {item.title}
              </p>
              <Link
                href={item.href}
                className="mt-1 block font-semibold text-[var(--ink)] hover:text-[var(--accent)]"
              >
                {item.question}
              </Link>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">{item.hint}</p>
              <p className="mt-2">
                <Link
                  href={item.href}
                  className="text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  {item.cta} →
                </Link>
              </p>
            </li>
          ))}
        </ul>

        <ul className="mt-6 space-y-2 text-sm text-[var(--muted)]">
          {content.related.secondary.map((link) => (
            <li key={link.href}>
              Also useful:{" "}
              <Link
                href={link.href}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                {link.label}
              </Link>{" "}
              — {link.hint}
            </li>
          ))}
        </ul>

        <p className="mt-4 text-sm text-[var(--muted)]">
          Prefer situation-based navigation?{" "}
          <Link
            href={content.related.mapHref}
            className="font-semibold text-[var(--accent)] hover:underline"
          >
            Back to where you are now
          </Link>
        </p>
      </section>

      <section
        id={content.sources.id}
        aria-labelledby="sources-title"
        className="scroll-mt-24 border-t border-[var(--line)] pt-8"
      >
        <details className="group">
          <summary className="cursor-pointer list-none font-heading text-lg font-semibold text-[var(--ink)] marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="flex items-center justify-between gap-3">
              <span id="sources-title">{content.sources.title}</span>
              <span
                aria-hidden
                className="text-sm font-normal text-[var(--muted)] transition group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <div className="mt-3 space-y-3 text-sm text-[var(--ink-soft)]">
            <p>{content.sources.purpose}</p>
            <ul className="space-y-1.5">
              {content.sources.items.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span
                    className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </section>
    </article>
  );
}
