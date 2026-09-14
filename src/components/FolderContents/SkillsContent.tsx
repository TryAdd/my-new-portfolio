"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { 
  Terminal, 
  Smartphone, 
  Code2, 
  Database, 
  Cpu, 
  Layers,
  Network
} from "lucide-react";

export function SkillsContent() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-4 h-4 text-blue-400" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case "Database":
        return <Database className="w-4 h-4 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-blue-400" />;
      case "Terminal":
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case "Layers":
      default:
        return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <Badge variant="glow" size="xs">
            <Terminal className="w-3 h-3" /> CORE TECHNOLOGIES &amp; SYSTEM MANIFEST
          </Badge>
          <p className="text-xs font-mono text-neutral-400">
            Enterprise integrations, middleware design, ERP pipelines, databases, and client toolchains
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-1.5 text-blue-300">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>CORE EXPERT</span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-neutral-600" />
            <span>PRODUCTION</span>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {portfolioData.skills.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl bg-neutral-900/50 border border-white/[0.08] p-6 space-y-5 hover:border-blue-500/30 transition-all duration-300"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-400/20">
                  {getCategoryIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-neutral-200">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[10px] text-blue-400">
                    {category.code}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-mono text-neutral-500">
                {category.skills.length} MODULES
              </span>
            </div>

            {/* Skills List in Terminal/Document Style */}
            <div className="space-y-2.5">
              {category.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all ${
                    skill.highlight
                      ? "bg-blue-950/15 border-blue-500/25 hover:border-blue-400/40"
                      : "bg-white/[0.02] border-white/[0.04] hover:border-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-mono text-xs">›</span>
                      <span className="font-mono text-xs sm:text-sm font-medium text-white">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {skill.years && (
                        <span className="text-[10px] font-mono text-neutral-500">
                          {skill.years}
                        </span>
                      )}
                      <span
                        className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          skill.level === "Core Expert"
                            ? "bg-blue-500/20 text-blue-200 border-blue-400/30 font-semibold"
                            : "bg-white/[0.04] text-neutral-400 border-white/[0.08]"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {skill.description && (
                    <p className="text-[11px] font-mono text-neutral-400 pl-4 font-light">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
