<template>
	<div class="about-us">
		<div class="jumbotron">
			<h1 class="display-4">Welcome to CodeGenius</h1>
			<p class="lead">The best place to learn programming.</p>
			<hr class="my-4" />
			<p>
				We offer a dynamic and engaging learning environment for beginning
				programmers.
			</p>
			<p>
				Our platform provides tools for programming to help beginning
				programmers practice and implement their programming knowledge and
				skills.
			</p>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h2>Who We Are</h2>
					<p>
						We are a team of experienced programmers and educators who are
						passionate about teaching and sharing our knowledge with others.
					</p>
					<p>
						Our goal is to make learning programming enjoyable and effective for
						beginners by providing a user-friendly interface and engaging
						learning materials.
					</p>
				</div>
				<div class="col-md-6">
					<h2>What We Offer</h2>
					<p>
						Our platform offers a variety of programming courses, hands-on
						coding activities, and a community forum for users to interact with
						each other and get help from experienced programmers.
					</p>
					<p>
						Registered users have access to additional features, such as taking
						quizzes, leaving feedback, and managing their profile.
					</p>
				</div>
			</div>
			<hr />
			<div class="row">
				<div class="col-md-6">
					<h2>Our Vision</h2>
					<p>
						We believe that everyone should have access to quality programming
						education, regardless of their background or experience.
					</p>
					<p>
						Our vision is to create a world where anyone can become a competent
						programmer through our platform and resources.
					</p>
				</div>
				<div class="col-md-6">
					<h2>Get in Touch</h2>
					<p>
						If you have any questions or feedback, please don't hesitate to
						contact us.
					</p>
					<p>Email: tpxx@gmai.com</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
.jumbotron {
	background-color: #3f51b5;
	color: #fff;
	padding: 100px 25px;
	margin-bottom: 0;
}

.about-us {
	margin-top: 60px;
}

.about-us h2 {
	margin-top: 50px;
}

.about-us p {
	font-size: 18px;
	line-height: 30px;
}

@media (max-width: 768px) {
	.jumbotron {
		padding: 50px 25px;
	}

	.about-us p {
		font-size: 16px;
		line-height: 24px;
	}
}
</style>
