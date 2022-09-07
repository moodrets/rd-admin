<template>
	<form
		@submit.prevent="formSubmit($event)"
		:class="{ 'opacity-50 pointer-events-none': loading }"
		class="grid grid-cols-1 gap-6"
	>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">Название</div>
			<input type="text" class="rd-form-control" required />
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">{{ 'Данные JSON {"some": "value"}' }}</div>
			<textarea rows="6" class="rd-form-control resize-y"></textarea>
		</label>
		<label>
			<div class="mb-3 text-gray-400 font-bold text-14px">Страница (к которой привязано меню)</div>
			<div class="rd-custom-select">
				<div class="rd-custom-select__value">Выберите страницу</div>
				<select>
					<option value="">Выберите страницу</option>
				</select>
				<i class="rd-icon rd-icon--arrow">keyboard_arrow_down</i>
			</div>
		</label>
		<div class="select-none">
			<label class="inline-flex items-center">
				<input type="checkbox" class="flex-none mr-2 w-6 h-5" />
				<div>Глобальное (для всех страниц на сайте)</div>
			</label>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		//  formFields: {
		// 		type: Object,
		// 		required: true,
		// 	},
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
};
</script>
