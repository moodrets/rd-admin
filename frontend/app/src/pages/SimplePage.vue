<template>
	<section class="centered">
		<h1 class="text-3xl font-bold">{{ pageData.page_title }}</h1>
	</section>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
	setup(props) {
		const route = useRoute();
		return {
			pageData: route.meta,
		};
	},
};
</script>
