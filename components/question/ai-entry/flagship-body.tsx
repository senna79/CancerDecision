import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { CommonMistakes } from "./common-mistakes";
import { DecisionTimeline } from "./decision-timeline";
import { DoctorQuestionGroups } from "./doctor-question-groups";
import { FirstDecisions } from "./first-decisions";
import { IllustrativeScenario } from "./illustrative-scenario";
import { PrepChecklist } from "./prep-checklist";
import { RelatedDecisionPaths } from "./related-decision-paths";
import { SecondOpinionBridge } from "./second-opinion-bridge";
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
      <FirstDecisions modules={modules} />
      <DecisionTimeline modules={modules} />
      <PrepChecklist modules={modules} />
      <CommonMistakes modules={modules} />
      <SecondOpinionBridge modules={modules} />
      <DoctorQuestionGroups modules={modules} />
      <IllustrativeScenario modules={modules} />
      <YourNextStep modules={modules} />
      <RelatedDecisionPaths modules={modules} />
    </>
  );
}
