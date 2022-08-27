import { adminAxios } from '@/api/adminAxios';

export async function apiUpdatePage(data) {
	const res = await adminAxios.put(`/page/update/${data.id}`, { ...data });
	return res.data ? res.data : undefined;
}
