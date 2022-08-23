import { createApp, h } from 'vue';
import router from './router.js';
import Admin from './Admin.vue';

// styles
import './styles/admin.scss';

const app = createApp({
	render: () => h(Admin),
});

app.use(router).mount('#rd-admin');
