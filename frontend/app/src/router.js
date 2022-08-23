import { createWebHistory, createRouter } from 'vue-router';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import SimplePage from '@/pages/SimplePage.vue';
import { transformPagesToRoutes } from './api/getPages';

const routesFromAdmin = await transformPagesToRoutes(SimplePage);

const routes = [...routesFromAdmin, { path: '/:pathMatch(.*)*', component: NotFoundPage }];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
