import { createWebHistory, createRouter } from 'vue-router';
import { setPageDescription, setPageTitle } from '@/router/pageSeo';
import { checkLocalDomain } from '@/router/urlHelpers';
import { apiGetPageByUrl } from '@/api/apiGetPageByUrl';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/:chapters*', name: 'page-layout', component: import('@/layouts/PageLayout.vue') },
		{ path: '/404', name: 'not-found-page', component: import('@/layouts/PageLayout.vue') },
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

	// redirect local
	if (page && page.redirect && checkLocalDomain(page.redirect)) {
		next(page.redirect);
		return;
	}

	// redirect other domain
	if (page && page.redirect && !checkLocalDomain(page.redirect)) {
		window.location.href = page.redirect;
		return;
	}

	if (page) {
		to.meta = { ...page };
		setPageTitle(to.meta);
		setPageDescription(to.meta);
		next();
		return;
	}

	if (!page) {
		next({ name: 'not-found-page' });
	}
});

export default router;
