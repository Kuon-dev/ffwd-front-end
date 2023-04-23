interface NavigationItem
{
    title: string
    icon: string
    path: string

}

export const landingNavigation:NavigationItem[] = [
	{
		title: 'About',
		icon: '',
		path: '/about',

	},
	{
		title: 'Course',
		icon: '',
		path: '/course',
	},
	{
		title: 'Forum',
		icon: '',
		path: '/forum',
	},
];

export const courseNavigation:NavigationItem[] = [
	{
		title: 'HTML',
		icon: '',
		path: '/course/html',

	},
	{
		title: 'CSS',
		icon: '',
		path: '/course/css',
	},
	{
		title: 'Vue',
		icon: '',
		path: '/course/vue',
	},
];
