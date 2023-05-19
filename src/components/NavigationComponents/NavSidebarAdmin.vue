<template>
	<!--The whole page-->
	<div class="flex flex-col items-center mr-40">
		<nav
			class="navi mx-10 border border-inherit rounded-lg shadow-2xl -left-24 top-28 bg-white transition ease-in-out duration-150"
		>
			<!--Admin Profile-->
			<router-link
				to="/admin/"
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
			</router-link>

			<!--Dashboard-->
			<router-link
				to="/admin/"
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
			</router-link>

			<!--Content-->
			<ul>
				<!--Manage User-->
				<li v-for="items in navItems" :key="items.title">
					<div class="box mt-3 hover:bg-gray-200 flex justify-center">
						<router-link :to="items.path" class="content flex pt-3 pb-2 w-8/12">
							<img
								:src="items.img"
								alt="Manage User Icon"
								class="icon w-8 h-8 mr-3"
							/>
							<span class="label self-center font-light">
								{{ items.title }}</span
							>
						</router-link>
					</div>
				</li>
			</ul>

			<!--Logout-->
			<div
				class="box flex justify-center border-t py-3 border-inherit hover:bg-gray-200"
			>
				<div class="hover:bg-gray-200 rounded-3xl flex justify-center py-4">
					<img
						src="https://img.freepik.com/free-icon/logout_318-749779.jpg"
						alt="Manage User Icon"
						class="icon w-6 h-6 mr-3"
					/>
					<span class="label self-center font-light">Logout</span>
				</div>
			</div>
		</nav>
	</div>
</template>

<script setup lang="ts">
const navItems = [
	{
		title: 'Manage User',
		img: 'https://cdn4.iconfinder.com/data/icons/aircraft-blue-line/64/165_passengers-people-group-crowd-512.png',
		path: '/admin/manage/user/',
	},
	{
		title: 'Forum',
		img: 'https://icons.veryicon.com/png/o/miscellaneous/20-classification-function-icon/9_5-community-forum.png',
		path: '/admin/forum',
	},
	{
		title: 'Feedback',
		img: 'https://cdn-icons-png.flaticon.com/512/5299/5299394.png',
		path: '/admin/feedback',
	},
];
</script>

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
