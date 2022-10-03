/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./tailwind-preset.cjs')],
  content: ['./css/*.css', './assets/components/*.vue', './assets/icons/*.vue']
}
