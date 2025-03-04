"use client";

import { Sword } from "lucide-react";
import { useEffect, useRef } from "react";

export function Header() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sword-clash.mp3");
    audioRef.current.volume = 0.3;
  }, []);

  const handleSwordHover = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((e) => console.log("Audio autoplay prevented"));
    }
  };

  return (
    <header className="fixed w-full z-50">
      <nav className="mx-auto mt-4 sm:mt-6 glass rounded-full max-w-[90%] sm:max-w-[400px] px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-center">
        <div
          className="flex items-center space-x-2 glass-hover px-4 py-2 rounded-full"
          onMouseEnter={handleSwordHover}
        >
          <div className="sword-container">
            <Sword className="h-6 w-6 sm:h-8 sm:w-8 text-primary sword-primary" />
            <Sword className="h-6 w-6 sm:h-8 sm:w-8 text-primary sword-secondary" />
            <div className="sword-spark" />
          </div>
          <span className="font-bold text-lg sm:text-xl">Matias Caballero</span>
        </div>
      </nav>
    </header>
  );
}
