import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHistory } from 'vue-router/auto';
import { useUserStore } from 'stores/UserStore';

const router = createRouter({
	history: createWebHistory(),
});

router.beforeEach(async (to: any, from: any) => {
	const store = useUserStore();
	if (from.path === '/login') await store.getUser();
	if (!store.user) return;
	if (Object.keys(store.user).length === 0) {
		const user = await store.getUser();
		if (!user) {
			store.authUser = null;
		}
	}
	NProgress.start();
	if (to.path === '/') return;
	console.info(`%c[Dev Vue Router] ${to.path}`, 'color: #bada55');
	// if (!to.meta.requiresAuth) return;
	if (!store.user || store.user === null) return;

	const admin = /^\/admin(\/.*)?$/;
	// router guard, as long as there is /admim, redirect if the user is not authorized
	if (to.fullPath.match(admin)) {
		await store.getUser();
		const accessLevel = store.accessLevel;
		if (accessLevel < 2) {
			return '/:path(.*)';
		}
	}

	// if (to.path === '/admin') return '/admin/listing/view';
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

router.afterEach(async () => {
	NProgress.done();
});

export default router;
