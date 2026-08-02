import { FileImage, FileVideo } from "lucide-react";
import StatusBadge from "@/components/common/StatusBadge";

export default function RequestCard({ serviceTitle, submittedAt, budget, deadline, description, fileCount, status }) {
  const formattedSubmitted = new Date(submittedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="border border-mist bg-white p-6">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-display text-xl text-ink">{serviceTitle || "General Request"}</h3>
        <StatusBadge status={status} />
      </div>

      {description && (
        <p className="text-sm text-steel leading-relaxed mb-4">{description}</p>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-steel">
        <span>Submitted {formattedSubmitted}</span>
        {budget && <span>Budget: {budget}</span>}
        {deadline && (
          <span>
            Deadline: {new Date(deadline).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
          </span>
        )}
        {fileCount > 0 && (
          <span className="flex items-center gap-1">
            <FileImage size={12} />
            {fileCount} file{fileCount > 1 ? "s" : ""} attached
          </span>
        )}
      </div>
    </div>
  );
}