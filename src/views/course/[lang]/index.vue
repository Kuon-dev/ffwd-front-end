<template>
	<div class="ml-10 mr-20 mb-10">
		<Card
			image="/Fotor_AI.png"
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
// eslint-disable-next-line
import('course-components/CourseTopics').then(
	(module: { [key: string]: any }) => {
		topics.value = module[path.value as any];
	},
);

// eslint-disable-next-line
watch(path, (newVal, oldVal) => {
	import('course-components/CourseTopics').then(
		(module: { [key: string]: any }) => {
			console.log(newVal);
			topics.value = module[newVal as any];
		},
	);
});
</script>

<style lang="scss" scoped></style>
