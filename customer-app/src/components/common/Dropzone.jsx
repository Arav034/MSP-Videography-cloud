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
        "border-2 border-dashed px-6 py-14 flex flex-col items-center justify-center text-center cursor-pointer",
        "transition-colors duration-300",
        dragging ? "border-brand bg-brand/5" : "border-mist bg-white hover:border-brand/50"
      )}
    >
      <UploadCloud
        size={32}
        strokeWidth={1.5}
        className={cn("mb-4", dragging ? "text-brand" : "text-steel")}
      />
     <p className="font-display text-lg text-ink mb-1">
        {label ?? "Drag & drop your photos or videos"}
      </p>
      <p className="text-sm text-steel mb-4">or click to browse from your device</p>
      <span className="font-mono text-[11px] tracking-widest2 uppercase text-steel/70">
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