import { CREATE_UPDATE_URL_REGEXP } from '~/regexp/urlRegexp';
import { toRaw } from 'vue';

export const clearPageData = (data: any) => {
    const page = toRaw(data);
    page.path !== '/' && (page.path = page.path.replace(CREATE_UPDATE_URL_REGEXP, ''));
    page.path = page.path.trim();

    delete page.created_at;
    delete page.updated_at;
    return page;
};
