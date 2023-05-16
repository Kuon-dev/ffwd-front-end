import $ from 'jquery';
import showdown from 'showdown';

export const converter = new showdown.Converter({
	extensions: [
		{
			// find all code and then style it
			type: 'output',
			filter: (text: any) => {
				const wrapper = $('<div></div>');
				const html = $('<div></div>').html(text);
				wrapper.append(html);
				return wrapper.html();
			},
		},
	],
});
