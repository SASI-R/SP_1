import type { Config } from "tailwindcss";

// Theme fusion — Neon Carbon (dark carbon-fiber base + violet/magenta glow) is the
// site-wide skin; Novapay (fintech glass/gradient) and Mobapp (native-app chrome)
// are layered on top for checkout and mobile navigation respectively.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0a0a0f", // page background
        carbon2: "#131319", // elevated panel / header / footer surface
        carbon3: "#1c1c25", // card / input surface
        ink: "#f1f1f7", // primary text on dark surfaces
        inkMuted: "#9d9daa", // secondary text on dark surfaces
        violet: "#8b5cf6",
        magenta: "#ec4899",
        neon: "#d946ef", // focus rings + small glow accents
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        // Faint woven carbon-fiber weave, tiled small.
        "carbon-weave":
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.035) 0px, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 4px)",
        "neon-gradient": "linear-gradient(90deg, #8b5cf6 0%, #d946ef 55%, #ec4899 100%)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(217,70,239,0.35), 0 0 18px rgba(139,92,246,0.45), 0 0 40px rgba(236,72,153,0.25)",
        "glow-sm": "0 0 0 1px rgba(217,70,239,0.3), 0 0 10px rgba(139,92,246,0.35)",
        "inner-line": "inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      animation: {
        fadeUp: "fadeUp .6s ease-out both",
        slideUp: "slideUp .25s cubic-bezier(0.32,0.72,0,1) both",
        slideInRight: "slideInRight .25s cubic-bezier(0.32,0.72,0,1) both",
        fadeIn: "fadeIn .2s ease-out both",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        popIn: "popIn .4s cubic-bezier(0.34,1.56,0.64,1) both",
        drawCheck: "drawCheck .5s .25s ease-out both",
        confettiBurst: "confettiBurst .9s ease-out both",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideUp: { "0%": { transform: "translateY(100%)" }, "100%": { transform: "translateY(0)" } },
        slideInRight: { "0%": { transform: "translateX(100%)" }, "100%": { transform: "translateX(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(217,70,239,0.35), 0 0 12px rgba(139,92,246,0.4)" },
          "50%": { boxShadow: "0 0 0 1px rgba(217,70,239,0.55), 0 0 26px rgba(236,72,153,0.55)" },
        },
        popIn: { "0%": { opacity: "0", transform: "scale(0.82)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        drawCheck: { "0%": { strokeDashoffset: "1" }, "100%": { strokeDashoffset: "0" } },
        confettiBurst: {
          "0%": { transform: "translate(0, 0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translate(var(--tx), var(--ty)) rotate(var(--rot))", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
