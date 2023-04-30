<template>
	<div class="flex flex-col gap-5">
		<BaseCard class="fixed text-center w-40 top-28 right-20 z-50">
			<p>Timer: {{ formattedTime }}</p>
		</BaseCard>
		<BaseCard v-for="(quiz, index) in selectedCourse" :key="quiz">
			<h3 class="text-xl mb-5">{{ `${index + 1}. ${quiz.questionText}` }}</h3>
			<div v-for="option in quiz.options" :key="option" class="flex gap-5 mb-3">
				<input
					type="radio"
					:name="quiz.questionText"
					:id="option.optionText"
					:value="option.optionText"
				/>
				<label :for="option.optionText">
					{{ `${option.label}. ${option.optionText}` }}
				</label>
			</div>
		</BaseCard>
	</div>

	<v-btn color="#7E81FF" class="my-5 text-white text-center" @click="stopTimer">
		Submit
	</v-btn>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useQuizStore } from 'stores/QuizStore';
import BaseCard from 'base-components/BaseCard.vue';

const quizStore = useQuizStore();
const router = useRouter();
const selectedCourse = ref(null);
const formattedTime = ref('00:00');

const path = computed(() => {
	return router.currentRoute.value as any;
});

// import quiz data based url language
const dynamicImport = () => {
	import('course-components/CourseQuiz').then(
		(module: { [key: string]: any }) => {
			selectedCourse.value = module[path.value.params.lang as any];
			console.log(selectedCourse.value);
		},
	);
};

const stopTimer = () => quizStore.stopTimer();

onMounted(() => {
	dynamicImport();

	const intervalId = setInterval(() => {
		const elapsed = quizStore.timer ? Date.now() - quizStore.timer : 0;
		const minutes = Math.floor(elapsed / 60000);
		const seconds = Math.floor((elapsed % 60000) / 1000);
		formattedTime.value = `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`;
	}, 1000);

	onUnmounted(() => {
		clearInterval(intervalId);
	});

	quizStore.startTimer();
});

// on watch url changes
watch(path, () => {
	dynamicImport();
});
</script>

<style lang="scss" scoped></style>
