<template>
	<input
		v-model="searchQuery"
		@keyup="handleInputChange($event)"
		id="searchBarId"
		class="block p-3 rounded-lg border w-4/5"
		placeholder="Search..."
		required
	/>
	<button
		@click="handleSearch()"
		type="submit"
		class="bg-blue-400 p-3 max-w-[70px] rounded-md w-1/5 hover:text-white hover:bg-blue-800"
	>
		<font-awesome-icon :icon="['fas', 'search']" />
	</button>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emits = defineEmits(['search']);

const searchQuery = ref('');
const timeoutId = ref<any>(null);

const handleInputChange = (event: Event) => {
	clearTimeout(timeoutId.value);

	timeoutId.value = setTimeout(() => {
		emits('search', searchQuery.value);
	}, 3000);
};

const handleSearch = () => {
	// You can add custom logic here for handling search, e.g. emitting an event with the search query as payload
};
</script>

<style></style>
