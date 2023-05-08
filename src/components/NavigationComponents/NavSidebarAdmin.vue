<template>
	<!--The whole page-->
	<div class="flex flex-col items-center h-[80%]">
		<nav
			class="border border-inherit rounded-lg shadow-2xl bg-white mx-10 px-10 h-full my-1 items-center flex flex-col justify-between py-10"
		>
			<!--Admin Profile-->
			<div class="flex flex-col">
				<a
					href="#!"
					class="flex justify-center border-b py-5 border-inherit text-lg hover:bg-gray-200"
				>
					<img
						src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
						alt="Profile Picture"
						class="transition ease-in-out delay-150 hover:rotate-12 hover:translate-x-1 w-12 h-12 mr-5"
					/>
					<span
						class="transition ease-in-out delay-150 hover:-translate-x-1 self-center font-medium text-brand text-lg"
						>Admin Name</span
					>
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

<style lang="scss" scoped></style>
