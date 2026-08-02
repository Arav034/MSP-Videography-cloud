import { useState } from "react";
import { Download, ImageOff } from "lucide-react";
import StatusBadge from "@/components/common/StatusBadge";
import FocusFrame from "@/components/ui/FocusFrame";
import Skeleton from "@/components/common/Skeleton";
import { cn } from "@/utils/cn";

export default function GalleryCard({ title, date, coverImg, photoCount, status }) {
  const [loaded, setLoaded] = useState(false);
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <FocusFrame padding="p-0" className="block w-full">
      <div className="border border-mist bg-white overflow-hidden">
       <div className="relative aspect-[4/3] bg-mist">
          {status === "Ready" ? (
            <>
              {!loaded && <Skeleton className="absolute inset-0" />}
              <img
                src={coverImg}
                alt={title}
                onLoad={() => setLoaded(true)}
                className={cn(
                  "w-full h-full object-cover transition-opacity duration-500",
                  loaded ? "opacity-100" : "opacity-0"
                )}
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-steel">
              <ImageOff size={28} strokeWidth={1.5} />
            </div>
          )}
        </div>

        <div className="p-5 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg text-ink leading-snug">{title}</h3>
            <StatusBadge status={status} />
          </div>
          <p className="text-xs text-steel font-mono">
            {formattedDate} · {photoCount} photos
          </p>

          {status === "Ready" && (
            <button className="btn-ghost text-xs mt-2 self-start">
              <Download size={14} /> Download
            </button>
          )}
        </div>
      </div>
    </FocusFrame>
  );
}