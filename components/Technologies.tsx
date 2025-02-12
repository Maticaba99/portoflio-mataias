import { Card } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: "React", level: 90, icon: "⚛️" },
  { name: "TypeScript", level: 85, icon: "TS" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Next.js", level: 85, icon: "N" },
  { name: "Python", level: 75, icon: "🐍" },
  { name: "AWS", level: 70, icon: "☁️" }
];

export function Technologies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="technologies" className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold reveal">Technical Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal delay-1">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <Card 
              key={index} 
              className={`hover-card glass-card p-6 text-center ${
                inView ? `reveal delay-${index % 3 + 1}` : 'opacity-0'
              }`}
            >
              <div className="text-3xl mb-4 animate-float">{tech.icon}</div>
              <h3 className="font-semibold mb-2">{tech.name}</h3>
              <div className="w-full glass rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full skill-progress"
                  style={{ 
                    width: `${tech.level}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}