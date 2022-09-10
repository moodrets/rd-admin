import { CREATE_UPDATE_URL_REGEXP } from '@/regexp/urlRegexp';
import { toRaw } from 'vue';

export const clearPageData = (data) => {
	const page = toRaw(data);
	page.path !== '/' && (page.path = page.path.replace(CREATE_UPDATE_URL_REGEXP, ''));
	page.path = page.path.trim();
	!page.styles && delete page.styles;
	!page.scripts && delete page.scripts;
	!page.page_title && delete page.page_title;
	!page.page_description && delete page.page_description;
	!page.content && delete page.content;
	page.hidden === false && delete page.hidden;

	delete page.created_at;
	delete page.updated_at;
	return page;
};
