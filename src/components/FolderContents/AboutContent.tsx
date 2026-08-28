"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { 
  User, 
  MapPin, 
  Sparkles, 
  Compass, 
  Layers, 
  Smartphone, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  FileText 
} from "lucide-react";

export function AboutContent() {
  const { personal } = portfolioData;

  return (
    <div className="space-y-10 text-neutral-200">
      {/* Top Dossier Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/[0.08] pb-10">
        {/* Left Column: Hello statement & Bio */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="glow" size="sm">
              <User className="w-3 h-3" /> DOSSIER // AH-01
            </Badge>
            <span className="text-xs font-mono text-neutral-400">
              STATUS: {personal.currentStatus.toUpperCase()}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white">
            Hello, I’m <span className="text-purple-300 italic">{personal.name}</span>.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            {personal.aboutBioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Editorial Quote Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-purple-950/20 border border-purple-500/20 border-l-4 border-l-purple-400 text-xs sm:text-sm text-purple-200/90 font-mono italic">
            “{personal.editorialQuote}”
          </div>
        </div>

        {/* Right Column: Digital ID Stamp & Quick Stats */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative rounded-2xl bg-neutral-900/90 border border-white/10 p-5 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            {/* Holographic accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                  IDENTIFIER CARD
                </span>
              </div>
              <span className="font-mono text-[10px] text-purple-300">
                VERIFIED
              </span>
            </div>

            {/* Profile Avatar with subtle frame */}
            <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 border border-white/10 bg-neutral-800">
              <img
                src={personal.avatarImage}
                alt={personal.name}
                className="w-full h-full object-cover grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono text-neutral-300">
                LOC: 26.2285° N, 50.5860° E
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-neutral-500">EXPERIENCE</span>
                <span className="text-neutral-200">5+ Years</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-neutral-500">PRIMARY FOCUS</span>
                <span className="text-purple-300">Mobile & Design</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-neutral-500">LOCATION</span>
                <span className="text-neutral-200">Bahrain (GCC)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-neutral-500">LANGUAGE</span>
                <span className="text-neutral-200">Arabic / English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Sections: PROFILE, LOCATION, SPECIALIZATION, INTERESTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Specializations Card */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-purple-300">
            <Cpu className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              SPECIALIZATION & CAPABILITIES
            </h3>
          </div>
          <ul className="space-y-3">
            {personal.specializations.map((spec, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Interests & Aesthetics Card */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-purple-300">
            <Compass className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              CREATIVE INTERESTS & PASSIONS
            </h3>
          </div>
          <ul className="space-y-3">
            {personal.interests.map((interest, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                <Sparkles className="w-3.5 h-3.5 text-purple-400/80 shrink-0 mt-0.5" />
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Timezone Card */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-purple-300">
            <MapPin className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              LOCATION & COLLABORATION
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
            Operating from Manama, Bahrain (GMT+3). Working seamlessly across the GCC, Europe, and global remote setups. Available for on-site consulting in the Gulf region.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="mono">GMT+3 Timezone</Badge>
            <Badge variant="mono">GCC Region</Badge>
            <Badge variant="mono">Remote Ready</Badge>
          </div>
        </div>

        {/* Philosophy Card */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-purple-300">
            <Layers className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              ENGINEERING PHILOSOPHY
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            I believe software should be as delightful to touch as physical hardware. Code is not just functional logic — it is the medium through which visual poetry, physics, and human intuition come alive.
          </p>
        </div>
      </div>
    </div>
  );
}
