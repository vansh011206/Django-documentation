/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#0b0f19",
        bgCard: "#111827",
        bgCode: "#1b2230",
        accent: "#00f5d4", // Neon Mint/Teal
        accentHover: "#00d1b2",
        textMain: "#e2e8f0",
        textMuted: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        mono: ["Fira Code", "JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      }
    },
  },
  plugins: [],
}
