import Link from "next/link";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { getEntryTemplateV2Config } from "@/lib/content/entry-template-v2";
import { SURGERY_ENTRY_CARDS } from "@/lib/content/surgery-entry-cards";
import { TREATMENT_OPTIONS_ENTRY_CARDS } from "@/lib/content/treatment-options-entry-cards";
import { ClarifyTopics } from "./clarify-topics";
import { CommonMistakes } from "./common-mistakes";
import { ContentBridge } from "./content-bridge";
import { CostConsiderations } from "./cost-considerations";
import { DecisionTriggers } from "./decision-triggers";
import { DifferRecommendations } from "./differ-recommendations";
import { DoctorQuestionGroups } from "./doctor-question-groups";
import { EvaluateOpinions } from "./evaluate-opinions";
import { GoalFramework } from "./goal-framework";
import { HowTestingDone } from "./how-testing-done";
import { IllustrativeScenario } from "./illustrative-scenario";
import { InformationGap } from "./information-gap";
import { MayNotChange } from "./may-not-change";
import { PrepChecklist } from "./prep-checklist";
import { ResultsTurnaround } from "./results-turnaround";
import { SecondOpinionBridge } from "./second-opinion-bridge";
import { TimingAnxiety } from "./timing-anxiety";
import { TreatmentCategories } from "./treatment-categories";
import { ValueSituations } from "./value-situations";
import { WhoNeedsTesting } from "./who-needs-testing";
import { WhoThisIsFor } from "./who-this-is-for";

