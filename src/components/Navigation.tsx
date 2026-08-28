"use client";

import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { soundEffects } from "./ui/SoundEffects";
import { Volume2, VolumeX, Globe, Terminal } from "lucide-react";

interface NavigationProps {
  onOpenFolder: (folderId: string) => void;
  activeFolderId: string | null;
}

export function Navigation({ onOpenFolder, activeFolderId }: NavigationProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [bahrainTime, setBahrainTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Bahrain",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setBahrainTime(formatter.format(new Date()));
      } catch {
        setBahrainTime("09:00 PM (GMT+3)");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Top Left: Logo / Monogram & Persona */}
      <div className="flex items-center gap-3.5">
        <button
          onClick={() => {
            soundEffects.playClick();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-left group"
          data-cursor="HOME"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-indigo-500/10 border border-purple-400/30 text-purple-200 font-mono text-xs font-bold tracking-wider group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
            {portfolioData.personal.monogram}
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium tracking-wide text-neutral-200 group-hover:text-white transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
              Portfolio OS // 2026
            </span>
          </div>
        </button>

        {/* Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/[0.08]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[11px] font-mono text-neutral-400 tracking-wide">
            {portfolioData.personal.currentStatus}
          </span>
        </div>
      </div>

      {/* Center: Live Timezone (Manama, Bahrain) */}
      <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-neutral-400">
        <Globe className="w-3 h-3 text-purple-400 animate-pulse-slow" />
        <span>MANAMA, BH</span>
        <span className="text-neutral-600">•</span>
        <span className="text-neutral-200">{bahrainTime || "12:00 PM (GMT+3)"}</span>
      </div>

      {/* Top Right: Nav links & Sound Controller */}
      <div className="flex items-center gap-3 sm:gap-6">
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
            <Volume2 className="w-3.5 h-3.5 text-purple-300" />
          )}
        </button>

        {/* Minimal Navigation Buttons */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => handleNavClick("projects")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 ${
              activeFolderId === "projects"
                ? "bg-purple-500/20 text-purple-200 border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
            }`}
            data-cursor="PROJECTS"
          >
            WORK
          </button>

          <button
            onClick={() => handleNavClick("about")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 ${
              activeFolderId === "about"
                ? "bg-purple-500/20 text-purple-200 border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
            }`}
            data-cursor="ABOUT"
          >
            ABOUT
          </button>

          <button
            onClick={() => handleNavClick("contact")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 ${
              activeFolderId === "contact"
                ? "bg-purple-500/20 text-purple-200 border border-purple-400/40 shadow-[0_0_12px_rgba(168,85,247,0.2)]"
                : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
            }`}
            data-cursor="CONTACT"
          >
            CONTACT
          </button>
        </nav>
      </div>
    </header>
  );
}
