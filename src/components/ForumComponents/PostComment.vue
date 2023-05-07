<template>
	<div v-for="comment in comments" :key="comment.id">
		<hr />
		<div>
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
						<div class="font-medium text-lg">{{ comment.username }}</div>
						<!-- Author username -->
						<div class="font-light text-xs">
							{{ formatDate(comment.updated_at) }}
						</div>
						<!-- Time elapsed since forum post -->
					</div>
				</div>
			</div>

			<!--Answer-->
			<div>
				<p></p>
				<!-- <p class="my-4">Just add Padding</p> -->
				<p class="my-4">{{ comment.message }}</p>

				<!--Code Example-->
				<div class="bg-slate-950 rounded h-auto max-h-96 overflow-y-auto">
					<div class="flex justify-start mx-5 h-fit"></div>
				</div>
			</div>
		</div>
	</div>
	<!-- <InfiniteLoading @infinite="forumStore.getAllComments(0)" /> -->
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { renderHTML } from 'compostables/EditorJsInjector';
import { ref } from 'vue';
import InfiniteLoading from 'v3-infinite-loading';
import 'v3-infinite-loading/lib/style.css';
import { useForumStore } from 'stores/ForumStore';

interface Comment {
	id: number;
	message: string;
	created_at: string;
	updated_at: string;
	is_deleted_by_user: number;
	is_removed_by_admin: number;
	forum_id: number;
	user_id: number;
	username: any;
}

const props = defineProps({
	comments: {
		type: Array as PropType<Comment[]>,
		default: () => [],
	},
});

const forumStore = useForumStore();

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
</script>
