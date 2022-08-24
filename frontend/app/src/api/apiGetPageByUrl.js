import { AppAxios } from './AppAxios';

export async function apiGetPageByUrl(path = '') {
	const res = await AppAxios.get(`/page/get`, {
		params: {
			path,
		},
	});
	return res.data ? res.data : undefined;
}
