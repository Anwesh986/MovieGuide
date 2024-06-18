// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        "other": {'min': '340px', 'max': '1200px'},
      },
      colors: {
        darkbg: "#000000",
        blue: {
          850: "#191970"
        }
      }
    },
  },
  plugins: [],
}

// 850: "#1e40af"
