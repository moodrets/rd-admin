import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router/router';

// styles
import './styles/app.scss';

const app = createApp({
	render: () => h(App),
});

app.use(router).mount('#app');
