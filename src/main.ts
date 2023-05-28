import { createApp, markRaw } from 'vue';
import './style.css';
import router from './router';
import App from './App.vue';

import { createPinia } from 'pinia';

/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
	faUser,
	faTrash,
	faPenToSquare,
	faPen,
	faCaretDown,
	faCaretUp,
	faSearch,
	faChevronDown,
	faCode,
	faBarsStaggered,
	faStar,
} from '@fortawesome/free-solid-svg-icons';

import {
	faEye,
	faSquareCaretLeft,
	faEyeSlash,
	faSquare,
} from '@fortawesome/free-regular-svg-icons';
/* add icons to the library */
library.add(
	faUser,
	faTrash,
	faPenToSquare,
	faPen,
	faCaretDown,
	faCaretUp,
	faSearch,
	faChevronDown,
	faEye,
	faEyeSlash,
	faSquareCaretLeft,
	faCode,
	faSquare,
	faBarsStaggered,
	faStar,
);

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, fa } from 'vuetify/iconsets/fa';
import '@fortawesome/fontawesome-free/css/all.css';

const vuetify = createVuetify({
	icons: {
		defaultSet: 'fa',
		aliases,
		sets: {
			fa,
		},
	},
});

import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });

/* add icons to the library */
const pinia = createPinia();

pinia.use(({ store }) => {
	store.router = markRaw(router);
});

import hljsVuePlugin from '@highlightjs/vue-plugin';

createApp(App)
	.use(router)
	.use(pinia)
	.use(vuetify)
	.use(hljsVuePlugin)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');
