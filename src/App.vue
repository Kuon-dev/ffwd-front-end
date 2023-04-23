<template>
	<div class="flex-col min-h-screen w-full">
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
	background-color: black;
}

::-webkit-scrollbar-thumb {
	background-color: #7e81ff;
	border-radius: 20px;
	border: 6px solid transparent;
	background-clip: content-box;
}
::-webkit-scrollbar {
	width: 20px;
}
</style>
