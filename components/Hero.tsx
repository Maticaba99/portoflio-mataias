import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="!pt-24 !sm:pt-32 !md:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 relative overflow-hidden container-padding section-spacing">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <h1 className="leading-tight">
            Full-Stack Developer & Líder Técnico
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            5+ años creando aplicaciones web robustas y liderando equipos
            técnicos en proyectos internacionales.{" "}
            <br className="hidden sm:block" />
            Busco unirme a una empresa innovadora donde pueda aportar mi
            expertise en desarrollo y gestión de equipos
          </p>
          <div className="space-x-4">
            <Button size="lg" className="touch-target">
              Contactar
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          {/* Energy core and circles container */}
          <div className="absolute inset-0 flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
            {/* Central glow */}
            <div className="absolute w-[300px] sm:w-[400px] bg-primary/30 rounded-full blur-[100px] charging-core aspect-square" />

            {/* Energy ripples */}
            <div
              className="absolute w-[350px] sm:w-[500px] border-4 border-primary/40 rounded-full energy-ring aspect-square"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute w-[325px] sm:w-[450px] border-4 border-primary/30 rounded-full energy-ring aspect-square"
              style={{ animationDelay: "1s" }}
            />
            <div
              className="absolute w-[300px] sm:w-[400px] border-4 border-primary/20 rounded-full energy-ring aspect-square"
              style={{ animationDelay: "2s" }}
            />

            {/* Rotating energy fields */}
            <div
              className="absolute w-[325px] sm:w-[450px] border-2 border-primary/40 rounded-full animate-spin-slow aspect-square"
              style={{ animationDuration: "15s" }}
            />
            <div
              className="absolute w-[350px] sm:w-[500px] border-2 border-primary/30 rounded-full animate-spin-slow aspect-square"
              style={{
                animationDuration: "20s",
                animationDirection: "reverse",
              }}
            />
          </div>

          {/* Floating orbs */}
          <div
            className="absolute w-48 sm:w-64 aspect-square bg-primary/40 rounded-full blur-[50px] glow-effect"
            style={{ left: "-20%", top: "60%", animationDelay: "0.5s" }}
          />
          <div
            className="absolute w-36 sm:w-48 aspect-square bg-primary/50 rounded-full blur-[40px] glow-effect"
            style={{ right: "-20%", top: "70%", animationDelay: "1.5s" }}
          />

          {/* Main image */}
          <img
            src="/mataias dev.png"
            alt="Hero"
            className="relative z-10 w-[200px] sm:w-[250px] md:w-[300px] h-auto rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
