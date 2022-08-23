import { reactive } from 'vue';
import { APP_TYPE_ENUM } from '../enums/settings.enums';

export const ReactiveSettings = () => {
	const settings = reactive({
		app_type: APP_TYPE_ENUM.multi_page,
	});

	return {
		settings,
	};
};
