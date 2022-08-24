<template>
	<div :class="pageData.loading ? 'block-loading' : ''">
		<app-header></app-header>
		<section class="centered">
			<h1 class="text-3xl font-bold mb-8">{{ pageData.title }}</h1>
		</section>
		<app-footer></app-footer>
	</div>
</template>

<script>
import { onBeforeUpdate, ref } from 'vue';
import { useRoute } from 'vue-router';
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

export default {
	name: 'simple-page',
	components: {
		'app-header': Header,
		'app-footer': Footer,
	},
	setup(props, ctx) {
		const pageData = ref({});
		pageData.value = useRoute().meta;

		onBeforeUpdate(() => {
			pageData.value = useRoute().meta;
		});

		return {
			pageData,
		};
	},
};
</script>
