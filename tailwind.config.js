// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        blue: "rgb(112, 153, 181)",
        btnclr: "rgb(132, 172, 199)",
        hbtnclr: "rgb(166, 198, 222)",
        tgray: "rgb(94, 94, 94)",
        white: "white",
        bclr: "rgb(226, 226, 226)",
        black: "black",
        gray: "rgb(246, 246, 246)",
        hfbclr: "rgb(29, 169, 254)",
        fbclr: "rgb(53, 69, 253)",
      },
      screens: {
        '2xl': '1536px',
        'xl': '1280px',
        'lg': '1024px', 
        'md': '780px', 
      },
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
    },
    keyframes: {
      marquee: {
        "0%": { transform: "translateX(0%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      marquee: "marquee 20s linear infinite",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
