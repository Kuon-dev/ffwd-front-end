<template>
	<BaseCard class="fixed" addClass="px-6 pr-10">
		<h2 class="text-brand text-lg font-semibold py-2">Topics</h2>
		<ul>
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
	</BaseCard>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import { computed } from 'vue';
import { topics } from './CourseTopics';
import { useRouter } from 'vue-router';

const router = useRouter();

const path = computed(() => {
	return router.currentRoute.value.path;
});
</script>

<style lang="scss" scoped></style>
