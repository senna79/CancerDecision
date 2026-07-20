"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import {
  trackEvent,
  type AnalyticsEvent,
} from "@/lib/analytics/track";

type Props = ComponentProps<typeof Link> & {
  event: AnalyticsEvent;
  eventProps?: Record<string, string | number | boolean | null>;
};

/** Link that records a funnel event on click. */
export function TrackLink({
  event,
  eventProps,
  onClick,
  ...props
}: Props) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    trackEvent(event, eventProps);
    onClick?.(e);
  }

  return <Link {...props} onClick={handleClick} />;
}
