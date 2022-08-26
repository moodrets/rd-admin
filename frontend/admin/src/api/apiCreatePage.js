import { adminAxios } from './adminAxios';

export async function apiCreatePage(data) {
	const res = await adminAxios.post('/page/create', { ...data });
	return res.data ? res.data : undefined;
}
