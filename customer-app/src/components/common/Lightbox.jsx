import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ items, activeIndex, onClose, onNavigate }) {
  const item = items[activeIndex];

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((activeIndex - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-frost/70 hover:text-frost transition-colors"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-4 md:left-8 text-frost/70 hover:text-frost transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full flex flex-col items-center"
      >
        <img
          src={item.img}
          alt={item.title}
          className="max-h-[75vh] w-auto object-contain border border-white/10"
        />
        <div className="mt-5 text-center">
          <p className="font-mono text-xs tracking-widest2 uppercase text-frost/50">
            {item.category}
          </p>
          <p className="font-display text-xl text-frost mt-1">{item.title}</p>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % items.length);
        }}
        className="absolute right-4 md:right-8 text-frost/70 hover:text-frost transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}