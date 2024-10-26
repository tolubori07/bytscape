/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      colors:{ 
        main: "#394499",
        mainAccent: "#dfe5f2"
      }
    },
	},
	plugins: [],
}
