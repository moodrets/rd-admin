import { createWebHistory, createRouter } from 'vue-router';
import { apiGetPageByUrl } from '../api/apiGetPageByUrl';
import { setPageDescription, setPageTitle } from './pageSeo';
import PageLayout from '@/layouts/PageLayout';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/:chapters*', name: 'page-layout', component: PageLayout },
		{ path: '/404', name: 'not-found-page', component: PageLayout },
	],
});

const notFoundPageData = {
	title: '404 - Страница не найдена',
	page_title: '404 - Страница не найдена',
	page_description: '404 - Страница не найдена',
	template_filename: 'BasePage',
};

router.beforeEach(async (to, from, next) => {
	// 404
	if (to.path === '/404') {
		to.meta = { ...notFoundPageData };
		setPageTitle(to.meta);
		setPageDescription(to.meta);
		next();
		return;
	}

	const page = await apiGetPageByUrl(to.path);

	// redirect
	if (page && page.redirect) {
		next(page.redirect);
		return;
	}

	if (page) {
		to.meta = { ...page };
		setPageTitle(to.meta);
		setPageDescription(to.meta);
		next();
	}

	if (!page) {
		next({ name: 'not-found-page' });
	}
});

export default router;
