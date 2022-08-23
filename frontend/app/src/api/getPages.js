import { RDAxios } from './RDAxios';

export async function GetPages() {
	return await RDAxios.get('/pages');
}

export async function transformPagesToRoutes(component) {
	try {
		const res = await GetPages();
		if (res.data.length) {
			return res.data.map((page) => {
				return {
					path: page.url,
					component,
					meta: {
						...page,
					},
				};
			});
		}
		return [];
	} catch (e) {
		return [];
	}
}
