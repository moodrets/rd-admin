import { createApp, h } from 'vue';
import DKToast from 'vue-dk-toast';
import Admin from '@/Admin.vue';
import router from '@/router/router.js';
import { toastConfig } from '@/configs/toastConfig.js';

// styles
import './styles/admin.scss';

const app = createApp({
	render: () => h(Admin),
});

app.use(router).use(DKToast, toastConfig).mount('#rd-admin');
