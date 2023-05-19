import { AxiosError } from 'axios';
import { defineStore } from 'pinia';
import { getToken, apiClient } from './BackendAPI';
import { ref } from 'vue';

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

export interface TopQuizRecord {
	id: number;
	title: string;
	score: number;
	attempted_date: string;
	completed_time: string;
	created_at: string;
	updated_at: string;
	user_id: number;
	username: string;
}

interface QuizforSubmit {
	title: string;
	user_id: number;
	score: number;
	attempted_date: string;
	completed_time: string;
	created_at: string;
	updated_at: string;
}

// Error Interface
interface SingleError {
	message: string;
	status: number | any;
}

export const useQuizStore = defineStore('quizStore', {
	state: () => ({
		startTime: '',
		endTime: '',
		chosenAnswers: <any>[],
		correctAnswers: <any>[],
		numberOfCorrectAnswers: 0,
		courseSelected: '',
		timeTaken: <any>{},
		personalQuizRecords: [] as PersonalQuizRecord[],
		topQuizRecords: [] as TopQuizRecord[],
		quizRecordSelected: <PersonalQuizRecord>{},
		quizError: <SingleError>{} || <any>{},
	}),
	getters: {
		getStartTime: (state) => state.startTime,
		getEndTime: (state) => state.endTime,
		allChosenAnswers: (state) => state.chosenAnswers,
		allCorrectAnswers: (state) => state.correctAnswers,
		userCorrectAnswers: (state) => state.numberOfCorrectAnswers,
		allPersonalQuizRecords: (state) => state.personalQuizRecords,
		allTopQuizRecords: (state) => state.topQuizRecords,
		course: (state) => state.courseSelected,
		quizRecord: (state) => state.quizRecordSelected,
		errorList: (state) => state.quizError,
	},
	actions: {
		dateFormatter(date: string) {
			const d = new Date(date);

			const isoString = d.toISOString();

			const formattedDate = isoString.slice(0, 10);
			const formattedTime = isoString.slice(11, 19);

			return `${formattedDate} ${formattedTime}`;
		},
		// Start the timer
		startTimer() {
			this.startTime = new Date().toString();
		},
		// Stop the timer
		stopTimer(intervalId: any) {
			this.endTime = new Date().toString();

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
		// Clear all correct answers
		clearCorrectAnswers() {
			this.correctAnswers = [];
		},
		// Set time taken to complete quiz
		setTimeTaken(time: any) {
			this.timeTaken = time;
		},
		// Set correct answers of the quiz
		setCorrectAnswers(answer: string) {
			this.correctAnswers.push(answer);
		},
		// update user number of correct answer
		updateNumberofCorrectAnswer(count: number) {
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
					return [];
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
			return Object.keys(this.quizError).length !== 0
				? (this.personalQuizRecords = newPersonalQuizRecord)
				: [];
		},
		async getSpecificQuizRecord(id: any) {
			await getToken();
			const res = await apiClient
				.post(`api/quizzes/get/specific/${id}`, {
					quiz_id: id,
				})
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					const errorMessage: SingleError | any = {
						message: (error?.response?.data as any).message,
						status: error?.response?.status,
					};
					this.quizError = errorMessage;
				});

			this.quizRecordSelected = res?.data.quiz;
			return res?.data.quiz;
		},
		async getSpecificScore(path: string) {
			await getToken();

			const body = {
				score_id: path,
			};

			const response = await apiClient
				.post('/api/score', body)
				.then((res) => {
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
		async submitScore(courseLang: string, userID: number) {
			await getToken();

			const resultBody: QuizforSubmit = {
				title: courseLang,
				user_id: userID,
				score: this.numberOfCorrectAnswers,
				attempted_date: this.dateFormatter(this.startTime),
				completed_time: this.dateFormatter(this.endTime),
				created_at: '',
				updated_at: '',
			};

			const res = await apiClient
				.post('api/quiz/create', resultBody)
				.catch((err: AxiosError) => {
					const error = err as AxiosError;
					const errorMessage: SingleError | any = {
						message: (error?.response?.data as any).message,
						status: error?.response?.status,
					};
					this.quizError = errorMessage;
				});

			return res;
		},
		// Get top 10 quiz attempt records of the selected course based on score and time taken
		async getAllTopQuizRecords(quizIndex: number) {
			await getToken();

			const user = ref<String[]>([]);

			const body = {
				index: quizIndex ?? 0,
				title: this.courseSelected,
			};

			const response = await apiClient
				.post('/api/quizzes/get-top', body)
				.then((res) => {
					user.value = res.data.users;
					return res.data;
				})
				.catch((err: Error | AxiosError) => {
					const error = err as AxiosError;
					const errorMessage: SingleError | any = {
						message: (error?.response?.data as any).message,
						status: error?.response?.status,
					};
					this.quizError = errorMessage;
					// return [];
				});

			const newTopQuizRecord = response?.data?.map(
				(topQuizRecord: TopQuizRecord, index: number) => {
					return {
						...topQuizRecord,
						username: user.value[index],
					};
				},
			);

			this.topQuizRecords = newTopQuizRecord;
			return Object.keys(this.quizError).length !== 0
				? (this.topQuizRecords = newTopQuizRecord)
				: [];
		},
	},
});
