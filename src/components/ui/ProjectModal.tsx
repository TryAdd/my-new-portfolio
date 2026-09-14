"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { soundEffects } from "./SoundEffects";
import { Badge } from "./Badge";
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Network,
  Terminal,
  Database
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        soundEffects.playClick();
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop blur overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundEffects.playClick();
            onClose();
          }}
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl -z-10"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 30, stiffness: 350 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-950 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-neutral-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Window Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-neutral-900/95 border-b border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-neutral-400 pl-2 border-l border-white/10">
                INTEGRATION DELIVERABLE // {project.id.toUpperCase()}
              </span>
            </div>

            <button
              onClick={() => {
                soundEffects.playClick();
                onClose();
              }}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white transition-all"
              data-cursor="CLOSE [ESC]"
              data-cursor-color="rose"
            >
              <X className="w-3.5 h-3.5" />
              <span>ESC</span>
            </button>
          </div>

          {/* Project Content Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Header Metadata */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="glow" size="sm">
                  {project.category}
                </Badge>
                <Badge variant="mono" size="sm">
                  {project.year}
                </Badge>
                <span className="text-xs font-mono text-neutral-400">
                  ROLE: {project.role}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-normal">
                {project.title}
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Featured Hero Image */}
            <div 
              data-cursor="VIEW ARCHITECTURE"
              data-cursor-color="emerald"
              className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-white/10 bg-neutral-900 cursor-pointer"
            >
              <img
                src={project.featuredImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="text-xs font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/10">
                  {project.type}
                </div>
                <div className="text-xs font-mono text-blue-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-blue-400/20">
                  {project.timeline}
                </div>
              </div>
            </div>

            {/* Integration & Middleware Architecture Narrative */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                INTEGRATION &amp; MIDDLEWARE ARCHITECTURE
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Endpoints & APIs Handled */}
            {project.endpoints && project.endpoints.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-400" />
                  APIS &amp; ENDPOINTS ORCHESTRATED
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.endpoints.map((ep, idx) => (
                    <div
                      key={idx}
                      data-cursor="API ENDPOINT"
                      data-cursor-color="blue"
                      className="p-3 rounded-xl bg-blue-950/15 border border-blue-500/20 font-mono text-xs text-blue-200 flex items-center gap-2"
                    >
                      <Terminal className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{ep}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  KEY ARCHITECTURAL HIGHLIGHTS
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {project.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      data-cursor="HIGHLIGHT"
                      data-cursor-color="emerald"
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 text-xs sm:text-sm text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Applied */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                TECH STACK &amp; PROTOCOLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} data-cursor={tech} data-cursor-color="blue">
                    <Badge variant="mono" size="sm">
                      {tech}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Links */}
            {project.links && project.links.length > 0 && (
              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEffects.playClick()}
                    data-cursor="VISIT LINK"
                    data-cursor-color="emerald"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
