import { defineStore } from 'pinia';
import { apiClient, getToken } from 'stores/BackendAPI';

export const useUserStore = defineStore('userStore', {
	state: () => ({
		authUser: null,
		authUserAccessLevel: 0,
		authErrors: [],
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
			const userPerms = await apiClient.post('api/user', this.user);
			this.authUserAccessLevel = (userPerms?.data?.perm_level);
		},

		async getUser() {
			getToken();
			const userData = await apiClient.get('api/user')
				.catch((error) => {
					console.log(error.response);
					this.authErrors = {
						message: error.response.data?.message,
						status: error.response.status,
					};
				});
			if (userData?.data) {
				const userPerms = await apiClient.post('api/user', userData?.data);
				this.authUserAccessLevel = await (userPerms?.data?.perm_level);
				this.authUser = userData?.data;
				/*
        if (userPerms.data.perm_level < accessType) {
          this.router.push('/404')
          return
        }

        */
				return userData?.data;
			}
		},

		async loginRedirect() {
			await this.getUser();
			const res = await apiClient.get('/dashboard');
			if (res?.data?.message && res?.status === 200) {this.router.push('/admin/dashboard');}
		},


		async setUser() {
			this.getUser();
		},

		async handleRegister(credentials) {
			await getToken();
			const res = await apiClient.post('/register', {
				name: credentials.name,
				email: credentials.email,
				password: credentials.password,
				password_confirmation: credentials.password_confirmation,
			})
				.catch((error) => {
					this.authErrors = error.response.data.errors;
					console.log(this.authErrors);
					return {
						status: error.response.status,
					};
				});
			return res;
		},

		async handleLogin(credentials) {
			this.authErrors = [];
			await getToken();
			const res = await apiClient.post('/login', {
				email: credentials.email,
				password: credentials.password,
			})
				.catch((error) => {
					console.log(error);
					this.authErrors = error.response.data.errors;
					console.log(error);
					return {
						status: error.response.status,
					};
				});
			console.log(this.errorList);
			if (this.errorList === 0) {
				await loginRedirect();
			}

			return res;
		},

		async handleLogout() {
			await apiClient.post('/logout');
			this.authUser = null;
			this.router.push('/');
		},

		async handleForgotPassword(email) {
			await getToken();
			const res = await apiClient.post('/forgot-password', {
				email: email,
			});
			return res;
		},

		async handleResetPassword(credentials) {
			const res = await apiClient.post('/reset-password', credentials);
			return res;
		},

		async handleResentVerification() {
			const res = await apiClient.post('/verification-notification');
			return res;
		},


	},
});
