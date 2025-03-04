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
    <section id="experience" className="section-spacing container-padding">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="reveal">Experiencia Laboral</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal delay-1">
            Trayectoria en desarrollo full-stack y liderazgo técnico
          </p>
        </div>

        <div ref={ref} className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`w-full hover-card glass-card p-4 sm:p-6 ${
                inView ? `reveal delay-${index + 1}` : "opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex items-center sm:block">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-16 h-16 sm:w-24 sm:h-24 rounded-lg object-contain"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 text-primary">
                        <Building2 className="w-4 h-4" />
                        <h3 className="font-bold text-base sm:text-lg">
                          {exp.company}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-primary/90">
                      {exp.role}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="glass px-2.5 py-1 rounded-full text-xs sm:text-sm hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
