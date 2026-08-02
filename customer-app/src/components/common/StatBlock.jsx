export default function StatBlock({ value, label }) {
  return (
    <div className="text-center">
      <p className="font-display text-4xl md:text-5xl text-frost">{value}</p>
      <p className="mt-2 font-mono text-xs tracking-widest2 uppercase text-frost/50">
        {label}
      </p>
    </div>
  );
}