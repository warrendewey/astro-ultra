/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,js,ts,jsx,tsx}"],
  theme: {
    extend: 
    {
      flexGrow: {
        1: "1",
        2: "2",
        3: "3",
        100: "100"
      },
      colors: {
        ice: '#EEF5FF', // ✅ Extends instead of replacing Tailwind colors
      },
    },
  },
  plugins: [],
};

  