import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LogIn } from "lucide-react";
import FocusFrame from "@/components/ui/FocusFrame";
import TextField from "@/components/forms/TextField";
import Spinner from "@/components/common/Spinner";
import SEO from "@/components/common/SEO";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/constants/routes";

// Dummy credentials for demo purposes only — no real authentication.
// Replace this check with a real API call once a backend exists.
const DEMO_CREDENTIALS = { id: "client@msp.com", password: "demo1234" };

export default function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, loading, login } = useAuth();
  const [form, setForm] = useState({ id: "", password: "" });
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Already logged in from a previous visit — skip the form entirely.
  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate(ROUTES.DASHBOARD, { replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

   const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.id.trim() || !form.password.trim()) {
      setError("Please enter both your ID and password.");
      return;
    }

    setSubmitting(true);
    // No authentication backend wired yet — checking against fixed demo
    // credentials only. Replace this block with a real API call once a
    // backend exists.
    setTimeout(() => {
      const isValid =
        form.id.trim().toLowerCase() === DEMO_CREDENTIALS.id &&
        form.password === DEMO_CREDENTIALS.password;

      setSubmitting(false);

      if (isValid) {
        login();
        navigate(ROUTES.DASHBOARD);
      } else {
        setError("Invalid ID or password. Try the demo credentials below.");
      }
    }, 700);
  };

  if (loading || isAuthenticated) {
    return null;
  }

  return (
    <section className="max-w-md mx-auto px-6 md:px-10 py-28">
      <SEO title="Client Login" path="/login" noindex />

      <div className="text-center mb-10">
        <span className="eyebrow mb-4 block">Client Access</span>
        <h1 className="font-display text-4xl">Welcome Back</h1>
        <p className="mt-4 text-steel">
          Log in to view your bookings, galleries, and invoices.
        </p>
      </div>

      <FocusFrame padding="p-0" className="block w-full">
        <form
          onSubmit={handleSubmit}
          className="border border-mist bg-white p-8 flex flex-col gap-6"
        >
          <TextField
            label="Client ID or Email"
            name="id"
            value={form.id}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />

          {error && (
            <p className="text-xs text-red-600 font-mono -mt-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary justify-center disabled:opacity-70"
          >
            {submitting ? <Spinner /> : <LogIn size={16} />}
            {submitting ? "Signing In..." : "Log In"}
          </button>
        </form>
      </FocusFrame>

      <div className="mt-6 border border-mist bg-white/60 px-5 py-4 text-center">
        <p className="font-mono text-[11px] tracking-widest2 uppercase text-steel mb-2">
          Demo Credentials
        </p>
        <p className="text-sm text-ink font-mono">{DEMO_CREDENTIALS.id}</p>
        <p className="text-sm text-ink font-mono">{DEMO_CREDENTIALS.password}</p>
      </div>

      <p className="mt-6 text-center text-sm text-steel">
        New here?{" "}
        <Link to={ROUTES.BOOK} className="text-brand hover:underline">
          Book a session
        </Link>{" "}
        to get started.
      </p>
    </section>
  );
}