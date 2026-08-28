"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { soundEffects } from "@/components/ui/SoundEffects";
import { Sparkles, Eye, Layers, Compass, ExternalLink } from "lucide-react";

export function DesignLabContent() {
  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <Badge variant="glow" size="xs">
            <Sparkles className="w-3 h-3" /> LAB & EXPERIMENTAL // R&D
          </Badge>
          <p className="text-xs font-mono text-neutral-400">
            Spatial UI explorations, tactile components, shader visuals, and creative prototypes
          </p>
        </div>

        <span className="text-xs font-mono text-neutral-500">
          {portfolioData.designLab.length} ARTIFACTS
        </span>
      </div>

      {/* Grid of Lab Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.designLab.map((item) => (
          <div
            key={item.id}
            data-cursor="INSPECT"
            onClick={() => soundEffects.playClick()}
            className="group rounded-2xl bg-neutral-900/60 hover:bg-neutral-900/90 border border-white/[0.08] hover:border-purple-400/40 p-4 transition-all duration-300 flex flex-col justify-between cursor-pointer"
          >
            <div className="space-y-3 mb-4">
              {/* Media Preview Box */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden border border-white/10 bg-neutral-950">
                <img
                  src={item.previewUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-purple-300">
                  {item.year}
                </div>
                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-300">
                  {item.category}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-base font-serif text-white group-hover:text-purple-200 transition-colors mb-1 font-normal">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-white/[0.03] text-[9px] font-mono text-neutral-400 border border-white/[0.04]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
