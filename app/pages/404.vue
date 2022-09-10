<template>
	<div class="page-404">
		<app-header></app-header>
		<div class="centered">
			<div class="text-3xl font-bold mb-6">Страница не найдена</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>

<script>
import header from '~/components/common/header.vue';
import footer from '~/components/common/footer.vue';

export default {
	components: {
		'app-header': header,
		'app-footer': footer,
	},
	head() {
		return {
			title: 'Страница не найдена',
		};
	},
};
</script>
