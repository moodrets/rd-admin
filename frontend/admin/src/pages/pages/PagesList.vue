<template>
	<h1 class="text-2xl font-bold mb-8">Страницы</h1>
	<div class="mb-6">
		<router-link to="pages/create" class="rd-button rd-button--success">
			<i class="material-icons mr-1">add</i>
			<span>Создать</span>
		</router-link>
	</div>
	<admin-pages-list v-if="pages.length" :pages="pages"></admin-pages-list>
	<div v-else class="font-bold text-18px">Нет созданных страниц</div>
</template>

<script>
import { onBeforeMount, ref } from 'vue';
import PagesListComponent from '../../components/pages/List.vue';
import { apiGetPages } from '../../api/apiGetPages';

export default {
	name: 'admin-pages-component',
	components: {
		'admin-pages-list': PagesListComponent,
	},
	setup() {
		const pages = ref([]);

		onBeforeMount(async () => {
			pages.value = await apiGetPages();
		});

		return {
			pages,
		};
	},
};
</script>
