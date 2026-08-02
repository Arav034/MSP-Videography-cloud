import { cn } from "@/utils/cn";
import FocusFrame from "@/components/ui/FocusFrame";
import { BOOKING_SERVICE_OPTIONS } from "@/constants/bookingContent";

export default function ServiceStep({ value, onChange, onNext }) {
  return (
    <div>
      <p className="eyebrow mb-2 text-center">Step 1 of 4</p>
      <h2 className="font-display text-3xl text-center mb-10">Choose a service</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BOOKING_SERVICE_OPTIONS.map((option) => {
          const isSelected = value?.title === option.title;
          return (
            <FocusFrame key={option.title} padding="p-0" className="block w-full">
              <button
                type="button"
                onClick={() => onChange(option)}
                className={cn(
                  "w-full h-full text-left border p-6 transition-colors duration-300",
                  isSelected ? "border-brand bg-brand/5" : "border-mist bg-white hover:border-brand"
                )}
              >
                <p className="font-mono text-xs tracking-wideish uppercase text-steel mb-2">
                  {option.category}
                </p>
                <p className="font-display text-lg text-ink">{option.title}</p>
              </button>
            </FocusFrame>
          );
        })}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          type="button"
          disabled={!value}
          onClick={onNext}
          className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  );
}