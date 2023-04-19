<template>
	<div class="grid grid-cols-4 card-container gap-8">
		<Card
			v-for="(lang, index) in languages"
			:key="index"
			:image="lang.img"
			:title="lang.title"
			:card-text="lang.text"
		/>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from 'course-components/CourseCard.vue';

const languages = ref([
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
	{
		title: 'Vue',
		text: 'Learn more about vue',
		img: '/img1.png',
	},
]);
</script>

<style lang="scss" scoped>
.card-container {
	justify-items: center;
	align-content: space-evenly;
	align-items: center;
}
</style>
