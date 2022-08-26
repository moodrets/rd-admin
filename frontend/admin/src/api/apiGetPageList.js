import { adminAxios } from './adminAxios';

export async function apiGetPageList() {
	const res = await adminAxios.get('/page/list', {
		params: {
			limit: 10,
		},
	});
	return res.data ? res.data : [];
}
