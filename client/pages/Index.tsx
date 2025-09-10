import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/site/Marquee";
import HeroScene from "@/components/three/HeroScene";
import Spline from '@splinetool/react-spline';

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_80%_-10%,hsl(var(--primary)/0.35),transparent_60%)]" />
        <div className="container grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/60 px-3 py-1 text-xs text-foreground/70 backdrop-blur">
              <Sparkles className="size-3 text-primary" />
              Digital Innovation Studio
            </p>
            <h1 className="display-hero mt-6">
              Guiding your growth with <span className="text-primary">design</span>, code, and AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/70 md:text-xl">
              Devlab builds smart, scalable, and modern solutions for forward‑thinking brands — from web and mobile apps to AI‑powered tools and digital marketing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8 shadow-[0_0_32px_hsl(var(--primary)/0.45)]">
                <Link to="/contact">
                  Start a project
                  <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/work">See our work</Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-secondary/40 to-background">
              <div className="absolute inset-0">
                 
                   
 <Spline scene="https://prod.spline.design/TVnZEDGT6rRES9Ca/scene.splinecode" />
                {/** 3D animated scene */}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <HeroScene />
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-foreground/70">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>AI Products</li>
              <li>Digital Marketing</li>
            </ul>
          </div>
        </div>

        <div className="container">
          <Marquee
            className="mb-6"
            items={["Web Platforms", "iOS & Android", "AI Copilots", "Automation", "Brand Sites", "E‑commerce", "APIs", "Data Dashboards"]}
          />
        </div>
      </section>

      {/* Services */}
      <section className="container py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-2xl font-bold md:text-3xl">What we do</h2>
          <Button asChild variant="link">
            <Link to="/services" className="gap-1">
              Explore services <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Web Development"
            desc="Modern, fast, and secure websites and platforms built with best‑in‑class tech."
          />
          <ServiceCard
            title="Mobile Apps"
            desc="Native and cross‑platform apps with delightful UX and robust performance."
          />
          <ServiceCard
            title="AI‑powered Tools"
            desc="From copilots to automation, we embed AI to accelerate your business."
          />
          <ServiceCard
            title="Digital Marketing"
            desc="Strategies that convert — SEO, content, and performance campaigns."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-y border-border/60 bg-secondary/30 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h3 className="text-balance text-2xl font-bold md:text-3xl">
            Ready to build something outstanding?
          </h3>
          <p className="max-w-2xl text-pretty text-foreground/70">
            Let’s turn your ideas into real‑world results. We blend clean design,
            powerful technology, and strategic thinking — from code to growth.
          </p>
          <Button asChild size="lg" className="gap-1 rounded-full px-8">
            <Link to="/contact">Tell us about your project <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.5),0_16px_48px_-16px_hsl(var(--primary)/0.25)]">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-foreground/70">{desc}</p>
    </div>
  );
}
