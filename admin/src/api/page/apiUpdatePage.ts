import { adminAxios } from '~/api/adminAxios';

export async function apiUpdatePage(page: any) {
    const res = await adminAxios.put(`/page/${page.id}`, { ...page });
    return res.data ? res.data : undefined;
}
