import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Project Alpha",
    description: "A modern web application built with Next.js and TypeScript",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    features: ["Responsive Design", "Dark Mode", "API Integration"]
  },
  {
    title: "Project Beta",
    description: "Real-time data visualization dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
    tech: ["React", "D3.js", "Node.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    features: ["Real-time Updates", "Interactive Charts", "Data Export"]
  },
  {
    title: "Project Gamma",
    description: "E-commerce platform with advanced features",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    features: ["Payment Integration", "User Authentication", "Order Management"]
  }
];

export function Portfolio() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold reveal">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal delay-1">
            Explore some of my recent work showcasing my expertise in web development and design.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
                  className={`hover-card glass-card overflow-hidden cursor-pointer ${
                    inView ? `reveal delay-${index + 1}` : 'opacity-0'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="glass px-3 py-1 rounded-full text-sm hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="glass-card border-none max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                  <p>{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="reveal delay-1">{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-4">
                    <Button asChild className="button-glow">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="button-glow">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}