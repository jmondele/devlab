export default function BackgroundFX() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Layer 1: large primary glow */}
      <div className="absolute -top-1/3 -left-1/4 h-[80vmax] w-[80vmax] animate-[pan_28s_ease-in-out_infinite_alternate] rounded-full bg-[radial-gradient(closest-side,hsl(var(--primary)/0.35),transparent_60%)]" />
      {/* Layer 2: accent glow */}
      <div className="absolute -bottom-1/3 -right-1/4 h-[70vmax] w-[70vmax] animate-[pan-2_36s_ease-in-out_infinite_alternate] rounded-full bg-[radial-gradient(closest-side,hsl(var(--accent)/0.4),transparent_60%)]" />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,transparent,rgba(0,0,0,0.35))]" />
    </div>
  );
}
