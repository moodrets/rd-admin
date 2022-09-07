<template>
	<h1 class="text-2xl font-bold mb-8">Страницы</h1>
	<div class="mb-6">
		<router-link :to="{ name: 'admin-page-create' }" class="rd-button rd-button--success">
			<i class="rd-icon mr-1">add</i>
			<span>Создать</span>
		</router-link>
	</div>
	<pages-list
		v-if="pagesList.length"
		@emitVisiblePage="onVisiblePage($event)"
		@emitHiddenPage="onHiddenPage($event)"
		@emitPageDelete="onDeletePage($event)"
		:pages="pagesList"
	></pages-list>
	<div v-else class="font-bold text-18px">Нет созданных страниц</div>
</template>

<script>
import { ref } from 'vue';
import { apiGetPageList } from '@/api/page/apiGetPageList';
import { apiDeletePage } from '@/api/page/apiDeletePage';
import { apiUpdatePage } from '@/api/page/apiUpdatePage';
import PagesListComponent from '@/components/page/List.vue';
import { clearPageData } from '@/helpers/pageHelpers';

export default {
	name: 'pages-component',
	components: {
		'pages-list': PagesListComponent,
	},
	setup(props, context) {
		const pagesList = ref([]);
		const loadPageList = async () => {
			pagesList.value = await apiGetPageList();
		};

		loadPageList();

		const onDeletePage = async (page) => {
			if (confirm(`Вы уверены что хотите удалить страницу - ${page.title}`)) {
				try {
					await apiDeletePage(page);
					loadPageList();
				} catch (e) {}
			}
		};

		const onVisiblePage = async (page) => {
			const payload = clearPageData(page);
			payload.hidden = false;
			try {
				await apiUpdatePage(payload);
				loadPageList();
			} catch (e) {}
		};

		const onHiddenPage = async (page) => {
			const payload = clearPageData(page);
			payload.hidden = true;
			try {
				await apiUpdatePage(payload);
				loadPageList();
			} catch (e) {}
		};

		return {
			pagesList,
			onHiddenPage,
			onVisiblePage,
			onDeletePage,
		};
	},
};
</script>
