/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'marine':'var(--marine-blue)',
        'pastel':'var(--pastel-blue)',
        'lblue':'var(--light-blue)',
        'strawberry':'var(--strawberry-red)',
        'cgray':'var(--cool-gray)',
        'lgray':'var( --light-gray)',
        'magnolia':'var(--magnolia)',
        'alabaster':'var(--alabaster)',
        'white':'var(--white)',
       }
    },
   
  },
  plugins: [],
}
