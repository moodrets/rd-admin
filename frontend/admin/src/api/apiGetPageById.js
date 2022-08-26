import { adminAxios } from './adminAxios';

export async function apiGetPageById(id) {
	const res = await adminAxios.get(`/page/byId/${id}`);
	return res.data ? res.data : undefined;
}
