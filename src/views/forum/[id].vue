<template>
	<!--The Whole Page-->
	<div class="h-full w-full bg-cover p-1">
		<!--Forum-->
		<div
			class="bg-white justify-center border rounded-lg p-9 xl:w-3/5 md:w-5/6 sm:w-6/7 xl:mx-72 md:mx-16 sm:mx-2 flex flex-col my-5"
			v-if="Object.keys(forumStore.errorList).length === 0"
		>
			<!-- Forum Title -->
			<div class="flex flex-row gap-4 align-center">
				<div class="flex flex-col justify-center">
					<button variant="text" @click="handleUserVote(true)">
						<font-awesome-icon
							:icon="['fas', 'caret-up']"
							size="xl"
							:color="userVote?.is_upvote === 1 ? 'green' : 'gray'"
						/>
					</button>
					<p class="text-center">
						{{ forumStore?.forum?.votes }}
					</p>
					<button @click="handleUserVote(false)">
						<font-awesome-icon
							:icon="['fas', 'caret-down']"
							size="xl"
							:color="userVote?.is_upvote === 0 ? 'red' : 'gray'"
						/>
					</button>
				</div>
				<h2
					class="truncate place-content-start flex text-2xl font-semibold leading-10"
				>
					{{ forumStore?.forum?.forum?.title }}
				</h2>
			</div>

			<!--Description-->
			<div
				class="mt-3 mb-10 px-3"
				id="forum-content"
				v-if="
					status !== 'editing' &&
					forumStore?.forum?.forum?.is_deleted_by_user === 0 &&
					forumStore?.forum?.forum?.is_removed_by_admin === 0
				"
			></div>
			<div v-else-if="forumStore?.forum?.forum?.is_deleted_by_user === 1">
				<div>Forum has been deleted by the creator</div>
			</div>
			<div v-else-if="forumStore?.forum?.forum?.is_removed_by_admin === 1">
				<div>Forum has been removed by admin</div>
			</div>
			<BaseEditor
				v-else-if="store.user"
				server="/api/forums/edit"
				:user="store.user"
				:title="forumStore?.forum?.forum?.title"
				:status="status"
			/>
			<!-- User toolbar -->

			<!-- Author -->
			<div class="h-14 my-4 ml-1 flex justify-between items-center">
				<div class="h-14 w-full flex justify-start items-center">
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
						<div class="font-medium text-lg">
							{{ forumStore?.forum?.user?.name }}
						</div>
						<!-- Author username -->
						<div class="font-light text-xs">3 days ago</div>
						<!-- Time elapsed since forum post -->
					</div>
				</div>

				<div
					v-if="
						store.user?.id === forumStore.forum.forum.user_id ||
						store.accessLevel > 1
					"
					class="flex flex-row justify-end gap-4 items-center"
				>
					{{ status }}
					<button @click="toggleEditStatus()">
						<font-awesome-icon icon="fa-solid fa-pen" />
					</button>
					<button @click="deletePost()">
						<font-awesome-icon icon="fa-solid fa-trash" />
					</button>
				</div>
			</div>
			<!-- Leave Comment Field -->
			<form
				class="relative my-3 mx-1"
				data-te-input-wrapper-init
				v-if="store.user"
			>
				<span class="text-sky-500">Comment as {{ store.user?.name }}</span>
				<v-textarea
					class=""
					id="comment"
					placeholder="Comment"
					@input="getTextValue"
				></v-textarea>
				<!-- <label
					for="exampleFormControlTextarea1"
					class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
					>Comment</label
				> -->
				<v-btn
					color="#7e81ff"
					class="mt-5 text-white"
					@click="submitComment($event)"
					>Post</v-btn
				>
			</form>
			<!-- Comment Related Alerts Field -->
			<BaseAlert
				v-if="showAlert"
				:type="showAlertType"
				:title="showAlertTitle"
				:text="showAlertText"
			/>

			<!-- Comment Area -->
			<div class="mt-5 mx-1">
				<!-- Comment Number -->
				<div
					class="place-content-start flex text-xl font-semibold leading-10 ml-2"
				>
					<div>{{ forumStore.forum.comment.length }} Comments</div>
				</div>

				<!-- Comments -->
				<div class="my-1">
					<div
						v-if="
							Object.keys(forumStore.errorList).length === 0 &&
							forumStore?.forum.comment.length > 0
						"
					>
						<PostComment
							v-if="forumStore?.forum?.comment"
							:comments="forumStore.allComments"
						/>
					</div>
					<div
						v-else-if="Object.keys(forumStore.errorList).length === 0"
						class="mt-5 text-gray-500"
					>
						No comments yet
					</div>
					<BaseCard v-else class="mt-4">
						<div class="text-red-500">
							{{ forumStore.errorList }}
						</div>
					</BaseCard>
				</div>
			</div>
		</div>
		<div v-else>
			<BaseCard class="mt-4">
				<div class="text-red-500 div-center flex-col">
					<h3 class="text-xl font-semibold">An error has occurred</h3>
					<br />
					<p>Error: {{ forumStore.errorList.message }}</p>
					<p>Status: {{ forumStore.errorList.status }}</p>
					<br />
				</div>
			</BaseCard>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { renderHTML } from 'compostables/EditorJsInjector';
