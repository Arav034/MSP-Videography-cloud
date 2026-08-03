import { GALLERIES } from "@/constants/dashboardContent";
import GalleryCard from "@/components/cards/GalleryCard";

export default function Galleries() {
  return (
    <div>
      <p className="eyebrow mb-3">Your work</p>
      <h1 className="font-display text-4xl mb-10">Galleries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERIES.map((g) => (
          <GalleryCard key={g.id} {...g} />
        ))}
      </div>
    </div>
  );
}