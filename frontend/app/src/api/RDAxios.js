import axios from 'axios';

export const RDAxios = axios.create({
	baseURL: 'http://localhost:1346',
});
