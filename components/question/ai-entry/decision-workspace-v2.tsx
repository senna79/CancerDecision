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
import { WhoNeedsTesting } from "./who-needs-testing";
import { WhyDecisionMatters } from "./why-decision-matters";
import { YourNextStep } from "./your-next-step";

type QuestionCard = {
  id: string;
  title: string;
  summary: string;
};

type DecisionStep = {
  id: string;
  number: number;
  /** OS stage — light eyebrow only */
  stage: string;
  /** Patient-facing step title */
  title: string;
  /** Optional short lead under the title */
  lead?: string;
  cards: QuestionCard[];
};

const STEPS: DecisionStep[] = [
  {
    id: "understand",
    number: 1,
    stage: "Understand the decision",
    title: "Why does this matter?",
    lead: "Start with the question patients usually ask first: why is my doctor talking about this test?",
    cards: [
      {
        id: "what-is",
        title: "What is biomarker testing?",
        summary: "A plain-language definition of what the test looks for.",
      },
      {
        id: "who-needs",
        title: "Does everyone need the same tests?",
        summary: "Why testing is not identical for every person.",
      },
    ],
  },
  {
    id: "compare",
    number: 2,
    stage: "Compare what matters",
    title: "Could results change my options?",
    lead: "This is the core question: would the result change what you and your team discuss next?",
    cards: [
      {
        id: "targeted",
        title: "Does this mean targeted therapy?",
        summary: "What a finding may open — and what it does not decide alone.",
      },
      {
        id: "if-found",
        title: "What happens if a biomarker is found?",
        summary: "How results can support option discussions.",
      },
      {
        id: "if-none",
        title: "What if no actionable biomarker is found?",
        summary: "Why “no match” is not the same as “no options.”",
      },
    ],
  },
  {
    id: "practical",
    number: 3,
    stage: "Consider practical realities",
    title: "What should I know before testing?",
    lead: "Before you say yes, understand what you may experience — sample, timing, risk, and cost questions.",
    cards: [
      {
        id: "how-done",
        title: "How is testing done?",
        summary: "Tissue already collected, blood tests, or a new sample.",
      },
      {
        id: "biopsy",
        title: "Will I need another biopsy?",
        summary: "When a new sample may be discussed — and when it may not.",
      },
      {
        id: "risks",
        title: "What are the risks?",
        summary: "Risks usually come from getting tissue, not the lab test itself.",
      },
      {
        id: "turnaround",
        title: "How long does it take?",
        summary: "What to ask about timing — without a one-size calendar.",
      },
      {
        id: "cost",
        title: "Cost and insurance",
        summary: "Questions to ask before testing is ordered.",
      },
      {
        id: "delay",
        title: "What if treatment feels urgent?",
        summary: "Waiting is not automatically an unsafe delay — ask what applies to you.",
      },
    ],
  },
  {
    id: "conversation",
    number: 4,
    stage: "Prepare for next conversation",
    title: "What should I discuss with my doctor?",
    lead: "Leave with a short list — not a finished medical decision.",
    cards: [
      {
        id: "doctor",
        title: "Doctor questions checklist",
        summary: "A visit checklist you can take to the appointment.",
      },
      {
        id: "deeper",
        title: "Common mistakes & an example",
        summary: "Pitfalls to avoid and an illustrative scenario.",
      },
    ],
  },
];

const PRACTICAL_POINTS = [
  "How a sample would be obtained — existing tissue, sometimes blood, sometimes a new biopsy discussion",
  "Rough timing — when results are expected, and whether treatment decisions will wait",
  "Cost and insurance questions to ask before anything is ordered",
];

function WhatIsBiomarkerTesting({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>
        Biomarker testing looks for features of your cancer that may affect which
        treatments your doctors discuss.
      </p>
      <p>
        It is laboratory analysis — often using tissue or other samples already
        collected. It is related to, but not the same thing as, a biopsy
        procedure.
      </p>
      {modules.howDoneLead ? <p>{modules.howDoneLead}</p> : null}
      <p className="font-medium text-[var(--ink)]">
        Useful framing: some results may open or change treatment discussions;
        others mainly confirm that the current plan still fits the information
        available.
      </p>
    </div>
  );
}

function TargetedTherapyCard() {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>
        Not automatically. A biomarker finding may open a discussion about
        matched approaches — including targeted therapies in some situations —
        but it does not by itself choose the right treatment.
      </p>
      <p>Your care team still weighs factors such as:</p>
      <ul className="space-y-2">
        {[
          "Cancer stage and overall health",
          "Previous treatments and current goals",
          "Potential benefits, trade-offs, and preferences",
        ].map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-md border border-[var(--line)] bg-white/60 px-3 py-2"
          >
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="font-medium text-[var(--ink)]">
        Ask: “If this result is positive, what options does it add to our
        discussion — and what still depends on other factors?”
      </p>
    </div>
  );
}

function NoActionableCard({ modules }: { modules: AiEntryFlagshipModules }) {
  const note =
    modules.doesNotDecideNotes?.[0] ??
    "If no “actionable” finding is reported, that does not mean there are no options — it means this particular information did not point to a specific matched approach.";

  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>{note}</p>
      <p>
        Next discussions may still include other treatment approaches, supportive
        care priorities, clinical trials, or whether different testing is needed
        for a later decision.
      </p>
      <p className="font-medium text-[var(--ink)]">
        Ask: “If there is no actionable finding, what should our next
        conversation focus on?”
      </p>
    </div>
  );
}

