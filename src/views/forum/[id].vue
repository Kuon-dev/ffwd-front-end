<template>
	<!--The Whole Page-->
	<div class="h-full w-full bg-cover p-1">
		<!--Forum-->
		<div
			class="bg-white justify-center border rounded-lg p-9 xl:w-3/5 md:w-5/6 sm:w-6/7 xl:mx-72 md:mx-16 sm:mx-2 grid grid-cols-1 my-5"
			v-if="Object.keys(forumStore.errorList).length === 0"
		>
			<!-- Forum Title -->
			<div class="flex flex-row gap-4 align-center">
				<div class="flex flex-col justify-center">
					<button variant="text">
						<font-awesome-icon
							:icon="['fas', 'caret-up']"
							size="xl"
							color="green"
						/>
					</button>
					<p class="text-center">
						{{ forumStore?.forum?.votes }}
					</p>
					<button>
						<font-awesome-icon
							:icon="['fas', 'caret-down']"
							size="xl"
							color="red"
						/>
					</button>
				</div>
				<h2 class="place-content-start flex text-2xl font-semibold leading-10">
					{{ forumStore?.forum?.forum?.title }}
				</h2>
			</div>

			<!-- Author -->
			<div class="h-14 my-4 ml-1">
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
			</div>

			<!--Description-->
			<div class="ml-1">
				<p class="my-4">
					I would like to extend the border-bottom line longer than ever as the
					image below: \n If this is impossible and you have any suggestion to
					make a change into my code, that would be great.
				</p>

				<!-- Image -->
				<p>
					<img
						src="https://i.stack.imgur.com/HGVm7.png"
						alt="Reference Image"
					/>
				</p>

				<p class="my-4"><strong>HTML:</strong></p>

				<!-- Display Code -->
				<div class="bg-slate-950 rounded h-auto max-h-96 overflow-y-auto">
					<div class="flex justify-start mx-5 h-fit"></div>
				</div>

				<!-- Link -->
				<p class="my-4">
					"Here is my &nbsp;"
					<strong>JSFIDDLE</strong>
					": &nbsp;"
					<strong>
						<a
							href="http://jsfiddle.net/QTNr5/"
							rel="nofollow noreferrer"
							class="text-sky-700 underline hover:text-blue-700 visited:text-indigo-500"
							>http://jsfiddle.net/QTNr5/</a
						>
					</strong>
				</p>
			</div>

			<!-- Leave Comment Field -->
			<form class="relative my-3 mx-1" data-te-input-wrapper-init>
				<v-textarea
					class="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
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
					<div>{{ forumStore.forum.comment.length }} Answers</div>
				</div>

				<!-- Comments -->
				<div class="my-1">
					<div v-if="Object.keys(forumStore.errorList).length === 0">
						<PostComment
							v-if="forumStore?.forum?.comment"
							:comments="comments"
						/>
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
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { renderHTML } from 'compostables/EditorJsInjector';
import PostComment from 'forum-components/PostComment.vue';
import { useForumStore, Comment } from 'stores/ForumStore';
import BaseCard from 'base-components/BaseCard.vue';
// The following imports are for submit Comments code(testing phase)
// Used when user leave/post comment
import { useUserStore } from 'stores/UserStore';
import { getToken, apiClient } from 'stores/BackendAPI';
import { AxiosError } from 'axios';
import BaseAlert from 'base-components/BaseAlert.vue';

// Define data properties for the component
const forumStore = useForumStore();
const store = useUserStore();
const router = useRouter();

const currentForumData = ref([]);

// Define comment data
const comments = ref<Comment[]>([]);

watch(currentForumData, async (oldVal, newVal) => {
	comments.value = await (forumStore.getAllComments(0) ?? []);
});

currentForumData.value = await forumStore.getSpecificForum(
	router.currentRoute.value.params.id,
);

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

const errorMessage = ref('');

const getTextValue = (event: Event) => {
	newComment.value = (event.target as HTMLTextAreaElement).value;
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
			location.reload();
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
</script>

<style lang="scss" scoped></style>
