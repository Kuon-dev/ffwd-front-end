<template>
	<div
		class="h-full top-0 lg:flex lg:justify-center bg-cover bg-gray-100 flex-col"
	>
		<!-- Hot Today Section -->
		<div class="flex flex-row">
			<section class="px-5 mb-5 lg:mb-0 lg:w-2/6 order-last lg:order-first">
				<h3 class="font-semibold text-2xl">Hot Today</h3>
				<!-- Carousel Section -->
			</section>

			<!-- QnA Discussions Section -->
			<section class="px-5 lg:w-4/6 order-first lg:order-last">
				<BaseCard>
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
						<router-link to="/forum/create">
							<v-btn color="#7e81ee" class="text-white"> Ask a Question </v-btn>
						</router-link>
					</div>
				</BaseCard>

				<!-- Forum Sections -->
				<transition
					enter-active-class="animate__animated animate__slideInRight animate__fast"
					leave-active-class="animate__animated animate__slideOutRight animate__fast"
				>
					<div v-if="!forumStore.errorList">
						<ForumCard :forums="forums" v-if="forums" />
					</div>
					<BaseCard v-else class="mt-4">
						<div class="text-red-500">
							{{ forumStore.errorList }}
						</div>
					</BaseCard>
					<!-- Pagination -->
				</transition>
			</section>
		</div>
		<v-pagination
			v-model="currentPage"
			:length="totalPage"
			:total-visible="5"
			@click="changePage(currentPage)"
		></v-pagination>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseCard from 'base-components/BaseCard.vue';
import SearchBarVue from 'base-components/BaseSearchBar.vue';
import FilterDropDownVue from 'base-components/BaseDropDown.vue';
import FormCarouselSectionVue from 'forum-components/ForumCarouselSection.vue';
import ForumCard from 'forum-components/ForumCard.vue';
import { useForumStore } from 'stores/ForumStore';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';

// Define data properties for the component
const forumStore = useForumStore();

// Define forum data
const forums = ref((await forumStore.getAllForums(0)) ?? []);
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

const changePage = async (index: number) => {
	forums.value = [];
	forums.value = await forumStore.getAllForums(index - 1);
};
</script>

<style lang="css" scoped></style>
