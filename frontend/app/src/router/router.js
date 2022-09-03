import { createWebHistory, createRouter } from 'vue-router';
import { setPageDescription, setPageTitle } from '@/helpers/pageSeo';
import { checkLocalDomain } from '@/helpers/urlHelpers';
import { apiGetPageByUrl } from '@/api/apiGetPageByUrl';
import { emptyObject } from '@/helpers/dataHelpers';
import PageLayout from '@/layouts/PageLayout.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/:chapters*', name: 'page-layout', component: PageLayout },
		{ path: '/404', name: 'not-found-page', component: PageLayout },
	],
});

const notFoundData = {
	page: {
		title: '404 - Страница не найдена',
		page_title: '404 - Страница не найдена',
		page_description: '404 - Страница не найдена',
		template_filename: 'BasePage',
	},
};

router.beforeEach(async (to, from, next) => {
	// 404
	if (to.path === '/404') {
		to.meta.page = notFoundData.page;
		setPageTitle(to.meta.page);
		setPageDescription(to.meta.page);
		next();
		return;
	}

	const { page, blocks, menus } = await apiGetPageByUrl(to.path);

	// redirect local
	if (!emptyObject(page) && page.redirect && checkLocalDomain(page.redirect)) {
		next(page.redirect);
		return;
	}

	// redirect other domain
	if (!emptyObject(page) && page.redirect && !checkLocalDomain(page.redirect)) {
		window.location.href = page.redirect;
		return;
	}

	if (!emptyObject(page)) {
		to.meta.page = page;
		to.meta.blocks = blocks;
		to.meta.menus = menus;
		setPageTitle(to.meta.page);
		setPageDescription(to.meta.page);
		next();
		return;
	}

	if (emptyObject(page)) {
		next({ name: 'not-found-page' });
	}
});

export default router;
