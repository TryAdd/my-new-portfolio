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
  Twitter, 
  Dribbble, 
  Figma, 
  Copy, 
  Check, 
  Clock, 
  Globe, 
  ArrowUpRight,
  MessageSquare
} from "lucide-react";

export function ContactContent() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Collaboration Inquiry",
    message: ""
  });
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    soundEffects.playClick();
    navigator.clipboard.writeText(personal.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playClick();

    // Trigger direct mailto with populated subject and body
    const mailtoUrl = `mailto:${personal.contactEmail}?subject=${encodeURIComponent(
      `[Portfolio OS] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-4 h-4" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "Twitter":
        return <Twitter className="w-4 h-4" />;
      case "Dribbble":
        return <Dribbble className="w-4 h-4" />;
      case "Figma":
        return <Figma className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-10">
      {/* Top Statement */}
      <div className="border-b border-white/[0.08] pb-8 space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="glow" size="xs">
            <Mail className="w-3 h-3" /> SECURE CHANNEL // 06
          </Badge>
          <span className="text-xs font-mono text-neutral-500">
            ENCRYPTED DISPATCH
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal">
          Let’s build something <span className="text-purple-300 italic">extraordinary</span>.
        </h2>

        <p className="text-sm sm:text-base text-neutral-300 max-w-2xl font-light leading-relaxed">
          I’m currently taking on select mobile development, design system, and creative frontend projects for 2026. Whether you have an ambitious product roadmap or an interactive concept, let’s connect.
        </p>
      </div>

      {/* Main Grid: Message Composer (Left) & Direct Channels / Info (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Message Composer */}
        <div className="lg:col-span-7 rounded-2xl bg-neutral-900/60 border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300 uppercase tracking-wider font-semibold">
              <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
              <span>TRANSMIT A MESSAGE</span>
            </div>
            <span className="text-[10px] font-mono text-purple-400">DIRECT RELAY</span>
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
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-purple-400/60 transition-colors placeholder:text-neutral-600 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@studio.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-purple-400/60 transition-colors placeholder:text-neutral-600 font-sans"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                SUBJECT / TOPIC
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-purple-400/60 transition-colors placeholder:text-neutral-600 font-sans"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                PROJECT DETAILS / MESSAGE
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell me about your timeline, platform requirements, design ideas, or goals..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-950/80 border border-white/10 text-neutral-200 text-sm focus:outline-none focus:border-purple-400/60 transition-colors placeholder:text-neutral-600 font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              data-cursor="TRANSMIT"
              className="w-full py-3.5 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              <span>START A CONVERSATION</span>
            </button>

            {isSent && (
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center justify-center gap-2">
                <Check className="w-3.5 h-3.5" />
                <span>Redirecting to your email client...</span>
              </div>
            )}
          </form>
        </div>

        {/* Right Column: Direct Channels & Timezone */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Copy Email Card */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              DIRECT EMAIL INBOX
            </span>
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950 border border-white/10">
              <span className="text-xs sm:text-sm font-mono text-purple-200 truncate mr-2">
                {personal.contactEmail}
              </span>
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
          </div>

          {/* Social Profiles Directory */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
              NETWORKS & REPOSITORIES
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
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/60 hover:bg-purple-950/20 border border-white/[0.04] hover:border-purple-400/30 text-neutral-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-purple-400">
                      {getSocialIcon(social.icon)}
                    </div>
                    <span className="text-xs font-mono font-medium">
                      {social.platform}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 group-hover:text-purple-300 flex items-center gap-1">
                    {social.handle}
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Timezone / Availability card */}
          <div className="p-4 rounded-xl bg-purple-950/15 border border-purple-500/20 flex items-center gap-3 text-xs font-mono text-neutral-300">
            <Clock className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Manama, Bahrain (GMT+3) • Fast response times within 24 hours.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
