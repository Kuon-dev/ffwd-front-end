import { ref } from 'vue';
import { OutputData } from '@editorjs/editorjs';
import editorJsHtml from 'editorjs-html';

const timeoutId = ref<any>(null);
const EditorJsToHtml = editorJsHtml();

export const handleInputChange = (event: any) => {
	clearTimeout(timeoutId.value);

	timeoutId.value = setTimeout(() => {
		// emits('search', searchQuery.value);
		console.log(event);
	}, 5000);
};

export const renderHTML = (data) => {
	if (!data) return;
	console.log(JSON.stringify(data));
	const html = EditorJsToHtml.parse(JSON.parse(data));
	return html[0];
};
