// this file will contain the logic for AJAX logics
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

// const baseUrl = 'http://localhost:8000';
export const getToken = async () => {
	const token = await apiClient.get('/sanctum/csrf-cookie').then((response) => {
		return response;
	});
	(axios.defaults.headers as any).common['X-CSRF-TOKEN'] = token;
	// apiClient.defaults.headers.common['X-CSRF-TOKEN'] = token
};

export const apiClient = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
});
