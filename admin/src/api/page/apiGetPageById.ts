import { adminAxios } from '~/api/adminAxios';

export async function apiGetPageById(id: number) {
    const res = await adminAxios.get(`/page/${id}`);
    return res.data ? res.data : undefined;
}
