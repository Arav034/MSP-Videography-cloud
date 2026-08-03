import { Link } from "react-router-dom";
import { BOOKINGS } from "@/constants/dashboardContent";
import BookingCard from "@/components/cards/BookingCard";
import { ROUTES } from "@/constants/routes";

export default function Bookings() {
  const upcoming = BOOKINGS.filter((b) => b.status !== "Completed");
  const past = BOOKINGS.filter((b) => b.status === "Completed");

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="eyebrow mb-3">Sessions</p>
          <h1 className="font-display text-4xl">My Bookings</h1>
        </div>
        <Link to={ROUTES.BOOK} className="btn-primary">
          New Booking
        </Link>
      </div>

      <section className="mb-12">
        <h2 className="text-sm tracking-wideish uppercase text-steel mb-4">
          Upcoming
        </h2>
        <div className="flex flex-col gap-4">
          {upcoming.length > 0 ? (
            upcoming.map((b) => <BookingCard key={b.id} {...b} />)
          ) : (
            <p className="text-steel text-sm">No upcoming sessions yet.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-sm tracking-wideish uppercase text-steel mb-4">
          Past
        </h2>
        <div className="flex flex-col gap-4">
          {past.length > 0 ? (
            past.map((b) => <BookingCard key={b.id} {...b} />)
          ) : (
            <p className="text-steel text-sm">No past sessions.</p>
          )}
        </div>
      </section>
    </div>
  );
}