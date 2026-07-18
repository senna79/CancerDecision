import type { AiEntryFlagshipModules } from "@/lib/content/ai-entry-modules";
import { DecisionWorkspaceV2 } from "./decision-workspace-v2";

/**
 * Entry Template v2.0 — Decision Workspace
 * Left: short decision story. Right: patient question cards (desktop).
 */
export function AiEntryFlagshipBodyV2({
  modules,
}: {
  modules: AiEntryFlagshipModules;
}) {
  return <DecisionWorkspaceV2 modules={modules} />;
}
