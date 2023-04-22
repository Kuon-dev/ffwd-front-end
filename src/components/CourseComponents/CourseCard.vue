<template>
	<v-card class="card flex items-around" min-width="300">
		<v-img class="align-end" height="200" :src="props.image" cover />

		<v-card-title class="text-brand font-bold"> {{ props.title }}</v-card-title>

		<v-card-text class="h-32">
			<p class="text-black">
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
</script>

<style lang="scss" scoped></style>
