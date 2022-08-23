import { reactive } from 'vue';

export const ReactivePages = () => {
	const pages = reactive([]);

	return {
		pages,
	};
};
