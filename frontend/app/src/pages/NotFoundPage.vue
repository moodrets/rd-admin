<template>
	<app-header></app-header>
	<section class="centered">
		<h1 class="text-3xl font-bold mb-8">404 - Страница не найдена</h1>
	</section>
	<app-footer></app-footer>
</template>

<script>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

export default {
	name: 'not-found-page',
	components: {
		'app-header': Header,
		'app-footer': Footer,
	},
};
</script>
