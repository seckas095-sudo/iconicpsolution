import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { assetPath } from "@/lib/assetPath";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const cormorant = localFont({
  src: "./fonts/cormorant-garamond-variable.ttf",
  weight: "300 700",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  variable: "--font-display",
});

const manrope = localFont({
  src: "./fonts/manrope-variable.ttf",
  weight: "200 800",
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Artisan plaquiste`,
  description: `${siteConfig.name} accompagne vos projets de placo, cloisons, isolation et finitions interieures.`,
  icons: {
    icon: assetPath(siteConfig.logo),
    shortcut: assetPath(siteConfig.logo),
    apple: assetPath(siteConfig.logo),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${manrope.variable} font-body`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
