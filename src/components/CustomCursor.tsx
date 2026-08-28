"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 280, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

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
        setCursorText(text || "OPEN");
        setIsHovered(true);
      } else {
        const isClickable = target?.closest("button, a, input, textarea, [role='button']");
        if (isClickable) {
          setCursorText(null);
          setIsHovered(true);
        } else {
          setCursorText(null);
          setIsHovered(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? (cursorText ? 1 : 1.4) : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        {cursorText ? (
          <div className="flex items-center justify-center rounded-full bg-purple-500/90 text-white font-mono text-[10px] uppercase font-semibold tracking-wider px-3 py-1.5 shadow-[0_0_20px_rgba(168,85,247,0.6)] backdrop-blur-md border border-white/30 whitespace-nowrap">
            {cursorText}
          </div>
        ) : (
          <div
            className={`rounded-full transition-all duration-200 ${
              isHovered
                ? "h-8 w-8 bg-purple-400/20 border border-purple-400/60 shadow-[0_0_15px_rgba(192,132,252,0.4)] backdrop-blur-sm"
                : "h-3 w-3 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            }`}
          />
        )}
      </motion.div>
    </div>
  );
}
