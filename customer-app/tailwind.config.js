/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1A2B",
        brand: {
          DEFAULT: "#16406B",
          light: "#2C6CA6",
          dark: "#0F2C4C",
        },
        frost: "#F7FAFC",
        mist: "#E4EAF1",
        steel: "#5B7186",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Hanken Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      letterSpacing: {
        wideish: "0.08em",
        widest2: "0.25em",
      },
      transitionTimingFunction: {
        frame: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        splashIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.1)" },
        },
      },
      keyframes: {
        splashIn: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.25", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.1)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "splash-in": "splashIn 900ms cubic-bezier(0.4,0,0.2,1) both",
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};