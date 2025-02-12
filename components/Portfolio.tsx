import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github } from "lucide-react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Plataforma Multisitio (Konabos)",
    description:
      "Lideré un equipo de 5 desarrolladores juniors para crear una base de código dinámica que soporta 10+ sitios web simultáneos. Responsable de asignar tareas, code reviews y comunicación directa con clientes.",
    image: "/konabos.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "CMS",
      "Liderazgo",
      "Scrum",
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    features: [
      "Responsive Design",
      "API Integration",
      "SEO Optimization",
      "Multilenguaje",
      "Fixes post producción",
    ],
  },
  {
    title: "E-Commerce para Empresa de Turismo (Frelo.dev)",
    description:
      "Desarrollé una plataforma de venta de paquetes turísticos para un cliente, integrando pasarelas de pago, gestión de inventario y todo el contenido desde un panel de Admin",
    image: "ecommerce.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Strapi CMS",
      "Tailwind CSS",
      "Liderazgo",
      "Scrum",
    ],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    features: [
      "Responsive Design",
      "API Integration",
      "E-Commerce Features",
      "Multilenguaje",
      "Fixes post producción",
    ],
  },
  {
    title: "Estrategia de Crecimiento para E-Commerce (UpGrow)",
    description:
      "Impulsé una cuenta de repuestos de autos en Uruguay desde 0 hasta 100k visitas/mes, y ayudé a un consultor financiero español a generar 11k€ en 31 días mediante embudos de ventas y Meta Ads.",
    image: "upgrow service.png",
    tech: ["Marketing Digital", "Embudos de venta", "Meta Ads", "Consultoría"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/project",
    features: [
      "Empaquetar ofertas",
      "Estrategias de Ventas Online",
      "Llamadas 1:1",
    ],
  },
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
          <h2 className="text-4xl font-bold reveal">Proyectos Destacados</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal delay-1">
            Proyectos donde mi contribución técnica y liderazgo marcaron la
            diferencia
          </p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card
                  className={`hover-card glass-card overflow-hidden cursor-pointer ${
                    inView ? `reveal delay-${index + 1}` : "opacity-0"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
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
                  <p className="text-white">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">
                      Características Principales
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-white">
                      {project.features.map((feature, i) => (
                        <li key={i} className="reveal delay-1">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/*  <div className="flex space-x-4"> */}
                  {/* <Button asChild className="button-glow">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </Button> */}
                  {/* <Button variant="outline" asChild className="button-glow">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button> */}
                  {/* </div> */}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
