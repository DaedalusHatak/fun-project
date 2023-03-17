/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
     'marine':'hsl(var(--marine-blue) / <alpha-value>)',
     'pastel':'hsl(var(--pastel-blue) / <alpha-value>)',
     'lblue':'hsl(var(--light-blue) / <alpha-value>)',
     'strawberry':'hsl(var(--strawberry-red) / <alpha-value>)',
     'cgray':'hsl(var(--cool-gray) / <alpha-value>)',
     'lgray':'hsl(var( --light-gray) / <alpha-value>)',
     'magnolia':'hsl(var(--magnolia) / <alpha-value>)',
     'alabaster':'hsl(var(--alabaster) / <alpha-value>)',
     'white':'hsl(var(--white) / <alpha-value>)',
    }
  },
  plugins: [],
}
