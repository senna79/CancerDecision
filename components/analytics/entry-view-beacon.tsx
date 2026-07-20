"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics/track";

/** Fires once when an AI Entry / Decision page mounts. */
export function EntryViewBeacon({
  slug,
  template,
}: {
  slug: string;
  template: "v2" | "v1" | "classic";
}) {
  useEffect(() => {
    trackEvent("entry_view", { slug, template });
  }, [slug, template]);

  return null;
}
