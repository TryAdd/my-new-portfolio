"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Badge } from "@/components/ui/Badge";
import { soundEffects } from "@/components/ui/SoundEffects";
import { ArrowUpRight, FolderGit2, Layers, Network } from "lucide-react";

export function ProjectsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = [
    "ALL",
    "Enterprise ERP & HR",
    "Real Estate & Billing",
    "Supply Chain & ERP",
    "InsurTech",
    "FinTech & Wealth",
    "Enterprise Asset Ops",
    "Backend & Full-Stack"
  ];

  const filteredProjects = selectedCategory === "ALL" 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    soundEffects.playClick();
    setActiveProject(project);
  };

  return (
    <div className="space-y-8">
      {/* Category filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
          <FolderGit2 className="w-4 h-4 text-blue-400" />
          <span>ENTERPRISE DELIVERABLES // {filteredProjects.length} INTEGRATIONS</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-neutral-900/80 border border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundEffects.playTabHover();
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-blue-500/20 text-blue-200 border border-blue-400/40 shadow-[0_0_12px_rgba(59,130,246,0.25)] font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {cat === "Enterprise ERP & HR" ? "ERP & HR" : cat === "Real Estate & Billing" ? "REAL ESTATE" : cat === "Enterprise Asset Ops" ? "ASSETS" : cat === "Backend & Full-Stack" ? "BACKEND" : cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            data-cursor="VIEW"
            className="group relative flex flex-col justify-between rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/[0.08] hover:border-blue-400/40 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            {/* Top Row: Year, Category badge & Arrow */}
            <div className="space-y-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="glow" size="xs">
                    {project.category}
                  </Badge>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {project.year}
                  </span>
                </div>

                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.04] group-hover:bg-blue-500 group-hover:text-white text-neutral-400 transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Thumbnail Area */}
              <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
                <img
                  src={project.featuredImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300">
                  {project.type}
                </div>
              </div>

              {/* Title & Summary */}
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-blue-200 transition-colors mb-2 font-normal">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed font-light">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Bottom Tech Pills */}
            <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white/[0.03] text-[10px] font-mono text-neutral-400 border border-white/[0.04]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-1.5 py-0.5 rounded bg-white/[0.02] text-[10px] font-mono text-neutral-500">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Case Study Deep-dive Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
