import Vue from 'vue';
import VueMq from 'vue-mq';
import App from './App.vue';
import store from './store';
import ApiService from './common/api.service';

Vue.config.productionTip = false;

ApiService.init();

Vue.use(VueMq, {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: Infinity,
  },
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
