export default {
	head: {
		title: 'app',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	loading: {
		color: '#fff',
		height: '5px',
	},
	css: ['~/assets/styles/main.scss'],
	plugins: ['~/plugins/api'],
	components: true,
	buildModules: ['@nuxt/postcss8', '@nuxtjs/dotenv'],
	modules: ['@nuxtjs/axios'],
	build: {
		postcss: {
			plugins: {
				tailwindcss: {},
				autoprefixer: {},
			},
		},
	},
	server: {
		port: 1344,
	},
};
