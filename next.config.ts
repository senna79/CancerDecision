import type { NextConfig } from "next";
import { RETIRED_LUNG_QUESTION_REDIRECTS } from "./lib/seo/retired-lung-questions";

const nextConfig: NextConfig = {
  async redirects() {
    return Object.entries(RETIRED_LUNG_QUESTION_REDIRECTS).map(
      ([sourceSlug, destination]) => ({
        source: `/questions/${sourceSlug}`,
        destination,
        permanent: true,
      })
    );
  },
};

export default nextConfig;
