import { cn } from "@/utils/cn";

/** Generic pulsing placeholder block — pass any width/height via className. */
export default function Skeleton({ className = "" }) {
  return (
    <div
      className={cn("animate-pulse bg-mist", className)}
      aria-hidden="true"
    />
  );
}