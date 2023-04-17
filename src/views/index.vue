<template>
	<navbar>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="flex flex-col gap-4 bg-amber-300">
						<ul>
							<div class="flex flex-row gap-4">
								<div class="w-1/5">
									<li><a href="#">LOGO (main page)</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">About</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Course</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Forum</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">User profile</a></li>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</navbar>

	<result>
		<div class="dashboard">
			<h1 class="dashboard-title">Quiz Results</h1>
			<div class="dashboard-card">
				<h2 class="dashboard-card-title">Score</h2>
				<p class="dashboard-card-score">80%</p>
			</div>
			<div class="dashboard-card">
				<h2 class="dashboard-card-title">Points</h2>
				<p class="dashboard-card-score">8 out of 10</p>
			</div>
			<div class="dashboard-card">
				<h2 class="dashboard-card-title">Total Time Used</h2>
				<p class="dashboard-card-score">3:48</p>
			</div>
			<div class="dashboard-card">
				<h2 class="dashboard-card-title">Marked Questions</h2>
				<ul class="dashboard-marked-questions">
					<li>Question 3</li>
					<li>Question 7</li>
				</ul>
			</div>
			<div class="dashboard-actions">
				<button class="dashboard-action-btn" id="retry-btn">Retry Quiz</button>
				<button class="dashboard-action-btn" id="feedback-btn">
					Provide Feedback
				</button>
				<button class="dashboard-action-btn" id="share-btn">Share Score</button>
			</div>
		</div>
	</result>

	<div>
		<div class="flex flex-row gap-4">
			<NavSideBar />
			<div class="flex flex-col gap-4 bg-amber-300">
				<div class="flex flex-row gap-4">
					<div class="">1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
				</div>
				<Suspense>
					<template #default>
						<img :src="test" class="h-[50rem]" />
					</template>
					<template #fallback> loading </template>
				</Suspense>
			</div>
		</div>
		<button class="text-sky-400">Hide P</button>
		<p class="text-amber-300 text-md">This is a P element</p>
	</div>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<p class="text-4xl">CodeGenius</p>
					<div class="flex flex-col gap-4 bg-black">
						<ul>
							<div class="flex flex-row gap-4">
								<div class="w-1/5">
									<li><a href="#">Home</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">About</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Course</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Forum</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Contact</a></li>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-bar">
			<p>&copy; 2023 Learn Coding. All rights reserved.</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Test from '@/jquery-components/Example';
import QRCode from 'qrcode';

import NavSideBar from 'nav-components/NavSidebar.vue';

Test;
// With async/await
const generateQR = async (text) => {
	try {
		const image = await QRCode.toDataURL(text);
		console.log(image);
		console.log(text);
		return image;
	}
	catch (err) {
		console.error(err);
	}
};

const test = ref(
	await generateQR('https://www.youtube.com/watch?v=vEyPvak2K9o'),
);
</script>

<style lang="scss" scoped>
p {
	&:hover {
		color: blue;
	}
}
.dashboard {
	max-width: 800px;
	margin: 0 auto;
	padding: 50px 20px;
}

.dashboard-title {
	font-size: 36px;
	font-weight: bold;
	text-align: center;
	margin-bottom: 50px;
}

.dashboard-card {
	width: 100%;
	background-color: #fff;
	padding: 20px;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
	margin-bottom: 20px;
	text-align: center;
}

.dashboard-card-title {
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 10px;
}

.dashboard-card-score {
	font-size: 18px;
	color: #333;
	margin-top: 10px;
}

.dashboard-marked-questions {
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: left;
}

.dashboard-actions {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
}

.dashboard-action-btn {
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	background-color: #333;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	margin-right: 10px;
	cursor: pointer;
}

.dashboard-action-btn:hover {
	background-color: #555;
}

.dashboard-action-btn:active {
	background-color: #222;
}
</style>
