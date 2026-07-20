"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/track";

/** Fires once when Explore Care Options mounts. */
export function CareOptionsViewBeacon({ source }: { source: string }) {
  useEffect(() => {
    trackEvent("care_options_view", { source });
  }, [source]);

  return null;
}
