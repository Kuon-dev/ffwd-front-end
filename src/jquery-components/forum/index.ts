import * as $ from 'jquery';

export default $(document).ready(() => {
	$('.dropdownArrow').click(() => {
		$('.dropdownBox').attr('size', $('option').length);
	});

	$('.dropdownBox').click(() => {
		$('.dropdownBox').attr('size', 1);
	});
});
