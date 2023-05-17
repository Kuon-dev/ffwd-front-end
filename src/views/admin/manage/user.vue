<template>
	<BaseCard class="overflow-auto">
		<main
			class="p-4 bg-white block sm:flex items-center justify-between lg:mt-1.5 px-5 mx-2"
		>
			<div class="mb-1 w-full">
				<div class="mb-4">
					<nav class="flex mb-5" aria-label="Breadcrumb">
						<ol class="inline-flex items-center space-x-1 md:space-x-2">
							<li class="inline-flex items-center">
								<a
									href="#"
									class="text-gray-700 hover:text-gray-900 inline-flex items-center"
								>
								</a>
							</li>
						</ol>
					</nav>
					<h1 class="text-xl sm:text-2xl font-semibold text-gray-900">
						All users
					</h1>
				</div>
				<div class="block sm:flex items-center md:divide-x md:divide-gray-100">
					<form class="sm:pr-3 items-center">
						<label for="products-search" class="sr-only">Search</label>
						<div class="mt-1 relative sm:w-64 xl:w-96">
							<input
								type="text"
								name="email"
								id="products-search"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
								placeholder="Search for user name"
								v-model="searchQuery"
								@keyup="performSearch(searchQuery)"
							/>
						</div>
					</form>
					<div class="flex items-center justify-end w-full gap-8">
						<button
							type="button"
							class="text-white bg-brand hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center"
						>
							Add new user account
						</button>

						<button
							type="button"
							class="text-white bg-brand hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center rounded-lg text-sm px-3 py-2 text-center"
						>
							Add new admin account
						</button>
					</div>
				</div>
			</div>
		</main>

		<section class="flex flex-col">
			<div class="overflow-x-auto">
				<div class="align-middle inline-block min-w-full">
					<div class="shadow overflow-hidden mr-2">
						<div>
							<v-table
								class="border border-gray-300 max-h-[40rem]"
								fixed-header
								height="500px"
							>
								<thead>
									<tr>
										<th class="text-left">Name</th>
										<th class="text-left">Email</th>
										<th class="text-left">Role</th>
										<th>Account status</th>
										<th class="text-left">Email verified at</th>
										<th class="text-left">Forums posted</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody v-if="manageStore.load">
									<tr
										v-for="(item, index) in searchQuery
											? allUsers
											: manageStore.data"
										:key="index"
									>
										<td>{{ item?.name }}</td>
										<td>{{ item?.email }}</td>
										<td>{{ item?.role }}</td>
										<td
											:class="
												item.is_banned ? 'text-red-500' : 'text-emerald-500'
											"
										>
											{{ item.is_banned ? 'banned' : 'active' }}
										</td>
										<td>
											{{ parseDate(item?.email_verified_at) }}
										</td>
										<td>{{ item?.listing_count }}</td>
										<td>
											<v-btn color="">
												Action
												<v-menu activator="parent">
													<v-list>
														<v-list-item
															v-for="(action, index) in actions(item)"
															:key="index"
															:value="index"
															content-class="bg-sky-700"
														>
															<v-btn
																v-if="action.value === 'edit'"
																@click="editUserAccount(item)"
															>
																{{ action.title }}
															</v-btn>
															<v-btn
																v-else-if="action.value === 'ban'"
																@click="handleUserStatus(item)"
															>
																{{ action.title }}
															</v-btn>
														</v-list-item>
													</v-list>
												</v-menu>
											</v-btn>
										</td>
									</tr>
								</tbody>
								<tbody v-else>
									<tr v-for="items in 7" :key="items">
										<td v-for="index in 7" :key="index">
											<v-skeleton-loader type="list-item-two-line">
											</v-skeleton-loader>
										</td>
									</tr>
								</tbody>
							</v-table>
						</div>
					</div>
				</div>
			</div>
		</section>
	</BaseCard>
	<BaseUserProfile v-if="isShowProfile" profile-type="adminEdit" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import BaseUserProfile from 'base-components/BaseUserProfile.vue';
import {
	useUserManagementStore,
	ManageUserDetails,
} from 'stores/UserManagementStore';
import { useUserStore, User } from 'stores/UserStore';
import BaseCard from 'base-components/BaseCard.vue';
import { toggleProfileOverlay, isShowProfile } from 'compostables/NavInjector';

const manageStore = useUserManagementStore();
const userStore = useUserStore();

const allUsers = ref();

const searchQuery = ref('');

const performSearch = (query: string) => {
	allUsers.value = manageStore.data.filter((user: any) =>
		user.name.toLowerCase().includes(query),
	);
};

const editUserAccount = (e: any) => {
	manageStore.manageEditUser = e;
	toggleProfileOverlay(true);
};

const handleUserStatus = (e: any) => {
	console.log('test');
};

interface UserAction {
	title: string;
	value: string;
}

const actions: any = (user: ManageUserDetails) => {
	return <UserAction[]>[
		{
			title: 'Edit user account',
			value: 'edit',
		},
		{
			title: `${user.is_banned ? 'Unban' : 'Ban'} user account`,
			value: 'ban',
		},
	];
};

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const parseDate = (date: string) => {
	const parse = new Date(date);
	return `${parse.getFullYear()}-${
		monthNames[parse.getMonth()]
	}-${parse.getDay()} at ${parse.getHours()}:${parse.getMinutes()}`;
};

onMounted(async () => {
	allUsers.value = await manageStore.getAllUsers(userStore.accessLevel);
});
</script>

<style lang="scss" scoped></style>
