import { ArrowRight, Code, Globe, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 md:text-xl">
            We specialize in web development, mobile apps, AI-powered tools, and digital marketing. 
            Transform your ideas into powerful digital solutions.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full px-8">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            icon={Globe}
            title="Web Development"
            description="Modern, fast, and secure websites and platforms built with cutting-edge technologies like React, Next.js, and Node.js."
            features={["Responsive Design", "SEO Optimization", "Performance Focused", "Custom Solutions"]}
          />
          <ServiceCard
            icon={Smartphone}
            title="Mobile Apps"
            description="Native and cross-platform mobile applications with intuitive UX and robust performance for iOS and Android."
            features={["iOS & Android", "Cross-Platform", "Push Notifications", "App Store Deployment"]}
          />
          <ServiceCard
            icon={Zap}
            title="AI-Powered Tools"
            description="Intelligent solutions that leverage machine learning and AI to automate processes and enhance user experiences."
            features={["Custom AI Models", "Data Analytics", "Automation", "API Integration"]}
          />
          <ServiceCard
            icon={Code}
            title="Digital Marketing"
            description="Strategic digital marketing campaigns that drive growth through SEO, content marketing, and performance optimization."
            features={["SEO Strategy", "Content Creation", "Analytics", "Growth Marketing"]}
          />
        </div>
      </section>

      {/* Process */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold md:text-4xl">Our Process</h2>
          <p className="mt-4 text-foreground/70">
            From concept to launch, we follow a proven process to deliver exceptional results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <ProcessStep
            step="01"
            title="Discovery & Planning"
            description="We start by understanding your goals, target audience, and requirements to create a comprehensive project roadmap."
          />
          <ProcessStep
            step="02"
            title="Design & Development"
            description="Our team designs and builds your solution using modern technologies and best practices for optimal performance."
          />
          <ProcessStep
            step="03"
            title="Launch & Growth"
            description="We deploy your project and provide ongoing support to ensure continued success and growth."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-border/60 bg-secondary/30 py-16 md:py-20">
        <div className="container flex flex-col items-center gap-6 text-center">
          <h3 className="text-balance text-2xl font-bold md:text-3xl">
            Ready to start your project?
          </h3>
          <p className="max-w-2xl text-pretty text-foreground/70">
            Let's discuss how we can help bring your vision to life with our comprehensive digital services.
          </p>
          <Button asChild size="lg" className="gap-1 rounded-full px-8">
            <Link to="/contact">Start Your Project <ArrowRight /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="border-border/60 bg-card transition-all hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-sm">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
        {step}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
}
