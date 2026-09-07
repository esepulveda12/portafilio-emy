import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Press_Start_2P } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const pixel = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolioemily.vercel.app"),
  title: "Emily Sepúlveda · Full Stack Developer ✦",
  description:
    "Portfolio of Emily Sepúlveda — Full Stack Developer with a QA Automation and UX/UI background. I build digital products end to end with React, Node.js, Python and .NET, and automate testing with Selenium and Playwright.",
  keywords: ["full stack developer", "qa automation", "frontend", "react", "node.js", "python", "selenium", "playwright", "ux/ui", "portfolio"],
  authors: [{ name: "Emily Sepúlveda" }],
  openGraph: {
    title: "Emily Sepúlveda · Full Stack Developer ✦",
    description:
      "Full Stack Developer · QA Automation · UX/UI. I build reliable digital products end to end — from clean code to automated testing ✨",
    type: "website",
    url: "https://portafolioemily.vercel.app",
    siteName: "Emily Sepúlveda",
    locale: "en_US",
    alternateLocale: ["es_CO"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emily Sepúlveda · Full Stack Developer ✦",
    description: "Full Stack Developer · QA Automation · UX/UI 🌸",
  },
};

// Datos estructurados: le dicen a Google que esto es una persona/profesional.
// Mejora cómo apareces al buscar "Emily Sepúlveda" y habilita resultados ricos.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Emily Sepúlveda",
  url: "https://portafolioemily.vercel.app",
  image: "https://portafolioemily.vercel.app/profile.webp",
  jobTitle: "Full Stack Developer Jr · QA Automation",
  description:
    "Full Stack Developer with a QA Automation and UX/UI background. I build digital products end to end with React, Node.js, Python and .NET, and automate testing with Selenium and Playwright.",
  email: "mailto:emilysepulveda30personal@gmail.com",
  knowsLanguage: ["Spanish", "English"],
  knowsAbout: [
    "React", "Node.js", "Python", "C#", ".NET", "MongoDB",
    "Selenium", "Playwright", "QA Automation", "UX/UI Design",
  ],
  sameAs: [
    "https://github.com/esepulveda12",
    "https://www.linkedin.com/in/emilysepulvedaing/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${grotesk.variable} ${pixel.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
