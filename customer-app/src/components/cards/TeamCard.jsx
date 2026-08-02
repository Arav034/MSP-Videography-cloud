import { useState } from "react";
import FocusFrame from "@/components/ui/FocusFrame";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/utils/cn";

export default function TeamCard({ name, role, img }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <FocusFrame padding="p-0" className="block w-full">
      <div className="border border-mist bg-white overflow-hidden">
        <div className="relative aspect-[4/5] bg-mist">
          {!loaded && <Skeleton className="absolute inset-0" />}
          <img
            src={img}
            alt={name}
            onLoad={() => setLoaded(true)}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
        <div className="p-5">
          <p className="font-display text-lg text-ink">{name}</p>
          <p className="font-mono text-xs tracking-wideish uppercase text-steel mt-1">
            {role}
          </p>
        </div>
      </div>
    </FocusFrame>
  );
}