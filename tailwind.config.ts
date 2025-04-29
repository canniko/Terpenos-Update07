import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#000000", // Black
          foreground: "#FAF9F6", // Off-white
        },
        secondary: {
          DEFAULT: "#14532D", // Forest Green
          foreground: "#FAF9F6", // Off-white
        },
        accent: {
          DEFAULT: "#2C7A1F", // Terpenos Green
          foreground: "#FAF9F6", // Off-white
          soft: "#D4E7C5", // Herbal Light Green
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#D4E7C5", // Herbal Light Green
          foreground: "#333333", // Charcoal
        },
        popover: {
          DEFAULT: "#FAF9F6", // Off-white
          foreground: "#333333", // Charcoal
        },
        card: {
          DEFAULT: "#FAF9F6", // Off-white
          foreground: "#333333", // Charcoal
        },
        // Custom Terpenos colors
        terpenos: {
          black: "#000000", // Black
          green: "#2C7A1F", // Terpenos Green
          "forest-green": "#14532D", // Forest Green
          "light-green": "#D4E7C5", // Herbal Light Green
          offwhite: "#FAF9F6", // Off-white
          charcoal: "#333333", // Charcoal
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "hexagon-pattern": "url('/hexagon-pattern.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
