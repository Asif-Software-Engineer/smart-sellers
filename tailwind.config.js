// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors:{
        blue: 'rgb(112, 153, 181)',
        btnclr: 'rgb(132, 172, 199)',
        hbtnclr: 'rgb(166, 198, 222)',
        tgray: "rgb(94, 94, 94)",
        white: 'white',
        bclr: 'rgb(226, 226, 226)',
        black: 'black',
        gray: 'rgb(246, 246, 246)',
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
