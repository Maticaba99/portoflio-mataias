'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué servicios ofreces como desarrollador?",
    answer: "Ofrezco desarrollo web full-stack, incluyendo aplicaciones web modernas, APIs RESTful, bases de datos, y optimización de rendimiento. Me especializo en React, Next.js, Node.js y TypeScript."
  },
  {
    question: "¿Cómo es tu proceso de trabajo?",
    answer: "Mi proceso comienza con una consulta detallada para entender tus necesidades. Luego, desarrollo un plan de proyecto, establezco hitos claros y mantengo una comunicación constante durante todo el desarrollo."
  },
  {
    question: "¿Cuál es tu tiempo de respuesta típico?",
    answer: "Normalmente respondo a consultas dentro de 24 horas. Para proyectos activos, mantengo una comunicación diaria y abordo problemas urgentes lo antes posible."
  },
  {
    question: "¿Ofreces mantenimiento post-proyecto?",
    answer: "Sí, ofrezco servicios de mantenimiento y soporte después del lanzamiento. Esto incluye actualizaciones de seguridad, corrección de errores y mejoras continuas según las necesidades."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold reveal">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground reveal delay-1">
            Encuentra respuestas a las preguntas más comunes sobre mis servicios y proceso de trabajo.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden reveal rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-4  text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown 
                  className={`faq-icon w-5 h-5 flex-shrink-0 ${openIndex === index ? 'open' : ''}`}
                />
              </button>
              <div className={`faq-content ${openIndex === index ? 'open' : ''}`}>
                <div className="px-8 my-2 pb-2 pb-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}