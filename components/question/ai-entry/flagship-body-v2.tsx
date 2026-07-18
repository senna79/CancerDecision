import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { DecisionWorkspaceV2 } from "./decision-workspace-v2";

/**
 * Entry Template v2.0 — Decision Workspace
 * Vertical 4-stage Decision Path; question cards hang beside each step.
 */
export function AiEntryFlagshipBodyV2({
  modules,
  slug,
}: {
  modules: AiEntryFlagshipModules;
  slug: string;
}) {
  return <DecisionWorkspaceV2 modules={modules} slug={slug} />;
}
