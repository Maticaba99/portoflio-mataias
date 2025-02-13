"use client";

import { useEffect } from "react";

export function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="section-spacing container-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-6 sm:mb-8">
          <h2>¿Buscas un Perfil Técnico con Visión Estratégica?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estoy disponible para entrevistas o procesos de selección. Hablemos
            sobre cómo puedo contribuir a tus objetivos tecnológicos.
          </p>
        </div>
        <div className="glass p-4 sm:p-8 rounded-xl max-w-4xl mx-auto">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0tsTgH12wvxeqXRuiEpKD9H4zew42AN3QVDu--fsr5k00KN-euWu-ZlWs1oa4f1qFLzl0i6SH6?gv=true&theme=light"
            style={{
              border: "0",
              width: "100%",
              height: "500px",
              background: "white",
              borderRadius: "8px",
            }}
            frameBorder="0"
            className="w-full sm:h-[600px]"
          />
        </div>
      </div>
    </section>
  );
}