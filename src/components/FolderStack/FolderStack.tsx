"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { FolderExpanded } from "./FolderExpanded";
import { soundEffects } from "@/components/ui/SoundEffects";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface FolderStackProps {
  activeFolderId: string | null;
  setActiveFolderId: (id: string | null) => void;
}

export function FolderStack({ activeFolderId, setActiveFolderId }: FolderStackProps) {
  const [hoveredFolderId, setHoveredFolderId] = useState<string | null>(null);
  const folders = portfolioData.folders;
  const { personal } = portfolioData;

  const handleOpen = (folderId: string) => {
    soundEffects.playFolderOpen();
    setActiveFolderId(folderId);
  };

  const handleTabHover = (folderId: string) => {
    setHoveredFolderId(folderId);
    soundEffects.playTabHover();
  };

  const activeFolder = folders.find((f) => f.id === activeFolderId) || null;

  // 6 Stacked layers configured with consistent staircase steps and side-by-side tabs
  const stackLayers = [
    {
      id: "contact",
      label: "CONTACT ME",
      left: "83.5%",
      width: "15%",
      topOffset: 0, // px from top of stack
      zIndex: 10,
      accent: true,
      bgTab: "bg-[#9333ea] hover:bg-[#a855f7] text-white shadow-[0_-4px_18px_rgba(147,51,234,0.5)] border-purple-300/60",
      bgCard: "bg-[#1e2438]/85",
    },
    {
      id: "design-lab",
      label: "DESIGN & LAB",
      left: "67.5%",
      width: "15%",
      topOffset: 12,
      zIndex: 20,
      accent: false,
      bgTab: "bg-[#232b45] text-neutral-200 border-white/20 group-hover:text-purple-200 group-hover:border-purple-400/50 shadow-[-2px_-3px_12px_rgba(0,0,0,0.4)]",
      bgCard: "bg-[#1b2136]/85",
    },
    {
      id: "skills",
      label: "SKILLS & TOOLS",
      left: "50.5%",
      width: "16%",
      topOffset: 24,
      zIndex: 30,
      accent: false,
      bgTab: "bg-[#20273f] text-neutral-200 border-white/20 group-hover:text-purple-200 group-hover:border-purple-400/50 shadow-[-2px_-3px_12px_rgba(0,0,0,0.4)]",
      bgCard: "bg-[#171d30]/90",
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      left: "33.5%",
      width: "16%",
      topOffset: 36,
      zIndex: 40,
      accent: false,
      bgTab: "bg-[#1d2338] text-neutral-200 border-white/20 group-hover:text-purple-200 group-hover:border-purple-400/50 shadow-[-2px_-3px_12px_rgba(0,0,0,0.4)]",
      bgCard: "bg-[#14192a]/90",
    },
    {
      id: "projects",
      label: "PROJECTS",
      left: "17.5%",
      width: "15%",
      topOffset: 48,
      zIndex: 50,
      accent: false,
      bgTab: "bg-[#191f33] text-neutral-200 border-white/20 group-hover:text-purple-200 group-hover:border-purple-400/50 shadow-[-2px_-3px_12px_rgba(0,0,0,0.4)]",
      bgCard: "bg-[#111624]/95",
    },
    {
      id: "about",
      label: "ABOUT ME",
      left: "1.5%",
      width: "15%",
      topOffset: 60,
      zIndex: 60,
      accent: false,
      isFront: true,
      bgTab: "bg-[#161c2e] text-neutral-200 border-white/20 group-hover:text-purple-200 group-hover:border-purple-400/50 shadow-[-2px_-3px_12px_rgba(0,0,0,0.4)]",
      bgCard: "bg-gradient-to-b from-[#141826]/98 via-[#0e111a]/98 to-[#08090d]/98",
    },
  ];

  return (
    <section className="relative w-full max-w-5xl mx-auto px-3 sm:px-6 pt-2 pb-20 select-none">
      {/* Glow Ambient behind folder stack */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Desktop Stacked Folder System */}
      <div className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[580px]">
        
        {stackLayers.map((layer) => {
          const isHovered = hoveredFolderId === layer.id;

          return (
            <motion.div
              key={layer.id}
              animate={{
                y: isHovered ? -35 : 0,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="absolute inset-x-0 bottom-0 cursor-pointer group"
              style={{
                top: `${layer.topOffset}px`,
                zIndex: layer.zIndex,
              }}
              onClick={() => handleOpen(layer.id)}
              onMouseEnter={() => handleTabHover(layer.id)}
              onMouseLeave={() => setHoveredFolderId(null)}
              data-cursor="OPEN"
            >
              {/* Tab Header */}
              <div
                style={{
                  left: layer.left,
                  width: layer.width,
                }}
                className={`absolute top-0 h-11 sm:h-12 rounded-t-xl sm:rounded-t-2xl border-t border-l border-r font-mono text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-wider flex items-center justify-center transition-all truncate px-1 z-20 ${layer.bgTab} ${
                  isHovered ? "border-purple-400/80 text-purple-100" : ""
                }`}
              >
                {layer.label}
              </div>

              {/* Body Card */}
              <div
                className={`absolute inset-x-0 top-10 sm:top-11 bottom-0 rounded-2xl sm:rounded-3xl backdrop-blur-xl border transition-all ${layer.bgCard} ${
                  layer.isFront
                    ? "border-white/20 group-hover:border-purple-400/50 p-6 sm:p-10 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.15)_inset] overflow-hidden"
                    : "shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                } ${
                  isHovered ? "border-purple-400/60 shadow-[0_-8px_30px_rgba(168,85,247,0.25)]" : "border-white/10"
                }`}
              >
                {/* If Front Layer (ABOUT ME), render the Hero typography */}
                {layer.isFront && (
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
                    {/* Subtle glow accent */}
                    <div className="absolute -top-12 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="space-y-6 sm:space-y-8">
                      {/* Top Metadata Line */}
                      <div className="text-[11px] sm:text-xs font-mono font-medium tracking-widest text-neutral-400 uppercase">
                        {personal.name.toUpperCase()} • {personal.copyrightYear}
                      </div>

                      {/* Main "My Portfolio" Heading in High-Contrast Luxury Serif Italic */}
                      <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-serif italic text-white font-normal tracking-tight leading-none">
                        My Portfolio
                      </h2>

                      {/* Role & Location Subtitle */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-mono tracking-wider text-neutral-300 uppercase">
                        <span>{personal.role.toUpperCase()}</span>
                        <span className="text-neutral-600">•</span>
                        <span>{personal.country.toUpperCase()}</span>
                        <span className="text-neutral-600">•</span>
                        <span className="inline-flex items-center gap-1.5 text-purple-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          OPEN TO FREELANCE WORK
                        </span>
                      </div>
                    </div>

                    {/* Bottom Action Prompt with Arrow */}
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpen("projects");
                        }}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold tracking-wider text-purple-400 hover:text-purple-300 transition-colors uppercase group/btn"
                        data-cursor="PROJECTS"
                      >
                        <span>BROWSE &amp; IDENTITY PROJECTS</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}

      </div>

      {/* Expanded Modal Window when any folder is clicked */}
      <FolderExpanded
        folder={activeFolder}
        onClose={() => setActiveFolderId(null)}
        onNavigateFolder={(id) => setActiveFolderId(id)}
        allFolders={folders}
      />
    </section>
  );
}
