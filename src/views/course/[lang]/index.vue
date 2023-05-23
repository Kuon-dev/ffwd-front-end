<!-- Page when specific Language or Framwork is selected -->
<template>
	<div class="px-3 md:ml-5 lg:md-10">
		<Card
			:image="renderTopicData?.img"
			:title="renderTopicData?.topic"
			:card-text="renderTopicData?.desc"
		/>

		<List :course="selectedTopic" class="mt-10"></List>

		<BaseCard class="mt-10" v-if="userStore.accessLevel > 0">
			<p>Test your knowledge by taking on the quiz!</p>
			<v-btn color="#7E81FF" class="mt-5">
				<router-link :to="`${path.fullPath}/quiz`" class="text-white">
					Attempt Quiz
				</router-link>
			</v-btn>
			<PersonalQuizTable
				v-if="quizStore?.personalQuizRecords"
				:personalQuizzes="quizStore.allPersonalQuizRecords"
			/>
		</BaseCard>

		<!-- Quiz Leaderboard -->
		<BaseCard class="mt-10">
			<QuizLeaderboardTable
				v-if="quizStore?.topQuizRecords"
				:top-quiz-records="quizStore.allTopQuizRecords"
			/>
		</BaseCard>
	</div>
</template>

<script setup lang="ts">
import Card from 'course-components/CourseDescCard.vue';
import BaseCard from 'base-components/BaseCard.vue';
import List from 'course-components/CourseList.vue';
import { computed, watch, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { topics } from 'course-components/CourseTopics';
import { useUserStore } from 'stores/UserStore';
import {
	useQuizStore,
	PersonalQuizRecord,
	TopQuizRecord,
} from 'stores/QuizStore';
import PersonalQuizTable from 'course-components/PersonalQuizTable.vue';
import QuizLeaderboardTable from 'course-components/QuizLeaderboardTable.vue';

// const props = defineProps({
// 	personalQuizzes: {
// 		type: Array as PropType<PersonalQuizRecord[]>,
// 		default: () => [],
// 	},
// });

const userStore = useUserStore();
const quizStore = useQuizStore();

// Extract the last part of the URL path as the course name
const pathnameParts = window.location.pathname.split('/');
const courseName = pathnameParts[pathnameParts.length - 1];

// Set the courseSelected state variable in the quiz store
quizStore.courseSelected = courseName;

const personalQuizRecords = ref<PersonalQuizRecord[]>([]);
const topQuizRecords = ref<TopQuizRecord[]>([]);

const router = useRouter();
const selectedTopic = ref(null);
const renderTopicData = ref<any>(null);

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

onMounted(async () => {
	dynamicImport();
	renderData();
	setTimeout(async () => {
		personalQuizRecords.value =
			(await quizStore.getAllPersonalQuizRecords(0, userStore.user?.id)) ?? [];
		topQuizRecords.value = (await quizStore.getAllTopQuizRecords(0)) ?? [];
	}, 1000);
});
watch(path, async (newPath) => {
	dynamicImport();
	renderData();
	quizStore.courseSelected = newPath.params.lang;
	personalQuizRecords.value =
		(await quizStore.getAllPersonalQuizRecords(0, userStore.user?.id)) ?? [];
	topQuizRecords.value = (await quizStore.getAllTopQuizRecords(0)) ?? [];
});
</script>

<style lang="scss" scoped></style>
