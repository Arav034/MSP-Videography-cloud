import FocusFrame from "@/components/ui/FocusFrame";

export default function ValueCard({ icon: Icon, title, desc }) {
  return (
    <FocusFrame padding="p-0" className="block h-full w-full">
      <div className="h-full border border-mist bg-white p-8 flex flex-col gap-4 transition-colors duration-300 hover:border-brand">
        <Icon size={26} className="text-brand" strokeWidth={1.5} />
        <h3 className="font-display text-xl text-ink">{title}</h3>
        <p className="text-sm text-steel leading-relaxed">{desc}</p>
      </div>
    </FocusFrame>
  );
}