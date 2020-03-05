/* eslint-disable no-console */
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { ID_TOKEN_KEY } from '@/common/jwt.service';
import { API_URL } from '@/common/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  query(resource, params) {
    return Vue.axios.get(resource, { params: { apiKey: ID_TOKEN_KEY, ...params } }).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}&apiKey=${ID_TOKEN_KEY}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export const RecipesService = {
  get(slug) {
    return ApiService.query('findByIngredients', slug);
  },
};

export default ApiService;
