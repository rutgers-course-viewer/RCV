/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			// Rutgers red
			primary: '#CA0037',
			// True gray from Figma extended tailwind color palette
			gray: {
				10: '#F5F5F5',
				50: '#FAFAFA',
				200: '#E5E5E5',
				300: '#D4D4D4',
				400: '#A3A3A3',
				500: '#737373',
				600: '#525252',
				700: '#404040',
				800: '#262626',
				900: '#262626'
			}
		},
		extend: {}
	},
	plugins: []
};
