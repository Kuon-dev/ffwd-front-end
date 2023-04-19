<template>
	<BaseCard class="fixed" addClass="px-6 pr-10 w-64 ml-5">
		<h2 class="text-brand text-lg font-semibold py-2">Topics</h2>
		<ul v-if="!pathTopic">
			<li
				v-for="topic in topics"
				:key="topic.path"
				class="border-l-2 px-2 py-1"
				:class="path === topic.path ? 'border-brand' : 'border-gray-300'"
			>
				<router-link :to="topic.path">
					<p class="text-sm">
						{{ topic.topic }}
					</p>
				</router-link>
			</li>
		</ul>

		<ul v-else>
			<li v-for="(chapter, chapterIndex) in lang" :key="chapter.path">
				{{ chapter.title }}
				<router-link
					v-for="(topic, topicIndex) in chapter.lists"
					:key="topicIndex"
					:to="`/course/${topic.path}` ?? '/'"
				>
					<p
						:class="
							`${pathLang}/${pathTopic}` === topic.path
								? 'border-brand'
								: 'border-gray-300'
						"
						class="border-l-2 px-2 py-1"
					>
						{{ `${chapterIndex + 1}.${topicIndex + 1} - ${topic.topic}` }}
					</p>
				</router-link>
			</li>
		</ul>
	</BaseCard>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import { computed, watch, ref } from 'vue';
import { topics } from './CourseTopics';
import { useRouter } from 'vue-router';

const router = useRouter();

const lang = ref(null);
const path = computed(() => {
	return router.currentRoute.value.path;
});

console.log(path.value);
console.log(router.currentRoute.value);

const pathTopic = computed(() => {
	return router.currentRoute.value.params.topic;
});

const pathLang = computed(() => {
	return router.currentRoute.value.params.lang;
});

const dynamicImport = () => {
	if (pathTopic.value) {
		import('course-components/CourseTopics').then(
			(module: { [key: string]: any }) => {
				lang.value = module[pathLang.value as any];
				console.log(lang.value);
			},
		);
	}
};

dynamicImport();

watch(pathTopic, () => {
	dynamicImport();
});
</script>

<style lang="scss" scoped></style>
