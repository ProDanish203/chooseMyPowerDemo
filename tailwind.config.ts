import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: "#050315",
        bg: "#fbfbfe",
        primary: "#2f27ce",
        secondary: "#dedcff",
        accent: "#433bff",
      },
      backgroundImage:{
        "heroBanner": "linear-gradient(to right bottom, rgba(0,0,0,0), rgba(0,0,0, 0.9)), url('/banner1.jpg')",
        "counter": "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0, 0.7)), url('/banner2.jpg')",
      }
    },
  },
  plugins: [],
}
export default config
