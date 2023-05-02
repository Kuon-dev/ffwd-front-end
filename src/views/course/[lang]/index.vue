<template>
	<div class="px-3 md:ml-5 lg:md-10">
		<Card
			:image="renderTopicData?.img"
			:title="renderTopicData?.topic"
			:card-text="renderTopicData?.desc"
		/>

		<List :course="selectedTopic" class="mt-10"></List>

		<BaseCard class="mt-10">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
				ullam, consectetur itaque quibusdam accusamus nobis modi neque corporis
				perspiciatis dignissimos suscipit est, tenetur autem doloremque ad et!
				Deleniti, laborum iure?
			</p>
			<v-btn color="#7E81FF" class="mt-5">
				<router-link :to="`${path.fullPath}/quiz`" class="text-white">
					Attemp Quiz
				</router-link>
			</v-btn>
		</BaseCard>
	</div>
</template>

<script setup lang="ts">
import Card from 'course-components/CourseDescCard.vue';
import BaseCard from 'base-components/BaseCard.vue';
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
renderData();

// eslint-disable-next-line
watch(path, () => {
	dynamicImport();
	renderData();
});
</script>

<style lang="scss" scoped></style>
