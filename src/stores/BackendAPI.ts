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

export interface AjaxResponse<T> {
	type: 'success' | 'error';
	data: T | null;
	status: number;
}

export const getAjaxToken: any = async () => {
	return new Promise<string>((resolve, reject) => {
		$.ajax({
			url: `${
				(import.meta as any).env.VITE_APP_BACKEND_API
			}/sanctum/csrf-cookie`,
			type: 'GET',
			xhrFields: {
				withCredentials: true,
			},
			success: () => {
				resolve(getCookieValue('XSRF-TOKEN'));
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

const getCookieValue: any = (name: string) => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export const ajaxClient = async <T>(
	url: string,
	method: string,
	data: any = null,
): Promise<AjaxResponse<T>> => {
	const csrfToken = await getAjaxToken();
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `${(import.meta as any).env.VITE_APP_BACKEND_API}/${url}`,
			type: method.toUpperCase(),
			dataType: 'json',
			xhrFields: {
				withCredentials: true,
			},
			data: data,
			beforeSend: (xhr) => {
				xhr.setRequestHeader('X-XSRF-TOKEN', decodeURIComponent(csrfToken));
			},
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
	});
};
