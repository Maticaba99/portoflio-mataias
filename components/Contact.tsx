'use client';

import { useEffect } from 'react';

export function Contact() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-8">
          <h2 className="text-4xl font-bold">Schedule a Meeting</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your project and explore how we can work together.
          </p>
        </div>
        <div className="glass p-8 rounded-xl max-w-4xl mx-auto">
          <div
            id="calendly-embed"
            data-url={'https://calendly.com/upgrow-meeting/30min'}
            className="calendly-inline-widget"
            style={{ minWidth: 320, height: 600 }}
          ></div>
        </div>
      </div>
    </section>
  );
}
