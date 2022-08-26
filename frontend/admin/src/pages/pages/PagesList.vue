<template>
	<h1 class="text-2xl font-bold mb-8">Страницы</h1>
	<div class="mb-6">
		<router-link :to="{ name: 'admin-page-create' }" class="rd-button rd-button--success">
			<i class="rd-icon mr-1">add</i>
			<span>Создать</span>
		</router-link>
	</div>
	<pages-list @pageDeleted="onPageDeleted" v-if="pages.length" :pages="pages"></pages-list>
	<div v-else class="font-bold text-18px">Нет созданных страниц</div>
</template>

<script>
import { ref } from 'vue';
import { apiGetPageList } from '@/api/apiGetPageList';
import PagesListComponent from '@/components/pages/List.vue';

export default {
	name: 'pages-component',
	components: {
		'pages-list': PagesListComponent,
	},
	setup(props, context) {
		const pages = ref([]);

		const setData = async () => {
			pages.value = await apiGetPageList();
		};

		setData();

		const onPageDeleted = () => {
			setData();
		};

		return {
			pages,
			onPageDeleted,
		};
	},
};
</script>
