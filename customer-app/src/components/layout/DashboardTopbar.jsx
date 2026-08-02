import { Menu, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "@/hooks/useSidebar";
import { ROUTES } from "@/constants/routes";

const TITLES = {
  "/dashboard": "Overview",
  "/dashboard/bookings": "My Bookings",
  "/dashboard/galleries": "Galleries",
  "/dashboard/invoices": "Invoices",
  "/dashboard/profile": "Profile",
};

export default function DashboardTopbar() {
  const { toggleMobile } = useSidebar();
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-30 bg-frost/90 backdrop-blur border-b border-mist h-20 flex items-center justify-between px-6 md:px-10">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMobile}
          className="md:hidden text-ink"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <h2 className="font-display text-2xl text-ink">
          {TITLES[pathname] ?? "Dashboard"}
        </h2>
      </div>

      <Link
        to={ROUTES.HOME}
        className="flex items-center gap-2 text-sm text-steel hover:text-brand transition-colors duration-300"
      >
        <ArrowLeft size={16} />
        Back to Site
      </Link>
    </header>
  );
}