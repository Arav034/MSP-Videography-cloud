import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import FocusFrame from "@/components/ui/FocusFrame";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/utils/cn";
import { ROUTES } from "@/constants/routes";

export default function ServiceCategoryCard({ id, label, count, icon: Icon, img }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <FocusFrame padding="p-0" className="block h-full w-full">
      <Link
        to={`${ROUTES.SERVICES}?category=${id}`}
        className="group/cat block h-full border border-mist bg-white overflow-hidden
                   transition-colors duration-300 hover:border-brand"
      >
        <div className="relative aspect-[4/5] bg-mist overflow-hidden">
          {!loaded && <Skeleton className="absolute inset-0" />}
          <img
            src={img}
            alt={label}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={cn(
              "w-full h-full object-cover transition-all duration-500 ease-frame group-hover/cat:scale-105",
              loaded ? "opacity-100" : "opacity-0"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

          <div className="absolute top-5 left-5 w-11 h-11 flex items-center justify-center bg-white/90 backdrop-blur-sm text-brand">
            <Icon size={20} strokeWidth={1.5} />
          </div>

          <ArrowUpRight
            size={18}
            className="absolute top-5 right-5 text-white opacity-0 -translate-x-1 translate-y-1 group-hover/cat:opacity-100 group-hover/cat:translate-x-0 group-hover/cat:translate-y-0 transition-all duration-300 ease-frame"
          />

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-display text-2xl text-white mb-1">{label}</h3>
            <p className="font-mono text-xs tracking-wideish uppercase text-white/70">
              {count} {count === 1 ? "Service" : "Services"}
            </p>
          </div>
        </div>
      </Link>
    </FocusFrame>
  );
}