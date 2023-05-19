<template>
	<BaseCard>
		<div class="px-4 sm:px-0">
			<h3 class="text-base font-semibold leading-7 text-gray-900">
				Quiz History
			</h3>
			<p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
				Here are the details of one of your quiz attempts.
			</p>
		</div>
		<div
			class="mt-6 border-t border-gray-100"
			v-if="Object.keys(quizStore.errorList).length === 0"
		>
			<dl class="divide-y divide-gray-100">
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">Score</dt>
					<dd
						class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
					>
						{{ quizStore.quizRecord.score }}
					</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">
						Date and Time of Attempt
					</dt>
					<dd
						class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
					>
						{{ quizStore.quizRecord.attempted_date }}
					</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">
						Date and Time Completed
					</dt>
					<dd
						class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
					>
						{{ quizStore.quizRecord.completed_time }}
					</dd>
				</div>
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">
						Time Taken
					</dt>
					<dd
						class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
					>
						{{ formattedTime }}
					</dd>
				</div>
				<!-- QR Code -->
				<div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
					<dt class="text-sm font-medium leading-6 text-gray-900">QR Code</dt>
					<dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
						<img :src="image" />
					</dd>
				</div>
			</dl>
		</div>
	</BaseCard>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
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

const userStore = useUserStore();
const quizStore = useQuizStore();
const router = useRouter();

// Get the details of the selected quiz attempt record
const currentQuizData = ref([]);
// score_id is the id of the quiz record selected
const fetchQuizContent = async () => {
	currentQuizData.value = await quizStore.getSpecificQuizRecord(
		(router.currentRoute.value.params as any).score_id,
	);
};
await fetchQuizContent();

// Calculate time taken to complete the quiz
const millisecondsTaken =
	new Date(quizStore.quizRecord?.completed_time)?.getTime() -
	new Date(quizStore.quizRecord?.attempted_date)?.getTime();
const seconds = Math.floor(millisecondsTaken / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
let formattedTime = '';
if (hours > 0) {
	formattedTime += `${hours} hour${hours > 1 ? 's' : ''} `;
}
if (minutes > 0) {
	formattedTime += `${minutes % 60} minute${minutes > 1 ? 's' : ''} `;
}
formattedTime += `${seconds % 60} second${seconds > 1 ? 's' : ''}`;

const image = ref<string>('');

const path = computed(() => {
	return (router.currentRoute.value.params as any).score_id;
});

onMounted(async () => {
	await quizStore.getSpecificScore(path.value);
	// With promises
	await QRCode.toDataURL(
		`localhost:5173${router.currentRoute.value.fullPath as any}`,
	)
		.then((url) => {
			image.value = url;
		})
		.catch((err) => {
			console.error(err);
		});
});
</script>
