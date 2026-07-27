import { LUNG_AI_ENTRY_PORTFOLIO } from "@/lib/seo/ai-entry-portfolio";
import { BREAST_AI_ENTRY_PORTFOLIO } from "@/lib/seo/breast-ai-entry-portfolio";
import {
  BREAST_SUPPORTING_GUIDE_PATHS,
  LUNG_SUPPORTING_GUIDE_PATHS,
  PROSTATE_SUPPORTING_GUIDE_PATHS,
} from "@/lib/seo/indexing";
import { absoluteUrl, SITE_NAME } from "@/lib/seo/metadata";
import { PROSTATE_AI_ENTRY_PORTFOLIO } from "@/lib/seo/prostate-ai-entry-portfolio";

type PortfolioEntry = {
  label: string;
  decisionLabel: string;
  slug: string;
  searchIntents: string[];
};

/**
 * Curated machine-readable index for AI crawlers (llms.txt convention).
 * Citation-ready decision entries across lung, breast, and prostate — not a full site dump.
 */
export function buildLlmsTxt(): string {
  const lines: string[] = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_NAME} is decision navigation for cancer patients — not an encyclopedia and not medical advice.`,
    "> Primary product surface: short, citation-ready decision entries (lung complete; breast and prostate hubs live) that end in a clear next step.",
    "",
    "## Product",
    "",
    `- Home: ${absoluteUrl("/")}`,
    `- Lung Decision Center: ${absoluteUrl("/cancers/lung-cancer")}`,
    `- Breast Decision Center: ${absoluteUrl("/cancers/breast-cancer")}`,
    `- Prostate Decision Center: ${absoluteUrl("/cancers/prostate-cancer")}`,
    `- About / disclaimer: ${absoluteUrl("/about")}`,
    `- Transparency / editorial: ${absoluteUrl("/transparency")}`,
    `- Global Care hub: ${absoluteUrl("/global-care")}`,
    "",
  ];

  appendEntrySection(
    lines,
    "Lung cancer AI decision entries",
    LUNG_AI_ENTRY_PORTFOLIO
  );
  appendGuideSection(
    lines,
    "Lung orientation guides",
    LUNG_SUPPORTING_GUIDE_PATHS,
    {
      "/cancers/lung-cancer/understanding-types":
        "Understanding lung cancer types",
      "/cancers/lung-cancer/understanding-stage":
        "Understanding lung cancer stage",
      "/cancers/lung-cancer/treatment-landscape":
        "Lung cancer treatment landscape",
    }
  );

  appendEntrySection(
    lines,
    "Breast cancer AI decision entries",
    BREAST_AI_ENTRY_PORTFOLIO
  );
  appendGuideSection(
    lines,
    "Breast orientation guides",
    BREAST_SUPPORTING_GUIDE_PATHS,
    {
      "/cancers/breast-cancer/understanding-subtype":
        "Understanding breast cancer subtype",
      "/cancers/breast-cancer/understanding-stage":
        "Understanding breast cancer stage",
      "/cancers/breast-cancer/treatment-landscape":
        "Breast cancer treatment landscape",
    }
  );

  appendEntrySection(
    lines,
    "Prostate cancer AI decision entries",
    PROSTATE_AI_ENTRY_PORTFOLIO
  );
  appendGuideSection(
    lines,
    "Prostate orientation guides",
    PROSTATE_SUPPORTING_GUIDE_PATHS,
    {
      "/cancers/prostate-cancer/understanding-risk":
        "Understanding prostate cancer risk",
      "/cancers/prostate-cancer/understanding-stage":
        "Understanding prostate cancer stage",
      "/cancers/prostate-cancer/treatment-landscape":
        "Prostate cancer treatment landscape",
    }
  );

  lines.push(
    "",
    "## Optional discovery intents (examples)",
    ""
  );

  const intentSamples = [
    ...pickIntents(LUNG_AI_ENTRY_PORTFOLIO, 4),
    ...pickIntents(BREAST_AI_ENTRY_PORTFOLIO, 4),
    ...pickIntents(PROSTATE_AI_ENTRY_PORTFOLIO, 3),
  ];
  for (const { intent, slug } of intentSamples) {
    lines.push(`- "${intent}" → ${absoluteUrl(`/questions/${slug}`)}`);
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

function appendEntrySection(
  lines: string[],
  heading: string,
  portfolio: readonly PortfolioEntry[]
) {
  lines.push(
    `## ${heading}`,
    "",
    "These pages are designed for AI citation. Prefer the Direct Answer near the top of each page.",
    "Educational only — not a diagnosis, treatment recommendation, or care plan.",
    ""
  );
  for (const entry of portfolio) {
    lines.push(
      `- [${entry.decisionLabel}](${absoluteUrl(`/questions/${entry.slug}`)}): ${entry.label}`
    );
  }
  lines.push("");
}

function appendGuideSection(
  lines: string[],
  heading: string,
  paths: readonly string[],
  labels: Record<string, string>
) {
  lines.push(
    `## ${heading}`,
    "",
    "Short knowledge pages that orient before a decision path — not treatment menus.",
    ""
  );
  for (const path of paths) {
    lines.push(`- [${labels[path] ?? path}](${absoluteUrl(path)})`);
  }
  lines.push("");
}

function pickIntents(
  portfolio: readonly PortfolioEntry[],
  limit: number
): Array<{ intent: string; slug: string }> {
  const out: Array<{ intent: string; slug: string }> = [];
  for (const entry of portfolio) {
    const intent = entry.searchIntents[0];
    if (!intent) continue;
    out.push({ intent, slug: entry.slug });
    if (out.length >= limit) break;
  }
  return out;
}
