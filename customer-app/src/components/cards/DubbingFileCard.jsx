import { Mic, X } from "lucide-react";
import { DUBBING_LANGUAGES } from "@/constants/languages";

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function DubbingFileCard({ file, onRemove, onLanguageChange }) {
  return (
    <div className="border border-mist bg-white p-4 flex items-center gap-4">
      <div className="w-10 h-10 flex items-center justify-center bg-brand/10 text-brand shrink-0">
        <Mic size={18} strokeWidth={1.5} />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-ink truncate">{file.name}</p>
        <p className="text-xs text-steel font-mono">{formatSize(file.size)}</p>
      </div>

      <select
        value={file.language}
        onChange={(e) => onLanguageChange(file.id, e.target.value)}
        className="border border-mist bg-white px-3 py-2 text-xs font-mono uppercase tracking-wideish text-ink
                   focus:outline-none focus:border-brand transition-colors duration-300 shrink-0"
      >
        <option value="" disabled>
          Language
        </option>
        {DUBBING_LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => onRemove(file.id)}
        className="text-steel hover:text-red-500 transition-colors shrink-0"
        aria-label={`Remove ${file.name}`}
      >
        <X size={16} />
      </button>
    </div>
  );
}