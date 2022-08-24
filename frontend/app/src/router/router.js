import { createWebHistory, createRouter } from 'vue-router';
import { apiGetPageByUrl } from '../api/apiGetPageByUrl';
import NotFoundPage from '@/pages/NotFoundPage.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/:chapters*', component: () => import('@/pages/SimplePage') },
		{ path: '/404', name: 'not-found-page', component: NotFoundPage },
	],
});

router.beforeEach(async (to, from, next) => {
	if (to.path === '/404') {
		next();
		return;
	}

	const page = await apiGetPageByUrl(to.path);

	if (page) {
		document.title = page.page_title || page.title || '';
		const descriptionTag = document.querySelector('meta[name="description"]');
		descriptionTag && descriptionTag.setAttribute('content', page.page_description || '');
		to.meta = {
			...page,
		};
		next();
	}

	if (!page) {
		next({ name: 'not-found-page' });
	}
});

export default router;
