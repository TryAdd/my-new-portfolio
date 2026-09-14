import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { CustomCursor } from "@/components/CustomCursor";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#08090d",
};

export const metadata: Metadata = {
  title: "Ahmed Hisham — Software Integration & Middleware Engineer",
  description:
    "Software Integration and Middleware Engineer with 5+ years of hands-on experience architecting resilient enterprise APIs, data synchronizers, and distributed middleware layers.",
  keywords: [
    "Ahmed Hisham",
    "Software Integration Engineer",
    "Middleware Developer",
    "Enterprise Systems Specialist",
    "Microsoft Dynamics 365",
    "D365 Integrations",
    "ObjectBox Sync",
    "Bahrain",
    "Power Automate",
  ],
  authors: [{ name: "Ahmed Hisham" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#08090d] text-neutral-100 min-h-screen antialiased selection:bg-blue-500/30 selection:text-white relative">
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
