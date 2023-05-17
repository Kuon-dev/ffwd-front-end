<template>
	<!--The whole page-->
	<div
		class="flex flex-row items-center justify-between overflow-hidden w-full min-w-screen h-screen"
	>
		<!--Side Nav-->
		<main class="main flex flex-col py-10 mx-10 w-full">
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
							<div class="font-semibold text-2xl">1357</div>
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
							<div class="font-semibold text-2xl">20</div>
						</div>
					</router-link>
				</div>

				<!--forum today-->
				<div
					class="forum border rounded-md bg-white p-2 flex-column ml-5 overflow-hidden h-60 transition ease-in-out delay-150 w-full"
				>
					<div class="w-full h-10 flex justify-between">
						<a href="#!">
							<h1
								class="font-medium mt-1 ml-1 text-2xl text-brand transition ease-in-out delay-150 hover:scale-105 hover:translate-x-1"
							>
								Forum Today
							</h1>
						</a>
						<button>
							<img
								src="https://cdn-icons-png.flaticon.com/512/3580/3580266.png"
								alt="Refresh"
								class="w-8 h-8 m-2 transition ease-in-out delay-150 hover:animate-spin mr-12"
							/>
						</button>
					</div>

					<div class="overflow-y-auto h-48">
						<!--forum-->
						<div class="">
							<a
								href="#!"
								class="flex border-b py-3 border-inherit hover:bg-gray-200 md:px-3 mr-4"
							>
								<!--profile-->
								<img
									src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
									alt="Profile Picture"
									class="w-10 h-10 mr-5"
								/>
								<div>
									<div class="font-semibold">Lorem ipsum dolor sit amet</div>
									<div class="text-sm">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua...
									</div>
								</div>
							</a>
						</div>

						<!--forum-->
						<div>
							<a
								href="#!"
								class="flex border-b py-3 border-inherit hover:bg-gray-200 md:px-3 mr-4"
							>
								<!--profile-->
								<img
									src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
									alt="Profile Picture"
									class="w-10 h-10 mr-5"
								/>
								<div>
									<div class="font-semibold">Lorem ipsum dolor sit amet</div>
									<div class="text-sm">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua...
									</div>
								</div>
							</a>
						</div>

						<!--forum-->
						<div>
							<a
								href="#!"
								class="flex border-b py-3 border-inherit hover:bg-gray-200 md:px-3 mr-4"
							>
								<!--profile-->
								<img
									src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
									alt="Profile Picture"
									class="w-10 h-10 mr-5"
								/>
								<div>
									<div class="font-semibold">Lorem ipsum dolor sit amet</div>
									<div class="text-sm">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua...
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<!--Feedback overview-->
			<section class="flex h-72">
				<div class="border rounded-md bg-white mt-3 flex flex-col w-full">
					<a href="#!">
						<h1
							class="font-medium mt-1 ml-1 text-2xl text-brand p-2 transition ease-in-out delay-150 hover:scale-105 hover:translate-x-7"
						>
							Quiz Feedback
						</h1>
					</a>
					<div class="w-11/12 flex flex-row mb-2">
						<!--Chart-->
						<div class="w-3/4 flex">
							<!--The Chart-->
							<div class="flex">
								<canvas id="feedbackChart"></canvas>
								<!--<img src="https://financetrain.sgp1.cdn.digitaloceanspaces.com/27411-chart-2.png" alt="chart example" class="h-60">-->
							</div>
						</div>

						<!--Overview-->
						<div class="w-1/4 flex flex-col justify-content:flex-end p-4">
							<div class="flex flex-row h-8 items-end mb-5">
								<div class="text-2xl font-semibold">67</div>
								<div class="ml-1 font-light flex justify-end text-sm">
									Total Ratings
								</div>
							</div>
							<div class="flex flex-row h-8 items-end mb-5">
								<div class="text-2xl font-semibold">15</div>
								<div class="ml-1 font-light flex justify-end text-sm">
									Comments
								</div>
							</div>
							<div class="flex flex-row h-8 items-end mb-5">
								<div class="text-2xl font-semibold">34</div>
								<div class="ml-1 font-light flex justify-end text-sm">
									Quiz Involved
								</div>
							</div>
							<div class="flex flex-row h-8 items-end mb-5">
								<div class="text-2xl font-semibold">88%</div>
								<div class="ml-1 font-light flex justify-end text-sm">
									Positive
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup lang="ts"></script>

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

//more: mobile phone version
</style>
