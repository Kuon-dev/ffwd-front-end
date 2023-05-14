import { ref } from 'vue';
import $ from 'jquery';
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

export const renderHTML = (data: any) => {
	if (!data) return;
	const element = $('#forum-content');
	if (element.contents().length > 0) return;
	const html = EditorJsToHtml.parse(JSON.parse(data));
	html?.forEach((elem: any) => {
		$('#forum-content').append(elem);
	});
	return html[0];
};
