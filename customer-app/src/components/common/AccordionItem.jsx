import { Plus } from "lucide-react";
import { cn } from "@/utils/cn";

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-mist">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-ink">{question}</span>
        <Plus
          size={18}
          className={cn(
            "shrink-0 text-brand transition-transform duration-300 ease-frame",
            isOpen && "rotate-45"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300 ease-frame",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-steel leading-relaxed pb-5 pr-8">{answer}</p>
        </div>
      </div>
    </div>
  );
}