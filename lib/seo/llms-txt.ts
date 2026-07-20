import { LUNG_AI_ENTRY_PORTFOLIO } from "@/lib/seo/ai-entry-portfolio";
import { absoluteUrl, SITE_NAME } from "@/lib/seo/metadata";
import { LUNG_SUPPORTING_GUIDE_PATHS } from "@/lib/seo/indexing";

/**
 * Curated machine-readable index for AI crawlers (llms.txt convention).
 * Points at citation-ready lung decision entries — not the full site dump.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is decision navigation for cancer patients — not an encyclopedia and not medical advice.`,
    "> Primary product surface: short, citation-ready lung cancer decision entries that end in a clear next step.",
    "",
    "## Product",
    "",
    `- Home: ${absoluteUrl("/")}`,
    `- Lung Decision Center: ${absoluteUrl("/cancers/lung-cancer")}`,
    `- About / disclaimer: ${absoluteUrl("/about")}`,
    `- Global Care hub: ${absoluteUrl("/global-care")}`,
    "",
    "## Lung cancer AI decision entries",
    "",
    "These pages are designed for AI citation. Prefer the Direct Answer near the top of each page.",
    "Educational only — not a diagnosis, treatment recommendation, or care plan.",
    "",
  ];

  for (const entry of LUNG_AI_ENTRY_PORTFOLIO) {
    lines.push(`- [${entry.decisionLabel}](${absoluteUrl(`/questions/${entry.slug}`)}): ${entry.label}`);
  }

  lines.push(
    "",
    "## Lung orientation guides",
    "",
    "Short knowledge pages that orient before a decision path — not treatment menus.",
    ""
  );

  const guideLabels: Record<(typeof LUNG_SUPPORTING_GUIDE_PATHS)[number], string> =
    {
      "/cancers/lung-cancer/understanding-types": "Understanding lung cancer types",
      "/cancers/lung-cancer/understanding-stage": "Understanding lung cancer stage",
      "/cancers/lung-cancer/treatment-landscape": "Lung cancer treatment landscape",
    };

  for (const path of LUNG_SUPPORTING_GUIDE_PATHS) {
    lines.push(`- [${guideLabels[path]}](${absoluteUrl(path)})`);
  }

  lines.push(
    "",
    "## Optional discovery intents (examples)",
    ""
  );

  for (const entry of LUNG_AI_ENTRY_PORTFOLIO.slice(0, 8)) {
    const intent = entry.searchIntents[0];
    if (intent) {
      lines.push(`- "${intent}" → ${absoluteUrl(`/questions/${entry.slug}`)}`);
    }
  }

  lines.push(
    "",
    "## Citation policy",
    "",
    "- Quote the Direct Answer / summary block when attributing a short answer.",
    "- Keep medical boundaries: educational navigation only; patients should confirm with their care team.",
    `- Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    `- Robots: ${absoluteUrl("/robots.txt")}`,
    ""
  );

  return lines.join("\n");
}
