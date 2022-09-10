<template>
	<main class="centered">
		<h1 class="text-3xl font-bold mb-6">{{ page?.title }}</h1>
	</main>
</template>

<script setup>
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
