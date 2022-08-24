import { reactive } from 'vue';

export const ReactiveSettings = () => {
	const settings = reactive({});

	return {
		settings,
	};
};
