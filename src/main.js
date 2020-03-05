import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ApiService from './common/api.service';

Vue.config.productionTip = false;

ApiService.init();

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
