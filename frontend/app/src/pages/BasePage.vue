<template>
	<app-header></app-header>
	<section class="centered">
		<h1 class="text-3xl font-bold mb-8">{{ pageData.title }}</h1>
	</section>
	<app-footer></app-footer>
</template>

<script>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

export default {
	components: {
		'app-header': Header,
		'app-footer': Footer,
	},
	props: {
		pageData: {
			type: Object,
			required: true,
		},
	},
};
</script>
