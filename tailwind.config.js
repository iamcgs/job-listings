/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        desaturatedDarkCyan: 'hsl(180, 29%, 50%)',
        // Background
        lightGrayishCyan: 'hsl(180, 52%, 96%)',
        // Filter Tablets
        grayishCyanFilter: 'hsl(180, 31%, 95%)',
        filterTablets: 'hsl(180, 31%, 95%)',
        darkGrayishCyan: 'hsl(180, 8%, 52%)',
        veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
      },
      fontFamily: {
        LeagueSpartan: ['League Spartan', 'sans-serif'],
      },
      backgroundImage: {
        'header-mobile': "url('../public/images/bg-header-mobile.svg')",
        'header-desktop': "url('../public/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
