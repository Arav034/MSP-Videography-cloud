import { Link } from "react-router-dom";
import SectionHeading from "@/components/common/SectionHeading";
import WorkCard from "@/components/cards/WorkCard";
import FocusFrame from "@/components/ui/FocusFrame";
import { FEATURED_WORK } from "@/constants/homeContent";
import { ROUTES } from "@/constants/routes";

export default function FeaturedWork() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <SectionHeading eyebrow="Selected Work" title="Recent frames" />
        <FocusFrame padding="p-1">
          <Link to={ROUTES.PORTFOLIO} className="nav-link">
             View full portfolio →
          </Link>
        </FocusFrame>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {FEATURED_WORK.map((item) => (
          <WorkCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}