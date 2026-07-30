/**
 * IndexNow — notify Bing (and participating engines) of URL updates.
 * Key file is public by design: /{INDEXNOW_KEY}.txt
 */

import { LUNG_AI_ENTRY_PORTFOLIO } from "@/lib/seo/ai-entry-portfolio";
import { BREAST_AI_ENTRY_PORTFOLIO } from "@/lib/seo/breast-ai-entry-portfolio";
import {
  BREAST_SUPPORTING_GUIDE_PATHS,
  LUNG_SUPPORTING_GUIDE_PATHS,
  PROSTATE_SUPPORTING_GUIDE_PATHS,
} from "@/lib/seo/indexing";
import { absoluteUrl, SITE_URL } from "@/lib/seo/metadata";
import { PROSTATE_AI_ENTRY_PORTFOLIO } from "@/lib/seo/prostate-ai-entry-portfolio";

/** Public IndexNow key (also hosted at /{key}.txt). Override via env in deploy. */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY ?? "bcaf2f2e4bdcbe37ec1271f1b658b925";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

export function indexNowKeyLocation(): string {
  return absoluteUrl(`/${INDEXNOW_KEY}.txt`);
}

export function indexNowPriorityUrls(): string[] {
  const paths = [
    "/",
    "/cancers/lung-cancer",
    "/cancers/breast-cancer",
    "/cancers/prostate-cancer",
    ...LUNG_SUPPORTING_GUIDE_PATHS,
    ...BREAST_SUPPORTING_GUIDE_PATHS,
    ...PROSTATE_SUPPORTING_GUIDE_PATHS,
    ...LUNG_AI_ENTRY_PORTFOLIO.map((e) => `/questions/${e.slug}`),
    ...BREAST_AI_ENTRY_PORTFOLIO.map((e) => `/questions/${e.slug}`),
    ...PROSTATE_AI_ENTRY_PORTFOLIO.map((e) => `/questions/${e.slug}`),
    "/llms.txt",
    "/llms-full.txt",
  ];
  return [...new Set(paths.map((path) => absoluteUrl(path)))];
}

export async function submitIndexNow(
  urls: string[] = indexNowPriorityUrls()
): Promise<{ ok: boolean; status: number; submitted: number; body: string }> {
  let host: string;
  try {
    host = new URL(SITE_URL).host;
  } catch {
    return {
      ok: false,
      status: 0,
      submitted: 0,
      body: "Invalid SITE_URL",
    };
  }

  if (host.includes("localhost")) {
    return {
      ok: false,
      status: 0,
      submitted: 0,
      body: "Skip IndexNow on localhost",
    };
  }

  const unique = [...new Set(urls)].filter((url) => {
    try {
      return new URL(url).host === host;
    } catch {
      return false;
    }
  });

  if (unique.length === 0) {
    return { ok: false, status: 0, submitted: 0, body: "No URLs to submit" };
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: indexNowKeyLocation(),
      urlList: unique.slice(0, 10000),
    }),
  });

  const body = await response.text();
  // 200 / 202 accepted; 204 no content also treated as success by some endpoints
  const ok = response.status === 200 || response.status === 202 || response.status === 204;
  return {
    ok,
    status: response.status,
    submitted: unique.length,
    body: body || response.statusText,
  };
}
