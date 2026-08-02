import { cn } from "@/utils/cn";

/** Small inline spinner for buttons mid-submit. */
export default function Spinner({ className = "" }) {
  return (
    <span
      className={cn(
        "inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin",
        className
      )}
      aria-hidden="true"
    />
  );
}