<template>
	<div
		class="bg-white rounded-lg drop-shadow-lg"
		:class="[props.addClass, paddingSizeComputed]"
	>
		<div v-if="props.title" class="p-1 pb-3">
			<h1>{{ props.title }}</h1>
		</div>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
	addClass: {
		type: String,
		default: null,
	},
	title: {
		type: String,
		default: null,
	},
	paddingSize: {
		type: String,
		default: 'sm',
	},
});

const paddingSizeComputed = computed(() => {
	if (props.paddingSize === 'xs') return 'p-2';
	if (props.paddingSize === 'sm') return 'p-5';
	if (props.paddingSize === 'md') return 'p-10';
	if (props.paddingSize === 'lg') return 'p-16';
	if (props.paddingSize === 'xl') return 'p-20';
	if (props.paddingSize === '2xl') return 'p-32';
	else return 'p-5';
});
/*
import { onMounted, onBeforeMount } from 'vue';
import { useUserStore } from '@stores/UserStore.ts';

const store = useUserStore();
*/
</script>

<style lang="scss" scoped>
h1 {
	font-size: 1.7rem;
	font-weight: 500;
}
</style>
