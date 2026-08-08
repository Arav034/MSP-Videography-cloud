export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-white" : ""}`}>
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-display text-3xl md:text-4xl mt-3 ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}