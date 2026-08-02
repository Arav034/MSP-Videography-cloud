import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="bg-ink text-frost">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-semibold text-2xl tracking-wideish">
            MSP <span className="text-brand-light font-bold">VIDEOGRAPHY</span>
          </p>
          <p className="mt-3 text-steel text-sm max-w-xs">
            Photography and film, composed with intention.
          </p>
        </div>

<div>
  <p className="eyebrow text-frost/60 mb-4">Studio</p>
  <ul className="space-y-2 text-sm text-frost/80">
    <li>
      <Link to={ROUTES.PORTFOLIO} className="hover:text-frost transition-colors">Portfolio</Link>
    </li>
    <li>
      <Link to={ROUTES.SERVICES} className="hover:text-frost transition-colors">Services</Link>
    </li>
    <li>
      <Link to={ROUTES.CONTACT} className="hover:text-frost transition-colors">Contact</Link>
    </li>
  </ul>
</div>

        <div>
          <p className="eyebrow text-frost/60 mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-frost/80">
            <li>hello@mspvideography.com</li>
            <li>+1 (555) 010-2024</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between font-mono text-xs text-frost/50">
          <span>© {new Date().getFullYear()} MSP VIDEOGRAPHY</span>
          <span>BUILT BY ARAVINTH</span>
        </div>
      </div>
    </footer>
  );
}