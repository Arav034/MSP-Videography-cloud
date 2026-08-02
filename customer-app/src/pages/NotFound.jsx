import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import SEO from "@/components/common/SEO";

export default function NotFound() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-40 text-center">
      <SEO title="Page Not Found" path="/not-found" noindex />
      <p className="font-mono text-xs tracking-widest2 text-brand mb-4">
        ERR_404
      </p>
      <h1 className="font-display text-4xl md:text-5xl mb-6">
        This frame doesn't exist.
      </h1>
      <Link to={ROUTES.HOME} className="btn-ghost">
        Back to Home
      </Link>
    </section>
  );
}