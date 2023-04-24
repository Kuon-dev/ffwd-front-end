<template>
	<div class="bg-cover top-0 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />
		<div class="flex flex-row w-full mt-10 justify-center">
			<div class="rounded-lg flex-row flex xl:w-8/12 w-full xl:mx-0 mx-20">
				<div class="w-full lg:mt-36 mt-20 lg:px-6 lg:ml-10 2xl:ml-0">
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
			<div class=""></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Nav from 'nav-components/NavTop.vue';
import Footer from 'base-components/BaseFooter.vue';
import { onMounted } from 'vue';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader';
import { useForumStore } from 'stores/ForumStore';

const forumStore = useForumStore();
</script>
