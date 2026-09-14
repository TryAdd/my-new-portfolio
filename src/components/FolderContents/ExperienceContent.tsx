"use client";

import React, { useState } from "react";
import { portfolioData, Experience } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { soundEffects } from "@/components/ui/SoundEffects";
import { 
  Briefcase, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Terminal 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ExperienceContent() {
  const [expandedId, setExpandedId] = useState<string>(portfolioData.experiences[0]?.id || "");

  const toggleExpand = (id: string) => {
    soundEffects.playClick();
    setExpandedId(prev => prev === id ? "" : id);
  };

  return (
    <div className="space-y-8">
      {/* Top Section Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-2">
          <Badge variant="glow" size="xs">
            <Briefcase className="w-3 h-3" /> CAREER ARCHIVE // GLOBAL ITS GROUP
          </Badge>
        </div>
        <span className="text-xs font-mono text-neutral-500">
          DOCUMENT LOGS (TOTAL {portfolioData.experiences.length})
        </span>
      </div>

      {/* Experience Documents Accordion / Logs */}
      <div className="space-y-4">
        {portfolioData.experiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;

          return (
            <div
              key={exp.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? "bg-neutral-900/90 border-blue-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                  : "bg-white/[0.02] hover:bg-white/[0.04] border-white/[0.08]"
              }`}
            >
              {/* Header Bar / Trigger */}
              <button
                onClick={() => toggleExpand(exp.id)}
                className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                data-cursor="INSPECT"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300 font-mono text-xs font-bold">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-serif text-white font-normal group-hover:text-blue-200">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400 mt-1">
                      <span className="text-blue-300 font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.06]">
                  <Badge variant="mono" size="xs">
                    {exp.period}
                  </Badge>
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-neutral-400 transition-transform duration-300 ${
                      isExpanded ? "rotate-90 text-blue-300 bg-blue-500/20" : ""
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expandable Document Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 pt-0 border-t border-white/[0.06] space-y-6 text-neutral-300">
                      {/* Summary */}
                      <p className="text-sm sm:text-base leading-relaxed font-light text-neutral-200">
                        {exp.summary}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                          <Terminal className="w-3.5 h-3.5 text-blue-400" />
                          <span>CORE RESPONSIBILITIES</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                              <span className="text-blue-400 font-mono mt-0.5">›</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>NOTABLE IMPACT &amp; ACHIEVEMENTS</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies Applied */}
                      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono text-neutral-500 uppercase mr-2">
                          STACK:
                        </span>
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="mono" size="xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
