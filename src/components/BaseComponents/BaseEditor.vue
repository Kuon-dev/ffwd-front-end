<template>
	<div class="">
		<Editor
			:api-key="apiKey"
			:init="{
				selector: 'textarea',
				menubar: false,
				branding: false,
				placeholder: '',
			}"
			:toolbar="[
				{ name: 'history', items: ['undo', 'redo'] },
				{ name: 'styles', items: ['styles'] },
				{ name: 'formatting', items: ['bold', 'italic'] },
				{
					name: 'alignment',
					items: ['alignleft', 'aligncenter', 'alignright', 'alignjustify'],
				},
				{
					name: 'indentation',
					items: ['outdent', 'indent'],
				},
			]"
			:text_patterns="mdPattern"
			format="text"
			v-model="textContent"
			@keyup="emitContent()"
		/>
	</div>
</template>

<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue';
import { ref, computed } from 'vue';

const props = defineProps({
	textContent: {
		type: String,
		default: null,
	},
	placeHolder: {
		type: String,
		default: null,
	},
});

const emits = defineEmits(['text-value']);

// const defaultPlugins = 'lists link image table code help wordcount'

const apiKey = ref((import.meta as any).env.VITE_TINYMCE_API);
const textContent = ref(props.textContent);

const emitContent = () => {
	emits('text-value', textContent.value);
};

const mdPattern = computed(() => {
	return [
		{ start: '*', end: '*', format: 'italic' },
		{ start: '**', end: '**', format: 'bold' },
		{ start: '#', format: 'h1' },
		{ start: '##', format: 'h2' },
		{ start: '###', format: 'h3' },
		{ start: '####', format: 'h4' },
		{ start: '#####', format: 'h5' },
		{ start: '######', format: 'h6' },
		// The following text patterns require the `lists` plugin
		{ start: '1. ', cmd: 'InsertOrderedList' },
		{ start: '* ', cmd: 'InsertUnorderedList' },
		{ start: '- ', cmd: 'InsertUnorderedList' },
	];
});

/*
import { onMounted, onBeforeMount } from 'vue';
import { useUserStore } from '@stores/UserStore.ts';

const store = useUserStore();
*/
</script>

<style lang="scss" scoped></style>
