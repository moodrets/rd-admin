import { createWebHistory, createRouter } from 'vue-router';
import NotFoundPage from '../pages/common/NotFoundPage.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import MainPage from '../pages/common/MainPage.vue';
import DummyPage from '../pages/common/DummyPage.vue';
import LoginPage from '../pages/common/LoginPage.vue';
import PagesList from '../pages/pages/PagesList.vue';
import CreateUpdatePage from '../pages/pages/CreateUpdatePage.vue';

const routes = [
	{
		path: '/',
		component: LayoutDefault,
		children: [
			{ path: '/', name: 'admin-main', component: MainPage },
			{ path: '/settings', name: 'admin-settings', component: DummyPage },
			{ path: '/users', name: 'admin-users', component: DummyPage },
			{ path: '/pages', name: 'admin-pages', component: PagesList },
			{ path: '/pages/create', name: 'admin-create-page', component: CreateUpdatePage },
			{ path: '/blocks', name: 'admin-blocks', component: DummyPage },
			{ path: '/form-constructor', name: 'admin-form-constructor', component: DummyPage },
			// 404
			{ path: '/:pathMatch(.*)*', component: NotFoundPage },
		],
	},
	{ path: '/login', name: 'admin-login', component: LoginPage },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
