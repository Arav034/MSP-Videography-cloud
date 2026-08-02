import { useState } from "react";
import { Link } from "react-router-dom";
import { Flame, X } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-center gap-3 text-sm relative">
        <Flame size={16} className="shrink-0 text-amber-300" />
        <span className="font-mono tracking-wideish text-xs md:text-sm text-center">
          Only a few booking slots left this month —{" "}
          <Link to={ROUTES.BOOK} className="underline underline-offset-2 hover:text-amber-200">
            reserve yours today
          </Link>
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-4 md:right-10 text-white/70 hover:text-white transition-colors"
          aria-label="Dismiss"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}