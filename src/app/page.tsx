"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FolderStack } from "@/components/FolderStack/FolderStack";
import { portfolioData } from "@/data/portfolioData";
import { soundEffects } from "@/components/ui/SoundEffects";
import { 
  ArrowUp, 
  Terminal, 
  Sparkles, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Heart,
  Globe
} from "lucide-react";

export default function Home() {
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);

  const handleOpenFolder = (folderId: string) => {
    setActiveFolderId(folderId);
  };

  const scrollToTop = () => {
    soundEffects.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#08090d] text-neutral-100 flex flex-col justify-between overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-900/15 via-indigo-900/10 to-transparent blur-[140px] pointer-events-none -z-20" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] pointer-events-none -z-20" />

      {/* Top Header Navigation */}
      <Navigation
        onOpenFolder={handleOpenFolder}
        activeFolderId={activeFolderId}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center w-full">
        <Hero />
        <FolderStack
          activeFolderId={activeFolderId}
          setActiveFolderId={setActiveFolderId}
        />
      </div>

      {/* Editorial Footer */}
      <footer className="w-full border-t border-white/[0.06] bg-neutral-950/80 backdrop-blur-md py-8 px-6 sm:px-12 text-xs font-mono text-neutral-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: System status & author */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-neutral-300 font-medium">PORTFOLIO OS // v2.6</span>
            </div>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span className="text-neutral-500">
              Designed & Engineered by {portfolioData.personal.name}
            </span>
          </div>

          {/* Center: Social links quick access */}
          <div className="flex items-center gap-4">
            {portfolioData.personal.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEffects.playClick()}
                className="text-neutral-400 hover:text-purple-300 transition-colors p-1"
                aria-label={social.platform}
              >
                {social.platform}
              </a>
            ))}
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-300 hover:text-white transition-all"
            data-cursor="TOP"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-purple-400" />
          </button>
        </div>
      </footer>
    </main>
  );
}
