import { createApp, markRaw } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';

import { createPinia } from 'pinia';

/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(fas, fab, far);

import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

/* add icons to the library */
const pinia = createPinia();

pinia.use(({ store }) => {
	store.router = markRaw(router);
});

createApp(App)
	.use(router)
	.use(pinia)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');
