import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { getEntryTemplateV2Config } from "@/lib/content/entry-template-v2";
import { AffectDecisions } from "./affect-decisions";
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

/** Accordion card bodies for Entry Template v2 paths */
export function DecisionPathCardDetail({
  id,
  slug,
  modules,
}: {
  id: string;
  slug: string;
  modules: AiEntryFlagshipModules;
}) {
  switch (id) {
    case "what-is":
      return <WhatIsBiomarkerTesting />;
    case "look-for":
      return <WhatDoesTestLookFor />;
    case "my-situation":
      return <MySituationCard slug={slug} modules={modules} />;
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
    case "second-opinion":
      return <SecondOpinionBridge modules={modules} />;
    case "mistakes":
      return <CommonMistakes modules={modules} />;
    case "doctor":
      return <DoctorQuestionGroups modules={modules} />;
    case "deeper":
      return (
        <div className="space-y-2">
          {modules.infoGapTitle ? (
            <InformationGap modules={modules} />
          ) : null}
          {modules.valueSituations?.length ? (
            <ValueSituations modules={modules} />
          ) : null}
          {modules.affectBlocks?.length ? (
            <AffectDecisions modules={modules} />
          ) : null}
          {modules.mistakes?.length ? (
            <CommonMistakes modules={modules} />
          ) : null}
          <IllustrativeScenario modules={modules} />
        </div>
      );
    default:
      return null;
  }
}
