/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      },
    extend: {
      colors: {
        primary: {
          light: '#003399', //Royal Blue
          dark: '#1A1A2E', // Deep Navy
        },
        secondary: {
          light: '#E0E0E0', // Soft Gray
          dark: '2E2E38', // Dark Gray
        },
        accent: {
          light: {
            DEFAULT: '#D4AF37', // Gold
            hover: '#E0E000',
          },
          dark: {
            DEFAULT: '#800020', // Burugundy
            hover: '#E0E000', 
            },
        },
        text: {
          light: '#333333', // Charcoal 
          dark: '#EAEAEA',  // Light Gray 
        },
        background: {
          light: '#FAFAFA', // Off-white 
          dark: '#121212',  // Very Dark Gray
        },
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
  },
  plugins: [require("tailwindcss-animate")],
}