<template>
	<div class="ml-10 mr-20 mb-10">
		<Card
			image="/img2.png"
			title="Vue"
			card-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
		/>

		<List :course="topics" class="mt-10"> </List>
	</div>
</template>

<script setup lang="ts">
import Card from 'course-components/CourseDescCard.vue';
import List from 'course-components/CourseList.vue';
import { computed, watch, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const topics = ref(null);

const path = computed(() => {
	return router.currentRoute.value.params.lang;
});

console.log(path.value);
// eslint-disable-next-line
const dynamicImport = () => {
	import('course-components/CourseTopics').then(
		(module: { [key: string]: any }) => {
			console.log(module[path.value as any]);
			topics.value = module[path.value as any];
		},
	);
};

dynamicImport();
// eslint-disable-next-line
watch(path, (newVal, oldVal) => {
	console.log(newVal);
	dynamicImport();
});
</script>

<style lang="scss" scoped></style>
