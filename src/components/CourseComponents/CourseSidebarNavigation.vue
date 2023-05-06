<template>
	<div>
		<div v-if="!pathTopic">
			<h2 class="text-brand text-lg font-semibold py-2">Languages</h2>
			<ul>
				<li
					v-for="lang in topics.languages"
					:key="lang.path"
					class="border-l-2 px-2 py-1"
					:class="path === lang.path ? 'border-brand' : 'border-gray-300'"
				>
					<router-link :to="lang.path">
						<p class="text-sm">
							{{ lang.topic }}
						</p>
					</router-link>
				</li>
			</ul>

			<br />

			<h2 class="text-brand text-lg font-semibold py-2">Frameworks</h2>
			<ul>
				<li
					v-for="lang in topics.frameworks"
					:key="lang.path"
					class="border-l-2 px-2 py-1"
					:class="path === lang.path ? 'border-brand' : 'border-gray-300'"
				>
					<router-link :to="lang.path">
						<p class="text-sm">
							{{ lang.topic }}
						</p>
					</router-link>
				</li>
			</ul>
		</div>

		<ul v-else>
			<li v-for="(chapter, chapterIndex) in lang" :key="chapterIndex">
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
	</div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import { topics } from './CourseTopics';
import { useRouter } from 'vue-router';

interface CourseList {
	topic: string;
	path: string;
}

interface CourseLang {
	title: string;
	lists: CourseList[];
}

const router = useRouter();
const lang = ref<CourseLang[]>([]);
const path = computed(() => {
	return router.currentRoute.value.path;
});

const pathTopic = computed(() => {
	return (router.currentRoute.value as any).params.topic;
});

const pathLang = computed(() => {
	return (router.currentRoute.value as any).params.lang;
});

const dynamicImport = () => {
	if (pathTopic.value) {
		import('course-components/CourseTopics').then(
			(module: { [key: string]: any }) => {
				lang.value = module[pathLang.value as any];
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
