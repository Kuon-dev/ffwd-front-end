import * as $ from 'jquery';

// this is an example usage if jquery with ES6 Import usage
export default $(document).ready(() => {
	$('button').click(() => {
		$('p').hide();
	});
});
