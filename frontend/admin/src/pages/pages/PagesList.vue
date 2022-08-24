<template>
	<h1 class="text-2xl font-bold mb-6">Страницы</h1>
	<div class="mb-6">
		<router-link to="pages/create" class="rd-button rd-button--success">
			<i class="material-icons mr-1">add</i>
			<span>Создать</span>
		</router-link>
	</div>
	<admin-pages-list :pages="pages"></admin-pages-list>
</template>

<script>
import PagesListComponent from '../../components/pages/List.vue';
import { apiGetPages } from '../../api/apiGetPages';

export default {
	name: 'admin-pages-component',
	components: {
		'admin-pages-list': PagesListComponent,
	},
	data() {
		return {
			pages: [],
		};
	},
	async beforeMount() {
		const pages = await apiGetPages();
		this.pages = pages;
	},
};
</script>
