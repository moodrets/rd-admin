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
				component: () => import(/* webpackChunkName: "main" */ '@/pages/common/MainPage.vue'),
			},
			{
				path: '/menus',
				name: 'admin-menus',
				component: () => import(/* webpackChunkName: "menuList" */ '@/pages/menu/MenuList.vue'),
			},
			{
				path: '/menus/create',
				name: 'admin-menu-create',
				component: () => import(/* webpackChunkName: "createMenu" */ '@/pages/menu/CreateMenu.vue'),
			},
			{
				path: '/pages',
				name: 'admin-pages',
				component: () => import(/* webpackChunkName: "pageList" */ '@/pages/pages/PagesList.vue'),
			},
			{
				path: 'pages/create',
				name: 'admin-page-create',
				component: () => import(/* webpackChunkName: "createPage" */ '@/pages/pages/CreatePage.vue'),
			},
			{
				path: 'pages/edit/:id',
				name: 'admin-page-edit',
				component: () => import(/* webpackChunkName: "editPage" */ '@/pages/pages/EditPage.vue'),
			},
			{
				path: '/blocks',
				name: 'admin-blocks',
				component: () => import(/* webpackChunkName: "blocks" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/blocks/create',
				name: 'admin-block-create',
				component: () => import(/* webpackChunkName: "blocksCreate" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/forms',
				name: 'admin-forms',
				component: () => import(/* webpackChunkName: "forms" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/forms/create',
				name: 'admin-form-create',
				component: () => import(/* webpackChunkName: "formsCreate" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/modules',
				name: 'admin-modules',
				component: () => import(/* webpackChunkName: "modules" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/modules/create',
				name: 'admin-module-create',
				component: () => import(/* webpackChunkName: "modulesCreate" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/users',
				name: 'admin-users',
				component: () => import(/* webpackChunkName: "users" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/users/create',
				name: 'admin-users-create',
				component: () => import(/* webpackChunkName: "usersCreate" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/requests',
				name: 'admin-requests',
				component: () => import(/* webpackChunkName: "requests" */ '@/pages/common/DummyPage.vue'),
			},
			{
				path: '/settings',
				name: 'admin-settings',
				component: () => import(/* webpackChunkName: "settings" */ '@/pages/common/DummyPage.vue'),
			},
			// 404
			{
				path: '/:pathMatch(.*)*',
				component: () => import(/* webpackChunkName: "notFound" */ '@/pages/common/NotFoundPage.vue'),
			},
		],
	},
	// login
	{
		path: '/login',
		name: 'admin-login',
		component: () => import(/* webpackChunkName: "login" */ '@/pages/common/LoginPage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'is-active',
});

export default router;
