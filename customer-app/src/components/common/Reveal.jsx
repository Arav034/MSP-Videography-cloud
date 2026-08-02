import { useInView } from "@/hooks/useInView";
import { cn } from "@/utils/cn";

/** Wraps any section — fades + slides up into place once scrolled into view. */
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isInView ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-frame",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
}