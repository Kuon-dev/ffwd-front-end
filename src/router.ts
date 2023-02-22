import ViewLanding from './views/ViewLanding.vue'
import ViewWorks from './views/ViewWorks.vue'
import ViewContact from './views/ViewContact.vue'
import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'homepg',
			component: ViewLanding,
			props: true
		},
		{
			path: '/works',
			name: 'works',
			component: ViewWorks,
			props: true
		},
		{
			path: '/contact',
			name: 'contact',
			component: ViewContact,
			props: true
		},


    /*
		{
			path: '/:pathMatch(.*)*',
			name: 'notfound',
			props: true
		}
    */
	]
});
