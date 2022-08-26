<template>
	<component :is="loadTemplate" :pageData="pageData"></component>
</template>

<script>
import { defineAsyncComponent, onBeforeUpdate, ref, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

export default {
	name: 'simple-page',
	setup() {
		const loadTemplate = shallowRef(null);
		const pageData = ref({});

		const setPageData = () => {
			pageData.value = useRoute().meta;
			loadTemplate.value = defineAsyncComponent(() => import(`@/pages/${pageData.value.template_filename}.vue`));
		};
		setPageData();

		onBeforeUpdate(() => {
			setPageData();
		});

		return {
			loadTemplate,
			pageData,
		};
	},
};
</script>
