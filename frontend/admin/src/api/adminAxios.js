import axios from 'axios';
import { RDToast } from '../../../shared/plugins/rd-toast/RDToast';
const toast = new RDToast();

export const adminAxios = axios.create({
	baseURL: 'http://localhost:1346',
});

adminAxios.interceptors.response.use(
	(res) => {
		const message = res.data?.message || res.message;
		message && toast.show(message, { type: 'success' });
		return res;
	},
	(err) => {
		const message = err.response?.data?.message || err.message;
		message && toast.show(message, { type: 'error' });
		return Promise.reject(err);
	}
);
