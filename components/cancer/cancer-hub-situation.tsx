"use client";

import { useSearchParams } from "next/navigation";
import { DecisionMapLocator } from "@/components/cancer/decision-map-locator";
import { SituationGuidedRouter } from "@/components/journey/situation-guided-router";
import {
  getDecisionMoment,
  type DecisionMoment,
} from "@/lib/journey/decision-moments";
import type {
  OrientationLink,
  SituationBucket,
  SituationQuickScenario,
} from "@/lib/journey/situation-buckets";
import type { ReactNode } from "react";

/**
 * Client island so hub pages can stay static while still honoring `?moment=`.
 */
export function CancerHubSituation({
  cancerSlug,
  moments,
  buckets,
  orientationLinks,
  quickScenarios,
  cancerLabel,
  footer,
  showMapLocator,
}: {
  cancerSlug: string;
  moments: DecisionMoment[];
  buckets: SituationBucket[];
  orientationLinks: OrientationLink[];
  quickScenarios?: SituationQuickScenario[];
  cancerLabel: string;
  footer?: ReactNode;
  showMapLocator?: boolean;
}) {
  const searchParams = useSearchParams();
  const momentParam = searchParams.get("moment") ?? undefined;
  const activeMoment = getDecisionMoment(momentParam, cancerSlug);

  return (
    <div className="mt-8 max-w-3xl space-y-5">
      <SituationGuidedRouter
        moments={moments}
        buckets={buckets}
        orientationLinks={orientationLinks}
        quickScenarios={quickScenarios}
        cancerLabel={cancerLabel}
        activeId={activeMoment?.id}
        footer={footer}
      />
      {showMapLocator ? (
        <DecisionMapLocator activeNodeId={activeMoment?.nodeId} />
      ) : null}
    </div>
  );
}
