<template>
	<BaseCard class="max-h-[48rem]" addClass="px-6 w-64 ">
		<Component :is="setComponent" />
	</BaseCard>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import CourseContent from './CourseSidebarContent.vue';
import CourseNavigation from './CourseSidebarNavigation.vue';
import { computed } from 'vue';

const props = defineProps({
	isContentTitle: {
		type: Boolean,
		default: false,
	},
});

const setComponent = computed(() => {
	return props.isContentTitle ? CourseContent : CourseNavigation;
});
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
	background-color: white;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
}

::-webkit-scrollbar-thumb {
	background-color: #7e81ff;
	border-radius: 20px;
	border: 6px solid transparent;
	background-clip: content-box;
}
::-webkit-scrollbar {
	width: 20px;
}
</style>
