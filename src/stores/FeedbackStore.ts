import { defineStore } from 'pinia';
import { getToken, ajaxClient, AjaxResponse } from './BackendAPI';

interface FeedbackData {
	feedbacks: FetchedFeedback[];
	quizs: string[];
	users: string[];
}

// feedback interface
interface FetchedFeedback {
	id: number;
	user_id: number;
	quiz_id: number;
	message: string;
	rating: number;
	created_at: string;
	updated_at: string;
}

// feedback interface
export interface Feedback {
	id: number;
	userID: number;
	quizID: number;
	message: string;
	rating: number;
	userName: string;
	quizTitle: string;
	created_at: string;
	updated_at: string;
}

// Error Interface
interface SingleError {
	message: string;
	status: number | any;
}

export const useFeedbackStore = defineStore('feedbackStore', {
	state: () => ({
		Loaded: false,
		feedbacksData: <FeedbackData>{},
		data: [],
		feedbacks: [] as Feedback[],
		feedbackError: <SingleError | any>{} || <any>{},
	}),
	getters: {
		load: (state) => state.Loaded,
		errorList: (state) => state.feedbackError,
	},
	actions: {
		async getAllFeedback() {
			await getToken();

			const data: FeedbackData | void = await ajaxClient(
				'api/admin/feedback', // eslint-disable-next-line comma-dangle
				'GET'
			)
				.then((res) => res.data as FeedbackData)
				.catch((err: Error) => {
					console.log(err);
					this.feedbackError = err;
				});

			this.Loaded = true;

			data?.feedbacks?.forEach((feedback: FetchedFeedback, index: number) => {
				const tempFeedback: Feedback = {
					id: feedback.id,
					userID: feedback.user_id,
					quizID: feedback.quiz_id,
					message: feedback.message,
					rating: feedback.rating,
					userName: data.users[index],
					quizTitle: data.quizs[index],
					created_at: feedback.created_at,
					updated_at: feedback.updated_at,
				};

				this.feedbacks.push(tempFeedback);
			});

			return this.feedbacks;
		},
	},
});
