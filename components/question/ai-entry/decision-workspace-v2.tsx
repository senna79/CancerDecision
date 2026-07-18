"use client";

import { useState } from "react";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { getEntryTemplateV2Config } from "@/lib/content/entry-template-v2";
import { cn } from "@/lib/utils";
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
import { WhoThisIsFor } from "./who-this-is-for";
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
  stage: string;
  title: string;
  lead?: string;
  cards: QuestionCard[];
};

const BIOMARKER_SLUG =
  "do-i-need-biomarker-testing-before-lung-cancer-treatment";

const STEPS: DecisionStep[] = [
  {
    id: "understand",
    number: 1,
    stage: "Understand the decision",
    title: "Why does biomarker testing matter?",
    lead: "Patient question: why is my doctor talking about this test?",
    cards: [
      {
        id: "what-is",
        title: "What is biomarker testing?",
        summary: "A plain-language definition.",
      },
      {
        id: "look-for",
        title: "What does the test look for?",
        summary: "Features of your cancer — not a gene encyclopedia.",
      },
      {
        id: "my-situation",
        title: "Is this my situation?",
        summary: "When people usually ask about biomarker testing.",
      },
    ],
  },
  {
    id: "compare",
    number: 2,
    stage: "Compare what matters",
    title: "Could biomarker results change my treatment options?",
    lead: "Patient question: what would this result actually be used for?",
    cards: [
      {
        id: "targeted",
        title: "Does a biomarker result mean targeted therapy?",
        summary: "What a finding may open — and what it does not decide alone.",
      },
      {
        id: "if-none",
        title: "What if no actionable biomarker is found?",
        summary: "Why “no match” is not the same as “no options.”",
      },
      {
        id: "which-checked",
        title: "Which biomarkers are usually checked?",
        summary: "Ask what matters for your decision — not a public gene list.",
      },
    ],
  },
  {
    id: "practical",
    number: 3,
    stage: "Consider practical realities",
    title: "What should I know before testing?",
    lead: "Patient question: what will I actually go through?",
    cards: [
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
        title: "What are the biopsy risks?",
        summary: "Risks usually come from getting tissue, not the lab test itself.",
      },
      {
        id: "turnaround",
        title: "How long does testing take?",
        summary: "Timing, waiting, and what to ask if treatment feels urgent.",
      },
      {
        id: "cost",
        title: "Cost and insurance",
        summary: "Questions to ask before testing is ordered.",
      },
    ],
  },
  {
    id: "conversation",
    number: 4,
    stage: "Prepare for next conversation",
    title: "What should I discuss with my doctor?",
    lead: "Patient question: what should I ask at the next visit?",
    cards: [
      {
        id: "doctor",
        title: "Full doctor questions checklist",
        summary: "Grouped questions you can take to the appointment.",
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

function WhatIsBiomarkerTesting() {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>
        Biomarker testing looks for features of your cancer that may affect which
        treatments your care team discusses.
      </p>
      <p>
        It is laboratory analysis — often using tissue or other samples already
        collected. It is related to, but not the same thing as, a biopsy
        procedure.
      </p>
      <p className="font-medium text-[var(--ink)]">
        Some results may open or change treatment discussions; others mainly
        confirm that the current plan still fits the information available.
      </p>
    </div>
  );
}

function WhatDoesTestLookFor() {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>
        The test looks for features of your cancer — signals that may help
        doctors compare which approaches are worth discussing for you.
      </p>
      <p>
        Exactly which features matter depends on your cancer type, stage, and
        the decision in front of you. That list belongs in a conversation with
        your care team, not on a public webpage.
      </p>
      <p className="font-medium text-[var(--ink)]">
        Ask: “For my situation, what are we looking for — and could the answer
        change the options we discuss?”
      </p>
    </div>
  );
}

function WhichBiomarkersCard() {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>
        There is no single public checklist that fits every person. Useful tests
        depend on cancer type, stage, prior results, and the treatment decision
        you are making now.
      </p>
      <p>
        This page does not list individual biomarker names as medical advice.
        The safer next step is to ask your team what is recommended for{" "}
        <span className="font-medium text-[var(--ink)]">your</span> decision.
      </p>
      <p className="font-medium text-[var(--ink)]">
        Ask: “Which tests matter before we choose a plan — which are already
        done — and which can wait?”
      </p>
    </div>
  );
}

