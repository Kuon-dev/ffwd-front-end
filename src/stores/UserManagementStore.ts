import { defineStore } from 'pinia';
import { AxiosError, AxiosResponse } from 'axios';
import { getToken, apiClient } from 'stores/BackendAPI';

export interface ManageUserDetails {
	email: string;
	email_verified_at: string;
	id: number;
	is_banned: number;
	listing_count: number;
	name: string;
	role: string[] | string;
}

export const useUserManagementStore = defineStore('userManagementStore', {
	state: () => ({
		manageLoaded: false,
		manageEditUser: {},
		manageData: <ManageUserDetails | any>[],
		manageError: [],
	}),
	getters: {
		errors: (state) => state.manageError,
		load: (state) => state.manageLoaded,
		editUser: (state) => state.manageEditUser,
		data: (state) => state.manageData,
	},
	actions: {
		async getAllUsers(userPerm: number) {
			await getToken();
			this.manageError = [];
			const response: AxiosResponse | void = await apiClient
				.post('/api/user/manage/all', {
					perm: userPerm,
				})
				.then((res: any) => {
					return res;
				})
				.catch((err: any) => {
					this.manageError = err;
				});
			this.manageLoaded = true;
			this.manageData = response?.data;
			return response?.data;
		},

		async getUserCount() {
			const res = apiClient
				.get('/api/user/manage/count')
				.then((response: AxiosResponse) => {
					return response;
				})
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					console.log(error);
				});
			return res;
		},
	},
});
