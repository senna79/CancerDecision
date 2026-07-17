export function id(prefix: string, n: number): string {
  return `${prefix}-${String(n).padStart(4, "0")}`;
}

export function now(): string {
  return "2026-07-01T00:00:00.000Z";
}
