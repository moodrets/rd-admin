import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	css: ['~/assets/styles/main.scss'],
	modules: ['@nuxtjs/tailwindcss'],
	components: {
		dirs: ['~/components'],
	},
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			meta: [],
		},
	},
	runtimeConfig: {
		public: {
			apiBase: 'http://localhost:1346',
		},
	},
});
