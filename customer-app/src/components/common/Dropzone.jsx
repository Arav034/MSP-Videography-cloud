import { useState, useRef } from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/utils/cn";

export default function Dropzone({ onFiles, accept = "image/*,video/*", label, hint }) {
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
      onClick={() => inputRef.current?.click()}
      className={cn(
        "border-2 border-dotted border-white px-6 py-14 flex flex-col items-center justify-center text-center cursor-pointer",
        "transition-all duration-300",
        dragging
          ? "bg-[#173562] shadow-[0_0_35px_8px_rgba(59,130,246,0.45)]"
          : "bg-[#12294a] shadow-[0_0_25px_2px_rgba(59,130,246,0.2)]"
      )}
    >
      <UploadCloud
        size={32}
        strokeWidth={1.5}
        className={cn("mb-4", dragging ? "text-brand-light" : "text-brand-light/70")}
      />
      <p className="font-display text-lg text-frost mb-1">
        {label ?? "Drag & drop your photos or videos"}
      </p>
      <p className="text-sm text-frost/60 mb-4">or click to browse from your device</p>
      <span className="font-mono text-[11px] tracking-widest2 uppercase text-white">
        {hint ?? "Images & Videos Accepted"}
      </span>
      
      
      
      <input
        ref={inputRef}
        type="file"
        multiple
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}