import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src="/iso.svg" 
        alt="Devlab"
        className="h-8 w-auto"
      />

    </div>
  );
}
