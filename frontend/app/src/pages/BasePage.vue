<template>
	<app-header></app-header>
	<section class="centered">
		<h1 class="text-3xl font-bold mb-8">{{ data.page.title }}</h1>
		<main>
			<div v-html="data.page.content"></div>
		</main>
	</section>
	<app-footer></app-footer>
</template>

<script>
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
};
</script>
