"use client";

import { useState } from "react";
import { Download, Check, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export function DownloadButton() {
  const [downloadState, setDownloadState] = useState<
    "idle" | "loading" | "success"
  >("idle");

  const handleDownload = async () => {
    try {
      setDownloadState("loading");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const link = document.createElement("a");
      link.href = "/Matias Caballero - Resume.pdf";
      link.download = "Matias Caballero - Resume.pdf";
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
      <Dialog>
        <DialogTrigger asChild>
          <Button className="group relative bg-background/10 hover:bg-background/20 transition-all duration-300 shadow-lg hover:shadow-xl px-4 py-4 sm:px-6 sm:py-6 h-auto space-x-2 text-white border border-white/10 text-sm sm:text-base">
            <span className="relative z-10 flex items-center gap-2">
              <Download className="h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:-translate-y-1" />
              <span>Ver CV</span>
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="glass-card border-none w-screen sm:max-w-5xl h-screen sm:h-[90vh] p-0 flex flex-col [&>button]:hidden">
          <div className="flex items-center justify-between px-3 py-2 sm:p-4 border-b border-white/10">
            <DialogTitle className="text-sm sm:text-base text-white">
              Mi CV
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleDownload}
                disabled={downloadState === "loading"}
                variant="ghost"
                className="text-white hover:bg-white/10 px-2 h-8"
                size="sm"
              >
                {downloadState === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : downloadState === "success" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
              </Button>
              <DialogClose className="text-white/70 hover:text-white">
                <X className="h-4 w-4" />
              </DialogClose>
            </div>
          </div>
          <div className="flex-1 w-full min-h-0">
            <object
              data="/Matias Caballero - Resume.pdf#view=FitH&navpanes=0&toolbar=0&title=Matias Caballero - Full Stack Developer"
              type="application/pdf"
              className="w-full h-full bg-white"
            >
              <iframe
                src="/Matias Caballero - Resume.pdf#view=FitH&navpanes=0&toolbar=0&title=Matias Caballero - Full Stack Developer"
                className="w-full h-full bg-white"
                title="Matias Caballero - Full Stack Developer"
              />
            </object>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
