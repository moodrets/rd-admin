import { adminAxios } from './adminAxios';

export async function apiDeletePage(id) {
	const res = await adminAxios.delete(`/page/byId/${id}`);
	return res.data ? res.data : undefined;
}
