import { adminAxios } from '~/api/adminAxios';

export async function apiCreatePage(page: any) {
    const res = await adminAxios.post('/page', { ...page });
    return res.data ? res.data : undefined;
}