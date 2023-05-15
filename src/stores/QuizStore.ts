import { AxiosError } from 'axios';
import { defineStore } from 'pinia';
import { getToken, apiClient } from './BackendAPI';

export interface PersonalQuizRecord {
	id: number;
	title: string;
	score: number;
	attempted_date: string;
	completed_time: string;
	created_at: string;
	updated_at: string;
	user_id: number;
}

// Error Interface
interface SingleError {
	message: string;
	status: number | any;
}

export const useQuizStore = defineStore('quizStore', {
	state: () => ({
		timer: 0,
		timeTaken: '',
		chosenAnswers: <any>[],
		correctAnswers: <any>[],
		numberOfCorrectAnswers: 0,
		courseSelected: '',
		personalQuizRecords: [] as PersonalQuizRecord[],
		quizError: <SingleError>{} || <any>{},
	}),
	getters: {
		allChosenAnswers: (state) => state.chosenAnswers,
		allCorrectAnswers: (state) => state.correctAnswers,
		userCorrectAnswers: (state) => state.numberOfCorrectAnswers,
		durationTaken: (state) => state.timeTaken,
		allPersonalQuizRecords: (state) => state.personalQuizRecords,
		course: (state) => state.courseSelected,
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
		// Get all quiz attempt records of the selected course
		async getAllPersonalQuizRecords(quizIndex: number, userId: number) {
			await getToken();

			// const user = ref<String[]>([]);

			const body = {
				index: quizIndex ?? 0,
				title: this.courseSelected,
				user: userId,
			};

			const response = await apiClient
				.post(`api/quizzes/get/${quizIndex ?? 0}`, body)
				.then((res) => {
					// user.value = res.data.users;
					return res.data;
				})
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					const errorMessage: SingleError | any = {
						message: (error?.response?.data as any).message,
						status: error?.response?.status,
					};
					this.quizError = errorMessage;
				});

			const newPersonalQuizRecord = response?.data?.map(
				(personalQuizRecord: PersonalQuizRecord) => {
					// The PersonalQuizRecord is from the interface PersonalQuizRecord defined above
					return {
						...personalQuizRecord,
					};
				},
			);

			//  This quizRecords relate to state and getters
			this.personalQuizRecords = newPersonalQuizRecord;
			Object.keys(this.quizError).length !== 0
				? (this.personalQuizRecords = newPersonalQuizRecord)
				: [];
		},

		async getSpecificScore(path: string) {
			await getToken();

			const body = {
				score_id: path,
			};
			console.log(path);

			const response = await apiClient
				.post(`/api/score/${path ?? 0}`, body)
				.then((res) => {
					console.log(res.data);
					return res.data;
				})
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					const errorMessage: SingleError | any = {
						message: (error?.response?.data as any).message,
						status: error?.response?.status,
					};
					this.quizError = errorMessage;
				});

			const newPersonalQuizRecord = response?.data?.map(
				(personalQuizRecord: PersonalQuizRecord) => {
					return {
						...personalQuizRecord,
					};
				},
			);

			this.personalQuizRecords = newPersonalQuizRecord;
			Object.keys(this.quizError).length !== 0
				? (this.personalQuizRecords = newPersonalQuizRecord)
				: [];
		},
	},
});
