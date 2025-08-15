import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Unio Technologies - Fábrica de Software Impulsada por IA",
  description: "En Unio creamos soluciones digitales en tiempo récord, sin perder lo más valioso: el toque humano. Tecnología que conecta personas, inteligencia artificial que acelera, humanos que inspiran.",
  keywords: "desarrollo software, inteligencia artificial, aplicaciones móviles, desarrollo web, ISO 9001, tecnología, programación",
  authors: [{ name: "Unio Technologies" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
