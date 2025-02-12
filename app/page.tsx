"use client";

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';
import { Technologies } from '@/components/Technologies';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground min-h-screen">
        <Header />
        <Hero />
        <Portfolio />
        <Technologies />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}