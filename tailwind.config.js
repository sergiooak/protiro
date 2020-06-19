/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    "./pages/**/*.vue",
    "./components/**/*.vue",
    "./plugins/**/*.vue",
    "./static/**/*.vue",
    "./layouts/**/*.vue",
    "./store/**/*.vue"
  ],
  theme: {
    extend: {
      spacing: {
        '1px': '1px',
        '283px': '283px',
      },
      colors: {
        protiro: '#c19955',
      }
    },
    fontFamily: {
      'sans': ['Catamaran', 'sans-serif']
    }
  },
  variants: {},
  plugins: []
}
