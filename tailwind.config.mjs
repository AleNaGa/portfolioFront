/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkBlue: '#222E38', // Color personalizado
				whiteBrkn: '#F5EEE8', // Color de fondo personalizado
				paleBlue: '#9CD2FF', // color personalizado
				crudo: '#F5D5B8',
				azulGris: '#4F6B81',
				azulMedio: '#78A3C5',

			  },
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'], //   fuente titles
				montserrat: ['Montserrat', 'sans-serif'], // Fuente Montserrat
			  },
			fontWeight: {
				medium: '600', // Peso de fuente personalizado para "medium-bold 600"
				extrabold: '1000', // Peso de fuente personalizado para "extra-bold 800"
			  },
			fontSize:{
				30: '20px', // Tamaño 30 pt convertido a píxeles
				60: '35px', // Tamaño de 60 px
			}
		},
	},
	plugins: [
	],
}
