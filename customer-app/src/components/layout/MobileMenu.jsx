import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { cn } from "@/utils/cn";
import { NAV_ITEMS } from "@/constants/navContent";
import { ROUTES } from "@/constants/routes";

export default function MobileMenu({ open, onClose }) {
  const { pathname } = useLocation();

  // Auto-close whenever the route changes
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock page scroll while the drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      document.documentElement.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
      document.documentElement.style.touchAction = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-ink/50 md:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-screen w-72 bg-frost border-l border-mist flex flex-col md:hidden overflow-hidden",
          "transition-transform duration-300 ease-frame",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        {/* Header */}
        <div className="h-20 shrink-0 flex items-center justify-between px-6 border-b border-mist">
          <span className="font-display text-lg tracking-wideish text-ink">
            Menu
          </span>

          <button
            onClick={onClose}
            className="text-steel hover:text-ink transition-colors"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-hidden py-6 px-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item, idx) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              style={{
                transitionDelay: open ? `${idx * 60 + 160}ms` : "0ms",
              }}
              className={({ isActive }) =>
                cn(
                  "px-4 py-3 text-sm tracking-wideish uppercase",
                  "transition-all duration-300 ease-frame",
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0",
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

        {/* Footer */}
        <div
          style={{ transitionDelay: open ? "80ms" : "0ms" }}
          className={cn(
            "shrink-0 p-4 border-t border-mist transition-all duration-300 ease-frame",
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-8 opacity-0"
          )}
        >
          <Link
            to={ROUTES.BOOK}
            className="btn-primary w-full justify-center"
          >
            Book a Session
          </Link>
        </div>
      </aside>
    </>
  );
}