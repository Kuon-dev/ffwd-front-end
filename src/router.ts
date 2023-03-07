import Form from './components/Form.vue';
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'homepg',
			component: Form,
			props: true,
		},
		{
			path: '/works',
			name: 'works',
			component: Form,
			props: true,
		},
		{
			path: '/contact',
			name: 'contact',
			component: Form,
			props: true,
		},


		/*
		{
			path: '/:pathMatch(.*)*',
			name: 'notfound',
			props: true
		}
    */
	],
});
