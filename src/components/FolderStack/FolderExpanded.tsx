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
          className="relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#121624] via-[#0d0f17] to-[#08090d] border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.95),0_1px_0_rgba(255,255,255,0.15)_inset] overflow-hidden"
        >
          {/* Top Window Bar (Mac OS Finder / Digital Archive aesthetics) */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-neutral-900/90 border-b border-white/10 backdrop-blur-md shrink-0">
            {/* Left: Window Traffic Lights & Directory Path */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleClose}
                  className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group"
                  title="Close (ESC)"
                >
                  <X className="w-2 h-2 text-red-950 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Breadcrumb path */}
              <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs text-neutral-400 pl-3 border-l border-white/10">
                <span className="text-neutral-500">workspace</span>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-300">folders</span>
                <span className="text-neutral-600">/</span>
                <span className="text-purple-300 font-semibold uppercase">
                  {folder.number}_{folder.name.replace(/\s+/g, "_")}
                </span>
              </div>
            </div>

            {/* Right: Quick Tab Switcher & Close button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Folder Selector / Quick Jump on Desktop */}
              <div className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                {allFolders.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      soundEffects.playTabHover();
                      onNavigateFolder(f.id);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono tracking-wider transition-all ${
                      f.id === folder.id
                        ? "bg-purple-500/20 text-purple-200 border border-purple-400/40 font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {f.number}
                  </button>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white font-mono text-xs tracking-wider transition-all"
                data-cursor="CLOSE"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">CLOSE [ESC]</span>
              </button>
            </div>
          </div>

          {/* Folder Content Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12">
            {/* Ambient Corner Flare */}
            <div
              className="absolute top-12 right-0 w-96 h-96 rounded-full blur-[100px] pointer-events-none opacity-20 -z-10"
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
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-300">ACTIVE SESSION // 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
