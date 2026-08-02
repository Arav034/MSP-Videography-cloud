import { cn } from "@/utils/cn";

export default function CategoryTabs({ categories, activeId, onChange }) {
  return (
    <div
      role="tablist"
      aria-label="Service categories"
      className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none"
    >
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(cat.id)}
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
              const idx = categories.findIndex((c) => c.id === activeId);
              const next =
                e.key === "ArrowRight"
                  ? categories[(idx + 1) % categories.length]
                  : categories[(idx - 1 + categories.length) % categories.length];
              onChange(next.id);
            }}
            className={cn(
              "shrink-0 whitespace-nowrap px-5 py-2 text-sm tracking-wideish uppercase font-mono",
              "border transition-colors duration-300 ease-frame focus:outline-none focus-visible:border-brand",
              isActive
                ? "bg-brand text-white border-brand"
                : "bg-white text-steel border-mist hover:border-brand hover:text-brand"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}