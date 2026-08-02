import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryTabs from "@/components/common/CategoryTabs";
import SubServiceCard from "@/components/cards/SubServiceCard";
import { SERVICE_CATEGORIES } from "@/constants/homeContent";

export default function ServicesExplorer() {
  const [searchParams] = useSearchParams();
  const requestedId = searchParams.get("category");
  const initialId = SERVICE_CATEGORIES.some((c) => c.id === requestedId)
    ? requestedId
    : SERVICE_CATEGORIES[0].id;

  const [activeId, setActiveId] = useState(initialId);

  // If the user arrives via a link with ?category=..., honor it even if
  // the component was already mounted (e.g. client-side navigation).
  useEffect(() => {
    if (requestedId && SERVICE_CATEGORIES.some((c) => c.id === requestedId)) {
      setActiveId(requestedId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestedId]);
  const active = SERVICE_CATEGORIES.find((c) => c.id === activeId);

  return (
    <>
      <div className="flex justify-center">
        <CategoryTabs
          categories={SERVICE_CATEGORIES}
          activeId={activeId}
          onChange={setActiveId}
        />
      </div>

      <div className="mt-12">
        {active.groups ? (
          <div className="flex flex-col gap-12">
            {active.groups.map((group) => (
              <div key={group.label}>
                <p className="eyebrow mb-5">{group.label}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {group.items.map((item) => (
                    <SubServiceCard key={item.title} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {active.items.map((item) => (
              <SubServiceCard key={item.title} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}