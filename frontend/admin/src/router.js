import { createWebHistory, createRouter } from 'vue-router';
import NotFoundPage from './pages/NotFoundPage.vue';
import MainPage from './pages/MainPage.vue';
import DummyPage from './pages/DummyPage.vue';

const routes = [
	{
		path: '/',
		name: 'main-page',
		component: MainPage,
	},
	{ path: '/settings', name: 'admin-settings', component: DummyPage },
	{ path: '/users', name: 'admin-users', component: DummyPage },
	{ path: '/pages', name: 'admin-pages', component: DummyPage },
	{ path: '/blocks', name: 'admin-blocks', component: DummyPage },
	// shop
	{ path: '/products', name: 'admin-products', component: DummyPage },
	{ path: '/reviews', name: 'admin-reviews', component: DummyPage },
	{
		path: '/:pathMatch(.*)*',
		component: NotFoundPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	// linkActiveClass: 'router-link-active',
});

export default router;
