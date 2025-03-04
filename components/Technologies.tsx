import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const technologies = [
  // Frontend & Frameworks
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "{}" },
  { name: "TailwindCSS", icon: "🌀" },
  // Backend & Bases de Datos
  { name: "Node.js", icon: "🟩" },
  { name: "GraphQL", icon: "🎯" },
  { name: "MongoDB", icon: "🍃" },
  // Herramientas de Diseño/Workflow
  { name: "Figma", icon: "✏️" },
  { name: "CMS", icon: "📦" },
  // Habilidades Complementarias
  { name: "IA", icon: "🤖" },
  { name: "Jira", icon: "⚡" },
  { name: "WebSockets", icon: "🌐 " },
];

export function Technologies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="technologies" className="section-spacing container-padding">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div className="text-center space-y-4">
          <h2 className="reveal">Tecnologías Clave</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal delay-1">
            Herramientas que domino para entregar soluciones eficientes:
          </p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className={`hover-card glass-card p-3 sm:p-4 md:p-6 text-center ${
                inView ? `reveal delay-${(index % 3) + 1}` : "opacity-0"
              }`}
            >
              <div className="text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-3 md:mb-4 animate-float">
                {tech.icon}
              </div>
              <h3 className="font-medium text-xs sm:text-sm md:text-base">
                {tech.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
