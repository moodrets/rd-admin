<template>
	<component :is="loadTemplate" :pageData="pageData"></component>
</template>

<script>
import { defineAsyncComponent, onBeforeUpdate, ref, shallowRef } from 'vue';
import { useRoute } from 'vue-router';

export default {
	name: 'simple-page',
	setup(props, ctx) {
		const loadTemplate = shallowRef(null);
		const pageData = ref({});
		pageData.value = useRoute().meta;
		loadTemplate.value = defineAsyncComponent(() => import(`@/pages/${pageData.value.template_filename}.vue`));

		onBeforeUpdate(() => {
			pageData.value = useRoute().meta;
			loadTemplate.value = defineAsyncComponent(() => import(`@/pages/${pageData.value.template_filename}.vue`));
		});

		return {
			loadTemplate,
			pageData,
		};
	},
};
</script>
