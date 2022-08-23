<template>
	<app-header></app-header>
	<main class="flex-1">
		<router-view></router-view>
	</main>
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
};
</script>
