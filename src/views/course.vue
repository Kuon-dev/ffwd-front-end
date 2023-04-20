<template>
	<div class="bg-cover top-0 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />
		<div class="flex flex-row w-full mt-10 justify-center">
			<div class="rounded-lg flex-row flex w-3/4">
				<aside
					class="fixed z-[999] h-screen w-80 pb-4 pr-4 transition-all duration-300 lg:relative lg:left-0 lg:z-10 lg:w-64 lg:pt-20 -left-96"
				>
					<Sidebar
						class="fixed h-screen w-80 overflow-y-scroll bg-white pb-48 pt-6 pl-6 lg:w-64 lg:bg-transparent lg:pt-0 lg:pl-0"
					/>
				</aside>
				<div class="mt-36 w-full lg:mt-24 lg:w-[60%] lg:px-6">
					<router-view></router-view>
				</div>
				<aside
					class="fixed z-[999] h-screen w-80 pb-4 pr-4 transition-all duration-300 lg:relative lg:left-0 lg:z-10 lg:w-64 lg:pt-20 -left-96"
				>
					<Sidebar
						class="fixed h-screen w-80 overflow-y-scroll bg-white pb-48 pt-6 pl-6 lg:w-64 lg:bg-transparent lg:pt-0 lg:pl-0"
					/>
				</aside>
			</div>
			<div class=""></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Nav from 'nav-components/NavTop.vue';
import Footer from 'base-components/BaseFooter.vue';
import Sidebar from 'course-components/CourseSidebar.vue';
</script>

<style lang="scss" scoped>
.bg {
	background-image: url('/img1.png');
	filter: brightness(50%);
}
</style>
