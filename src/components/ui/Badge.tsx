import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "subtle" | "glow" | "solid" | "mono";
  size?: "xs" | "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "subtle",
  size = "xs",
  className,
}: BadgeProps) {
  const sizeClasses = {
    xs: "px-2 py-0.5 text-[10px] tracking-wider",
    sm: "px-2.5 py-1 text-xs tracking-wider",
    md: "px-3 py-1.5 text-xs tracking-wide",
  };

  const variantClasses = {
    subtle: "bg-white/[0.04] text-neutral-300 border border-white/[0.08]",
    glow: "bg-blue-500/10 text-blue-200 border border-blue-400/30 shadow-[0_0_12px_rgba(59,130,246,0.25)]",
    solid: "bg-white/10 text-white border border-white/20",
    mono: "bg-neutral-900/80 text-neutral-400 border border-white/[0.06] font-mono",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full font-medium uppercase transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
