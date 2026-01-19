
import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using next/font/google avoids network requests to fonts.googleapis.com during build/runtime
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Authorize | Identity Reimagined",
  description: "Experience a new era of digital security and elegant authentication.",
  appleWebApp: {
    title: "Authorize",
    statusBarStyle: "default",
    capable: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      <body className={`${inter.className} antialiased selection:bg-black/5`}>
        {children}
      </body>
    </html>
  );
}
