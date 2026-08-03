import { useState } from "react";
import AccordionItem from "@/components/common/AccordionItem";

/** Single-open accordion — opening one item closes any other that was open. */
export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="border-t border-mist">
      {items.map((item, idx) => (
        <AccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === idx}
          onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
        />
      ))}
    </div>
  );
}