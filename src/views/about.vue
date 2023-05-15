<template>
	<div class="about-section">
		<h1 style="font-size: 36px">About Us Page</h1>
		<p style="font-size: 24px">Welcome to CodeGenius</p>
		<p>
			We offer a dynamic and engaging learning environment for beginning
			programmers.
		</p>
		<p>
			Our platform provides tools for programming to help beginning programmers
			practice and implement their programming knowledge and skills.
		</p>
	</div>

	<div class="row">
		<div class="column">
			<div class="card">
				<img
					src="https://tubers.uk/wp-content/uploads/2018/01/Who-are-we.jpg"
					alt="Who are we"
					style="width: 48%"
					class="centered-image"
				/>
				<div class="container">
					<div class="col-md-6">
						<h2 style="font-size: 24px">
							<b><u>Who Are We</u></b>
						</h2>
						<p class="tidy-paragraph">
							We are a team of experienced programmers and educators who are
							passionate about teaching and sharing our knowledge with others.
						</p>
						<p class="tidy-paragraph">
							Our goal is to make learning programming enjoyable and effective
							for beginners by providing a user-friendly interface and engaging
							learning materials.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="column">
			<div class="card">
				<img
					src="https://www.nicepng.com/png/detail/251-2512822_what-we-offer-makes-you-blush.png"
					alt="What We Offer"
					style="width: 100%"
					class="centered-image"
				/>
				<div class="container">
					<div class="col-md-6">
						<h2 style="font-size: 24px">
							<b><u>What We Offer</u></b>
						</h2>
						<p class="tidy-paragraph">
							Our platform offers a variety of programming courses, hands-on
							coding activities, and a community forum for users to interact
							with each other and get help from experienced programmers.
						</p>
						<p class="tidy-paragraph">
							Registered users have access to additional features, such as
							taking quizzes, leaving feedback, and managing their profile.
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="column">
			<div class="card">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwvBsC6v4zYncvoEQNUiyl889hW4iwFbCFUdswSyfFIMKt2bPL09uRVkW8Tvvh_Swir4&usqp=CAU"
					alt="Our Vision"
					style="width: 60%"
					class="centered-image"
				/>
				<div class="container">
					<div class="col-md-6">
						<h2 style="font-size: 24px">
							<b><u>Our Vision</u></b>
						</h2>
						<p class="tidy-paragraph">
							We believe that everyone should have access to quality programming
							education, regardless of their background or experience.
						</p>
						<p class="tidy-paragraph">
							Our vision is to create a world where anyone can become a
							competent programmer through our platform and resources.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="about-section">
		<h2 style="text-align: center; font-size: 24px">Get in touch</h2>
		<p style="text-align: center; font-size: 12px">
			If you have any questions or feedback, please don't hesitate to contact
			us.
		</p>
		<p style="text-align: center; font-size: 12px">Email: tpxx@gmai.com</p>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped>
body {
	font-family: Arial, Helvetica, sans-serif;
	margin: 0;
}

html {
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

.column {
	float: left;
	width: 33.3%;
	margin-bottom: 16px;
	padding: 0 8px;
}

.card {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	margin: 8px;
}

.about-section {
	padding: 50px;
	text-align: center;
	background-color: #474e5d;
	color: white;
}

.container {
	padding: 0 16px;
}

.container::after,
.row::after {
	content: '';
	clear: both;
	display: table;
}

.title {
	color: grey;
}

@media screen and (max-width: 650px) {
	.column {
		width: 100%;
		display: block;
	}
}

.tidy-paragraph {
	text-align: justify;
	text-justify: inter-word;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
}
.centered-image {
	display: block;
	margin-left: auto;
	margin-right: auto;
}
</style>
