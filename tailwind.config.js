/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        _yellow: "#fbcb04",
        _dimDark: "#64638b" ,
        _dark: "#333366",
        _aumDark: "#000033",
        _dimSoft: "#cccccc",
        _soft: "#d4cca5",
        _aumSoft: "#bcb2a0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    ]
}
