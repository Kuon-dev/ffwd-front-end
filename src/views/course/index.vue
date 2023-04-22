<template>
	<div class="grid grid-cols-3 card-container gap-8">
		<Card
			v-for="(lang, index) in data"
			:key="index"
			class="h-full"
			:image="lang.img !== '' ? lang.img : '/img1.png'"
			:route="lang.path"
			:title="lang.topic"
			:card-text="lang.desc"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Card from 'course-components/CourseCard.vue';
import { topics } from 'course-components/CourseTopics';

const data = computed(() => {
	const newArr: any = [];
	return newArr.concat(topics.languages, topics.frameworks);
});
</script>

<style lang="scss" scoped>
.card-container {
	justify-items: center;
	align-content: space-evenly;
	align-items: center;
}
</style>
