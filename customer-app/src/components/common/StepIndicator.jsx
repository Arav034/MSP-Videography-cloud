import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

export default function StepIndicator({ labels, currentIndex }) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      {labels.map((label, idx) => {
        const isComplete = idx < currentIndex;
        const isActive = idx === currentIndex;
        return (
          <div key={label} className="flex items-center gap-2 md:gap-4">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "w-8 h-8 flex items-center justify-center border text-xs font-mono",
                  isComplete && "bg-brand border-brand text-white",
                  isActive && !isComplete && "border-brand text-brand",
                  !isActive && !isComplete && "border-mist text-steel"
                )}
              >
                {isComplete ? <Check size={14} /> : idx + 1}
              </div>
              <span
                className={cn(
                  "hidden sm:block text-[11px] font-mono tracking-wideish uppercase",
                  isActive || isComplete ? "text-ink" : "text-steel"
                )}
              >
                {label}
              </span>
            </div>
            {idx < labels.length - 1 && (
              <div className={cn("w-8 md:w-16 h-px", isComplete ? "bg-brand" : "bg-mist")} />
            )}
          </div>
        );
      })}
    </div>
  );
}