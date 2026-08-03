import { AtSign, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { FEATURED_WORK } from "@/constants/homeContent";

export default function InstagramStrip() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading eyebrow="Follow The Studio" title="@mspvideography" />
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link flex items-center gap-2"
        >
          <AtSign size={16} /> Follow on Instagram
        </a>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {FEATURED_WORK.map((item) => (
          <a
            key={item.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden bg-mist"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-frame group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
              <ExternalLink
                size={20}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}