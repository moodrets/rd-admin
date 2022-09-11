import { adminAxios } from '~/api/adminAxios';

export async function apiGetPageById(id: number) {
    const res = await adminAxios.get(`/page/get/${id}`);
    return res.data ? res.data : undefined;
}
