import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import globalMixin from './global/mixin.js';
import './styles/common.less';

import { Button } from 'vant';

document.addEventListener('gesturestart', function (event) {
  event.preventDefault();
});

createApp(App)
  .use(Button)
  .use(router)
  .mixin(globalMixin)
  .mount('#app');
