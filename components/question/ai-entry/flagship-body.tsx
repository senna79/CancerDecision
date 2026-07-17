import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { AffectDecisions } from "./affect-decisions";
import { ClarifyTopics } from "./clarify-topics";
import { CommonMistakes } from "./common-mistakes";
import { ContentBridge } from "./content-bridge";
import { DecisionTimeline } from "./decision-timeline";
import { DecisionTriggers } from "./decision-triggers";
import { DifferRecommendations } from "./differ-recommendations";
import { DoctorQuestionGroups } from "./doctor-question-groups";
import { DoesNotDecide } from "./does-not-decide";
import { EvaluateOpinions } from "./evaluate-opinions";
import { FirstDecisions } from "./first-decisions";
import { GoalFramework } from "./goal-framework";
import { IllustrativeScenario } from "./illustrative-scenario";
import { InformationGap } from "./information-gap";
import { JourneyLinks } from "./journey-links";
import { MayNotChange } from "./may-not-change";
import { PatientFaq } from "./patient-faq";
import { PrepChecklist } from "./prep-checklist";
import { ProgressionChange } from "./progression-change";
import { RelatedDecisionPaths } from "./related-decision-paths";
import { SecondOpinionBridge } from "./second-opinion-bridge";
import { TimingAnxiety } from "./timing-anxiety";
import { TreatmentCategories } from "./treatment-categories";
import { ValueSituations } from "./value-situations";
import { WhyDecisionMatters } from "./why-decision-matters";
import { YourNextStep } from "./your-next-step";

/** Mid-to-end body for flagship Tier-1 AI Entry pages */
export function AiEntryFlagshipBody({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <>
      <WhyDecisionMatters modules={modules} />
      <DecisionTriggers modules={modules} />
      <GoalFramework modules={modules} />
      <InformationGap modules={modules} />
      <AffectDecisions modules={modules} />
      <EvaluateOpinions modules={modules} />
      <PatientFaq modules={modules} />
      <DifferRecommendations modules={modules} />
      <DoesNotDecide modules={modules} />
      <TreatmentCategories modules={modules} />
      <ClarifyTopics modules={modules} />
      <ValueSituations modules={modules} />
      <MayNotChange modules={modules} />
      <FirstDecisions modules={modules} />
      <TimingAnxiety modules={modules} />
      <DecisionTimeline modules={modules} />
      <PrepChecklist modules={modules} />
      <JourneyLinks modules={modules} />
      {modules.bridges?.map((bridge) => (
        <ContentBridge key={bridge.title} bridge={bridge} />
      ))}
      {modules.bridge ? <ContentBridge bridge={modules.bridge} /> : null}
      <SecondOpinionBridge modules={modules} />
      <ProgressionChange modules={modules} />
      <CommonMistakes modules={modules} />
      <DoctorQuestionGroups modules={modules} />
      <IllustrativeScenario modules={modules} />
      <YourNextStep modules={modules} />
      <RelatedDecisionPaths modules={modules} />
    </>
  );
}
