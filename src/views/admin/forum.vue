<template>
	<BaseCard title="Forums">
		<v-table
			class="border border-gray-300 max-h-[40rem]"
			fixed-header
			height="500px"
		>
			<thead>
				<tr>
					<th class="text-left">Forum title</th>
					<th class="text-left">By user</th>
					<th class="text-left">User Rating</th>
					<th class="text-left">Action</th>
				</tr>
			</thead>
			<tbody v-if="forums.length > 0">
				<tr v-for="forum in forums" :key="forum.id">
					<td>{{ forum?.title }}</td>
					<td>{{ forum?.username }}</td>
					<td>{{ forum?.upVotes - forum?.downVotes }}</td>
					<td>
						<router-link :to="`/forum/${forum.id}`">
							<v-btn> Go to post </v-btn>
						</router-link>
					</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr v-for="items in 7" :key="items">
					<td v-for="index in 7" :key="index">
						<v-skeleton-loader type="list-item-two-line"> </v-skeleton-loader>
					</td>
				</tr>
			</tbody>
		</v-table>
		<v-pagination
			v-model="currentPage"
			:length="totalPage"
			:total-visible="5"
			@click="changePage(currentPage)"
		></v-pagination>
	</BaseCard>
</template>

<script setup lang="ts">
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { onMounted, ref } from 'vue';
import { useForumStore, Forum } from 'stores/ForumStore';
import BaseCard from 'base-components/BaseCard.vue';

const forumStore = useForumStore();
const forums = ref<Forum[]>([]);
const currentPage = ref(forumStore.forumCurrentPagination);
const totalPage = ref(0);

const changePage = async (index: number) => {
	forums.value = [];
	forums.value = await forumStore.getAllForums(index - 1);
};

// Define data properties for the component
onMounted(async () => {
	forums.value = (await forumStore.getAllForums(0)) ?? ['An error has occured'];
	totalPage.value = Math.ceil((await forumStore.getPaginationCount()) / 10);
	console.log(forums.value);
});
</script>

<style scoped></style>
