"use client";

import { useState } from "react";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { cn } from "@/lib/utils";
import { AffectDecisions } from "./affect-decisions";
import { CommonMistakes } from "./common-mistakes";
import { CostConsiderations } from "./cost-considerations";
import { DecisionTriggers } from "./decision-triggers";
import { DoctorQuestionGroups } from "./doctor-question-groups";
import { DoesNotDecide } from "./does-not-decide";
import { HowTestingDone } from "./how-testing-done";
import { IllustrativeScenario } from "./illustrative-scenario";
import { InformationGap } from "./information-gap";
import { RelatedDecisionPaths } from "./related-decision-paths";
import { ResultsTurnaround } from "./results-turnaround";
import { TimingAnxiety } from "./timing-anxiety";
import { ValueSituations } from "./value-situations";
import { WhatHappensNext } from "./what-happens-next";
import { WhoNeedsTesting } from "./who-needs-testing";
import { WhyDecisionMatters } from "./why-decision-matters";
import { YourNextStep } from "./your-next-step";

type QuestionCard = {
  id: string;
  title: string;
  summary: string;
};

const CARDS: QuestionCard[] = [
  {
    id: "delay",
    title: "Will testing delay treatment?",
    summary: "What waiting for results may mean for timing.",
  },
  {
    id: "how-done",
    title: "How is biomarker testing done?",
    summary: "Tissue already collected, blood tests, or a new sample.",
  },
  {
    id: "biopsy",
    title: "Will I need another biopsy?",
    summary: "When a new sample may be discussed — and when it may not.",
  },
  {
    id: "risks",
    title: "What are the risks of another biopsy?",
    summary: "Risks usually come from getting tissue, not the lab test itself.",
  },
  {
    id: "turnaround",
    title: "How long will testing take?",
    summary: "What to ask about timing — without a one-size calendar.",
  },
  {
    id: "cost",
    title: "Cost and insurance",
    summary: "Questions to ask before testing is ordered.",
  },
  {
    id: "who-needs",
    title: "Does everyone need the same tests?",
    summary: "Why testing is not identical for every person.",
  },
  {
    id: "doctor",
    title: "Questions to ask my doctor",
    summary: "A visit checklist you can take to the appointment.",
  },
  {
    id: "deeper",
    title: "Common questions & deeper detail",
    summary: "When this comes up, mistakes to avoid, and an example.",
  },
];

function CardDetail({
  id,
  modules,
}: {
  id: string;
  modules: AiEntryFlagshipModules;
}) {
  switch (id) {
    case "delay":
      return <TimingAnxiety modules={modules} />;
    case "how-done":
      return <HowTestingDone modules={modules} focus="all" />;
    case "biopsy":
      return <HowTestingDone modules={modules} focus="biopsy" />;
    case "risks":
      return <HowTestingDone modules={modules} focus="risks" />;
    case "turnaround":
      return <ResultsTurnaround modules={modules} />;
    case "cost":
      return <CostConsiderations modules={modules} />;
    case "who-needs":
      return <WhoNeedsTesting modules={modules} />;
    case "doctor":
      return <DoctorQuestionGroups modules={modules} />;
    case "deeper":
      return (
        <div className="space-y-2">
          <DecisionTriggers modules={modules} />
          <InformationGap modules={modules} />
          <AffectDecisions modules={modules} />
          <ValueSituations modules={modules} />
          <CommonMistakes modules={modules} />
          <IllustrativeScenario modules={modules} />
        </div>
      );
    default:
      return null;
  }
}

/**
 * Entry Template v2 workspace: left decision story + right patient questions.
 * Mobile stacks: main path first, then question cards.
 */
export function DecisionWorkspaceV2({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeCard = CARDS.find((c) => c.id === activeId) ?? null;

  return (
    <div className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(280px,3fr)]">
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Main decision path
        </p>
        <WhyDecisionMatters modules={modules} />
        <DoesNotDecide modules={modules} />
        <WhatHappensNext />
        {modules.doctorLeaveTitle && modules.doctorLeaveItems?.length ? (
          <div className="my-6 rounded-md border border-amber-700/20 bg-amber-50/70 px-4 py-3">
            <p className="text-sm font-semibold text-[var(--ink)]">
              {modules.doctorLeaveTitle}
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-[var(--ink-soft)]">
              {modules.doctorLeaveItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden>
                    □
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setActiveId("doctor")}
              className="mt-3 text-sm font-semibold text-[var(--accent)] hover:underline"
            >
              Open full doctor checklist →
            </button>
          </div>
        ) : null}
        <YourNextStep modules={modules} />
        <RelatedDecisionPaths modules={modules} />
      </div>

      <aside
        id="patient-questions-panel"
        className="min-w-0 scroll-mt-24 lg:sticky lg:top-24 lg:self-start"
      >
        <div className="rounded-lg border border-[var(--accent)]/25 bg-white/90 p-4 md:p-5">
          {activeCard ? (
            <div>
              <button
                type="button"
                onClick={() => setActiveId(null)}
                className="text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                ← Questions patients ask
              </button>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                {activeCard.title}
              </p>
              <div className="mt-1 max-h-[min(70vh,40rem)] overflow-y-auto pr-1">
                <CardDetail id={activeCard.id} modules={modules} />
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                Questions patients ask
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Tap a question you care about now. You can return here anytime.
              </p>
              <ul className="mt-4 space-y-2">
                {CARDS.map((card) => (
                  <li key={card.id}>
                    <button
                      type="button"
                      onClick={() => setActiveId(card.id)}
                      className={cn(
                        "w-full rounded-md border border-[var(--line)] bg-[var(--paper)]/80 px-3 py-3 text-left transition",
                        "hover:border-[var(--accent)] hover:bg-[rgba(15,118,110,0.05)]"
                      )}
                    >
                      <span className="block text-sm font-semibold text-[var(--ink)]">
                        {card.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-[var(--muted)]">
                        {card.summary}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
