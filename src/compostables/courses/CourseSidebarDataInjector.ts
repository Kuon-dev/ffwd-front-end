// dependencies
/* eslint-disable */
import * as $ from 'jquery';
import router from '@/router'; // @ refers to src
import hljs from 'highlight.js';
import showdown from 'showdown';
import 'highlight.js/styles/stackoverflow-light.css';

// compostable
import { watch, computed, ref } from 'vue';
/* eslint-enable */

const fetchedMd = ref(false);

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

// this refers to the route path
export const path = computed(() => {
	return router.currentRoute.value;
});

export const injectSidebarComponent = watch(path, (newPath: any, oldPath: any) => {
	if (path.value.params.topic) {
		$('#page-sidebar').show();
	}
	else {
		$('#page-sidebar').hide();
	}
});

export const injectMarkdownHeaders = () => {
	const h2Values = <any>[];

	$('#md-convert h2').each((index, el) => {
		const text = (el.innerText);
		const html = $('<li></li>').html(text);
		$('#page-sidebar-headers').append(html);
	});

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

			},
			error: function(xhr: any, status: any, error: any) {
				console.error('Error fetching markdown file:', error);
			},
		});
	});
};

