<template>
	<!--The whole page-->
	<div
		class="flex flex-row items-center justify-between overflow-hidden w-full min-w-screen"
	>
		<!--Side Nav-->
		<main class="main flex flex-col mx-10 w-full">
			<!--Admin Dashboard-->
			<section>
				<h1 class="mb-5 text-2xl font-semibold">Admin Dashboard</h1>
			</section>
			<!--Manage User and Admin-->
			<section class="flex">
				<div>
					<!--Manage User-->
					<router-link
						to="/admin"
						class="box border rounded-md p-2 flex md:w-64 h-28 justify-between mb-4"
					>
						<img
							src="https://cdn4.iconfinder.com/data/icons/aircraft-blue-line/64/165_passengers-people-group-crowd-512.png"
							alt="User Logo"
							class="icon w-20 h-20 my-auto"
						/>
						<div class="label my-auto text-right mr-3">
							<div class="font-light">User</div>
							<div class="font-semibold text-2xl" v-if="userCount">
								{{ userCount?.users }}
							</div>
							<div class="dots-1" v-else></div>
						</div>
					</router-link>

					<router-link
						to="/admin"
						class="box border rounded-md p-2 flex md:w-64 h-28 justify-between mb-4"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/512/10106/10106294.png"
							alt="Manage Admin Logo"
							class="icon w-20 h-20 my-auto"
						/>
						<div class="label my-auto text-right mr-3">
							<div class="font-light">Admin</div>
							<div class="font-semibold text-2xl" v-if="userCount">
								{{ userCount?.admins }}
							</div>
							<div class="dots-1" v-else></div>
						</div>
					</router-link>
				</div>

				<!--forum today-->
				<div
					class="forum border rounded-md bg-white p-2 flex-column ml-5 overflow-hidden h-60 transition ease-in-out delay-150 w-full"
				>
					<div class="w-full h-10 flex justify-between">
						<h1
							class="font-medium mt-1 ml-1 text-2xl text-brand transition ease-in-out delay-150 hover:scale-105 hover:translate-x-1"
						>
							Forum Today
						</h1>
						<button @click="getForums()">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3580/3580266.png"
								alt="Refresh"
								class="w-8 h-8 m-2 transition ease-in-out delay-150 hover:animate-spin mr-12"
							/>
						</button>
					</div>

					<ul class="overflow-y-auto h-48" v-if="forumLoaded">
						<!--forum-->
						<li v-for="forum in hots" :key="forum.id">
							<router-link
								:to="`/forum/${forum.id}`"
								class="flex border-b py-3 border-inherit hover:bg-gray-200 md:px-3 mr-4"
							>
								<!--profile-->
								<img
									src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
									alt="Profile Picture"
									class="w-10 h-10 mr-5"
								/>
								<div>
									<div class="font-semibold">{{ forum.title }}</div>
									<!--
									<div class="text-sm">
                    {{ forum.content }}
                  </div>
                  -->
								</div>
							</router-link>
						</li>
					</ul>
					<div class="dots-1" v-else></div>
				</div>
			</section>

			<!--Feedback overview-->
			<section class="flex h-72">
				<div class="border rounded-md bg-white mt-3 flex flex-col w-full">
					<h1
						class="font-medium mt-1 ml-1 text-2xl text-brand p-2 transition ease-in-out delay-150 hover:scale-105 hover:translate-x-7"
					>
						Quiz Feedback
					</h1>
					<ul
						id="feedback-content"
						class="overflow-y-scroll"
						v-show="feedbackLoaded"
					></ul>
					<div class="dots-1" v-show="!feedbackLoaded"></div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup lang="ts">
import { ajaxClient } from 'stores/BackendAPI';
import { ref, onMounted } from 'vue';
import { useForumStore, Forum } from '@/stores/ForumStore';
import { useFeedbackStore, Feedback } from '@/stores/FeedbackStore';
import $ from 'jquery';

const forumStore = useForumStore();
const feedbackStore = useFeedbackStore();
const userCount = ref();
const forumLoaded = ref(false);
const feedbackLoaded = ref(false);

const feedbacks = ref<any>([]);
const hots = ref<Forum[]>([]);

const renderFeedback = () => {
	// jqeury render on jsx-like styling
	const feedbacksItems = feedbacks.value.map((feedback: Feedback) => {
		return `
		<li	class="flex flex-row border-b py-3 border-inherit hover:bg-gray-200 md:px-3 mr-4 justify-between items-center">
       <article class="flex flex-col">
        <h2 class="font-semibold text-brand">
          ${feedback.quizTitle}
        </h2>
        <p class="text-sm">
          ${feedback.message}
        </p>
      </article>
     <div class="flex flex-col">
        ${feedback.userName}
      </div>

    </li>`;
	});
	$('#feedback-content').append(feedbacksItems);
};

const getForums = async () => {
	hots.value = (await forumStore.getHotForums()) ?? [];
};

onMounted(async () => {
	userCount.value = await ajaxClient('api/user/manage/count', 'GET').then(
		(res) => res.data,
	);
	hots.value = (await forumStore.getHotForums()) ?? [];
	forumLoaded.value = true;
	feedbacks.value = (await feedbackStore.getAllFeedback()) ?? [];
	feedbackLoaded.value = true;
	renderFeedback();
});
</script>

<style lang="scss" scoped>
.main {
	left: 18rem;
	transition: transform 0.3s ease-in-out;
	overflow-y: hidden;
} //problem:scrollbar better not appear

.box {
	background-color: white;
	transition: all 0.3s ease-in-out;
}

.box:hover {
	background-color: rgb(229 231 235);
}
.icon {
	margin-left: 0.75rem;
	transition: all 0.3s ease-in-out;
}
.label {
	animation-name: fadeIn;
	animation-duration: 0.3s;
	animation-delay: 0.3s; /* adjust this value as needed */
	animation-fill-mode: forwards;
	opacity: 0;
}

@keyframes fadeIn {
	to {
		opacity: 1;
	}
}

@media only screen and (max-width: 992px) {
	.main {
		left: 7rem;
		transition: all 0.3s ease-in-out;
		min-width: 30rem;
	}

	.box {
		width: 7rem;
		transition: all 0.3s ease-in-out;
	}

	.icon {
		transition: all 0.3s ease-in-out;
		transform: scale(0.8);
		margin: 0 auto;
	}

	.label {
		display: none;
		transition: all 0.3s ease-in-out;
	}
}

::-webkit-scrollbar-track {
	background-color: #ffffff00;
}

.dots-1 {
	width: 60px;
	aspect-ratio: 4;
	background: radial-gradient(circle closest-side, #000 90%, #0000) 0 /
		calc(100% / 3) 100% space;
	clip-path: inset(0 100% 0 0);
	animation: d1 1s steps(4) infinite;
}
@keyframes d1 {
	to {
		clip-path: inset(0 -34% 0 0);
	}
}

//more: mobile phone version
</style>
