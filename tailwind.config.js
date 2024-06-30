// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        blue: 'rgb(112, 153, 181)',
        tgray: "rgb(94, 94, 94)",
        white: 'white',
        gray: '#9d9e9fe1',
        black: 'black',
      },
    },
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
