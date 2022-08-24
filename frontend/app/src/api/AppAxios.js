import axios from 'axios';

export const AppAxios = axios.create({
	baseURL: 'http://localhost:1346',
});
