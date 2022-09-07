<template>
	<div class="pb-24">
		<h1 class="text-2xl font-bold mb-8">Создание меню</h1>
		<menu-form actionType="create" :loading="loading"></menu-form>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { Menu } from '@/models/menu/MenuModel';
import MenuForm from '@/components/menu/MenuForm';

export default {
	components: {
		'menu-form': MenuForm,
	},
	setup() {
		const formFields = reactive(new Menu());
		const loading = ref(false);
		const router = useRouter();

		return {
			formFields,
			loading,
		};
	},
};
</script>
