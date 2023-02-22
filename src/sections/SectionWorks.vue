<template>
	<div
		class="image-wrapper relative"
		:class="props.isInMobile ? '' : 'overflow-x-hidden'"
	>
		<div
			class="image-container"
			id="container"
			@mousedown="console.log('test')"
		>
			<img
				v-for="(image, index) in images"
				class="image"
				draggable="false"
				:key="index"
				:src="image"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps({
	isInMobile: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const images = ref([
	'kampai1.JPG',
	'kampai2.JPG',
	'kampai3.JPG',
	'kampai4.JPG',
	'kampai5.JPG',
]);

const mouseDownPosition = ref(0);
const dragPercentage = ref(0);
const prevPercentage = ref(0);
const nextPercentage = ref(0);
const nextPercentageUnconstrained = ref(0);

/*
const dragPosition = computed(() => {
  return { 
    'transform': `translate(${nextPercentage.value}%, -50%)`,
  }
})

const objectPosition = computed(() => {
  return {
    'object-position': `${nextPercentage.value + 100}% 50%`
  }
})
*/

onMounted(() => {
	const track = document.getElementById('container');
	window.onmousedown = (e) => {
		mouseDownPosition.value = e.clientX;
	};

	window.onmousemove = (e) => {
		if (mouseDownPosition.value === 0) return;
		const mouseDelta = mouseDownPosition?.value - e.clientX;
		const maxDelta = window.innerWidth / 2;

		dragPercentage.value = (mouseDelta / maxDelta) * -100;
		nextPercentageUnconstrained.value =
			dragPercentage.value + prevPercentage.value;
		nextPercentage.value = Math.max(
			Math.min(nextPercentageUnconstrained.value, 0),
			-100
		);

		track?.animate(
			{
				transform: `translate(${nextPercentage.value}%, -50%)`,
			},
			{ duration: 1200, fill: 'forwards' }
		);

		const images = track?.getElementsByClassName('image') || [];
		for (const image of images) {
			image.animate(
				{
					objectPosition: `${100 + nextPercentage.value}% center`,
				},
				{ duration: 1200, fill: 'forwards' }
			);
		}
	};

	window.onmouseup = () => {
		mouseDownPosition.value = 0;
		prevPercentage.value = nextPercentage.value;
	};
});
</script>

<style scoped>
img {
	width: 30vmin;
	height: 46vmin;
	object-fit: cover;
	object-position: 100% center;
}

.image-container {
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 4vmin;
	left: 50%;
	top: 50%;
	transform: translate(0%, -50%);
	user-select: none;
	position: relative;
}

.image-wrapper {
	width: 100vw;
	height: 100vh;
	margin: 0rem;
}
</style>
