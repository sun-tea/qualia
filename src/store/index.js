import Vue from 'vue';
import Vuex from 'vuex';
import recipes from './recipes.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    recipes,
  },
});
