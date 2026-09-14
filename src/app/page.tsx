"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { FolderStack } from "@/components/FolderStack/FolderStack";
import { portfolioData } from "@/data/portfolioData";
import { soundEffects } from "@/components/ui/SoundEffects";

export default function Home() {
  const [activeFolderId, setActiveFolderId] = useState<string | null>(null);

  const handleOpenFolder = (folderId: string) => {
    setActiveFolderId(folderId);
  };

  return (
    <main className="relative min-h-screen bg-[#08090d] text-neutral-100 flex flex-col justify-between overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-900/15 via-indigo-900/10 to-transparent blur-[140px] pointer-events-none -z-20" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] pointer-events-none -z-20" />

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

      {/* Clean Minimal Footer */}
      <footer className="w-full border-t border-white/[0.06] bg-neutral-950/80 backdrop-blur-md py-6 px-6 sm:px-12 text-xs font-mono text-neutral-400">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Author */}
          <span className="text-neutral-400">
            © Designed &amp; Engineered by {portfolioData.personal.name}
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://linkedin.com/in/ahmed-hisham"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEffects.playClick()}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-blue-500/20 text-neutral-300 hover:text-blue-200 border border-white/[0.06] hover:border-blue-400/40 transition-all"
              data-cursor="LINKEDIN"
            >
              [LinkedIn]
            </a>
            <a
              href="https://github.com/ahmedhisham"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEffects.playClick()}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-blue-500/20 text-neutral-300 hover:text-blue-200 border border-white/[0.06] hover:border-blue-400/40 transition-all"
              data-cursor="GITHUB"
            >
              [GitHub]
            </a>
            <a
              href="mailto:Ahd5his@gmail.com"
              onClick={() => soundEffects.playClick()}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] hover:bg-blue-500/20 text-neutral-300 hover:text-blue-200 border border-white/[0.06] hover:border-blue-400/40 transition-all"
              data-cursor="EMAIL"
            >
              [Email]
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
