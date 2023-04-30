<template>
	<div class="flex flex-col gap-5">
		<BaseCard class="flex justify-evenly" v-if="submittedQuiz">
			<div class="score flex flex-col gap-3 text-center">
				<h2 class="text-xl">{{ score.toFixed() }} %</h2>
				<h3>Score</h3>
			</div>
			<div class="points flex flex-col gap-3 text-center">
				<h2 class="text-xl">
					{{ numberOfCorrectAnswers }} / {{ numberOfQuestions }}
				</h2>
				<h3>Points</h3>
			</div>
			<div class="time flex flex-col gap-3 text-center">
				<h2 class="text-xl">{{ formattedTime }}</h2>
				<h3>Time Used</h3>
			</div>
		</BaseCard>
		<BaseCard
			class="fixed text-center w-40 top-28 right-20 z-50"
			v-if="!submittedQuiz"
		>
			<p>Timer: {{ formattedTime }}</p>
		</BaseCard>
		<BaseCard v-for="(quiz, index) in selectedCourse" :key="quiz">
			<h3 class="text-xl mb-5">{{ `${index + 1}. ${quiz.questionText}` }}</h3>
			<div v-for="option in quiz.options" :key="option" class="flex gap-5 mb-3">
				<input
					type="radio"
					:name="quiz.questionText"
					:id="option.label"
					:value="option.label"
				/>
				<label :for="option.label">
					{{ `${option.label}. ${option.optionText}` }}
				</label>
			</div>
		</BaseCard>
	</div>

	<v-btn
		color="#7E81FF"
		class="my-5 text-white text-center"
		@click="submitQuiz"
	>
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
const submittedQuiz = ref(false);
const numberOfQuestions = ref(0);
const numberOfCorrectAnswers = ref(quizStore.correctAnswers);
const score = ref(0);

const path = computed(() => {
	return router.currentRoute.value as any;
});

// import quiz data based url language
const dynamicImport = () => {
	import('course-components/CourseQuiz').then(
		(module: { [key: string]: any }) => {
			selectedCourse.value = module[path.value.params.lang as any];
			numberOfQuestions.value = selectedCourse.value.length;
		},
	);
};

const submitQuiz = () => {
	// stop timer
	quizStore.stopTimer(intervalId);
	// get time and send post request to db
	quizStore.setTimeTaken(formattedTime.value);

	document.querySelectorAll('input[type="radio"]:checked').forEach((answer) => {
		quizStore.getChosenAnswers(answer.value);
	});

	score.value = calculateScore(
		numberOfCorrectAnswers.value,
		numberOfQuestions.value,
	);

	submittedQuiz.value = true;

	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

const calculateScore = (correct: number, total: number) => {
	return (correct / total) * 100;
};

const intervalId = setInterval(() => {
	const elapsed = quizStore.timer ? Date.now() - quizStore.timer : 0;
	const minutes = Math.floor(elapsed / 60000);
	const seconds = Math.floor((elapsed % 60000) / 1000);
	formattedTime.value = `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
}, 1000);

onMounted(() => {
	dynamicImport();
	intervalId;

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
