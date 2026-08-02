import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_ITEMS } from "@/constants/navContent";
import { ROUTES } from "@/constants/routes";

export default function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();

  // Auto-close whenever the route changes (e.g. user taps a link).
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock background scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-ink/50 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-screen w-72 bg-frost border-l border-mist flex flex-col md:hidden",
          "transition-transform duration-300 ease-frame",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-mist">
          <span className="font-display text-lg tracking-wideish text-ink">Menu</span>
          <button
            onClick={onClose}
            className="text-steel hover:text-ink transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item, idx) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              style={{ transitionDelay: open ? `${idx * 60 + 100}ms` : "0ms" }}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 text-sm tracking-wideish uppercase",
                  "transition-all duration-300 ease-frame",
                  open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0",
                  isActive
                    ? "text-brand bg-brand/5 border-l-2 border-brand"
                    : "text-steel hover:text-ink hover:bg-white/60"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
          
        <div
          style={{ transitionDelay: open ? `${NAV_ITEMS.length * 60 + 100}ms` : "0ms" }}
          className={cn(
            "p-4 border-t border-mist transition-all duration-300 ease-frame",
            open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          )}
        >
          <Link to={ROUTES.BOOK} className="btn-primary w-full justify-center">
            Book a Session
          </Link>
        </div>
      </aside>
    </>
  );
}