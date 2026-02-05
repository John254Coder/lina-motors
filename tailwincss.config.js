/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (LINA Motors)
        primary: {
          DEFAULT: "#2C4292",     // Royal Blue (rgb(44, 66, 146)) - exact brand color
          light: "#4a6bb8",       // Light Blue - hover states, secondary elements
          dark: "#1e3a8a",        // Deep Blue - button hover, active states, accents
        },
        
        // Backgrounds - Clean & Modern
        background: "#ffffff",    // Clean white
        surface: "#f8fafc",       // Subtle off-white
        soft: "#eaf2f8",         // Light blue-gray for feature sections
        
        // Text Colors - WCAG AA Compliant
        text: {
          DEFAULT: "#111827",     // Almost black - high contrast body text
          secondary: "#374151",   // Dark gray - secondary text
          muted: "#6b7280",       // Medium gray - muted text
          light: "#9ca3af",       // Light gray - subtle text
        },
        
        // Borders & Dividers
        border: {
          DEFAULT: "#e5e7eb",     // Light border
          light: "#f3f4f6",       // Very light border
        },
        neutral: "#94a3b8",       // Neutral gray
        
        // Interactive States
        hover: {
          bg: "#f9fafb",          // Subtle hover background
          active: "#f3f4f6",      // Active/pressed background
        },
        
        // Logo Color - USE SPARINGLY (logo only, DO NOT use in general UI)
        "logo-red": "#c62828",    // Brand red accent
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Inter", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",      // 12px
        sm: "0.875rem",     // 14px
        base: "1rem",       // 16px
        lg: "1.125rem",     // 18px
        xl: "1.25rem",      // 20px
        "2xl": "1.5rem",    // 24px
        "3xl": "1.875rem",  // 30px
        "4xl": "2.25rem",   // 36px
        "5xl": "3rem",      // 48px
        "6xl": "3.75rem",   // 60px
        "7xl": "4.5rem",    // 72px
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        subtle: "0 2px 8px rgba(0, 0, 0, 0.04)",
        md: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        sm: "0.125rem",  // 2px
        md: "0.375rem",  // 6px
        lg: "0.5rem",    // 8px
        xl: "0.75rem",   // 12px
      },
      spacing: {
        section: "5rem",  // 80px - standard section spacing
      },
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "150ms",
        slow: "300ms",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;