<template>
	<div class="ml-10 mr-20 mb-10">
		<Card
			:image="renderTopicData?.img"
			:title="renderTopicData?.topic"
			:card-text="renderTopicData?.desc"
		/>

		<List :course="selectedTopic" class="mt-10"> </List>
	</div>
</template>

<script setup lang="ts">
import Card from 'course-components/CourseDescCard.vue';
import List from 'course-components/CourseList.vue';
import { computed, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { topics } from 'course-components/CourseTopics';

const router = useRouter();
const selectedTopic = ref(null);
const renderTopicData = ref(null);

const path = computed(() => {
	return router.currentRoute.value as any;
});

const renderData = () => {
	topics.languages.forEach((lang: any) => {
		if (lang.path === path.value.path) {
			renderTopicData.value = lang;
		}
	});

	topics.frameworks.forEach((lang: any) => {
		if (lang.path === path.value.path) {
			renderTopicData.value = lang;
		}
	});
};

// eslint-disable-next-line
const dynamicImport = () => {
	import('course-components/CourseTopics').then(
		(module: { [key: string]: any }) => {
			selectedTopic.value = module[path.value.params.lang as any];
		},
	);
};

dynamicImport();
// eslint-disable-next-line
watch(path, () => {
	dynamicImport();
	renderData();
});
</script>

<style lang="scss" scoped></style>
