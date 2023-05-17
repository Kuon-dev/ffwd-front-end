<template>
	<BaseCard title="FeedBacks">
		<v-table
			class="border border-gray-300 max-h-[40rem]"
			fixed-header
			height="500px"
		>
			<thead>
				<tr>
					<th class="text-left">Name</th>
					<th class="text-left">Quiz Title</th>
					<th class="text-left">Feedback</th>
				</tr>
			</thead>
			<tbody v-if="feedbackStore.load">
				<tr v-for="feedback in feedbacks" :key="feedback.id">
					<td>{{ feedback.userName }}</td>
					<td>{{ capitalize(feedback.quizTitle) }}</td>
					<td>{{ feedback.message }}</td>
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
	</BaseCard>
</template>

<script setup lang="ts">
import { useFeedbackStore, Feedback } from 'stores/FeedbackStore';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { onMounted, ref } from 'vue';
import BaseCard from 'base-components/BaseCard.vue';

// Define data properties for the component
const feedbackStore = useFeedbackStore();

const feedbacks = ref<Feedback[]>([]);

const capitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

onMounted(async () => {
	feedbacks.value = (await feedbackStore.getAllFeedback()) ?? [
		'An error has occured',
	];
});
</script>

<style scoped></style>
