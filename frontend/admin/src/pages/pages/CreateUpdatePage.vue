<template>
	<div class="pb-14">
		<h1 class="text-2xl font-bold mb-8">Создание страницы</h1>
		<form @submit.prevent="submit($event)">
			<div class="mb-6">
				<input type="text" placeholder="Заголовок страницы" class="rd-input" />
				<div class="font-bold text-14px text-gray-300 mt-2">Будет отображаться в заголовке (H1)</div>
			</div>
			<div class="mb-6">
				<input type="text" v-model="formPathValue" placeholder="Путь (url - /example)" class="rd-input" />
			</div>
			<div class="fixed z-20 inset-x-0 bottom-0 py-4 flex justify-center shadow-md bg-gray-700">
				<button type="submit" class="rd-button rd-button--success">
					<i class="material-icons mr-1">add</i>
					<span>Создать страницу</span>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
	name: 'admin-create-page',
	setup() {
		const form = reactive({
			title: '',
			path: '',
			page_title: '',
			page_description: '',
			template_filename: '',
			scripts: '',
			styles: '',
			settings_json: '',
			hidden: false,
		});

		const formPathValue = computed({
			get: () => form.path,
			set: (val) => {
				if (form.path.startsWith('/')) {
					form.path = val;
				} else {
					form.path = `/${val}`;
				}
			},
		});

		const submit = (event) => {
			console.log(event);
		};

		return {
			form,
			formPathValue,
			submit,
		};
	},
};
</script>
