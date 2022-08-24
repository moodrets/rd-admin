import { createWebHistory, createRouter } from 'vue-router';
import { transformPagesToRoutes } from './transformPagesToRoutes';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import LoginPage from '@/pages/LoginPage.vue';

const routesFromAdmin = await transformPagesToRoutes();

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...routesFromAdmin,
		{ path: '/login', component: LoginPage },
		{ path: '/:pathMatch(.*)*', component: NotFoundPage },
	],
});

router.beforeEach((to, from, next) => {
	document.title = to.meta.page_title || to.meta.title;
	const descriptionTag = document.querySelector('meta[name="description"]');
	descriptionTag && descriptionTag.setAttribute('content', to.meta.page_description || '');
	next();
});

export default router;
