/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        white: "0 4px 6px rgba(255, 255, 255, 0.5)",
      },
      screens: {
        sm: "640",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
