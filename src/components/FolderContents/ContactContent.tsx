"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Badge } from "@/components/ui/Badge";
import { soundEffects } from "@/components/ui/SoundEffects";
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Clock, 
  Globe, 
  ArrowUpRight,
  MessageSquare,
  Phone,
  Building2
} from "lucide-react";

export function ContactContent() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Enterprise Integration & API Consultation",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    soundEffects.playClick();
    navigator.clipboard.writeText(personal.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPhone = () => {
    soundEffects.playClick();
    navigator.clipboard.writeText(personal.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playClick();

    const mailtoUrl = `mailto:${personal.contactEmail}?subject=${encodeURIComponent(
      `[Portfolio OS] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <div className="space-y-10">
      {/* Top Statement */}
      <div className="border-b border-white/[0.08] pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="glow" size="xs">
            <Mail className="w-3 h-3" /> DIRECT DISPATCH // 06
          </Badge>
          <span className="text-xs font-mono text-neutral-500">
            SECURE ENTERPRISE RELAY
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal">
          Let’s engineer <span className="text-blue-300 italic">resilient integrations</span>.
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-light leading-relaxed">
          Available for Microsoft Dynamics 365 (D365) integrations, custom offline-to-online middleware, high-throughput REST APIs, and automated Power Automate workflows across Bahrain &amp; the GCC.
        </p>
      </div>

      {/* Main Grid: Message Composer (Left) & Direct Channels / Info (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Message Composer */}
        <div className="lg:col-span-7 rounded-2xl bg-neutral-900/60 border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 uppercase tracking-wider font-semibold">
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>TRANSMIT INQUIRY</span>
            </div>
            <span className="text-[10px] font-mono text-blue-400">DIRECT RELAY</span>
          </div>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Elena Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-blue-400/60 transition-colors placeholder:text-neutral-600 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-blue-400/60 transition-colors placeholder:text-neutral-600 font-sans"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                SUBJECT / INTEGRATION TOPIC
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-blue-400/60 transition-colors placeholder:text-neutral-600 font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                PROJECT / SYSTEM REQUIREMENTS
              </label>
              <textarea
                required
                rows={4}
                placeholder="Describe your ERP environment, API specifications, offline synchronization needs, or integration roadmap..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-blue-400/60 transition-colors placeholder:text-neutral-600 font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              data-cursor="TRANSMIT"
              className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              <span>START A CONVERSATION</span>
            </button>

            {isSent && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2">
                <Check className="w-3.5 h-3.5" />
                <span>Opening your email client...</span>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Direct Channels & Reference */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Phone & Email Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              DIRECT INBOX &amp; PHONE
            </span>

            {/* Email Row */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950 border border-white/10">
              <div className="flex items-center gap-2.5 truncate mr-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-blue-200 truncate">
                  {personal.contactEmail}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-200 shrink-0 transition-all"
                data-cursor="COPY"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Row */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950 border border-white/10">
              <div className="flex items-center gap-2.5 truncate mr-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-neutral-200 truncate">
                  {personal.phone}
                </span>
              </div>
              <button
                onClick={handleCopyPhone}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-200 shrink-0 transition-all"
                data-cursor="COPY"
              >
                {phoneCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Professional Profiles */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              PROFESSIONAL NETWORKS
            </span>
            <div className="space-y-2">
              {personal.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundEffects.playClick()}
                  data-cursor="VISIT"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/60 hover:bg-blue-950/20 border border-white/[0.04] hover:border-blue-400/30 text-neutral-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-400">
                      {social.platform === "LinkedIn" ? <Linkedin className="w-4 h-4" /> : social.platform === "GitHub" ? <Github className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                    </div>
                    <span className="text-xs font-mono font-medium">
                      {social.platform}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 group-hover:text-blue-300 flex items-center gap-1">
                    {social.handle}
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Reference Info Card */}
          <div className="p-5 rounded-2xl bg-blue-950/15 border border-blue-500/20 space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-blue-300 font-semibold uppercase">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>PROFESSIONAL REFERENCE</span>
            </div>
            <div className="text-white font-medium">{personal.reference.name}</div>
            <div className="text-neutral-400">{personal.reference.title} • {personal.reference.company}</div>
            <div className="text-blue-300">{personal.reference.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
