<template>
	<v-card
		class="card flex items-around w-64 sm:w-64 lg:w-64 2xl:w-72 my-1"
		:min-width="path?.path !== '/' ? 200 : 250"
	>
		<v-img class="align-end" height="200" :src="props.image" cover />

		<v-card-title class="text-brand font-bold text-left">
			{{ props.title }}</v-card-title
		>

		<v-card-text class="h-48 lg:h-40">
			<p class="text-black text-sm text-left">
				{{ props.cardText }}
			</p>
		</v-card-text>

		<v-card-actions class="">
			<v-btn color="#7E81FF">
				<router-link :to="props.route"> View course </router-link>
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup lang="ts">
import { isInMobile } from 'compostables/UserDevice';
import router from '@/router';
import { computed } from 'vue';

const props = defineProps({
	image: {
		type: String,
		default: null,
	},
	title: {
		type: String,
		default: null,
	},
	cardText: {
		type: String,
		default: null,
	},
	route: {
		type: String,
		default: null,
	},
});

const path = computed(() => {
	return router.currentRoute.value;
});
</script>

<style lang="scss" scoped></style>
