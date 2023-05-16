// this file will contain the logic for AJAX logics
import axios from 'axios';
import $ from 'jquery';

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://157.245.148.32';

// This section is for the CSRF token
// A CSRF token is used to authenticate the request
export const getToken = async () => {
	const token = await apiClient.get('/sanctum/csrf-cookie').then((response) => {
		return response;
	});
	(axios.defaults.headers as any).common['X-CSRF-TOKEN'] = token;
};

export const apiClient = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
});

export const ajaxClient = (url: string, method: string) => {
	$.ajax({
		url: url,
		type: method.toUpperCase(),
		dataType: 'json',
		xhrFields: {
			withCredentials: true,
		},
		success: (data: any) => {
			return {
				type: 'success',
				data: data,
				status: 200,
			};
		},
		error: (xhr: any, status: any, error: any) => {
			return {
				type: 'error',
				data: error,
				status: status,
			};
		},
	});
};
