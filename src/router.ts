<<<<<<< HEAD
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
=======
import Form from './components/Form.vue';
>>>>>>> 23016490ee55fd528e319ad83647e0dded6ca1d6
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from '@stores/UserStore.ts'

const NotFound = () => import('@views/ViewNotFound.vue');
const Index = () => import('@views/ViewIndex.vue');

const setPath = (path, name, component) => {
	return {
		path: path,
		name: name ?? null,
		component: (component),
		props: true,
	};
};

const setPathChildren = (path, name, component, children) => {
	return {
		path: path,
		name: name ?? null,
		component: (component),
		props: true,
		children: children,
	};
};

const setPathChildrenNoComponent = (path, name, children) => {
	return {
		path: path,
		name: name ?? null,
		props: true,
		children: children,
	};
};

const router = createRouter({
	history: createWebHistory(),
	routes: [
<<<<<<< HEAD
		/*
		setPath('/', 'landing', Home),
		setPath('/signup', 'signup', Register),
		setPath('/login', 'login', Login),
		setPath('/password-reset/:token', 'password-reset', ResetPassword),
		setPath('/forgot-password', 'forgot-password', ForgotPassword),
		setPath('/verify-email', 'verify-email', VerifyEmail),

		setPathChildren('/admin', 'admin-account', AdminDashboard, [
			setPath('dashboard', 'admin-view-dashboard', AdminViewDashboard),

			setPathChildrenNoComponent('listing', 'admin-listing', [
				setPath(':pathMatch(.*)*', 'admin-listing-section', AdminViewListing),
				setPath('view', 'admin-view-listing', AdminViewListing),
				setPath('edit/:id', 'admin-edit-listing', AdminEditListing),
				setPath('add', 'admin-add-listing', AdminEditListing),
			]),

		]),
    */
		setPath('/', 'home', Index),
		setPath('/:pathMatch(.*)*', '404', NotFound),
=======
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
>>>>>>> 23016490ee55fd528e319ad83647e0dded6ca1d6
	],
});

router.beforeEach(async (to) => {
	NProgress.start();
	console.info(`%c[Dev Vue Router] ${to.path}`, 'color: #bada55');
	const store = useUserStore();

	const admin = /^\/admin(\/\w+)*$/;
	// router guard, as long as there is /admim, redirect if the user is not authorized
	if (to.fullPath.match(admin)) {
		await store.getUser();
		const accessLevel = store.accessLevel;
		if (accessLevel < 2) {
			return {
				name: '404',
			};
		}
	}

	if (to.path === '/admin') return '/admin/listing/view';
	/*
  to.matched.filter(async e => {
    console.log(e.path === '/admin')
    if (e.path === '/admin') {
      const store = useUserStore()
      await store.getUser()
      const accessLevel = store.accessLevel
      console.log(accessLevel)
      if (accessLevel < 2 ) {
        return {
          name: '404',
        }
      }
    }
  })
  */
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
