import { createWebHistory, createRouter } from 'vue-router';
import NotFoundPage from './pages/NotFoundPage.vue';

const routes = [
	{
		path: '/',
		name: 'main-module',
	},
	{
		path: '/admin',
		name: 'admin-module',
		component: () => import('./modules/admin/AdminMain.vue'),
	},
	{
		path: '*',
		component: NotFoundPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
