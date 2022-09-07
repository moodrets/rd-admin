export default function ({ $axios }, inject) {
	const api = $axios.create();
	api.setBaseURL('http://localhost:1346/');
	inject('api', api);
}
