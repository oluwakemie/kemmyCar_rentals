module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#ffc727",
        dark: "#111111"
      },
      container:{
        center: true,
        padding: {
          DEFAULT: "1rem",
        }
      }
    },
  },
  plugins: [],
}
