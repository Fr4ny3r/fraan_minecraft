// /app/layout.tsx

import type { Metadata } from "next";
import { montserrat } from './fonts';
import "./globals.css";
// Importa el nuevo componente de cliente
import RootLayoutClient from "./RootLayoutClient"; 

// 1. **MANTÉN** la metadata aquí (NO hay 'use client')
export const metadata = {
  // 1. BASE DE LA URL CANÓNICA (¡Lo más importante que falta!)
  metadataBase: new URL('https://fraan-minecraft-buyw.vercel.app/'), 
  
  // 2. SEO BÁSICO
  title: {
    default: 'Fraan | Portafolio Personal', // Título para la página de inicio
    template: '%s | Fraan', // Plantilla para otras páginas (ej: 'Acerca de | Fraan')
  },
  description: 'Portafolio personal de Fraan. Muestra de proyectos de desarrollo web con Next.js y un enfoque en el juego Minecraft.',
  
  // 3. ICONOS
  icons: {
    icon: '/minecraft.svg',
    shortcut: '/favicon.ico', // Añadir un shortcut por si acaso
  },

  // 4. ROBOTS
  robots: {
    index: true,
    follow: true,
  },
  
  // 5. OPEN GRAPH (Para Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: 'Fraan | Portafolio Personal y Proyectos',
    description: 'Explora los proyectos de Fraan desarrollados con Next.js.',
    url: 'https://fraan-minecraft-buyw.vercel.app/',
    siteName: 'Fraan',
    images: [
      {
        url: 'https://fraan-minecraft-buyw.vercel.app/bg-sky.png', // Imagen de previsualización (¡Requerida!)
        width: 1200,
        height: 630,
        alt: 'Banner de Fraan Portafolio',
      },
    ],
    locale: 'es_ES', // Si tu contenido es en español
    type: 'website',
  },

  // 6. TWITTER (Para la tarjeta de previsualización en Twitter/X)
  twitter: {
    card: 'summary_large_image',
    title: 'Fraan | Next.js Developer',
    description: 'Portafolio de desarrollo web.',
    creator: '@fr4n.007', // Tu handle de Twitter
    images: ['https://fraan-minecraft-buyw.vercel.app/bg-sky.png'], // La misma imagen que Open Graph o una específica
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased overflow-x-hidden flex justify-center items-center`}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}