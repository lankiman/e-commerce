/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      custom: ["Kumbh Sans", "sans-serif"]
    },
    fontWeight: {
      normal: 400,
      bold: 700
    },
    extend: {
      colors: {
        vDarkBlue: "hsl(220, 13%, 13%)",
        dGrayishBlue: "hsl(219, 9%, 45%)",
        lGrayishBlue: "hsl(223, 64%, 98%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)"
      }
    }
  },
  plugins: []
};
