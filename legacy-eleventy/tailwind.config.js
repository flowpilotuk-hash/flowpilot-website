/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,html,md,js}"],
  theme: {
    // A calm, restrained container rhythm.
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        // Chartreuse — used strictly as an accent, never as a wash.
        chartreuse: {
          DEFAULT: "#C6F135",
          50: "#F7FCE4",
          100: "#EEF9C4",
          200: "#E0F394",
          300: "#D2ED63",
          400: "#C6F135",
          500: "#AEDE1F",
          600: "#8CB616",
          700: "#6A8A15",
          800: "#546C18",
          900: "#485B1A",
        },
        // Near-blacks for dark sections and ink.
        ink: {
          DEFAULT: "#0B0B0C",
          900: "#0B0B0C",
          800: "#151517",
          700: "#1E1E21",
          600: "#2A2A2E",
        },
        // Warm-neutral greys for text and hairlines.
        neutral: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E8E8EA",
          300: "#D6D6DA",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Inter Tight",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        // Fluid display sizes for large, calm headings.
        "display-sm": ["clamp(2rem, 4vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display": ["clamp(2.5rem, 5.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["clamp(3rem, 7vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,11,12,0.04), 0 8px 24px -12px rgba(11,11,12,0.12)",
        "soft-lg": "0 1px 2px rgba(11,11,12,0.05), 0 24px 48px -24px rgba(11,11,12,0.18)",
        "soft-dark": "0 1px 2px rgba(0,0,0,0.3), 0 24px 48px -24px rgba(0,0,0,0.6)",
        focus: "0 0 0 4px rgba(198,241,53,0.35)",
      },
      transitionTimingFunction: {
        gentle: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
