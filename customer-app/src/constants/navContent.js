import { ROUTES } from "@/constants/routes";

/** Shared nav items — used by both the desktop Navbar and the mobile MobileMenu. */
export const NAV_ITEMS = [
  { label: "Home", to: ROUTES.HOME },
 
  { label: "Portfolio", to: ROUTES.PORTFOLIO },
  { label: "Services", to: ROUTES.SERVICES },
  { label: "FAQ", to: ROUTES.FAQ },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Contact", to: ROUTES.CONTACT },
  // { label: "Profile", to: ROUTES.LOGIN },
];