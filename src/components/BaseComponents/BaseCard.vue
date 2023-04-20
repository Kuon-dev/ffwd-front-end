<template>
	<div
		class="rounded-lg drop-shadow-lg"
		:class="[props.addClass, paddingSizeComputed, bgComputed, acrlyicComputed]"
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
	bg: {
		type: String,
		default: '',
	},
	noBg: {
		type: Boolean,
		default: false,
	},
	acrlyic: {
		type: Boolean,
		default: false,
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

const bgComputed = computed(() => {
	console.log(props.noBg);
	if (props.bg) return `bg-${props.bg}`;
	else return props.noBg ? null : 'bg-white';
});

const acrlyicComputed = computed(() => {
	return props.acrlyic
		? 'backdrop-saturate-200 backdrop-blur-2xl bg-opacity-50 border border-white/80 bg-white shadow-md shadow-blue-gray-500/10'
		: null;
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

.acrlyic {
	-webkit-backdrop-filter: blur(20px) saturate(180%);
	backdrop-filter: blur(20px) saturate(180%);
	padding: 1rem 2rem;
	border-radius: 4px;
	box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
	background-color: #ffffff88;
}
</style>
