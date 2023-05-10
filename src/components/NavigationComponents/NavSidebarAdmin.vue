<template>
	<!--The whole page-->
	<div class="flex flex-col items-center h-[80%]">
		<nav
			class="navi fixed h-5/6 border border-inherit rounded-lg shadow-2xl left-4 top-28 bg-white transition ease-in-out duration-150"
		>
			<!--Admin Profile-->
			<a
				href="#!"
				class="box flex justify-center border-b py-5 border-inherit text-lg hover:bg-gray-200"
			>
				<img
					src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
					alt="Profile Picture"
					class="icon w-12 h-12 mr-5"
				/>
				<span class="label self-center font-medium text-brand text-lg"
					>Admin Name</span
				>
			</a>

			<!--Dashboard-->
			<a
				href="#!"
				class="box flex justify-center border-b py-3 border-inherit hover:bg-gray-200"
			>
				<img
					src="https://cdn-icons-png.flaticon.com/512/747/747891.png"
					alt="Dashboard Icon"
					class="icon w-10 h-10 mr-5"
				/>
				<span class="label self-center font-semibold text-brand text-lg"
					>Dashboard</span
				>
			</a>

			<!--Content-->
			<ul>
				<!--Manage User-->
				<li>
					<div class="box mt-3 hover:bg-gray-200 flex justify-center">
						<a href="#!" class="content flex pt-3 pb-2 w-8/12">
							<img
								src="https://cdn4.iconfinder.com/data/icons/aircraft-blue-line/64/165_passengers-people-group-crowd-512.png"
								alt="Manage User Icon"
								class="icon w-8 h-8 mr-3"
							/>
							<span class="label self-center font-light">Manage User</span>
						</a>
					</div>
				</li>

				<!--Manage Admin-->
				<li>
					<div class="box hover:bg-gray-200 flex justify-center">
						<a href="#!" class="content flex py-3 hover:bg-gray-200 w-8/12">
							<img
								src="https://cdn-icons-png.flaticon.com/512/10106/10106294.png"
								alt="Manage User Icon"
								class="icon w-8 h-7 mr-3"
							/>
							<span class="label self-center font-light">Manage Admin</span>
						</a>
					</div>
				</li>

				<!--Forum-->
				<li>
					<div class="box hover:bg-gray-200 flex justify-center">
						<a href="#!" class="content flex py-3 hover:bg-gray-200 w-8/12">
							<img
								src="https://icons.veryicon.com/png/o/miscellaneous/20-classification-function-icon/9_5-community-forum.png"
								alt="Manage User Icon"
								class="icon w-8 h-7 mr-3"
							/>
							<span class="label self-center font-light">Forum</span>
						</a>
					</div>
				</li>

				<!--View Feedback-->
				<li>
					<div class="box hover:bg-gray-200 flex justify-center">
						<a href="#!" class="content flex py-3 hover:bg-gray-200 w-8/12">
							<img
								src="https://cdn-icons-png.flaticon.com/512/5299/5299394.png"
								alt="Manage User Icon"
								class="icon w-8 h-8 mr-3"
							/>
							<span class="label self-center font-light">Feedback</span>
						</a>
					</div>
				</li>
			</ul>

			<!--Logout-->
			<div class="box absolute bottom-2 w-11/12">
				<a
					href="#!"
					class="hover:bg-gray-200 rounded-3xl ml-5 flex justify-center py-4"
				>
					<img
						src="https://img.freepik.com/free-icon/logout_318-749779.jpg"
						alt="Manage User Icon"
						class="icon w-6 h-6 mr-3"
					/>
					<span class="label self-center font-light">Logout</span>
				</a>

				<!--Dashboard-->
				<a
					href="#!"
					class="flex justify-center border-b py-3 border-inherit hover:bg-gray-200"
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/747/747891.png"
						alt="Dashboard Icon"
						class="transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-105 w-10 h-10 mr-5"
					/>
					<span
						class="transition ease-in-out delay-150 hover:-translate-x-0.5 hover:scale-105 self-center font-semibold text-brand text-lg"
						>Dashboard</span
					>
				</a>

				<!--Content-->
				<ul>
					<!--Manage User-->
					<li>
						<div class="mt-3 hover:bg-gray-200">
							<a href="#!" class="flex pt-3 pb-2">
								<img
									src="https://cdn4.iconfinder.com/data/icons/aircraft-blue-line/64/165_passengers-people-group-crowd-512.png"
									alt="Manage User Icon"
									class="w-8 h-8 mr-3"
								/>
								<span class="self-center font-light">Manage User</span>
							</a>
						</div>
					</li>

					<!--Manage Admin-->
					<li>
						<div class="hover:bg-gray-200">
							<a href="#!" class="flex py-3 hover:bg-gray-200">
								<img
									src="https://cdn-icons-png.flaticon.com/512/10106/10106294.png"
									alt="Manage User Icon"
									class="w-8 h-7 mr-3"
								/>
								<span class="self-center font-light">Manage Admin</span>
							</a>
						</div>
					</li>

					<!--Forum-->
					<li>
						<div class="hover:bg-gray-200">
							<a href="#!" class="flex py-3 hover:bg-gray-200">
								<img
									src="https://icons.veryicon.com/png/o/miscellaneous/20-classification-function-icon/9_5-community-forum.png"
									alt="Manage User Icon"
									class="w-8 h-7 mr-3"
								/>
								<span class="self-center font-light">Forum</span>
							</a>
						</div>
					</li>

					<!--View Feedback-->
					<li>
						<div class="hover:bg-gray-200">
							<a href="#!" class="flex py-3 hover:bg-gray-200">
								<img
									src="https://cdn-icons-png.flaticon.com/512/5299/5299394.png"
									alt="Manage User Icon"
									class="w-8 h-8 mr-3"
								/>
								<span class="self-center font-light">Feedback</span>
							</a>
						</div>
					</li>
				</ul>
			</div>

			<div
				class="flex flex-row items-center justify-start w-full border-t border-gray-200 pt-5"
			>
				<font-awesome-icon icon="fa-solid fa-right-from-bracket" size="xl" />
				<button class="ml-3">Logout</button>
			</div>

			<!--Logout-->
		</nav>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
a:hover img {
	transform: rotate(12deg);
	transition: all 0.3s ease-in-out 0.1s;
}

a:hover span {
	transform: translateX(1px) scale(1.1);
	transition: all 0.3s ease-in-out 0.1s;
}

.navi {
	width: 15rem;
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
	.navi {
		width: 4rem;
		transition: all 0.3s ease-in-out;
	}

	.box {
		width: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-left: 7px;
	}

	.icon {
		transform: scale(0.9);
		margin: 0 auto;
		transition: all 0.3s ease-in-out;
	}

	.label {
		display: none;
		transition: all 0.3s ease-in-out;
	}
}
</style>
