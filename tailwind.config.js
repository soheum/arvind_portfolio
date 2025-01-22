/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFALUT: '1rem',
    //     sm: '2rem',
    //     lg: '3rem',
    //     xl: '4rem'
    //   },
    // },
    extend: {
      fontFamily: {
        'montreal': ['Neue Montreal', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      }
      // fontSize: {
      //   h1: ['2.5rem',{
      //   lineHeight: '1.2',
      //   }
      // ],
      // }
    },
  },
  plugins: [],
}

