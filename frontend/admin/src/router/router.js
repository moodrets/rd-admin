import { createWebHistory, createRouter } from 'vue-router';
import LayoutDefault from '../layouts/LayoutDefault.vue';

const routes = [
	{
		path: '/',
		component: LayoutDefault,
		children: [
			{ path: '/', name: 'admin-main', component: () => import('@/pages/common/MainPage.vue') },
			{ path: '/settings', name: 'admin-settings', component: () => import('@/pages/common/DummyPage.vue') },
			{ path: '/users', name: 'admin-users', component: () => import('@/pages/common/DummyPage.vue') },
			{ path: '/pages', name: 'admin-pages', component: () => import('@/pages/pages/PagesList.vue') },
			{ path: '/menus', name: 'admin-menus', component: () => import('@/pages/menu/MenuList.vue') },
			{
				path: '/pages/create',
				name: 'admin-create-page',
				component: () => import('@/pages/pages/CreateUpdatePage.vue'),
			},
			{ path: '/blocks', name: 'admin-blocks', component: () => import('@/pages/common/DummyPage.vue') },
			{
				path: '/form-constructor',
				name: 'admin-form-constructor',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			// 404
			{ path: '/:pathMatch(.*)*', component: () => import('@/pages/common/NotFoundPage.vue') },
		],
	},
	{ path: '/login', name: 'admin-login', component: () => import('@/pages/common/LoginPage.vue') },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
