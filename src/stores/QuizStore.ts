import { defineStore } from 'pinia';
import { getToken } from './BackendAPI';

export const useQuizStore = defineStore('quizStore', {
	state: () => ({
		timer: 0,
		timeTaken: '',
		chosenAnswers: <any>[],
		numberOfCorrectAnswers: 2,
	}),
	getters: {
		allAnswers: (state) => state.chosenAnswers,
		correctAnswers: (state) => state.numberOfCorrectAnswers,
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
		// Get chosen answer by user
		getChosenAnswers(answer: string) {
			this.chosenAnswers.push(answer);
		},
		// Set time taken to complete quiz
		setTimeTaken(time: string) {
			this.timeTaken = time;
		},
	},
});
