/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,html,css}', './index.html','./tailwind.css'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),   require('@tailwindcss/forms'),

  ],
}
