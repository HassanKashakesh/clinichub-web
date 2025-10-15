import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        // Entrances / helpers
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in-up": { "0%": { opacity: "0", transform: "translateY(10px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "pop-in": { "0%": { opacity: "0", transform: "scale(0.9)" }, "100%": { opacity: "1", transform: "scale(1)" } },

        // Logo intro + float (still available if you need it elsewhere)
        "logo-pop-in": {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(-10px)" },
          "50%": { opacity: "1", transform: "scale(1.1) translateY(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "float-slow": { "0%,100%": { transform: "translateY(6px)" }, "50%": { transform: "translateY(-6px)" } },

        // Previous bounce + shadow (kept for reuse)
        "ball-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1.08,0.92)" },
          "20%": { transform: "translateY(-140px) scale(0.98,1.02)" },
          "40%": { transform: "translateY(0) scale(1.12,0.88)" },
          "60%": { transform: "translateY(-90px) scale(0.99,1.01)" },
          "80%": { transform: "translateY(0) scale(1.06,0.94)" }
        },
        "ball-shadow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.35", filter: "blur(2px)" },
          "20%": { transform: "scale(0.75)", opacity: "0.15", filter: "blur(4px)" },
          "40%": { transform: "scale(1.05)", opacity: "0.40", filter: "blur(2px)" },
          "60%": { transform: "scale(0.8)", opacity: "0.20", filter: "blur(3px)" },
          "80%": { transform: "scale(1.02)", opacity: "0.35", filter: "blur(2px)" }
        },

        // 🌊 Wander across the hero (we'll ping-pong these with animation-direction: alternate)
        "ball-wander-x": {
          "0%": { transform: "translateX(-50vw)" },
          "100%": { transform: "translateX(50vw)" },
        },
        "ball-wander-y": {
          "0%": { transform: "translateY(-24vh)" },
          "100%": { transform: "translateY(4vh)" },
        },

        // 🎯 Soft squash/tilt loop (adds life even when not at edges)
        "ball-squash-soft": {
          "0%,100%": { transform: "rotate(-1.5deg) scale(1.03,0.97)" },
          "50%": { transform: "rotate(1.5deg) scale(0.98,1.02)" },
        },

        // ✨ Impact ring pulse at edges (fires at both ends because of 'alternate' direction)
        "impact-pulse": {
          "0%": { opacity: "0.0", transform: "scale(0.8)" },
          "3%": { opacity: "0.45", transform: "scale(1)" },
          "12%": { opacity: "0.0", transform: "scale(1.6)" },
          "100%": { opacity: "0" },
        },

        // 🎞️ Background beams
        "beams-pan": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 200%" },
        },

        // Super-slow spin if you want on any circle
        "spin-ccw": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(-360deg)" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        "fade-in-up": "fade-in-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) forwards",
        "fade-in-up-delay": "fade-in-up 0.7s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s forwards",
        "pop-in": "pop-in 0.5s ease-out 0.4s forwards",
        "pop-in-delay-1": "pop-in 0.5s ease-out 0.8s forwards",
        "pop-in-delay-2": "pop-in 0.5s ease-out 1.1s forwards",

        "logo-pop-in": "logo-pop-in 0.5s cubic-bezier(0.68,-0.55,0.265,1.55) forwards",
        "float-slow": "float-slow 12s ease-in-out infinite",
        "logo-seq": "logo-pop-in 0.5s cubic-bezier(0.68,-0.55,0.265,1.55) forwards, float-slow 12s ease-in-out 0.5s infinite",

        "ball-bounce-fast": "ball-bounce 1.4s cubic-bezier(.28,.84,.42,1) infinite",
        "ball-shadow-fast": "ball-shadow 1.4s linear infinite",

        // 🐢 Slow wander with ping-pong edges
        "wander-x-slow": "ball-wander-x 12s cubic-bezier(.33,.66,.66,1) infinite alternate",
        "wander-y-slow": "ball-wander-y 15s cubic-bezier(.33,.66,.66,1) infinite alternate",
        "wander-y-up-slow": "ball-wander-y-up 28s cubic-bezier(.33,.66,.66,1) infinite alternate",

        "squash-soft": "ball-squash-soft 2.6s ease-in-out infinite",
        "impact-pulse": "impact-pulse 14s linear infinite", // tie to X duration for edge hits

        // Background beams (very subtle)
        "beams-pan": "beams-pan 40s linear infinite",

        "spin-ccw-slowest": "spin-ccw 90s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
