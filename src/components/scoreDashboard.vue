<template>
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
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
