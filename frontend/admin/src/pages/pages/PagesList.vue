<template>
	<h1 class="text-2xl font-bold mb-8">Страницы</h1>
	<div class="mb-6">
		<router-link :to="{ name: 'admin-page-create' }" class="rd-button rd-button--success">
			<i class="rd-icon mr-1">add</i>
			<span>Создать</span>
		</router-link>
	</div>
	<pages-list @pageDelete="onPageDelete($event)" v-if="pages.length" :pages="pages"></pages-list>
	<div v-else class="font-bold text-18px">Нет созданных страниц</div>
</template>

<script>
import { ref } from 'vue';
import { apiGetPageList } from '@/api/page/apiGetPageList';
import { apiDeletePage } from '@/api/page/apiDeletePage';
import PagesListComponent from '@/components/pages/List.vue';

export default {
	name: 'pages-component',
	components: {
		'pages-list': PagesListComponent,
	},
	setup(props, context) {
		const pages = ref([]);
		const loadData = async () => {
			pages.value = await apiGetPageList();
		};

		loadData();

		const onPageDelete = async (page) => {
			if (confirm(`Вы уверены что хотите удалить страницу - ${page.title}`)) {
				try {
					await apiDeletePage(page.id);
					loadData();
				} catch (e) {}
			}
		};

		return {
			pages,
			onPageDelete,
		};
	},
};
</script>
