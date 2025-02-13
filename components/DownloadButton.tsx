"use client";

import { useState } from "react";
import { Download, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadButton() {
  const [downloadState, setDownloadState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const handleDownload = async () => {
    try {
      setDownloadState("loading");

      // Simular la descarga (reemplazar con la lógica real de descarga)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Iniciar la descarga
      const link = document.createElement("a");
      link.href = "/Mati Caballero Resume.pdf";
      link.download = "Mati Caballero Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadState("success");
      setTimeout(() => setDownloadState("idle"), 2000);
    } catch (error) {
      console.error("Error al descargar:", error);
      setDownloadState("idle");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 animate-fade-in mb-[60px] sm:mb-0">
      <Button
        onClick={handleDownload}
        disabled={downloadState === "loading"}
        size="default"
        className={`
          group
          relative
          glass
          hover:glass-hover
          transition-all
          duration-300
          shadow-lg
          hover:shadow-xl
          px-6
          py-6
          sm:px-8
          h-auto
          space-x-2
          ${downloadState === "success" ? "bg-green-500/10" : ""}
        `}
      >
        <span className="relative z-10 flex items-center gap-2">
          {downloadState === "loading" ? (
            <>
              <Loader2 className="h-3 w-3 animate-spin" />
              <span>Descargando...</span>
            </>
          ) : downloadState === "success" ? (
            <>
              <Check className="h-3 w-3" />
              <span>¡Descargado!</span>
            </>
          ) : (
            <>
              <Download className="h-3 w-3 transition-transform group-hover:-translate-y-1" />
              <span>Descargar CV</span>
            </>
          )}
        </span>
      </Button>
    </div>
  );
}
