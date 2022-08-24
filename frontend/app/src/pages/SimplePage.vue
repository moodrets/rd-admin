<template>
	<app-header></app-header>
	<section class="centered">
		<h1 class="text-3xl font-bold">{{ pageData.title }}</h1>
	</section>
	<app-footer></app-footer>
</template>

<script>
import { useRoute } from 'vue-router';
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

export default {
	name: 'simple-page',
	components: {
		'app-header': Header,
		'app-footer': Footer,
	},
	setup(props) {
		const route = useRoute();
		return {
			pageData: route.meta,
		};
	},
};
</script>
