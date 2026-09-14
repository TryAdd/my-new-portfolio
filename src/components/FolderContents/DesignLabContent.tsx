"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { soundEffects } from "@/components/ui/SoundEffects";
import { Award, ShieldCheck, CheckCircle2, Terminal, ExternalLink } from "lucide-react";

export function DesignLabContent() {
  const { certifications } = portfolioData.personal;

  // Group certifications by category as in the resume
  const categories = [
    "Enterprise & Middleware",
    "Backend, APIs & Databases",
    "Software Architecture & AI",
    "Client Engineering"
  ];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="space-y-1">
          <Badge variant="glow" size="xs">
            <Award className="w-3 h-3" /> PROFESSIONAL ACCREDITATIONS &amp; CERTIFICATIONS
          </Badge>
          <p className="text-xs font-mono text-neutral-400">
            Official enterprise certifications across Microsoft, AWS, OpenJS, Google, and Academic institutions
          </p>
        </div>

        <span className="text-xs font-mono text-neutral-500">
          {certifications.length} CERTIFICATIONS
        </span>
      </div>

      {/* Grid of Certifications Grouped by Field */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, idx) => {
          const groupCerts = certifications.filter(c => c.category === cat);
          if (groupCerts.length === 0) return null;

          return (
            <div
              key={idx}
              className="rounded-2xl bg-neutral-900/60 border border-white/[0.08] p-6 space-y-4 hover:border-blue-400/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-2 text-blue-300 font-mono text-xs uppercase tracking-wider font-semibold">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span>{cat}</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  {groupCerts.length} CREDENTIALS
                </span>
              </div>

              <div className="space-y-3">
                {groupCerts.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    data-cursor={`ACCREDITATION: ${cert.issuer}`}
                    data-cursor-color="rose"
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-rose-400/50 hover:bg-rose-950/20 transition-all flex flex-col gap-1 cursor-pointer"
                  >
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-medium text-white">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                      <span>{cert.title}</span>
                    </div>
                    <span className="text-[11px] font-mono text-rose-300 pl-5.5">
                      Issuer: {cert.issuer}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
