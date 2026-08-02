import { useEffect } from "react";
import { X } from "lucide-react";

export default function FilePreviewModal({ file, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!file) return null;

  return (
    <div
      className="fixed inset-0 z-[150] bg-ink/90 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-frost/70 hover:text-frost transition-colors"
        aria-label="Close preview"
      >
        <X size={28} />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full flex flex-col items-center"
      >
        {file.type === "video" ? (
          <div className="relative group/video max-h-[75vh]">
            <video
              src={file.previewUrl}
              controls
              autoPlay
              className="max-h-[75vh] w-auto border border-white/10 bg-black"
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 bg-ink/70 text-white flex items-center justify-center
                         opacity-0 group-hover/video:opacity-100 transition-opacity duration-300"
              aria-label="Close preview"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <img
            src={file.previewUrl}
            alt={file.name}
            className="max-h-[75vh] w-auto object-contain border border-white/10"
          />
        )}

        <p className="mt-4 font-mono text-xs text-frost/60 truncate max-w-full">
          {file.name}
        </p>
      </div>
    </div>
  );
}