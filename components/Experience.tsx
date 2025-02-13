"use client";

import { useInView } from "react-intersection-observer";
import { Calendar, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    image: "/mataias dev.png",
    company: "Mataias Dev",
    period: "Sept 2019 - Mar 2021",
    role: "Freelance Full-Stack Developer",
    description:
      "Trabaje de forma remota y freelance con clientes de diferentes partes del mundo en proyectos de desarrollo web, como landing pages, e-commerce y apps mobile.",
    technologies: ["Next.js", "TypeScript", "Node.js", "GraphQL"],
  },
  {
    image: "/konabos logo.png",
    company: "Konabos",
    period: "Ene 2021 - Dic 2022",
    role: "Tech Lead & Full-Stack Developer",
    description:
      "Lideré equipo de 5 desarrolladores en plataforma multisitio. Responsable de arquitectura, mentorías y comunicación con clientes.",
    technologies: ["Next.js", "TypeScript", "Node.js", "GraphQL", "Auth0"],
  },
  {
    image: "/frelo logo.png",
    company: "Frelo.dev",
    period: "Ene 2023 - Feb 2024",
    role: "Founder & Full-Stack Developer Senior",
    description:
      "Desarrollo de soluciones e-commerce para turismo, integrando sistemas de pago y APIs. Optimización de rendimiento y UX.",
    technologies: ["React", "Node.js", "Stripe", "Strapi", "Tailwind CSS"],
  },
  {
    image: "/upgrow logo.png",
    company: "UpGrow",
    period: "Ago 2023 - Actualidad",
    role: "Founder & Marketing Consultant",
    description:
      "Consultoría técnica en estrategias de crecimiento digital. Logramos para clientes +100k visitas/mes y +11k€ en ventas mediante embudos automatizados.",
    technologies: ["Marketing Digital", "Meta Ads", "Embudos de venta"],
  },
];

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      className="py-8 sm:py-12 px-4 container-padding section-spacing"
    >
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold reveal">Experiencia Laboral</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto reveal delay-1">
            Trayectoria en desarrollo full-stack y liderazgo técnico
          </p>
        </div>

        <div ref={ref} className="space-y-4 flex flex-col items-center">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`w-2/3 hover-card glass-card p-4 ${
                inView ? `reveal delay-${index + 1}` : "opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-32 mr-8">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="rounded-lg"
                  />
                </div>
                <div className="sm:w-1/3">
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <Building2 className="w-4 h-4" />
                    <h3 className="font-bold text-base">{exp.company}</h3>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.period}</span>
                  </div>

                  <div className="text-sm font-medium text-primary/90">
                    {exp.role}
                  </div>
                </div>

                <div className="sm:w-2/3 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="glass px-2 py-0.5 rounded-full text-xs hover:bg-primary/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
