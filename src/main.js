import Vue from 'vue';
import App from './App.vue';
import router from './router';
import CarbonComponentsVue from '@carbon/vue';
Vue.config.devtools = true;
Vue.use(CarbonComponentsVue);
Vue.config.productionTip = false;

import store from './store';
// import { createProvider } from './vue-apollo';

new Vue({
  router,
  store,
  // apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');