import { createWebHistory, createRouter } from 'vue-router';
import LayoutDefault from '@/layouts/LayoutDefault.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import MainPage from '@/pages/MainPage.vue';
import ContactsPage from '@/pages/ContactsPage.vue';

const routes = [
	{
		path: '/',
		component: LayoutDefault,
		children: [
			{ path: '/', component: MainPage },
			{ path: '/contacts', component: ContactsPage },
			{ path: '/:pathMatch(.*)*', component: NotFoundPage },
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
