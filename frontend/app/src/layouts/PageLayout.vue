<template>
	<component :is="loadTemplate" :data="data"></component>
</template>

<script>
import { defineAsyncComponent, onBeforeUpdate, ref, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

export default {
	name: 'simple-page',
	setup() {
		const loadTemplate = shallowRef(null);
		const data = ref({});

		const setPageData = () => {
			data.value = useRoute().meta;
			loadTemplate.value = defineAsyncComponent(() => import(`@/pages/${data.value.page.template_filename}.vue`));
		};
		setPageData();

		onBeforeUpdate(() => {
			setPageData();
		});

		return {
			loadTemplate,
			data,
		};
	},
};
</script>
