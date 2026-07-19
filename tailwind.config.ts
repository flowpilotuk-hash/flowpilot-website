import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        base: "#050505",
        surface: "#0B0B0B",
        card: "#111111",
        line: "rgba(255,255,255,0.08)",
        ink: {
          DEFAULT: "#FFFFFF",
          secondary: "#B3B3B3",
          muted: "#6E6E6E",
        },
        chartreuse: {
          DEFAULT: "#B6FF00",
          soft: "#C7FF3D",
          dim: "#8FCC00",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        display: ["clamp(2.75rem, 7vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 11vw, 8.5rem)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
      },
      maxWidth: {
        content: "75rem",
        prose: "44rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(182,255,0,0.25), 0 0 40px -8px rgba(182,255,0,0.45)",
        "glow-lg": "0 0 0 1px rgba(182,255,0,0.3), 0 0 80px -12px rgba(182,255,0,0.55)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(182,255,0,0.08), transparent 70%)",
        "grid": "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
        swift: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "border-trace": {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "200% 50%" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
