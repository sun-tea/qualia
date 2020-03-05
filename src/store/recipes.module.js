/* eslint-disable no-debugger */

import { RecipesService } from '@/common/api.service';
import { FETCH_RECIPES } from './actions.type';
import { SET_RECIPES } from './mutations.type';

const initialState = {
  recipes: [],
};

export const state = { ...initialState };

export const actions = {
  async [FETCH_RECIPES](context, slug) {
    const { data } = await RecipesService.get(slug);
    context.commit(SET_RECIPES, data);

    return data;
  },
};

export const mutations = {
  [SET_RECIPES](state, recipes) {
    state.recipes = recipes;
  },
};

export default {
  state,
  actions,
  mutations,
};
