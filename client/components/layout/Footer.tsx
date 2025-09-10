import { Link } from "react-router-dom";
import { Logo } from "@/components/site/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm text-foreground/70">
            Devlab is a digital innovation studio. We build smart, scalable, and
            modern solutions that turn ideas into growth.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm md:col-span-2 md:grid-cols-3">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
              Company
            </h4>
            <ul className="space-y-2">
              <li><Link className="hover:text-primary" to="/about">About</Link></li>
              <li><Link className="hover:text-primary" to="/work">Work</Link></li>
              <li><Link className="hover:text-primary" to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
              Services
            </h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Products</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-foreground/60">
        © {new Date().getFullYear()} Devlab. All rights reserved.
      </div>
    </footer>
  );
}
