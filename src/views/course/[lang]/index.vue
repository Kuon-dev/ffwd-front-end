<!-- Page when specific Language or Framwork is selected -->
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
			<h2 class="text-brand text-lg font-semibold py-2">Global Leaderboard</h2>
			<table class="mt-5 min-w-full divide-y divide-gray-200">
				<thead>
					<tr class="bg-gray-50">
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Username
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Score
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Date of Attempt
						</th>
						<th
							scope="col"
							class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
						>
							Time Taken
						</th>
					</tr>
				</thead>
				<tbody class="bg-white divide-y divide-gray-200">
					<!-- <tr v-for="(quiz, index) in quizzes" :key="quiz.id"> -->
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="text-sm text-gray-900">John Doe</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="text-sm text-gray-900">75</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="text-sm text-gray-900">2023-05-10</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="text-sm text-gray-900">00:45:23</div>
						</td>
					</tr>
					<!-- Repeat for each quiz record (Top 10) -->
				</tbody>
			</table>
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
import { useQuizStore, PersonalQuizRecord } from 'stores/QuizStore';
import PersonalQuizTable from 'course-components/PersonalQuizTable.vue';

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
// const personalQuizRecords = ref<PersonalQuizRecord[]>([]);
// const quizRecords = await quizStore.getAllPersonalQuizRecords(0, userStore.user?.id);

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
	personalQuizRecords.value =
		(await quizStore.getAllPersonalQuizRecords(0, userStore.user?.id)) ?? [];
});
watch(path, () => {
	dynamicImport();
	renderData();
});
</script>

<style lang="scss" scoped></style>
