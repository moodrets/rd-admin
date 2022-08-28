<template>
	<form
		@submit.prevent="formSubmit($event)"
		:class="{ 'opacity-50 pointer-events-none': loading }"
		class="grid grid-cols-1 gap-6 xl:grid-cols-2"
	>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">Путь (url - /example)</div>
			<input
				type="text"
				@input="onPathInput($event)"
				:value="formFields.path"
				class="rd-form-control"
				required
				ref="firstInputRef"
			/>
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">Заголовок страницы - (H1)</div>
			<input type="text" v-model="formFields.title" class="rd-form-control" required />
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">Редирект</div>
			<input type="text" v-model="formFields.redirect" class="rd-form-control" />
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">Файл шаблона (BasePage - по умолчанию)</div>
			<input type="text" v-model="formFields.template_filename" class="rd-form-control" />
		</label>
		<label class="xl:col-span-2">
			<div class="mb-3 text-gray-400 font-bold text-14px">{{ 'Данные JSON {"some": "value"}' }}</div>
			<textarea v-model="formFields.json_data" rows="6" class="rd-form-control resize-y"></textarea>
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">{{ 'Title страницы (<title></title>)' }}</div>
			<input type="text" v-model="formFields.page_title" class="rd-form-control" />
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">
				{{ 'Description страницы (&#60;meta name="description" /&#62;)' }}
			</div>
			<input type="text" v-model="formFields.page_description" class="rd-form-control" />
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">
				{{ 'Скрипты &#60;script&#62;...&#60;/script&#62;' }}
			</div>
			<textarea v-model="formFields.scripts" rows="6" class="rd-form-control resize-y"></textarea>
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">
				{{ 'Стили &#60;style&#62;...&#60;style&#62; или &#60;link href="..." /&#62;' }}
			</div>
			<textarea v-model="formFields.styles" rows="6" class="rd-form-control resize-y"></textarea>
		</label>
		<div class="select-none">
			<label class="inline-flex items-center">
				<input type="checkbox" v-model="formFields.hidden" class="flex-none mr-2 w-6 h-5" />
				<div>Скрыть (Не будет и отображаться на сайте)</div>
			</label>
		</div>
		<div class="fixed z-20 inset-x-0 bottom-0 py-4 flex justify-center shadow-md bg-gray-700">
			<button type="submit" class="rd-button rd-button--success" :class="{ 'rd-button--loading': loading }">
				<span>{{ actionType === 'edit' ? 'Редактировать' : 'Создать' }}</span>
			</button>
		</div>
	</form>
</template>

<script>
import { onMounted, ref } from 'vue';

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
		loading: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	setup({ formFields, actionType, loading }, context) {
		const firstInputRef = ref(null);

		if (actionType === 'edit' && formFields.json_data && typeof formFields.json_data === 'object') {
			formFields.json_data = JSON.stringify(formFields.json_data);
		}

		const urlParser = (string) => {
			let finalValue = string.toLowerCase();
			if (finalValue.startsWith('/')) {
				return finalValue;
			}
			return `/${finalValue}`;
		};

		const onPathInput = (event) => {
			formFields.path = urlParser(event.target.value);
		};

		const formSubmit = (event) => {
			context.emit('emitSubmit', formFields);
		};

		onMounted(() => {
			firstInputRef.value.focus();
		});

		return {
			loading,
			formSubmit,
			firstInputRef,
			onPathInput,
		};
	},
};
</script>
