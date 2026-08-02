import SectionHeading from "@/components/common/SectionHeading";
import ServiceCategoryCard from "@/components/cards/ServiceCategoryCard";
import { SERVICE_CATEGORIES } from "@/constants/homeContent";

export default function Services() {
  return (
    <section className="bg-white/50 border-y border-mist">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <SectionHeading eyebrow="What We Offer" title="Services" align="center" />
        <p className="mt-4 text-steel text-center max-w-lg mx-auto">
          From candid family sessions to full broadcast production — explore
          what we offer by category.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((cat) => (
            <ServiceCategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}