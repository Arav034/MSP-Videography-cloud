import FocusFrame from "@/components/ui/FocusFrame";

export default function SubServiceCard({ title, desc, tag }) {
  return (
    <FocusFrame padding="p-0" className="block h-full w-full">
      <div className="h-full border border-mist bg-white p-6 flex flex-col gap-2 transition-colors duration-300 hover:border-brand">
        <h3 className="font-display text-lg text-ink leading-snug">{title}</h3>
        {tag && (
          <p className="font-mono text-xs tracking-wideish uppercase text-brand italic">
            {tag}
          </p>
        )}
        {desc && (
          <p className="text-sm text-steel leading-relaxed mt-1">{desc}</p>
        )}
      </div>
    </FocusFrame>
  );
}