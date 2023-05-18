// this file will contain the logic for AJAX logics
import axios from 'axios';
import $ from 'jquery';

// This section is for the CSRF token
// A CSRF token is used to authenticate the request
export const getToken = async () => {
	const token = await apiClient.get('/sanctum/csrf-cookie').then((response) => {
		return response;
	});
	(axios.defaults.headers as any).common['X-CSRF-TOKEN'] = token;
};

export const apiClient = axios.create({
	baseURL: (import.meta as any).env.VITE_APP_BACKEND_API,
	withCredentials: true,
});

interface AjaxResponse<T> {
	type: 'success' | 'error';
	data: T | null;
	status: number;
}

export const ajaxClient = <T>(
	url: string,
	method: string,
	data: any = null,
): Promise<AjaxResponse<T>> => {
	return new Promise((resolve, reject) => {
		// Retrieve CSRF token
		$.ajax({
			url: `${
				(import.meta as any).env.VITE_APP_BACKEND_API
			}}/sanctum/csrf-cookie`,
			type: 'GET',
			dataType: 'json',
			xhrFields: {
				withCredentials: true,
			},
			success: () => {
				// Make the request with CSRF token
				$.ajax({
					url: `${(import.meta as any).env.VITE_APP_BACKEND_API}/${url}`,
					type: method.toUpperCase(),
					dataType: 'json',
					xhrFields: {
						withCredentials: true,
					},
					data: data,
					success: (responseData: T) => {
						resolve({
							type: 'success',
							data: responseData,
							status: 200,
						});
					},
					error: (_, status, error) => {
						reject({
							type: 'error',
							data: error,
							status: status,
						});
					},
				});
			},
			error: (_, status, error) => {
				reject({
					type: 'error',
					data: error,
					status: status,
				});
			},
		});
	});
};
