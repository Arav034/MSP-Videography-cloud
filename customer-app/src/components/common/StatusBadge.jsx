import { cn } from "@/utils/cn";

const STATUS_STYLES = {
  Confirmed: "bg-brand/10 text-brand border-brand/30",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Completed: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Ready: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Processing: "bg-amber-50 text-amber-700 border-amber-200",
  Paid: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Due: "bg-amber-50 text-amber-700 border-amber-200",
  Overdue: "bg-red-50 text-red-700 border-red-200",
};

export default function StatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono tracking-wideish uppercase",
        STATUS_STYLES[status] ?? "bg-mist text-steel border-mist"
      )}
    >
      {status}
    </span>
  );
}