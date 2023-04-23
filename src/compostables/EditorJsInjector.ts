import { ref } from 'vue';

const timeoutId = ref<any>(null);

export const handleInputChange = (event: any) => {
	clearTimeout(timeoutId.value);

	timeoutId.value = setTimeout(() => {
		// emits('search', searchQuery.value);
		console.log(event);
	}, 5000);
};
