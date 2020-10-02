import Vue from 'vue';
import VueMq from 'vue-mq';
import RecipeSearch from './RecipeSearch.vue';
import store from './store';
import ApiService from './common/api.service';

Vue.config.productionTip = false;

const routes = {
  '/': RecipeSearch,
};

const NotFound = { template: '<p>Page not found</p>' };

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
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
