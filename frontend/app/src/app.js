import { createApp, h } from 'vue';
import router from './router.js';
import App from './App.vue';

// styles
import './styles/app.scss';

const app = createApp({
	render: () => h(App),
});

app.use(router).mount('#app');
