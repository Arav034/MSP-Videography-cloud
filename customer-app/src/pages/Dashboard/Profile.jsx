import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Inbox, ArrowRight, ArrowLeft, LogOut } from "lucide-react";
import { PROFILE } from "@/constants/dashboardContent";
import TextField from "@/components/forms/TextField";
import { useRequests } from "@/hooks/useRequests";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/constants/routes";

export default function Profile() {
  const { requests } = useRequests();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState(PROFILE);

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile save placeholder:", form);
  };

  return (
    <div>
      <Link
        to={ROUTES.HOME}
        className="inline-flex items-center gap-2 text-sm text-steel hover:text-brand transition-colors duration-300 mb-8"
      >
        <ArrowLeft size={16} />
        Back to MSP Videography
      </Link>

      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="eyebrow mb-3">Account</p>
          <h1 className="font-display text-4xl">Profile</h1>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-mist text-steel px-5 py-2.5
                     text-sm tracking-wideish uppercase
                     transition-colors duration-300 hover:border-red-400 hover:text-red-600"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      <Link
        to={ROUTES.DASHBOARD_REQUESTS}
        className="mb-10 flex items-center justify-between border border-mist bg-white p-6 max-w-xl
                   hover:border-brand transition-colors duration-300 group"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 flex items-center justify-center bg-brand/10 text-brand">
            <Inbox size={20} strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-display text-lg text-ink">
              {requests.length} Service {requests.length === 1 ? "Request" : "Requests"}
            </p>
            <p className="text-xs text-steel font-mono">View your editing & custom work requests</p>
          </div>
        </div>
        <ArrowRight
          size={18}
          className="text-steel group-hover:text-brand group-hover:translate-x-1 transition-all duration-300"
        />
      </Link>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl bg-white border border-mist p-8 flex flex-col gap-6"
      >
        <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} />
        <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
        <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} />
        <TextField label="Address" name="address" value={form.address} onChange={handleChange} />

        <button type="submit" className="btn-primary self-start mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );
}