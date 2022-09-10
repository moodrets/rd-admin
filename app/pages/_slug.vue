<template>
	<component :is="layoutComponent" :page="page" :menus="menus"></component>
</template>

<script>
import { checkLocalRedirect } from '~/helpers/page.helpers.js';

export default {
	name: 'EntryPage',
	data() {
		return {
			layout: 'default',
		};
	},
	computed: {
		layoutComponent() {
			return () => import(`~/components/layouts/${this.layout}.vue`);
		},
	},
	async asyncData({ $api, route, redirect }) {
		const path = route.params.slug ? `/${route.params.slug}` : '/';
		let { page, menus } = await $api.$get('page/byPath', {
			params: {
				path,
			},
		});
		let layout = page?.layout_filename;

		// local redirect
		if (page && page.redirect && checkLocalRedirect(page.redirect)) {
			redirect(page.redirect);
		}

		// other domain redirect
		if (page && page.redirect && !checkLocalRedirect(page.redirect)) {
			window.location.href = page.redirect;
		}

		if (!page) {
			page = {
				title: 'Страница не найдена',
				page_title: 'Страница не найдена',
			};
			layout = 'default';
		}

		return {
			page,
			layout,
			menus,
		};
	},
};
</script>
