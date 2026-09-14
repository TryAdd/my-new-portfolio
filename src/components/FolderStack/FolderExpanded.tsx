"use client";

import React, { useEffect } from "react";
import { FolderData } from "./FolderItem";
import { soundEffects } from "@/components/ui/SoundEffects";
import { Badge } from "@/components/ui/Badge";
import { AboutContent } from "@/components/FolderContents/AboutContent";
import { ProjectsContent } from "@/components/FolderContents/ProjectsContent";
import { ExperienceContent } from "@/components/FolderContents/ExperienceContent";
import { SkillsContent } from "@/components/FolderContents/SkillsContent";
import { DesignLabContent } from "@/components/FolderContents/DesignLabContent";
import { ContactContent } from "@/components/FolderContents/ContactContent";
import { 
  X, 
  ChevronLeft, 
  Folder, 
  Maximize2, 
  Terminal, 
  Sparkles,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FolderExpandedProps {
  folder: FolderData | null;
  onClose: () => void;
  onNavigateFolder: (folderId: string) => void;
  allFolders: FolderData[];
}

export function FolderExpanded({
  folder,
  onClose,
  onNavigateFolder,
  allFolders,
}: FolderExpandedProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundEffects.playFolderClose();
        onClose();
      }
    };

    if (folder) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [folder, onClose]);

  if (!folder) return null;

  const getFolderThemeClasses = (id: string) => {
    switch (id) {
      case "projects":
        return {
          text: "text-emerald-300",
          border: "border-emerald-400/40",
          bgActive: "bg-emerald-500/20 text-emerald-200 border-emerald-400/50",
          pulse: "bg-emerald-400",
          shadow: "shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(16,185,129,0.15)]",
          cardGradient: "from-[#0d1a15] via-[#08120e] to-[#040907]",
        };
      case "experience":
        return {
          text: "text-amber-300",
          border: "border-amber-400/40",
          bgActive: "bg-amber-500/20 text-amber-200 border-amber-400/50",
          pulse: "bg-amber-400",
          shadow: "shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(245,158,11,0.15)]",
          cardGradient: "from-[#1a140b] via-[#100d07] to-[#080603]",
        };
      case "skills":
        return {
          text: "text-violet-300",
          border: "border-violet-400/40",
          bgActive: "bg-violet-500/20 text-violet-200 border-violet-400/50",
          pulse: "bg-violet-400",
          shadow: "shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(139,92,246,0.15)]",
          cardGradient: "from-[#150d24] via-[#0d0817] to-[#06040b]",
        };
      case "design-lab":
        return {
          text: "text-rose-300",
          border: "border-rose-400/40",
          bgActive: "bg-rose-500/20 text-rose-200 border-rose-400/50",
          pulse: "bg-rose-400",
          shadow: "shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(244,63,94,0.15)]",
          cardGradient: "from-[#1a0d13] via-[#10080c] to-[#080406]",
        };
      case "contact":
        return {
          text: "text-sky-300",
          border: "border-sky-400/40",
          bgActive: "bg-sky-500/20 text-sky-200 border-sky-400/50",
          pulse: "bg-sky-400",
          shadow: "shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(14,165,233,0.15)]",
          cardGradient: "from-[#0b1624] via-[#070e17] to-[#04070b]",
        };
      case "about":
      default:
        return {
          text: "text-blue-300",
          border: "border-blue-400/40",
          bgActive: "bg-blue-500/20 text-blue-200 border-blue-400/50",
          pulse: "bg-blue-400",
          shadow: "shadow-[0_30px_100px_rgba(0,0,0,0.95),0_0_80px_rgba(59,130,246,0.15)]",
          cardGradient: "from-[#101726] via-[#0b101a] to-[#06080d]",
        };
    }
  };

  const theme = getFolderThemeClasses(folder.id);

  const renderContent = () => {
    switch (folder.id) {
      case "about":
        return <AboutContent />;
      case "projects":
        return <ProjectsContent />;
      case "experience":
        return <ExperienceContent />;
      case "skills":
        return <SkillsContent />;
      case "design-lab":
        return <DesignLabContent />;
      case "contact":
        return <ContactContent />;
      default:
        return <AboutContent />;
    }
  };

  const handleClose = () => {
    soundEffects.playFolderClose();
    onClose();
  };

  const getShortTabLabel = (f: FolderData) => {
    switch (f.id) {
      case "about":
        return "ABOUT ME";
      case "projects":
        return "PROJECTS";
      case "experience":
        return "EXPERIENCE";
      case "skills":
        return "SKILLS & TOOLS";
      case "design-lab":
        return "CERTIFICATIONS";
      case "contact":
        return "CONTACT ME";
      default:
        return f.name.split(" ").slice(0, 3).join(" ").toUpperCase();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Dimmed & Blurred Background Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl -z-10"
        />

        {/* Large Floating Folder Panel / Document Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{
            type: "spring",
            damping: 28,
            stiffness: 300,
            mass: 0.8,
          }}
          onClick={(e) => e.stopPropagation()}
          className={`relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-gradient-to-b ${theme.cardGradient} border border-white/20 ${theme.shadow} overflow-hidden`}
        >
          {/* Top Window Bar (Mac OS Finder / Digital Archive aesthetics) */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-8 py-3.5 sm:py-4 bg-neutral-900/90 border-b border-white/10 backdrop-blur-md shrink-0">
            {/* Left: Window Traffic Lights & Directory Path */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClose}
                  className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group cursor-pointer"
                  title="Close (ESC)"
                  data-cursor="CLOSE"
                  data-cursor-color="rose"
                >
                  <X className="w-2 h-2 text-red-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Breadcrumb path */}
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-neutral-400 pl-3 border-l border-white/10">
                <span className="text-neutral-500">workspace</span>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-300">folders</span>
                <span className="text-neutral-600">/</span>
                <span className={`${theme.text} font-semibold uppercase`}>
                  {folder.number}_{folder.name.replace(/\s+/g, "_")}
                </span>
              </div>
            </div>

            {/* Right: Quick Tab Switcher */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-full p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
              {allFolders.map((f) => {
                const fTheme = getFolderThemeClasses(f.id);
                const fColor = f.id === "about" ? "blue" : f.id === "projects" ? "emerald" : f.id === "experience" ? "amber" : f.id === "skills" ? "violet" : f.id === "design-lab" ? "rose" : "sky";
                const label = getShortTabLabel(f);
                return (
                  <button
                    key={f.id}
                    onClick={() => {
                      soundEffects.playTabHover();
                      onNavigateFolder(f.id);
                    }}
                    data-cursor={`SWITCH TO ${label}`}
                    data-cursor-color={fColor}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg text-[10px] sm:text-[11px] font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      f.id === folder.id
                        ? `${fTheme.bgActive} font-semibold shadow-sm`
                        : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Folder Content Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12">
            {/* Ambient Corner Flare matching the active folder color */}
            <div
              className="absolute top-12 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-25 -z-10 transition-colors duration-500"
              style={{ backgroundColor: folder.accentColor }}
            />

            {renderContent()}
          </div>

          {/* Bottom Status Bar */}
          <div className="px-6 sm:px-8 py-3 bg-neutral-950 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500 shrink-0">
            <div className="flex items-center gap-4">
              <span>FOLDER: {folder.name}</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">TYPE: {folder.fileType}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-1.5 h-1.5 rounded-full ${theme.pulse} animate-pulse`} />
              <span className={theme.text}>ACTIVE SESSION // 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
