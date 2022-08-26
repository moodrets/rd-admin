<template>
	<div class="pb-20">
		<h1 class="text-2xl font-bold mb-8">Создание страницы</h1>
		<page-form :formFields="formFields" actionType="create"></page-form>
	</div>
</template>

<script>
import { reactive } from 'vue';
import PageForm from '@/components/pages/PageForm.vue';

export default {
	name: 'create-page-component',
	components: {
		'page-form': PageForm,
	},
	setup() {
		const formFields = reactive({
			title: '',
			path: '',
			redirect: '',
			page_title: '',
			page_description: '',
			template_filename: '',
			scripts: '',
			styles: '',
			json_data: '',
			hidden: false,
		});

		return {
			formFields,
		};
	},
};
</script>
