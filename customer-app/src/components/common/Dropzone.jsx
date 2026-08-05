import { useState, useRef } from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Dropzone({
  onFiles,
  accept = "image/*,video/*",
  label,
  hint,
  description,
  buttonLabel,
  formats,
  sizeLimit,
}) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files?.length) onFiles(e.dataTransfer.files);
  };

  const handleChange = (e) => {
    if (e.target.files?.length) onFiles(e.target.files);
    e.target.value = "";
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      className={cn(
        "p-2 transition-colors duration-300 animate-glow-blink",
        dragging && "brightness-95"
      )}
      style={{
        backgroundImage: "linear-gradient(to bottom, #16406B 0%, #ffffff 100%)",
      }}
    >
      <div className="border-2 border-dotted border-brand px-6 py-12 flex flex-col items-center justify-center text-center">
        <UploadCloud
          size={32}
          strokeWidth={1.5}
          className="mb-4 text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
        />

        <p className="font-display text-lg text-white mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          {label ?? "Drag & drop your photos or videos"}
        </p>

        {description && (
          <p className="text-sm text-white/90 mb-5 max-w-sm drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            {description}
          </p>
        )}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="btn-primary mb-5"
        >
          {buttonLabel ?? "Select File"}
        </button>

        {formats && formats.length > 0 && (
          <p className="font-mono text-[11px] tracking-wideish text-brand-light mb-1">
            {formats.map((f) => `.${f}`).join("  ")}
          </p>
        )}

        {sizeLimit && (
          <span className="font-mono text-[11px] tracking-widest2 uppercase text-brand-light">
            {sizeLimit}
          </span>
        )}

        {!formats && (
          <span className="font-mono text-[11px] tracking-widest2 uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
            {hint ?? "Images & Videos Accepted"}
          </span>
        )}

        <input
          ref={inputRef}
          type="file"
          multiple
          accept={accept}
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
}