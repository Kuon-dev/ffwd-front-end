import { defineStore } from 'pinia';
import { getToken, apiClient } from './BackendAPI';
import { AxiosError } from 'axios';
import { ref } from 'vue';

// Forum Interface with username
interface Forum {
	id: number;
	title: string;
	content: string;
	created_at: string;
	updated_at: string;
	is_deleted_by_user: number;
	is_removed_by_admin: number;
	user_id: number;
	username: any;
}

// Forum Interface without username
interface FetchedForum {
	id: number;
	title: string;
	content: string;
	created_at: string;
	updated_at: string;
	is_deleted_by_user: number;
	is_removed_by_admin: number;
	user_id: number;
}

// Error Interface
interface SingleError {
	message: string;
	status: number | any;
}

export const useForumStore = defineStore('forumStore', {
	state: () => ({
		forums: <any>[],
		forumPagination: 0,
		forumErrors: <any>[] || <any>Object,
	}),
	getters: {
		allForums: (state) => state.forums,
		forumPaginationIndex: (state) => state.forumPagination,
		errorList: (state) => state.forumErrors,
	},
	actions: {
		async getAllForums() {
			await getToken();

			const user = ref<String[]>([]);
			const newForum = ref<Forum[]>([]);

			const forumData = await apiClient
				.get('api/forums')
				.then((res) => {
					this.forums = res.data;
					user.value = res.data.users;
					console.log(this.forums);
				})
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					const errorMessage: SingleError = {
						message: (error?.response?.data as any).message,
						status: error?.response?.status,
					};
					this.forumErrors = errorMessage;
				});
			console.log(this.forums);

			this.forums.data.data.forEach((forum: FetchedForum, index: number) => {
				const tempForum: Forum = { ...forum, username: user.value[index] };
				newForum.value.push(tempForum);
			});

			return this.forumErrors.length ? this.forumErrors : newForum.value;
		},
		getForum(id: number) {
			getToken();

			this.forums.forEach((frm: Forum) => {
				if (frm.id === id) {
					return frm;
				}
				const errorMessage: SingleError = {
					message: 'Forum not found',
					status: 400,
				};
				this.forumErrors = errorMessage;
			});
		},
		async getForumError() {
			await getToken();

			return this.errorList;
		},
	},
});
