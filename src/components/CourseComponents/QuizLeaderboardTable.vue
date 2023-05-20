<template>
	<h2 class="text-brand text-lg font-semibold py-2">Global Leaderboard</h2>
	<!-- overflow-x-auto to enable horizontal scroll if not enough space -->
	<div class="overflow-x-auto">
		<table class="mt-5 min-w-full divide-y divide-gray-200 overflow-x-auto">
			<thead>
				<tr class="bg-gray-50">
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Username
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Score
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Date of Attempt
					</th>
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
					>
						Time Taken
					</th>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-gray-200">
				<!-- <tr v-for="(quiz, index) in quizzes" :key="quiz.id"> -->
				<tr v-for="quizRecord in topQuizRecords" :key="quizRecord.id">
					<td class="px-6 py-4 whitespace-nowrap">
						<div class="text-sm text-gray-900">{{ quizRecord.username }}</div>
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<div class="text-sm text-gray-900">{{ quizRecord.score }}</div>
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<div class="text-sm text-gray-900">
							{{ quizRecord.attempted_date }}
						</div>
					</td>
					<td class="px-6 py-4 whitespace-nowrap">
						<div class="text-sm text-gray-900">
							{{
								new Date(
									new Date(quizRecord.completed_time).getTime() -
										new Date(quizRecord.attempted_date).getTime()
								)
									.toISOString()
									.substr(11, 8)
							}}
						</div>
					</td>
				</tr>
				<!-- Repeat for each quiz record (Top 10) -->
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { computed, watch, ref, PropType } from 'vue';
import { useQuizStore, TopQuizRecord } from 'stores/QuizStore';

const props = defineProps({
	topQuizRecords: {
		type: Array as PropType<TopQuizRecord[]>,
		default: () => [],
	},
});
</script>
