<template>
	<div>
		<AppHeader />
		<main class="centered mb-8">
			<h1 class="text-3xl font-bold mb-6">{{ page?.title }}</h1>
			<div v-if="page?.content" v-html="page?.content"></div>
		</main>
		<AppFooter />
	</div>
</template>

<script setup>
import AppFooter from '~/components/common/footer.vue';
import AppHeader from '~/components/common/header.vue';

const { page, menus } = defineProps({
	page: {
		type: Object,
		required: true,
	},
	menus: {
		type: Object,
	},
});
</script>
