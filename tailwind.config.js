/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#416162F',
        secondary: '#242F49',
        accent: '#384358',
        warning: '#FFA586',
        danger: '#B51A28',
        dark: '#541825',
      },
    },
  },
  plugins: [],
}
