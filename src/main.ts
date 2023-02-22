import { createApp } from 'vue'
import './style.css'
import router from './router';
import App from './App.vue'


/* import font awesome icon component */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas, fab)


createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
