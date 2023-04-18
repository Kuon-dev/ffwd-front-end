<template>
	<div class="relative">
		<select
			v-model="selectedValue"
			class="dropdownBox inline-flex items-center p-3 w-[10rem] overflow-hidden rounded-l-lg border bg-white hover:cursor-pointer"
			@change="see($event)"
		>
			<option
				class=""
				v-for="option in options"
				:value="option.value"
				:key="option.value"
			>
				{{ option.label }}
			</option>
		</select>
		<button
			class="dropdownArrow h-full p-3 text-gray-600 border rounded-r-lg hover:bg-gray-50 hover:text-gray-700 absolute"
		>
			<font-awesome-icon :icon="['fas', 'chevron-down']" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue';
import jQueryIndexForum from 'jquery-components/forum/index';

const emits = defineEmits(['inputs']);

const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
	value: {
		type: String,
		default: 'Trending',
	},
});

const see = (value: Event) => {
	console.log(selectedValue.value);
};

jQueryIndexForum;

const selectedValue = ref(props.value);

// watch(selectedValue, (newValue) => {
// 	emit('input', newValue);
// });
</script>

<style></style>
