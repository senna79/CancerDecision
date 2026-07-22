import Link from "next/link";
import { DoctorChecklistTakeaway } from "@/components/question/ai-entry/doctor-checklist-takeaway";
import { BREAST_TREATMENT_LANDSCAPE } from "@/lib/content/breast-treatment-landscape";
import { LUNG_TREATMENT_LANDSCAPE } from "@/lib/content/lung-treatment-landscape";

export type TreatmentLandscapeContent =
  | typeof LUNG_TREATMENT_LANDSCAPE
  | typeof BREAST_TREATMENT_LANDSCAPE;

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

export function TreatmentLandscape({
  content = LUNG_TREATMENT_LANDSCAPE,
}: {
  content?: TreatmentLandscapeContent;
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
        id={content.orientFirst.id}
        aria-labelledby="orient-first-title"
        className="scroll-mt-24"
      >
        <h2
          id="orient-first-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.orientFirst.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.orientFirst.lead}
        </p>
        <ol className="mt-6 space-y-5">
          {content.orientFirst.points.map((point, index) => (
            <li key={point.id} id={point.id} className="flex gap-3">
              <span
                className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[11px] font-bold text-[var(--muted)]"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <p className="font-semibold text-[var(--ink)]">{point.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
                  {point.body}
                </p>
                <p className="mt-2">
                  <Link
                    href={point.href}
                    className="text-sm font-semibold text-[var(--accent)] hover:underline"
                  >
                    {point.linkLabel} →
                  </Link>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id={content.treatmentMap.id}
        aria-labelledby="treatment-map-title"
        className="scroll-mt-24"
      >
        <h2
          id="treatment-map-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.treatmentMap.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.treatmentMap.lead}
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {content.treatmentMap.groups.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="border-t-2 border-[var(--accent)]/50 pt-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {group.tag}
              </p>
              <h3 className="mt-1.5 font-heading text-xl font-semibold text-[var(--ink)]">
                {group.name}
              </h3>
              <ul className="mt-3 space-y-1 text-sm font-medium text-[var(--ink)]">
                {group.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {group.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id={content.howDoctorsChoose.id}
        aria-labelledby="how-doctors-choose-title"
        className="scroll-mt-24"
      >
        <h2
          id="how-doctors-choose-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.howDoctorsChoose.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.howDoctorsChoose.lead}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {content.howDoctorsChoose.factors.map((factor) => (
            <div key={factor.id} id={factor.id}>
              <p className="font-semibold text-[var(--ink)]">{factor.title}</p>
              <div className="mt-2">
                <BulletList items={factor.items} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 max-w-2xl space-y-2 border-l-2 border-[var(--accent)]/40 pl-3">
          <p className="text-sm text-[var(--muted)]">
            {content.howDoctorsChoose.notLabel}
          </p>
          <p className="font-medium text-[var(--ink-soft)]">
            “{content.howDoctorsChoose.notQuestion}”
          </p>
          <p className="pt-2 text-sm text-[var(--muted)]">
            {content.howDoctorsChoose.betterLabel}
          </p>
          <p className="font-semibold text-[var(--ink)]">
            “{content.howDoctorsChoose.betterQuestion}”
          </p>
        </div>
      </section>

      <section
        id={content.approaches.id}
        aria-labelledby="approaches-title"
        className="scroll-mt-24"
      >
        <h2
          id="approaches-title"
          className="font-heading text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-3xl"
        >
          {content.approaches.title}
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--muted)]">
          {content.approaches.lead}
        </p>

        <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {content.approaches.items.map((item) => (
            <div key={item.id} id={item.id} className="py-5 md:py-6">
              <div className="md:grid md:grid-cols-[minmax(0,11rem)_1fr] md:gap-8">
                <h3 className="font-heading text-lg font-semibold text-[var(--ink)]">
                  {item.name}
                </h3>
                <div className="mt-2 space-y-2 md:mt-0">
                  <p className="text-[var(--ink-soft)] leading-relaxed">
                    {item.what}
                  </p>
                  <p className="text-sm text-[var(--muted)]">
                    <span className="font-semibold text-[var(--ink)]">
                      When it may be discussed:{" "}
                    </span>
                    {item.when}
                  </p>
                  <p>
                    <Link
                      href={item.entryHref}
                      className="text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      {item.entryLabel} →
                    </Link>
                  </p>
                </div>
              </div>
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
              </div>
            </details>
          ))}
        </div>
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
