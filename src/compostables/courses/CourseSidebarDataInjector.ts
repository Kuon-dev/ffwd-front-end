// dependencies
/* eslint-disable */
import $ from 'jquery';
import router from '@/router'; // @ refers to src
import { injectScrollama } from './ScrollamaInjector';
import { highlightCode } from './HighlightCodeInjector';
// compostable
import { watch, computed, ref } from 'vue';
/* eslint-enable */

// this is used to know when to render the contents of the data of the sidebar
const fetchedMd = ref(false);

// check if the user is in ,obile
const windowWidth = ref(window.innerWidth);
const handleResize = () => {
	windowWidth.value = window.innerWidth;
};
export const isInMobile = ref(windowWidth.value < 1024);

watch(windowWidth, () => {
	isInMobile.value = windowWidth.value < 1024;
});

// Converter will re responsible to covert the md files into HTML Elements

// clipboard API refers to the copyp button in each code section within the rendered
// MD file
const injectClipboardAPI = () => {
	// Select all pre elements on the page
	$('pre').each((index: number, el: any) => {
		const pre = $(el);
		const copyButton = $('<button>Copy</button>');

		// Add a click event listener to the button
		copyButton.click(() => {
			const text = pre.text().split('\n').slice(0, -1).join('\n');
			const textarea = $('<textarea></textarea>').val(text);
			$('body').append(textarea);
			textarea.select();
			(document as any).execCommand('copy');
			textarea.remove();
		});

		// Append the copy button to the pre element
		pre.append(copyButton);
	});
};

// this refers to the route path
export const path = computed(() => {
	return router.currentRoute.value;
});

// this will render the sidebar if the user is viewing a topic
export const injectSidebarComponent = watch(path, () => {
	if (path.value.params.topic) {
		$('#page-sidebar').show();
	}
	else {
		$('#page-sidebar').hide();
	}
});

export const injectMarkdownHeaders = () => {
	$('#page-sidebar-headers').empty();
	$('#md-convert h2').each((index: number, el: any) => {
		const text = el.innerText;
		const filteredText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
		const wrapper = $('<li></li>');
		const html = $(`<a href="#${filteredText}"></a>`).html(text);
		wrapper.append(html);
		$('#page-sidebar-headers').append(wrapper);
	});
};

// this section is used to render the md contents
export const injectMarkdownContent = (file: string | string[]) => {
	import('./ShowdownInjector')
		.then((module) => {
			const converter = module.converter;
			//	$(document).ready(() => {
			fetchedMd.value = false;
			$.ajax({
				url: `http://localhost:5173/src/data/courses/${file}.md`,
				type: 'GET',
				dataType: 'text',
				success: (data: any) => {
					// Parse the markdown data using Showdown
					const html = converter.makeHtml(data);
					// Update the HTML of a div with the ID 'md-convert'
					$('#md-convert').html(html);
					fetchedMd.value = true;
					injectMarkdownHeaders();
					injectClipboardAPI();
					injectScrollama();
					highlightCode();
				},
				error: function(xhr: any, status: any, error: any) {
					console.error('Error fetching markdown file:', error);
				},
			});
		})
		.catch((error) => {
			console.log(error);
			// Handle any errors that occur during the import
		});
};
