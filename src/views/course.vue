<template>
	<div class="bg-cover top-0 h-full flex flex-col bg-gray-100">
		<Nav />
		<div class="flex flex-row w-full">
			<div class="ml-10">
				<Sidebar />
			</div>
			<div class="w-full rounded-lg">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import Nav from 'nav-components/NavTop.vue';
import Sidebar from 'course-components/CourseSidebar.vue';
</script>

<style lang="scss" scoped>
.bg {
	background-image: url('/img1.png');
	filter: brightness(50%);
}
</style>
