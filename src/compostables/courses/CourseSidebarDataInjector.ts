// dependencies
/* eslint-disable */
import $ from 'jquery';
import router from '@/router'; // @ refers to src
import hljs from 'highlight.js';
import showdown from 'showdown';
import 'highlight.js/styles/base16/material-darker.css';
import scrollama from 'scrollama';

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
const converter = new showdown.Converter({
	extensions: [
		{
			// find all code and then style it
			type: 'output',
			filter: (text: any) => {
				const wrapper = $('<div></div>');
				const html = $('<div></div>').html(text);
				html.find('pre code').each((_i: any, block: any) => {
					hljs.highlightElement(block);
				});
				wrapper.append(html);
				return wrapper.html();
			},
		},
	],
});

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

// Scrollama is a dependency used to highlight the sidebar title based on the user's
// scrolled position on the screen
const injectScrollama = () => {
	// Loop through each h2 element
	$('#md-convert h2').each((index: number, h2: any) => {
		const section = $('<section></section>');
		$(h2).nextUntil('h2').appendTo(section);
		section.insertBefore(h2);
		section.prepend(h2);
	});
	console.log('injecting scrollama');
	// setup scrollama
	const scroller = scrollama();
	scroller
		.setup({
			step: '#md-convert section',
			offset: 0.5,
		})
		.onStepEnter(({ element }) => {
			const id = $(element).find('h2').attr('id');
			const sidebarItem = $(
				`#page-sidebar-headers li a[href="#${id}"]`,
			).parent();
			console.log(sidebarItem);
			sidebarItem.addClass('active');
		})
		.onStepExit(({ element }) => {
			const id = $(element).find('h2').attr('id');
			const sidebarItem = $(
				`#page-sidebar-headers li a[href="#${id}"]`,
			).parent();
			sidebarItem.removeClass('active');
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

// this section is used to inject the scrollama headers
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
	$(document).ready(() => {
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
			},
			error: function(xhr: any, status: any, error: any) {
				console.error('Error fetching markdown file:', error);
			},
		});
	});
};
