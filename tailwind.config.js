const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			body: ["Audiowide"],
			display: ["Varela Round"],
		},
		colors: {
			transparent: "transparent",
			dark: '#050505',
			off_dark: '#131313',
			mid_gray: '#999999',
			off_light: '#F1F4F9',
			light: '#FFFFFF',
			background: '#050505',
			off_background: '#131313',
			mid_ground: '#999999',
			off_foreground: '#F1F4F9',
			foreground: '#FFFFFF',
			success_green: '#0ACF83',
			success_green_light: '#13F49D',
			success_green_dark: '#08A76A',
			danger_red: '#EC193E',
			danger_red_light: '#F04C68',
			danger_red_dark: '#C31030',
			icon: '#F1F4F9',
			icon_background: '#333333',
			red: '#FF3E41',
			red_light: '#FF8182',
			red_dark: '#FF0106',
			blue: '#1ABCFE',
			blue_light: '#55CDFE',
			blue_dark: '#01A1E2',
			purple: '#A259FF',
			purple_light: '#CAA1FF',
			purple_dark: '#7E18FF',
			yellow: '#FFC82C',
			pink: '#FF49DB',
			turquoise: '#3DC8BF',
			special_gray: '#272D2D',
			neon_blue: '#6874E8',
		},
		extend: {
			backgroundImage: {}
		},
	},
	plugins: [],
}
