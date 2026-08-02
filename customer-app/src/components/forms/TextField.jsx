export default function TextField({ label, name, type = "text", value, onChange, ...props }) {
  const isEmail = type === "email";

  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-xs tracking-widest2 uppercase text-steel">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={isEmail ? "you@example.com" : props.placeholder}
        pattern={isEmail ? "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" : undefined}
        title={isEmail ? "Please enter a valid email address, e.g. you@example.com" : undefined}
        className="border border-mist bg-white px-4 py-3 text-sm text-ink
                   focus:outline-none focus:border-brand transition-colors duration-300
                   invalid:[&:not(:placeholder-shown)]:border-red-400"
        {...props}
      />
    </label>
  );
}