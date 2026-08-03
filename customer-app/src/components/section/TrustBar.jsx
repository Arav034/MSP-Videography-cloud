import { STUDIO_STATS } from "@/constants/aboutContent";
import AnimatedCounter from "@/components/common/AnimatedCounter";

export default function TrustBar() {
  return (
    <section className="border-y border-mist bg-white/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STUDIO_STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl md:text-4xl text-brand">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-widest2 uppercase text-steel">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}