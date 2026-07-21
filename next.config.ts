import type { NextConfig } from "next";
import { BREAST_LEGACY_QUESTION_REDIRECTS } from "./lib/content/breast-entry-slugs";
import { RETIRED_LUNG_QUESTION_REDIRECTS } from "./lib/seo/retired-lung-questions";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...Object.entries(RETIRED_LUNG_QUESTION_REDIRECTS),
      ...Object.entries(BREAST_LEGACY_QUESTION_REDIRECTS),
    ].map(([sourceSlug, destination]) => ({
      source: `/questions/${sourceSlug}`,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
