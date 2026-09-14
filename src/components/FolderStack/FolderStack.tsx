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
    if (hoveredFolderId !== folderId) {
      setHoveredFolderId(folderId);
      soundEffects.playTabHover();
    }
  };

  const activeFolder = folders.find((f) => f.id === activeFolderId) || null;

  // 6 Stacked layers with custom color palettes, distinct animations, and dedicated cursor triggers
  const stackLayers = [
    {
      id: "contact",
      label: "CONTACT ME",
      cursorText: "OPEN CONTACT",
      cursorColor: "sky",
      themeColor: "#0ea5e9",
      number: "06",
      left: "83.5%",
      width: "15%",
      topOffset: 0,
      zIndex: 10,
      accent: true,
      bgTab: "bg-[#0ea5e9] hover:bg-[#38bdf8] text-white shadow-[0_-4px_22px_rgba(14,165,233,0.6)] border-sky-300/80",
      bgCard: "bg-[#091522] border-sky-500/40",
      hoverBorder: "border-sky-400 shadow-[0_-12px_40px_rgba(14,165,233,0.45)]",
      motionConfig: {
        animate: (isHovered: boolean) => ({
          y: isHovered ? -52 : 0,
          scale: isHovered ? 1.02 : 1,
        }),
        transition: { type: "spring" as const, stiffness: 320, damping: 20, mass: 0.7 },
      },
    },
    {
      id: "design-lab",
      label: "CERTIFICATIONS",
      cursorText: "OPEN CERTIFICATIONS",
      cursorColor: "rose",
      themeColor: "#f43f5e",
      number: "05",
      left: "67.5%",
      width: "15%",
      topOffset: 12,
      zIndex: 20,
      accent: false,
      bgTab: "bg-[#28131b] text-neutral-200 border-rose-400/30 hover:text-rose-100 hover:border-rose-400/80 hover:shadow-[0_-6px_22px_rgba(244,63,94,0.5)]",
      bgCard: "bg-[#180a11] border-rose-500/40",
      hoverBorder: "border-rose-400 shadow-[0_-12px_40px_rgba(244,63,94,0.45)]",
      motionConfig: {
        animate: (isHovered: boolean) => ({
          y: isHovered ? -50 : 0,
          rotate: isHovered ? 0.7 : 0,
          scale: isHovered ? 1.015 : 1,
        }),
        transition: { type: "spring" as const, stiffness: 260, damping: 22, mass: 0.75 },
      },
    },
    {
      id: "skills",
      label: "SKILLS & TOOLS",
      cursorText: "OPEN SKILLS",
      cursorColor: "violet",
      themeColor: "#8b5cf6",
      number: "04",
      left: "50.5%",
      width: "16%",
      topOffset: 24,
      zIndex: 30,
      accent: false,
      bgTab: "bg-[#201435] text-neutral-200 border-violet-400/30 hover:text-violet-100 hover:border-violet-400/80 hover:shadow-[0_-6px_22px_rgba(139,92,246,0.5)]",
      bgCard: "bg-[#130b20] border-violet-500/40",
      hoverBorder: "border-violet-400 shadow-[0_-12px_40px_rgba(139,92,246,0.45)]",
      motionConfig: {
        animate: (isHovered: boolean) => ({
          y: isHovered ? -50 : 0,
          scale: isHovered ? 1.02 : 1,
        }),
        transition: { type: "spring" as const, stiffness: 290, damping: 21, mass: 0.7 },
      },
    },
    {
      id: "experience",
      label: "EXPERIENCE",
      cursorText: "OPEN EXPERIENCE",
      cursorColor: "amber",
      themeColor: "#f59e0b",
      number: "03",
      left: "33.5%",
      width: "16%",
      topOffset: 36,
      zIndex: 40,
      accent: false,
      bgTab: "bg-[#2b1f0e] text-neutral-200 border-amber-400/30 hover:text-amber-100 hover:border-amber-400/80 hover:shadow-[0_-6px_22px_rgba(245,158,11,0.5)]",
      bgCard: "bg-[#1a1207] border-amber-500/40",
      hoverBorder: "border-amber-400 shadow-[0_-12px_40px_rgba(245,158,11,0.45)]",
      motionConfig: {
        animate: (isHovered: boolean) => ({
          y: isHovered ? -50 : 0,
          rotate: isHovered ? -0.7 : 0,
          scale: isHovered ? 1.015 : 1,
        }),
        transition: { type: "spring" as const, stiffness: 250, damping: 23, mass: 0.8 },
      },
    },
    {
      id: "projects",
      label: "PROJECTS",
      cursorText: "OPEN PROJECTS",
      cursorColor: "emerald",
      themeColor: "#10b981",
      number: "02",
      left: "17.5%",
      width: "15%",
      topOffset: 48,
      zIndex: 50,
      accent: false,
      bgTab: "bg-[#0f281e] text-neutral-200 border-emerald-400/30 hover:text-emerald-100 hover:border-emerald-400/80 hover:shadow-[0_-6px_22px_rgba(16,185,129,0.5)]",
      bgCard: "bg-[#081711] border-emerald-500/40",
      hoverBorder: "border-emerald-400 shadow-[0_-12px_40px_rgba(16,185,129,0.45)]",
      motionConfig: {
        animate: (isHovered: boolean) => ({
          y: isHovered ? -50 : 0,
          rotate: isHovered ? -1.0 : 0,
          scale: isHovered ? 1.02 : 1,
        }),
        transition: { type: "spring" as const, stiffness: 280, damping: 22, mass: 0.75 },
      },
    },
    {
      id: "about",
      label: "ABOUT ME",
      cursorText: "OPEN ABOUT ME",
      cursorColor: "blue",
      themeColor: "#3b82f6",
      number: "01",
      left: "1.5%",
      width: "15%",
      topOffset: 60,
      zIndex: 60,
      accent: false,
      isFront: true,
      bgTab: "bg-[#0c1629] text-neutral-200 border-blue-400/40 hover:text-blue-100 hover:border-blue-400/90 shadow-[-2px_-3px_12px_rgba(0,0,0,0.4)]",
      bgCard: "bg-[#080d1a] bg-gradient-to-b from-[#0c1629] via-[#080d1a] to-[#04070d]",
      hoverBorder: "border-blue-400 shadow-[0_-10px_35px_rgba(59,130,246,0.4)]",
      motionConfig: {
        animate: (isHovered: boolean) => ({
          y: isHovered ? -26 : 0,
          scale: isHovered ? 1.01 : 1,
        }),
        transition: { type: "spring" as const, stiffness: 260, damping: 23, mass: 0.75 },
      },
    },
  ];

  return (
    <section className="relative w-full max-w-5xl mx-auto px-3 sm:px-6 pt-2 pb-20 select-none">
      {/* Dynamic Ambient lighting behind folder stack */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-500 opacity-20"
        style={{
          backgroundColor: hoveredFolderId 
            ? stackLayers.find(l => l.id === hoveredFolderId)?.themeColor || "#3b82f6"
            : "#3b82f6"
        }}
      />

      {/* Desktop Stacked Folder System */}
      <div 
        className="relative w-full min-h-[480px] sm:min-h-[540px] md:min-h-[580px]"
        onMouseLeave={() => setHoveredFolderId(null)}
      >
        {/* Render all 6 layers with dynamic hover elevation */}
        {stackLayers.map((layer) => {
          const isHovered = hoveredFolderId === layer.id;

          return (
            <motion.div
              key={layer.id}
              animate={layer.motionConfig.animate(isHovered)}
              transition={layer.motionConfig.transition}
              className="absolute inset-x-0 bottom-0 pointer-events-none"
              style={{
                top: `${layer.topOffset}px`,
                zIndex: isHovered ? 75 : layer.zIndex,
              }}
            >
              {/* Tab Header */}
              <div
                style={{
                  left: layer.left,
                  width: layer.width,
                }}
                onClick={() => handleOpen(layer.id)}
                onMouseEnter={() => handleTabHover(layer.id)}
                data-cursor={layer.cursorText}
                data-cursor-color={layer.cursorColor}
                className={`pointer-events-auto absolute top-0 h-11 sm:h-12 rounded-t-xl sm:rounded-t-2xl border-t border-l border-r font-mono text-[10px] sm:text-[11px] md:text-xs font-semibold tracking-wider flex items-center justify-center transition-all duration-300 truncate px-1 cursor-pointer z-30 ${layer.bgTab} ${
                  isHovered ? layer.hoverBorder : ""
                }`}
              >
                {layer.label}
              </div>

              {/* Card Body */}
              {layer.isFront ? (
                /* Front Layer (ABOUT ME / "My Portfolio" Hero Card) - 100% Solid Midnight Navy Blue */
                <div
                  onClick={() => handleOpen(layer.id)}
                  onMouseEnter={() => handleTabHover(layer.id)}
                  data-cursor="OPEN ABOUT ME"
                  data-cursor-color="blue"
                  className={`pointer-events-auto absolute inset-x-0 top-10 sm:top-11 bottom-0 rounded-2xl sm:rounded-3xl border border-blue-500/30 hover:border-blue-400/70 p-6 sm:p-10 md:p-14 ${layer.bgCard} shadow-[0_25px_60px_rgba(0,0,0,0.95),0_1px_0_rgba(59,130,246,0.2)_inset] overflow-hidden cursor-pointer transition-all duration-300 ${
                    isHovered ? layer.hoverBorder : ""
                  }`}
                >
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
                    {/* Deep Blue Glow Flare */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

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
                        <span>SOFTWARE INTEGRATION ENGINEER • MIDDLEWARE &amp; API DEVELOPER</span>
                        <span className="text-neutral-600">•</span>
                        <span>{personal.country.toUpperCase()}</span>
                        <span className="text-neutral-600">•</span>
                        <span className="inline-flex items-center gap-1.5 text-blue-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          GLOBAL ITS GROUP
                        </span>
                      </div>
                    </div>

                    {/* Bottom Action Prompt with Arrow */}
                    <div className="pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpen("about");
                        }}
                        data-cursor="OPEN ABOUT ME"
                        data-cursor-color="blue"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold tracking-wider text-blue-400 hover:text-blue-300 transition-colors uppercase group/btn"
                      >
                        <span>VIEW DOSSIER &amp; PROFILE</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Background Folder Sleeves with clickable interactive card reveal */
                <div
                  onClick={() => handleOpen(layer.id)}
                  onMouseEnter={() => handleTabHover(layer.id)}
                  data-cursor={layer.cursorText}
                  data-cursor-color={layer.cursorColor}
                  className={`pointer-events-auto absolute inset-x-0 top-10 sm:top-11 bottom-0 rounded-2xl sm:rounded-3xl border ${layer.bgCard} shadow-[0_20px_50px_rgba(0,0,0,0.85)] cursor-pointer transition-all duration-300 p-6 overflow-hidden ${
                    isHovered ? layer.hoverBorder : "border-white/10"
                  }`}
                >
                  {/* Subtle top indicator inside rising sleeve */}
                  <div className="flex items-center justify-between opacity-80">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase font-bold" style={{ color: layer.themeColor }}>
                        {layer.number} // {layer.label}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                      CLICK TO EXPAND
                    </span>
                  </div>
                </div>
              )}
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