import { useForumStore, Comment } from 'stores/ForumStore';
import { useUserStore } from 'stores/UserStore';
import { getToken, apiClient } from 'stores/BackendAPI';
import { AxiosError } from 'axios';
import BaseAlert from 'base-components/BaseAlert.vue';
import PostComment from 'forum-components/PostComment.vue';
import BaseCard from 'base-components/BaseCard.vue';
import BaseEditor from 'base-components/BaseEditor.vue';

// Define data properties for the component
const forumStore = useForumStore();
const store = useUserStore();
const router = useRouter();

const status = ref<'viewing' | 'editing'>('viewing');
const currentForumData = ref([]);

const fetchForumContent = async () => {
	currentForumData.value = await forumStore.getSpecificForum(
		(router.currentRoute.value.params as any).id,
	);
};

// get the content of the post
await fetchForumContent();
// get the content of the comments
await forumStore.getAllComments(0);
// For Create New Comment
const newComment = ref<String>('');

// alert component
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

const getTextValue = (event: Event) => {
	newComment.value = (event.target as HTMLTextAreaElement).value;
};

const handleUserVote = async (voteType: boolean) => {
	await getToken();
	await apiClient
		.post('/api/forums/vote/add', {
			forum: forumStore.forum.forum.id,
			vote: voteType,
		})
		.catch((err: Error | AxiosError) => {
			const error = err as AxiosError;
			// this.authErrors = (error?.response?.data as any).errors;
			renderAlert(
				'error',
				'Oops an error has occured',
				(error?.response?.data as any)?.message,
			);
		});
	location.reload();
};

const submitComment = async (e: Event) => {
	e.preventDefault();
	if (!newComment.value) {
		renderAlert('error', 'Oops an error has occured', 'Please enter a message');
		return;
	}

	const body = {
		message: newComment.value,
		user: store.user?.id,
		forum: forumStore.forum?.forum?.id,
	};

	await getToken();
	const res = await apiClient
		.post('/api/comments/create', body)
		.then(async (response) => {
			renderAlert('success', 'Success', (response?.data as any).message);
			// comments.value = await (forumStore.getAllComments(0)) ?? [];
		})
		.catch((err: Error | AxiosError) => {
			const error = err as AxiosError;
			// this.authErrors = (error?.response?.data as any).errors;
			renderAlert(
				'error',
				'Oops an error has occured',
				(error?.response?.data as any)?.message,
			);
		});
	return res;
};

const path = computed(() => {
	return router.currentRoute.value.path;
});

const userVote = ref();
const renderVote = async () => {
	const vote = await apiClient
		.post('/api/forums/vote/get', {
			forum: forumStore.forum.forum.id,
		})
		.catch((err: Error | AxiosError) => {
			const error = err as AxiosError;
			// this.authErrors = (error?.response?.data as any).errors;
			renderAlert(
				'error',
				'Oops an error has occured',
				(error?.response?.data as any)?.message,
			);
		});
	const voteResult = (vote as any)?.data?.data[0];
	userVote.value = voteResult;
	return voteResult;
};

const toggleEditStatus = () => {
	status.value === 'viewing'
		? (status.value = 'editing')
		: (status.value = 'viewing');

	if (status.value === 'viewing') {
		setTimeout(async () => {
			await fetchForumContent();
			renderHTML(forumStore.forum.forum.content);
		}, 500);
	}
};

const deletePost = async () => {
	// Admin Delete Post
	// If current user not creator of forum and access level more than 1 (admin)
	if (
		store.user?.id !== forumStore.forum?.forum?.user_id &&
		store.accessLevel > 1
	) {
		const body = {
			forum: forumStore.forum?.forum?.id,
		};

		await getToken();
		const res = await apiClient
			.post('/api/forums/deleteAdmin', body)
			.then(async (response) => {
				renderAlert('success', 'Success', (response?.data as any).message);
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
	else if (store.user?.id === forumStore.forum?.forum?.user_id) {
		// USER DELETE
		const body = {
			forum: forumStore.forum?.forum?.id,
		};

		await getToken();
		const res = await apiClient
			.post('/api/forums/deleteUser', body)
			.then(async (response) => {
				renderAlert('success', 'Success', (response?.data as any).message);
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
};

if (store.user) await renderVote();

onBeforeMount(() => {
	if (import.meta.env.VITE_APP_PUSHER_KEY) {
		import('stores/WebSocketAPI').then((module: { [key: string]: any }) => {
			module['addNewCommentSocket' as any];
			module.addNewCommentSocket(forumStore.forum.forum.id);
		});
	}
});

onMounted(() => {
	renderHTML(forumStore.forum.forum.content);
});
</script>

<style lang="scss">
#forum-content {
}

#forum-content h1,
#forum-content h2,
#forum-content h3,
#forum-content h4,
#forum-content h5,
#forum-content h6 {
	margin-top: 24px;
	margin-bottom: 16px;
	font-weight: 600;
	line-height: 1.25;
}

#forum-content h2 {
	font-weight: 600;
	padding-bottom: 0.3em;
	font-size: 1.5em;
	// border-bottom: 1px solid hsla(210,18%,87%,1);
}

#forum-content h3 {
	font-weight: 600;
	font-size: 1.25em;
}

#forum-content h4 {
	font-weight: 600;
	font-size: 1em;
}

#forum-content h5 {
	font-weight: 600;
	font-size: 0.875em;
}

#forum-content h6 {
	font-weight: 600;
	font-size: 0.85em;
	color: #57606a;
}

.truncate {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
