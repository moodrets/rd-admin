import { AppAxios } from './AppAxios';

export async function apiGetRoutes() {
	const res = await AppAxios.get('/page/get-routes');
	return res.data ? res.data : [];
}
