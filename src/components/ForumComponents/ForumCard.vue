<template>
	<transition
		enter-active-class="animate__animated animate__slideInRight animate__fast"
		leave-active-class="animate__animated animate__slideOutRight animate__fast"
	>
		<div class="flex flex-col my-5 gap-5">
			<BaseCard v-for="forum in forums" :key="forum.id">
				<!-- Forum Title -->
				<h2 class="text-xl mb-5 text-brand">{{ forum.title }}</h2>
				<!-- Forum Body -->
				<p class="p-1 mb-5 hidden md:block">
					{{ forum.content }}
				</p>

				<!-- Forum Bottom -->
				<div
					class="forumBottom flex flex-col md:flex-row justify-between gap-5"
				>
					<!-- Forum UpVote & Comment -->
					<div class="upvoteComment flex gap-5">
						<!-- UpVote -->
						<v-btn
							color="#7e81ee"
							class="text-white"
							@click="incrementUpVotes($event)"
						>
							<font-awesome-icon
								:icon="['fas', 'caret-up']"
								size="lg"
								class="mt-1"
							/>
							<p class="mx-1">
								{{ forum.upVotes - forum.downVotes }}
							</p>
						</v-btn>

						<!-- Comment -->
					</div>

					<!-- Forum Post Date & Owner -->
					<div
						class="flex flex-col text-sm md:text-right order-last lg:order-first"
					>
						<!-- Forum Post Date -->
						<p>{{ formatDate(forum.updated_at) }}</p>
						<!-- Forum Post Owner -->
						<p>{{ forum.username }}</p>
					</div>
				</div>
			</BaseCard>
		</div>
	</transition>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import { PropType } from 'vue';

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
	upVotes: number;
	downVotes: number;
}

const props = defineProps({
	forums: {
		type: Array as PropType<Forum[]>,
		default: () => [],
	},
});

const formatDate = (date: string) => {
	const newDate = new Date(date);

	return newDate.toLocaleDateString();
};

const incrementUpVotes = (e: Event) => {
	console.log(e);
};
</script>
