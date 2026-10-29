/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-hover': '#3b82f6',
        bg: '#eff6ff',
        text: '#1e3a5f',
      },
    },
  },
  plugins: [],
}