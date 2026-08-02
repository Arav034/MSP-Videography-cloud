export default function TextArea({ label, name, value, onChange, rows = 4, ...props }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs tracking-widest2 uppercase text-steel">
        {label}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="border border-mist bg-white px-4 py-3 text-sm text-ink resize-none
                   focus:outline-none focus:border-brand transition-colors duration-300"
        {...props}
      />
    </label>
  );
}