import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

export default function SplashScreen({ onFinish }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 1200);
    const removeTimer = setTimeout(() => onFinish(), 1600);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden",
        "transition-opacity duration-500 ease-frame",
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
      style={{
        background:
          "radial-gradient(circle at 50% 42%, #0a1220 0%, #050914 55%, #020509 100%)",
      }}
    >
      {/* ambient pulsing glow behind the logo */}
      <div className="absolute w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full bg-brand/30 blur-[100px] animate-pulse-glow" />

      <img
        src="/splash-logo.jpg"
        alt="MSP Videography"
        className="relative w-64 sm:w-80 md:w-96 animate-splash-in"
        style={{
          maskImage: "radial-gradient(circle, black 62%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle, black 62%, transparent 100%)",
        }}
      />

      <div className="relative mt-8 flex flex-col items-center gap-4">
        <div className="w-9 h-9 border-2 border-white/10 border-t-brand-light rounded-full animate-spin" />
        <p className="font-mono text-[11px] tracking-widest2 uppercase text-frost/40">
          Loading Studio
        </p>
      </div>
    </div>
  );
}