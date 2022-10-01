import { toRaw } from 'vue';

export const updatePageData = (data: any) => {
    const page = toRaw(data);
    page.path = page.path.trim();
    delete page.created_at;
    delete page.updated_at;
    return page;
};

export const createPageData = (data: any) => {
    const page = toRaw(data);
    page.path = page.path.trim();
    delete page.created_at;
    delete page.updated_at;
    return page;
};
