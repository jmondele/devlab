import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="mt-6 text-lg text-foreground/70 md:text-xl">
            Explore our collection of innovative projects spanning web development, 
            mobile apps, AI tools, and digital experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container pb-16 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="E-commerce Platform"
            description="Modern marketplace with AI-powered recommendations and seamless checkout experience."
            image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
            tags={["React", "Node.js", "AI", "Stripe"]}
            liveUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Mobile Fitness App"
            description="Cross-platform fitness tracking app with social features and personalized workouts."
            image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
            tags={["React Native", "Firebase", "Health"]}
            liveUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="AI Content Generator"
            description="Smart content creation tool that generates marketing copy using advanced language models."
            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
            tags={["Next.js", "OpenAI", "TypeScript"]}
            liveUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="SaaS Dashboard"
            description="Comprehensive analytics dashboard with real-time data visualization and reporting."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
            tags={["Vue.js", "D3.js", "PostgreSQL"]}
            liveUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Restaurant Website"
            description="Beautiful restaurant website with online ordering and reservation system."
            image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
            tags={["WordPress", "PHP", "MySQL"]}
            liveUrl="#"
            githubUrl="#"
          />
          <ProjectCard
            title="Crypto Trading Bot"
            description="Automated trading bot with advanced algorithms and risk management features."
            image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop"
            tags={["Python", "APIs", "Machine Learning"]}
            liveUrl="#"
            githubUrl="#"
          />
        </div>
      </section>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

function ProjectCard({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card transition-all hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-foreground/70">{description}</p>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1 size-4" />
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 size-4" />
              Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}