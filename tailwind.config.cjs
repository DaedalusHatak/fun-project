/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '13': '13px',
        '15': '15px',
      },
      padding:{
        '7': '1.625rem',
        '17': '4.4rem',
        '9.5': '2.4375rem',
       
      },
      spacing:{
        '21': '6rem',
      },
      margin:{
        '18': '5.625rem',
      },
      width:{
        '9': '2.3125rem',
        
      },
      screens:{
        'desktop' : '940px'
      },
      colors:{
        'marine':'var(--marine-blue)',
        'purplish':'var(--purplish-blue)',
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
