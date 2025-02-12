import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Matías Caballero | Full-Stack Developer & Tech Lead",
  description:
    "Desarrollador full-stack con 5+ años de experiencia construyendo aplicaciones web escalables. Especialista en React, Next.js y liderazgo técnico. Disponible para oportunidades remotas.",
  metadataBase: new URL("https://tusitio.com"),
  openGraph: {
    title: "Matías Caballero | Full-Stack Developer",
    description:
      "Portfolio profesional - Especialista en desarrollo web moderno y liderazgo técnico",
    url: "https://tusitio.com",
    siteName: "Matías Caballero",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/matias dev.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
