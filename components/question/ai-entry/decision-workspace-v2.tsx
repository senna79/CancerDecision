"use client";

import { useEffect, useRef, useState } from "react";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import {
  getEntryPathV2,
  type EntryPathStep,
  type EntryPathV2,
} from "@/lib/content/entry-path-v2";
import { cn } from "@/lib/utils";
import { DecisionPathCardDetail } from "./decision-path-cards-v2";
import { DoctorChecklistTakeaway } from "./doctor-checklist-takeaway";
import { DoctorQuestionGroups } from "./doctor-question-groups";
import { DoesNotDecide } from "./does-not-decide";
import { WhyDecisionMatters } from "./why-decision-matters";

function useStepReveal() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLElement>("[data-path-step]");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}

function StepCards({
  step,
  openId,
  onToggle,
  slug,
  modules,
}: {
  step: EntryPathStep & { number: number };
  openId: string | null;
  onToggle: (id: string) => void;
  slug: string;
  modules: AiEntryFlagshipModules;
}) {
  return (
    <div className="path-question-rail">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        Questions you may have
      </p>
      <ul className="mt-2">
        {step.cards.map((card) => {
          const open = openId === card.id;
          return (
            <li
              key={card.id}
              className={cn(
                "path-question-item",
                open && "path-question-item--open"
              )}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => onToggle(card.id)}
                className="flex w-full items-start gap-2 px-2 py-2.5 text-left transition hover:bg-white/70"
              >
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-[var(--ink)]">
                    {card.title}
                  </span>
                  {!open ? (
                    <span className="mt-0.5 block text-xs leading-relaxed text-[var(--muted)]">
                      {card.summary}
                    </span>
                  ) : null}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "mt-1 shrink-0 text-[var(--muted)] transition-transform duration-200",
                    open && "rotate-180 text-[var(--accent)]"
                  )}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 5l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  {open ? (
                    <div className="px-2 pb-3">
                      <div className="max-h-[min(50vh,26rem)] overflow-y-auto pr-1">
                        <DecisionPathCardDetail
                          id={card.id}
                          slug={slug}
                          modules={modules}
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => onToggle(card.id)}
                        className="mt-2 text-sm font-semibold text-[var(--accent)] hover:underline"
                      >
                        Close
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function StepMain({
  step,
  path,
  modules,
}: {
  step: EntryPathStep;
  path: EntryPathV2;
  modules: AiEntryFlagshipModules;
}) {
  switch (step.main) {
    case "biomarker-understand":
      return (
        <div className="space-y-3">
          <p className="border-l-2 border-[var(--accent)]/40 pl-3 text-sm font-medium text-[var(--ink)]">
            Before making treatment decisions, ask whether the picture is
            complete.
          </p>
          <WhyDecisionMatters modules={modules} embedded />
        </div>
      );
    case "why":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "does-not-decide":
      return <DoesNotDecide modules={modules} embedded />;
    case "second-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Another opinion may change what you discuss — or confirm the current
            plan. Either outcome can strengthen the decision.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {[
              "It may clarify diagnosis, staging, or testing gaps",
              "It may widen or refine the treatment options on the table",
              "Agreement between teams can still increase confidence",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    case "treatment-compare":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Use the same questions for every option your care team discusses —
            so you compare reasoning, not just labels.
          </p>
          <ol className="list-decimal space-y-1.5 pl-5 text-[var(--ink)]">
            <li>What is the goal?</li>
            <li>What benefit is expected?</li>
            <li>What are the trade-offs?</li>
            <li>What does treatment require?</li>
            <li>How does it fit my priorities?</li>
          </ol>
          <p className="text-sm font-medium text-[var(--ink)]">
            Open the cards beside this step for the full comparison framework.
          </p>
        </div>
      );
    case "practical-points":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Real decisions include the practical layer — not only whether this
            path could help, but what you may need to go through.
          </p>
          <ul className="space-y-1.5 text-[var(--ink)]">
            {(path.practicalPoints ?? []).map((point) => (
              <li key={point} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-[var(--ink)]">
            Open a question beside this step for details that match your worry.
          </p>
        </div>
      );
    case "checklist": {
      const leaveItems =
        modules.doctorLeaveItems?.length
          ? modules.doctorLeaveItems
          : modules.doctorGroups?.[0]?.questions?.slice(0, 4) ?? [];
      const leaveTitle =
        modules.doctorLeaveTitle ?? "Before leaving your appointment, ask:";
      return (
        <div className="space-y-5">
          {leaveItems.length ? (
            <DoctorChecklistTakeaway lead={leaveTitle} items={leaveItems} />
          ) : null}
          <DoctorQuestionGroups modules={modules} embedded omitLeave />
        </div>
      );
    }
    default:
      return null;
  }
}

/**
 * Entry Template v2 workspace — config-driven Decision Path.
 */
export function DecisionWorkspaceV2({
  modules,
  slug,
}: {
  modules: AiEntryFlagshipModules;
  slug: string;
}) {
  const path = getEntryPathV2(slug);
  const [openId, setOpenId] = useState<string | null>(null);
  const listRef = useStepReveal();

  if (!path) return null;

  function toggleCard(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  const numberedSteps = path.steps.map((step, index) => ({
    ...step,
    number: index + 1,
  }));

  return (
    <div
      id="decision-path"
      className="decision-path-canvas mt-6 scroll-mt-24 rounded-xl border border-[var(--accent)]/15 bg-white/70 px-4 py-5 md:px-7 md:py-7"
    >
      <header className="mb-8 animate-rise">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          Decision Path
        </p>
        <h2 className="mt-1.5 font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-3xl">
          {path.pathTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
          {path.pathSubtitle}
        </p>
      </header>

      <ol ref={listRef} className="relative">
        {numberedSteps.map((step, index) => {
          const isLast = index === numberedSteps.length - 1;
          return (
            <li
              key={step.id}
              id={`path-step-${step.id}`}
              data-path-step
              className="path-step-reveal relative"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,62fr)_minmax(240px,38fr)] lg:gap-8">
                <div className="relative min-w-0 pl-11 md:pl-12">
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="absolute left-[0.95rem] top-9 bottom-[-1.1rem] w-px bg-[var(--accent)]/20 md:left-[1.05rem]"
                    />
                  ) : null}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0.5 flex size-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white md:size-9"
                  >
                    {step.number}
                  </span>

                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-[var(--muted)]/90">
                    {step.stage}
                  </p>
                  <h2 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.03em] text-[var(--ink)] md:text-[1.75rem]">
                    {step.title}
                  </h2>
                  {step.lead ? (
                    <p className="mt-1.5 text-sm text-[var(--muted)]">{step.lead}</p>
                  ) : null}
                  <div className="mt-3.5">
                    <StepMain step={step} path={path} modules={modules} />
                  </div>
                </div>

                <div className="min-w-0 pl-11 lg:sticky lg:top-24 lg:pl-0 lg:pt-7 lg:self-start">
                  <StepCards
                    step={step}
                    openId={
                      step.cards.some((c) => c.id === openId) ? openId : null
                    }
                    onToggle={toggleCard}
                    slug={slug}
                    modules={modules}
                  />
                </div>
              </div>
              {!isLast ? (
                <div
                  className="my-6 h-px bg-[var(--line)]/70 md:my-8"
                  aria-hidden
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
