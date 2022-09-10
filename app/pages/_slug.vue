<template>
	<component :is="layoutComponent" :page="page" :menus="menus"></component>
</template>

<script>
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
		const { page, menus } = await $api.$get('page/byPath', {
			params: {
				path,
			},
		});

		if (page && page.redirect) {
			redirect(page.redirect);
		}

		if (!page) {
			redirect('404');
			return;
		}

		return {
			layout: page.layout_filename,
			page,
			menus,
		};
	},
};
</script>
