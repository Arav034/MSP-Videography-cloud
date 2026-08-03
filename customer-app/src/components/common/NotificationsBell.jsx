import { useState, useRef, useEffect } from "react";
import { Bell, CalendarCheck, Image as ImageIcon, Receipt, Inbox } from "lucide-react";
import { cn } from "@/utils/cn";
import { useNotifications } from "@/hooks/useNotifications";

const ICONS = {
  booking: CalendarCheck,
  gallery: ImageIcon,
  invoice: Receipt,
  request: Inbox,
};

export default function NotificationsBell() {
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="relative text-steel hover:text-brand transition-colors duration-300"
        aria-label="Notifications"
      >
        <Bell size={20} />
        {unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-brand text-white text-[10px] font-mono flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white border border-mist shadow-lg z-50">
          <div className="flex items-center justify-between px-5 py-4 border-b border-mist">
            <p className="font-display text-lg text-ink">Notifications</p>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs font-mono uppercase tracking-wideish text-brand hover:underline"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-sm text-steel text-center py-10">No notifications yet.</p>
            ) : (
              notifications.map((n) => {
                const Icon = ICONS[n.type] ?? Bell;
                return (
                  <button
                    key={n.id}
                    onClick={() => markAsRead(n.id)}
                    className={cn(
                      "w-full flex items-start gap-3 px-5 py-4 text-left border-b border-mist last:border-b-0",
                      "hover:bg-frost transition-colors duration-200",
                      !n.read && "bg-brand/5"
                    )}
                  >
                    <div className="w-9 h-9 flex items-center justify-center bg-brand/10 text-brand shrink-0">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-ink font-medium">{n.title}</p>
                        {!n.read && <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />}
                      </div>
                      <p className="text-xs text-steel mt-0.5 leading-relaxed">{n.message}</p>
                      <p className="text-[10px] text-steel/60 font-mono mt-1">{n.time}</p>
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}