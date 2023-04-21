<template>
	<div
		class="h-full top-0 lg:flex lg:justify-center pt-20 bg-cover bg-gray-100"
	>
		<!-- bg-cover top-0 h-full flex flex-col -->
		<!-- Hot Today Section -->
		<section class="px-5 mb-5 lg:mb-0 lg:w-2/6 order-last lg:order-first">
			<h3 class="font-semibold text-2xl">Hot Today</h3>
			<!-- Carousel Section -->
			<FormCarouselSectionVue></FormCarouselSectionVue>
		</section>

		<!-- QnA Discussions Section -->
		<section class="px-5 lg:w-4/6 order-first lg:order-last">
			<h3 class="font-semibold">Q&A Discussions</h3>
			<!-- Search Section -->
			<div class="search-section flex justify-between gap-5 my-4">
				<SearchBarVue @search="performSearch($event)"></SearchBarVue>
			</div>

			<!-- Filter Section -->
			<div class="flex flex-col md:flex-row md:justify-between gap-5">
				<div class="filter-section">
					<FilterDropDownVue :options="filterOptions"></FilterDropDownVue>
				</div>
				<button
					class="bg-blue-400 p-3 w-[12.5rem] rounded-md hover:text-white hover:bg-blue-800"
				>
					Ask a Question
				</button>
			</div>

			<!-- Forum Sections -->
			<div class="forumContainer flex flex-col my-5 gap-5">
				<v-skeleton-loader
					v-if="!loading"
					class="mx-auto border w-full"
					type="article, button@2, text, avatar"
					:elevation="10"
				></v-skeleton-loader>

				<BaseCardVue v-for="forum in forums" :key="forum.id">
					<!-- Forum Title -->
					<h2 class="text-xl mb-5">{{ forum.title }}</h2>
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
							<button
								class="upvoteContainer likeButton"
								@click="incrementUpVotes()"
							>
								<font-awesome-icon :icon="['fas', 'caret-up']" size="xl" />
								<p class="upvoteCount">
									{{ forum.upVotes - forum.downVotes }} UpVotes
								</p>
							</button>

							<!-- Comment -->
							<button class="commentContainer likeButton">
								<font-awesome-icon :icon="['fas', 'message']" />
								<p class="commentCount">{{ forum.comments }} Comments</p>
							</button>
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
				</BaseCardVue>
			</div>
			<!-- Pagination -->
			<v-pagination
				v-model="currentPage"
				:length="totalPage"
				:total-visible="5"
				@click="changePage(currentPage)"
			></v-pagination>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchBarVue from 'base-components/BaseSearchBar.vue';
import FilterDropDownVue from 'base-components/BaseDropDown.vue';
import BaseCardVue from 'base-components/BaseCard.vue';
import FormCarouselSectionVue from 'forum-components/FormCarouselSection.vue';
import { useForumStore } from 'stores/ForumStore';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';

// Define data properties for the component
const forumStore = useForumStore();

// Define forum data
const forums = ref((await forumStore.getAllForums()) ?? []);
const loading = ref(forums.value.length > 0);
const totalPage = ref(Math.ceil((await forumStore.getPaginationCount()) / 10));
const currentPage = ref(forumStore.forumCurrentPagination);

const filterOptions = [
	{ value: 'Trending', label: 'Trending' },
	{ value: 'Name', label: 'Name' },
	{ value: 'Rating', label: 'Rating' },
];

// Define methods for the component
const performSearch = (query: Event) => {
	console.log(query);
};

const formatDate = (date: string) => {
	const newDate = new Date(date);

	return newDate.toLocaleDateString();
};

const changePage = async (index: number) => {
	forums.value = await forumStore.getAllForums(index - 1);
};
</script>

<style lang="css" scoped></style>
