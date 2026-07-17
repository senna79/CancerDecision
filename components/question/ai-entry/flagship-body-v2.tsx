import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { AffectDecisions } from "./affect-decisions";
import { CommonMistakes } from "./common-mistakes";
import { CostConsiderations } from "./cost-considerations";
import { DecisionTriggers } from "./decision-triggers";
import { DoctorQuestionGroups } from "./doctor-question-groups";
import { DoesNotDecide } from "./does-not-decide";
import { HowTestingDone } from "./how-testing-done";
import { IllustrativeScenario } from "./illustrative-scenario";
import { InformationGap } from "./information-gap";
import { MoreAboutDecision } from "./more-about-decision";
import { RelatedDecisionPaths } from "./related-decision-paths";
import { TimingAnxiety } from "./timing-anxiety";
import { ValueSituations } from "./value-situations";
import { WhoNeedsTesting } from "./who-needs-testing";
import { WhyDecisionMatters } from "./why-decision-matters";
import { YourNextStep } from "./your-next-step";

/**
 * Entry Template v2.0 body — short decision path first, depth in disclosure.
 * Content stays in HTML for crawlers when details are opened or pre-rendered.
 */
export function AiEntryFlagshipBodyV2({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return (
    <>
      <WhyDecisionMatters modules={modules} />
      <WhoNeedsTesting modules={modules} />
      <TimingAnxiety modules={modules} />
      <DecisionTriggers modules={modules} />
      <HowTestingDone modules={modules} />
      <DoesNotDecide modules={modules} />
      <DoctorQuestionGroups modules={modules} />
      <YourNextStep modules={modules} />
      <RelatedDecisionPaths modules={modules} />

      <MoreAboutDecision>
        <CostConsiderations modules={modules} />
        <InformationGap modules={modules} />
        <AffectDecisions modules={modules} />
        <ValueSituations modules={modules} />
        <CommonMistakes modules={modules} />
        <IllustrativeScenario modules={modules} />
      </MoreAboutDecision>
    </>
  );
}
