import axios from 'axios';

export const adminAxios = axios.create({
	baseURL: 'http://localhost:1346',
});