function BulletCard({
  lead,
  items,
  close,
  ask,
}: {
  lead: string;
  items?: readonly string[];
  close?: string;
  ask?: readonly string[];
}) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>{lead}</p>
      {items?.length ? (
        <ul className="space-y-1.5">
          {items.map((item) => (
            <li key={item} className="flex gap-2.5 text-[var(--ink)]">
              <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {ask?.length ? (
        <div>
          <p className="font-medium text-[var(--ink)]">Ask:</p>
          <ul className="mt-1.5 space-y-1.5">
            {ask.map((item) => (
              <li key={item} className="flex gap-2.5 text-[var(--ink)]">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {close ? <p className="font-medium text-[var(--ink)]">{close}</p> : null}
    </div>
  );
}

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
      <p className="font-medium text-[var(--ink)]">
        Ask: “Which tests matter before we choose a plan — which are already
        done — and which can wait?”
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
      <p className="font-medium text-[var(--ink)]">
        Ask: “If this result is positive, what options does it add — and what
        still depends on other factors?”
      </p>
    </div>
  );
}

function NoActionableCard({ modules }: { modules: AiEntryFlagshipModules }) {
  const note =
    modules.doesNotDecideNotes?.[0] ??
    "If no “actionable” finding is reported, that does not mean there are no options.";
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>{note}</p>
      <p className="font-medium text-[var(--ink)]">
        Ask: “If there is no actionable finding, what should our next
        conversation focus on?”
      </p>
    </div>
  );
}

function ConfidenceCard() {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>
        A second opinion is usually about confidence and clarity — not about
        disagreeing with your current team.
      </p>
      <p>
        It can confirm a plan, surface alternatives, or show where more
        information is still needed. Confirmation can still be a useful outcome.
      </p>
      <p className="font-medium text-[var(--ink)]">
        Ask yourself: “What do I most need clarified before I decide?”
      </p>
    </div>
  );
}

function TriggerSituationCard({
  modules,
  groupIndex,
}: {
  modules: AiEntryFlagshipModules;
  groupIndex: number;
}) {
  const group = modules.triggerGroups?.[groupIndex];
  if (!group) return null;
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p className="font-medium text-[var(--ink)]">{group.heading}</p>
      {group.lead ? <p>{group.lead}</p> : null}
      <ul className="space-y-1.5">
        {group.items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[var(--ink)]">
            <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SingleMistakeCard({
  modules,
  index,
}: {
  modules: AiEntryFlagshipModules;
  index: number;
}) {
  const item = modules.mistakes?.[index];
  if (!item) return null;
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
      <p>
        <span className="font-medium text-[var(--ink)]">Why it matters: </span>
        {item.why}
      </p>
    </div>
  );
}

function MySituationCard({
  slug,
  modules,
}: {
  slug: string;
  modules: AiEntryFlagshipModules;
}) {
  const audience = getEntryTemplateV2Config(slug);
  return (
    <div className="space-y-4">
      {audience?.audienceTitle && audience.audienceItems?.length ? (
        <WhoThisIsFor
          title={audience.audienceTitle}
          items={audience.audienceItems}
        />
      ) : null}
      <DecisionTriggers modules={modules} />
      {modules.whoNeedsTitle ? <WhoNeedsTesting modules={modules} /> : null}
    </div>
  );
}

/** Accordion card bodies for Entry Template v2 paths — one question per card */
export function DecisionPathCardDetail({
  id,
  slug,
  modules,
}: {
  id: string;
  slug: string;
  modules: AiEntryFlagshipModules;
}) {
  if (id.startsWith("mistake-")) {
    const index = Number(id.slice("mistake-".length));
    if (!Number.isNaN(index)) {
      return <SingleMistakeCard modules={modules} index={index} />;
    }
  }

  switch (id) {
    case "what-is":
      return <WhatIsBiomarkerTesting />;
    case "look-for":
      return <WhatDoesTestLookFor />;
    case "situation-new-diagnosis":
      return <TriggerSituationCard modules={modules} groupIndex={0} />;
    case "situation-choosing-treatment":
      return <TriggerSituationCard modules={modules} groupIndex={1} />;
    case "situation-change-opinion":
      return <TriggerSituationCard modules={modules} groupIndex={2} />;
    case "who-needs":
      return <WhoNeedsTesting modules={modules} />;
    case "my-situation":
      return <MySituationCard slug={slug} modules={modules} />;
    case "targeted":
      return <TargetedTherapyCard />;
    case "if-none":
      return <NoActionableCard modules={modules} />;
    case "which-checked":
      return <WhichBiomarkersCard />;
    case "how-done":
      return <HowTestingDone modules={modules} focus="sources" />;
    case "biopsy":
      return <HowTestingDone modules={modules} focus="biopsy" />;
    case "risks":
      return <HowTestingDone modules={modules} focus="risks" />;
    case "turnaround":
      return <ResultsTurnaround modules={modules} />;
    case "delay":
      return <TimingAnxiety modules={modules} />;
    case "cost":
      return <CostConsiderations modules={modules} />;
    case "surgery-candidate":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.candidate.lead}
          items={SURGERY_ENTRY_CARDS.candidate.factors}
          close={SURGERY_ENTRY_CARDS.candidate.close}
        />
      );
    case "surgery-stage":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.stage.lead}
          items={SURGERY_ENTRY_CARDS.stage.also}
          close={SURGERY_ENTRY_CARDS.stage.close}
        />
      );
    case "surgery-gone":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.cancerGone.lead}
          items={SURGERY_ENTRY_CARDS.cancerGone.points}
          close={SURGERY_ENTRY_CARDS.cancerGone.close}
        />
      );
    case "surgery-before":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.beforeSurgery.lead}
          items={SURGERY_ENTRY_CARDS.beforeSurgery.reasons}
          close={SURGERY_ENTRY_CARDS.beforeSurgery.close}
        />
      );
    case "surgery-biomarker":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.biomarker.lead}
          items={SURGERY_ENTRY_CARDS.biomarker.mayHelp}
          close={`Ask: “${SURGERY_ENTRY_CARDS.biomarker.ask}”`}
        />
      );
    case "surgery-when-not":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.whenNot.lead}
          items={SURGERY_ENTRY_CARDS.whenNot.reasons}
          close={SURGERY_ENTRY_CARDS.whenNot.close}
        />
      );
    case "surgery-types":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{SURGERY_ENTRY_CARDS.surgeryTypes.lead}</p>
          <ul className="space-y-2">
            {SURGERY_ENTRY_CARDS.surgeryTypes.types.map((type) => (
              <li key={type.name}>
                <span className="font-medium text-[var(--ink)]">
                  {type.name}.{" "}
                </span>
                {type.body}
              </li>
            ))}
          </ul>
          <p className="font-medium text-[var(--ink)]">
            {SURGERY_ENTRY_CARDS.surgeryTypes.close}
          </p>
        </div>
      );
    case "surgery-risks":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.risks.lead}
          ask={SURGERY_ENTRY_CARDS.risks.ask}
        />
      );
    case "surgery-recovery":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.recovery.lead}
          ask={SURGERY_ENTRY_CARDS.recovery.ask}
        />
      );
    case "surgery-breathing":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.breathing.lead}
          items={SURGERY_ENTRY_CARDS.breathing.factors}
          close={SURGERY_ENTRY_CARDS.breathing.close}
        />
      );
    case "surgery-center": {
      const bridge = modules.bridges?.[1];
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={SURGERY_ENTRY_CARDS.careCenter.lead}
            ask={SURGERY_ENTRY_CARDS.careCenter.ask}
          />
          {bridge?.ctaHref && bridge.ctaLabel ? (
            <p>
              <Link
                href={bridge.ctaHref}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                {bridge.ctaLabel} →
              </Link>
            </p>
          ) : null}
        </div>
      );
    }
    case "confidence":
      return <ConfidenceCard />;
    case "clarify":
      return <ClarifyTopics modules={modules} />;
    case "may-not":
      return <MayNotChange modules={modules} />;
    case "evaluate":
    case "five-questions":
      return <EvaluateOpinions modules={modules} />;
    case "timing":
      return <TimingAnxiety modules={modules} />;
    case "prep":
      return <PrepChecklist modules={modules} />;
    case "bridge":
      return modules.bridge ? (
        <ContentBridge bridge={modules.bridge} />
      ) : (
        <SecondOpinionBridge modules={modules} />
      );
    case "goals":
      return <GoalFramework modules={modules} />;
    case "differ":
      return <DifferRecommendations modules={modules} />;
    case "categories":
      return <TreatmentCategories modules={modules} />;
    case "info-gap":
      return <InformationGap modules={modules} />;
    case "tx-approaches":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{TREATMENT_OPTIONS_ENTRY_CARDS.approaches.lead}</p>
          <ul className="space-y-2">
            {TREATMENT_OPTIONS_ENTRY_CARDS.approaches.types.map((type) => (
              <li key={type.name}>
                <span className="font-medium text-[var(--ink)]">
                  {type.name}.{" "}
                </span>
                {type.body}
              </li>
            ))}
          </ul>
        </div>
      );
    case "tx-combined":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.combined.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.combined.examples}
          close={`Ask: “${TREATMENT_OPTIONS_ENTRY_CARDS.combined.ask}”`}
        />
      );
    case "tx-newer":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.newer.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.newer.match}
          close={`Ask: “${TREATMENT_OPTIONS_ENTRY_CARDS.newer.ask}”`}
        />
      );
    case "tx-different":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.differentPeople.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.differentPeople.factors}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.differentPeople.close}
        />
      );
    case "tx-biomarkers":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{TREATMENT_OPTIONS_ENTRY_CARDS.biomarkers.lead}</p>
          <p>{TREATMENT_OPTIONS_ENTRY_CARDS.biomarkers.body}</p>
          <p className="font-medium text-[var(--ink)]">
            Ask: “{TREATMENT_OPTIONS_ENTRY_CARDS.biomarkers.ask}”
          </p>
          <p>
            <Link
              href="/questions/do-i-need-biomarker-testing-before-lung-cancer-treatment"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Biomarker testing decision →
            </Link>
          </p>
        </div>
      );
    case "tx-less-aggressive":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{TREATMENT_OPTIONS_ENTRY_CARDS.lessAggressive.lead}</p>
          <p>{TREATMENT_OPTIONS_ENTRY_CARDS.lessAggressive.body}</p>
          <p className="font-medium text-[var(--ink)]">
            {TREATMENT_OPTIONS_ENTRY_CARDS.lessAggressive.close}
          </p>
        </div>
      );
    case "tx-tradeoffs":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.compareTradeoffs.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.compareTradeoffs.points}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.compareTradeoffs.close}
        />
      );
    case "tx-qol":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.qualityOfLife.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.qualityOfLife.factors}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.qualityOfLife.close}
        />
      );
    case "tx-if-not-working":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.ifNotWorking.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.ifNotWorking.options}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.ifNotWorking.close}
        />
      );
    case "tx-take-time":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.takeTime.lead}
          ask={TREATMENT_OPTIONS_ENTRY_CARDS.takeTime.ask}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.takeTime.close}
        />
      );
    case "tx-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{TREATMENT_OPTIONS_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {TREATMENT_OPTIONS_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
          <p className="font-medium text-[var(--ink)]">
            {TREATMENT_OPTIONS_ENTRY_CARDS.mistakes.close}
          </p>
        </div>
      );
    case "tx-trial":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={TREATMENT_OPTIONS_ENTRY_CARDS.clinicalTrial.lead}
            ask={TREATMENT_OPTIONS_ENTRY_CARDS.clinicalTrial.ask}
          />
          <p>
            <Link
              href="/questions/should-i-consider-a-clinical-trial-for-lung-cancer"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Clinical trial decision guide →
            </Link>
          </p>
        </div>
      );
    case "second-opinion": {
      const bridge = modules.bridges?.[0];
      if (bridge) {
        return (
          <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
            {bridge.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {bridge.ctaHref && bridge.ctaLabel ? (
              <p>
                <Link
                  href={bridge.ctaHref}
                  className="font-semibold text-[var(--accent)] hover:underline"
                >
                  {bridge.ctaLabel} →
                </Link>
              </p>
            ) : null}
          </div>
        );
      }
      if (modules.secondOpinionTitle) {
        return <SecondOpinionBridge modules={modules} />;
      }
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={TREATMENT_OPTIONS_ENTRY_CARDS.secondOpinion.lead}
            items={TREATMENT_OPTIONS_ENTRY_CARDS.secondOpinion.when}
          />
          <p>
            <Link
              href="/questions/should-i-get-second-opinion-after-lung-cancer-diagnosis"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Second opinion decision guide →
            </Link>
          </p>
        </div>
      );
    }
    case "mistakes":
      return <CommonMistakes modules={modules} />;
    case "scenario":
      return <IllustrativeScenario modules={modules} />;
    case "value":
      return <ValueSituations modules={modules} />;
    case "doctor":
      return <DoctorQuestionGroups modules={modules} />;
    default:
      return null;
  }
}
