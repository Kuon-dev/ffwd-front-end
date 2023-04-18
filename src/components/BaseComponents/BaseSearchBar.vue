<template>
	<input
		v-model="searchQuery"
		@input="handleInputChange"
		:id="searchBarId"
		class="block p-3 rounded-lg border w-4/5"
		placeholder="Search..."
		required
	/>
	<button
		@click="handleSearch"
		type="submit"
		class="bg-blue-400 p-3 max-w-[70px] rounded-md w-1/5 hover:text-white hover:bg-blue-800"
	>
		<font-awesome-icon :icon="['fas', 'search']" />
	</button>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';

const emits = defineEmits(['search']);

const props = defineProps({
	searchBarId: {
		type: String,
		required: true,
	},
});

const searchQuery = ref('');

const handleInputChange = () => {
	// You can add custom logic here for handling input change, if needed
};

const handleSearch = () => {
	// You can add custom logic here for handling search, e.g. emitting an event with the search query as payload
	emits('search', searchQuery.value);
};
</script>

<style></style>
