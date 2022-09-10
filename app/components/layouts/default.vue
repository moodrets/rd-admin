<template>
	<div class="layout-default">
		<app-header></app-header>
		<main class="centered">
			<h1 class="text-3xl font-bold mb-6">{{ page?.title }}</h1>
			<div class="mb-6" v-if="page?.content" v-html="page?.content"></div>
		</main>
		<app-footer></app-footer>
	</div>
</template>

<script>
import header from '~/components/common/header.vue';
import footer from '~/components/common/footer.vue';

export default {
	head() {
		return {
			title: this.page?.page_title || this.page?.title,
			meta: [{ description: this.page?.page_description || '' }],
		};
	},
	props: {
		page: {
			type: Object,
			required: true,
		},
		menus: {
			type: Object,
			required: true,
		},
	},
	components: {
		'app-header': header,
		'app-footer': footer,
	},
};
</script>
