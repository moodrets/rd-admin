<template>
	<div class="layout-default">
		<app-header></app-header>
		<Nuxt />
	</div>
</template>

<script>
import headerComponent from '~/components/header.vue';

export default {
	components: {
		'app-header': headerComponent,
	},
};
</script>
