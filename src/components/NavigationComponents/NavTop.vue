<template>
	<Component :is="isInMobile ? NavMobile : NavDesktop" />
</template>

<script setup lang="ts">
import NavDesktop from './NavDesktop.vue';
import NavMobile from './NavMobile.vue';

import 'animate.css';
import { ref, watch, onMounted } from 'vue';

const windowWidth = ref(window.innerWidth);
const handleResize = () => {
	windowWidth.value = window.innerWidth;
};
const isInMobile = ref(windowWidth.value < 1024);

watch(windowWidth, () => {
	isInMobile.value = windowWidth.value < 1024;
});

onMounted(() => {
	window.addEventListener('resize', handleResize);
});
</script>

<style scoped></style>
