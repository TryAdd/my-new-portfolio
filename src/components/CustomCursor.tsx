"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [cursorColor, setCursorColor] = useState<string>("blue");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy spring for the primary pill / dot
  const springPrimary = { damping: 26, stiffness: 350, mass: 0.4 };
  const cursorX = useSpring(mouseX, springPrimary);
  const cursorY = useSpring(mouseY, springPrimary);

  // Smooth floating spring for the trailing aura / glow ring
  const springTrail = { damping: 20, stiffness: 180, mass: 0.8 };
  const trailX = useSpring(mouseX, springTrail);
  const trailY = useSpring(mouseY, springTrail);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check target or parent for cursor directives
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest("[data-cursor]") as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor");
        const color = cursorTarget.getAttribute("data-cursor-color") || "blue";
        setCursorText(text || "VIEW");
        setCursorColor(color);
        setIsHovered(true);
      } else {
        const isClickable = target?.closest("button, a, input, textarea, [role='button']");
        if (isClickable) {
          setCursorText(null);
          setCursorColor("blue");
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(false);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  // Dynamic color styles for pill and hover halo
  const getPillColorClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-600/95 border-emerald-300/80 shadow-[0_0_25px_rgba(16,185,129,0.7)] text-emerald-50";
      case "amber":
        return "bg-amber-600/95 border-amber-300/80 shadow-[0_0_25px_rgba(245,158,11,0.7)] text-amber-50";
      case "violet":
        return "bg-violet-600/95 border-violet-300/80 shadow-[0_0_25px_rgba(139,92,246,0.7)] text-violet-50";
      case "rose":
        return "bg-rose-600/95 border-rose-300/80 shadow-[0_0_25px_rgba(244,63,94,0.7)] text-rose-50";
      case "sky":
        return "bg-sky-500/95 border-sky-300/80 shadow-[0_0_25px_rgba(14,165,233,0.7)] text-sky-50";
      case "blue":
      default:
        return "bg-blue-600/95 border-blue-300/80 shadow-[0_0_25px_rgba(37,99,235,0.7)] text-blue-50";
    }
  };

  const getHoverHaloClasses = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-400/20 border-emerald-400/70 shadow-[0_0_20px_rgba(16,185,129,0.5)]";
      case "amber":
        return "bg-amber-400/20 border-amber-400/70 shadow-[0_0_20px_rgba(245,158,11,0.5)]";
      case "violet":
        return "bg-violet-400/20 border-violet-400/70 shadow-[0_0_20px_rgba(139,92,246,0.5)]";
      case "rose":
        return "bg-rose-400/20 border-rose-400/70 shadow-[0_0_20px_rgba(244,63,94,0.5)]";
      case "sky":
        return "bg-sky-400/20 border-sky-400/70 shadow-[0_0_20px_rgba(14,165,233,0.5)]";
      case "blue":
      default:
        return "bg-blue-400/20 border-blue-400/70 shadow-[0_0_20px_rgba(96,165,250,0.5)]";
    }
  };

  const getAuraGlowColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "rgba(16,185,129,0.25)";
      case "amber":
        return "rgba(245,158,11,0.25)";
      case "violet":
        return "rgba(139,92,246,0.25)";
      case "rose":
        return "rgba(244,63,94,0.25)";
      case "sky":
        return "rgba(14,165,233,0.25)";
      case "blue":
      default:
        return "rgba(59,130,246,0.25)";
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* 1. Trailing Magnetic Aura Glow Ring */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovered ? (cursorText ? 1.6 : 1.5) : 1,
          opacity: isVisible ? (cursorText ? 0.85 : isHovered ? 0.7 : 0.35) : 0,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full blur-[6px] pointer-events-none"
      >
        <div 
          className="w-full h-full rounded-full"
          style={{ backgroundColor: getAuraGlowColor(cursorColor) }}
        />
      </motion.div>

      {/* 2. Primary Snappy Cursor Pill / Dot with Animated Transitions */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isClicking ? 0.9 : isHovered ? (cursorText ? 1.05 : 1.35) : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        {cursorText ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 4 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 450, damping: 22 }}
            className={`flex items-center gap-1.5 rounded-full font-mono text-[10px] uppercase font-semibold tracking-wider px-3.5 py-1.5 backdrop-blur-lg border whitespace-nowrap shadow-xl transition-colors duration-200 ${getPillColorClasses(
              cursorColor
            )}`}
          >
            {/* Animated small pulse indicator inside pill */}
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-75 inline-block" />
            <span>{cursorText}</span>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              rotate: isHovered ? 45 : 0,
            }}
            transition={{ duration: 0.2 }}
            className={`rounded-full transition-all duration-200 ${
              isHovered
                ? `h-8 w-8 border backdrop-blur-sm ${getHoverHaloClasses(cursorColor)}`
                : "h-3 w-3 bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            }`}
          />
        )}
      </motion.div>
    </div>
  );
}
