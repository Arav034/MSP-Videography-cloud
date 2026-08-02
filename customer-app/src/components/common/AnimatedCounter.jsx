import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

/** Counts up from 0 to the numeric part of `value` once in view. Preserves any suffix (e.g. "420+", "9+"). */
export default function AnimatedCounter({ value, duration = 1200 }) {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const [display, setDisplay] = useState("0");

  const numericMatch = String(value).match(/[\d.]+/);
  const target = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const suffix = numericMatch ? String(value).slice(numericMatch.index + numericMatch[0].length) : "";
  const prefix = numericMatch ? String(value).slice(0, numericMatch.index) : String(value);

  useEffect(() => {
    if (!isInView) return;

    let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);
      setDisplay(String(current));
      if (progress < 1) requestAnimationFrame(step);
      else setDisplay(String(target));
    }
    requestAnimationFrame(step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}