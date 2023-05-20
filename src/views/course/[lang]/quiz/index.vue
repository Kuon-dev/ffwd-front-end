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
			class="fixed text-center w-40 top-32 right-5 md:right-20 z-50"
			v-if="!submittedQuiz"
		>
			<p>Timer: {{ formattedTime }}</p>
		</BaseCard>
		<BaseCard
			v-for="(quiz, index) in selectedCourse"
			:key="quiz.questionText"
			:class="`question-${index + 1}`"
		>
			<div class="result w-full text-lg mb-3"></div>
			<h3 class="text-xl mb-5">{{ `${index + 1}. ${quiz.questionText}` }}</h3>
			<div
				v-for="option in quiz.options"
				:key="option.label"
				class="flex gap-5 mb-3"
			>
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

		<!-- Comment Related Alerts Field -->
		<BaseAlert
			v-if="showAlert"
			:type="showAlertType"
			:title="showAlertTitle"
			:text="showAlertText"
		/>
	</div>

	<v-btn
		color="#7E81FF"
		class="my-5 text-white text-center"
		v-if="!submittedQuiz"
		@click="submitQuiz"
	>
		Submit
	</v-btn>
	<v-btn
		color="#7E81FF"
		class="my-5 text-white text-center"
		v-else
		@click="pageBack"
	>
		Back
	</v-btn>
</template>

<script setup lang="ts">
import $ from 'jquery';
import { useRouter } from 'vue-router';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useQuizStore } from 'stores/QuizStore';
import { useUserStore } from 'stores/UserStore';
import { Question, Option } from 'course-components/CourseQuiz';
import BaseCard from 'base-components/BaseCard.vue';
import BaseAlert from 'base-components/BaseAlert.vue';

const userStore = useUserStore();
const quizStore = useQuizStore();
const router = useRouter();

const selectedCourse = ref<Question[]>([]);
const formattedTime = ref('00:00');
const submittedQuiz = ref(false);
const numberOfQuestions = ref(0);
const numberOfCorrectAnswers = ref(quizStore.userCorrectAnswers);
const score = ref(0);

const showAlert = ref<Boolean>(false);
const showAlertTitle = ref<string>('');
const showAlertText = ref<string>('');
const showAlertType = ref<'error' | 'success' | 'warning' | 'info'>('error');
const renderAlert = (
	type: 'error' | 'success' | 'warning' | 'info',
	title: string,
	text: string,
) => {
	showAlertType.value = type ?? 'error';
	showAlertTitle.value = title;
	showAlertText.value = text;
	showAlert.value = true;
	setTimeout(() => {
		showAlert.value = false;
	}, 8000);
};

const path = computed(() => {
	return router.currentRoute.value as any;
});

// import quiz data based url language
const dynamicImport = () => {
	import('course-components/CourseQuiz').then(
		(module: { [key: string]: any }) => {
			selectedCourse.value = module[path.value.params.lang as any];

			selectedCourse.value.forEach((answer: any) => {
				quizStore.setCorrectAnswers(answer.correctAnswer);
			});

			numberOfQuestions.value = selectedCourse.value.length;
		},
	);
};

// submit quiz handler
const submitQuiz = () => {
	// get all selected answers
	$.each($('input[type="radio"]:checked'), (index: number, answer: Element) => {
		quizStore.getChosenAnswers((answer as HTMLInputElement).value);
	});

	// check all question has answers
	if (quizStore.allChosenAnswers.length !== numberOfQuestions.value) {
		quizStore.clearChosenAnswers();

		scrollToTop();

		renderAlert(
			'error',
			'Empty Field!',
			'Please do not leave any field empty!',
		);
		return;
	}

	// disable all selected answers
	$('input[type="radio"]:checked').prop('disabled', true);

	// stop timer
	quizStore.stopTimer(intervalId);

	// get time and send post request to db
	quizStore.setTimeTaken(formattedTime.value);

	// check whether answers are correct
	for (let index = 0; index < numberOfQuestions.value; index++) {
		if (
			quizStore.allCorrectAnswers[index] === quizStore.allChosenAnswers[index]
		) {
			// eslint-disable-next-line no-undef
			const result: JQuery<HTMLElement> = $(`.question-${index + 1} .result`);

			result.html('Correct !');
			result.css('color', 'green');
			numberOfCorrectAnswers.value++;
		}
		else {
			// eslint-disable-next-line no-undef
			const result: JQuery<HTMLElement> = $(`.question-${index + 1} .result`);

			const wrongResult = `Wrong ! Answer: ${quizStore.correctAnswers[index]}`;

			result.html(wrongResult);
			result.css('color', 'red');
		}
	}

	// calculate scoring
	score.value = calculateScore(
		numberOfCorrectAnswers.value,
		numberOfQuestions.value,
	);
	quizStore.updateNumberofCorrectAnswer(numberOfCorrectAnswers.value);

	submittedQuiz.value = true;

	// submit user score & time to bd
	const pathnameParts = window.location.pathname.split('/');
	const courseName = pathnameParts[2];
	quizStore.submitScore(courseName, userStore.user?.id);

	// scroll user to top of page
	scrollToTop();
};

const calculateScore = (correct: number, total: number) => {
	return (correct / total) * 100;
};

function formatTimetoMMSS(seconds: number): string {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;
	const formattedMinutes = minutes.toString().padStart(2, '0');
	const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
	return `${formattedMinutes}:${formattedSeconds}`;
}

const intervalId = setInterval(() => {
	const startingTime: number = new Date(quizStore.startTime).getTime();
	const currentTime: number = new Date().getTime();

	const elapsed: number = Math.floor((currentTime - startingTime) / 1000);

	formattedTime.value = formatTimetoMMSS(elapsed);
}, 1000);

const scrollToTop = () => {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
};

const pageBack = () => {
	history.back();
};

onMounted(() => {
	dynamicImport();
	quizStore.startTimer();
	intervalId;

	onUnmounted(() => {
		clearInterval(intervalId);
	});
});

// on watch url changes
watch(path, () => {
	quizStore.clearChosenAnswers();
	quizStore.clearCorrectAnswers();
	dynamicImport();
});
</script>

<style lang="scss" scoped></style>
