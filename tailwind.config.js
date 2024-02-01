/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
      screens: ['1200px'],
    },
    extend: {
      backgroundImage: {
        authBg:
          ' linear-gradient(193deg, #EB2859 -6.24%, #792036 92.34%), url("/images/bannerVector.svg")',
      },
      colors: {
        red: {
          DEFAULT: '#F62559',
          100: 'rgb(252,111,140)',
          light: '#FEEBF0',
          extra: '#FA0738',
        },
        light: {
          DEFAULT: '#FEEBF0',
          extra: '#FFD4DF',
        },
        dark: {
          DEFAULT: '#383838',
          50: '0px 1px 12px 0px rgba(5, 5, 5, 0.30)'
        },
        gray: {
          DEFAULT: '#9E9EA5',
          50: '#F7F8FA',
          100: '#9E9EA4',
          150: '#6F6F6F',
          200: '#EAEBED',
          250: "fbfcfd",
          300: "f7f8fa",
          400: "#F2F3F5",
          extra: '#6F6F6F',
        },
        blue: {
          DEFAULT: '#E7F0FA',
        },
        green: {
          DEFAULT: '#26D176',
        },
        yellow:{
          DEFAULT: "#f8af04",
          50: "#F8CD66"
        }
      },
      fontFamily: {
        proxima: ['ProximaNova', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, 
    darkTheme: "light",
    base: true, 
    styled: true, 
    utils: true,
    prefix: "",
    logs: true, 
    themeRoot: ":root",
  },
}
