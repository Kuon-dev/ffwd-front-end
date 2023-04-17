/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: '#7E81FF',
				dark: '#1E293B',
				mid: '#B8BFC6',
				light: '#FFFFFF',
				white: '#FFFFFF',
				black: '#000000',
				error: '#FF0000',
			},
		},
	},
	plugins: [],
};
