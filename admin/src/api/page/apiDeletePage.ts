import { adminAxios } from '~/api/adminAxios';

export async function apiDeletePage(page: any) {
    const res = await adminAxios.delete(`/page/${page.id}`);
    return res.data ? res.data : undefined;
}
