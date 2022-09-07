<template>
	<div class="centered">
		<h1 class="text-4xl font-bold">{{ page?.title }}</h1>
	</div>
</template>

<script>
export default {
	name: 'SlugPage',
	layout: 'default',
	head() {
		return {
			title: this.page?.page_title || this.page?.title,
			meta: [{ description: this.page?.page_description || '' }],
		};
	},
	data() {
		return {
			page: null,
		};
	},
	layout(context) {
		// TODO: dynamic layout
		return 'default';
	},
	async asyncData({ $api, route, redirect }) {
		const path = route.params.slug ? `/${route.params.slug}` : '/';
		const { page } = await $api.$get('page/byPath', {
			params: {
				path,
			},
		});

		if (!page) {
			redirect('404');
			return;
		}

		return {
			page,
		};
	},
};
</script>
