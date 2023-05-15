import $ from 'jquery';
import scrollama from 'scrollama';
// Scrollama is a dependency used to highlight the sidebar title based on the user's
// scrolled position on the screen
export const injectScrollama = () => {
	// Loop through each h2 element
	$('#md-convert h2').each((index: number, h2: any) => {
		const section = $('<section></section>');
		$(h2).nextUntil('h2').appendTo(section);
		section.insertBefore(h2);
		section.prepend(h2);
	});
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
