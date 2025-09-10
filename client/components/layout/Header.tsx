import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "@/components/site/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/40 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden md:block">
          <nav className="rounded-full border border-border/60 bg-background/60 px-5 py-2 shadow-[0_0_1px_1px_hsl(var(--border)/0.6)]">
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        isActive || location.pathname.startsWith(item.to)
                          ? "text-primary"
                          : "text-foreground/70",
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:inline-flex rounded-full px-5">
            <Link to="/contact">Start a project</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
