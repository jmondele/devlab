import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export function Marquee({ items, className }: MarqueeProps) {
  const content = [...items, ...items];
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="flex min-w-max animate-[marquee-slow_20s_linear_infinite] gap-3 pr-3"
        aria-hidden
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm text-foreground/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
