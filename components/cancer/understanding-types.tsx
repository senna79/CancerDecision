import Link from "next/link";
import { DoctorChecklistTakeaway } from "@/components/question/ai-entry/doctor-checklist-takeaway";
import { BREAST_UNDERSTANDING_SUBTYPE } from "@/lib/content/breast-understanding-subtype";
import { LUNG_UNDERSTANDING_TYPES } from "@/lib/content/lung-understanding-types";

export type UnderstandingTypesContent =
  | typeof LUNG_UNDERSTANDING_TYPES
  | typeof BREAST_UNDERSTANDING_SUBTYPE;

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

export function UnderstandingTypes({
  content = LUNG_UNDERSTANDING_TYPES,
}: {
  content?: UnderstandingTypesContent;
}) {
  const typeCount = content.typeMap.types.length;
  const typeGridClass =
    typeCount >= 3
      ? "mt-8 grid gap-8 md:grid-cols-3 md:gap-8"
      : "mt-8 grid gap-8 md:grid-cols-2 md:gap-10";

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
          <p>{content.directAnswer.bodyClose}</p>
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            {content.directAnswer.close}
          </p>
        </div>
      </section>

      <section
        id={content.typeMap.id}
        aria-labelledby="type-map-title"
        className="scroll-mt-24"
      >
        <h2
          id="type-map-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.typeMap.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.typeMap.lead}
        </p>

        <div className={typeGridClass}>
          {content.typeMap.types.map((type) => (
            <div
              key={type.id}
              id={type.id}
              className="scroll-mt-24 border-t-2 border-[var(--accent)]/50 pt-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {type.tag}
              </p>
              <h3 className="mt-1.5 font-heading text-xl font-semibold text-[var(--ink)] md:text-2xl">
                {type.name}
              </h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
                <p>{type.body}</p>
                {type.bulletsIntro ? <p>{type.bulletsIntro}</p> : null}
                <BulletList items={type.bullets} />
                <div className="pt-2">
                  <p className="font-semibold text-[var(--ink)]">
                    {type.whyTitle}
                  </p>
                  {type.whyIntro ? (
                    <p className="mt-1.5">{type.whyIntro}</p>
                  ) : null}
                  {type.whyItems.length > 1 || type.whyIntro ? (
                    <div className="mt-1.5">
                      <BulletList items={type.whyItems} />
                    </div>
                  ) : (
                    <p className="mt-1.5">{type.whyItems[0]}</p>
                  )}
                </div>
                <p className="text-sm text-[var(--muted)]">{type.note}</p>
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
                {"close" in faq && faq.close ? (
                  <p className="font-medium text-[var(--ink)]">{faq.close}</p>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section
        id={content.pathology.id}
        aria-labelledby="pathology-title"
        className="scroll-mt-24"
      >
        <h2
          id="pathology-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.pathology.title}
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-[var(--ink-soft)]">
          {content.pathology.heroSentence}
        </p>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.pathology.reassure}
        </p>
        <p className="mt-5 font-medium text-[var(--ink)]">
          {content.pathology.prompt}
        </p>

        <ol className="mt-5 space-y-5">
          {content.pathology.finders.map((finder, index) => (
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
          {content.pathology.close}
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

        {"stageHref" in content.related && content.related.stageHref ? (
          <p className="mt-6 text-sm text-[var(--muted)]">
            Also useful:{" "}
            <Link
              href={content.related.stageHref}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {content.related.stageLabel}
            </Link>{" "}
            — {content.related.stageHint}
          </p>
        ) : null}
        {"landscapeHref" in content.related &&
        content.related.landscapeHref ? (
          <p className="mt-2 text-sm text-[var(--muted)]">
            Also useful:{" "}
            <Link
              href={content.related.landscapeHref}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {content.related.landscapeLabel}
            </Link>{" "}
            — {content.related.landscapeHint}
          </p>
        ) : null}
        <p className="mt-3 text-sm text-[var(--muted)]">
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
