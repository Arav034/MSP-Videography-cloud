import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

import {
  LayoutDashboard,
  CalendarCheck,
  Image as ImageIcon,
  Receipt,
  User,
  ChevronsLeft,
  ChevronsRight,
  LogOut,
  X,
  Inbox,
  ArrowLeftCircle,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { useSidebar } from "@/hooks/useSidebar";
import { ROUTES } from "@/constants/routes";

const NAV_ITEMS = [
  { label: "Overview", to: ROUTES.DASHBOARD, icon: LayoutDashboard, end: true },
  { label: "My Bookings", to: ROUTES.DASHBOARD_BOOKINGS, icon: CalendarCheck },
  { label: "My Requests", to: ROUTES.DASHBOARD_REQUESTS, icon: Inbox },
  { label: "Galleries", to: ROUTES.DASHBOARD_GALLERIES, icon: ImageIcon },
  { label: "Invoices", to: ROUTES.DASHBOARD_INVOICES, icon: Receipt },
  { label: "Profile", to: ROUTES.DASHBOARD_PROFILE, icon: User },
];

export default function Sidebar() {
  const { collapsed, toggleCollapsed, mobileOpen, closeMobile } = useSidebar();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      {mobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 bg-ink/40 z-40 md:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed md:sticky top-0 left-0 z-50 h-screen bg-ink text-frost flex flex-col shrink-0",
          "transition-all duration-300 ease-frame",
          collapsed ? "md:w-20" : "md:w-64",
          "w-64",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="h-20 flex items-center justify-between px-5 border-b border-white/10">
          {!collapsed && (
            <span className="font-display font-semibold text-xl tracking-wideish">
              MSP <span className="text-brand-light font-bold">VIDEOGRAPHY</span>
            </span>
          )}
          <button
            onClick={closeMobile}
            className="md:hidden text-frost/70 hover:text-frost"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 flex flex-col gap-1 px-3">
          {NAV_ITEMS.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              title={collapsed ? label : undefined}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-3 rounded-sm text-sm tracking-wideish uppercase",
                  "transition-colors duration-300 ease-frame text-frost/70 hover:text-frost hover:bg-white/5",
                  collapsed && "justify-center",
                  isActive && "bg-brand/20 text-frost border-l-2 border-brand-light"
                )
              }
            >
              <Icon size={18} className="shrink-0" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-white/10 px-3 py-4 flex flex-col gap-1">
          <Link
            to={ROUTES.HOME}
            title={collapsed ? "Back to Site" : undefined}
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-sm text-sm tracking-wideish uppercase",
              "text-frost/60 hover:text-frost hover:bg-white/5 transition-colors duration-300",
              collapsed && "justify-center"
            )}
          >
            <ArrowLeftCircle size={18} className="shrink-0" />
            {!collapsed && <span>Back to Site</span>}
          </Link>

          <button
            onClick={handleLogout}
            className={cn(
              "flex items-center gap-3 px-3 py-3 rounded-sm text-sm tracking-wideish uppercase",
              "text-frost/60 hover:text-frost hover:bg-white/5 transition-colors duration-300",
              collapsed && "justify-center"
            )}
            title={collapsed ? "Logout" : undefined}
          >
            <LogOut size={18} className="shrink-0" />
            {!collapsed && <span>Logout</span>}
          </button>

          <button
            onClick={toggleCollapsed}
            className="hidden md:flex items-center gap-3 px-3 py-3 rounded-sm text-sm text-frost/60 hover:text-frost hover:bg-white/5 transition-colors duration-300"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronsRight size={18} /> : <ChevronsLeft size={18} />}
            {!collapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>
    </>
  );
}