import { adminAxios } from '@/api/adminAxios';

export async function apiCreatePage(data) {
	const res = await adminAxios.post('/page/create', { ...data });
	return res.data ? res.data : undefined;
}
