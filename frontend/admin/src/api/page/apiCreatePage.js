import { adminAxios } from '@/api/adminAxios';

export async function apiCreatePage(page) {
	const res = await adminAxios.post('/page/create', { ...page });
	return res.data ? res.data : undefined;
}
