import { Calendar, Clock, MapPin } from "lucide-react";
import StatusBadge from "@/components/common/StatusBadge";

export default function BookingCard({ service, date, time, location, status }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="border border-mist bg-white p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h3 className="font-display text-xl text-ink mb-2">{service}</h3>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-steel">
          <span className="flex items-center gap-2">
            <Calendar size={15} /> {formattedDate}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={15} /> {time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={15} /> {location}
          </span>
        </div>
      </div>
      <StatusBadge status={status} />
    </div>
  );
}