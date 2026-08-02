import { cn } from "@/utils/cn";

/**
 * Wraps any element with a viewfinder-style corner-bracket frame
 * that reveals on hover/focus — the app's signature motif.
 */
export default function FocusFrame({ children, className = "", padding = "p-2" }) {
  const corner = "absolute w-3 h-3 border-brand opacity-0 scale-95 " +
    "transition-all duration-300 ease-frame group-hover:opacity-100 " +
    "group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:scale-100";

  return (
    <span className={cn("group relative inline-block", padding, className)}>
      <span className={cn(corner, "top-0 left-0 border-t-2 border-l-2")} />
      <span className={cn(corner, "top-0 right-0 border-t-2 border-r-2")} />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2")} />
      {children}
    </span>
  );
}