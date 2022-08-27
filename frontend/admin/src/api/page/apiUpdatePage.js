import { adminAxios } from '@/api/adminAxios';

export async function apiUpdatePage(page) {
	const res = await adminAxios.put(`/page/update/${page.id}`, { ...page });
	return res.data ? res.data : undefined;
}
