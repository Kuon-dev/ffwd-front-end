<template>
	<div class="ml-10 mr-20">
		<Card
			image="/Fotor_AI.png"
			title="Vue"
			card-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
		/>

		<List :course="vue" class="mt-10"> </List>

		This is a test
	</div>
</template>

<script setup lang="ts">
import Card from 'course-components/CourseDescCard.vue';
import List from 'course-components/CourseList.vue';
import { vue } from '../course';
</script>

<style lang="scss" scoped></style>
