import { apiGetRoutes } from '../api/apiGetRoutes';

export async function transformPagesToRoutes() {
	try {
		const res = await apiGetRoutes();
		if (res.length) {
			const result = res.map((page) => ({
				path: page.path,
				component: () => import(`@/pages/${page.template_filename}`),
				meta: {
					...page,
				},
			}));
			return result;
		}
		return [];
	} catch (e) {
		console.error(e);
	}
	return [];
}
