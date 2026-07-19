"use client";

import Link from "next/link";
import { PrepItemRow } from "@/components/prep-sheet/add-to-prep-button";
import {
  PrepSourceProvider,
  usePrepSource,
} from "@/components/prep-sheet/prep-source-context";
import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { getEntryTemplateV2Config } from "@/lib/content/entry-template-v2";
import type { PrepSection } from "@/lib/prep-sheet/types";
import { SURGERY_ENTRY_CARDS } from "@/lib/content/surgery-entry-cards";
import { CLINICAL_TRIAL_ENTRY_CARDS } from "@/lib/content/clinical-trial-entry-cards";
import { SECOND_OPINION_ENTRY_CARDS } from "@/lib/content/second-opinion-entry-cards";
import { TREATMENT_OPTIONS_ENTRY_CARDS } from "@/lib/content/treatment-options-entry-cards";
import { RECURRENCE_ENTRY_CARDS } from "@/lib/content/recurrence-entry-cards";
import { QUALITY_OF_LIFE_ENTRY_CARDS } from "@/lib/content/quality-of-life-entry-cards";
import { FOLLOW_UP_ENTRY_CARDS } from "@/lib/content/follow-up-entry-cards";
import { NEWLY_DIAGNOSED_ENTRY_CARDS } from "@/lib/content/newly-diagnosed-entry-cards";
import { STAGE_IV_ENTRY_CARDS } from "@/lib/content/stage-iv-entry-cards";
import { CARE_CENTER_ENTRY_CARDS } from "@/lib/content/care-center-entry-cards";
import { FEASIBILITY_ENTRY_CARDS } from "@/lib/content/feasibility-entry-cards";
import { TREATMENT_PROGRESSION_ENTRY_CARDS } from "@/lib/content/treatment-progression-entry-cards";
import { BIOMARKER_ENTRY_CARDS } from "@/lib/content/biomarker-entry-cards";
import { BRAIN_METS_ENTRY_CARDS } from "@/lib/content/brain-mets-entry-cards";
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
  itemSection,
  sourceLabel,
  sourceHref,
}: {
  lead: string;
  items?: readonly string[];
  close?: string;
  ask?: readonly string[];
  /** When set, each item can be added to the prep sheet (e.g. records to bring). */
  itemSection?: PrepSection;
  sourceLabel?: string;
  sourceHref?: string;
}) {
  const prepSource = usePrepSource();
  const label = sourceLabel ?? prepSource.label;
  const href = sourceHref ?? prepSource.href;

  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
      <p>{lead}</p>
      {items?.length ? (
        <ul className="space-y-1.5">
          {items.map((item) =>
            itemSection ? (
              <PrepItemRow
                key={item}
                section={itemSection}
                text={item}
                sourceLabel={label}
                sourceHref={href}
              />
            ) : (
              <li key={item} className="flex gap-2.5 text-[var(--ink)]">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
      ) : null}
      {ask?.length ? (
        <div>
          <p className="font-medium text-[var(--ink)]">Ask:</p>
          <ul className="mt-1.5 space-y-1.5">
            {ask.map((item) => (
              <PrepItemRow
                key={item}
                section="ask"
                text={item}
                sourceLabel={label}
                sourceHref={href}
              />
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
  return (
    <PrepSourceProvider
      label={modules.decisionMoment}
      href={`/questions/${slug}`}
    >
      <DecisionPathCardDetailInner id={id} slug={slug} modules={modules} />
    </PrepSourceProvider>
  );
}

function DecisionPathCardDetailInner({
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
    case "so-everyone":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.everyone.lead}
          items={SECOND_OPINION_ENTRY_CARDS.everyone.when}
          close={SECOND_OPINION_ENTRY_CARDS.everyone.close}
        />
      );
    case "so-delay":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.delay.lead}
          ask={SECOND_OPINION_ENTRY_CARDS.delay.ask}
          close={SECOND_OPINION_ENTRY_CARDS.delay.close}
        />
      );
    case "so-disrespect":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{SECOND_OPINION_ENTRY_CARDS.disrespectful.lead}</p>
          <p className="font-medium text-[var(--ink)]">
            You can frame it as: “{SECOND_OPINION_ENTRY_CARDS.disrespectful.frame}
            ”
          </p>
          <p>{SECOND_OPINION_ENTRY_CARDS.disrespectful.close}</p>
        </div>
      );
    case "so-change":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.canChange.lead}
          items={SECOND_OPINION_ENTRY_CARDS.canChange.outcomes}
          close={SECOND_OPINION_ENTRY_CARDS.canChange.close}
        />
      );
    case "so-two-doctors":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.twoDoctors.lead}
          items={SECOND_OPINION_ENTRY_CARDS.twoDoctors.compare}
        />
      );
    case "so-pathology":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.pathologyReview.lead}
          ask={SECOND_OPINION_ENTRY_CARDS.pathologyReview.ask}
        />
      );
    case "so-records":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.records.lead}
          items={SECOND_OPINION_ENTRY_CARDS.records.items}
          itemSection="bring"
        />
      );
    case "so-specialist":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={SECOND_OPINION_ENTRY_CARDS.specialist.lead}
            close={SECOND_OPINION_ENTRY_CARDS.specialist.close}
          />
          {modules.bridge?.ctaHref && modules.bridge.ctaLabel ? (
            <p>
              <Link
                href={modules.bridge.ctaHref}
                className="font-semibold text-[var(--accent)] hover:underline"
              >
                {modules.bridge.ctaLabel} →
              </Link>
            </p>
          ) : null}
        </div>
      );
    case "so-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{SECOND_OPINION_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {SECOND_OPINION_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "so-choose":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.chooseBetween.lead}
          items={SECOND_OPINION_ENTRY_CARDS.chooseBetween.points}
          close={SECOND_OPINION_ENTRY_CARDS.chooseBetween.close}
        />
      );
    case "so-again":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.againLater.lead}
          items={SECOND_OPINION_ENTRY_CARDS.againLater.when}
          close={SECOND_OPINION_ENTRY_CARDS.againLater.close}
        />
      );
    case "so-family":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.family.lead}
          close={SECOND_OPINION_ENTRY_CARDS.family.close}
        />
      );
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
    case "tx-practical-fit":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.practicalCompare.lead}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.practicalCompare.close}
        />
      );
    case "tx-cant-manage":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.cantManage.lead}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.cantManage.close}
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
    case "trial-not-last":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.notLastResort.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.notLastResort.when}
          close={CLINICAL_TRIAL_ENTRY_CARDS.notLastResort.close}
        />
      );
    case "trial-ask-early":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.askEarly.lead}
          close={`Ask: “${CLINICAL_TRIAL_ENTRY_CARDS.askEarly.ask}”`}
        />
      );
    case "trial-not-subject":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.notTestSubject.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.notTestSubject.understand}
          close={CLINICAL_TRIAL_ENTRY_CARDS.notTestSubject.close}
        />
      );
    case "trial-qualify":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.notQualify.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.notQualify.mayInvolve}
          close={CLINICAL_TRIAL_ENTRY_CARDS.notQualify.close}
        />
      );
    case "trial-biomarkers":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{CLINICAL_TRIAL_ENTRY_CARDS.biomarkers.lead}</p>
          <p className="font-medium text-[var(--ink)]">
            Ask: “{CLINICAL_TRIAL_ENTRY_CARDS.biomarkers.ask}”
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
    case "trial-replace":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.replaceCurrent.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.replaceCurrent.depends}
        />
      );
    case "trial-better":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.notAutomaticallyBetter.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.notAutomaticallyBetter.mayOffer}
          close={CLINICAL_TRIAL_ENTRY_CARDS.notAutomaticallyBetter.close}
        />
      );
    case "trial-risks":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.risks.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.risks.items}
          close={CLINICAL_TRIAL_ENTRY_CARDS.risks.close}
        />
      );
    case "trial-daily-life":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.dailyLife.lead}
          close={`Ask: “${CLINICAL_TRIAL_ENTRY_CARDS.dailyLife.ask}”`}
        />
      );
    case "trial-if-not":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.ifNotWorking.lead}
          ask={CLINICAL_TRIAL_ENTRY_CARDS.ifNotWorking.ask}
          close={CLINICAL_TRIAL_ENTRY_CARDS.ifNotWorking.close}
        />
      );
    case "trial-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{CLINICAL_TRIAL_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {CLINICAL_TRIAL_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "trial-family":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.family.lead}
          close={CLINICAL_TRIAL_ENTRY_CARDS.family.close}
        />
      );
    case "prog-not-worse":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.notWorseOnly.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.notWorseOnly.reasons}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.notWorseOnly.close}
        />
      );
    case "prog-how-know":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.howKnow.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.howKnow.factors}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.howKnow.close}
        />
      );
    case "prog-can-change":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.canChange.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.canChange.review}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.canChange.close}
        />
      );
    case "prog-biopsy":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.biopsy.lead}
          close={`Ask: “${TREATMENT_PROGRESSION_ENTRY_CARDS.biopsy.ask}”`}
        />
      );
    case "prog-biomarkers":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{TREATMENT_PROGRESSION_ENTRY_CARDS.biomarkersAgain.lead}</p>
          <p className="font-medium text-[var(--ink)]">
            {TREATMENT_PROGRESSION_ENTRY_CARDS.biomarkersAgain.close}
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
    case "prog-prior":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.priorTreatment.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.priorTreatment.factors}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.priorTreatment.close}
        />
      );
    case "prog-options":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.nextOptions.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.nextOptions.options}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.nextOptions.close}
        />
      );
    case "prog-newest":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.newestNotBest.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.newestNotBest.consider}
          close={`Ask: “${TREATMENT_PROGRESSION_ENTRY_CARDS.newestNotBest.ask}”`}
        />
      );
    case "prog-goals":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.lessAggressive.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.lessAggressive.priorities}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.lessAggressive.close}
        />
      );
    case "prog-trial":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={TREATMENT_PROGRESSION_ENTRY_CARDS.trials.lead}
            items={TREATMENT_PROGRESSION_ENTRY_CARDS.trials.when}
            close={`Ask: “${TREATMENT_PROGRESSION_ENTRY_CARDS.trials.ask}”`}
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
    case "prog-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{TREATMENT_PROGRESSION_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {TREATMENT_PROGRESSION_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "prog-helping":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.isHelping.lead}
          ask={TREATMENT_PROGRESSION_ENTRY_CARDS.isHelping.ask}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.isHelping.close}
        />
      );
    case "rec-not-failed":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.notFailed.lead}
          close={RECURRENCE_ENTRY_CARDS.notFailed.close}
        />
      );
    case "rec-why":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.whyReturn.lead}
          items={RECURRENCE_ENTRY_CARDS.whyReturn.factors}
          close={RECURRENCE_ENTRY_CARDS.whyReturn.close}
        />
      );
    case "rec-harder":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.harder.lead}
          items={RECURRENCE_ENTRY_CARDS.harder.factors}
          close={RECURRENCE_ENTRY_CARDS.harder.close}
        />
      );
    case "rec-after-surgery":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.afterSurgery.lead}
          items={RECURRENCE_ENTRY_CARDS.afterSurgery.reassess}
        />
      );
    case "rec-biopsy":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.biopsy.lead}
          close={`Ask: “${RECURRENCE_ENTRY_CARDS.biopsy.ask}”`}
        />
      );
    case "rec-characteristics":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.characteristicsChange.lead}
          close={RECURRENCE_ENTRY_CARDS.characteristicsChange.close}
        />
      );
    case "rec-prior":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.priorTreatment.lead}
          items={RECURRENCE_ENTRY_CARDS.priorTreatment.factors}
          close={RECURRENCE_ENTRY_CARDS.priorTreatment.close}
        />
      );
    case "rec-treatable":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.stillTreatable.lead}
          items={RECURRENCE_ENTRY_CARDS.stillTreatable.goals}
          close={RECURRENCE_ENTRY_CARDS.stillTreatable.close}
        />
      );
    case "rec-trial":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={RECURRENCE_ENTRY_CARDS.trial.lead}
            ask={RECURRENCE_ENTRY_CARDS.trial.ask}
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
    case "rec-qol":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={RECURRENCE_ENTRY_CARDS.qol.lead}
            items={RECURRENCE_ENTRY_CARDS.qol.factors}
            close={RECURRENCE_ENTRY_CARDS.qol.close}
          />
          <p>
            <Link
              href="/questions/how-should-quality-of-life-factor-into-lung-cancer-decisions"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Quality of life decision guide →
            </Link>
          </p>
        </div>
      );
    case "rec-newest":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.newest.lead}
          items={RECURRENCE_ENTRY_CARDS.newest.factors}
          close={RECURRENCE_ENTRY_CARDS.newest.close}
        />
      );
    case "rec-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{RECURRENCE_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {RECURRENCE_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "rec-family":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.family.lead}
          items={RECURRENCE_ENTRY_CARDS.family.topics}
          close={RECURRENCE_ENTRY_CARDS.family.close}
        />
      );
    case "rec-supportive":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.supportive.lead}
          items={RECURRENCE_ENTRY_CARDS.supportive.focus}
          close={RECURRENCE_ENTRY_CARDS.supportive.close}
        />
      );
    case "qol-supportive-worse":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.supportiveWorse.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.supportiveWorse.helps}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.supportiveWorse.close}
        />
      );
    case "qol-tell-doctor":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.tellDoctor.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.tellDoctor.examples}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.tellDoctor.close}
        />
      );
    case "qol-affect-choice":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.affectChoice.lead}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.affectChoice.close}
        />
      );
    case "qol-which-symptoms":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.whichSymptoms.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.whichSymptoms.symptoms}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.whichSymptoms.close}
        />
      );
    case "qol-wait-appointment":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.waitAppointment.lead}
          close={`Ask: “${QUALITY_OF_LIFE_ENTRY_CARDS.waitAppointment.ask}” ${QUALITY_OF_LIFE_ENTRY_CARDS.waitAppointment.close}`}
        />
      );
    case "qol-adjust-treatment":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.adjustTreatment.lead}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.adjustTreatment.close}
        />
      );
    case "qol-burden-too-much":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.burdenTooMuch.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.burdenTooMuch.factors}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.burdenTooMuch.close}
        />
      );
    case "qol-plan-hard":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.planTooHard.lead}
          close={`Ask: “${QUALITY_OF_LIFE_ENTRY_CARDS.planTooHard.ask}” ${QUALITY_OF_LIFE_ENTRY_CARDS.planTooHard.close}`}
        />
      );
    case "qol-cost":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.costConversation.lead}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.costConversation.close}
        />
      );
    case "qol-more-better":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.moreBetter.lead}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.moreBetter.close}
        />
      );
    case "qol-goals-change":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.goalsChange.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.goalsChange.examples}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.goalsChange.close}
        />
      );
    case "qol-hospice":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.hospice.lead}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.hospice.close}
        />
      );
    case "qol-family":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.family.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.family.ways}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.family.close}
        />
      );
    case "qol-services":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.services.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.services.items}
        />
      );
    case "qol-who-helps":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.whoHelps.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.whoHelps.people}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.whoHelps.close}
        />
      );
    case "fu-cancer-gone":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.cancerGone.lead}
          items={FOLLOW_UP_ENTRY_CARDS.cancerGone.reasons}
          close={FOLLOW_UP_ENTRY_CARDS.cancerGone.close}
        />
      );
    case "fu-first-visit":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={FOLLOW_UP_ENTRY_CARDS.firstVisit.lead}
            items={FOLLOW_UP_ENTRY_CARDS.firstVisit.includes}
          />
          <BulletCard
            lead="Prepare by bringing:"
            items={FOLLOW_UP_ENTRY_CARDS.firstVisit.bring}
          />
        </div>
      );
    case "fu-who-manages":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.whoManages.lead}
          close={`Ask: “${FOLLOW_UP_ENTRY_CARDS.whoManages.ask}” ${FOLLOW_UP_ENTRY_CARDS.whoManages.close}`}
        />
      );
    case "fu-scan-frequency":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.scanFrequency.lead}
          close={`${FOLLOW_UP_ENTRY_CARDS.scanFrequency.close} Ask: “${FOLLOW_UP_ENTRY_CARDS.scanFrequency.ask}”`}
        />
      );
    case "fu-normal-scan":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.normalScan.lead}
          close={FOLLOW_UP_ENTRY_CARDS.normalScan.close}
        />
      );
    case "fu-more-scans":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.moreScans.lead}
          close={FOLLOW_UP_ENTRY_CARDS.moreScans.close}
        />
      );
    case "fu-which-symptoms":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.whichSymptoms.lead}
          items={FOLLOW_UP_ENTRY_CARDS.whichSymptoms.symptoms}
        />
      );
    case "fu-between-visits":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.betweenVisits.lead}
          ask={FOLLOW_UP_ENTRY_CARDS.betweenVisits.ask}
          close={FOLLOW_UP_ENTRY_CARDS.betweenVisits.close}
        />
      );
    case "fu-fear":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.fearRecurrence.lead}
          items={FOLLOW_UP_ENTRY_CARDS.fearRecurrence.steps}
          close={FOLLOW_UP_ENTRY_CARDS.fearRecurrence.close}
        />
      );
    case "fu-long-term":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.longTermEffects.lead}
          items={FOLLOW_UP_ENTRY_CARDS.longTermEffects.effects}
          close={FOLLOW_UP_ENTRY_CARDS.longTermEffects.close}
        />
      );
    case "fu-activities":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.returnActivities.lead}
          close={`Ask: “${FOLLOW_UP_ENTRY_CARDS.returnActivities.ask}”`}
        />
      );
    case "fu-lifestyle":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.lifestyle.lead}
          items={FOLLOW_UP_ENTRY_CARDS.lifestyle.changes}
          close={FOLLOW_UP_ENTRY_CARDS.lifestyle.close}
        />
      );
    case "fu-records":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.keepRecords.lead}
          items={FOLLOW_UP_ENTRY_CARDS.keepRecords.records}
          close={FOLLOW_UP_ENTRY_CARDS.keepRecords.close}
          itemSection="bring"
        />
      );
    case "fu-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={FOLLOW_UP_ENTRY_CARDS.secondOpinion.lead}
            items={FOLLOW_UP_ENTRY_CARDS.secondOpinion.when}
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
    case "nd-more-tests":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.moreTests.lead}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.moreTests.close}
        />
      );
    case "nd-not-immediate":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.notImmediate.lead}
          items={NEWLY_DIAGNOSED_ENTRY_CARDS.notImmediate.factors}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.notImmediate.close}
        />
      );
    case "nd-biomarker":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={NEWLY_DIAGNOSED_ENTRY_CARDS.biomarker.lead}
            close={`Ask: “${NEWLY_DIAGNOSED_ENTRY_CARDS.biomarker.ask}”`}
          />
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
    case "nd-waiting":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.waiting.lead}
          close={`Ask: “${NEWLY_DIAGNOSED_ENTRY_CARDS.waiting.ask}” ${NEWLY_DIAGNOSED_ENTRY_CARDS.waiting.close}`}
        />
      );
    case "nd-focus-first":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.focusFirst.lead}
          items={NEWLY_DIAGNOSED_ENTRY_CARDS.focusFirst.steps}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.focusFirst.close}
        />
      );
    case "nd-not-expert":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.notExpert.lead}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.notExpert.close}
        />
      );
    case "nd-this-week":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.thisWeek.lead}
          items={NEWLY_DIAGNOSED_ENTRY_CARDS.thisWeek.steps}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "nd-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={NEWLY_DIAGNOSED_ENTRY_CARDS.secondOpinion.lead}
            close={NEWLY_DIAGNOSED_ENTRY_CARDS.secondOpinion.close}
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
    case "nd-records":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.records.lead}
          items={NEWLY_DIAGNOSED_ENTRY_CARDS.records.items}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.records.close}
          itemSection="bring"
        />
      );
    case "nd-overwhelmed":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.overwhelmed.lead}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.overwhelmed.close}
        />
      );
    case "siv-active-treatment":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.activeTreatment.lead}
          items={STAGE_IV_ENTRY_CARDS.activeTreatment.items}
          close={STAGE_IV_ENTRY_CARDS.activeTreatment.close}
        />
      );
    case "siv-different-plans":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.differentPlans.lead}
          items={STAGE_IV_ENTRY_CARDS.differentPlans.items}
          close={STAGE_IV_ENTRY_CARDS.differentPlans.close}
        />
      );
    case "siv-goals-not-giving-up":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.goalsNotGivingUp.lead}
          close={STAGE_IV_ENTRY_CARDS.goalsNotGivingUp.close}
        />
      );
    case "siv-strongest":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.strongest.lead}
          items={STAGE_IV_ENTRY_CARDS.strongest.items}
          close={STAGE_IV_ENTRY_CARDS.strongest.close}
        />
      );
    case "siv-biomarker":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={STAGE_IV_ENTRY_CARDS.biomarker.lead}
            close={`Ask: “${STAGE_IV_ENTRY_CARDS.biomarker.ask}”`}
          />
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
    case "siv-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={STAGE_IV_ENTRY_CARDS.secondOpinion.lead}
            items={STAGE_IV_ENTRY_CARDS.secondOpinion.when}
            close={STAGE_IV_ENTRY_CARDS.secondOpinion.close}
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
    case "siv-clinical-trial":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={STAGE_IV_ENTRY_CARDS.clinicalTrial.lead}
            close={STAGE_IV_ENTRY_CARDS.clinicalTrial.close}
          />
          <p>
            <Link
              href="/questions/should-i-consider-a-clinical-trial-for-lung-cancer"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Clinical trial decision →
            </Link>
          </p>
        </div>
      );
    case "siv-first":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.first.lead}
          items={STAGE_IV_ENTRY_CARDS.first.steps}
          close={STAGE_IV_ENTRY_CARDS.first.close}
        />
      );
    case "siv-statistics":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.statistics.lead}
          close={`Ask: “${STAGE_IV_ENTRY_CARDS.statistics.ask}” ${STAGE_IV_ENTRY_CARDS.statistics.close}`}
        />
      );
    case "siv-family":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.family.lead}
          items={STAGE_IV_ENTRY_CARDS.family.items}
          close={STAGE_IV_ENTRY_CARDS.family.close}
        />
      );
    case "siv-worth-it":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.worthIt.lead}
          close={STAGE_IV_ENTRY_CARDS.worthIt.close}
        />
      );
    case "siv-have-say":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.haveSay.lead}
          close={STAGE_IV_ENTRY_CARDS.haveSay.close}
        />
      );
    case "cc-everyone":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.everyone.lead}
          items={CARE_CENTER_ENTRY_CARDS.everyone.items}
          close={CARE_CENTER_ENTRY_CARDS.everyone.close}
        />
      );
    case "cc-vs-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={CARE_CENTER_ENTRY_CARDS.vsSecondOpinion.lead}
            close={CARE_CENTER_ENTRY_CARDS.vsSecondOpinion.close}
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
    case "cc-hybrid":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.hybrid.lead}
          items={CARE_CENTER_ENTRY_CARDS.hybrid.items}
          close={CARE_CENTER_ENTRY_CARDS.hybrid.close}
        />
      );
    case "cc-tumor-board":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.tumorBoard.lead}
          close={CARE_CENTER_ENTRY_CARDS.tumorBoard.close}
        />
      );
    case "cc-travel":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.travel.lead}
          close={CARE_CENTER_ENTRY_CARDS.travel.close}
        />
      );
    case "cc-nci":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.nci.lead}
          close={CARE_CENTER_ENTRY_CARDS.nci.close}
        />
      );
    case "cc-famous":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.famous.lead}
          close={CARE_CENTER_ENTRY_CARDS.famous.close}
        />
      );
    case "cc-remote-review":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.remoteReview.lead}
          close={CARE_CENTER_ENTRY_CARDS.remoteReview.close}
        />
      );
    case "cc-afford":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.afford.lead}
          close={CARE_CENTER_ENTRY_CARDS.afford.close}
        />
      );
    case "cc-records":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.records.lead}
          items={CARE_CENTER_ENTRY_CARDS.records.items}
          close={CARE_CENTER_ENTRY_CARDS.records.close}
          itemSection="bring"
        />
      );
    case "cc-coordination":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.coordination.lead}
          items={CARE_CENTER_ENTRY_CARDS.coordination.items}
          close={CARE_CENTER_ENTRY_CARDS.coordination.close}
        />
      );
    case "cc-insurance":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.insurance.lead}
          close={`Ask: “${CARE_CENTER_ENTRY_CARDS.insurance.ask}” ${CARE_CENTER_ENTRY_CARDS.insurance.close}`}
        />
      );
    case "cc-multisite":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.multiSite.lead}
          items={CARE_CENTER_ENTRY_CARDS.multiSite.items}
          close={CARE_CENTER_ENTRY_CARDS.multiSite.close}
        />
      );
    case "bm-comprehensive":
      return (
        <BulletCard
          lead={BIOMARKER_ENTRY_CARDS.comprehensive.lead}
          items={BIOMARKER_ENTRY_CARDS.comprehensive.items}
          ask={BIOMARKER_ENTRY_CARDS.comprehensive.ask}
        />
      );
    case "bm-ask-tested":
      return (
        <BulletCard
          lead={BIOMARKER_ENTRY_CARDS.askTested.lead}
          ask={BIOMARKER_ENTRY_CARDS.askTested.ask}
          close={BIOMARKER_ENTRY_CARDS.askTested.close}
        />
      );
    case "so-why-important":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.whyImportant.lead}
          items={SECOND_OPINION_ENTRY_CARDS.whyImportant.items}
          close={SECOND_OPINION_ENTRY_CARDS.whyImportant.close}
        />
      );
    case "tx-chemo-vs-immuno":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.chemoVsImmuno.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.chemoVsImmuno.items}
          ask={TREATMENT_OPTIONS_ENTRY_CARDS.chemoVsImmuno.ask}
        />
      );
    case "tx-targeted-vs-immuno":
      return (
        <BulletCard
          lead={TREATMENT_OPTIONS_ENTRY_CARDS.targetedVsImmuno.lead}
          items={TREATMENT_OPTIONS_ENTRY_CARDS.targetedVsImmuno.items}
          ask={TREATMENT_OPTIONS_ENTRY_CARDS.targetedVsImmuno.ask}
          close={TREATMENT_OPTIONS_ENTRY_CARDS.targetedVsImmuno.close}
        />
      );
    case "surgery-sbrt":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.sbrt.lead}
          items={SURGERY_ENTRY_CARDS.sbrt.items}
          ask={SURGERY_ENTRY_CARDS.sbrt.ask}
        />
      );
    case "surgery-ask-surgeon":
      return (
        <BulletCard
          lead={SURGERY_ENTRY_CARDS.askSurgeon.lead}
          ask={SURGERY_ENTRY_CARDS.askSurgeon.ask}
        />
      );
    case "trial-near-me":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.nearMe.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.nearMe.items}
          ask={CLINICAL_TRIAL_ENTRY_CARDS.nearMe.ask}
          close={CLINICAL_TRIAL_ENTRY_CARDS.nearMe.close}
        />
      );
    case "trial-stage4":
      return (
        <BulletCard
          lead={CLINICAL_TRIAL_ENTRY_CARDS.stage4.lead}
          items={CLINICAL_TRIAL_ENTRY_CARDS.stage4.items}
          close={`Ask: “${CLINICAL_TRIAL_ENTRY_CARDS.stage4.ask}”`}
        />
      );
    case "prog-targeted-stops":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.targetedStops.lead}
          items={TREATMENT_PROGRESSION_ENTRY_CARDS.targetedStops.items}
          close={`Ask: “${TREATMENT_PROGRESSION_ENTRY_CARDS.targetedStops.ask}”`}
        />
      );
    case "prog-no-more-chemo":
      return (
        <BulletCard
          lead={TREATMENT_PROGRESSION_ENTRY_CARDS.noMoreChemo.lead}
          ask={TREATMENT_PROGRESSION_ENTRY_CARDS.noMoreChemo.ask}
          close={TREATMENT_PROGRESSION_ENTRY_CARDS.noMoreChemo.close}
        />
      );
    case "rec-after-lobectomy":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.afterLobectomy.lead}
          items={RECURRENCE_ENTRY_CARDS.afterLobectomy.items}
          close={`Ask: “${RECURRENCE_ENTRY_CARDS.afterLobectomy.ask}”`}
        />
      );
    case "rec-after-immuno":
      return (
        <BulletCard
          lead={RECURRENCE_ENTRY_CARDS.afterImmuno.lead}
          items={RECURRENCE_ENTRY_CARDS.afterImmuno.items}
          close={`Ask: “${RECURRENCE_ENTRY_CARDS.afterImmuno.ask}”`}
        />
      );
    case "qol-work":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.workDuring.lead}
          ask={QUALITY_OF_LIFE_ENTRY_CARDS.workDuring.ask}
          close={QUALITY_OF_LIFE_ENTRY_CARDS.workDuring.close}
        />
      );
    case "qol-palliative-home":
      return (
        <BulletCard
          lead={QUALITY_OF_LIFE_ENTRY_CARDS.palliativeHome.lead}
          items={QUALITY_OF_LIFE_ENTRY_CARDS.palliativeHome.items}
          close={`Ask: “${QUALITY_OF_LIFE_ENTRY_CARDS.palliativeHome.ask}” ${QUALITY_OF_LIFE_ENTRY_CARDS.palliativeHome.close}`}
        />
      );
    case "nd-start-right-away":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.startRightAway.lead}
          ask={NEWLY_DIAGNOSED_ENTRY_CARDS.startRightAway.ask}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.startRightAway.close}
        />
      );
    case "nd-ask-oncologist":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.askOncologist.lead}
          ask={NEWLY_DIAGNOSED_ENTRY_CARDS.askOncologist.ask}
          close={NEWLY_DIAGNOSED_ENTRY_CARDS.askOncologist.close}
        />
      );
    case "nd-ask-thoracic":
      return (
        <BulletCard
          lead={NEWLY_DIAGNOSED_ENTRY_CARDS.askThoracic.lead}
          ask={NEWLY_DIAGNOSED_ENTRY_CARDS.askThoracic.ask}
        />
      );
    case "siv-ask":
      return (
        <BulletCard
          lead={STAGE_IV_ENTRY_CARDS.askList.lead}
          ask={STAGE_IV_ENTRY_CARDS.askList.ask}
          close={STAGE_IV_ENTRY_CARDS.askList.close}
        />
      );
    case "cc-who-treats":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.whoTreats.lead}
          items={CARE_CENTER_ENTRY_CARDS.whoTreats.items}
          close={`Ask: “${CARE_CENTER_ENTRY_CARDS.whoTreats.ask}” ${CARE_CENTER_ENTRY_CARDS.whoTreats.close}`}
        />
      );
    case "cc-thoracic-onc":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.thoracicOnc.lead}
          ask={CARE_CENTER_ENTRY_CARDS.thoracicOnc.ask}
          close={CARE_CENTER_ENTRY_CARDS.thoracicOnc.close}
        />
      );
    case "fe-belongs":
      return (
        <BulletCard
          lead={FEASIBILITY_ENTRY_CARDS.belongs.lead}
          close={FEASIBILITY_ENTRY_CARDS.belongs.close}
        />
      );
    case "fe-not-prices":
      return (
        <BulletCard
          lead={FEASIBILITY_ENTRY_CARDS.notPrices.lead}
          close={FEASIBILITY_ENTRY_CARDS.notPrices.close}
        />
      );
    case "fe-cost-ask":
      return (
        <BulletCard
          lead={FEASIBILITY_ENTRY_CARDS.costAsk.lead}
          ask={FEASIBILITY_ENTRY_CARDS.costAsk.ask}
          close={FEASIBILITY_ENTRY_CARDS.costAsk.close}
        />
      );
    case "fu-plan-include":
      return (
        <BulletCard
          lead={FOLLOW_UP_ENTRY_CARDS.planInclude.lead}
          items={FOLLOW_UP_ENTRY_CARDS.planInclude.items}
          close={`Ask: “${FOLLOW_UP_ENTRY_CARDS.planInclude.ask}”`}
        />
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
        return (
          <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
            {modules.secondOpinionLead ? (
              <p>{modules.secondOpinionLead}</p>
            ) : null}
            {modules.secondOpinionWhen?.length ? (
              <ul className="space-y-1.5">
                {modules.secondOpinionWhen.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[var(--ink)]">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {modules.secondOpinionClose ? (
              <p className="font-medium text-[var(--ink)]">
                {modules.secondOpinionClose}
              </p>
            ) : null}
            {modules.secondOpinionHref && modules.secondOpinionCtaLabel ? (
              <p>
                <Link
                  href={modules.secondOpinionHref}
                  className="font-semibold text-[var(--accent)] hover:underline"
                >
                  {modules.secondOpinionCtaLabel} →
                </Link>
              </p>
            ) : null}
          </div>
        );
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
    case "bm-what-means":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.whatMeans.lead}
          close={BRAIN_METS_ENTRY_CARDS.whatMeans.close}
        />
      );
    case "bm-still-options":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.stillOptions.lead}
          close={BRAIN_METS_ENTRY_CARDS.stillOptions.close}
        />
      );
    case "bm-scan-vs-symptoms":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.scanVsSymptoms.lead}
          items={BRAIN_METS_ENTRY_CARDS.scanVsSymptoms.items}
          close={BRAIN_METS_ENTRY_CARDS.scanVsSymptoms.close}
        />
      );
    case "bm-urgent":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.urgent.lead}
          items={BRAIN_METS_ENTRY_CARDS.urgent.items}
          close={BRAIN_METS_ENTRY_CARDS.urgent.close}
        />
      );
    case "bm-what-matters":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.whatMatters.lead}
          items={BRAIN_METS_ENTRY_CARDS.whatMatters.items}
          close={BRAIN_METS_ENTRY_CARDS.whatMatters.close}
        />
      );
    case "bm-number-location":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.numberLocation.lead}
          close={BRAIN_METS_ENTRY_CARDS.numberLocation.close}
        />
      );
    case "bm-body-disease":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.bodyDisease.lead}
          close={BRAIN_METS_ENTRY_CARDS.bodyDisease.close}
        />
      );
    case "bm-biomarkers":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.biomarkers.lead}
          ask={BRAIN_METS_ENTRY_CARDS.biomarkers.ask}
        />
      );
    case "bm-who-involved":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.whoInvolved.lead}
          items={BRAIN_METS_ENTRY_CARDS.whoInvolved.items}
          close={BRAIN_METS_ENTRY_CARDS.whoInvolved.close}
        />
      );
    case "bm-local-options":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.localOptions.lead}
          close={BRAIN_METS_ENTRY_CARDS.localOptions.close}
        />
      );
    case "bm-systemic-options":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.systemicOptions.lead}
          close={BRAIN_METS_ENTRY_CARDS.systemicOptions.close}
        />
      );
    case "bm-how-compare":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.howCompare.lead}
          items={BRAIN_METS_ENTRY_CARDS.howCompare.items}
          close={BRAIN_METS_ENTRY_CARDS.howCompare.close}
        />
      );
    case "bm-daily-life":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BRAIN_METS_ENTRY_CARDS.dailyLife.lead}
            items={BRAIN_METS_ENTRY_CARDS.dailyLife.items}
            close={BRAIN_METS_ENTRY_CARDS.dailyLife.close}
          />
          <p>
            <Link
              href="/questions/how-should-quality-of-life-factor-into-lung-cancer-decisions"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Quality of life decision guide →
            </Link>
          </p>
        </div>
      );
    case "bm-trial":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BRAIN_METS_ENTRY_CARDS.trial.lead}
            ask={BRAIN_METS_ENTRY_CARDS.trial.ask}
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
    case "bm-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BRAIN_METS_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BRAIN_METS_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bm-family":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.family.lead}
          items={BRAIN_METS_ENTRY_CARDS.family.topics}
          close={BRAIN_METS_ENTRY_CARDS.family.close}
        />
      );
    case "bm-records":
      return (
        <BulletCard
          lead={BRAIN_METS_ENTRY_CARDS.records.lead}
          items={BRAIN_METS_ENTRY_CARDS.records.items}
          close={BRAIN_METS_ENTRY_CARDS.records.close}
          itemSection="bring"
        />
      );
    case "scenario":
      return <IllustrativeScenario modules={modules} />;
    case "value":
      return <ValueSituations modules={modules} />;
    case "doctor":
      return <DoctorQuestionGroups modules={modules} />;
    default:
      return (
        <p className="text-sm text-[var(--muted)]">
          This question card is not available yet. Use the Decision Path steps
          on the left (or above on mobile) to continue.
        </p>
      );
  }
}
