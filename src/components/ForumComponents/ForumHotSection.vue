<template>
	<transition
		enter-active-class="animate__animated animate__slideInRight animate__fast"
		leave-active-class="animate__animated animate__slideOutRight animate__fast"
	>
		<ul class="flex flex-col gap-3">
			<li v-for="forum in forums" :key="forum.id">
				<router-link :to="`/forum/${forum.id}`">
					<h2 class="text-md text-brand">{{ forum.title }}</h2>
				</router-link>
				<v-divider></v-divider>
				<!-- Forum Title -->
			</li>
		</ul>
	</transition>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Forum } from 'stores/ForumStore';

const props = defineProps({
	forums: {
		type: Array as PropType<Forum[]>,
		default: () => [],
	},
});
</script>

<style lang="scss" scoped></style>
