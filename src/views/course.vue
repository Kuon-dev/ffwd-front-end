<template>
	<div class="bg-cover top-0 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />
		<div class="flex flex-row w-full mt-32">
			<div class="ml-10">
				<Sidebar />
			</div>
			<div class="w-full rounded-lg ml-32">
				<router-view></router-view>
			</div>
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
