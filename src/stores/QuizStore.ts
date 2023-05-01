import { defineStore } from 'pinia';
import { getToken } from './BackendAPI';

export const useQuizStore = defineStore('quizStore', {
	state: () => ({
		timer: 0,
		timeTaken: '',
		chosenAnswers: <any>[],
		correctAnswers: <any>[],
		numberOfCorrectAnswers: 0,
	}),
	getters: {
		allChosenAnswers: (state) => state.chosenAnswers,
		allCorrectAnswers: (state) => state.correctAnswers,
		userCorrectAnswers: (state) => state.numberOfCorrectAnswers,
		durationTaken: (state) => state.timeTaken,
	},
	actions: {
		// Start the timer
		startTimer() {
			this.timer = Date.now();
		},
		// Stop the timer
		stopTimer(intervalId: any) {
			window.clearInterval(intervalId);
			// this.timer = 0;
		},
		// Get chosen answers by user
		getChosenAnswers(answer: string) {
			this.chosenAnswers.push(answer);
		},
		// Clear all chosen answers by user
		clearChosenAnswers() {
			this.chosenAnswers = [];
		},
		// Set time taken to complete quiz
		setTimeTaken(time: string) {
			this.timeTaken = time;
		},
		// Set correct answers of the quiz
		setCorrectAnswers(answer: string) {
			this.correctAnswers.push(answer);
		},
		setUserCorrectCount(count: number) {
			this.numberOfCorrectAnswers = count;
		},
	},
});
