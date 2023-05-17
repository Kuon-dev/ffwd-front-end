<template>
	<div class="bg-cover top-0 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />
		<div class="flex flex-row w-full justify-center mt-40">
			<div class="rounded-lg flex-row flex xl:w-9/12 w-full mx-2 max-h-fit">
				<aside
					class="fixed z-[999] h-screen w-96 pb-4 pr-4 transition-all duration-300 lg:relative lg:z-10 lg:w-64"
				>
					<Sidebar class="w-96 overflow-hidden left-20 fixed" />
				</aside>
				<div class="w-full lg:px-6 lg:ml-10 2xl:ml-0">
					<router-view></router-view>
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
