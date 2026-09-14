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
  Award,
  GraduationCap,
  HeartHandshake,
  Phone,
  Mail,
  Linkedin,
  Github,
  Building2
} from "lucide-react";

export function AboutContent() {
  const { personal } = portfolioData;

  return (
    <div className="space-y-10 text-neutral-200">
      {/* Top Dossier Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-white/[0.08] pb-10">
        {/* Left Column: Hello statement & Executive Summary */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="glow" size="sm">
              <User className="w-3 h-3" /> EXECUTIVE SUMMARY // AH-01
            </Badge>
            <span className="text-xs font-mono text-neutral-400">
              GLOBAL ITS GROUP • MIDDLEWARE &amp; APIS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-white">
            Hello, I’m <span className="text-blue-300 italic">{personal.name}</span>.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            {personal.aboutBioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Editorial Quote Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-blue-950/20 border border-blue-500/20 border-l-4 border-l-blue-400 text-xs sm:text-sm text-blue-200/90 font-mono italic">
            “{personal.editorialQuote}”
          </div>
        </div>

        {/* Right Column: Digital ID Stamp & Contact Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative rounded-2xl bg-neutral-900/90 border border-white/10 p-5 overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            {/* Holographic accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
                  VERIFIED PROFILE // 2026
                </span>
              </div>
              <span className="font-mono text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ACTIVE
              </span>
            </div>

            {/* Profile Info */}
            <div className="space-y-2.5 text-xs font-mono">
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-neutral-500">EXPERIENCE</span>
                <span className="text-neutral-200">5+ Years Hands-On</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-neutral-500">SPECIALIZATION</span>
                <span className="text-blue-300">D365 &amp; Middleware</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-neutral-500">LOCATION</span>
                <span className="text-neutral-200">{personal.location}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                <span className="text-neutral-500">DIRECT PHONE</span>
                <a href={`tel:${personal.phone}`} className="text-neutral-200 hover:text-blue-300 transition-colors">
                  {personal.phone}
                </a>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-neutral-500">EMAIL</span>
                <a href={`mailto:${personal.contactEmail}`} className="text-blue-300 hover:text-blue-200 transition-colors truncate max-w-[140px]">
                  {personal.contactEmail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="space-y-4">
        <div className="flex items-center gap-2.5 text-blue-300">
          <Award className="w-4 h-4" />
          <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
            KEY CAREER ACHIEVEMENTS
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personal.keyAchievements.map((ach, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 text-xs sm:text-sm text-neutral-300"
            >
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{ach}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid of Sections: SPECIALIZATION, EDUCATION, CERTIFICATIONS, COMMUNITY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Specializations Card */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-blue-300">
            <Cpu className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              CORE SPECIALIZATIONS
            </h3>
          </div>
          <ul className="space-y-2.5">
            {personal.specializations.map((spec, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                <span className="text-blue-400 font-mono">›</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education & Programs */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-blue-300">
            <GraduationCap className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              EDUCATION &amp; PROGRAMS
            </h3>
          </div>
          <div className="space-y-4">
            {personal.education.map((edu, idx) => (
              <div key={idx} className="pb-3 border-b border-white/[0.04] last:border-0 last:pb-0">
                <div className="font-medium text-white text-xs sm:text-sm">{edu.program}</div>
                <div className="flex justify-between items-center text-[11px] font-mono text-neutral-400 mt-0.5">
                  <span className="text-blue-300">{edu.institution}</span>
                  <span>{edu.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community & Volunteering */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-blue-300">
            <HeartHandshake className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              COMMUNITY &amp; VOLUNTEERING
            </h3>
          </div>
          <ul className="space-y-2.5">
            {personal.community.map((comm, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                <span className="text-emerald-400 font-mono">•</span>
                <span>{comm}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Reference */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all">
          <div className="flex items-center gap-2.5 mb-4 text-blue-300">
            <Building2 className="w-4 h-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest font-semibold">
              PROFESSIONAL REFERENCE
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 space-y-1">
            <div className="text-sm font-medium text-white">{personal.reference.name}</div>
            <div className="text-xs font-mono text-blue-300">{personal.reference.title}</div>
            <div className="text-xs font-mono text-neutral-400">{personal.reference.company}</div>
            <div className="text-xs font-mono text-neutral-300 pt-1">Direct: {personal.reference.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
