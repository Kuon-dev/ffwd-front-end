<template>
	<!--The Whole Page-->
	<div class="h-full w-full bg-[url('/public/img1.png')] bg-cover p-1">
		<div
			class="bg-white flex justify-center border rounded-lg p-9 xl:w-3/5 md:w-5/6 sm:w-6/7 xl:mx-72 md:mx-16 sm:mx-2 grid grid-cols-1 my-15"
		>
			<h1 class="relative text-3xl font-bold text-center">
				Quiz Feedback Page
			</h1>
			<div class="mt-1 mb-5 text-center">
				Thank you for taking the time to provide feedback. We appreciate hearing
				from you and will review your comments carefully.
			</div>
			<hr />

			<main>
				<section class="mx-1 my-7">
					<!-- Star Rating -->
					<div
						class="place-content-start flex text-xl font-semibold leading-10"
					>
						<div>How many stars would you give this quiz?</div>
					</div>

					<div class="" data-te-input-wrapper-init>
						<button v-for="i in 5" :key="i" @click="selectRating(i)">
							<font-awesome-icon
								:icon="['fas', 'star']"
								size="2xl"
								:style="color(i)"
							/>
						</button>
					</div>

					<!-- <span
						class="text-error text-sm"
						v-for="(error, index) in store.errorList.rating"
						:key="index"
					>
						{{ error }}
					</span> -->
				</section>

				<section class="mx-1 mb-5">
					<!-- Feedback Question -->
					<div
						class="place-content-start flex text-xl font-semibold leading-10"
					>
						<div>Tell us your thoughts about the quiz. We love feedback!</div>
					</div>

					<!-- Leave Feedback Message Field -->
					<!-- <div class="relative my-3 mx-1" data-te-input-wrapper-init>
						<BaseEditor
							class="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
							id="feedback"
							rows="3"
							placeholder="Leave a comment"
							@text-value="getTextValue($event)"
						/>
						<label
							for="exampleFormControlTextarea1"
							class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
							>	</label
						>
					</div> -->

					<div class="relative my-3 mx-1 feedback" data-te-input-wrapper-init>
						<v-textarea
							class="feedback"
							bg-color="#fffafa"
							label=""
							@input="getTextValue"
						></v-textarea>
					</div>
				</section>

				<div
					class="mx-1 flex items-center justify-center col-span-6 sm:flex sm:items-center sm:gap-4"
				>
					<button
						class="inline-block shrink-0 rounded-sm border border-brand bg-brand px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
						@click.stop="submitFeedback($event)"
					>
						Submit
					</button>
				</div>

				<!-- <form
					@submit.prevent="submitForm"
				>
					<BaseInput
						v-model="formData.username"
						label="Username"
					/>
				</form> -->
			</main>
		</div>
	</div>
</template>

<script setup lang="ts">
import Card from 'course-components/CourseDescCard.vue';
import List from 'course-components/CourseList.vue';
import BaseEditor from 'base-components/BaseEditor.vue';
import { ref } from 'vue';
import { useUserStore } from 'stores/UserStore';
import { getToken, apiClient } from 'stores/BackendAPI';
import { AxiosError } from 'axios';

interface FeedbackDetails {
	rating: Number;
	feedback: String;
}

const store = useUserStore();
const feedback = ref<String>('');
const errorMessage = ref('');

const stars = ref(0);
const user = store.getUser();

const color = (index: number) => {
	return {
		color: `${stars.value >= index ? '#FFDF00' : '#8d99a3'}`,
	};
};

const selectRating = (index: number) => {
	stars.value = index;
	// console.log(index);
};

// const getTextValue = (feedback: Event) => {
// 	console.log(feedback);
// };
const getTextValue = (event: Event) => {
	feedback.value = (event.target as HTMLTextAreaElement).value;
	// console.log(feedback);
};

const submitFeedback = async (e: Event) => {
	e.preventDefault();
	if (stars.value == 0) {
		errorMessage.value = 'Please select a star rating';
		return;
	}

	const body = {
		rating: stars.value,
		feedback: feedback.value,
		user: store.user.id,
	};
	await getToken();
	const res = await apiClient
		.post('/api/feeback/create', body)
		.catch((err: Error | AxiosError) => {
			const error = err as AxiosError;
			// this.authErrors = (error?.response?.data as any).errors;
			console.log(error);
			return {
				status: error?.response?.status,
			};
		});
	console.log(res);
};
</script>

<style lang="scss" scoped></style>
