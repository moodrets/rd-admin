import { adminAxios } from '@/api/adminAxios';

export async function apiDeletePage(page) {
	const res = await adminAxios.delete(`/page/delete/${page.id}`);
	return res.data ? res.data : undefined;
}
