export default function PageLoader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="w-10 h-10 border-2 border-mist border-t-brand rounded-full animate-spin" />
      <p className="font-mono text-xs tracking-widest2 uppercase text-steel">
        Loading
      </p>
    </div>
  );
}