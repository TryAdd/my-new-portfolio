"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { soundEffects } from "./ui/SoundEffects";
import { Volume2, VolumeX } from "lucide-react";

interface NavigationProps {
  onOpenFolder: (folderId: string) => void;
  activeFolderId: string | null;
}

export function Navigation({ onOpenFolder, activeFolderId }: NavigationProps) {
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleSound = () => {
    const muted = soundEffects.toggleMute();
    setIsMuted(muted);
  };

  const handleNavClick = (folderId: string) => {
    soundEffects.playClick();
    onOpenFolder(folderId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-8 md:px-12 py-4 sm:py-5 border-b border-white/[0.06] bg-[#08090d]/80 backdrop-blur-md transition-all duration-300">
      {/* Top Left: Clean Name & Status */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            soundEffects.playClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-left group"
          data-cursor="HOME"
        >
          <span className="text-sm sm:text-base font-serif font-normal tracking-wide text-white group-hover:text-blue-300 transition-colors">
            {portfolioData.personal.name}
          </span>
        </button>

        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-white/[0.08]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-neutral-400 tracking-wide">
            {portfolioData.personal.currentStatus}
          </span>
        </div>
      </div>

      {/* Top Right: Sound Controller & Contact Button */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Audio Mute Button */}
        <button
          onClick={handleToggleSound}
          className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-neutral-400 hover:text-white transition-all"
          title={isMuted ? "Unmute Audio Feedback" : "Mute Audio Feedback"}
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
          data-cursor="AUDIO"
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 text-blue-300" />
          )}
        </button>

        {/* Minimal Contact Button */}
        <button
          onClick={() => handleNavClick("contact")}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 ${
            activeFolderId === "contact"
              ? "bg-blue-500/20 text-blue-200 border border-blue-400/40 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
              : "text-neutral-300 hover:text-white hover:bg-white/[0.04] border border-white/10"
          }`}
          data-cursor="CONTACT"
        >
          CONTACT
        </button>
      </div>
    </header>
  );
}