function MySituationCard({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  const audience = getEntryTemplateV2Config(BIOMARKER_SLUG);

  return (
    <div className="space-y-4">
      {audience?.audienceTitle && audience.audienceItems?.length ? (
        <WhoThisIsFor
          title={audience.audienceTitle}
          items={audience.audienceItems}
        />
      ) : null}
      <DecisionTriggers modules={modules} />
      <WhoNeedsTesting modules={modules} />
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
      return <WhatIsBiomarkerTesting />;
    case "look-for":
      return <WhatDoesTestLookFor />;
    case "my-situation":
      return <MySituationCard modules={modules} />;
    case "targeted":
      return <TargetedTherapyCard />;
    case "if-none":
      return <NoActionableCard modules={modules} />;
    case "which-checked":
      return <WhichBiomarkersCard />;
    case "how-done":
      return <HowTestingDone modules={modules} focus="all" />;
    case "biopsy":
      return <HowTestingDone modules={modules} focus="biopsy" />;
    case "risks":
      return <HowTestingDone modules={modules} focus="risks" />;
    case "turnaround":
      return (
        <div className="space-y-4">
          <ResultsTurnaround modules={modules} />
          <TimingAnxiety modules={modules} />
        </div>
      );
    case "cost":
      return <CostConsiderations modules={modules} />;
    case "doctor":
      return <DoctorQuestionGroups modules={modules} />;
    case "deeper":
      return (
        <div className="space-y-2">
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
  openId,
  onToggle,
  modules,
}: {
  step: DecisionStep;
  openId: string | null;
  onToggle: (id: string) => void;
  modules: AiEntryFlagshipModules;
}) {
  return (
    <div className="rounded-lg border border-[var(--accent)]/20 bg-white/90 p-3 md:p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        Questions you may have
      </p>
      <ul className="mt-3 space-y-2">
        {step.cards.map((card) => {
          const open = openId === card.id;
          return (
            <li
              key={card.id}
              className={cn(
                "rounded-md border bg-[var(--paper)]/80",
                open
                  ? "border-[var(--accent)]/40"
                  : "border-[var(--line)]"
              )}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => onToggle(card.id)}
                className={cn(
                  "flex w-full items-start gap-2 px-3 py-2.5 text-left transition",
                  "hover:bg-[rgba(15,118,110,0.05)]"
                )}
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
                  className="mt-0.5 shrink-0 text-sm font-semibold text-[var(--accent)]"
                >
                  {open ? "−" : "+"}
                </span>
              </button>
              {open ? (
                <div className="border-t border-[var(--line)] px-3 py-3">
                  <div className="max-h-[min(55vh,28rem)] overflow-y-auto pr-1">
                    <CardDetail id={card.id} modules={modules} />
                  </div>
                  <button
                    type="button"
                    onClick={() => onToggle(card.id)}
                    className="mt-3 text-sm font-semibold text-[var(--accent)] hover:underline"
                  >
                    Close
                  </button>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
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
      return (
        <div className="space-y-4">
          <p className="rounded-md border border-[var(--accent)]/20 bg-[rgba(15,118,110,0.06)] px-4 py-3 text-sm font-medium text-[var(--ink)]">
            Before making treatment decisions, ask whether the picture is
            complete.
          </p>
          <WhyDecisionMatters modules={modules} embedded />
        </div>
      );
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
            timing, or cost.
          </p>
        </div>
      );
    case "conversation":
      return (
        <div className="space-y-4">
          {modules.doctorLeaveTitle && modules.doctorLeaveItems?.length ? (
            <div className="rounded-md border border-amber-700/20 bg-amber-50/70 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                Doctor Conversation Checklist
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--ink)]">
                {modules.doctorLeaveTitle}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
                {modules.doctorLeaveItems.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[var(--accent)]" aria-hidden>
                      ☐
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
 * Vertical Decision Path (4 OS stages) · ~70/30 · accordion cards per step.
 */
export function DecisionWorkspaceV2({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  function toggleCard(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <div id="decision-path" className="mt-6 scroll-mt-24">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Biomarker Testing Decision Path
        </p>
        <p className="mt-1 max-w-2xl text-sm text-[var(--muted)]">
          Why it matters → whether options could change → what you may go through
          → what to ask your doctor.
        </p>
      </header>

      <ol className="relative">
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1;
          return (
            <li key={step.id} id={`path-step-${step.id}`} className="relative">
              <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(220px,3fr)] lg:gap-6">
                <div className="relative min-w-0 pl-12 md:pl-14">
                  {!isLast ? (
                    <span
                      aria-hidden
                      className="absolute left-[1.15rem] top-10 bottom-[-1.25rem] w-px bg-[var(--accent)]/25 md:left-[1.35rem]"
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
                      onOpenDoctor={() => setOpenId("doctor")}
                    />
                  </div>
                </div>

                <div className="min-w-0 pl-12 lg:sticky lg:top-24 lg:pl-0 lg:pt-6 lg:self-start">
                  <StepCards
                    step={step}
                    openId={
                      step.cards.some((c) => c.id === openId) ? openId : null
                    }
                    onToggle={toggleCard}
                    modules={modules}
                  />
                </div>
              </div>
              {!isLast ? <div className="h-7 md:h-9" aria-hidden /> : null}
            </li>
          );
        })}
      </ol>

      <RelatedDecisionPaths modules={modules} />
    </div>
  );
}
