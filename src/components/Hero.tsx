"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 flex flex-col items-center justify-center text-center max-w-4xl mx-auto select-none">
      {/* Subtle glowing ambient orb behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[200px] sm:h-[260px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Centered Editorial Quote in High-End Serif Italic */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif text-neutral-200 font-normal leading-[1.35] tracking-tight max-w-3xl mb-4 sm:mb-6"
      >
        Creative developer making digital experiences, visual systems, and playful ideas ready for the real world.
      </motion.h1>

      {/* Click a Folder Indicator in Clean Monospace/Sans */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase"
      >
        CLICK A FOLDER TO OPEN IT
      </motion.p>
    </section>
  );
}
