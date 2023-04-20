/* eslint-disable */
import * as $ from 'jquery';
import showdown from 'showdown';

import hljs from 'highlight.js';
import 'highlight.js/styles/stackoverflow-light.css';
/* eslint-enable */

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

export const useTopicHook = (file: string) => {
	$(document).ready(() => {
		$.ajax({
			// need to change into dynamic url
			url: `http://localhost:5173/src/data/courses/${file}.md`,
			type: 'GET',
			dataType: 'text',
			success: (data: any) => {
			// Parse the markdown data using Showdown
				const html = converter.makeHtml(data);
				// Update the HTML of a div with the ID 'md-convert'
				$('#md-convert').html(html);
			},
			error: function(xhr: any, status: any, error: any) {
				console.error('Error fetching markdown file:', error);
			},
		});
	});


};
