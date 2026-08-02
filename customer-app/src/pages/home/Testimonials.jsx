import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/utils/cn";
import { TESTIMONIALS } from "@/constants/homeContent";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-ink text-frost">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-24 text-center relative">
        <span className="font-mono text-xs tracking-widest2 uppercase text-frost/50">
          Client Words
        </span>

        <Quote size={32} className="mx-auto mt-8 mb-6 text-brand-light" strokeWidth={1.2} />

        <div className="flex items-center justify-center gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < t.rating ? "fill-amber-400 text-amber-400" : "text-frost/20"}
            />
          ))}
        </div>

        <p
          key={index}
          className="font-display text-2xl md:text-3xl leading-relaxed text-frost/95 min-h-[7rem] md:min-h-[5rem] transition-opacity duration-500"
        >
          "{t.quote}"
        </p>

        <p className="mt-6 font-mono text-xs tracking-wideish uppercase text-frost/50">
          {t.name} — {t.context}
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
            className="text-frost/50 hover:text-frost transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  i === index ? "bg-brand-light w-6" : "bg-frost/30"
                )}
              />
            ))}
          </div>

          <button
            onClick={() => setIndex((i) => (i + 1) % TESTIMONIALS.length)}
            className="text-frost/50 hover:text-frost transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}