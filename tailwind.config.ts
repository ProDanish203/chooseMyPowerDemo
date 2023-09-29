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
        "hero-banner": "url('/banner1.jpeg')"
      }
    },
  },
  plugins: [],
}
export default config
