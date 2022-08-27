import { adminAxios } from '@/api/adminAxios';

export async function apiDeletePage(id) {
	const res = await adminAxios.delete(`/page/delete/${id}`);
	return res.data ? res.data : undefined;
}
