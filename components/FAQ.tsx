"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo manejas la coordinación con equipos?",
    answer:
      "En Konabos, lideré a 5 desarrolladores juniors: asignaba tareas según habilidades, realizaba revisiones de código diarias y mantenía comunicación constante con clientes para garantizar alineación.",
  },
  {
    question: "¿Qué metodologías usas para gestionar proyectos?",
    answer:
      "Adapto Scrum o Kanban según el proyecto. Priorizo estimaciones realistas y reviso el avance semanal para ajustar prioridades.",
  },
  {
    question: "¿Tienes experiencia trabajando de forma remota?",
    answer:
      "Sí, he colaborado con equipos en Canadá, Estados Unidos, España y Latinoamérica. Me adapto a husos horarios y herramientas como Jira o Slack",
  },
  {
    question: "¿Cómo mantienes tus habilidades actualizadas?",
    answer:
      "Soy autodidacta: aprendo mediante documentación oficial, proyectos prácticos y comunidades técnicas. Actualmente, exploro IA aplicada a DevOps.",
  },
  {
    question: "¿Buscas un rol 100% técnico o híbrido?",
    answer:
      "Prefiero roles que combinen desarrollo con liderazgo, como Tech Lead o Full-Stack Senior, donde pueda guiar equipos y tomar decisiones arquitectónicas.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-spacing container-padding">
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <div className="text-center space-y-4">
          <h2 className="reveal">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground reveal delay-1">
            Lo que suelen preguntarme reclutadores y empresas:
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden reveal rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors touch-target"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`faq-icon w-5 h-5 flex-shrink-0 ${
                    openIndex === index ? "open" : ""
                  }`}
                />
              </button>
              <div
                className={`faq-content ${openIndex === index ? "open" : ""}`}
              >
                <div className="px-4 sm:px-8 py-4 sm:py-6">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}