<template>
	<div class="bg-cover top-0 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />
		<div class="flex flex-row w-full mt-10 justify-center">
			<div class="rounded-lg flex-row flex xl:w-9/12 w-full mx-2">
				<aside
					class="fixed z-[999] h-screen w-96 pb-4 pr-4 transition-all duration-300 lg:relative lg:-left-20 lg:z-10 lg:w-64 lg:pt-20"
				>
					<Sidebar
						class="fixed w-96 overflow-hidden pb-48 pt-6 pl-6 lg:pt-0 lg:pl-0"
					/>
				</aside>
				<div class="w-full lg:px-6 lg:ml-10 2xl:ml-0">
					<Suspense>
						<template #default>
							<router-view></router-view>
						</template>
						<template #fallback>
							<v-skeleton-loader
								class="mx-auto border w-full"
								:type="['article', 'button', 'text', 'avatar']"
								:elevation="10"
							></v-skeleton-loader>
						</template>
					</Suspense>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Nav from 'nav-components/NavTop.vue';
import Sidebar from 'nav-components/NavSidebarAdmin.vue';
import Footer from 'base-components/BaseFooter.vue';
import { onMounted } from 'vue';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { useForumStore } from 'stores/ForumStore';

const forumStore = useForumStore();
</script>
