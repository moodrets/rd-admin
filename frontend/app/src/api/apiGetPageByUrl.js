import { appAxios } from './appAxios';

export async function apiGetPageByUrl(path = '') {
	const res = await appAxios.get(`/page/byPath`, {
		params: {
			path,
		},
	});
	return res.data ? res.data : undefined;
}
