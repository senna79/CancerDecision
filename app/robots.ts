import type { MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/metadata";

/** Paths kept out of crawl for all agents (admin, APIs, personal tools). */
const DISALLOW = ["/admin", "/api", "/prep-sheet"] as const;

/**
 * Explicit allow for AI search / retrieval crawlers.
 * Specific user-agent groups replace `*` for that bot, so they share the same
 * private-path disallow list. Training bots (GPTBot, ClaudeBot) stay allowed
 * while we want AI citation; split them later if product policy changes.
 */
const AI_CRAWLER_USER_AGENTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  let host: string | undefined;
  try {
    host = new URL(SITE_URL).host;
  } catch {
    host = undefined;
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [...DISALLOW],
      },
      {
        userAgent: [...AI_CRAWLER_USER_AGENTS],
        allow: "/",
        disallow: [...DISALLOW],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    ...(host ? { host } : {}),
  };
}
