<template>
	<h2 class="mt-5 text-brand text-lg font-semibold py-2">
		Personal Scoreboard
	</h2>
	<table class="min-w-full divide-y divide-gray-200">
		<thead>
			<tr class="bg-gray-50">
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
				<th
					scope="col"
					class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
				>
					QR Code
				</th>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			<!-- personalQuizzes comes from the const prop variable-->
			<tr v-for="personalQuiz in personalQuizzes" :key="personalQuiz.id">
				<td class="px-6 py-4 whitespace-nowrap">
					<div class="text-sm text-gray-900">{{ personalQuiz.score }}</div>
				</td>
				<td class="px-6 py-4 whitespace-nowrap">
					<div class="text-sm text-gray-900">
						{{ personalQuiz.attempted_date }}
					</div>
				</td>
				<td class="px-6 py-4 whitespace-nowrap">
					<div class="text-sm text-gray-900">
						{{
							new Date(
								new Date(personalQuiz.completed_time).getTime() -
									new Date(personalQuiz.attempted_date).getTime()
							)
								.toISOString()
								.substr(11, 8)
						}}
					</div>
				</td>
				<td class="px-6 py-4 whitespace-nowrap">
					<router-link
						:to="`/course/${personalQuiz.title}/score/${personalQuiz.id}`"
						><v-btn color="primary" text> QR </v-btn></router-link
					>
				</td>
			</tr>
			<!-- Repeat for each personal quiz record -->
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { computed, watch, ref, PropType } from 'vue';
import { useUserStore } from 'stores/UserStore';
import { useQuizStore, PersonalQuizRecord } from 'stores/QuizStore';

const props = defineProps({
	personalQuizzes: {
		type: Array as PropType<PersonalQuizRecord[]>,
		default: () => [],
	},
});
</script>
