/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			brand: '#0EA5E9',
			dark: '#0F172A',
			mid: '#CBD5E1',
			light: '#F8FAFC',
		},
		extend: {},
	},
	plugins: [],
};
