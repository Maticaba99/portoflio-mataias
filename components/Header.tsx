"use client";

import { Sword } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed w-full z-50">
      <nav style={{margin: '0 auto', marginTop: "18px"}} className="w-[320px] glass mx-4 mt-4 rounded-full max-w-7xl lg:mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center">
        <div className="flex items-center space-x-2 glass-hover px-4 py-2 rounded-full">
          <Sword className="h-8 w-8 text-primary sword-icon" />
          <span className="font-bold text-xl">Matias Caballero</span>
        </div>
      </nav>
    </header>
  );
}