import { adminAxios } from './adminAxios';

export async function apiGetPages() {
	const res = await adminAxios.get('/page/get-all', {
		params: {
			limit: 10,
		},
	});
	return res.data ? res.data : [];
}
