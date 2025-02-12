import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Full-Stack Developer & Líder Técnico
          </h1>
          <p className="text-xl text-muted-foreground">
            5+ años creando aplicaciones web robustas y liderando equipos
            técnicos en proyectos internacionales. <br /> Busco unirme a una
            empresa innovadora donde pueda aportar mi expertise en desarrollo y
            gestión de equipos
          </p>
          <div className="space-x-4">
            <Button size="lg">Contactar</Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Energy core and circles container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Central glow */}
            <div className="absolute w-[400px] h-[400px] bg-primary/30 rounded-full blur-[100px] charging-core" />

            {/* Energy ripples */}
            <div
              className="absolute w-[500px] h-[500px] border-4 border-primary/40 rounded-full energy-ring"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute w-[450px] h-[450px] border-4 border-primary/30 rounded-full energy-ring"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute w-[400px] h-[400px] border-4 border-primary/20 rounded-full energy-ring"
              style={{ animationDelay: "2s" }}
            />

            {/* Rotating energy fields */}
            <div
              className="absolute w-[450px] h-[450px] border-2 border-primary/40 rounded-full animate-spin-slow"
              style={{ animationDuration: "15s" }}
            />
            <div
              className="absolute w-[500px] h-[500px] border-2 border-primary/30 rounded-full animate-spin-slow"
              style={{
                animationDuration: "20s",
                animationDirection: "reverse",
              }}
            />
          </div>

          {/* Floating orbs */}
          <div
            className="absolute w-64 h-64 bg-primary/40 rounded-full blur-[50px] glow-effect"
            style={{
              left: "-20%",
              top: "60%",
              animationDelay: "0.5s",
            }}
          />
          <div
            className="absolute w-48 h-48 bg-primary/50 rounded-full blur-[40px] glow-effect"
            style={{
              right: "-20%",
              top: "70%",
              animationDelay: "1.5s",
            }}
          />

          {/* Main image */}
          <img
            src="/mataias dev.png"
            alt="Hero"
            className="relative z-10 w-[300px] h-auto rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
