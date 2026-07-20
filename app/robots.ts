import type { MetadataRoute } from "next";
import { absoluteUrl, SITE_URL } from "@/lib/seo/metadata";

export default function robots(): MetadataRoute.Robots {
  let host: string | undefined;
  try {
    host = new URL(SITE_URL).host;
  } catch {
    host = undefined;
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api", "/prep-sheet"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    ...(host ? { host } : {}),
  };
}
