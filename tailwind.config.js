/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				emphasis: "rgb(var(--color-emphasis) / <alpha-value>)",
				text: "rgb(var(--color-text) / <alpha-value>)"
			},
			animation: {
				bg: "bg-move 15s linear infinite",
			},
			keyframes: {
        "bg-move": {
          '0%, 100%': { "background-position": '0 50%', "background-color": "#f00" },
          '50%': { "background-position": '100% 50%', "background-color": "#f0f" },
        },
      }
		}
	},
	plugins: [],
}

