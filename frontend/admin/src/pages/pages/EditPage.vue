<template>
	<div class="pb-24 min-h-250px" :class="{ 'opacity-60 cursor-wait': loading }">
		<h1 class="text-2xl font-bold mb-8">Редактирование страницы</h1>
		<page-form v-if="!loading" :formFields="formFields" actionType="edit"></page-form>
	</div>
</template>

<script>
import { onBeforeMount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { apiGetPageById } from '@/api/page/apiGetPageById';
import PageForm from '@/components/pages/PageForm.vue';

export default {
	name: 'edit-page-component',
	components: {
		'page-form': PageForm,
	},
	setup() {
		const router = useRouter();
		const formFields = ref({});
		const loading = ref(true);
		const pageId = router.currentRoute.value.params.id;

		onBeforeMount(async () => {
			try {
				const response = await apiGetPageById(+pageId);
				formFields.value = response;
			} catch (error) {
				router.push({ name: 'admin-pages' });
			} finally {
				loading.value = false;
			}
		});

		return {
			loading,
			formFields,
		};
	},
};
</script>
