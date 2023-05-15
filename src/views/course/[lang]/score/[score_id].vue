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
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			<!-- personalQuizzes comes from the const prop variable-->
			<!-- <tr> -->
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
						{{ personalQuiz.completed_time }}
					</div>
				</td>
			</tr>
			<!-- Repeat for each personal quiz record -->
		</tbody>
	</table>
	<img :src="image" />
</template>

<script setup lang="ts">
import { onMounted, computed, ref, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'stores/UserStore';
import { useQuizStore, PersonalQuizRecord } from 'stores/QuizStore';
import QRCode from 'qrcode';

const props = defineProps({
	personalQuizzes: {
		type: Array as PropType<PersonalQuizRecord[]>,
		default: () => [],
	},
});

// With async/await
const generateQR = async (text: string) => {
	try {
		console.log(await QRCode.toDataURL(text));
	}
	catch (err) {
		console.error(err);
	}
};

const userStore = useUserStore();
const quizStore = useQuizStore();
const router = useRouter();

const image = ref<string>('');

const path = computed(() => {
	return (router.currentRoute.value.params as any).score_id;
});

onMounted(async () => {
	await quizStore.getSpecificScore(path.value);
	// With promises
	await QRCode.toDataURL(
		`localhost:5173/${router.currentRoute.value.fullPath as any}`,
	)
		.then((url) => {
			image.value = url;
		})
		.catch((err) => {
			console.error(err);
		});
});
</script>
