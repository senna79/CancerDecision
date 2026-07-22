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
import { BREAST_CARE_TEAM_ENTRY_CARDS } from "@/lib/content/breast-care-team-entry-cards";
import { BREAST_GENETICS_ENTRY_CARDS } from "@/lib/content/breast-genetics-entry-cards";
import { BREAST_METASTATIC_ENTRY_CARDS } from "@/lib/content/breast-metastatic-entry-cards";
import { BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS } from "@/lib/content/breast-newly-diagnosed-entry-cards";
import { BREAST_CLINICAL_TRIAL_ENTRY_CARDS } from "@/lib/content/breast-clinical-trial-entry-cards";
import { BREAST_FOLLOW_UP_ENTRY_CARDS } from "@/lib/content/breast-follow-up-entry-cards";
import { BREAST_GLOBAL_CARE_ENTRY_CARDS } from "@/lib/content/breast-global-care-entry-cards";
import { BREAST_PRACTICAL_FIT_ENTRY_CARDS } from "@/lib/content/breast-practical-fit-entry-cards";
import { BREAST_QOL_ENTRY_CARDS } from "@/lib/content/breast-qol-entry-cards";
import { BREAST_RECURRENCE_ENTRY_CARDS } from "@/lib/content/breast-recurrence-entry-cards";
import { BREAST_RADIATION_ENTRY_CARDS } from "@/lib/content/breast-radiation-entry-cards";
import { BREAST_RECONSTRUCTION_ENTRY_CARDS } from "@/lib/content/breast-reconstruction-entry-cards";
import { BREAST_SECOND_OPINION_ENTRY_CARDS } from "@/lib/content/breast-second-opinion-entry-cards";
import { BREAST_SEQUENCING_ENTRY_CARDS } from "@/lib/content/breast-sequencing-entry-cards";
import { BREAST_SUBTYPE_ENTRY_CARDS } from "@/lib/content/breast-subtype-entry-cards";
import { BREAST_SURGERY_ENTRY_CARDS } from "@/lib/content/breast-surgery-entry-cards";
import { BREAST_SYSTEMIC_ENTRY_CARDS } from "@/lib/content/breast-systemic-entry-cards";
import { NEWLY_DIAGNOSED_ENTRY_CARDS } from "@/lib/content/newly-diagnosed-entry-cards";
import {
  BREAST_CARE_TEAM_SLUG,
  BREAST_GENETICS_SLUG,
  BREAST_METASTATIC_SLUG,
  BREAST_RADIATION_SLUG,
  BREAST_RECONSTRUCTION_SLUG,
  BREAST_RECURRENCE_SLUG,
  BREAST_SECOND_OPINION_SLUG,
  BREAST_SEQUENCING_SLUG,
  BREAST_SUBTYPE_SLUG,
  BREAST_SURGERY_SLUG,
  BREAST_TREATMENT_COMPARE_SLUG,
} from "@/lib/content/breast-entry-slugs";
import { STAGE_IV_ENTRY_CARDS } from "@/lib/content/stage-iv-entry-cards";
import { CARE_CENTER_ENTRY_CARDS } from "@/lib/content/care-center-entry-cards";
import {
  CARE_CONVERSION_CTA_LABEL,
  CARE_CONVERSION_PATH,
  CARE_OPTIONS_ANCHOR,
  CARE_OPTIONS_SOFT_CTA_LABEL,
  CARE_TRANSPARENCY_CTA_LABEL,
  CARE_TRANSPARENCY_PATH,
} from "@/lib/care-navigation/conversion";
import { GLOBAL_CARE_ENTRY_CARDS } from "@/lib/content/global-care-entry-cards";
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
  const cancerSlug = prepSource.cancerSlug;

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
                cancerSlug={cancerSlug}
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
                cancerSlug={cancerSlug}
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
  const cancerSlug =
    modules.cancerLabel === "Breast Cancer"
      ? "breast-cancer"
      : modules.cancerLabel === "Lung Cancer"
        ? "lung-cancer"
        : undefined;

  return (
    <PrepSourceProvider
      label={modules.decisionMoment}
      href={`/questions/${slug}`}
      cancerSlug={cancerSlug}
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
    case "so-vs-travel":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={SECOND_OPINION_ENTRY_CARDS.vsTravel.lead}
            items={SECOND_OPINION_ENTRY_CARDS.vsTravel.items}
            close={SECOND_OPINION_ENTRY_CARDS.vsTravel.close}
          />
          <p>
            <Link
              href="/questions/when-to-consider-lung-cancer-care-abroad"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Care abroad decision guide →
            </Link>
          </p>
        </div>
      );
    case "so-after-two-hospitals":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.afterTwoHospitals.lead}
          items={SECOND_OPINION_ENTRY_CARDS.afterTwoHospitals.items}
          close={SECOND_OPINION_ENTRY_CARDS.afterTwoHospitals.close}
        />
      );
    case "so-records-package":
      return (
        <BulletCard
          lead={SECOND_OPINION_ENTRY_CARDS.recordsPackage.lead}
          items={SECOND_OPINION_ENTRY_CARDS.recordsPackage.items}
          close={SECOND_OPINION_ENTRY_CARDS.recordsPackage.close}
          itemSection="bring"
        />
      );
    case "so-disagree-plan":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={SECOND_OPINION_ENTRY_CARDS.disagreePlan.lead}
            items={SECOND_OPINION_ENTRY_CARDS.disagreePlan.items}
            close={SECOND_OPINION_ENTRY_CARDS.disagreePlan.close}
          />
          <p>
            <Link
              href={CARE_OPTIONS_ANCHOR}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {CARE_OPTIONS_SOFT_CTA_LABEL} →
            </Link>
          </p>
        </div>
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
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{TREATMENT_OPTIONS_ENTRY_CARDS.cantManage.lead}</p>
          <p className="font-medium text-[var(--ink)]">
            {TREATMENT_OPTIONS_ENTRY_CARDS.cantManage.close}
          </p>
          <p>
            <Link
              href={TREATMENT_OPTIONS_ENTRY_CARDS.cantManage.nextHref}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {TREATMENT_OPTIONS_ENTRY_CARDS.cantManage.nextLabel}
            </Link>
          </p>
        </div>
      );
    case "cc-capabilities":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.capabilities.lead}
          items={CARE_CENTER_ENTRY_CARDS.capabilities.items}
          close={CARE_CENTER_ENTRY_CARDS.capabilities.close}
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
    case "bnd-more-tests":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.moreTests.lead}
          ask={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.moreTests.ask}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.moreTests.close}
        />
      );
    case "bnd-not-immediate":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.notImmediate.lead}
          items={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.notImmediate.factors}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.notImmediate.close}
        />
      );
    case "bnd-diagnosis-to-surgery":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.diagnosisToSurgery.lead}
          ask={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.diagnosisToSurgery.ask}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.diagnosisToSurgery.close}
        />
      );
    case "bnd-stage-timeline":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.stageTimeline.lead}
          ask={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.stageTimeline.ask}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.stageTimeline.close}
        />
      );
    case "bnd-subtype":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.subtype.lead}
            close={`Ask: “${BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.subtype.ask}”`}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SUBTYPE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Subtype testing decision guide →
            </Link>
          </p>
        </div>
      );
    case "bnd-waiting":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.waiting.lead}
          ask={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.waiting.ask}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.waiting.close}
        />
      );
    case "bnd-start-right-away":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.startRightAway.lead}
          ask={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.startRightAway.ask}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.startRightAway.close}
        />
      );
    case "bnd-genetics":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.geneticsCard.lead}
            ask={[BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.geneticsCard.ask]}
            close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.geneticsCard.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_GENETICS_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Genetic counseling before surgery guide →
            </Link>
          </p>
        </div>
      );
    case "bnd-focus-first":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.focusFirst.lead}
          items={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.focusFirst.steps}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.focusFirst.close}
        />
      );
    case "bnd-not-expert":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.notExpert.lead}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.notExpert.close}
        />
      );
    case "bnd-this-week":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bnd-ask-oncologist":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.askOncologist.lead}
          ask={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.askOncologist.ask}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.askOncologist.close}
        />
      );
    case "bnd-ask-surgeon":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.askSurgeon.lead}
          ask={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.askSurgeon.ask}
        />
      );
    case "bnd-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.secondOpinion.lead}
            close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.secondOpinion.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SECOND_OPINION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Breast second opinion guide →
            </Link>
          </p>
        </div>
      );
    case "bnd-records":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.records.lead}
          items={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.records.items}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.records.close}
          itemSection="bring"
        />
      );
    case "bnd-overwhelmed":
      return (
        <BulletCard
          lead={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.overwhelmed.lead}
          close={BREAST_NEWLY_DIAGNOSED_ENTRY_CARDS.overwhelmed.close}
        />
      );
    case "bst-what-is":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.whatIs.lead}
          close={BREAST_SUBTYPE_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bst-look-for":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.lookFor.lead}
          items={BREAST_SUBTYPE_ENTRY_CARDS.lookFor.items}
          close={BREAST_SUBTYPE_ENTRY_CARDS.lookFor.close}
        />
      );
    case "bst-pr":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.prPositive.lead}
          ask={BREAST_SUBTYPE_ENTRY_CARDS.prPositive.ask}
          close={BREAST_SUBTYPE_ENTRY_CARDS.prPositive.close}
        />
      );
    case "bst-everyone":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.everyone.lead}
          close={`Ask: “${BREAST_SUBTYPE_ENTRY_CARDS.everyone.ask}”`}
        />
      );
    case "bst-vs-genetics":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SUBTYPE_ENTRY_CARDS.vsGenetics.lead}
            close={BREAST_SUBTYPE_ENTRY_CARDS.vsGenetics.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_GENETICS_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Genetic counseling before surgery guide →
            </Link>
          </p>
        </div>
      );
    case "bst-biopsy-not-enough":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.biopsyNotEnough.lead}
          ask={BREAST_SUBTYPE_ENTRY_CARDS.biopsyNotEnough.ask}
          close={BREAST_SUBTYPE_ENTRY_CARDS.biopsyNotEnough.close}
        />
      );
    case "bst-subtype-means":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SUBTYPE_ENTRY_CARDS.subtypeMeans.lead}
            items={BREAST_SUBTYPE_ENTRY_CARDS.subtypeMeans.items}
            close={BREAST_SUBTYPE_ENTRY_CARDS.subtypeMeans.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_TREATMENT_COMPARE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Systemic options by subtype →
            </Link>
          </p>
        </div>
      );
    case "bst-change-options":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SUBTYPE_ENTRY_CARDS.changeOptions.lead}
            items={BREAST_SUBTYPE_ENTRY_CARDS.changeOptions.items}
            close={BREAST_SUBTYPE_ENTRY_CARDS.changeOptions.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SEQUENCING_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Treatment sequencing guide →
            </Link>
          </p>
        </div>
      );
    case "bst-genomic":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.genomic.lead}
          ask={BREAST_SUBTYPE_ENTRY_CARDS.genomic.ask}
          close={BREAST_SUBTYPE_ENTRY_CARDS.genomic.close}
        />
      );
    case "bst-incomplete":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.incomplete.lead}
          items={BREAST_SUBTYPE_ENTRY_CARDS.incomplete.items}
          close={BREAST_SUBTYPE_ENTRY_CARDS.incomplete.close}
        />
      );
    case "bst-how-done":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.howDone.lead}
          items={BREAST_SUBTYPE_ENTRY_CARDS.howDone.items}
          close={BREAST_SUBTYPE_ENTRY_CARDS.howDone.close}
        />
      );
    case "bst-waiting":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.waiting.lead}
          ask={BREAST_SUBTYPE_ENTRY_CARDS.waiting.ask}
          close={BREAST_SUBTYPE_ENTRY_CARDS.waiting.close}
        />
      );
    case "bst-cost":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.cost.lead}
          ask={BREAST_SUBTYPE_ENTRY_CARDS.cost.ask}
        />
      );
    case "bst-this-week":
      return (
        <BulletCard
          lead={BREAST_SUBTYPE_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_SUBTYPE_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_SUBTYPE_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bst-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_SUBTYPE_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_SUBTYPE_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bseq-what-is":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.whatIs.lead}
          close={BREAST_SEQUENCING_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bseq-why-matters":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.whyMatters.lead}
          items={BREAST_SEQUENCING_ENTRY_CARDS.whyMatters.items}
          close={BREAST_SEQUENCING_ENTRY_CARDS.whyMatters.close}
        />
      );
    case "bseq-not-stronger":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.notStronger.lead}
          close={BREAST_SEQUENCING_ENTRY_CARDS.notStronger.close}
        />
      );
    case "bseq-subtype-first":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SEQUENCING_ENTRY_CARDS.subtypeFirst.lead}
            close={BREAST_SEQUENCING_ENTRY_CARDS.subtypeFirst.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SUBTYPE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Subtype testing guide →
            </Link>
          </p>
        </div>
      );
    case "bseq-before":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.beforeSurgery.lead}
          items={BREAST_SEQUENCING_ENTRY_CARDS.beforeSurgery.items}
          close={BREAST_SEQUENCING_ENTRY_CARDS.beforeSurgery.close}
        />
      );
    case "bseq-normal-before":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.normalBefore.lead}
          items={BREAST_SEQUENCING_ENTRY_CARDS.normalBefore.items}
          close={BREAST_SEQUENCING_ENTRY_CARDS.normalBefore.close}
        />
      );
    case "bseq-after":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.afterSurgery.lead}
          items={BREAST_SEQUENCING_ENTRY_CARDS.afterSurgery.items}
          close={BREAST_SEQUENCING_ENTRY_CARDS.afterSurgery.close}
        />
      );
    case "bseq-nodes-clear":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.nodesClear.lead}
          ask={BREAST_SEQUENCING_ENTRY_CARDS.nodesClear.ask}
          close={BREAST_SEQUENCING_ENTRY_CARDS.nodesClear.close}
        />
      );
    case "bseq-gap-after-surgery":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.gapAfterSurgery.lead}
          ask={BREAST_SEQUENCING_ENTRY_CARDS.gapAfterSurgery.ask}
          close={BREAST_SEQUENCING_ENTRY_CARDS.gapAfterSurgery.close}
        />
      );
    case "bseq-chemo-or-radiation":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.chemoOrRadiation.lead}
          ask={BREAST_SEQUENCING_ENTRY_CARDS.chemoOrRadiation.ask}
          close={BREAST_SEQUENCING_ENTRY_CARDS.chemoOrRadiation.close}
        />
      );
    case "bseq-what-changes":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.whatChanges.lead}
          items={BREAST_SEQUENCING_ENTRY_CARDS.whatChanges.items}
          close={BREAST_SEQUENCING_ENTRY_CARDS.whatChanges.close}
        />
      );
    case "bseq-response":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.response.lead}
          ask={BREAST_SEQUENCING_ENTRY_CARDS.response.ask}
          close={BREAST_SEQUENCING_ENTRY_CARDS.response.close}
        />
      );
    case "bseq-surgery-link":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SEQUENCING_ENTRY_CARDS.surgeryLink.lead}
            close={BREAST_SEQUENCING_ENTRY_CARDS.surgeryLink.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SURGERY_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Lumpectomy vs mastectomy guide →
            </Link>
          </p>
        </div>
      );
    case "bseq-timeline":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.timeline.lead}
          ask={BREAST_SEQUENCING_ENTRY_CARDS.timeline.ask}
        />
      );
    case "bseq-pending-info":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.pendingInfo.lead}
          items={BREAST_SEQUENCING_ENTRY_CARDS.pendingInfo.items}
          close={BREAST_SEQUENCING_ENTRY_CARDS.pendingInfo.close}
        />
      );
    case "bseq-life-fit":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.lifeFit.lead}
          ask={BREAST_SEQUENCING_ENTRY_CARDS.lifeFit.ask}
        />
      );
    case "bseq-this-week":
      return (
        <BulletCard
          lead={BREAST_SEQUENCING_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_SEQUENCING_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_SEQUENCING_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bseq-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_SEQUENCING_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_SEQUENCING_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bsur-what-is":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.whatIs.lead}
          close={BREAST_SURGERY_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bsur-similar-control":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.similarControl.lead}
          close={BREAST_SURGERY_ENTRY_CARDS.similarControl.close}
        />
      );
    case "bsur-not-only-cancer":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.notOnlyCancer.lead}
          close={BREAST_SURGERY_ENTRY_CARDS.notOnlyCancer.close}
        />
      );
    case "bsur-sequencing":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SURGERY_ENTRY_CARDS.sequencing.lead}
            close={BREAST_SURGERY_ENTRY_CARDS.sequencing.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SEQUENCING_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Treatment sequencing guide →
            </Link>
          </p>
        </div>
      );
    case "bsur-pros-cons":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.prosCons.lead}
          items={BREAST_SURGERY_ENTRY_CARDS.prosCons.items}
          close={BREAST_SURGERY_ENTRY_CARDS.prosCons.close}
        />
      );
    case "bsur-lumpectomy":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.lumpectomy.lead}
          items={BREAST_SURGERY_ENTRY_CARDS.lumpectomy.items}
          close={BREAST_SURGERY_ENTRY_CARDS.lumpectomy.close}
        />
      );
    case "bsur-mastectomy":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.mastectomy.lead}
          items={BREAST_SURGERY_ENTRY_CARDS.mastectomy.items}
          close={BREAST_SURGERY_ENTRY_CARDS.mastectomy.close}
        />
      );
    case "bsur-genetics":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SURGERY_ENTRY_CARDS.genetics.lead}
            ask={BREAST_SURGERY_ENTRY_CARDS.genetics.ask}
            close={BREAST_SURGERY_ENTRY_CARDS.genetics.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_GENETICS_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Genetic counseling before surgery guide →
            </Link>
          </p>
        </div>
      );
    case "bsur-subtype":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SURGERY_ENTRY_CARDS.subtype.lead}
            ask={BREAST_SURGERY_ENTRY_CARDS.subtype.ask}
            close={BREAST_SURGERY_ENTRY_CARDS.subtype.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SUBTYPE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Subtype testing guide →
            </Link>
          </p>
        </div>
      );
    case "bsur-reconstruction":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SURGERY_ENTRY_CARDS.reconstruction.lead}
            ask={BREAST_SURGERY_ENTRY_CARDS.reconstruction.ask}
            close={BREAST_SURGERY_ENTRY_CARDS.reconstruction.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_RECONSTRUCTION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Reconstruction timing guide →
            </Link>
          </p>
        </div>
      );
    case "bsur-recurrence":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.recurrence.lead}
          ask={BREAST_SURGERY_ENTRY_CARDS.recurrence.ask}
          close={BREAST_SURGERY_ENTRY_CARDS.recurrence.close}
        />
      );
    case "bsur-bilateral":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.bilateral.lead}
          close={BREAST_SURGERY_ENTRY_CARDS.bilateral.close}
        />
      );
    case "bsur-recovery":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.recovery.lead}
          ask={BREAST_SURGERY_ENTRY_CARDS.recovery.ask}
          close={BREAST_SURGERY_ENTRY_CARDS.recovery.close}
        />
      );
    case "bsur-double-recovery":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.doubleRecovery.lead}
          ask={BREAST_SURGERY_ENTRY_CARDS.doubleRecovery.ask}
          close={BREAST_SURGERY_ENTRY_CARDS.doubleRecovery.close}
        />
      );
    case "bsur-lymphedema":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.lymphedema.lead}
          ask={BREAST_SURGERY_ENTRY_CARDS.lymphedema.ask}
          close={BREAST_SURGERY_ENTRY_CARDS.lymphedema.close}
        />
      );
    case "bsur-radiation":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SURGERY_ENTRY_CARDS.radiation.lead}
            ask={BREAST_SURGERY_ENTRY_CARDS.radiation.ask}
            close={BREAST_SURGERY_ENTRY_CARDS.radiation.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_RADIATION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Radiation decision guide →
            </Link>
          </p>
        </div>
      );
    case "bsur-pending":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.pending.lead}
          items={BREAST_SURGERY_ENTRY_CARDS.pending.items}
          close={BREAST_SURGERY_ENTRY_CARDS.pending.close}
        />
      );
    case "bsur-this-week":
      return (
        <BulletCard
          lead={BREAST_SURGERY_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_SURGERY_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_SURGERY_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bsur-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_SURGERY_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_SURGERY_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bso-everyone":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.everyone.lead}
          items={BREAST_SECOND_OPINION_ENTRY_CARDS.everyone.items}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.everyone.close}
        />
      );
    case "bso-why-breast":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.whyBreast.lead}
          items={BREAST_SECOND_OPINION_ENTRY_CARDS.whyBreast.items}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.whyBreast.close}
        />
      );
    case "bso-delay":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.delay.lead}
          ask={BREAST_SECOND_OPINION_ENTRY_CARDS.delay.ask}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.delay.close}
        />
      );
    case "bso-disrespect":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.disrespectful.lead}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.disrespectful.close}
        />
      );
    case "bso-change":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.canChange.lead}
          items={BREAST_SECOND_OPINION_ENTRY_CARDS.canChange.items}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.canChange.close}
        />
      );
    case "bso-focus":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.focus.lead}
          items={BREAST_SECOND_OPINION_ENTRY_CARDS.focus.items}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.focus.close}
        />
      );
    case "bso-two-doctors":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SECOND_OPINION_ENTRY_CARDS.twoDoctors.lead}
            items={BREAST_SECOND_OPINION_ENTRY_CARDS.twoDoctors.items}
            close={BREAST_SECOND_OPINION_ENTRY_CARDS.twoDoctors.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_CARE_TEAM_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Care team / center guide →
            </Link>
          </p>
        </div>
      );
    case "bso-pathology":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.pathology.lead}
          ask={BREAST_SECOND_OPINION_ENTRY_CARDS.pathology.ask}
        />
      );
    case "bso-how-to-get":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.howToGet.lead}
          items={BREAST_SECOND_OPINION_ENTRY_CARDS.howToGet.steps}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.howToGet.close}
        />
      );
    case "bso-records":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.records.lead}
          items={BREAST_SECOND_OPINION_ENTRY_CARDS.records.items}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.records.close}
        />
      );
    case "bso-cost":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.cost.lead}
          ask={BREAST_SECOND_OPINION_ENTRY_CARDS.cost.ask}
        />
      );
    case "bso-this-week":
      return (
        <BulletCard
          lead={BREAST_SECOND_OPINION_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_SECOND_OPINION_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_SECOND_OPINION_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bso-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_SECOND_OPINION_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_SECOND_OPINION_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bsys-what-is":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.whatIs.lead}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bsys-subtype-forks":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SYSTEMIC_ENTRY_CARDS.subtypeForks.lead}
            items={BREAST_SYSTEMIC_ENTRY_CARDS.subtypeForks.items}
            close={BREAST_SYSTEMIC_ENTRY_CARDS.subtypeForks.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SUBTYPE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Subtype testing guide →
            </Link>
          </p>
        </div>
      );
    case "bsys-not-menu":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.notDrugMenu.lead}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.notDrugMenu.close}
        />
      );
    case "bsys-sequencing":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_SYSTEMIC_ENTRY_CARDS.sequencing.lead}
            close={BREAST_SYSTEMIC_ENTRY_CARDS.sequencing.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SEQUENCING_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Treatment sequencing guide →
            </Link>
          </p>
        </div>
      );
    case "bsys-hr":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.hrPositive.lead}
          items={BREAST_SYSTEMIC_ENTRY_CARDS.hrPositive.items}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.hrPositive.close}
        />
      );
    case "bsys-her2":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.her2Positive.lead}
          items={BREAST_SYSTEMIC_ENTRY_CARDS.her2Positive.items}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.her2Positive.close}
        />
      );
    case "bsys-tnbc":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.tnbc.lead}
          items={BREAST_SYSTEMIC_ENTRY_CARDS.tnbc.items}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.tnbc.close}
        />
      );
    case "bsys-when-chemo":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.whenChemo.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.whenChemo.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.whenChemo.close}
        />
      );
    case "bsys-stage1-chemo":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.stage1Chemo.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.stage1Chemo.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.stage1Chemo.close}
        />
      );
    case "bsys-cdk46":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.cdk46.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.cdk46.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.cdk46.close}
        />
      );
    case "bsys-tnbc-immuno":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.tnbcImmuno.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.tnbcImmuno.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.tnbcImmuno.close}
        />
      );
    case "bsys-er-good-or-bad":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.erGoodOrBad.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.erGoodOrBad.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.erGoodOrBad.close}
        />
      );
    case "bsys-ovarian":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.ovarian.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.ovarian.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.ovarian.close}
        />
      );
    case "bsys-skip-endocrine":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.skipEndocrine.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.skipEndocrine.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.skipEndocrine.close}
        />
      );
    case "bsys-endocrine-duration":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.endocrineDuration.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.endocrineDuration.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.endocrineDuration.close}
        />
      );
    case "bsys-tnbc-stage1":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.tnbcStage1.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.tnbcStage1.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.tnbcStage1.close}
        />
      );
    case "bsys-goals":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.goals.lead}
          items={BREAST_SYSTEMIC_ENTRY_CARDS.goals.items}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.goals.close}
        />
      );
    case "bsys-genomic":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.genomic.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.genomic.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.genomic.close}
        />
      );
    case "bsys-side-effects":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.sideEffects.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.sideEffects.ask}
        />
      );
    case "bsys-chemo-rounds":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.chemoRounds.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.chemoRounds.ask}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.chemoRounds.close}
        />
      );
    case "bsys-timeline":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.timeline.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.timeline.ask}
        />
      );
    case "bsys-fertility":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.fertility.lead}
          ask={BREAST_SYSTEMIC_ENTRY_CARDS.fertility.ask}
        />
      );
    case "bsys-this-week":
      return (
        <BulletCard
          lead={BREAST_SYSTEMIC_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_SYSTEMIC_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_SYSTEMIC_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bsys-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_SYSTEMIC_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_SYSTEMIC_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bgen-what-is":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.whatIs.lead}
          close={BREAST_GENETICS_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bgen-why-before-surgery":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.whyBeforeSurgery.lead}
          close={BREAST_GENETICS_ENTRY_CARDS.whyBeforeSurgery.close}
        />
      );
    case "bgen-who-may-need":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.whoMayNeed.lead}
          items={BREAST_GENETICS_ENTRY_CARDS.whoMayNeed.items}
          close={BREAST_GENETICS_ENTRY_CARDS.whoMayNeed.close}
        />
      );
    case "bgen-tnbc":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.tnbcGenetics.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.tnbcGenetics.ask}
          close={BREAST_GENETICS_ENTRY_CARDS.tnbcGenetics.close}
        />
      );
    case "bgen-vs-subtype":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.vsSubtype.lead}
          close={BREAST_GENETICS_ENTRY_CARDS.vsSubtype.close}
        />
      );
    case "bgen-positive-change":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.positiveChange.lead}
          items={BREAST_GENETICS_ENTRY_CARDS.positiveChange.items}
          close={BREAST_GENETICS_ENTRY_CARDS.positiveChange.close}
        />
      );
    case "bgen-only-brca":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.onlyBrca.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.onlyBrca.ask}
          close={BREAST_GENETICS_ENTRY_CARDS.onlyBrca.close}
        />
      );
    case "bgen-brca-shows":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.brcaShows.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.brcaShows.ask}
          close={BREAST_GENETICS_ENTRY_CARDS.brcaShows.close}
        />
      );
    case "bgen-negative-or-vus":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.negativeOrVus.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.negativeOrVus.ask}
          close={BREAST_GENETICS_ENTRY_CARDS.negativeOrVus.close}
        />
      );
    case "bgen-wait-or-not":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.waitOrNot.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.waitOrNot.ask}
          close={BREAST_GENETICS_ENTRY_CARDS.waitOrNot.close}
        />
      );
    case "bgen-other-breast":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.otherBreast.lead}
          close={BREAST_GENETICS_ENTRY_CARDS.otherBreast.close}
        />
      );
    case "bgen-without-brca":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.withoutBrca.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.withoutBrca.ask}
          close={BREAST_GENETICS_ENTRY_CARDS.withoutBrca.close}
        />
      );
    case "bgen-family":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.family.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.family.ask}
          close={BREAST_GENETICS_ENTRY_CARDS.family.close}
        />
      );
    case "bgen-timeline":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.timeline.lead}
          ask={BREAST_GENETICS_ENTRY_CARDS.timeline.ask}
        />
      );
    case "bgen-process":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.process.lead}
          items={BREAST_GENETICS_ENTRY_CARDS.process.items}
          close={BREAST_GENETICS_ENTRY_CARDS.process.close}
        />
      );
    case "bgen-pending":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.pending.lead}
          items={BREAST_GENETICS_ENTRY_CARDS.pending.items}
          close={BREAST_GENETICS_ENTRY_CARDS.pending.close}
        />
      );
    case "bgen-this-week":
      return (
        <BulletCard
          lead={BREAST_GENETICS_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_GENETICS_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_GENETICS_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bgen-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_GENETICS_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_GENETICS_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "brec-what-is":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.whatIs.lead}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.whatIs.close}
        />
      );
    case "brec-why-in-plan":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.whyInCancerPlan.lead}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.whyInCancerPlan.close}
        />
      );
    case "brec-who-faces":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.whoFaces.lead}
          items={BREAST_RECONSTRUCTION_ENTRY_CARDS.whoFaces.items}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.whoFaces.close}
        />
      );
    case "brec-not-required":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.notRequired.lead}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.notRequired.close}
        />
      );
    case "brec-immediate-vs-delayed":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.immediateVsDelayed.lead}
          items={BREAST_RECONSTRUCTION_ENTRY_CARDS.immediateVsDelayed.items}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.immediateVsDelayed.close}
        />
      );
    case "brec-immediate":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.immediate.lead}
          items={BREAST_RECONSTRUCTION_ENTRY_CARDS.immediate.items}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.immediate.close}
        />
      );
    case "brec-delayed":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.delayed.lead}
          items={BREAST_RECONSTRUCTION_ENTRY_CARDS.delayed.items}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.delayed.close}
        />
      );
    case "brec-methods":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.methods.lead}
          items={BREAST_RECONSTRUCTION_ENTRY_CARDS.methods.items}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.methods.close}
        />
      );
    case "brec-expanders":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.expanders.lead}
          ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.expanders.ask}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.expanders.close}
        />
      );
    case "brec-stages":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.stages.lead}
          ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.stages.ask}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.stages.close}
        />
      );
    case "brec-radiation":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.radiation.lead}
            ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.radiation.ask}
            close={BREAST_RECONSTRUCTION_ENTRY_CARDS.radiation.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_RADIATION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Radiation decision guide →
            </Link>
          </p>
        </div>
      );
    case "brec-implants-radiation":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.implantsRadiation.lead}
          ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.implantsRadiation.ask}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.implantsRadiation.close}
        />
      );
    case "brec-after-radiation":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.afterRadiation.lead}
          ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.afterRadiation.ask}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.afterRadiation.close}
        />
      );
    case "brec-genetics-bilateral":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.geneticsBilateral.lead}
            ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.geneticsBilateral.ask}
            close={BREAST_RECONSTRUCTION_ENTRY_CARDS.geneticsBilateral.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_GENETICS_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Genetic counseling before surgery guide →
            </Link>
          </p>
        </div>
      );
    case "brec-recovery":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.recovery.lead}
          ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.recovery.ask}
        />
      );
    case "brec-systemic-timing":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.systemicTiming.lead}
          ask={BREAST_RECONSTRUCTION_ENTRY_CARDS.systemicTiming.ask}
        />
      );
    case "brec-pending":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.pending.lead}
          items={BREAST_RECONSTRUCTION_ENTRY_CARDS.pending.items}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.pending.close}
        />
      );
    case "brec-this-week":
      return (
        <BulletCard
          lead={BREAST_RECONSTRUCTION_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_RECONSTRUCTION_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_RECONSTRUCTION_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "brec-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_RECONSTRUCTION_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_RECONSTRUCTION_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "brad-what-is":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.whatIs.lead}
          close={BREAST_RADIATION_ENTRY_CARDS.whatIs.close}
        />
      );
    case "brad-why-matters":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.whyMatters.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.whyMatters.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.whyMatters.close}
        />
      );
    case "brad-surgery-choice":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.surgeryChoice.lead}
          close={BREAST_RADIATION_ENTRY_CARDS.surgeryChoice.close}
        />
      );
    case "brad-after-lumpectomy":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.afterLumpectomy.lead}
          items={BREAST_RADIATION_ENTRY_CARDS.afterLumpectomy.items}
          close={BREAST_RADIATION_ENTRY_CARDS.afterLumpectomy.close}
        />
      );
    case "brad-skip-after-lumpectomy":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.skipAfterLumpectomy.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.skipAfterLumpectomy.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.skipAfterLumpectomy.close}
        />
      );
    case "brad-after-mastectomy":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.afterMastectomy.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.afterMastectomy.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.afterMastectomy.close}
        />
      );
    case "brad-reconstruction":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_RADIATION_ENTRY_CARDS.reconstruction.lead}
            ask={BREAST_RADIATION_ENTRY_CARDS.reconstruction.ask}
            close={BREAST_RADIATION_ENTRY_CARDS.reconstruction.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_RECONSTRUCTION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Reconstruction timing guide →
            </Link>
          </p>
        </div>
      );
    case "brad-sequencing":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.sequencing.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.sequencing.ask}
        />
      );
    case "brad-schedule":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.schedule.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.schedule.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.schedule.close}
        />
      );
    case "brad-shorter":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.shorter.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.shorter.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.shorter.close}
        />
      );
    case "brad-when-starts":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.whenStarts.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.whenStarts.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.whenStarts.close}
        />
      );
    case "brad-wait":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.wait.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.wait.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.wait.close}
        />
      );
    case "brad-refuse":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.refuse.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.refuse.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.refuse.close}
        />
      );
    case "brad-side-effects":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.sideEffects.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.sideEffects.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.sideEffects.close}
        />
      );
    case "brad-during":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.during.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.during.ask}
          close={BREAST_RADIATION_ENTRY_CARDS.during.close}
        />
      );
    case "brad-practical":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.practical.lead}
          ask={BREAST_RADIATION_ENTRY_CARDS.practical.ask}
        />
      );
    case "brad-pending":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.pending.lead}
          items={BREAST_RADIATION_ENTRY_CARDS.pending.items}
          close={BREAST_RADIATION_ENTRY_CARDS.pending.close}
        />
      );
    case "brad-this-week":
      return (
        <BulletCard
          lead={BREAST_RADIATION_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_RADIATION_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_RADIATION_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "brad-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_RADIATION_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_RADIATION_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bcare-what-is":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.whatIs.lead}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bcare-everyone":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.everyone.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.everyone.items}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.everyone.close}
        />
      );
    case "bcare-choose-hospital":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.chooseHospital.lead}
          ask={BREAST_CARE_TEAM_ENTRY_CARDS.chooseHospital.ask}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.chooseHospital.close}
        />
      );
    case "bcare-vs-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_CARE_TEAM_ENTRY_CARDS.vsSecondOpinion.lead}
            close={BREAST_CARE_TEAM_ENTRY_CARDS.vsSecondOpinion.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SECOND_OPINION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Breast second opinion guide →
            </Link>
          </p>
        </div>
      );
    case "bcare-who-treats":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.whoTreats.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.whoTreats.items}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.whoTreats.close}
        />
      );
    case "bcare-pick-surgeon":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.pickSurgeon.lead}
          ask={BREAST_CARE_TEAM_ENTRY_CARDS.pickSurgeon.ask}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.pickSurgeon.close}
        />
      );
    case "bcare-when-helps":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.whenHelps.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.whenHelps.items}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.whenHelps.close}
        />
      );
    case "bcare-hybrid":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.hybrid.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.hybrid.items}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.hybrid.close}
        />
      );
    case "bcare-multidisciplinary":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.multidisciplinary.lead}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.multidisciplinary.close}
        />
      );
    case "bcare-capabilities":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.capabilities.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.capabilities.items}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.capabilities.close}
        />
      );
    case "bcare-famous":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.famous.lead}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.famous.close}
        />
      );
    case "bcare-travel":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.travel.lead}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.travel.close}
        />
      );
    case "bcare-records":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.records.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.records.items}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.records.close}
        />
      );
    case "bcare-coordination":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.coordination.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.coordination.items}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.coordination.close}
        />
      );
    case "bcare-this-week":
      return (
        <BulletCard
          lead={BREAST_CARE_TEAM_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_CARE_TEAM_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_CARE_TEAM_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bcare-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_CARE_TEAM_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_CARE_TEAM_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bmet-what-is":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.whatIs.lead}
          close={BREAST_METASTATIC_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bmet-active-care":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.activeCare.lead}
          items={BREAST_METASTATIC_ENTRY_CARDS.activeCare.items}
          close={BREAST_METASTATIC_ENTRY_CARDS.activeCare.close}
        />
      );
    case "bmet-not-giving-up":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.notGivingUp.lead}
          close={BREAST_METASTATIC_ENTRY_CARDS.notGivingUp.close}
        />
      );
    case "bmet-subtype":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_METASTATIC_ENTRY_CARDS.subtypeStillMatters.lead}
            items={BREAST_METASTATIC_ENTRY_CARDS.subtypeStillMatters.items}
            close={BREAST_METASTATIC_ENTRY_CARDS.subtypeStillMatters.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_TREATMENT_COMPARE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Systemic options by subtype →
            </Link>
          </p>
        </div>
      );
    case "bmet-different-plans":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.differentPlans.lead}
          items={BREAST_METASTATIC_ENTRY_CARDS.differentPlans.items}
          close={BREAST_METASTATIC_ENTRY_CARDS.differentPlans.close}
        />
      );
    case "bmet-strongest":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.strongest.lead}
          close={BREAST_METASTATIC_ENTRY_CARDS.strongest.close}
        />
      );
    case "bmet-local-therapy":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.localTherapy.lead}
          ask={BREAST_METASTATIC_ENTRY_CARDS.localTherapy.ask}
          close={BREAST_METASTATIC_ENTRY_CARDS.localTherapy.close}
        />
      );
    case "bmet-options":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.options.lead}
          ask={BREAST_METASTATIC_ENTRY_CARDS.options.ask}
          close={BREAST_METASTATIC_ENTRY_CARDS.options.close}
        />
      );
    case "bmet-bone":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.bone.lead}
          ask={BREAST_METASTATIC_ENTRY_CARDS.bone.ask}
          close={BREAST_METASTATIC_ENTRY_CARDS.bone.close}
        />
      );
    case "bmet-living":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.living.lead}
          ask={BREAST_METASTATIC_ENTRY_CARDS.living.ask}
          close={BREAST_METASTATIC_ENTRY_CARDS.living.close}
        />
      );
    case "bmet-info-needed":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.infoNeeded.lead}
          items={BREAST_METASTATIC_ENTRY_CARDS.infoNeeded.items}
          close={BREAST_METASTATIC_ENTRY_CARDS.infoNeeded.close}
        />
      );
    case "bmet-what-to-ask":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.whatToAsk.lead}
          ask={BREAST_METASTATIC_ENTRY_CARDS.whatToAsk.ask}
          close={BREAST_METASTATIC_ENTRY_CARDS.whatToAsk.close}
        />
      );
    case "bmet-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_METASTATIC_ENTRY_CARDS.secondOpinion.lead}
            close={BREAST_METASTATIC_ENTRY_CARDS.secondOpinion.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SECOND_OPINION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Breast second opinion guide →
            </Link>
          </p>
        </div>
      );
    case "bmet-clinical-trial":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.clinicalTrial.lead}
          close={BREAST_METASTATIC_ENTRY_CARDS.clinicalTrial.close}
        />
      );
    case "bmet-this-week":
      return (
        <BulletCard
          lead={BREAST_METASTATIC_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_METASTATIC_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_METASTATIC_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bmet-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_METASTATIC_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_METASTATIC_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "brr-what-is":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.whatIs.lead}
          close={BREAST_RECURRENCE_ENTRY_CARDS.whatIs.close}
        />
      );
    case "brr-not-failed":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.notFailed.lead}
          close={BREAST_RECURRENCE_ENTRY_CARDS.notFailed.close}
        />
      );
    case "brr-local-vs-distant":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.localVsDistant.lead}
          items={BREAST_RECURRENCE_ENTRY_CARDS.localVsDistant.items}
          close={BREAST_RECURRENCE_ENTRY_CARDS.localVsDistant.close}
        />
      );
    case "brr-vs-metastatic":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_RECURRENCE_ENTRY_CARDS.vsMetastatic.lead}
            close={BREAST_RECURRENCE_ENTRY_CARDS.vsMetastatic.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_METASTATIC_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Metastatic / Stage IV options →
            </Link>
          </p>
        </div>
      );
    case "brr-retest":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.retest.lead}
          ask={BREAST_RECURRENCE_ENTRY_CARDS.retest.ask}
          close={BREAST_RECURRENCE_ENTRY_CARDS.retest.close}
        />
      );
    case "brr-prior-treatment":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.priorTreatment.lead}
          items={BREAST_RECURRENCE_ENTRY_CARDS.priorTreatment.items}
          close={BREAST_RECURRENCE_ENTRY_CARDS.priorTreatment.close}
        />
      );
    case "brr-still-treatable":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.stillTreatable.lead}
          items={BREAST_RECURRENCE_ENTRY_CARDS.stillTreatable.items}
          close={BREAST_RECURRENCE_ENTRY_CARDS.stillTreatable.close}
        />
      );
    case "brr-after-mastectomy":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.afterMastectomy.lead}
          ask={BREAST_RECURRENCE_ENTRY_CARDS.afterMastectomy.ask}
          close={BREAST_RECURRENCE_ENTRY_CARDS.afterMastectomy.close}
        />
      );
    case "brr-same-plan":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.samePlan.lead}
          close={BREAST_RECURRENCE_ENTRY_CARDS.samePlan.close}
        />
      );
    case "brr-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_RECURRENCE_ENTRY_CARDS.secondOpinion.lead}
            close={BREAST_RECURRENCE_ENTRY_CARDS.secondOpinion.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SECOND_OPINION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Breast second opinion guide →
            </Link>
          </p>
        </div>
      );
    case "brr-clinical-trial":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.clinicalTrial.lead}
          close={BREAST_RECURRENCE_ENTRY_CARDS.clinicalTrial.close}
        />
      );
    case "brr-this-week":
      return (
        <BulletCard
          lead={BREAST_RECURRENCE_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_RECURRENCE_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_RECURRENCE_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "brr-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_RECURRENCE_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_RECURRENCE_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bqol-what-is":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.whatIs.lead}
          close={BREAST_QOL_ENTRY_CARDS.whatIs.close}
        />
      );
    case "bqol-not-either-or":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.notEitherOr.lead}
          close={BREAST_QOL_ENTRY_CARDS.notEitherOr.close}
        />
      );
    case "bqol-supportive":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.supportive.lead}
          items={BREAST_QOL_ENTRY_CARDS.supportive.items}
          close={BREAST_QOL_ENTRY_CARDS.supportive.close}
        />
      );
    case "bqol-tell-doctor":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.tellDoctor.lead}
          items={BREAST_QOL_ENTRY_CARDS.tellDoctor.items}
          close={BREAST_QOL_ENTRY_CARDS.tellDoctor.close}
        />
      );
    case "bqol-affect-choice":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.affectChoice.lead}
          close={BREAST_QOL_ENTRY_CARDS.affectChoice.close}
        />
      );
    case "bqol-which-symptoms":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.whichSymptoms.lead}
          items={BREAST_QOL_ENTRY_CARDS.whichSymptoms.items}
          close={BREAST_QOL_ENTRY_CARDS.whichSymptoms.close}
        />
      );
    case "bqol-wait-appointment":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.waitAppointment.lead}
          ask={BREAST_QOL_ENTRY_CARDS.waitAppointment.ask}
          close={BREAST_QOL_ENTRY_CARDS.waitAppointment.close}
        />
      );
    case "bqol-adjust-treatment":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.adjustTreatment.lead}
          close={BREAST_QOL_ENTRY_CARDS.adjustTreatment.close}
        />
      );
    case "bqol-more-better":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.moreBetter.lead}
          close={BREAST_QOL_ENTRY_CARDS.moreBetter.close}
        />
      );
    case "bqol-body-image":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_QOL_ENTRY_CARDS.bodyImage.lead}
            ask={BREAST_QOL_ENTRY_CARDS.bodyImage.ask}
            close={BREAST_QOL_ENTRY_CARDS.bodyImage.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_RECONSTRUCTION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Reconstruction timing and choices →
            </Link>
          </p>
        </div>
      );
    case "bqol-work":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.work.lead}
          ask={BREAST_QOL_ENTRY_CARDS.work.ask}
          close={BREAST_QOL_ENTRY_CARDS.work.close}
        />
      );
    case "bqol-time-off":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.timeOff.lead}
          ask={BREAST_QOL_ENTRY_CARDS.timeOff.ask}
          close={BREAST_QOL_ENTRY_CARDS.timeOff.close}
        />
      );
    case "bqol-return-work":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.returnWork.lead}
          ask={BREAST_QOL_ENTRY_CARDS.returnWork.ask}
          close={BREAST_QOL_ENTRY_CARDS.returnWork.close}
        />
      );
    case "bqol-this-week":
      return (
        <BulletCard
          lead={BREAST_QOL_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_QOL_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_QOL_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bqol-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_QOL_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_QOL_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "btrial-not-last":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notLastResort.lead}
          items={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notLastResort.items}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notLastResort.close}
        />
      );
    case "btrial-ask-early":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.askEarly.lead}
          ask={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.askEarly.ask}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.askEarly.close}
        />
      );
    case "btrial-not-immediately":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notImmediately.lead}
          ask={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notImmediately.ask}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notImmediately.close}
        />
      );
    case "btrial-not-subject":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notTestSubject.lead}
          items={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notTestSubject.items}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notTestSubject.close}
        />
      );
    case "btrial-subtype":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.subtype.lead}
            ask={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.subtype.ask}
            close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.subtype.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_TREATMENT_COMPARE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Systemic options by subtype →
            </Link>
          </p>
        </div>
      );
    case "btrial-qualify":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notQualify.lead}
          items={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notQualify.items}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notQualify.close}
        />
      );
    case "btrial-replace":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.replaceCurrent.lead}
          items={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.replaceCurrent.items}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.replaceCurrent.close}
        />
      );
    case "btrial-better":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notAutomaticallyBetter.lead}
          items={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notAutomaticallyBetter.items}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.notAutomaticallyBetter.close}
        />
      );
    case "btrial-risks":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.risks.lead}
          items={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.risks.items}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.risks.close}
        />
      );
    case "btrial-daily-life":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.dailyLife.lead}
          ask={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.dailyLife.ask}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.dailyLife.close}
        />
      );
    case "btrial-if-not":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.ifNotWorking.lead}
          ask={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.ifNotWorking.ask}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.ifNotWorking.close}
        />
      );
    case "btrial-this-week":
      return (
        <BulletCard
          lead={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_CLINICAL_TRIAL_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "btrial-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_CLINICAL_TRIAL_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_CLINICAL_TRIAL_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bfu-what-happens":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.whatHappens.lead}
          items={BREAST_FOLLOW_UP_ENTRY_CARDS.whatHappens.items}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.whatHappens.close}
        />
      );
    case "bfu-not-waiting":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.notWaiting.lead}
          items={BREAST_FOLLOW_UP_ENTRY_CARDS.notWaiting.items}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.notWaiting.close}
        />
      );
    case "bfu-first-visit":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.firstVisit.lead}
          items={BREAST_FOLLOW_UP_ENTRY_CARDS.firstVisit.items}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.firstVisit.close}
        />
      );
    case "bfu-who-manages":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.whoManages.lead}
          ask={BREAST_FOLLOW_UP_ENTRY_CARDS.whoManages.ask}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.whoManages.close}
        />
      );
    case "bfu-schedule":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.schedule.lead}
          ask={BREAST_FOLLOW_UP_ENTRY_CARDS.schedule.ask}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.schedule.close}
        />
      );
    case "bfu-guidelines":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.guidelines.lead}
          ask={BREAST_FOLLOW_UP_ENTRY_CARDS.guidelines.ask}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.guidelines.close}
        />
      );
    case "bfu-cancer-free":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.cancerFree.lead}
          ask={BREAST_FOLLOW_UP_ENTRY_CARDS.cancerFree.ask}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.cancerFree.close}
        />
      );
    case "bfu-mammo-type":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.mammoType.lead}
          ask={BREAST_FOLLOW_UP_ENTRY_CARDS.mammoType.ask}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.mammoType.close}
        />
      );
    case "bfu-more-scans":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.moreScans.lead}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.moreScans.close}
        />
      );
    case "bfu-endocrine":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.endocrine.lead}
          ask={BREAST_FOLLOW_UP_ENTRY_CARDS.endocrine.ask}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.endocrine.close}
        />
      );
    case "bfu-long-term":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.longTermEffects.lead}
          items={BREAST_FOLLOW_UP_ENTRY_CARDS.longTermEffects.items}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.longTermEffects.close}
        />
      );
    case "bfu-which-symptoms":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.whichSymptoms.lead}
          items={BREAST_FOLLOW_UP_ENTRY_CARDS.whichSymptoms.items}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.whichSymptoms.close}
        />
      );
    case "bfu-between-visits":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.betweenVisits.lead}
          ask={BREAST_FOLLOW_UP_ENTRY_CARDS.betweenVisits.ask}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.betweenVisits.close}
        />
      );
    case "bfu-fear":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_FOLLOW_UP_ENTRY_CARDS.fearRecurrence.lead}
            items={BREAST_FOLLOW_UP_ENTRY_CARDS.fearRecurrence.items}
            close={BREAST_FOLLOW_UP_ENTRY_CARDS.fearRecurrence.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_RECURRENCE_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Recurrence decision guide →
            </Link>
          </p>
        </div>
      );
    case "bfu-this-week":
      return (
        <BulletCard
          lead={BREAST_FOLLOW_UP_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_FOLLOW_UP_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_FOLLOW_UP_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bfu-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_FOLLOW_UP_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_FOLLOW_UP_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bgc-explore-reasons":
      return (
        <BulletCard
          lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.exploreReasons.lead}
          items={BREAST_GLOBAL_CARE_ENTRY_CARDS.exploreReasons.items}
          close={BREAST_GLOBAL_CARE_ENTRY_CARDS.exploreReasons.close}
        />
      );
    case "bgc-default-upgrade":
      return (
        <BulletCard
          lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.defaultUpgrade.lead}
          close={BREAST_GLOBAL_CARE_ENTRY_CARDS.defaultUpgrade.close}
        />
      );
    case "bgc-capability-gap":
      return (
        <BulletCard
          lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.capabilityGap.lead}
          items={BREAST_GLOBAL_CARE_ENTRY_CARDS.capabilityGap.items}
          close={BREAST_GLOBAL_CARE_ENTRY_CARDS.capabilityGap.close}
        />
      );
    case "bgc-vs-care-team":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.vsCareTeam.lead}
            close={BREAST_GLOBAL_CARE_ENTRY_CARDS.vsCareTeam.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_CARE_TEAM_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Care team / center guide →
            </Link>
          </p>
        </div>
      );
    case "bgc-vs-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.vsSecondOpinion.lead}
            close={BREAST_GLOBAL_CARE_ENTRY_CARDS.vsSecondOpinion.close}
          />
          <p>
            <Link
              href={`/questions/${BREAST_SECOND_OPINION_SLUG}`}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Breast second opinion guide →
            </Link>
          </p>
        </div>
      );
    case "bgc-remote-first":
      return (
        <BulletCard
          lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.remoteFirst.lead}
          items={BREAST_GLOBAL_CARE_ENTRY_CARDS.remoteFirst.items}
          close={BREAST_GLOBAL_CARE_ENTRY_CARDS.remoteFirst.close}
        />
      );
    case "bgc-hybrid":
      return (
        <BulletCard
          lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.hybrid.lead}
          items={BREAST_GLOBAL_CARE_ENTRY_CARDS.hybrid.items}
          close={BREAST_GLOBAL_CARE_ENTRY_CARDS.hybrid.close}
        />
      );
    case "bgc-records":
      return (
        <BulletCard
          lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.records.lead}
          items={BREAST_GLOBAL_CARE_ENTRY_CARDS.records.items}
          close={BREAST_GLOBAL_CARE_ENTRY_CARDS.records.close}
        />
      );
    case "bgc-this-week":
      return (
        <BulletCard
          lead={BREAST_GLOBAL_CARE_ENTRY_CARDS.thisWeek.lead}
          items={BREAST_GLOBAL_CARE_ENTRY_CARDS.thisWeek.steps}
          close={BREAST_GLOBAL_CARE_ENTRY_CARDS.thisWeek.close}
        />
      );
    case "bgc-mistakes":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{BREAST_GLOBAL_CARE_ENTRY_CARDS.mistakes.lead}</p>
          <ul className="space-y-3">
            {BREAST_GLOBAL_CARE_ENTRY_CARDS.mistakes.items.map((item) => (
              <li key={item.mistake}>
                <p className="font-medium text-[var(--ink)]">{item.mistake}</p>
                <p className="mt-1">{item.why}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    case "bfe-belongs":
      return (
        <BulletCard
          lead={BREAST_PRACTICAL_FIT_ENTRY_CARDS.belongs.lead}
          close={BREAST_PRACTICAL_FIT_ENTRY_CARDS.belongs.close}
        />
      );
    case "bfe-not-prices":
      return (
        <BulletCard
          lead={BREAST_PRACTICAL_FIT_ENTRY_CARDS.notPrices.lead}
          close={BREAST_PRACTICAL_FIT_ENTRY_CARDS.notPrices.close}
        />
      );
    case "bfe-cost-ask":
      return (
        <BulletCard
          lead={BREAST_PRACTICAL_FIT_ENTRY_CARDS.costAsk.lead}
          ask={BREAST_PRACTICAL_FIT_ENTRY_CARDS.costAsk.ask}
          close={BREAST_PRACTICAL_FIT_ENTRY_CARDS.costAsk.close}
        />
      );
    case "bfe-insurance":
      return (
        <BulletCard
          lead={BREAST_PRACTICAL_FIT_ENTRY_CARDS.insurance.lead}
          ask={BREAST_PRACTICAL_FIT_ENTRY_CARDS.insurance.ask}
          close={BREAST_PRACTICAL_FIT_ENTRY_CARDS.insurance.close}
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
    case "gc-explore-reasons":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.exploreReasons.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.exploreReasons.items}
          close={GLOBAL_CARE_ENTRY_CARDS.exploreReasons.close}
        />
      );
    case "gc-lost-confidence":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.lostConfidence.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.lostConfidence.items}
          close={GLOBAL_CARE_ENTRY_CARDS.lostConfidence.close}
        />
      );
    case "gc-disagree-plan":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.disagreePlan.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.disagreePlan.items}
          close={GLOBAL_CARE_ENTRY_CARDS.disagreePlan.close}
        />
      );
    case "gc-last-try-boundary":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={GLOBAL_CARE_ENTRY_CARDS.lastTryBoundary.lead}
            items={GLOBAL_CARE_ENTRY_CARDS.lastTryBoundary.items}
            close={GLOBAL_CARE_ENTRY_CARDS.lastTryBoundary.close}
          />
          <p>
            <Link
              href={CARE_OPTIONS_ANCHOR}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {CARE_OPTIONS_SOFT_CTA_LABEL} →
            </Link>
          </p>
        </div>
      );
    case "gc-default-upgrade":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.defaultUpgrade.lead}
          close={GLOBAL_CARE_ENTRY_CARDS.defaultUpgrade.close}
        />
      );
    case "gc-capability-gap":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.capabilityGap.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.capabilityGap.items}
          close={GLOBAL_CARE_ENTRY_CARDS.capabilityGap.close}
        />
      );
    case "gc-vs-care-team":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={GLOBAL_CARE_ENTRY_CARDS.vsCareTeam.lead}
            close={GLOBAL_CARE_ENTRY_CARDS.vsCareTeam.close}
          />
          <p>
            <Link
              href="/questions/do-i-need-different-lung-cancer-center-or-specialized-expertise"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Care team decision guide →
            </Link>
          </p>
        </div>
      );
    case "gc-vs-second-opinion":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={GLOBAL_CARE_ENTRY_CARDS.vsSecondOpinion.lead}
            close={GLOBAL_CARE_ENTRY_CARDS.vsSecondOpinion.close}
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
    case "gc-remote-first":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.remoteFirst.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.remoteFirst.items}
          close={GLOBAL_CARE_ENTRY_CARDS.remoteFirst.close}
        />
      );
    case "gc-remote-vs-travel-compare":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.remoteVsTravelCompare.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.remoteVsTravelCompare.items}
          close={GLOBAL_CARE_ENTRY_CARDS.remoteVsTravelCompare.close}
        />
      );
    case "gc-compare-centers":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={GLOBAL_CARE_ENTRY_CARDS.compareCenters.lead}
            items={GLOBAL_CARE_ENTRY_CARDS.compareCenters.items}
            close={GLOBAL_CARE_ENTRY_CARDS.compareCenters.close}
          />
          <p>
            <Link
              href={CARE_OPTIONS_ANCHOR}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {CARE_OPTIONS_SOFT_CTA_LABEL} →
            </Link>
          </p>
        </div>
      );
    case "gc-stay-local":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.stayLocal.lead}
          close={GLOBAL_CARE_ENTRY_CARDS.stayLocal.close}
        />
      );
    case "gc-hybrid-travel":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.hybridTravel.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.hybridTravel.items}
          close={GLOBAL_CARE_ENTRY_CARDS.hybridTravel.close}
        />
      );
    case "gc-fitness-travel":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.fitnessTravel.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.fitnessTravel.items}
          close={GLOBAL_CARE_ENTRY_CARDS.fitnessTravel.close}
        />
      );
    case "gc-intl-support":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={GLOBAL_CARE_ENTRY_CARDS.intlSupport.lead}
            items={GLOBAL_CARE_ENTRY_CARDS.intlSupport.items}
            close={GLOBAL_CARE_ENTRY_CARDS.intlSupport.close}
          />
          <p>
            <Link
              href={CARE_CONVERSION_PATH}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {CARE_CONVERSION_CTA_LABEL} →
            </Link>
          </p>
        </div>
      );
    case "gc-follow-up-home":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.followUpHome.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.followUpHome.items}
          close={GLOBAL_CARE_ENTRY_CARDS.followUpHome.close}
        />
      );
    case "gc-total-cost":
    case "gc-compare-total-cost":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.compareTotalCost.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.compareTotalCost.items}
          close={GLOBAL_CARE_ENTRY_CARDS.compareTotalCost.close}
        />
      );
    case "gc-cost-blocking":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.costBlocking.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.costBlocking.items}
          close={GLOBAL_CARE_ENTRY_CARDS.costBlocking.close}
        />
      );
    case "gc-family-pressure":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.familyPressure.lead}
          close={`Ask: “${GLOBAL_CARE_ENTRY_CARDS.familyPressure.ask}” ${GLOBAL_CARE_ENTRY_CARDS.familyPressure.close}`}
        />
      );
    case "gc-records":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.records.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.records.items}
          close={GLOBAL_CARE_ENTRY_CARDS.records.close}
          itemSection="bring"
        />
      );
    case "gc-records-abroad":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.recordsAbroad.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.recordsAbroad.items}
          close={GLOBAL_CARE_ENTRY_CARDS.recordsAbroad.close}
          itemSection="bring"
        />
      );
    case "gc-questions-before-contact":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={GLOBAL_CARE_ENTRY_CARDS.questionsBeforeContact.lead}
            items={GLOBAL_CARE_ENTRY_CARDS.questionsBeforeContact.items}
            close={GLOBAL_CARE_ENTRY_CARDS.questionsBeforeContact.close}
          />
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href={CARE_CONVERSION_PATH}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {CARE_CONVERSION_CTA_LABEL} →
            </Link>
            <Link
              href={CARE_TRANSPARENCY_PATH}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {CARE_TRANSPARENCY_CTA_LABEL} →
            </Link>
          </p>
        </div>
      );
    case "gc-before-booking":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.beforeBooking.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.beforeBooking.items}
          close={GLOBAL_CARE_ENTRY_CARDS.beforeBooking.close}
        />
      );
    case "gc-conflict":
      return (
        <BulletCard
          lead={GLOBAL_CARE_ENTRY_CARDS.conflict.lead}
          items={GLOBAL_CARE_ENTRY_CARDS.conflict.items}
          close={GLOBAL_CARE_ENTRY_CARDS.conflict.close}
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
    case "cc-how-compare":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={CARE_CENTER_ENTRY_CARDS.howCompare.lead}
            items={CARE_CENTER_ENTRY_CARDS.howCompare.items}
            close={CARE_CENTER_ENTRY_CARDS.howCompare.close}
          />
          <p>
            <Link
              href={CARE_OPTIONS_ANCHOR}
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              {CARE_OPTIONS_SOFT_CTA_LABEL} →
            </Link>
          </p>
        </div>
      );
    case "cc-when-abroad-branch":
      return (
        <div className="space-y-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          <BulletCard
            lead={CARE_CENTER_ENTRY_CARDS.whenAbroadBranch.lead}
            items={CARE_CENTER_ENTRY_CARDS.whenAbroadBranch.items}
            close={CARE_CENTER_ENTRY_CARDS.whenAbroadBranch.close}
          />
          <p>
            <Link
              href="/questions/when-to-consider-lung-cancer-care-abroad"
              className="font-semibold text-[var(--accent)] hover:underline"
            >
              Care abroad decision guide →
            </Link>
          </p>
        </div>
      );
    case "cc-multidisciplinary":
      return (
        <BulletCard
          lead={CARE_CENTER_ENTRY_CARDS.multidisciplinary.lead}
          items={CARE_CENTER_ENTRY_CARDS.multidisciplinary.items}
          close={CARE_CENTER_ENTRY_CARDS.multidisciplinary.close}
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
