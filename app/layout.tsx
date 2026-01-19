
import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// next/font/google handles font optimization automatically without external network calls during build
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "Authorize | Identity Reimagined",
  description: "Elegance in digital security. Experience the standard of premium authentication.",
  metadataBase: new URL('https://authorize.io'),
  openGraph: {
    title: "Authorize | Identity Reimagined",
    description: "Premium Apple-style authentication experience.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-black text-white selection:bg-white/10`}>
        {children}
      </body>
    </html>
  );
}
