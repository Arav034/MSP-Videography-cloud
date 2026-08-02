import { useState } from "react";
import FocusFrame from "@/components/ui/FocusFrame";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/utils/cn";

export default function WorkCard({ title, category, img }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <FocusFrame padding="p-0" className="block w-full group/card">
      <div className="relative overflow-hidden aspect-[4/5] bg-mist">
        {!loaded && <Skeleton className="absolute inset-0" />}
        <img
          src={img}
          alt={title}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 ease-frame group-hover/card:scale-105",
            loaded ? "opacity-100" : "opacity-0"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-300 ease-frame">
          <p className="font-mono text-[11px] tracking-widest2 uppercase text-frost/70">
            {category}
          </p>
          <p className="font-display text-lg text-frost">{title}</p>
        </div>
      </div>
    </FocusFrame>
  );
}