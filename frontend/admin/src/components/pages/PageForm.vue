<template>
	<form @submit.prevent="formSubmit($event)" :class="{ 'opacity-60 pointer-events-none': loading }">
		<div class="xl:flex xl:gap-6">
			<div class="mb-6 xl:w-1/2">
				<input
					type="text"
					v-model="formPathValue"
					placeholder="Путь (url - /example)"
					class="rd-form-control"
					required
					ref="pathInput"
				/>
			</div>
			<div class="mb-6 xl:w-1/2">
				<input
					type="text"
					v-model="formRedirectValue"
					placeholder="Редирект (url - /example)"
					class="rd-form-control"
				/>
			</div>
		</div>
		<div class="mb-6">
			<input
				type="text"
				v-model="formFields.title"
				placeholder="Заголовок страницы - (H1)"
				class="rd-form-control"
				required
			/>
		</div>
		<div class="mb-6">
			<input
				type="text"
				v-model="formFields.template_filename"
				placeholder="Файл шаблона (BasePage - по умолчанию)"
				class="rd-form-control"
			/>
		</div>
		<div class="xl:flex xl:gap-6">
			<div class="mb-6 xl:w-1/2">
				<textarea
					v-model="formFields.scripts"
					rows="6"
					class="rd-form-control resize-y"
					placeholder="Скрипты <script>...<script>"
				></textarea>
			</div>
			<div class="mb-6 xl:w-1/2">
				<textarea
					v-model="formFields.styles"
					rows="6"
					class="rd-form-control resize-y"
					placeholder='Стили <style>...<style> или <link href="...">'
				></textarea>
			</div>
		</div>
		<div class="mb-6">
			<textarea
				v-model="formJsonDataParsedValue"
				rows="6"
				class="rd-form-control resize-y"
				placeholder='Данные JSON {"some": "value"}'
			></textarea>
		</div>
		<div class="mb-6">
			<div class="text-3px font-bold text-blue-500 mb-2">SEO</div>
			<div class="mb-6">
				<input
					type="text"
					v-model="formFields.page_title"
					placeholder="Title страницы (<title></title>)"
					class="rd-form-control"
				/>
			</div>
			<div class="mb-6">
				<input
					type="text"
					v-model="formFields.page_description"
					placeholder='Description страницы (<meta name="description" content="..." />)'
					class="rd-form-control"
				/>
			</div>
		</div>
		<div class="mb-6 select-none">
			<label class="inline-flex items-center">
				<input type="checkbox" v-model="formFields.hidden" class="flex-none mr-2 w-6 h-5" />
				<div class="">Скрыть (Не будет индексироваться)</div>
			</label>
		</div>
		<div class="fixed z-20 inset-x-0 bottom-0 py-4 flex justify-center shadow-md bg-gray-700">
			<button type="submit" class="rd-button rd-button--success" :class="{ 'rd-button--loading': loading }">
				<i class="rd-icon mr-1">add</i>
				<span>{{ actionType === 'edit' ? 'Редактировать' : 'Создать' }}</span>
			</button>
		</div>
	</form>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { apiCreatePage } from '@/api/apiCreatePage';
import { useRouter } from 'vue-router';

export default {
	props: {
		formFields: {
			type: Object,
			required: true,
		},
		actionType: {
			type: String,
			default: 'create',
			required: true,
		},
	},
	setup({ formFields }, context) {
		const router = useRouter();
		const loading = ref(false);
		const pathInput = ref(null);

		const formPathValue = computed({
			get: () => formFields.path,
			set: (val) => {
				if (val === '/') {
					formFields.path = val;
					return;
				}
				if (formFields.path.startsWith('/')) {
					formFields.path = val;
					return;
				}
				formFields.path = `/${val}`;
			},
		});

		const formRedirectValue = computed({
			get: () => formFields.redirect,
			set: (val) => {
				if (val === '/') {
					formFields.redirect = val;
					return;
				}
				if (formFields.redirect.startsWith('/')) {
					formFields.redirect = val;
					return;
				}
				formFields.redirect = `/${val}`;
			},
		});

		const formJsonDataParsedValue = computed(() => {
			if (formFields.json_data) {
				return JSON.stringify(formFields.json_data, null, 2);
			}
			return '';
		});

		const formSubmit = async (event) => {
			loading.value = true;
			const formData = {
				...formFields,
			};

			formData.path !== '/' && (formData.path = formData.path.replace(/\/+$/g, ''));
			!formData.redirect && delete formData.redirect;
			!formData.template_filename && delete formData.template_filename;
			!formData.json_data && delete formData.json_data;
			!formData.styles && delete formData.styles;
			!formData.scripts && delete formData.scripts;

			try {
				const res = await apiCreatePage(formData);
				router.push({ name: 'admin-pages' });
			} catch (e) {
				console.log(e);
			} finally {
				loading.value = false;
			}
		};

		onMounted(() => {
			pathInput.value.focus();
		});

		return {
			loading,
			formSubmit,
			formPathValue,
			formRedirectValue,
			formJsonDataParsedValue,
			pathInput,
		};
	},
};
</script>
