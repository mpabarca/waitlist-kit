import type { Config } from "tailwindcss";

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--color-primary))",
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        accent: "hsl(var(--color-accent))",
        // etc.
      },
    },
  },
} satisfies Config;

export default config;
