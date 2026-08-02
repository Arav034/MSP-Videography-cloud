import { Link } from "react-router-dom";
import { Inbox } from "lucide-react";
import RequestCard from "@/components/cards/RequestCard";
import { useRequests } from "@/hooks/useRequests";
import { ROUTES } from "@/constants/routes";

export default function MyRequests() {
  const { requests } = useRequests();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="eyebrow mb-3">Editing & Custom Work</p>
          <h1 className="font-display text-4xl">My Requests</h1>
        </div>
        <Link to={ROUTES.HOME} className="btn-primary">
          New Request
        </Link>
      </div>

      <p className="text-xs text-steel font-mono mb-10">
        Note: requests are stored in this browser session only — no backend
        is connected yet, so this list clears on refresh.
      </p>

      {requests.length > 0 ? (
        <div className="flex flex-col gap-4">
          {requests.map((r) => (
            <RequestCard key={r.id} {...r} />
          ))}
        </div>
      ) : (
        <div className="border border-dashed border-mist bg-white p-16 flex flex-col items-center text-center">
          <Inbox size={28} className="text-steel mb-4" strokeWidth={1.5} />
          <p className="text-steel">No requests submitted yet.</p>
          <Link to={ROUTES.HOME} className="btn-ghost mt-6">
            Upload Files to Get Started
          </Link>
        </div>
      )}
    </div>
  );
}