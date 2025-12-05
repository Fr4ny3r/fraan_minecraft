// /app/layout.tsx

import type { Metadata } from "next";
import { montserrat } from './fonts';
import "./globals.css";
// Importa el nuevo componente de cliente
import RootLayoutClient from "./RootLayoutClient"; 

// 1. **MANTÉN** la metadata aquí (NO hay 'use client')
export const metadata: Metadata = {
  title: "_Fraan_",
  icons: {
    icon: "/minecraft.svg",
  },
  description: "This is my personal website built with Next.js, for a minecraft project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased overflow-x-hidden justify-center items-center flex min-h-screen bg-background text-foreground`}>
        {/* 2. Renderiza el Client Component y le pasas el children */}
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}