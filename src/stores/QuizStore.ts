import { defineStore } from 'pinia';
import { getToken } from './BackendAPI';

export const useQuizStore = defineStore('quizStore', {
	state: () => ({
		timer: 0,
	}),
	actions: {
		// Start the timer
		startTimer() {
			this.timer = Date.now();
		},
		// Stop the timer
		stopTimer() {
			this.timer = 0;
		},
	},
});
