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
  title: "Ahmed Hisham — Portfolio OS | Mobile Developer & Designer",
  description:
    "A dark, sophisticated, editorial-style personal portfolio simulating an interactive desktop workspace and physical file folder system. Mobile Developer & Designer based in Bahrain.",
  keywords: [
    "Ahmed Hisham",
    "Mobile Developer",
    "Designer",
    "Bahrain",
    "Flutter",
    "React Native",
    "Portfolio OS",
    "Interactive Portfolio",
    "UI/UX Design",
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
      <body className="bg-[#08090d] text-neutral-100 min-h-screen antialiased selection:bg-purple-500/30 selection:text-white relative">
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
