import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { TOKEN_SPOONACULAR } from '@/common/jwt.service';
import { API_URL } from '@/common/config';

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  query(resource, params) {
    return Vue.axios
      .get(resource, { params: { apiKey: TOKEN_SPOONACULAR, ...params } })
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  get(resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}&apiKey=${TOKEN_SPOONACULAR}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export const RecipesService = {
  get(resource, slug) {
    return ApiService.query(resource, slug);
  },
};

export default ApiService;
