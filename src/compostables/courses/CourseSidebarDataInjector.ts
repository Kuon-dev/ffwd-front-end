// dependencies
/* eslint-disable */
import * as $ from 'jquery';
import router from '@/router'; // @ refers to src
import hljs from 'highlight.js';
import showdown from 'showdown';
import 'highlight.js/styles/base16/material-darker.css';
import scrollama from 'scrollama';

// compostable
import { watch, computed, ref } from 'vue';
/* eslint-enable */

const fetchedMd = ref(false);
const scroller = scrollama();

const converter = new showdown.Converter({
	extensions: [
		{
			// find all code and then style it
			type: 'output',
			filter: (text: any) => {
				const wrapper = $('<div></div>');
				const html = $('<div></div>').html(text);
				html.find('pre code').each((_i: any, block:any) => {
					hljs.highlightElement(block);
				});
				wrapper.append(html);
				return wrapper.html();
			},
		},
	],
});


const injectClipboardAPI = () => {
// Select all pre elements on the page
	$('pre').each((index: number, el:any) => {
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

const injectScrollama = () => {

	// Loop through each h2 element
	$('#md-convert h2').each((index: number, h2: any) => {
		const section = $('<section></section>');
		$(h2).nextUntil('h2').appendTo(section);
		section.insertBefore(h2);
		section.prepend(h2);
	});
	// setup scrollama
	scroller.setup({
		step: '#md-convert section',
		offset: 0.5,
	}).onStepEnter(({ element }) => {
		const id = $(element).find('h2').attr('id');
		const sidebarItem = $(`#page-sidebar-headers li a[href="#${id}"]`).parent();
		sidebarItem.addClass('active');
	}).onStepExit(({ element }) => {
		const id = $(element).find('h2').attr('id');
		const sidebarItem = $(`#page-sidebar-headers li a[href="#${id}"]`).parent();
		sidebarItem.removeClass('active');
	});

};

// this refers to the route path
export const path = computed(() => {
	return router.currentRoute.value;
});

export const injectSidebarComponent = watch(path, () => {
	if (path.value.params.topic) {
		$('#page-sidebar').show();
	}
	else {
		$('#page-sidebar').hide();
	}
});

export const injectMarkdownHeaders = () => {
	$('#md-convert h2').each((index: number, el: any) => {
		const text = (el.innerText);
		const filteredText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
		const wrapper = $('<li></li>');
		const html = $(`<a href="#${filteredText}"></a>`).html(text);
		wrapper.append(html);
		$('#page-sidebar-headers').append(wrapper);
	});

	injectScrollama();

};

export const injectMarkdownContent = (file: string) => {
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

			},
			error: function(xhr: any, status: any, error: any) {
				console.error('Error fetching markdown file:', error);
			},
		});
	});
};

