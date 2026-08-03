import { Link } from "react-router-dom";
import SectionHeading from "@/components/common/SectionHeading";
import Accordion from "@/components/common/Accordion";
import { FAQ_CATEGORIES } from "@/constants/faqContent";
import { ROUTES } from "@/constants/routes";

export default function FAQTeaser() {
  // Show just the first 4 questions across categories as a homepage teaser.
  const preview = FAQ_CATEGORIES.flatMap((cat) => cat.items).slice(0, 4);

  return (
    <section className="max-w-3xl mx-auto px-6 md:px-10 py-20">
      <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" align="center" />

      <div className="mt-10">
        <Accordion items={preview} />
      </div>

      <div className="mt-8 flex justify-center">
        <Link to={ROUTES.FAQ} className="nav-link">
          View all FAQs →
        </Link>
      </div>
    </section>
  );
}