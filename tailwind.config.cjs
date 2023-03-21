/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: '#60246c',
				dark: '#0F172A',
				mid: '#CBD5E1',
				light: '#F8FAFC',
				white: '#FFFFFF',
				black: '#000000',
				error: '#FF0000',
			},
		},
	},
	plugins: [],
};
