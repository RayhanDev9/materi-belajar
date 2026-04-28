/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ pakai titik dua, bukan sama dengan
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        rayhan: "#bada55",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        'wiggle': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [], // ✅ plugins harus di luar theme
};
