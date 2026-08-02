import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mic, X, FileImage, FileVideo, Play } from "lucide-react";
import Dropzone from "@/components/common/Dropzone";
import SectionHeading from "@/components/common/SectionHeading";
import DubbingFileCard from "@/components/cards/DubbingFileCard";
import FilePreviewModal from "@/components/common/FilePreviewModal";
import { useUpload } from "@/hooks/useUpload";
import { ROUTES } from "@/constants/routes";

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function UploadSection() {
  const {
    files,
    addFiles,
    removeFile,
    dubbingFiles,
    addDubbingFiles,
    removeDubbingFile,
    setDubbingLanguage,
  } = useUpload();
  const navigate = useNavigate();
  const [previewFile, setPreviewFile] = useState(null);
  const hasAnyFiles = files.length > 0 || dubbingFiles.length > 0;
  return (
    <section
      id="upload-section"
      className="relative border-y border-mist bg-gradient-to-b from-brand/5 via-frost to-frost"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(22,64,107,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,64,107,0.05), transparent)",
        backgroundSize: "20px 20px, 100% 100%",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-20">
        <SectionHeading eyebrow="Start a Project" title="Upload for Editing" align="center" />
        <p className="mt-4 text-steel text-center max-w-lg mx-auto">
          Have raw photos or footage ready? Upload them here and tell us what
          you need — our editing team will take it from there.
        </p>

        <div className="mt-10 bg-white p-1 shadow-sm">
          <Dropzone onFiles={addFiles} accept="image/*,video/*" />
        </div>

        {files.length > 0 && (
          <div className="mt-8">
            <p className="font-mono text-xs tracking-wideish uppercase text-steel mb-4">
              {files.length} file{files.length > 1 ? "s" : ""} added
            </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {files.map((f) => (
                <div
                  key={f.id}
                  onClick={() => setPreviewFile(f)}
                  className="relative aspect-square bg-mist border border-mist group cursor-pointer"
                >
                  {f.type === "image" ? (
                    <img src={f.previewUrl} alt={f.name} className="w-full h-full object-cover" />
                  ) : (
                    <video src={f.previewUrl} muted playsInline className="w-full h-full object-cover" />
                  )}

                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-300" />

                  {f.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                        <Play size={16} className="text-ink ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(f.id);
                    }}
                    className="absolute top-2 right-2 w-6 h-6 bg-ink/70 text-white flex items-center justify-center
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label={`Remove ${f.name}`}
                  >
                    <X size={14} />
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center gap-1.5 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {f.type === "image" ? (
                      <FileImage size={12} className="text-white shrink-0" />
                    ) : (
                      <FileVideo size={12} className="text-white shrink-0" />
                    )}
                    <span className="text-[10px] text-white truncate">{formatSize(f.size)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dubbing audio upload */}
        <div className="mt-12 border-t border-mist pt-10">
          <div className="flex items-center gap-2 mb-4">
            <Mic size={16} className="text-brand" />
            <p className="font-mono text-xs tracking-widest2 uppercase text-steel">
              Dubbing Audio (Optional)
            </p>
          </div>
          <p className="text-sm text-steel mb-5">
            Have a voice-over or dubbing track to sync with the edit? Upload
            it here and select the language.
          </p>

          <div className="bg-white p-1 shadow-sm">
            <Dropzone
              onFiles={addDubbingFiles}
              accept="audio/*"
              label="Drag & drop your dubbing audio files"
              hint="Audio Files Accepted"
            />
          </div>

          {dubbingFiles.length > 0 && (
            <div className="mt-6 flex flex-col gap-3">
              {dubbingFiles.map((f) => (
                <DubbingFileCard
                  key={f.id}
                  file={f}
                  onRemove={removeDubbingFile}
                  onLanguageChange={setDubbingLanguage}
                />
              ))}
            </div>
          )}
        </div>
        
        {hasAnyFiles && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => navigate(ROUTES.SERVICE_REQUEST)}
              className="btn-primary"
            >
              Next: Add Project Details
            </button>
          </div>
        )}
      </div>

      <FilePreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />
    </section>
  );
}