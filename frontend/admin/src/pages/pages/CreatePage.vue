<template>
	<div class="pb-24">
		<h1 class="text-2xl font-bold mb-8">Создание страницы</h1>
		<page-form
			v-if="formFields"
			:formFields="formFields"
			:loading="loading"
			@emitSubmit="onFormSubmit($event)"
			actionType="create"
		></page-form>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import PageForm from '@/components/pages/PageForm.vue';
import { Page } from '@/models/pages/PageModel';
import { clearPageData } from '@/helpers/pageHelpers';
import { apiCreatePage } from '@/api/page/apiCreatePage';
import { useRouter } from 'vue-router';

export default {
	name: 'create-page-component',
	components: {
		'page-form': PageForm,
	},
	setup() {
		const formFields = reactive(new Page());
		const loading = ref(false);
		const router = useRouter();

		const onFormSubmit = async (page) => {
			loading.value = true;
			const formData = clearPageData(page);
			try {
				await apiCreatePage(formData);
				router.push({ name: 'admin-pages' });
			} catch (e) {
			} finally {
				loading.value = false;
			}
		};

		return {
			loading,
			formFields,
			onFormSubmit,
		};
	},
};
</script>
