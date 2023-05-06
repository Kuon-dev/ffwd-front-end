import { ref, watch } from 'vue';

const windowWidth = ref(window.innerWidth);
const handleResize = () => {
	windowWidth.value = window.innerWidth;
};
export const isInMobile = ref(windowWidth.value < 1024);

watch(windowWidth, () => {
	isInMobile.value = windowWidth.value < 1024;
});
