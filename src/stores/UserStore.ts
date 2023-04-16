import { AxiosError } from 'axios';
import { defineStore } from 'pinia';
import { getToken, apiClient } from './BackendAPI';

interface LoginCredentials {
	email: String;
	password: String;
	remember_me: Boolean;
}

interface RegisterCredentials {
	name: String;
	email: String;
	password: String;
	password_confirmation: String;
}

interface ResetPasswordCredentials {
	password: String;
	password_confirmation: String;
	email: any;
	token: any;
}

interface SingleError {
	message: String;
	status: number | any;
}

export const useUserStore = defineStore('userStore', {
	state: () => ({
		authUser: null,
		authUserAccessLevel: 0,
		authErrors: <any>[] || <any>Object,
	}),
	getters: {
		user: (state) => state.authUser,
		accessLevel: (state) => state.authUserAccessLevel,
		errorList: (state) => state.authErrors,
	},
	actions: {
		async permittedAccessLevel() {
			if (!this.user) this.getUser();
			getToken();
			const userPerms = await apiClient.post(
				'api/user',
				this.user,
			);
			this.authUserAccessLevel =
				userPerms?.data?.perm_level;
		},

		async getUser() {
			getToken();

			const userData = await apiClient
				.get('api/user')
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					const errorMessage: SingleError = {
						message: (error?.response?.data as any).message,
						status: error?.response?.status,
					};
					this.authErrors = errorMessage;
				});
			if (userData?.data) {
				const userPerms = await apiClient.post(
					'api/user',
					userData?.data,
				);
				this.authUserAccessLevel = await userPerms?.data
					?.perm_level;
				this.authUser = userData?.data;
				/*
        if (userPerms.data.perm_level < accessType) {
          this.router.push('/404')
          return
        }

        */

				return userData?.data ?? null;
			}

			window.sessionStorage.setItem(
				'userSession',
				JSON.stringify(userData?.data ?? null),
			);
		},

		async setUser() {
			this.getUser();
		},

		async handleRegister(credentials: RegisterCredentials) {
			await getToken();
			const res = await apiClient
				.post('/register', {
					name: credentials.name,
					email: credentials.email,
					password: credentials.password,
					password_confirmation:
						credentials.password_confirmation,
				})
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					this.authErrors = (
						error?.response?.data as any
					).errors;
					console.log(this.authErrors);
					return {
						status: error?.response?.status,
					};
				});
			return res;
		},

		async handleLogin(credentials: LoginCredentials) {
			this.authErrors = [];
			await getToken();
			const res = await apiClient
				.post('/login', {
					email: credentials.email,
					password: credentials.password,
				})
				.catch((err: AxiosError) => {
					const error = err as AxiosError;
					this.authErrors = (
						error?.response?.data as any
					).errors;
					return {
						status: error?.response?.status,
					};
				});
			console.log(res);
			if (res.status === 204) {
				await this.loginRedirect();
			}

			return res;
		},

		async handleLogout() {
			getToken();
			await apiClient.post('/logout');
			this.authUser = null;
			this.router.push('/');
		},

		async handleForgotPassword(email: String) {
			await getToken();
			const res = await apiClient
				.post('/forgot-password', {
					email: email,
				})
				.catch((err: AxiosError) => {
					const error = err as AxiosError;
					this.authErrors = (
						error?.response?.data as any
					).errors;
					return {
						status: error?.response?.status,
					};
				});

			return res;
		},

		async handleResetPassword(
			credentials: ResetPasswordCredentials,
		) {
			const res = await apiClient.post(
				'/reset-password',
				credentials,
			);
			return res;
		},

		async handleResendEmailVerification() {
			const res = await apiClient.post(
				'/verification-notification',
			);
			return res;
		},

		async loginRedirect() {
			const data = window.sessionStorage.getItem(
				'userSession',
			);
			if (!data) return true;

			await this.getUser();
			const res = await apiClient.get('/dashboard');
			const route = await (res?.data as any).route;
			if (route) this.router.push(route);
			return true;
		},
	},
});
