import { CREATE_UPDATE_URL_REGEXP } from '@/regexp/urlRegexp';
import { toRaw } from 'vue';

export const clearPageData = (data) => {
	const page = toRaw(data);
	page.path !== '/' && (page.path = page.path.replace(CREATE_UPDATE_URL_REGEXP, ''));
	page.path = page.path.trim();
	!page.redirect && delete page.redirect;
	!page.template_filename && delete page.template_filename;
	!page.styles && delete page.styles;
	!page.scripts && delete page.scripts;
	!page.json_data && delete page.json_data;
	if (typeof page.json_data === 'object') {
		page.json_data = JSON.stringify(page.json_data);
	}
	delete page.created_at;
	delete page.updated_at;
	return page;
};
