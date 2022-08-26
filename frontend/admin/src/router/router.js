import { createWebHistory, createRouter } from 'vue-router';
import LayoutDefault from '../layouts/LayoutDefault.vue';

const routes = [
	{
		path: '/',
		component: LayoutDefault,
		children: [
			{
				path: '/',
				name: 'admin-main',
				component: () => import('@/pages/common/MainPage.vue'),
			},
			{
				path: '/menus',
				name: 'admin-menus',
				component: () => import('@/pages/menu/MenuList.vue'),
			},
			{
				path: '/menus/create',
				name: 'admin-menu-create',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/pages',
				name: 'admin-pages',
				component: () => import('@/pages/pages/PagesList.vue'),
			},
			{
				path: 'pages/create',
				name: 'admin-page-create',
				component: () => import('@/pages/pages/CreatePage.vue'),
			},
			{
				path: 'pages/edit/:id',
				name: 'admin-page-edit',
				component: () => import('@/pages/pages/EditPage.vue'),
			},
			{
				path: '/blocks',
				name: 'admin-blocks',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/blocks/create',
				name: 'admin-block-create',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/forms',
				name: 'admin-forms',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/forms/create',
				name: 'admin-form-create',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/modules',
				name: 'admin-modules',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/modules/create',
				name: 'admin-module-create',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/users',
				name: 'admin-users',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/users/create',
				name: 'admin-users-create',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/requests',
				name: 'admin-requests',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			{
				path: '/settings',
				name: 'admin-settings',
				component: () => import('@/pages/common/DummyPage.vue'),
			},
			// 404
			{
				path: '/:pathMatch(.*)*',
				component: () => import('@/pages/common/NotFoundPage.vue'),
			},
		],
	},
	{
		path: '/login',
		name: 'admin-login',
		component: () => import('@/pages/common/LoginPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'is-active',
});

export default router;
