import type { ReactNode } from "react";
import type { DecisionMarkId } from "@/lib/brand/situation-marks";
import { cn } from "@/lib/utils";

export type { DecisionMarkId };

type MarkProps = {
  className?: string;
  title?: string;
};

function MarkFrame({
  className,
  title,
  children,
}: MarkProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      className={cn("size-[1.15em] shrink-0", className)}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Clipboard / first clarity */
export function DiagnosisMark({ className, title }: MarkProps) {
  return (
    <MarkFrame className={className} title={title}>
      <rect x="6" y="5" width="12" height="15" rx="1.5" {...stroke} />
      <path d="M9 5.5V4.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4.5v1" {...stroke} />
      <path d="M9 11h6M9 14.5h4" {...stroke} />
    </MarkFrame>
  );
}

/** Linked nodes — testing / biomarker */
export function TestingMark({ className, title }: MarkProps) {
  return (
    <MarkFrame className={className} title={title}>
      <circle cx="7" cy="12" r="2.25" {...stroke} />
      <circle cx="17" cy="7.5" r="2.25" {...stroke} />
      <circle cx="17" cy="16.5" r="2.25" {...stroke} />
      <path d="M9.1 11.1 14.9 8.4M9.1 12.9l5.8 2.7" {...stroke} />
    </MarkFrame>
  );
}

/** Forked path — choosing a plan */
export function TreatmentMark({ className, title }: MarkProps) {
  return (
    <MarkFrame className={className} title={title}>
      <circle cx="6.5" cy="12" r="2" {...stroke} />
      <path d="M8.5 12h4.5" {...stroke} />
      <path d="M13 12 17.5 7.5" {...stroke} />
      <path d="M13 12 17.5 16.5" {...stroke} />
      <circle cx="18.5" cy="7" r="2" {...stroke} />
      <circle cx="18.5" cy="17" r="2" {...stroke} />
    </MarkFrame>
  );
}

/** Return arc — follow-up / monitoring */
export function FollowUpMark({ className, title }: MarkProps) {
  return (
    <MarkFrame className={className} title={title}>
      <circle cx="12" cy="12" r="6.5" {...stroke} />
      <path d="M12 8.5v3.5l2.5 1.5" {...stroke} />
      <path d="M16.2 9.2 18 7.5M16.2 9.2 17.8 11" {...stroke} />
    </MarkFrame>
  );
}

/** Shared path node — previous / current / next on the map */
export function DecisionNodeMark({
  className,
  title,
  active = false,
}: MarkProps & { active?: boolean }) {
  return (
    <MarkFrame className={className} title={title}>
      <circle
        cx="12"
        cy="12"
        r="5.5"
        {...stroke}
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.12 : undefined}
      />
      <circle
        cx="12"
        cy="12"
        r={active ? 2.25 : 1.75}
        fill="currentColor"
        stroke="none"
      />
    </MarkFrame>
  );
}

const MARK_BY_ID = {
  diagnosis: DiagnosisMark,
  testing: TestingMark,
  treatment: TreatmentMark,
  followUp: FollowUpMark,
} as const;

export function DecisionMark({
  id,
  className,
  title,
}: MarkProps & { id: DecisionMarkId }) {
  const Icon = MARK_BY_ID[id];
  return <Icon className={className} title={title} />;
}

/** Badge used in lists / journey steps */
export function DecisionMarkBadge({
  id,
  active = false,
  className,
  label,
}: {
  id: DecisionMarkId;
  active?: boolean;
  className?: string;
  /** Accessible name when the nearby text does not already name the mark */
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-full border",
        active
          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
          : "border-[var(--line)] bg-[var(--paper)] text-[var(--accent)]",
        className
      )}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <DecisionMark id={id} className="size-[0.95rem]" />
    </span>
  );
}

export function DecisionNodeBadge({
  active = false,
  className,
  label,
}: {
  active?: boolean;
  className?: string;
  label?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-7 shrink-0 items-center justify-center rounded-full border",
        active
          ? "border-[var(--accent)] bg-[var(--accent)] text-white"
          : "border-[var(--line)] bg-[var(--paper)] text-[var(--accent)]",
        className
      )}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <DecisionNodeMark
        active={active}
        className={active ? "size-[0.95rem] text-white" : "size-[0.95rem]"}
      />
    </span>
  );
}
