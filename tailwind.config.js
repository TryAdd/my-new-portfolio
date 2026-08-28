/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090d",
        foreground: "#ededef",
        panel: {
          dark: "#0d0f17",
          card: "#121520",
          hover: "#181b2a",
        },
        accent: {
          purple: "#a855f7",
          lavender: "#c084fc",
          indigo: "#6366f1",
          muted: "#9333ea",
          glow: "rgba(168, 85, 247, 0.15)",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(192, 132, 252, 0.25)",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-fade": "glowFade 3s ease-in-out infinite alternate",
      },
      keyframes: {
        glowFade: {
          "0%": { opacity: "0.4", transform: "scale(0.98)" },
          "100%": { opacity: "0.8", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
