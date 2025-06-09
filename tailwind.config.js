module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-primary": "var(--app-primary)",
        basewhite: "var(--basewhite)",
        bg: "var(--bg)",
        "body-textbody-color": "var(--body-textbody-color)",
        graywhite: "var(--graywhite)",
        highlight: "var(--highlight)",
        hitbox: "var(--hitbox)",
        "neutral-colorswhite": "var(--neutral-colorswhite)",
        "primary-text": "var(--primary-text)",
        "secondary-text": "var(--secondary-text)",
        stroke: "var(--stroke)",
        themeprimary: "var(--themeprimary)",
        white: "var(--white)",
        "x-100": "var(--x-100)",
        "x-40": "var(--x-40)",
        "x-50": "var(--x-50)",
        "x-60": "var(--x-60)",
        "x-70": "var(--x-70)",
        "x-80": "var(--x-80)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "16-font-16-strong": "var(--16-font-16-strong-font-family)",
        "16-font-medium-16": "var(--16-font-medium-16-font-family)",
        "button-links-medium-16px":
          "var(--button-links-medium-16px-font-family)",
        "button-links-small-14px": "var(--button-links-small-14px-font-family)",
        "heading-heading-3": "var(--heading-heading-3-font-family)",
        "SM-12-SM-med-20": "var(--SM-12-SM-med-20-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "drop-shadow": "var(--drop-shadow)",
        shadow: "var(--shadow)",
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
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
