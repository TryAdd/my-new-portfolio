"use client";

import React from "react";
import { soundEffects } from "@/components/ui/SoundEffects";
import { Badge } from "@/components/ui/Badge";
import { 
  Folder, 
  FolderGit2, 
  Briefcase, 
  Terminal, 
  Sparkles, 
  Mail, 
  ChevronRight,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

export interface FolderData {
  id: string;
  number: string;
  name: string;
  sublabel: string;
  fileType: string;
  itemCount: string;
  updated: string;
  accentColor: string;
  description: string;
}

interface FolderItemProps {
  folder: FolderData;
  index: number;
  total: number;
  onOpen: (folderId: string) => void;
  isOpen: boolean;
}

export function FolderItem({
  folder,
  index,
  total,
  onOpen,
  isOpen,
}: FolderItemProps) {
  const getFolderIcon = (id: string) => {
    switch (id) {
      case "about":
        return <Folder className="w-4 h-4 text-blue-400" />;
      case "projects":
        return <FolderGit2 className="w-4 h-4 text-sky-400" />;
      case "experience":
        return <Briefcase className="w-4 h-4 text-blue-300" />;
      case "skills":
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case "design-lab":
        return <Sparkles className="w-4 h-4 text-cyan-400" />;
      case "contact":
        return <Mail className="w-4 h-4 text-blue-300" />;
      default:
        return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  // Organic slight rotation angles for physical stacked feel
  const rotations = [-0.6, 0.8, -0.4, 0.7, -0.5, 0.5];
  const rotation = rotations[index % rotations.length];

  // Staggered tab horizontal positions
  const tabOffsets = ["10%", "24%", "38%", "52%", "66%", "78%"];
  const tabOffset = tabOffsets[index % tabOffsets.length];

  const handleClick = () => {
    soundEffects.playFolderOpen();
    onOpen(folder.id);
  };

  const handleMouseEnter = () => {
    soundEffects.playTabHover();
  };

  return (
    <motion.div
      layoutId={`folder-container-${folder.id}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="relative w-full cursor-pointer group"
      style={{
        zIndex: total - index,
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      data-cursor="OPEN"
    >
      {/* Container with organic tilt and hover physics */}
      <motion.div
        whileHover={{
          y: -12,
          scale: 1.008,
          transition: { duration: 0.25, ease: "easeOut" },
        }}
        whileTap={{ scale: 0.99 }}
        style={{
          rotate: `${rotation}deg`,
        }}
        className="relative w-full transition-shadow duration-300"
      >
        {/* Physical Folder Tab (Sticks out at the top of each folder) */}
        <div
          className="relative inline-flex items-center gap-3 px-6 py-3 rounded-t-xl bg-gradient-to-t from-[#101726] to-[#1a2640] border-t border-l border-r border-white/20 shadow-[-2px_-4px_16px_rgba(0,0,0,0.4)] group-hover:border-blue-400/60 transition-colors"
          style={{
            marginLeft: `clamp(1rem, ${tabOffset}, 70%)`,
            transform: "translateY(1px)",
          }}
        >
          <div className="flex items-center gap-2">
            {getFolderIcon(folder.id)}
            <span className="font-mono text-xs font-bold text-white tracking-widest group-hover:text-blue-200 transition-colors">
              {folder.number} // {folder.name}
            </span>
          </div>

          <span className="hidden sm:inline-block text-[10px] font-mono text-neutral-400 border-l border-white/10 pl-2">
            {folder.itemCount}
          </span>
        </div>

        {/* Physical Folder Body */}
        <div className="relative w-full rounded-2xl bg-gradient-to-b from-[#0e1422] via-[#0a0d17] to-[#06080d] border border-white/15 group-hover:border-blue-400/50 p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_1px_0_rgba(255,255,255,0.1)_inset] transition-all duration-300 overflow-hidden">
          {/* Subtle Ambient Radial Highlight on Folder Corner */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
            style={{ backgroundColor: folder.accentColor }}
          />

          {/* Folder Internal Grid / Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left Info: Title & Sublabel */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <Badge variant="glow" size="xs">
                  {folder.fileType}
                </Badge>
                <span className="text-[11px] font-mono text-neutral-400">
                  REF: DIR_0{index + 1}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-white group-hover:text-blue-100 transition-colors">
                {folder.name}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl">
                {folder.description}
              </p>
            </div>

            {/* Right Info: Metadata & Interactive Action Pill */}
            <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
              <div className="hidden sm:flex flex-col text-right font-mono text-[11px] text-neutral-400 space-y-0.5">
                <div>
                  <span className="text-neutral-500">ITEMS: </span>
                  <span className="text-neutral-200">{folder.itemCount}</span>
                </div>
                <div>
                  <span className="text-neutral-500">UPDATED: </span>
                  <span className="text-blue-300">{folder.updated}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] group-hover:bg-blue-500/20 border border-white/10 group-hover:border-blue-400/40 text-neutral-300 group-hover:text-blue-200 font-mono text-xs tracking-wider transition-all shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                <span>OPEN FOLDER</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
