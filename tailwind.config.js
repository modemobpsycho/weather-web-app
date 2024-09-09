/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				purple: '#48319d',
				darkPurple: '#1F1D47',
				pink: '#C427FB',
				white: '#E0D9FF',
				linearDarkPurple: 'linear-gradient(180deg, #2E335A 0%, #1C1B33 100%)',
				linearPurple: 'linear-gradient(180deg, #5936B4 0%, #362A84 100%)',
				linearPink: 'linear-gradient(180deg, #3658B1 0%, #C159EC 100%)',
				radialPurple:
					'radial-gradient(50% 50% at 50% 50%, #F7CBFD 0%, #7758D1 100%)',
				angularPurple: 'linear-gradient(90deg, #5936B4 0%, #612FAB 100%)',
			},
		},
	},
	plugins: [],
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
}
