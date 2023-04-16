<template>
	<div class="flex-col w-full min-h-screen">
		<Suspense>
			<template #default>
				<router-view />
			</template>
			<template #fallback>
				<LoadingPage />
			</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts">
import LoadingPage from 'base-components/BaseLoadingPage.vue';

import 'animate.css';
import { ref, watch, onMounted } from 'vue';

const windowWidth = ref(window.innerWidth);
const handleResize = () => {
	windowWidth.value = window.innerWidth;
};
const isInMobile = ref(windowWidth.value < 1024);
/*
interface Theme {
  bg: string,
  bg2: string,
  text: string,
  subtext: string,
  subtext2: string,
  panel: string,
  overlay: string,
  brand: string,
  brand2: string,
}
*/

// const app = ref(document.getElementById('app')?.style);

watch(windowWidth, () => {
	isInMobile.value = windowWidth.value < 1024;
});

onMounted(() => {
	window.addEventListener('resize', handleResize);
});
</script>

<style>
#app {
	max-width: 1980px;
	width: 100%;
	overflow: hidden !important;
	display: flex;
	justify-content: center;
	align-content: start;
}

.div-center {
	display: flex;
	align-items: center;
	justify-content: center;
}

::-webkit-scrollbar-track {
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #60246c;
	border-radius: 20px;
	border: 6px solid transparent;
	background-clip: content-box;
}
::-webkit-scrollbar {
	width: 20px;
}
</style>
