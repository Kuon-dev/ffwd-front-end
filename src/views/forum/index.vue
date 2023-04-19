<template>
	<div
		class="h-full top-0 lg:flex lg:justify-center pt-20 bg-cover bg-gray-100"
	>
		<!-- bg-cover top-0 h-full flex flex-col -->
		<!-- Hot Today Section -->
		<section class="px-5 mb-5 lg:mb-0 lg:w-2/6 order-last lg:order-first">
			<h3 class="font-semibold text-2xl">Hot Today</h3>
			<!-- Carousel Section -->
		</section>

		<!-- QnA Discussions Section -->
		<section class="px-5 lg:w-4/6 order-first lg:order-last">
			<h3 class="font-semibold">Q&A Discussions</h3>
			<!-- Search Section -->
			<div class="search-section flex justify-between gap-5 my-4">
				<SearchBarVue
					:searchBarId="searchBarId"
					@search="performSearch"
				></SearchBarVue>
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
				<BaseCardVue
					v-for="forum in forums"
					:key="forum.id"
					:title="forum.title"
				>
					<!-- Forum Body -->
					<p class="p-1 mb-5 hidden md:block">
						{{ forum.body }}
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
								@click="incrementUpVotes"
							>
								<font-awesome-icon :icon="['fas', 'caret-up']" size="xl" />
								<p class="upvoteCount">{{ forum.upVotes }} UpVotes</p>
							</button>

							<!-- Comment -->
							<button class="commentContainer likeButton">
								<font-awesome-icon :icon="['fas', 'message']" />
								<p class="commentCount">{{ forum.comments }} Comments</p>
							</button>
						</div>

						<!-- Forum Post Date & Owner -->
						<div class="flex md:justify-between gap-5 w-[10rem]">
							<div
								class="flex flex-col text-sm md:text-right order-last lg:order-first"
							>
								<!-- Forum Post Date -->
								<p>{{ forum.postDate }}</p>
								<!-- Forum Post Owner -->
								<p>{{ forum.postOwner }}</p>
							</div>
							<!-- Forum Post Owner Profile Picture -->
							<div
								class="border-2 border-black w-10 h-10 rounded-full flex justify-center items-center"
							>
								<font-awesome-icon :icon="['fas', 'user']" size="xl" />
							</div>
						</div>
					</div>
				</BaseCardVue>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SearchBarVue from 'base-components/BaseSearchBar.vue';
import FilterDropDownVue from 'base-components/BaseDropDown.vue';
import BaseCardVue from 'base-components/BaseCard.vue';

// Define props for the component
const props = defineProps({});

// Define emits for the component
const emits = defineEmits([]);

// Define data properties for the component
const searchBarId = 'qnaSearchBar';
const filterOptions = [
	{ value: 'Trending', label: 'Trending' },
	{ value: 'Name', label: 'Name' },
	{ value: 'Rating', label: 'Rating' },
];

// Define forum data as an array
const forums = ref([
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet.',
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestias distinctio earum nam asperiores ipsam corrupti cum? Debitis, quidem repellat...',
		upVotes: 123,
		comments: 12,
		postDate: '4 April 2023',
		postOwner: 'Ali Mohammad',
	},
	{
		id: 2,
		title: 'World Is Happppyyyyyy',
		body: 'Happy happy happy happy',
		upVotes: 4,
		comments: 100,
		postDate: '9 April 2023',
		postOwner: 'Minions',
	},
	{
		id: 3,
		title: 'Obama VS Najib',
		body: 'Nuke VS Cash kachingg KABOOOOOOOOMM ROUND 2 FIGHT BAM BAM BAM KACHING KACHING',
		upVotes: 400,
		comments: 600,
		postDate: '11 April 2023',
		postOwner: 'Donald Trump',
	},
]);

// Define methods for the component
function performSearch(query: string) {
	console.log('Performing search with query:', query);
}

// Expose properties, props, emits, and methods to be used in template
defineExpose({
	searchBarId,
	performSearch,
});
</script>

<style lang="css" scoped></style>