function CardDetail({
  id,
  modules,
}: {
  id: string;
  modules: AiEntryFlagshipModules;
}) {
  switch (id) {
    case "what-is":
      return <WhatIsBiomarkerTesting modules={modules} />;
    case "who-needs":
      return <WhoNeedsTesting modules={modules} />;
    case "targeted":
      return <TargetedTherapyCard />;
    case "if-found":
      return <AffectDecisions modules={modules} />;
    case "if-none":
      return <NoActionableCard modules={modules} />;
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
    case "delay":
      return <TimingAnxiety modules={modules} />;
    case "doctor":
      return <DoctorQuestionGroups modules={modules} />;
    case "deeper":
      return (
        <div className="space-y-2">
          <DecisionTriggers modules={modules} />
          <InformationGap modules={modules} />
          <ValueSituations modules={modules} />
          <CommonMistakes modules={modules} />
          <IllustrativeScenario modules={modules} />
        </div>
      );
    default:
      return null;
  }
}

function StepCards({
  step,
  activeId,
  onOpen,
  onClose,
  modules,
}: {
  step: DecisionStep;
  activeId: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
  modules: AiEntryFlagshipModules;
}) {
  const activeCard = step.cards.find((c) => c.id === activeId) ?? null;

  return (
    <div className="rounded-lg border border-[var(--accent)]/20 bg-white/90 p-3 md:p-4">
      {activeCard ? (
        <div>
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-semibold text-[var(--accent)] hover:underline"
          >
            ← Questions for this step
          </button>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            {activeCard.title}
          </p>
          <div className="mt-2 max-h-[min(60vh,32rem)] overflow-y-auto pr-1">
            <CardDetail id={activeCard.id} modules={modules} />
          </div>
        </div>
      ) : (
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            Questions you may have
          </p>
          <ul className="mt-3 space-y-2">
            {step.cards.map((card) => (
              <li key={card.id}>
                <button
                  type="button"
                  onClick={() => onOpen(card.id)}
                  className={cn(
                    "w-full rounded-md border border-[var(--line)] bg-[var(--paper)]/80 px-3 py-2.5 text-left transition",
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
  );
}

function StepMain({
  step,
  modules,
  onOpenDoctor,
}: {
  step: DecisionStep;
  modules: AiEntryFlagshipModules;
  onOpenDoctor: () => void;
}) {
  switch (step.id) {
    case "understand":
      return <WhyDecisionMatters modules={modules} embedded />;
    case "compare":
      return <DoesNotDecide modules={modules} embedded />;
    case "practical":
      return (
        <div className="space-y-3 text-[var(--ink-soft)] leading-relaxed">
          <p>
            Real decisions include the practical layer — not only whether testing
            could help, but what you may need to go through to get the
            information.
          </p>
          <ul className="space-y-2">
            {PRACTICAL_POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-md border border-[var(--line)] bg-white/70 px-4 py-3"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span className="text-[var(--ink)]">{point}</span>
              </li>
            ))}
          </ul>
          <p className="font-medium text-[var(--ink)]">
            Open a question beside this step for sample method, biopsy, risks,
            timing, or cost — then bring those answers into your next
            appointment.
          </p>
        </div>
      );
    case "conversation":
      return (
        <div className="space-y-4">
          {modules.doctorLeaveTitle && modules.doctorLeaveItems?.length ? (
            <div className="rounded-md border border-amber-700/20 bg-amber-50/70 px-4 py-3">
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
                onClick={onOpenDoctor}
                className="mt-3 text-sm font-semibold text-[var(--accent)] hover:underline"
              >
                Open full doctor checklist →
              </button>
            </div>
          ) : null}
          <div className="[&>#your-next-step]:mt-2">
            <YourNextStep modules={modules} />
          </div>
        </div>
      );
    default:
      return null;
  }
}

/**
 * Entry Template v2 workspace:
 * Vertical Decision Path (4 OS stages) with question cards beside each step.
 */
export function DecisionWorkspaceV2({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="mt-8">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Biomarker Testing Decision Path
        </p>
        <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
          Four steps — understand the decision, compare what matters, consider
          practical realities, then prepare for your next conversation.
        </p>
      </header>

      <ol className="relative space-y-0">
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1;
          return (
            <li key={step.id} id={`path-step-${step.id}`} className="relative">
              <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.95fr)] lg:gap-8">
                <div className="relative min-w-0 pl-12 md:pl-14">
                  {/* Vertical connector */}
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="absolute left-[1.15rem] top-10 bottom-[-1.5rem] w-px bg-[var(--accent)]/25 md:left-[1.35rem]"
                    />
                  ) : null}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 flex size-9 items-center justify-center rounded-full border-2 border-[var(--accent)]/50 bg-[rgba(15,118,110,0.08)] text-sm font-bold text-[var(--accent)] md:size-10 md:text-base"
                  >
                    {step.number}
                  </span>

                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Stage {step.number} · {step.stage}
                  </p>
                  <h2 className="mt-1 font-heading text-xl font-semibold tracking-[-0.02em] text-[var(--ink)] md:text-2xl">
                    {step.title}
                  </h2>
                  {step.lead ? (
                    <p className="mt-2 text-sm text-[var(--muted)]">{step.lead}</p>
                  ) : null}
                  <div className="mt-4">
                    <StepMain
                      step={step}
                      modules={modules}
                      onOpenDoctor={() => setActiveId("doctor")}
                    />
                  </div>
                </div>

                <div className="min-w-0 pl-12 lg:pl-0 lg:pt-6">
                  <StepCards
                    step={step}
                    activeId={
                      step.cards.some((c) => c.id === activeId)
                        ? activeId
                        : null
                    }
                    onOpen={setActiveId}
                    onClose={() => setActiveId(null)}
                    modules={modules}
                  />
                </div>
              </div>
              {!isLast ? <div className="h-8 md:h-10" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>

      <RelatedDecisionPaths modules={modules} />
    </div>
  );
}
