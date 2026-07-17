import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTENT_STATUSES } from "@/types/database";

export function Field({
  label,
  name,
  defaultValue,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  defaultValue?: string | null;
  required?: boolean;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue ?? ""}
        required={required}
      />
    </div>
  );
}

export function AreaField({
  label,
  name,
  defaultValue,
  rows = 5,
  hint,
}: {
  label: string;
  name: string;
  defaultValue?: string | null;
  rows?: number;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      {hint ? <p className="text-xs text-[var(--muted)]">{hint}</p> : null}
      <Textarea
        id={name}
        name={name}
        rows={rows}
        defaultValue={defaultValue ?? ""}
      />
    </div>
  );
}

export function StatusField({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="space-y-2">
      <Label htmlFor="status">Status</Label>
      <select
        id="status"
        name="status"
        defaultValue={defaultValue ?? "draft"}
        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
      >
        {CONTENT_STATUSES.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}
