<template>
	<!--The whole page-->
	<div
		class="flex flex-row items-center justify-between overflow-hidden w-full min-w-screen h-screen"
	>
		<!--Side Nav-->
		<SideNav />

		<!--Manage User Area-->
		<main class="main flex flex-col py-10 mx-10 w-full">
			<!--Manage User-->
			<section>
				<h1 class="mb-5 text-2xl font-semibold">Manage Admin</h1>
			</section>

			<!--Search and Add User-->
			<section class="flex flex-row justify-space-between items-center w-full">
				<!--Search-->
				<div class="w-1/2 flex gap-4">
					<SearchBar />
				</div>
				<!--Add User-->
				<div class="right-0">
					<v-btn style="text-transform: capitalize" color="white" height="46">
						<router-link to="" class="flex items-center">
							<font-awesome-icon
								:icon="['fas', 'circle-plus']"
								class="text-brand mr-2 text-lg"
							/>
							<p>Add User</p>
						</router-link>
					</v-btn>
				</div>
			</section>

			<!--User Table-->
			<section>
				<div class="overflow-x-auto">
					<div class="bg-gray-100 bg-gray-100 overflow-hidden">
						<div class="w-full">
							<div class="bg-white shadow-md rounded my-6">
								<table class="min-w-max w-full table-auto">
									<thead>
										<tr
											class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
										>
											<th class="py-3 px-6 text-left">Admin ID</th>
											<th class="py-3 px-6 text-left">Admin</th>
											<th class="py-3 px-6 text-left">Email</th>
											<th class="py-3 px-6 text-left">Contact No.</th>
											<th class="py-3 px-6 text-center">Actions</th>
										</tr>
									</thead>
									<tbody class="text-gray-600 text-sm font-light">
										<tr class="border-b border-gray-200 hover:bg-gray-100">
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00101</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/men/1.jpg"
														/>
													</div>
													<span>Eshal Rosas</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand cursor-pointer"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand cursor-pointer"
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr
											class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00102</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/women/2.jpg"
														/>
													</div>
													<span>Anita Rodriquez</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand"
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr class="border-b border-gray-200 hover:bg-gray-100">
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00103</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/men/3.jpg"
														/>
													</div>
													<span>Taylan Bush</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand"
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr
											class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00104</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/men/4.jpg"
														/>
													</div>
													<span>Tarik Novak</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand"
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr class="border-b border-gray-200 hover:bg-gray-100">
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00105</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/men/5.jpg"
														/>
													</div>
													<span>Oscar Howard</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand"
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr
											class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00106</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/women/6.jpg"
														/>
													</div>
													<span>Melisa Moon</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand"
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr class="border-b border-gray-200 hover:bg-gray-100">
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00107</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/women/7.jpg"
														/>
													</div>
													<span>Cora Key</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand"
														/>
													</div>
												</div>
											</td>
										</tr>
										<tr
											class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
										>
											<td class="py-3 px-6 text-left whitespace-nowrap">
												<div class="flex items-center">
													<span class="font-medium">A00108</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<div class="mr-2">
														<img
															class="w-6 h-6 rounded-full"
															src="https://randomuser.me/api/portraits/men/8.jpg"
														/>
													</div>
													<span>Kylan Dorsey</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>eshal091@gmail.com</span>
												</div>
											</td>
											<td class="py-3 px-6 text-left">
												<div class="flex items-center">
													<span>0123456789</span>
												</div>
											</td>
											<td class="py-3 px-6 text-center">
												<div class="flex item-center justify-center">
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'pen']"
															class="text-brand"
														/>
													</div>
													<div
														class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
													>
														<font-awesome-icon
															:icon="['fas', 'trash']"
															class="text-brand"
														/>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<!--https://tailwindcomponents.com/component/projects-table-->
			</section>

			<!--Total User and page-->
			<section class="flex flex-row justify-space-between items-center w-full">
				<!--Total User-->
				<div class="w-1/2 flex gap-4">
					<div class="flex justify-center gap-2 ml-2">
						<p class="font-semibold">Total Admin:</p>
						<p>200</p>
					</div>
				</div>
				<!--Page-->
				<div class="flex h-8">
					<a
						href="#"
						class="flex items-center justify-center px-3 py-2 mx-1 text-gray-500 cursor-not-allowed capitalize bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-600"
					>
						<font-awesome-icon
							:icon="['fas', 'angle-left']"
							color="text-brand"
						/>
					</a>

					<a
						href="#"
						class="hidden px-3 py-1 mx-1 text-brand transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-brand dark:hover:bg-brand hover:text-white dark:hover:text-gray-200"
					>
						1
					</a>

					<a
						href="#"
						class="hidden px-3 py-1 mx-1 text-brand transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
					>
						2
					</a>

					<a
						href="#"
						class="hidden px-3 py-1 mx-1 text-brand transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
					>
						...
					</a>

					<a
						href="#"
						class="hidden px-3 py-1 mx-1 text-brand transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
					>
						9
					</a>

					<a
						href="#"
						class="hidden px-3 py-1 mx-1 text-brand transition-colors duration-300 transform bg-white rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
					>
						10
					</a>

					<a
						href="#"
						class="flex items-center justify-center px-3 py-1 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
					>
						<font-awesome-icon
							:icon="['fas', 'angle-right']"
							color="text-brand"
						/>
					</a>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup lang="ts">
import SideNav from 'nav-components/NavSidebarAdmin.vue';
import SearchBar from 'base-components/BaseSearchBar.vue';
</script>

<style lang="scss" scoped></style>
