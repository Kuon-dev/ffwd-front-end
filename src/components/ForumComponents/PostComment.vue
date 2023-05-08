<template>
	<div v-for="(comment, index) in comments" :key="comment.id">
		<hr />
		<div>
			<!-- Author -->
			<div class="h-14 mt-4 ml-1">
				<div class="h-14 w-full flex justify-between items-center">
					<div class="flex flex-row">
						<!-- Profile Image -->
						<div class="h-14 w-12 flex justify-center items-center">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"
								alt="Profile"
								class="rounded-full h-12 w-12"
							/>
						</div>
						<!-- Name -->
						<div class="ml-5">
							<!-- Author username -->
							<div class="font-medium text-lg">{{ comment.username }}</div>
							<!-- Time elapsed since comment was posted -->
							<div class="font-light text-xs">
								{{ formatDate(comment.updated_at) }}
							</div>
						</div>
					</div>
					<div
						class="flex flex-row gap-2"
						v-if="store.user?.id === comment.user_id || store.accessLevel > 1"
					>
						<button @click="toggleEdit(index)">
							<font-awesome-icon
								icon="fa-solid fa-pen-to-square"
								class="hover:text-blue-600"
							/>
						</button>
						<button>
							<font-awesome-icon
								icon="fa-solid fa-trash"
								class="hover:text-red-600"
							/>
						</button>
					</div>
				</div>
			</div>

			<!--Answer-->
			<div>
				<!-- <p></p> -->
				<!-- <p class="my-4">Just add Padding</p> -->
				<div class="flex flex-row items-center justify-between">
					<component
						:is="index === editingIndex ? 'textarea' : 'p'"
						class="mx-1 my-4 flex-grow resize-none h-auto min-h-0"
						@input="getEditedCommentValue"
						>{{ showCommentContent(comment) }}</component
					>
					<div class="flex flex-col gap-2 ml-2">
						<v-btn
							color="green"
							id="save-btn"
							v-if="index === editingIndex"
							@click="
								editingIndex = -1;
								editComment(store.accessLevel, store.user?.id, comment.id);
							"
							>Save</v-btn
						>
						<v-btn
							color="red"
							v-if="index === editingIndex"
							@click="editingIndex = -1"
							>Cancel</v-btn
						>
					</div>
				</div>
				<!--Code Example-->
				<div class="bg-slate-950 rounded h-auto max-h-96 overflow-y-auto">
					<div class="flex justify-start mx-5 h-fit"></div>
				</div>
			</div>
		</div>
		<BaseAlert
			v-if="showAlert"
			:text="showAlertText"
			:title="showAlertTitle"
			:type="showAlertType"
		/>
	</div>
	<!-- <InfiniteLoading @infinite="forumStore.getAllComments(0)" /> -->
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { renderHTML } from 'compostables/EditorJsInjector';
import { ref } from 'vue';
import InfiniteLoading from 'v3-infinite-loading';
import 'v3-infinite-loading/lib/style.css';
import { useForumStore, Comment } from 'stores/ForumStore';
import { useUserStore } from 'stores/UserStore';
import BaseAlert from 'base-components/BaseAlert.vue';
import { getToken, apiClient } from 'stores/BackendAPI';
import { AxiosError } from 'axios';

const props = defineProps({
	comments: {
		type: Array as PropType<Comment[]>,
		default: () => [],
	},
});

const store = useUserStore();
const forumStore = useForumStore();

const editingIndex = ref(-1);
const toggleEdit = (id: number) => {
	editingIndex.value = id;
	// if (editingIndex.value === id) editingIndex.value = -1;
};

const showAlert = ref<Boolean>(false);
const showAlertTitle = ref<string>('');
const showAlertText = ref<string>('');
const showAlertType = ref<'error' | 'success' | 'warning' | 'info'>('error');
const renderAlert = (
	type: 'error' | 'success' | 'warning' | 'info',
	title: string,
	text: string,
) => {
	showAlertType.value = type ?? 'error';
	showAlertTitle.value = title;
	showAlertText.value = text;
	showAlert.value = true;
	setTimeout(() => {
		showAlert.value = false;
	}, 8000);
};

// Get duration since the comment was updated
const formatDate = (date: string) => {
	const updatedTime = new Date(date).getTime();
	const currentTime = new Date().getTime();
	const diffInMs = currentTime - updatedTime;

	const seconds = Math.floor(diffInMs / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	if (seconds < 60) {
		return `${seconds} secs ago`;
	}
	else if (minutes < 60) {
		return `${minutes} mins ago`;
	}
	else if (hours < 24) {
		return `${hours} hrs ago`;
	}
	else {
		return `${days} days ago`;
	}
};

const editedComment = ref<String>('');

const getEditedCommentValue = (event: Event) => {
	editedComment.value = (event.target as HTMLTextAreaElement).value;
};
const editComment = async (
	accessLevel: number,
	commentUserId: number,
	commentId: number,
) => {
	if (store.user?.id !== commentUserId && accessLevel > 1) {
		// TODO admin edit
		console.log(commentId);
		console.log(editedComment.value);
		if (!editedComment.value) {
			renderAlert(
				'error',
				'Oops an error has occured',
				'Make sure your edited comment is not empty',
			);
			return;
		}

		const body = {
			message: editedComment.value,
			// comment: comment.id,
		};
	}
	else if (store.user?.id === commentUserId) {
		// USER edit
		console.log(commentId);
		console.log(editedComment.value);
		const body = {
			message: editedComment.value,
			comment: commentId,
		};

		await getToken();
		const res = await apiClient
			.post('/api/comments/edit', body)
			.then(async (response) => {
				renderAlert('success', 'Success', (response?.data as any).message);
				// comments.value = await (forumStore.getAllComments(0)) ?? [];
				location.reload();
			})
			.catch((err: Error | AxiosError) => {
				const error = err as AxiosError;
				renderAlert(
					'error',
					'Oops an error has occured',
					(error?.response?.data as any)?.message,
				);
			});
		return res;
	}
	else {
		// ERROR
	}
};

const showCommentContent = (comment: Comment) => {
	if (comment.is_deleted_by_user === 1) {return 'This comment has been deleted by the user';}
	if (comment.is_removed_by_admin === 1) {return 'This comment has been removed by the admin';}
	return comment.message;
};

const deleteComment = (accessLevel: number, commentUserId: number) => {
	if (store.user?.id !== commentUserId && accessLevel > 1) {
		// TODO admin delete
	}
	else if (store.user?.id === commentUserId) {
		// USER DELETE
	}
	else {
		// ERROR
	}
};
</script>

<style lang="scss" scoped>
textarea {
	padding: 1rem;
	background-color: #dddddd;
	color: #666666;
	border-radius: 8px;
	border: 1px solid transparent;
	outline: none;
	transition: all 0.2s;
}

textarea:hover {
	cursor: pointer;
	background-color: #eeeeee;
}

textarea:focus {
	cursor: text;
	color: #333333;
	background-color: white;
	border-color: #333333;
}
</style>
